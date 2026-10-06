import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Palette, Menu, X, ChevronRight, Sparkles } from 'lucide-react';

const themes = [
  { id: 'default', name: 'Violet Aurora', color: '#8b5cf6' },
  { id: 'cyan', name: 'Cyber Cyan', color: '#06b6d4' },
  { id: 'emerald', name: 'Emerald Matrix', color: '#10b981' },
  { id: 'amber', name: 'Solar Amber', color: '#f59e0b' },
  { id: 'rose', name: 'Neon Rose', color: '#f43f5e' }
];

export default function Navbar({ onOpenTerminal, activeTheme, onChangeTheme }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const navUnderlineRef = useRef(null);
  const navLinksRef = useRef(null);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'playground', label: 'Code' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 30);

      // Scrollspy
      const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s.offsetTop <= scrollPos) {
          setActiveSection(s.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update underline indicator position
  useEffect(() => {
    if (!navLinksRef.current || !navUnderlineRef.current) return;
    const activeLink = navLinksRef.current.querySelector(`[data-nav="${activeSection}"]`);
    if (activeLink) {
      const linkRect = activeLink.getBoundingClientRect();
      const parentRect = navLinksRef.current.getBoundingClientRect();
      navUnderlineRef.current.style.left = `${linkRect.left - parentRect.left}px`;
      navUnderlineRef.current.style.width = `${linkRect.width}px`;
      navUnderlineRef.current.style.opacity = '1';
    } else {
      navUnderlineRef.current.style.opacity = '0';
    }
  }, [activeSection]);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollProgress}%`,
          background: 'var(--accent-gradient)',
          zIndex: 1000,
          transition: 'width 0.1s ease-out',
          boxShadow: '0 0 10px var(--accent-glow)'
        }}
        aria-hidden="true"
      />

      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 900,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: isScrolled ? '12px 32px' : '18px 36px',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: isScrolled ? 'rgba(7, 7, 20, 0.88)' : 'rgba(11, 11, 26, 0.65)',
          borderBottom: '1px solid var(--border)',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('hero');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '19px',
            letterSpacing: '0.3px',
            color: '#fff'
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '15px',
              fontWeight: 900,
              color: '#070714',
              boxShadow: '0 0 14px var(--accent-glow)'
            }}
          >
            V
          </div>
          <span>
            Vignesh <span style={{ color: 'var(--accent)' }}>D</span>
          </span>
          <span
            style={{
              fontSize: '10px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: 'var(--accent-secondary)',
              background: 'rgba(6, 182, 212, 0.12)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              padding: '2px 8px',
              borderRadius: '12px',
              marginLeft: '4px'
            }}
          >
            DEV
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div
          ref={navLinksRef}
          className="nav-desktop-links"
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border)',
            padding: '4px 6px',
            borderRadius: '99px'
          }}
        >
          {/* Animated Sliding Underline/Pill */}
          <div
            ref={navUnderlineRef}
            style={{
              position: 'absolute',
              top: '4px',
              bottom: '4px',
              left: 0,
              width: 0,
              background: 'var(--accent-gradient)',
              borderRadius: '99px',
              zIndex: 1,
              transition: 'left 0.35s cubic-bezier(0.16, 1, 0.3, 1), width 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              pointerEvents: 'none'
            }}
          />

          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                data-nav={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  fontSize: '13.5px',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#070714' : 'var(--text-1)',
                  padding: '7px 15px',
                  borderRadius: '99px',
                  transition: 'color 0.25s ease',
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Right Action Icons: Terminal, Theme Selector, Mobile Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            className="btn-terminal"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 14px',
              borderRadius: '99px',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
            title="Open Interactive Linux/Python Terminal"
          >
            <Terminal size={14} style={{ color: 'var(--accent-secondary)' }} />
            <span style={{ fontWeight: 600 }}>CLI</span>
          </button>

          {/* Theme Palette Switcher Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 12px',
                borderRadius: '99px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border)',
                color: 'var(--text-1)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title="Change Accent Color Theme"
            >
              <Palette size={15} style={{ color: 'var(--accent)' }} />
              <div
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  boxShadow: '0 0 6px var(--accent)'
                }}
              />
            </button>

            {themeDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 10px)',
                  right: 0,
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-hover)',
                  borderRadius: '16px',
                  padding: '8px',
                  minWidth: '170px',
                  boxShadow: '0 16px 36px -8px rgba(0,0,0,0.7)',
                  zIndex: 1001,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--text-2)',
                    padding: '4px 10px 6px',
                    letterSpacing: '1px'
                  }}
                >
                  Accent Theme
                </div>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onChangeTheme(t.id);
                      setThemeDropdownOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 12px',
                      borderRadius: '10px',
                      background: activeTheme === t.id ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                      color: activeTheme === t.id ? '#fff' : 'var(--text-1)',
                      fontSize: '13px',
                      fontWeight: activeTheme === t.id ? 600 : 400,
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'background 0.2s ease'
                    }}
                  >
                    <span
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: t.color,
                        boxShadow: `0 0 8px ${t.color}`
                      }}
                    />
                    <span>{t.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav-toggle"
            style={{
              display: 'none',
              padding: '8px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border)',
              color: 'var(--text-0)',
              cursor: 'pointer'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '65px',
            background: 'rgba(7, 7, 20, 0.96)',
            backdropFilter: 'blur(20px)',
            zIndex: 890,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 18px',
                borderRadius: '14px',
                background: activeSection === item.id ? 'var(--bg-card-solid)' : 'rgba(255,255,255,0.03)',
                border: activeSection === item.id ? '1px solid var(--border-accent)' : '1px solid var(--border)',
                color: activeSection === item.id ? 'var(--accent)' : 'var(--text-0)',
                fontSize: '16px',
                fontWeight: 600,
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              <span>{item.label}</span>
              <ChevronRight size={18} style={{ opacity: 0.6 }} />
            </button>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTerminal();
            }}
            style={{
              marginTop: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '14px',
              borderRadius: '14px',
              background: 'rgba(6, 182, 212, 0.12)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              color: 'var(--accent-secondary)',
              fontWeight: 700,
              fontSize: '15px'
            }}
          >
            <Terminal size={18} />
            <span>Launch Linux / Python CLI</span>
          </button>
        </div>
      )}

      {/* Responsive media styling for desktop vs mobile nav */}
      <style>{`
        @media (max-width: 900px) {
          .nav-desktop-links {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}

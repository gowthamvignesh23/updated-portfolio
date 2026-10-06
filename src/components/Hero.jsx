import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  FileText, 
  Mail, 
  Phone, 
  Sparkles, 
  Briefcase, 
  Award, 
  Code, 
  Cpu 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [counts, setCounts] = useState(personalInfo.stats.map(() => 0));
  const [hasCounted, setHasCounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const photoFrameRef = useRef(null);
  const statsRef = useRef(null);

  // Role cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Animated counters on intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);
          const duration = 1500;
          const startTime = performance.now();

          const animateCounts = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            const nextCounts = personalInfo.stats.map((stat) => {
              const currentVal = stat.value * easeProgress;
              return stat.decimals ? parseFloat(currentVal.toFixed(stat.decimals)) : Math.round(currentVal);
            });

            setCounts(nextCounts);

            if (progress < 1) {
              requestAnimationFrame(animateCounts);
            } else {
              setCounts(personalInfo.stats.map((s) => s.value));
            }
          };

          requestAnimationFrame(animateCounts);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, [hasCounted]);

  // 3D Tilt for photo frame on mouse move
  const handlePhotoMouseMove = (e) => {
    if (!photoFrameRef.current) return;
    const rect = photoFrameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -12;
    const rotY = ((x - centerX) / centerX) * 12;
    setMousePos({ x: rotX, y: rotY });
  };

  const handlePhotoMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="hero" style={{ minHeight: 'calc(100vh - 75px)', display: 'flex', alignItems: 'center', paddingTop: '40px' }}>
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Intro & Info */}
          <div className="hero-text-content">
            {/* Hi Line with waving hand */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '17px',
                fontWeight: 600,
                color: 'var(--text-1)',
                marginBottom: '16px',
                background: 'rgba(255, 255, 255, 0.04)',
                padding: '6px 16px',
                borderRadius: '99px',
                border: '1px solid var(--border)'
              }}
            >
              <span style={{ display: 'inline-block', animation: 'wave 2.2s infinite', transformOrigin: '70% 70%' }}>
                👋
              </span>
              <span>Hello world, I am</span>
            </div>

            {/* Main Name & Animated Gradient Title */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(44px, 5.8vw, 70px)',
                lineHeight: 1.05,
                letterSpacing: '-1.5px',
                marginBottom: '16px'
              }}
            >
              {personalInfo.name} <br />
              <span
                style={{
                  background: 'linear-gradient(100deg, var(--accent), var(--accent-secondary) 60%, var(--coral))',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradmove 6s ease-in-out infinite'
                }}
              >
                Building with Python
              </span>
            </h1>

            {/* Dynamic Role Cycler */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                height: '42px',
                marginBottom: '22px'
              }}
            >
              <span
                style={{
                  fontSize: '18px',
                  fontWeight: 500,
                  color: 'var(--text-2)'
                }}
              >
                Specializing as:
              </span>
              <div
                style={{
                  position: 'relative',
                  height: '42px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <div
                  key={roleIndex}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 2.5vw, 24px)',
                    color: 'var(--accent-secondary)',
                    animation: 'fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                  }}
                >
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: 'var(--accent-secondary)',
                      boxShadow: '0 0 12px var(--accent-secondary)'
                    }}
                  />
                  <span>{personalInfo.roles[roleIndex]}</span>
                </div>
              </div>
            </div>

            {/* Bio paragraph */}
            <p
              style={{
                fontSize: '16px',
                color: 'var(--text-1)',
                maxWidth: '560px',
                lineHeight: 1.7,
                marginBottom: '32px'
              }}
            >
              {personalInfo.bio}
            </p>

            {/* Live Stats Row with animated counters */}
            <div
              ref={statsRef}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                gap: '20px',
                marginBottom: '36px',
                padding: '20px 24px',
                background: 'rgba(21, 21, 46, 0.5)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {personalInfo.stats.map((stat, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: '30px',
                      lineHeight: 1.1,
                      background: 'var(--accent-gradient)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'flex',
                      alignItems: 'baseline'
                    }}
                  >
                    <span>{counts[i]}</span>
                    <span style={{ fontSize: '18px', marginLeft: '2px' }}>{stat.suffix}</span>
                  </div>
                  <div
                    style={{
                      fontSize: '12.5px',
                      color: 'var(--text-2)',
                      fontWeight: 500,
                      marginTop: '4px'
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap',
                marginBottom: '32px'
              }}
            >
              <a href="#contact" className="btn btn-primary">
                <span>Get in touch</span>
                <ArrowRight size={16} />
              </a>

              <a href="#projects" className="btn btn-secondary">
                <span>Explore projects</span>
              </a>

              <button
                onClick={onOpenTerminal}
                className="btn btn-terminal"
                title="Launch Linux/Python CLI Terminal"
              >
                <Terminal size={16} />
                <span>Launch CLI</span>
              </button>

              <button
                onClick={onOpenResume}
                className="btn btn-secondary"
                title="View Resume Summary"
              >
                <FileText size={16} />
                <span>Resume CV</span>
              </button>
            </div>

            {/* Social Pills */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={personalInfo.socials[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="tag"
                style={{ padding: '8px 16px', borderRadius: '99px' }}
              >
                <Github size={15} style={{ color: 'var(--accent)' }} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.socials[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="tag"
                style={{ padding: '8px 16px', borderRadius: '99px' }}
              >
                <Linkedin size={15} style={{ color: 'var(--cyan)' }} />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.socials[2].url}
                className="tag"
                style={{ padding: '8px 16px', borderRadius: '99px' }}
              >
                <Mail size={15} style={{ color: 'var(--coral)' }} />
                <span>Email</span>
              </a>
              <a
                href={personalInfo.socials[3].url}
                className="tag"
                style={{ padding: '8px 16px', borderRadius: '99px' }}
              >
                <Phone size={15} style={{ color: 'var(--emerald)' }} />
                <span>+91 93458 99069</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Photo Stage & Floating Chips */}
          <div
            className="hero-photo-stage"
            onMouseMove={handlePhotoMouseMove}
            onMouseLeave={handlePhotoMouseLeave}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              perspective: '1000px'
            }}
          >
            {/* Ambient Glow */}
            <div
              style={{
                position: 'absolute',
                width: '380px',
                height: '380px',
                borderRadius: '50%',
                background: 'var(--accent-gradient)',
                filter: 'blur(70px)',
                opacity: 0.35,
                animation: 'pulseGlow 6s infinite ease-in-out',
                zIndex: 0
              }}
            />

            {/* 3D Tilted Photo Frame */}
            <div
              ref={photoFrameRef}
              className="tilt-card"
              style={{
                position: 'relative',
                width: '320px',
                borderRadius: '30px',
                overflow: 'hidden',
                border: '2px solid rgba(255, 255, 255, 0.14)',
                boxShadow: '0 30px 80px -25px rgba(0, 0, 0, 0.8), 0 0 40px -10px var(--accent-glow)',
                transform: `rotateX(${mousePos.x}deg) rotateY(${mousePos.y}deg)`,
                zIndex: 2,
                background: 'var(--bg-card-solid)',
                animation: 'floatBob 7s ease-in-out infinite'
              }}
            >
              {/* Profile Image */}
              <img
                src={personalInfo.profilePhoto}
                alt={personalInfo.name}
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'contrast(1.04) brightness(1.02)'
                }}
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML += `<div style="height:380px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#15152e,#222248);color:#fff;"><h2 style="font-size:28px;margin-bottom:8px;">Vignesh D</h2><p style="color:#06b6d4;">Python Developer</p></div>`;
                }}
              />

              {/* Status Banner */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '24px 20px 18px',
                  background: 'linear-gradient(0deg, rgba(7, 7, 20, 0.95) 15%, rgba(7, 7, 20, 0.7) 65%, transparent 100%)',
                  zIndex: 3
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '22px',
                    color: '#fff',
                    letterSpacing: '0.2px'
                  }}
                >
                  {personalInfo.name}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--accent-secondary)',
                    marginTop: '4px'
                  }}
                >
                  {/* Pulsing live dot */}
                  <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px' }}>
                    <span
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        background: '#10b981',
                        animation: 'ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite'
                      }}
                    />
                    <span
                      style={{
                        position: 'relative',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#10b981'
                      }}
                    />
                  </span>
                  <span>Available for Full-time Roles</span>
                </div>
              </div>
            </div>

            {/* Floating Orbital Badges */}
            <div
              className="float-chip chip-1"
              style={{
                position: 'absolute',
                top: '5%',
                left: '-10%',
                zIndex: 3,
                color: 'var(--accent)',
                borderColor: 'var(--accent)',
                animation: 'floatBob 5s ease-in-out infinite'
              }}
            >
              🐍 Python Core
            </div>

            <div
              className="float-chip chip-2"
              style={{
                position: 'absolute',
                bottom: '12%',
                right: '-10%',
                zIndex: 3,
                color: 'var(--cyan)',
                borderColor: 'var(--cyan)',
                animation: 'floatBob 6s ease-in-out infinite 1.2s'
              }}
            >
              🐧 Linux & Git
            </div>

            <div
              className="float-chip chip-3"
              style={{
                position: 'absolute',
                top: '45%',
                right: '-16%',
                zIndex: 3,
                color: 'var(--coral)',
                borderColor: 'var(--coral)',
                animation: 'floatBob 5.5s ease-in-out infinite 2.5s'
              }}
            >
              ⚡ REST APIs
            </div>

            <div
              className="float-chip chip-4"
              style={{
                position: 'absolute',
                bottom: '30%',
                left: '-14%',
                zIndex: 3,
                color: 'var(--emerald)',
                borderColor: 'var(--emerald)',
                animation: 'floatBob 4.8s ease-in-out infinite 1.8s'
              }}
            >
              🤖 Machine Learning
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 60px;
          align-items: center;
          width: 100%;
        }

        .float-chip {
          font-size: 13px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 99px;
          background: rgba(21, 21, 46, 0.88);
          border: 1px solid var(--border);
          backdrop-filter: blur(12px);
          box-shadow: 0 12px 28px -10px rgba(0, 0, 0, 0.7);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .hero-photo-stage {
            order: -1;
            margin-bottom: 10px;
          }
          .float-chip {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

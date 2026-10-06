import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: 'rgba(7, 7, 18, 0.95)',
        padding: '36px 0',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          {/* Left Brand & Details */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '18px',
                color: '#fff',
                marginBottom: '4px'
              }}
            >
              Vignesh <span style={{ color: 'var(--accent)' }}>D</span>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-2)' }}>
              Built with React, Vite, Canvas API, and modern CSS architecture.
            </div>
          </div>

          {/* Center tech pills */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['React', 'Vite', 'Python', 'Clean Code', 'Bengaluru'].map((item, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--text-2)',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border)'
                }}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Right Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-2)' }}>
              © 2026 Vignesh D
            </span>

            <button
              onClick={scrollToTop}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-1)',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

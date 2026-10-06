import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Code2 } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) {
      document.body.style.overflow = 'unset';
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: '36px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-hover)',
          borderRadius: '26px'
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                fontSize: '12px',
                fontWeight: 700,
                color: project.color || 'var(--accent)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '8px'
              }}
            >
              {project.category} • {project.period}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '26px',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.2
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--text-1)',
                marginTop: '6px',
                fontWeight: 500
              }}
            >
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '10px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--border)',
              color: 'var(--text-1)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            title="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Overview */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--accent-secondary)',
                marginBottom: '8px'
              }}
            >
              Project Overview
            </h4>
            <p style={{ fontSize: '14.5px', color: 'var(--text-1)', lineHeight: 1.7 }}>
              {project.description}
            </p>
          </div>

          {/* Problem Solved */}
          {project.problemSolved && (
            <div
              style={{
                padding: '18px 22px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                border: '1px solid var(--border)'
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '6px'
                }}
              >
                Core Engineering Objective
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-1)', lineHeight: 1.6 }}>
                {project.problemSolved}
              </p>
            </div>
          )}

          {/* Architecture */}
          {project.architecture && (
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Layers size={18} />
                <span>Architecture & Implementation</span>
              </h4>
              <p style={{ fontSize: '14.5px', color: 'var(--text-1)', lineHeight: 1.7 }}>
                {project.architecture}
              </p>
            </div>
          )}

          {/* Key Highlights */}
          {project.highlights && (
            <div>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '12px'
                }}
              >
                Key Technical Highlights
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2
                      size={17}
                      style={{ color: 'var(--emerald)', marginTop: '3px', flexShrink: 0 }}
                    />
                    <span style={{ fontSize: '14px', color: 'var(--text-1)', lineHeight: 1.5 }}>
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '15px',
                fontWeight: 700,
                color: 'var(--text-2)',
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                marginBottom: '12px'
              }}
            >
              Technologies & Frameworks
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="tag"
                  style={{
                    borderColor: 'var(--border-accent)',
                    background: 'rgba(139, 92, 246, 0.08)'
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div
            style={{
              display: 'flex',
              gap: '14px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border)',
              marginTop: '10px'
            }}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '10px 20px', fontSize: '14px' }}
              >
                <Github size={16} />
                <span>Source Repository</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="btn btn-primary"
              style={{ padding: '10px 24px', fontSize: '14px', marginLeft: 'auto' }}
            >
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

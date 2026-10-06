import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <ScrollReveal animation="fadeUp" delay={0}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 50px' }}>
            <div className="eyebrow">Work History</div>
            <h2 className="section-title heading-decorated" style={{ display: 'block' }}>Experience & Professional Training</h2>
            <div className="section-divider centered" style={{ marginTop: '16px' }} />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Hands-on technical experience spanning enterprise Python full-stack engineering and applied machine learning research.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline wrapper */}
        <div
          className="hover-group"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
            paddingLeft: '32px'
          }}
        >
          {/* Vertical glowing line */}
          <div
            style={{
              position: 'absolute',
              left: '9px',
              top: '12px',
              bottom: '12px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--violet), var(--cyan), var(--coral))',
              boxShadow: '0 0 12px var(--accent-glow)'
            }}
          />

          {experienceData.map((exp, idx) => (
            <ScrollReveal
              key={idx}
              animation="fadeUp"
              delay={idx * 150}
              className="hover-group-item"
              style={{
                position: 'relative',
                marginBottom: idx === experienceData.length - 1 ? 0 : '48px'
              }}
            >
              {/* Dot indicator */}
              <div
                style={{
                  position: 'absolute',
                  left: '-32px',
                  top: '6px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--bg-deep)',
                  border: `2px solid ${exp.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 14px ${exp.color}`,
                  zIndex: 2
                }}
              >
                <div
                  className="pulse-ring"
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: exp.color
                  }}
                />
              </div>

              {/* Card content */}
              <div
                className="glass-card card-lift"
                style={{
                  padding: '32px',
                  borderLeft: `3px solid ${exp.color}`,
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginBottom: '10px'
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '4px'
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        fontSize: '15px',
                        fontWeight: 600,
                        color: exp.color
                      }}
                    >
                      {exp.company}
                    </div>
                  </div>

                  {/* Period & Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--text-2)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        border: '1px solid var(--border)'
                      }}
                    >
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </span>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: exp.color,
                        background: `rgba(255, 255, 255, 0.05)`,
                        padding: '4px 12px',
                        borderRadius: '12px',
                        border: `1px solid ${exp.color}`
                      }}
                    >
                      {exp.badge}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    color: 'var(--text-2)',
                    marginBottom: '16px'
                  }}
                >
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>

                {/* Summary */}
                <p
                  style={{
                    fontSize: '14.5px',
                    color: 'var(--text-1)',
                    marginBottom: '18px',
                    lineHeight: 1.6
                  }}
                >
                  {exp.summary}
                </p>

                {/* Bulleted Achievements */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px', listStyle: 'none', padding: 0 }}>
                  {exp.highlights.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontSize: '14px',
                        color: 'var(--text-1)',
                        lineHeight: 1.6
                      }}
                    >
                      <CheckCircle
                        size={16}
                        style={{ color: 'var(--accent-secondary)', marginTop: '3px', flexShrink: 0 }}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="tag tag-pop"
                      style={{ fontSize: '12px', padding: '4px 12px', cursor: 'default' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

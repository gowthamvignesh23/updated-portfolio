import React from 'react';
import { GraduationCap, Award, BookOpen, Globe, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <ScrollReveal animation="fadeUp" delay={0}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 50px' }}>
            <div className="eyebrow">Academic Background</div>
            <h2 className="section-title heading-decorated" style={{ display: 'block' }}>Education & Verified Credentials</h2>
            <div className="section-divider centered" style={{ marginTop: '16px' }} />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Formal engineering degree foundations alongside industry-recognized technical certifications and awards.
            </p>
          </div>
        </ScrollReveal>

        {/* Education & Certs 2-column grid */}
        <div
          className="hover-group"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
            gap: '28px'
          }}
        >
          {/* Degree Card */}
          <ScrollReveal animation="fadeLeft" delay={100} className="hover-group-item">
            <div
              className="glass-card card-lift"
              style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px'
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(139, 92, 246, 0.15)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--violet)'
                    }}
                  >
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#fff'
                      }}
                    >
                      {educationData.degree}
                    </h3>
                    <div style={{ fontSize: '14.5px', color: 'var(--text-1)' }}>
                      {educationData.institution}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    margin: '16px 0 24px',
                    flexWrap: 'wrap'
                  }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--cyan)',
                      background: 'rgba(6, 182, 212, 0.1)',
                      border: '1px solid rgba(6, 182, 212, 0.3)',
                      padding: '6px 14px',
                      borderRadius: '20px'
                    }}
                  >
                    CGPA {educationData.cgpa}
                  </span>

                  <span style={{ fontSize: '13px', color: 'var(--text-2)', fontWeight: 500 }}>
                    {educationData.location} • {educationData.graduation}
                  </span>
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: 'var(--text-2)',
                      marginBottom: '12px'
                    }}
                  >
                    Relevant Engineering Coursework
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {educationData.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="tag tag-pop"
                        style={{ fontSize: '12px', padding: '5px 12px', cursor: 'default' }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div
                style={{
                  marginTop: '28px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border)'
                }}
              >
                <div
                  style={{
                    fontSize: '12.5px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--text-2)',
                    letterSpacing: '1px',
                    marginBottom: '10px'
                  }}
                >
                  Language Fluency
                </div>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  {educationData.languages.map((l, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '13.5px',
                        color: 'var(--text-1)'
                      }}
                    >
                      <span>{l.flag}</span>
                      <strong style={{ color: '#fff' }}>{l.name}</strong>
                      <span style={{ color: 'var(--text-2)', fontSize: '12px' }}>({l.proficiency})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications Card */}
          <ScrollReveal animation="fadeRight" delay={150} className="hover-group-item">
            <div
              className="glass-card card-lift"
              style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--cyan)'
                  }}
                >
                  <Award size={22} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#fff'
                    }}
                  >
                    Certifications & Honors
                  </h3>
                  <div style={{ fontSize: '13.5px', color: 'var(--text-2)' }}>
                    Continuous learning & industry recognition
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {educationData.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="card-lift"
                    style={{
                      padding: '16px 20px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '16px',
                      border: '1px solid var(--border)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '4px'
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '15.5px',
                          fontWeight: 700,
                          color: '#fff'
                        }}
                      >
                        {cert.title}
                      </h4>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: 'var(--emerald)',
                          background: 'rgba(16, 185, 129, 0.1)',
                          padding: '2px 8px',
                          borderRadius: '10px',
                          border: '1px solid rgba(16, 185, 129, 0.25)'
                        }}
                      >
                        {cert.date}
                      </span>
                    </div>

                    <div style={{ fontSize: '13px', color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '6px' }}>
                      {cert.issuer}
                    </div>

                    <p style={{ fontSize: '13px', color: 'var(--text-2)', lineHeight: 1.5 }}>
                      {cert.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

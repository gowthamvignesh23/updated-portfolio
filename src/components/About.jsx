import React from 'react';
import { Code2, BrainCircuit, Layers, Cpu, CheckCircle2, MapPin, GraduationCap, Flame } from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const pillars = [
    {
      icon: Code2,
      color: 'var(--violet)',
      title: 'Python & Backend Architecture',
      desc: 'Solid grasp of Object-Oriented Programming (OOP), modular architecture, clean code practices, and RESTful API endpoints. Quick to master frameworks like Flask and Django.'
    },
    {
      icon: BrainCircuit,
      color: 'var(--cyan)',
      title: 'AI & Supervised Learning',
      desc: 'Hands-on experience during AI internship implementing regression/classification models, performance metrics (ROC-AUC, Precision/Recall), and Generative AI workflows.'
    },
    {
      icon: Layers,
      color: 'var(--coral)',
      title: 'Python Full Stack Web Engineering',
      desc: '6-Month Python Full Stack Course at BDreamz Global Solutions (Bengaluru): engineered responsive web applications using Python, React.js, MySQL, and optimized REST APIs.'
    },
    {
      icon: Cpu,
      color: 'var(--amber)',
      title: 'Hardware & IoT Telemetry',
      desc: 'Electronics & Communication Engineering background bridging software and hardware: ESP8266 microcontrollers, sensor data ingestion, and cloud MQTT pipelines.'
    }
  ];

  return (
    <section id="about">
      <div className="container">
        <ScrollReveal animation="fadeUp" delay={0}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 50px' }}>
            <div className="eyebrow">About Me</div>
            <h2 className="section-title heading-decorated" style={{ display: 'block' }}>Engineering with Purpose & Precision</h2>
            <div className="section-divider centered" style={{ marginTop: '16px' }} />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A fusion of rigorous hardware engineering foundations and passionate software development.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div
          className="hover-group"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px'
          }}
        >
          {/* Main Story Card (8 columns) */}
          <ScrollReveal animation="fadeLeft" delay={100} className="about-grid-item hover-group-item" style={{ gridColumn: 'span 8' }}>
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
                    gap: '10px',
                    marginBottom: '20px'
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '12px',
                      background: 'rgba(139, 92, 246, 0.15)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--violet)'
                    }}
                  >
                    <Flame size={20} />
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '22px',
                      fontWeight: 700
                    }}
                  >
                    Background & Career Trajectory
                  </h3>
                </div>

                <p
                  style={{
                    fontSize: '15.5px',
                    color: 'var(--text-1)',
                    lineHeight: 1.75,
                    marginBottom: '18px'
                  }}
                >
                  I hold a{' '}
                  <strong style={{ color: '#fff' }}>B.E. in Electronics and Communication Engineering</strong>{' '}
                  (CGPA <span style={{ color: 'var(--accent-secondary)', fontWeight: 700 }}>8.50 / 10</span>) along with verified
                  Python programming credentials. During my AI internship at Brainery Spot Technology, I gained hands-on
                  experience building <span style={{ color: 'var(--accent)', fontWeight: 600 }}>supervised learning pipelines</span>{' '}
                  and model evaluation techniques using Python ML tools.
                </p>

                <p
                  style={{
                    fontSize: '15.5px',
                    color: 'var(--text-1)',
                    lineHeight: 1.75,
                    marginBottom: '24px'
                  }}
                >
                  During my 6-month <span style={{ color: 'var(--coral)', fontWeight: 600 }}>Python Full Stack Course at BDreamz Global Solutions</span>{' '}
                  (Bengaluru), I engineered responsive full-stack applications using <strong style={{ color: '#fff' }}>Python, React.js, and MySQL</strong>.
                  I designed RESTful APIs for seamless frontend-backend integration, created optimized SQL schemas, and collaborated through code reviews and Agile practices on{' '}
                  <strong style={{ color: '#fff' }}>Git and GitHub</strong>. I am now actively targeting software developer and Python backend engineering roles.
                </p>
              </div>

              {/* Core Values checklist */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border)'
                }}
              >
                {[
                  'Clean Code & OOP Architecture',
                  'Linux & Shell Command Mastery',
                  'RESTful Protocol & API Design',
                  'Rapid Adaptability to Tech Stacks'
                ].map((val, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-0)' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--emerald)', flexShrink: 0 }} />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Info & Location Card (4 columns) */}
          <ScrollReveal animation="fadeRight" delay={150} className="about-grid-item hover-group-item" style={{ gridColumn: 'span 4' }}>
            <div
              className="glass-card card-lift"
              style={{
                padding: '34px 28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(21, 21, 46, 0.7), rgba(15, 15, 34, 0.9))'
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px',
                    fontWeight: 700,
                    marginBottom: '20px'
                  }}
                >
                  Quick Facts
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <MapPin size={18} style={{ color: 'var(--accent-secondary)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-2)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Location
                      </div>
                      <div style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--text-0)' }}>
                        Bengaluru, Karnataka, India
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <GraduationCap size={18} style={{ color: 'var(--violet)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-2)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Education & Degree
                      </div>
                      <div style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--text-0)' }}>
                        B.E. Electronics & Communication
                      </div>
                      <div style={{ fontSize: '12.5px', color: 'var(--accent-secondary)' }}>
                        CGPA 8.50 / 10 (Graduated 2026)
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <BrainCircuit size={18} style={{ color: 'var(--amber)', marginTop: '2px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-2)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Primary Focus
                      </div>
                      <div style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--text-0)' }}>
                        Python Backend & Machine Learning
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: '28px',
                  padding: '16px',
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1px solid rgba(6, 182, 212, 0.25)',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent-secondary)', textTransform: 'uppercase' }}>
                  Availability Status
                </div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginTop: '4px' }}>
                  Actively Interviewing
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 4 Pillars (3 columns each) */}
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <ScrollReveal
                key={i}
                animation="fadeUp"
                delay={200 + i * 80}
                className="about-grid-item hover-group-item"
                style={{ gridColumn: 'span 3' }}
              >
                <div
                  className="glass-card card-lift"
                  style={{
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    height: '100%',
                    borderTop: `2px solid ${p.color}`
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '14px',
                      background: `rgba(255, 255, 255, 0.05)`,
                      border: `1px solid ${p.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: p.color
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '17px',
                      fontWeight: 700,
                      color: '#fff'
                    }}
                  >
                    {p.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'var(--text-1)',
                      lineHeight: 1.6
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #about .about-grid-item {
            grid-column: span 6 !important;
          }
        }
        @media (max-width: 680px) {
          #about .about-grid-item {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </section>
  );
}

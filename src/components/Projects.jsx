import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Projects({ onSelectProject }) {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [tiltStyles, setTiltStyles] = useState({});

  const filterOptions = ['All', 'Python & AI', 'Web Development', 'IoT & Embedded'];

  const filteredProjects =
    selectedFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  const handleMouseMove = (e, id) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotX = ((y / rect.height) - 0.5) * -10;
    const rotY = ((x / rect.width) - 0.5) * 10;
    setTiltStyles((prev) => ({
      ...prev,
      [id]: {
        transform: `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px)`,
        glare: { x: `${(x / rect.width) * 100}%`, y: `${(y / rect.height) * 100}%` }
      }
    }));
  };

  const handleMouseLeave = (id) => {
    setTiltStyles((prev) => ({
      ...prev,
      [id]: {
        transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)',
        glare: null
      }
    }));
  };

  return (
    <section id="projects">
      <div className="container">
        <ScrollReveal animation="fadeUp" delay={0}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
            <div className="eyebrow">Portfolio Showcase</div>
            <h2 className="section-title heading-decorated" style={{ display: 'block' }}>Projects & Engineered Systems</h2>
            <div className="section-divider centered" style={{ marginTop: '16px' }} />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A selection of software applications, IoT telemetry hardware integrations, and machine learning pipelines.
            </p>

            {/* Filter Pills */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                marginTop: '28px'
              }}
            >
              {filterOptions.map((f) => {
                const isActive = selectedFilter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setSelectedFilter(f)}
                    className="magnetic-btn"
                    style={{
                      padding: '8px 20px',
                      borderRadius: '99px',
                      fontSize: '13.5px',
                      fontWeight: isActive ? 700 : 500,
                      background: isActive ? 'var(--accent-gradient)' : 'rgba(255, 255, 255, 0.04)',
                      color: isActive ? '#070714' : 'var(--text-1)',
                      border: isActive ? 'none' : '1px solid var(--border)',
                      boxShadow: isActive ? '0 4px 20px -4px var(--accent-glow)' : 'none',
                      transition: 'all 0.25s ease',
                      cursor: 'pointer'
                    }}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid with hover-group dimming */}
        <div
          className="hover-group"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredProjects.map((p, idx) => {
            const tilt = tiltStyles[p.id] || { transform: '' };
            return (
              <ScrollReveal
                key={p.id}
                animation="fadeUp"
                delay={idx * 120}
                className="hover-group-item"
              >
                <div
                  onMouseMove={(e) => handleMouseMove(e, p.id)}
                  onMouseLeave={() => handleMouseLeave(p.id)}
                  className="glass-card tilt-card card-lift"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '24px',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-card)',
                    transform: tilt.transform,
                    transition: 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease',
                    cursor: 'pointer',
                    height: '100%',
                    overflow: 'hidden'
                  }}
                  onClick={() => onSelectProject(p)}
                >
                  {/* Top colored accent stripe */}
                  <div
                    style={{
                      height: '5px',
                      background: `linear-gradient(90deg, ${p.color || 'var(--accent)'}, var(--accent-secondary))`
                    }}
                  />

                  <div
                    style={{
                      padding: '32px',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                      justifyContent: 'space-between',
                      position: 'relative'
                    }}
                  >
                    {/* Subtle Glare reflection */}
                    {tilt.glare && (
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          pointerEvents: 'none',
                          background: `radial-gradient(circle at ${tilt.glare.x} ${tilt.glare.y}, rgba(255,255,255,0.06), transparent 70%)`,
                          borderRadius: '24px'
                        }}
                      />
                    )}

                    <div>
                      {/* Meta row */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '12px'
                        }}
                      >
                        <span
                          style={{
                            fontSize: '11.5px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            color: p.color || 'var(--accent-secondary)',
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '3px 10px',
                            borderRadius: '8px',
                            border: '1px solid var(--border)'
                          }}
                        >
                          {p.category}
                        </span>
                        <span style={{ fontSize: '12.5px', color: 'var(--text-2)', fontWeight: 500 }}>
                          {p.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '21px',
                          fontWeight: 700,
                          color: '#fff',
                          marginBottom: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        <span>{p.title}</span>
                        <ArrowUpRight
                          size={18}
                          className="arrow-link"
                          style={{
                            opacity: 0.7,
                            color: 'var(--accent-secondary)',
                            transition: 'transform 0.25s ease, opacity 0.25s ease'
                          }}
                        />
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: '14.5px',
                          color: 'var(--text-1)',
                          lineHeight: 1.65,
                          marginBottom: '20px'
                        }}
                      >
                        {p.description}
                      </p>
                    </div>

                    {/* Bottom: Tech tags & buttons */}
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '6px',
                          marginBottom: '24px'
                        }}
                      >
                        {p.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="tag-pop"
                            style={{
                              fontSize: '11.5px',
                              fontWeight: 500,
                              color: 'var(--text-2)',
                              background: 'rgba(255, 255, 255, 0.03)',
                              padding: '4px 10px',
                              borderRadius: '12px',
                              border: '1px solid var(--border)',
                              cursor: 'default'
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingTop: '16px',
                          borderTop: '1px solid var(--border)'
                        }}
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProject(p);
                          }}
                          className="link-underline"
                          style={{
                            fontSize: '13px',
                            fontWeight: 600,
                            color: 'var(--accent-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            cursor: 'pointer',
                            background: 'none',
                            border: 'none',
                            padding: 0
                          }}
                        >
                          <Layers size={15} />
                          <span>View Architecture & Specs</span>
                        </button>

                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="link-underline"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '13px',
                            fontWeight: 600,
                            color: 'var(--text-1)',
                            transition: 'color 0.2s ease'
                          }}
                          title="View GitHub Repository"
                        >
                          <Github size={15} />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #projects div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
        .tilt-card:hover .arrow-link {
          transform: translate(3px, -3px);
          opacity: 1 !important;
          color: var(--accent) !important;
        }
      `}</style>
    </section>
  );
}

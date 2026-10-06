import React, { useState } from 'react';
import { Sparkles, Code, Terminal, Layers, ShieldCheck } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" style={{ background: 'rgba(7, 7, 20, 0.4)' }}>
      <div className="container">
        <ScrollReveal animation="fadeUp" delay={0}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
            <div className="eyebrow">Technical Repertoire</div>
            <h2 className="section-title heading-decorated" style={{ display: 'block' }}>Tools & Engineering Competencies</h2>
            <div className="section-divider centered" style={{ marginTop: '16px' }} />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              A structured breakdown of programming languages, backend systems, machine learning tools, and security standards.
            </p>

            {/* Category Filter Pills */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                marginTop: '30px'
              }}
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
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
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Skill Category Cards Grid with hover-group dimming */}
        <div
          className="hover-group skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
            gap: '24px'
          }}
        >
          {filteredCategories.map((cat, idx) => (
            <ScrollReveal
              key={cat.category}
              animation="fadeUp"
              delay={idx * 100}
              className="hover-group-item"
            >
              <div
                className="glass-card card-lift"
                style={{
                  padding: '32px',
                  borderTop: `3px solid ${cat.color}`,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '10px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        className="pulse-ring"
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: cat.color,
                          boxShadow: `0 0 10px ${cat.color}`,
                          display: 'inline-block'
                        }}
                      />
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '19px',
                          fontWeight: 700,
                          color: '#fff'
                        }}
                      >
                        {cat.category}
                      </h3>
                    </div>
                    <span
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 600,
                        color: 'var(--text-2)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        padding: '3px 10px',
                        borderRadius: '99px',
                        border: '1px solid var(--border)'
                      }}
                    >
                      {cat.skills.length} Competencies
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '13.5px',
                      color: 'var(--text-2)',
                      marginBottom: '24px',
                      lineHeight: 1.5
                    }}
                  >
                    {cat.description}
                  </p>
                </div>

                {/* Individual Skills with animated meters */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-meter-row">
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '6px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span
                            style={{
                              fontSize: '14px',
                              fontWeight: 600,
                              color: 'var(--text-0)'
                            }}
                          >
                            {skill.name}
                          </span>
                          <span
                            className="tag-pop"
                            style={{
                              fontSize: '11px',
                              fontWeight: 500,
                              color: 'var(--text-2)',
                              background: 'rgba(255, 255, 255, 0.05)',
                              padding: '1px 8px',
                              borderRadius: '10px',
                              border: '1px solid var(--border)',
                              cursor: 'default'
                            }}
                          >
                            {skill.tag}
                          </span>
                        </div>
                        <span
                          style={{
                            fontSize: '12.5px',
                            fontWeight: 700,
                            color: cat.color,
                            fontFamily: 'var(--font-mono)'
                          }}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Track */}
                      <div
                        style={{
                          height: '7px',
                          width: '100%',
                          borderRadius: '99px',
                          background: 'rgba(255, 255, 255, 0.06)',
                          overflow: 'hidden',
                          position: 'relative'
                        }}
                      >
                        <div
                          style={{
                            height: '100%',
                            width: `${skill.level}%`,
                            borderRadius: '99px',
                            background: `linear-gradient(90deg, ${cat.color}, var(--accent-secondary))`,
                            boxShadow: `0 0 10px ${cat.color}`,
                            transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          #skills .glass-card {
            padding: 24px 20px;
          }
          #skills .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

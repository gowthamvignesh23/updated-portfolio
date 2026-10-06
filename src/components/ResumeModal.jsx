import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, skillsData, experienceData, projectsData, educationData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '850px',
          background: '#0d0d21',
          padding: '40px',
          borderRadius: '24px'
        }}
      >
        {/* Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '28px',
            paddingBottom: '16px',
            borderBottom: '1px solid var(--border)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--accent-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
            >
              Resume / Curriculum Vitae
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handlePrint}
              className="btn btn-secondary"
              style={{ padding: '8px 16px', fontSize: '13px' }}
              title="Print or save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              style={{
                padding: '8px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
                color: 'var(--text-1)',
                cursor: 'pointer'
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Container (Print friendly) */}
        <div className="printable-resume" style={{ color: '#f8fafc', lineHeight: 1.6 }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '30px',
                fontWeight: 800,
                marginBottom: '6px'
              }}
            >
              {personalInfo.name}
            </h1>
            <div style={{ fontSize: '15px', color: 'var(--cyan)', fontWeight: 600, marginBottom: '12px' }}>
              Software Engineer • Python Developer • Data Analyst
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                fontSize: '13px',
                color: 'var(--text-1)'
              }}
            >
              <span>{personalInfo.email}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.location}</span>
              <span>•</span>
              <a href={personalInfo.socials[0].url} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>
                GitHub
              </a>
              <span>•</span>
              <a href={personalInfo.socials[1].url} target="_blank" rel="noreferrer" style={{ color: 'var(--cyan)' }}>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Section: Executive Summary */}
          <div style={{ marginBottom: '22px' }}>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                color: 'var(--accent)',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '4px',
                marginBottom: '10px'
              }}
            >
              Professional Summary
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-1)' }}>
              {personalInfo.bio}
            </p>
          </div>

          {/* Section: Skills */}
          <div style={{ marginBottom: '22px' }}>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                color: 'var(--accent)',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '4px',
                marginBottom: '10px'
              }}
            >
              Technical Competencies
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13.5px' }}>
              <div>
                <strong style={{ color: '#fff' }}>Languages:</strong> Python, JavaScript, Java, SQL (MySQL), HTML5, CSS3, Spring Boot
              </div>
              <div>
                <strong style={{ color: '#fff' }}>Backend & AI:</strong> RESTful APIs, OOP Concepts, Clean Code, Supervised Learning, Model Evaluation, Pandas, NumPy, Scikit-Learn
              </div>
              <div>
                <strong style={{ color: '#fff' }}>Tools & Platforms:</strong> Git, GitHub, Linux Shell, VS Code, Postman, Arduino/ESP8266, Cloud MQTT
              </div>
              <div>
                <strong style={{ color: '#fff' }}>Full Stack & DB:</strong> React.js, MySQL, RESTful APIs, SQL Schema & Optimization, Agile / Scrum, Code Reviews
              </div>
            </div>
          </div>

          {/* Section: Experience */}
          <div style={{ marginBottom: '22px' }}>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                color: 'var(--accent)',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '4px',
                marginBottom: '12px'
              }}
            >
              Experience & Professional Training
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {experienceData.map((exp, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                    <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#fff' }}>
                      {exp.role} — <span style={{ color: 'var(--accent-secondary)' }}>{exp.company}</span>
                    </div>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-2)' }}>{exp.period}</div>
                  </div>
                  <ul style={{ paddingLeft: '18px', fontSize: '13px', color: 'var(--text-1)', marginTop: '4px' }}>
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} style={{ listStyleType: 'disc', marginBottom: '3px' }}>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div style={{ marginBottom: '16px' }}>
            <h3
              style={{
                fontSize: '14px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                color: 'var(--accent)',
                borderBottom: '1px solid var(--border)',
                paddingBottom: '4px',
                marginBottom: '10px'
              }}
            >
              Education & Certifications
            </h3>
            <div style={{ fontSize: '13.5px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 700, color: '#fff' }}>{educationData.degree}</span>
                <span style={{ color: 'var(--text-2)' }}>{educationData.graduation}</span>
              </div>
              <div style={{ color: 'var(--text-1)', marginBottom: '4px' }}>
                {educationData.institution} • <strong style={{ color: 'var(--cyan)' }}>CGPA {educationData.cgpa}</strong>
              </div>
              <div style={{ color: 'var(--text-2)', fontSize: '12.5px' }}>
                Certifications: Python Programming (Guvi) • Generative AI (Coursera) • Neural Nuggets Award (AI Summit 2025)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

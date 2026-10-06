import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Contact({ onShowToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    onShowToast('Email copied to clipboard! (gowthamvignesh2105@gmail.com)');

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch (e) {}

    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      onShowToast('Thank you! Your message has been prepared.');
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.7 }
        });
      } catch (err) {}

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry from ' + formData.name
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      window.open(mailtoUrl, '_blank');
    }, 800);
  };

  return (
    <section id="contact" style={{ paddingBottom: '120px' }}>
      <div className="container">
        <ScrollReveal animation="fadeUp" delay={0}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 46px' }}>
            <div className="eyebrow">Get In Touch</div>
            <h2 className="section-title heading-decorated" style={{ display: 'block' }}>Let's Build Something Exceptional</h2>
            <div className="section-divider centered" style={{ marginTop: '16px' }} />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Actively open to opportunities in Python backend engineering, software development, and data analytics.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Direct Info Card (5 cols) */}
          <ScrollReveal animation="fadeLeft" delay={100} className="contact-col-left" style={{ gridColumn: 'span 5' }}>
            <div
              className="glass-card card-lift"
              style={{
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                background: 'linear-gradient(135deg, rgba(21, 21, 46, 0.75), rgba(15, 15, 34, 0.95))'
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '10px'
                  }}
                >
                  Direct Communication
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--text-1)', lineHeight: 1.6 }}>
                  Feel free to reach out directly via email, phone, or connect on professional networks.
                </p>
              </div>

              {/* Email quick copy box */}
              <div
                style={{
                  padding: '18px 20px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(139, 92, 246, 0.15)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--violet)',
                      flexShrink: 0
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-2)', letterSpacing: '0.8px' }}>
                      Email Address
                    </div>
                    <div
                      style={{
                        fontSize: '13.5px',
                        fontWeight: 600,
                        color: '#fff',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden'
                      }}
                    >
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="magnetic-btn"
                  style={{
                    padding: '8px 12px',
                    borderRadius: '10px',
                    background: 'var(--accent-gradient)',
                    color: '#070714',
                    fontSize: '12px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    flexShrink: 0,
                    cursor: 'pointer',
                    boxShadow: '0 0 12px var(--accent-glow)'
                  }}
                  title="Copy email and trigger confetti"
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone & Location */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a
                  href={personalInfo.socials[3].url}
                  className="card-lift"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '14px',
                    color: 'var(--text-1)',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border)',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <Phone size={18} style={{ color: 'var(--emerald)' }} />
                  <span>{personalInfo.phone}</span>
                </a>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '14px',
                    color: 'var(--text-1)',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <MapPin size={18} style={{ color: 'var(--cyan)' }} />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--text-2)',
                    letterSpacing: '1px',
                    marginBottom: '12px'
                  }}
                >
                  Profiles & Repositories
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href={personalInfo.socials[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="tag tag-pop"
                    style={{ flex: 1, justifyContent: 'center', padding: '10px' }}
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.socials[1].url}
                    target="_blank"
                    rel="noreferrer"
                    className="tag tag-pop"
                    style={{ flex: 1, justifyContent: 'center', padding: '10px' }}
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Form (7 cols) */}
          <ScrollReveal animation="fadeRight" delay={150} className="contact-col-right" style={{ gridColumn: 'span 7' }}>
            <div
              className="glass-card card-lift shimmer-border"
              style={{
                padding: '36px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
                <MessageSquare size={20} style={{ color: 'var(--accent-secondary)' }} />
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#fff'
                  }}
                >
                  Send a Direct Message
                </h3>
              </div>

              {isSent ? (
                <div
                  style={{
                    padding: '40px 24px',
                    textAlign: 'center',
                    borderRadius: '16px',
                    background: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.25)'
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px',
                      color: 'var(--emerald)'
                    }}
                  >
                    <Check size={28} />
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                    Message Ready!
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-1)', maxWidth: '420px', margin: '0 auto 20px' }}>
                    Your email client has been prepared with your message to {personalInfo.email}.
                  </p>
                  <button
                    onClick={() => {
                      setIsSent(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn btn-secondary"
                    style={{ fontSize: '13.5px', padding: '8px 20px' }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-1)', marginBottom: '6px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border)',
                          color: '#fff',
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-1)', marginBottom: '6px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border)',
                          color: '#fff',
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'border-color 0.2s ease'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-1)', marginBottom: '6px' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Opportunity for Python Software Engineer"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border)',
                        color: '#fff',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-1)', marginBottom: '6px' }}>
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your project, engineering role, or collaboration..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border)',
                        color: '#fff',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary magnetic-btn"
                    style={{ alignSelf: 'flex-start', padding: '13px 28px' }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'Preparing...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .contact-grid {
            display: flex !important;
            flex-direction: column !important;
          }
          #contact .contact-col-left,
          #contact .contact-col-right {
            grid-column: span 12 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

import React, { useState } from 'react';
import { Play, Copy, Check, Terminal, Code2, RefreshCw } from 'lucide-react';
import { codeSnippets } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function CodePlayground() {
  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(true);
  const [copied, setCopied] = useState(false);

  const snippet = codeSnippets[activeSnippetIndex];

  const handleRun = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 700);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" style={{ background: 'rgba(7, 7, 20, 0.45)' }}>
      <div className="container">
        <ScrollReveal animation="fadeUp" delay={0}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px' }}>
            <div className="eyebrow">Interactive Code</div>
            <h2 className="section-title heading-decorated" style={{ display: 'block' }}>Clean Python Architectures</h2>
            <div className="section-divider centered" style={{ marginTop: '16px' }} />
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Inspect sample production snippets demonstrating machine learning pipelines, IoT telemetry ingestion, and REST APIs.
            </p>
          </div>
        </ScrollReveal>

        {/* Code Editor Window with ScrollReveal */}
        <ScrollReveal animation="scaleUp" delay={150}>
          <div
            className="shimmer-border"
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid var(--border-hover)',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px -10px var(--accent-glow)',
              background: '#0d0d1e'
            }}
          >
            {/* Top Window Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 20px',
                background: '#080816',
                borderBottom: '1px solid var(--border)'
              }}
            >
              {/* Window control dots */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                <span
                  style={{
                    fontSize: '12.5px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-2)',
                    marginLeft: '12px'
                  }}
                >
                  python3 /src/{snippet.title}
                </span>
              </div>

              {/* Actions: Run button & Copy */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  onClick={handleCopy}
                  className="magnetic-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-1)',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                  title="Copy script to clipboard"
                >
                  {copied ? <Check size={14} style={{ color: 'var(--emerald)' }} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  onClick={handleRun}
                  disabled={isRunning}
                  className="magnetic-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 16px',
                    borderRadius: '8px',
                    background: 'var(--accent-gradient)',
                    color: '#070714',
                    fontSize: '12.5px',
                    fontWeight: 700,
                    cursor: isRunning ? 'wait' : 'pointer',
                    boxShadow: '0 0 14px var(--accent-glow)'
                  }}
                >
                  {isRunning ? (
                    <>
                      <RefreshCw size={13} className="spin-icon" />
                      <span>Executing...</span>
                    </>
                  ) : (
                    <>
                      <Play size={13} fill="#070714" />
                      <span>Run Script</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Snippet Tabs */}
            <div
              style={{
                display: 'flex',
                background: '#0a0a1a',
                borderBottom: '1px solid var(--border)',
                overflowX: 'auto'
              }}
            >
              {codeSnippets.map((s, idx) => {
                const isActive = activeSnippetIndex === idx;
                return (
                  <button
                    key={s.id}
                    onClick={() => {
                      setActiveSnippetIndex(idx);
                      setShowOutput(true);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 20px',
                      fontSize: '13px',
                      fontFamily: 'var(--font-mono)',
                      color: isActive ? 'var(--accent-secondary)' : 'var(--text-2)',
                      background: isActive ? '#0d0d1e' : 'transparent',
                      borderRight: '1px solid var(--border)',
                      borderBottom: isActive ? '2px solid var(--accent)' : 'none',
                      borderTop: 'none',
                      borderLeft: 'none',
                      fontWeight: isActive ? 600 : 400,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Code2 size={14} />
                    <span>{s.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Code Body */}
            <div
              style={{
                padding: '24px 28px',
                fontFamily: 'var(--font-mono)',
                fontSize: '13.5px',
                lineHeight: 1.7,
                color: '#d4d4ed',
                overflowX: 'auto',
                maxHeight: '360px',
                whiteSpace: 'pre'
              }}
            >
              <code>{snippet.code}</code>
            </div>

            {/* Output Terminal Console */}
            <div
              style={{
                background: '#070714',
                borderTop: '1px solid var(--border)',
                padding: '16px 24px',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-2)',
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '10px'
                }}
              >
                <Terminal size={13} style={{ color: 'var(--accent)' }} />
                <span>Execution Output (STDOUT)</span>
              </div>

              {isRunning ? (
                <div style={{ color: 'var(--accent-secondary)', padding: '6px 0' }}>
                  [~] Initializing Python virtual environment and executing script...
                </div>
              ) : showOutput ? (
                <pre
                  style={{
                    color: '#34d399',
                    lineHeight: 1.6,
                    margin: 0,
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {snippet.output}
                </pre>
              ) : (
                <div style={{ color: 'var(--text-2)' }}>Click "Run Script" to execute.</div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .spin-icon {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

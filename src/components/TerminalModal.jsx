import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TermIcon, CornerDownLeft, Trash2, Sparkles } from 'lucide-react';
import { personalInfo, skillsData, projectsData, experienceData, educationData } from '../data/portfolioData';

export default function TerminalModal({ isOpen, onClose, onChangeTheme }) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `VigneshOS CLI v2.4 (x86_64-pc-linux-gnu)\nType 'help' for available commands, or click any quick badge below.`
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const quickCommands = ['help', 'bio', 'skills', 'projects', 'exp', 'contact', 'python run.py', 'sudo hire'];

  const executeCommand = (cmdStr) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const parts = raw.split(' ');
    const cmd = parts[0].toLowerCase();
    const arg = parts[1]?.toLowerCase();

    setCmdHistory((prev) => [...prev, raw]);
    setHistoryPointer(-1);

    const newEntries = [{ type: 'command', text: raw }];

    switch (cmd) {
      case 'help':
        newEntries.push({
          type: 'response',
          text: `AVAILABLE COMMANDS:
  help           Show this assistance manual
  bio            Overview of Vignesh D & engineering focus
  skills         List categorized technical competencies
  projects       Showcase of software & IoT projects
  exp            Internships & work background
  education      Academic credentials, coursework & CGPA
  certs          Certifications & summit achievements
  contact        Direct email, phone, and profile links
  theme <name>   Switch theme (violet, cyan, emerald, amber, rose)
  python <file>  Execute Python script (e.g., 'python run.py')
  sudo hire      Special recruiter Easter Egg
  clear          Wipe console screen
  exit           Close terminal emulator`
        });
        break;

      case 'bio':
      case 'about':
        newEntries.push({
          type: 'response',
          text: `Name: ${personalInfo.name}
Role: ${personalInfo.headline}
Location: ${personalInfo.location}

Bio:
${personalInfo.bio}`
        });
        break;

      case 'skills':
        const skillsSummary = skillsData
          .map((cat) => `[${cat.category}]\n  ${cat.skills.map((s) => `${s.name} (${s.level}%)`).join(', ')}`)
          .join('\n\n');
        newEntries.push({ type: 'response', text: skillsSummary });
        break;

      case 'projects':
        const projectSummary = projectsData
          .map((p) => `* ${p.title} (${p.category}) [${p.period}]\n  ${p.tagline}\n  Stack: ${p.tech.join(', ')}`)
          .join('\n\n');
        newEntries.push({ type: 'response', text: projectSummary });
        break;

      case 'exp':
      case 'experience':
        const expSummary = experienceData
          .map((e) => `[+] ${e.role} @ ${e.company} (${e.period})\n    Location: ${e.location}\n    Tech: ${e.tech.join(', ')}`)
          .join('\n\n');
        newEntries.push({ type: 'response', text: expSummary });
        break;

      case 'education':
      case 'edu':
        newEntries.push({
          type: 'response',
          text: `Degree: ${educationData.degree}
Institution: ${educationData.institution}
CGPA: ${educationData.cgpa} (${educationData.graduation})
Key Coursework: ${educationData.coursework.join(', ')}`
        });
        break;

      case 'certs':
      case 'certifications':
        const certsSummary = educationData.certifications
          .map((c) => `* ${c.title} — ${c.issuer}`)
          .join('\n');
        newEntries.push({ type: 'response', text: certsSummary });
        break;

      case 'contact':
        newEntries.push({
          type: 'response',
          text: `Email:    ${personalInfo.email}
Phone:    ${personalInfo.phone}
Location: ${personalInfo.location}
GitHub:   ${personalInfo.socials[0].url}
LinkedIn: ${personalInfo.socials[1].url}`
        });
        break;

      case 'theme':
        if (['violet', 'cyan', 'emerald', 'amber', 'rose', 'default'].includes(arg)) {
          onChangeTheme(arg);
          newEntries.push({ type: 'success', text: `[✓] Switched accent palette to: ${arg}` });
        } else {
          newEntries.push({
            type: 'error',
            text: `Invalid theme. Try: theme violet | cyan | emerald | amber | rose`
          });
        }
        break;

      case 'python':
        newEntries.push({
          type: 'response',
          text: `[Python 3.12.2 Initialized]
>>> import antigravity
>>> developer = {'name': 'Vignesh D', 'status': 'READY_TO_SHIP'}
>>> print(f"Hiring {developer['name']} -> Maximum Productivity!")
Hiring Vignesh D -> Maximum Productivity!
[Program exited with code 0]`
        });
        break;

      case 'sudo':
        if (arg === 'hire') {
          newEntries.push({
            type: 'success',
            text: `
  ____________________________________
/  OFFER EXTENDED!                   \\
\\  Welcome Vignesh D to the team!    /
  ------------------------------------
         \\   ^__^
          \\  (oo)\\_______
             (__)\\       )\\/\\
                 ||----w |
                 ||     ||

Thank you! Send an email directly to ${personalInfo.email} to initiate discussions!`
          });
        } else {
          newEntries.push({ type: 'error', text: `vignesh is not in the sudoers file. Try 'sudo hire'.` });
        }
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newEntries.push({
          type: 'error',
          text: `Command not found: '${raw}'. Type 'help' for available commands.`
        });
        break;
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextPointer = historyPointer === -1 ? cmdHistory.length - 1 : Math.max(0, historyPointer - 1);
        setHistoryPointer(nextPointer);
        setInputVal(cmdHistory[nextPointer]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer !== -1) {
        const nextPointer = historyPointer + 1;
        if (nextPointer < cmdHistory.length) {
          setHistoryPointer(nextPointer);
          setInputVal(cmdHistory[nextPointer]);
        } else {
          setHistoryPointer(-1);
          setInputVal('');
        }
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '820px',
          background: '#090919',
          border: '1px solid var(--border-accent)',
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '75vh'
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px',
            background: '#060614',
            borderBottom: '1px solid var(--border)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--accent-secondary)',
                marginLeft: '10px',
                fontWeight: 600
              }}
            >
              vignesh@portfolio:~ (bash)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => setHistory([])}
              style={{
                color: 'var(--text-2)',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
              title="Clear terminal"
            >
              <Trash2 size={13} />
            </button>
            <button
              onClick={onClose}
              style={{ color: 'var(--text-2)', cursor: 'pointer' }}
              title="Close terminal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Quick Command Pills */}
        <div
          style={{
            padding: '8px 16px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto'
          }}
        >
          <span style={{ fontSize: '11px', color: 'var(--text-2)', alignSelf: 'center', whiteSpace: 'nowrap' }}>
            Quick:
          </span>
          {quickCommands.map((q) => (
            <button
              key={q}
              onClick={() => executeCommand(q)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11.5px',
                padding: '3px 10px',
                borderRadius: '6px',
                background: 'rgba(6, 182, 212, 0.08)',
                border: '1px solid rgba(6, 182, 212, 0.25)',
                color: 'var(--accent-secondary)',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div
          style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '13.5px',
            lineHeight: 1.6
          }}
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '12px' }}>
              {item.type === 'command' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' }}>
                  <span style={{ color: 'var(--accent)' }}>vignesh@portfolio:~$</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>{item.text}</span>
                </div>
              )}
              {item.type === 'response' && (
                <pre
                  style={{
                    color: 'var(--text-1)',
                    whiteSpace: 'pre-wrap',
                    margin: '4px 0 0',
                    fontFamily: 'inherit'
                  }}
                >
                  {item.text}
                </pre>
              )}
              {item.type === 'system' && (
                <div style={{ color: 'var(--accent-secondary)', whiteSpace: 'pre-wrap' }}>
                  {item.text}
                </div>
              )}
              {item.type === 'success' && (
                <pre
                  style={{
                    color: '#34d399',
                    fontWeight: 600,
                    whiteSpace: 'pre-wrap',
                    margin: '4px 0 0',
                    fontFamily: 'inherit'
                  }}
                >
                  {item.text}
                </pre>
              )}
              {item.type === 'error' && (
                <div style={{ color: '#fb7185', marginTop: '4px' }}>{item.text}</div>
              )}
            </div>
          ))}

          {/* Active Prompt Line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
            <span style={{ color: 'var(--accent)', flexShrink: 0 }}>vignesh@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontFamily: 'var(--font-mono)',
                fontSize: '13.5px',
                padding: 0
              }}
              placeholder="Type command here..."
            />
          </div>
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
}

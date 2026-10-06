import React, { useState, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import CursorSpotlight from './components/CursorSpotlight';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CodePlayground from './components/CodePlayground';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import { Check } from 'lucide-react';

export default function App() {
  const [activeTheme, setActiveTheme] = useState('default');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toasts, setToasts] = useState([]);

  // Sync theme with document element
  useEffect(() => {
    if (activeTheme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', activeTheme);
    }
  }, [activeTheme]);

  // Track cursor position on glass-cards for the hover radial gradient
  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      document.querySelectorAll('.glass-card').forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  const showToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  return (
    <div className="portfolio-app-root noise-overlay">
      {/* Dynamic Cosmic Background */}
      <BackgroundCanvas />

      {/* Cursor Spotlight (Brittany Chiang style) */}
      <CursorSpotlight />

      {/* Navigation */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        activeTheme={activeTheme}
        onChangeTheme={setActiveTheme}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <About />
        <Skills />
        <Experience />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <CodePlayground />
        <Education />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onChangeTheme={setActiveTheme}
      />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Toast Notification Container */}
      <div className="toast-container" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className="toast">
            <Check size={18} style={{ color: 'var(--emerald)', flexShrink: 0 }} />
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

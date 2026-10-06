import React, { useState, useEffect } from 'react';

/**
 * CursorSpotlight — follows cursor with a large gradient spotlight effect.
 * Inspired by brittanychiang.com's design.
 */
export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.07), transparent 80%)`,
        transition: 'background 0.15s ease'
      }}
    />
  );
}

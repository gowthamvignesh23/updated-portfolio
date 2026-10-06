import React from 'react';
import { useScrollReveal } from '../hooks/useAnimations';

/**
 * ScrollReveal wrapper component.
 * Wraps children in a div that animates in when scrolled into view.
 *
 * @param {string} animation - 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scaleUp' | 'blur'
 * @param {number} delay - delay in ms
 * @param {number} duration - animation duration in ms
 * @param {number} distance - translation distance in px
 */
export default function ScrollReveal({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 700,
  distance = 40,
  threshold = 0.12,
  className = '',
  style = {},
  as: Tag = 'div'
}) {
  const [ref, isVisible] = useScrollReveal({ threshold });

  const animations = {
    fadeUp: {
      hidden: { opacity: 0, transform: `translateY(${distance}px)` },
      visible: { opacity: 1, transform: 'translateY(0)' }
    },
    fadeDown: {
      hidden: { opacity: 0, transform: `translateY(-${distance}px)` },
      visible: { opacity: 1, transform: 'translateY(0)' }
    },
    fadeLeft: {
      hidden: { opacity: 0, transform: `translateX(-${distance}px)` },
      visible: { opacity: 1, transform: 'translateX(0)' }
    },
    fadeRight: {
      hidden: { opacity: 0, transform: `translateX(${distance}px)` },
      visible: { opacity: 1, transform: 'translateX(0)' }
    },
    scaleUp: {
      hidden: { opacity: 0, transform: 'scale(0.92)' },
      visible: { opacity: 1, transform: 'scale(1)' }
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)', transform: `translateY(${distance / 2}px)` },
      visible: { opacity: 1, filter: 'blur(0px)', transform: 'translateY(0)' }
    }
  };

  const anim = animations[animation] || animations.fadeUp;
  const currentState = isVisible ? anim.visible : anim.hidden;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        ...currentState,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform, filter'
      }}
    >
      {children}
    </Tag>
  );
}

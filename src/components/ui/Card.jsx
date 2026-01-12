// src/components/ui/Card.jsx
import React, { useRef } from 'react';
import { gsap } from '../../lib/gsap';

/**
 * Reusable Card component with glassmorphism effect.
 * Enhanced with GSAP hover effects.
 */
const Card = ({ children, className = '', hoverEffect = false, ...props }) => {
    const cardRef = useRef(null);
    const baseStyles = "bg-card/50 backdrop-blur-md border border-border rounded-2xl p-6";

    // Removed CSS hover classes in favor of GSAP
    // const hoverStyles = hoverEffect ? "transition-all duration-300 hover:border-slate-600 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1" : "";

    const handleMouseEnter = () => {
        if (!hoverEffect) return;
        gsap.to(cardRef.current, {
            y: -5,
            borderColor: 'var(--primary)', // Highlight on hover
            boxShadow: '0 20px 25px -5px rgba(99, 102, 241, 0.1), 0 8px 10px -6px rgba(99, 102, 241, 0.1)', // primary shadow
            duration: 0.4,
            ease: 'power2.out'
        });
    };

    const handleMouseLeave = () => {
        if (!hoverEffect) return;
        gsap.to(cardRef.current, {
            y: 0,
            borderColor: 'var(--border)', // Back to base border
            boxShadow: 'none',
            duration: 0.4,
            ease: 'power2.out'
        });
    };

    return (
        <div
            ref={cardRef}
            className={`${baseStyles} ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;

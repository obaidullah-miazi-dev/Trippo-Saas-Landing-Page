// src/components/ui/Card.jsx
import React from 'react';

/**
 * Reusable Card component with glassmorphism effect.
 */
const Card = ({ children, className = '', hoverEffect = false, ...props }) => {
    const baseStyles = "bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl p-6";
    const hoverStyles = hoverEffect ? "transition-all duration-300 hover:border-slate-600 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1" : "";

    return (
        <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Card;

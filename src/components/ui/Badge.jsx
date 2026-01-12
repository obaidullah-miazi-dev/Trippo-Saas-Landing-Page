// src/components/ui/Badge.jsx
import React from 'react';

/**
 * Small badge component for tags or status.
 */
const Badge = ({ children, variant = 'default', className = '' }) => {
    const variants = {
        default: "bg-slate-800 text-slate-300 border-slate-700",
        primary: "bg-primary/10 text-primary border-primary/20",
        secondary: "bg-secondary/10 text-secondary border-secondary/20",
        outline: "bg-transparent text-slate-400 border-slate-700",
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;

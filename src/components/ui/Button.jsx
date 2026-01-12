// src/components/ui/Button.jsx
import React, { useRef } from 'react';
import { gsap } from '../../lib/gsap';

/**
 * Reusable Button component with variants and sizes.
 * Enhanced with GSAP micro-interactions.
 */
const Button = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const buttonRef = useRef(null);

    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const variants = {
        primary: "bg-primary text-primary-foreground shadow-lg shadow-primary/25 border border-transparent",
        secondary: "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/25 border border-transparent",
        outline: "bg-transparent text-muted-foreground border border-input hover:text-foreground hover:bg-accent",
        ghost: "bg-transparent text-muted-foreground hover:text-foreground hover:bg-accent border border-transparent",
    };

    const sizes = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base",
        lg: "px-8 py-3.5 text-lg",
    };

    const handleMouseEnter = () => {
        gsap.to(buttonRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    const handleMouseLeave = () => {
        gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    };

    return (
        <button
            ref={buttonRef}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

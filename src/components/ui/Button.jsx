// src/components/ui/Button.jsx
import React from 'react';

/**
 * Reusable Button component with variants and sizes.
 * 
 * Props:
 * - variant: 'primary' | 'secondary' | 'outline' | 'ghost'
 * - size: 'sm' | 'md' | 'lg'
 * - className: Additional classes
 * - children: Button content
 * - ...props: standard button props
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25 border border-transparent",
    secondary: "bg-secondary text-white hover:bg-pink-600 shadow-lg shadow-secondary/25 border border-transparent",
    outline: "bg-transparent text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-800/50",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent",
  };
  
  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

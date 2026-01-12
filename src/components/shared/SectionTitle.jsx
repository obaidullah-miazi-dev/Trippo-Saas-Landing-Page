// src/components/shared/SectionTitle.jsx
import React from 'react';

/**
 * Standardized section title component.
 */
const SectionTitle = ({ title, subtitle, align = 'center', className = '' }) => {
    const alignment = {
        center: "text-center mx-auto",
        left: "text-left",
        right: "text-right ml-auto",
    };

    return (
        <div className={`max-w-3xl mb-12 ${alignment[align]} ${className}`}>
            {subtitle && (
                <span className="block text-primary font-semibold tracking-wider uppercase text-sm mb-2">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;

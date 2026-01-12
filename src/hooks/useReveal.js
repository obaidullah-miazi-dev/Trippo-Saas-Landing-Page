// src/hooks/useReveal.js
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

/**
 * Custom hook to reveal elements on scroll.
 * 
 * @param {Object} options - Animation options
 * @param {number} options.delay - Delay in seconds
 * @param {number} options.duration - Duration in seconds
 * @param {number} options.y - Y offset (default: 50)
 * @param {number} options.scale - Scale start (default: 1)
 * @param {string} options.ease - Easing function
 * @param {number} options.threshold - ScrollTrigger threshold (0-1)
 * @returns {Object} ref - React ref to attach to the element
 */
export const useReveal = ({
    delay = 0,
    duration = 1,
    y = 50,
    scale = 1,
    opacity = 0,
    ease = 'power3.out',
    threshold = 0.1,
} = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Initial state
        gsap.set(element, {
            autoAlpha: opacity, // autoAlpha handles visibility + opacity
            y: y,
            scale: scale
        });

        // Create animation
        const anim = gsap.to(element, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: duration,
            delay: delay,
            ease: ease,
            scrollTrigger: {
                trigger: element,
                start: `top ${100 - (threshold * 100)}%`, // e.g., "top 90%"
                toggleActions: 'play none none reverse', // Play on enter, reverse on leave back up
                // markers: true, // Uncomment for debugging
            },
        });

        return () => {
            anim.kill();
            // ScrollTrigger.getAll().forEach(t => t.kill()); // Be careful with this global kill
        };
    }, [delay, duration, y, scale, opacity, ease, threshold]);

    return ref;
};

/**
 * Hook for staggering children
 */
export const useStaggerReveal = ({
    selector = '.reveal-item',
    delay = 0,
    stagger = 0.1,
    y = 30,
    threshold = 0.1,
} = {}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const elements = container.querySelectorAll(selector);
        if (elements.length === 0) return;

        gsap.set(elements, { autoAlpha: 0, y: y });

        ScrollTrigger.batch(elements, {
            start: `top ${100 - (threshold * 100)}%`,
            onEnter: (batch) => {
                gsap.to(batch, {
                    autoAlpha: 1,
                    y: 0,
                    stagger: stagger,
                    duration: 0.8,
                    ease: 'power3.out',
                    overwrite: true,
                });
            },
            onLeaveBack: (batch) => {
                gsap.to(batch, {
                    autoAlpha: 0,
                    y: y,
                    overwrite: true,
                });
            },
        });

        return () => {
            // Cleanup if needed
        };
    }, [selector, delay, stagger, y, threshold]);

    return containerRef;
};

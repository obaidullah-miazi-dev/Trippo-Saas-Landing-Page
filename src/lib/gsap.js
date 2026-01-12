// src/lib/gsap.js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

// Configure global defaults if needed
gsap.defaults({
    duration: 1,
    ease: 'power3.out',
});

export { gsap, ScrollTrigger };

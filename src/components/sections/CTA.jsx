// src/components/sections/CTA.jsx
import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import { useReveal } from '../../hooks/useReveal';

const CTA = () => {
    const containerRef = useReveal({
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)' // Elastic pop effect
    });

    return (
        <section className="py-24 relative overflow-hidden">
            <Container>
                <div ref={containerRef} className="relative rounded-3xl bg-gradient-to-r from-primary to-secondary p-12 md:p-20 text-center overflow-hidden shadow-2xl opacity-0">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Ready to start your journey?
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                            Join thousands of developers who are building faster and better with Trippo today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className=" text-primary hover:bg-primary shadow-xl">
                                Get Started Now
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:border-white">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CTA;

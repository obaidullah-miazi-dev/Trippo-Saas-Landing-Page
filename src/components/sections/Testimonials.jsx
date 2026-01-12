// src/components/sections/Testimonials.jsx
import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../shared/SectionTitle';
import Card from '../ui/Card';
import { testimonials } from '../../data/testimonials';
import { useStaggerReveal } from '../../hooks/useReveal';

const Testimonials = () => {
    const containerRef = useStaggerReveal({
        selector: '.testimonial-card',
        stagger: 0.1,
        y: 40,
    });

    return (
        <section id="testimonials" className="py-24 bg-background">
            <Container>
                <SectionTitle
                    title="Loved by developers worldwide"
                    subtitle="Testimonials"
                />

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card opacity-0 h-full">
                            <Card className="flex flex-col justify-between h-full bg-card/30 hover:bg-card/50 transition-colors duration-300">
                                <div className="mb-6">
                                    <div className="flex gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.author}
                                        className="w-10 h-10 rounded-full border border-border"
                                    />
                                    <div>
                                        <h4 className="text-foreground font-semibold text-sm">{testimonial.author}</h4>
                                        <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;

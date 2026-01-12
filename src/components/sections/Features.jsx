// src/components/sections/Features.jsx
import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../shared/SectionTitle';
import Card from '../ui/Card';
import Icon from '../shared/Icon';
import { features } from '../../data/features';
import { useStaggerReveal } from '../../hooks/useReveal';

const Features = () => {
    const containerRef = useStaggerReveal({
        selector: '.feature-card',
        stagger: 0.1,
        y: 40,
    });

    return (
        <section id="features" className="py-24 bg-background relative">
            <Container>
                <SectionTitle
                    title="Everything you need to scale"
                    subtitle="Features"
                    align="center"
                />

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card opacity-0">
                            <Card hoverEffect className="group h-full">
                                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300">
                                    <Icon name={feature.icon} className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Features;

// src/components/sections/Features.jsx
import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../shared/SectionTitle';
import Card from '../ui/Card';
import Icon from '../shared/Icon';
import { features } from '../../data/features';

const Features = () => {
    return (
        <section id="features" className="py-24 bg-slate-950 relative">
            <Container>
                <SectionTitle
                    title="Everything you need to scale"
                    subtitle="Features"
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} hoverEffect className="group">
                            <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors duration-300">
                                <Icon name={feature.icon} className="w-6 h-6 text-slate-300 group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Features;

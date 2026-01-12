// src/components/sections/About.jsx
import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import Icon from '../shared/Icon';

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-900/30 relative overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        <Badge variant="secondary" className="mb-6">Our Mission</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Empowering developers to build the future.
                        </h2>
                        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                            We believe that deployment shouldn't be a bottleneck. That's why we built Trippo—a platform that handles the complexity of infrastructure so you can focus on creating amazing products.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                '99.99% Uptime SLA',
                                'Automated Scaling',
                                'Zero-config Deployments'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300">
                                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <Icon name="Check" className="w-4 h-4" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button variant="outline">Learn More About Us</Button>
                    </div>

                    {/* Visual */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 aspect-square">
                            {/* Abstract Code/Tech Visual */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 opacity-50"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-3/4 h-3/4 bg-slate-950 rounded-xl border border-slate-800 p-6 relative overflow-hidden">
                                    <div className="space-y-3">
                                        <div className="h-2 w-1/3 bg-slate-800 rounded"></div>
                                        <div className="h-2 w-2/3 bg-slate-800 rounded"></div>
                                        <div className="h-2 w-1/2 bg-slate-800 rounded"></div>
                                        <div className="h-2 w-3/4 bg-slate-800 rounded"></div>
                                    </div>
                                    <div className="absolute bottom-6 right-6">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center animate-bounce">
                                            <Icon name="Zap" className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Blob */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-3xl rounded-full"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;

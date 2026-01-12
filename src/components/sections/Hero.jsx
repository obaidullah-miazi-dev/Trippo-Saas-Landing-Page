// src/components/sections/Hero.jsx
import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute top-40 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 animate-pulse delay-700"></div>
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <div className="mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
                        <Badge variant="primary" className="px-4 py-1.5 text-sm">
                            v2.0 is now live 🚀
                        </Badge>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
                        Build faster with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Intelligent Tools
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
                        Trippo provides the infrastructure you need to scale your application without the headache.
                        Focus on your code, we handle the rest.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
                        <Button size="lg" variant="primary">
                            Start Building Free
                        </Button>
                        <Button size="lg" variant="outline">
                            View Documentation
                        </Button>
                    </div>

                    {/* Hero Image / Dashboard Preview */}
                    <div className="mt-20 relative animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
                        <div className="rounded-xl bg-slate-900/50 border border-slate-800 p-2 shadow-2xl backdrop-blur-sm">
                            <div className="rounded-lg overflow-hidden bg-slate-950 aspect-video relative">
                                {/* Abstract UI Representation */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-700">
                                    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 p-8 grid grid-cols-12 gap-4">
                                        {/* Sidebar */}
                                        <div className="col-span-3 bg-slate-900 rounded-lg border border-slate-800/50 h-full"></div>
                                        {/* Main Content */}
                                        <div className="col-span-9 flex flex-col gap-4">
                                            <div className="h-32 bg-slate-900 rounded-lg border border-slate-800/50 w-full"></div>
                                            <div className="flex gap-4 h-full">
                                                <div className="flex-1 bg-slate-900 rounded-lg border border-slate-800/50"></div>
                                                <div className="flex-1 bg-slate-900 rounded-lg border border-slate-800/50"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50"></div>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary rounded-full blur-2xl opacity-20"></div>
                        <div className="absolute -top-10 -left-10 w-24 h-24 bg-secondary rounded-full blur-2xl opacity-20"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;

// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import Container from './Container';
import Button from '../ui/Button';
import Icon from '../shared/Icon';
import { navLinks } from '../../data/navLinks';
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-border' : 'bg-transparent py-6'
                }`}
        >
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                            <img src="trippoLogo.png" alt="logo" className='w-5'/>
                        </div>
                        <span className="text-xl font-bold text-foreground tracking-tight">Trippo</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-4">
                            <AnimatedThemeToggler />
                            <Button variant="primary" size="sm">Get Started</Button>
                        </div>

                        <button
                            className="md:hidden text-muted-foreground hover:text-foreground"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 animate-fade-in">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium text-slate-300 hover:text-white py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button variant="primary" className="w-full justify-center">Get Started</Button>
                            <div className="flex justify-center pt-4 border-t border-border">
                                <AnimatedThemeToggler />
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </nav>
    );
};

export default Navbar;

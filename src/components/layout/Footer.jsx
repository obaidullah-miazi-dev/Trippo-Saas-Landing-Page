// src/components/layout/Footer.jsx
import React from 'react';
import Container from './Container';
import Icon from '../shared/Icon';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/30 border-t border-border py-12 md:py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                               <img src="trippoLogo.png" alt="" />
                            </div>
                            <span className="text-xl font-bold text-foreground tracking-tight">Trippo</span>
                        </a>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Making your SaaS journey smoother, faster, and more profitable with our cutting-edge platform.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Features</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Integrations</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Careers</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Blog</a></li>
                            <li><a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Icon name="Twitter" className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Icon name="Github" className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Icon name="Linkedin" className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm">
                        &copy; {currentYear} Trippo Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Privacy Policy</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground text-sm">Terms of Service</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

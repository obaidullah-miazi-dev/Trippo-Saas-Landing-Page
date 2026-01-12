// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import About from '../components/sections/About';
import Testimonials from '../components/sections/Testimonials';
import Pricing from '../components/sections/Pricing';
import CTA from '../components/sections/CTA';

const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <About />
                <Testimonials />
                <Pricing />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Home;

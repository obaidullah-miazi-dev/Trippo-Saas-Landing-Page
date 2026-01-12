// src/components/sections/Pricing.jsx
import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../shared/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Icon from '../shared/Icon';
import { useStaggerReveal } from '../../hooks/useReveal';

const Pricing = () => {
    const containerRef = useStaggerReveal({
        selector: '.pricing-card',
        stagger: 0.15,
        y: 50,
    });

    const plans = [
        {
            name: 'Starter',
            price: '$0',
            description: 'Perfect for side projects and hobbyists.',
            features: ['Up to 3 projects', 'Community Support', '1GB Storage', 'Basic Analytics'],
            cta: 'Start for Free',
            popular: false,
        },
        {
            name: 'Pro',
            price: '$29',
            description: 'For growing teams and startups.',
            features: ['Unlimited projects', 'Priority Support', '100GB Storage', 'Advanced Analytics', 'Custom Domains'],
            cta: 'Get Started',
            popular: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'For large scale organizations.',
            features: ['Unlimited everything', '24/7 Dedicated Support', 'Unlimited Storage', 'Custom Contracts', 'SLA'],
            cta: 'Contact Sales',
            popular: false,
        },
    ];

    return (
        <section id="pricing" className="py-24 bg-slate-950 relative">
            <Container>
                <SectionTitle
                    title="Simple, transparent pricing"
                    subtitle="Pricing"
                />

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div key={index} className="pricing-card opacity-0 flex">
                            <Card
                                className={`relative flex flex-col w-full ${plan.popular ? 'border-primary shadow-2xl shadow-primary/10 z-10' : 'bg-slate-900/20'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                                        {plan.price !== 'Custom' && <span className="text-slate-500">/month</span>}
                                    </div>
                                    <p className="text-slate-400 text-sm">{plan.description}</p>
                                </div>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                                            <Icon name="Check" className="w-4 h-4 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={plan.popular ? 'primary' : 'outline'}
                                    className="w-full justify-center"
                                >
                                    {plan.cta}
                                </Button>
                            </Card>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Pricing;

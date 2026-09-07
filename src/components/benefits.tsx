'use client'

import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BenefitsCard from "./benefitsCard"
import { Lightbulb, Target, Users, Tv } from "lucide-react"

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_LOGOS = [
    { src: '/images/social-media-logo-with-text/DV-360-Logo-e1744105620751.png', alt: 'DV360' },
    { src: '/images/social-media-logo-with-text/Meta.png', alt: 'Meta' },
    { src: '/images/social-media-logo-with-text/Youtube.png', alt: 'YouTube' },
    { src: '/images/social-media-logo-with-text/facebook.png', alt: 'Facebook' },
    { src: '/images/social-media-logo-with-text/instagram.png', alt: 'Instagram' },
    { src: '/images/social-media-logo-with-text/LInked-In.png', alt: 'LinkedIn' },
    { src: '/images/social-media-logo-with-text/Pinterest-01.png', alt: 'Pinterest' },
    { src: '/images/social-media-logo-with-text/reddit-1-logo-png-transparent.png', alt: 'Reddit' },
];

export default function Benefits() {
    const mainRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Reveal animation for header + cards
        gsap.from('.benefits-reveal', {
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: mainRef.current,
                start: 'top 90%',
            }
        })
    }, { scope: mainRef })

    return (
        <section id="features" ref={mainRef} className="benefits-section">
            <div className="benefits-inner">
                {/* Header */}
                <div className="benefits-header benefits-reveal">
                    <span className="benefits-eyebrow">WHAT WE DO</span>
                    <h2 className="text-h2 max-w-3xl text-[#1A1615] font-extrabold">Strategic Media Solutions Built for Measurable Growth</h2>
                </div>

                {/* Integration Logos card - full width static 4-column grid */}
                <div className="card-top-2 benefits-reveal p-6 sm:p-10 flex flex-col gap-6 sm:gap-8 items-center bg-gradient-to-b from-[#EBF3FE] to-[#E1EDFD] border border-blue-200/50 rounded-3xl w-full shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                    {/* Centered heading */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1A1615] text-center w-full tracking-tight">
                        Connecting Brands Across Platforms
                    </h3>

                    {/* Static 4-Column Grid for 8 Platforms */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl mx-auto my-1">
                        {SOCIAL_LOGOS.map((logo) => (
                            <div
                                key={logo.alt}
                                className="group h-20 sm:h-24 p-4 bg-white rounded-2xl border border-blue-200/60 shadow-[0_4px_16px_rgba(21,108,194,0.06)] hover:shadow-[0_12px_28px_rgba(21,108,194,0.14)] hover:border-accent-blue/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-10 sm:max-h-12 w-auto max-w-[130px] sm:max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>

                    <p className="text-xs sm:text-sm md:text-[15px] text-[#332E2C] font-semibold leading-relaxed text-center w-full max-w-none whitespace-nowrap overflow-x-auto">
                        We combine strong platform relationships with advanced targeting and analytics to deliver measurable growth for brands.
                    </p>
                </div>

                {/* Bottom three feature cards */}
                <div className="benefits-cards-bottom">
                    <BenefitsCard
                        icon={<Target size={24} />}
                        title="Media Strategy"
                        frontQuote="Media works best when it is structured with intent."
                        backDescription="We design strategies that align audiences, platforms and campaign architecture to deliver clarity in execution and consistency in outcomes."
                    />
                    <BenefitsCard
                        icon={<Users size={24} />}
                        title="Audience Intelligence"
                        frontQuote="Better targeting starts with better signals."
                        backDescription="We use behavioural, transactional and intent-based data to reach audiences that are more relevant and more likely to engage."
                    />
                    <BenefitsCard
                        icon={<Lightbulb size={24} />}
                        title="Impact Frames"
                        frontQuote="Attention is earned through interaction."
                        backDescription="We create formats that transform passive impressions into active engagement, making brand experiences more memorable."
                    />
                    <BenefitsCard
                        icon={<Tv size={24} />}
                        title="Impact Views - CTV Solutions"
                        frontQuote="Premium video environments demand more than reach."
                        backDescription="Audience-led CTV and video strategies across YouTube, OTT and Connected TV ecosystems designed to drive attention, engagement and measurable brand impact."
                    />
                </div>
            </div>
        </section>
    )
}


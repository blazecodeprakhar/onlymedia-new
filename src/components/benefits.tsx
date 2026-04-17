'use client'

import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import BenefitsCard from "./benefitsCard"
import { Handshake, Lightbulb, Target, Users } from "lucide-react"

gsap.registerPlugin(ScrollTrigger);

// Triple the logo arrays so rows overflow on both sides, giving clean fade edges
const BASE_1 = [1, 2, 3, 4, 5, 6, 7, 8];
const BASE_2 = [6, 4, 7, 1, 3, 8, 5, 2];
const TICKER_1_IMAGES = [...BASE_1, ...BASE_1, ...BASE_1, ...BASE_1, ...BASE_1]; // 40 logos
const TICKER_2_IMAGES = [...BASE_2, ...BASE_2, ...BASE_2, ...BASE_2, ...BASE_2]; // 40 logos

export default function Benefits() {
    const mainRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // Desktop movement
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.integrations-ticker-1',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            }).from('.integrations-ticker-1', {
                translateX: '-250px',
                ease: 'none'
            })

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.integrations-ticker-2',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            }).to('.integrations-ticker-2', {
                translateX: '-250px',
                ease: 'none'
            })
        });

        mm.add("(max-width: 767px)", () => {
            // Mobile (Phone) movement
            // Logic: Centered symmetrical rows. Moves faster (400px) but always stays full.
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.integrations-ticker-1',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            }).fromTo('.integrations-ticker-1', {
                translateX: '-400px'
            }, {
                translateX: '400px',
                ease: 'none'
            })

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.integrations-ticker-2',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            }).fromTo('.integrations-ticker-2', {
                translateX: '400px'
            }, {
                translateX: '-400px',
                ease: 'none'
            })
        });

        // Reveal animation for header + cards
        gsap.from('.benefits-reveal', {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'expo.out',
            scrollTrigger: {
                trigger: mainRef.current,
                start: 'top 85%',
            }
        })
    }, { scope: mainRef })

    return (
        <section id="features" ref={mainRef} className="benefits-section">
            <div className="benefits-inner">
                {/* Header */}
                <div className="benefits-header benefits-reveal">
                    <span className="benefits-eyebrow">WHAT WE DO</span>
                    <h2 className="text-h2 max-w-3xl text-neutral-30">Strategic Media Solutions Built for Performance</h2>
                </div>

                {/* Integration Logos card - full width */}
                <div className="card-top-2 benefits-reveal">
                    {/* Centered heading */}
                    <h5 className="text-h4 text-center w-full text-neutral-30">Our Media Ecosystem</h5>

                    <div className="app-logos">
                        {/* Ticker row 1 - slides right */}
                        <div className="integrations-ticker flex justify-center">
                            <div className="integrations-ticker-1 px-4 flex flex-nowrap gap-4">
                                {TICKER_1_IMAGES.map((num, i) => (
                                    <Image
                                        key={i}
                                        src={`/images/image-${num}.png`}
                                        height={200}
                                        width={200}
                                        alt={`Integration tool ${num}`}
                                        className="object-cover object-center size-20 md:size-24 flex-shrink-0"
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Ticker row 2 - slides left */}
                        <div className="integrations-ticker flex justify-center">
                            <div className="integrations-ticker-2 px-4 flex flex-nowrap gap-4">
                                {TICKER_2_IMAGES.map((num, i) => (
                                    <Image
                                        key={i}
                                        src={`/images/image-${num}.png`}
                                        height={200}
                                        width={200}
                                        alt={`Integration tool ${num}`}
                                        className="object-cover object-center size-20 md:size-24 flex-shrink-0"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="text-body-large text-center max-w-3xl mx-auto">
                        Our campaigns are powered by trusted media platforms and data partners. We combine strong platform relationships with advanced targeting and analytics to deliver measurable growth for brands.
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
                        title="Audience Insights"
                        frontQuote="Better targeting starts with better signals."
                        backDescription="We use behavioural, transactional and intent-based data to reach audiences that are more relevant and more likely to engage."
                    />
                    <BenefitsCard
                        icon={<Lightbulb size={24} />}
                        title="Rich Media Formats"
                        frontQuote="Attention is earned through interaction."
                        backDescription="We create formats that transform passive impressions into active engagement, making brand experiences more memorable."
                    />
                    <BenefitsCard
                        icon={<Handshake size={24} />}
                        title="Affiliate Growth"
                        frontQuote="Scale requires structure."
                        backDescription="We build and manage affiliate programs that balance growth, efficiency and transparency at every stage."
                    />
                </div>
            </div>
        </section>
    )
}

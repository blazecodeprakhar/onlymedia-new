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
const TICKER_1_IMAGES = [...BASE_1, ...BASE_1, ...BASE_1]; // 24 logos
const TICKER_2_IMAGES = [...BASE_2, ...BASE_2, ...BASE_2]; // 24 logos

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
                    end: 'top top',
                    scrub: true
                }
            }).from('.integrations-ticker-1', {
                translateX: '-200px',
                ease: 'power2.inOut'
            })

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.integrations-ticker-2',
                    start: 'top bottom',
                    end: 'top top',
                    scrub: true
                }
            }).to('.integrations-ticker-2', {
                translateX: '-200px',
                ease: 'power2.inOut'
            })
        });

        mm.add("(max-width: 767px)", () => {
            // Mobile (Phone) movement - auto scrolls continuously BUT only when the user is actively scrolling.

            // 1. Create infinite looping animations for both rows
            const ticker1Anim = gsap.to('.integrations-ticker-1', {
                x: "-50%", // Move by half (since we tripled the array, we have plenty of runway)
                duration: 20,
                ease: "none",
                repeat: -1,
                paused: true // Start paused
            });

            const ticker2Anim = gsap.to('.integrations-ticker-2', {
                x: "50%",
                duration: 20, // Same perfect speed
                ease: "none",
                repeat: -1,
                paused: true // Start paused
            });

            // 2. We need a timer to detect when the user STOPS scrolling
            let scrollTimeout: NodeJS.Timeout;

            // 3. Hook into ScrollTrigger to play/pause the animations
            ScrollTrigger.create({
                trigger: '.benefits-section',
                start: 'top bottom',
                end: 'bottom top',
                onUpdate: (self) => {
                    // If the user is actively scrolling inside the section, play the animations
                    if (Math.abs(self.getVelocity()) > 0) {
                        ticker1Anim.play();
                        ticker2Anim.play();

                        // Clear the timeout if they are still scrolling
                        clearTimeout(scrollTimeout);

                        // If they stop scrolling for 150ms, pause the animations
                        scrollTimeout = setTimeout(() => {
                            ticker1Anim.pause();
                            ticker2Anim.pause();
                        }, 150);
                    }
                },
                onLeave: () => {
                    ticker1Anim.pause();
                    ticker2Anim.pause();
                },
                onLeaveBack: () => {
                    ticker1Anim.pause();
                    ticker2Anim.pause();
                }
            });
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
                    <h2 className="text-h2 max-w-3xl">Strategic Media Solutions Built for Performance</h2>
                </div>

                {/* Integration Logos card - full width */}
                <div className="card-top-2 benefits-reveal">
                    {/* Centered heading */}
                    <h5 className="text-h4 text-center w-full">Our Media Ecosystem</h5>

                    <div className="app-logos">
                        {/* Ticker row 1 - slides right */}
                        <div className="integrations-ticker">
                            <div className="integrations-ticker-1">
                                {TICKER_1_IMAGES.map((num, i) => (
                                    <Image
                                        key={i}
                                        src={`/images/image-${num}.png`}
                                        height={200}
                                        width={200}
                                        alt={`Integration tool ${num}`}
                                        className="object-cover object-center size-18 flex-shrink-0"
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Ticker row 2 - slides left */}
                        <div className="integrations-ticker">
                            <div className="integrations-ticker-2">
                                {TICKER_2_IMAGES.map((num, i) => (
                                    <Image
                                        key={i}
                                        src={`/images/image-${num}.png`}
                                        height={200}
                                        width={200}
                                        alt={`Integration tool ${num}`}
                                        className="object-cover object-center size-18 flex-shrink-0"
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
                        description="Design custom media strategies perfectly aligned with your business goals. We combine channel expertise and full funnel thinking to deliver measurable performance."
                    />
                    <BenefitsCard
                        icon={<Users size={24} />}
                        title="Audience Insights"
                        description="Connect your brand with highly intent audiences via smart behavioral data, transactional signals, and deep segmentation to maximize complete targeting efficiency."
                    />
                    <BenefitsCard
                        icon={<Lightbulb size={24} />}
                        title="Creative Formats"
                        description="From interactive ad units to gamified storytelling experiences, we build highly immersive, creative components specifically designed to boldly drive high conversions."
                    />
                    <BenefitsCard
                        icon={<Handshake size={24} />}
                        title="Affiliate Growth"
                        description="Manage highly scalable affiliate programs backed by smart partner selections, rigorous fraud protections, and full real-time tracking to effortlessly maximize your ROI."
                    />
                </div>
            </div>
        </section>
    )
}

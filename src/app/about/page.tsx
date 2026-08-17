'use client'

import React, { useRef } from 'react'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin } from "lucide-react";
import SmoothLink from "@/components/SmoothLink";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const mainRef = useRef<HTMLDivElement>(null)
    const teamRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.from(".about-reveal", {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "expo.out",
        })

        gsap.fromTo(".team-card",
            {
                y: 80,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.4,
                stagger: 0.25,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: teamRef.current,
                    start: "top 80%",
                }
            }
        )
    }, { scope: mainRef })

    return (
        <main ref={mainRef} className="flex flex-col bg-beige-0 min-h-screen">
            <Navbar />

            {/* Premium Hero Section */}
            <div className="pt-28 md:pt-36 pb-12 md:pb-16 bg-linear-to-b from-beige-10 via-neutral-0/30 to-neutral-0 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <div className="flex items-center gap-4 mb-4 about-reveal">
                    <p className="text-eyebrow-large text-accent-blue tracking-[0.5em] uppercase font-black text-xs">
                        WE ARE ONLYMEDIA
                    </p>
                </div>

                <h1 className="text-[36px] sm:text-[48px] md:text-[72px] lg:text-[90px] font-black leading-[0.95] tracking-[-0.04em] text-neutral-30 about-reveal max-w-5xl">
                    More than an agency. <br className="hidden md:block" />
                    We are your <span className="text-accent-blue italic font-serif font-medium">growth partners.</span>
                </h1>

                <div className="max-w-3xl mx-auto mt-8 md:mt-10 about-reveal flex flex-col gap-4 text-base sm:text-lg md:text-xl text-neutral-20 leading-[1.6]">
                    <p>
                        OnlyMedia is a managed media partner combining audience intelligence, platform expertise and creative innovation to deliver structured media execution across modern digital ecosystems. We work closely with brands and agencies to activate campaigns with greater precision, clarity and accountability.
                    </p>
                    <p className="font-medium text-neutral-30">
                        Our singular vision is creating measurable impact for the world’s most ambitious brands.
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <div ref={teamRef} className="w-full bg-neutral-0 py-12 md:py-16 px-6 team-section relative">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8 md:mb-12 about-reveal">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-neutral-30 tracking-tight">BUILT BY MEDIA SPECIALISTS</h2>
                        <p className="text-base md:text-lg text-neutral-20 mt-2 max-w-2xl mx-auto">Experience across audience strategy, platform ecosystems and structured media execution built around measurable outcomes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">

                        {/* Ankita Shah */}
                        <div className="team-card group flex flex-col items-center text-center bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500 border border-neutral-10/10 h-full">
                            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-30 mb-1">Ankita Shah</h3>
                            <p className="text-accent-blue font-semibold uppercase tracking-widest text-xs sm:text-sm mb-4">Co-Founder</p>
                            <p className="text-neutral-20 text-base leading-relaxed mb-6 flex-grow">
                                Leads strategy, brand partnerships and client success across the OnlyMedia ecosystem. With 14+ years of experience in digital media, the focus remains on building audience-led strategies that combine platform precision, structured planning and measurable business outcomes across evolving digital ecosystems.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/ankita-shah-b59b4923/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 text-neutral-30 hover:text-accent-blue font-semibold text-sm sm:text-base transition-all duration-300"
                            >
                                <Linkedin className="w-5 h-5 stroke-[2] text-[#0A66C2] group-hover:scale-110 transition-transform duration-300" />
                                <span className="transform group-hover:translate-x-1 transition-transform duration-300">Connect on LinkedIn</span>
                            </a>
                        </div>

                        {/* Akshay Shah */}
                        <div className="team-card group flex flex-col items-center text-center bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500 border border-neutral-10/10 h-full">
                            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-30 mb-1">Akshay Shah</h3>
                            <p className="text-accent-blue font-semibold uppercase tracking-widest text-xs sm:text-sm mb-4">Co-Founder</p>
                            <p className="text-neutral-20 text-base leading-relaxed mb-6 flex-grow">
                                Drives integrated media execution, innovation and platform-led growth solutions across digital, transit and emerging media environments. With 16+ years of experience spanning VAS, digital and programmatic ecosystems, the approach combines executional depth with immersive media thinking to create scalable and high-impact brand experiences.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/akshayshah18/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 text-neutral-30 hover:text-accent-blue font-semibold text-sm sm:text-base transition-all duration-300"
                            >
                                <Linkedin className="w-5 h-5 stroke-[2] text-[#0A66C2] group-hover:scale-110 transition-transform duration-300" />
                                <span className="transform group-hover:translate-x-1 transition-transform duration-300">Connect on LinkedIn</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* Outro CTA Block */}
            <div className="w-full relative py-16 md:py-20 bg-neutral-30 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10 blur-3xl rounded-full bg-accent-blue scale-150 transform -translate-y-1/2"></div>
                <h2 className="text-[30px] sm:text-[40px] md:text-[52px] font-bold text-white mb-3 tracking-tight relative z-10 max-w-3xl leading-[1.15]">
                    Ready to grow with us?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-neutral-10 mb-6 md:mb-8 max-w-2xl relative z-10">
                    Let's architect the perfect media strategy for your brand's future.
                </p>
                <div className="relative z-10">
                    <SmoothLink href="/contact" className="group flex items-center justify-center bg-accent-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_40px_rgba(37,99,235,0.4)] overflow-hidden relative">
                        <span className="relative z-10 flex items-center">
                            Work with OnlyMedia
                            <svg className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                    </SmoothLink>
                </div>
            </div>

            <Footer />
        </main>
    );
}

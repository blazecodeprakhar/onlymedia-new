'use client'

import React, { useRef } from 'react'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const mainRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.from(".about-reveal", {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "expo.out",
        })

        gsap.from(".team-card", {
            y: 50,
            opacity: 0,
            duration: 1.0,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".team-section",
                start: "top 75%",
            }
        })
    }, { scope: mainRef })

    return (
        <main ref={mainRef} className="flex flex-col bg-beige-0 min-h-screen">
            <Navbar />

            {/* Premium Hero Section */}
            <div className="pt-48 pb-32 bg-linear-to-b from-beige-10 via-neutral-0/30 to-neutral-0 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <div className="flex items-center gap-4 mb-10 about-reveal">
                    <span className="h-[2px] w-12 bg-accent-blue rounded-full" />
                    <p className="text-eyebrow-large text-accent-blue tracking-[0.5em] uppercase font-black text-xs">
                        WE ARE ONLYMEDIA
                    </p>
                    <span className="h-[2px] w-12 bg-accent-blue rounded-full" />
                </div>

                <h1 className="text-[56px] md:text-[80px] lg:text-[110px] font-black leading-[0.9] tracking-[-0.04em] text-neutral-30 about-reveal max-w-6xl">
                    More than an agency. <br className="hidden md:block" />
                    We are your <span className="text-accent-blue italic font-serif font-medium">growth partners.</span>
                </h1>

                <div className="max-w-3xl mx-auto mt-16 about-reveal flex flex-col gap-6 text-xl md:text-2xl text-neutral-20 leading-[1.6]">
                    <p>
                        We bridge the gap between creative ambition and data-driven reality. At OnlyMedia, we are strategic thinkers and execution specialists, uniting deep expertise across performance marketing, media innovation, and audience strategy.
                    </p>
                    <p className="font-medium text-neutral-30">
                        Our singular vision is creating measurable impact for the world’s most ambitious brands.
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <div className="w-full bg-neutral-0 pb-32 pt-10 px-6 team-section relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 about-reveal">
                        <h2 className="text-4xl md:text-6xl font-black text-neutral-30 tracking-tight">The Minds Behind the Metrics</h2>
                        <p className="text-xl text-neutral-20 mt-4 max-w-2xl mx-auto">Decades of combined experience dedicated to navigating an ever-evolving media landscape.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                        {/* Ankita Shah */}
                        <div className="team-card group flex flex-col items-center text-center bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-neutral-10/10 h-full">
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 border-4 border-beige-10 relative bg-beige-20 flex-shrink-0">
                                <img
                                    src="/Ankita-Profile-IMage.jpeg"
                                    alt="Ankita Shah - Co-Founder"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => { e.currentTarget.src = "https://placehold.co/400x400/EDDFD0/1A1615?text=Ankita+Shah" }}
                                />
                            </div>
                            <h3 className="text-3xl font-bold text-neutral-30 mb-2">Ankita Shah</h3>
                            <p className="text-accent-blue font-semibold uppercase tracking-widest text-sm mb-6">Co-Founder & Head of Strategy</p>
                            <p className="text-neutral-20 text-lg leading-relaxed mb-8 flex-grow">
                                Ankita is the driving force behind our strategic vision and client success. With over 14 years shaping the digital media landscape, she elegantly combines crystal-clear strategy with platform mastery and an unrelenting performance-first mindset to ensure every campaign delivers true, long-term impact.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/ankita-shah-b59b4923/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-neutral-30 hover:text-accent-blue font-semibold transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm-16,160a8,8,0,0,1-16,0V136c0-13.78-7.83-20.94-17.76-20.94-11.85,0-18.06,8.74-18.24,19.23V184a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0v10.3a34,34,0,0,1,28.89-14.3C206.58,100,216,112.92,216,136.27V184Zm-96,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0V184ZM88,80a16,16,0,1,1,16-16A16,16,0,0,1,88,80Z"></path>
                                </svg>
                                <span>Connect on LinkedIn</span>
                            </a>
                        </div>

                        {/* Akshay Shah */}
                        <div className="team-card group flex flex-col items-center text-center bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 border border-neutral-10/10 h-full">
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 border-4 border-beige-10 relative bg-beige-20 flex-shrink-0">
                                <img
                                    src="/AKSHAY-profile-23_OM.jpg"
                                    alt="Akshay Shah - Co-Founder"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-top"
                                    onError={(e) => { e.currentTarget.src = "https://placehold.co/400x400/EDDFD0/1A1615?text=Akshay+Shah" }}
                                />
                            </div>
                            <h3 className="text-3xl font-bold text-neutral-30 mb-2">Akshay Shah</h3>
                            <p className="text-accent-blue font-semibold uppercase tracking-widest text-sm mb-6">Co-Founder & Head of Innovation</p>
                            <p className="text-neutral-20 text-lg leading-relaxed mb-8 flex-grow">
                                Overseeing media strategy and brand partnerships, Akshay transforms bold, innovative ideas into high-impact realities across digital, transit, and emerging media. Backed by more than 17 years of executional excellence, his leadership ensures that every solution we build delivers the precise results that matter most.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/akshayshah18/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-neutral-30 hover:text-accent-blue font-semibold transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm-16,160a8,8,0,0,1-16,0V136c0-13.78-7.83-20.94-17.76-20.94-11.85,0-18.06,8.74-18.24,19.23V184a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0v10.3a34,34,0,0,1,28.89-14.3C206.58,100,216,112.92,216,136.27V184Zm-96,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0V184ZM88,80a16,16,0,1,1,16-16A16,16,0,0,1,88,80Z"></path>
                                </svg>
                                <span>Connect on LinkedIn</span>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* Outro CTA Block */}
            <div className="w-full relative py-32 bg-neutral-30 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10 blur-3xl rounded-full bg-accent-blue scale-150 transform -translate-y-1/2"></div>
                <h2 className="text-[48px] md:text-[64px] font-bold text-white mb-6 tracking-tight relative z-10 max-w-3xl leading-[1.1]">
                    Ready to grow with us?
                </h2>
                <p className="text-xl md:text-2xl text-neutral-10 mb-12 max-w-2xl relative z-10">
                    Let's architect the perfect media strategy for your brand's future.
                </p>
                <div className="relative z-10">
                    <Link href="/contact" className="group flex items-center justify-center bg-accent-blue text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_40px_rgba(37,99,235,0.4)] overflow-hidden relative">
                        <span className="relative z-10 flex items-center">
                            Work with OnlyMedia
                            <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}

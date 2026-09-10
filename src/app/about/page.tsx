'use client'

import React, { useRef } from 'react'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Target, Layers, Palette, TrendingUp, Award, CheckCircle2, Search, BarChart3, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
    { label: "Combined Leadership Exp.", value: 30, suffix: "+", decimals: 0, sub: "Years of industry depth" },
    { label: "Platform Ecosystems", value: 8, suffix: "+", decimals: 0, sub: "Global ad networks" },
    { label: "Precision Targeting", value: 99.4, suffix: "%", decimals: 1, sub: "High-intent signals" },
    { label: "Measurable Impact", value: 3.2, suffix: "x", decimals: 1, sub: "Avg ROAS boost" },
];

const PLATFORMS = ["Meta", "DV360", "YouTube", "Google", "Pinterest", "Snapchat", "Reddit", "Connected TV"];

const PILLARS = [
    {
        icon: Target,
        title: "Audience Intelligence",
        desc: "Transforming raw behavioral and intent signals into structured targeting models that reach high-value audiences.",
        badge: "Data-Driven"
    },
    {
        icon: Layers,
        title: "Platform Depth",
        desc: "Deep integration across Meta, Google, DV360, YouTube, Pinterest, Snapchat, Reddit & Connected TV ecosystems.",
        badge: "Multi-Platform"
    },
    {
        icon: Palette,
        title: "Creative Innovation",
        desc: "Custom Impact Frames that convert passive viewing into active engagement through gamified and rich ad experiences.",
        badge: "High-Impact"
    },
    {
        icon: TrendingUp,
        title: "Accountable ROAS",
        desc: "Continuous real-time optimization across audiences, formats, and channels to guarantee business growth.",
        badge: "Performance"
    },
];

const PROCESS_STEPS = [
    {
        step: "01",
        title: "Audience Mapping",
        desc: "Analyzing transactional, behavioral, and contextual signals to construct high-intent consumer personas.",
        icon: Search
    },
    {
        step: "02",
        title: "Ecosystem Architecture",
        desc: "Structuring cross-channel campaigns across Meta, DV360, YouTube, and Connected TV for maximum synergy.",
        icon: Layers
    },
    {
        step: "03",
        title: "Creative Activation",
        desc: "Deploying interactive Impact Frames designed to maximize attention, engagement, and memorable brand interactions.",
        icon: Palette
    },
    {
        step: "04",
        title: "Optimization & Scale",
        desc: "Refining targeting parameters and creative variants continuously in real-time to drive compounding ROAS.",
        icon: BarChart3
    }
];

export default function AboutPage() {
    const mainRef = useRef<HTMLDivElement>(null)
    const teamRef = useRef<HTMLDivElement>(null)
    const pillarsRef = useRef<HTMLDivElement>(null)
    const processRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Hero reveal (fast & smooth)
        gsap.fromTo(".about-reveal",
            { y: 15, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.45,
                stagger: 0.05,
                ease: "power2.out",
            }
        )

        // Core Pillars reveal
        gsap.fromTo(".pillar-card",
            { y: 15, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.45,
                stagger: 0.05,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: pillarsRef.current,
                    start: "top 90%",
                }
            }
        )

        // Process step reveal
        gsap.fromTo(".process-step",
            { y: 15, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.45,
                stagger: 0.05,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: processRef.current,
                    start: "top 90%",
                }
            }
        )

        // Team card reveal
        gsap.fromTo(".team-card",
            { y: 15, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.45,
                stagger: 0.06,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: teamRef.current,
                    start: "top 90%",
                }
            }
        )
    }, { scope: mainRef })

    return (
        <main ref={mainRef} className="flex flex-col bg-white min-h-screen">
            <Navbar />

            {/* Premium Glassmorphic Hero Section */}
            <div className="relative pt-44 md:pt-48 pb-20 md:pb-28 bg-gradient-to-b from-[#EBF3FE]/80 via-[#F4F8FE] to-white flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                {/* Soft glowing ambient lighting */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-accent-blue/12 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute top-12 right-12 w-[300px] h-[300px] bg-blue-200/40 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto w-full">
                    {/* Top Pill Badge */}
                    <div className="flex items-center gap-2 mb-6 about-reveal">
                        <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-accent-blue/30 bg-white/95 text-accent-blue text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase shadow-xs backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-accent-blue animate-ping" />
                            WE ARE ONLYMEDIA
                        </span>
                    </div>

                    {/* Main Headline - Guaranteed Exactly 2 Lines */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[80px] font-black leading-[1.08] tracking-[-0.03em] text-neutral-900 about-reveal max-w-5xl mx-auto">
                        More than an agency. <br className="hidden sm:block" />
                        We are your <span className="text-accent-blue font-serif italic font-normal">growth partners.</span>
                    </h1>

                    {/* Subheading & Strategic Vision Pill */}
                    <div className="max-w-3xl mx-auto mt-6 md:mt-8 about-reveal flex flex-col items-center gap-6">
                        <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed font-normal">
                            OnlyMedia is a managed media partner combining audience intelligence, platform expertise, and creative innovation to deliver structured media execution across modern digital ecosystems. We work closely with brands and agencies to activate campaigns with greater precision, clarity, and accountability.
                        </p>

                        <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-white/90 border border-blue-200/70 shadow-xs backdrop-blur-md">
                            <Award className="w-5 h-5 text-accent-blue shrink-0" />
                            <p className="font-bold text-neutral-800 text-sm sm:text-base tracking-tight">
                                Creating measurable impact for the world’s most ambitious brands.
                            </p>
                        </div>
                    </div>

                    {/* Ecosystem & Key Metrics Card Showcase */}
                    {/* 
                    <div className="w-full mt-12 bg-white/95 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 border border-blue-200/70 shadow-[0_20px_50px_rgba(21,108,194,0.08)] about-reveal flex flex-col gap-8">
                        <div className="flex flex-col items-center gap-3.5">
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-accent-blue">ACTIVATING ACROSS GLOBAL ECOSYSTEMS</span>
                            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                                {PLATFORMS.map((plat) => (
                                    <span key={plat} className="px-4 py-2 rounded-full bg-slate-50 text-neutral-800 hover:bg-accent-blue hover:text-white border border-slate-200/80 text-xs sm:text-sm font-bold transition-all duration-300 shadow-2xs">
                                        {plat}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 border-t border-slate-100">
                            {STATS.map((stat, i) => (
                                <div key={i} className="group/stat flex flex-col items-center p-4 sm:p-5 rounded-2xl bg-[#F4F8FE] border border-blue-100/90 hover:border-accent-blue/40 hover:bg-white hover:shadow-md transition-all duration-300">
                                    <AnimatedCounter
                                        value={stat.value}
                                        decimals={stat.decimals}
                                        suffix={stat.suffix}
                                        duration={2.2}
                                        className="text-3xl sm:text-4xl md:text-5xl font-black text-accent-blue tracking-tight group-hover/stat:scale-105 transition-transform duration-300"
                                    />
                                    <span className="text-xs sm:text-sm font-bold text-neutral-800 mt-1.5">{stat.label}</span>
                                    <span className="text-[11px] text-neutral-500 font-medium mt-0.5">{stat.sub}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    */}
                </div>
            </div>

            {/* Core Capabilities Section */}
            {/* 
            <div ref={pillarsRef} className="w-full py-16 md:py-24 px-6 bg-slate-50/60 border-y border-neutral-100 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-accent-blue uppercase tracking-widest text-xs font-extrabold mb-3 inline-block">ENGINEERED FOR EXCELLENCE</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-30 tracking-tight">Our Core Capabilities</h2>
                        <p className="text-base md:text-lg text-neutral-20 mt-3 max-w-2xl mx-auto">Combining platform precision, high-impact creative formats, and structured execution.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PILLARS.map((item, i) => {
                            const IconComponent = item.icon
                            return (
                                <div key={i} className="pillar-card bg-[#E4EEFD] hover:bg-white rounded-3xl p-8 border border-blue-200/50 hover:border-accent-blue/40 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_rgba(21,108,194,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-white text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-all duration-300 shadow-sm">
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-accent-blue bg-white/80 px-2.5 py-1 rounded-full border border-blue-200/60">
                                                {item.badge}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-neutral-30 mb-3 group-hover:text-accent-blue transition-colors">{item.title}</h3>
                                        <p className="text-sm text-neutral-20 leading-relaxed font-normal">{item.desc}</p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-blue-200/40 flex items-center gap-1.5 text-xs font-bold text-accent-blue">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                        <span>Verified Execution</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            */}

            {/* Operating Model Pipeline */}
            <div ref={processRef} className="w-full py-16 md:py-24 px-6 bg-white border-b border-neutral-100 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14 md:mb-18">
                        <span className="text-accent-blue uppercase tracking-widest text-xs font-extrabold mb-3 inline-block">STRUCTURED EXECUTION</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-30 tracking-tight">The OnlyMedia Operating Model</h2>
                        <p className="text-base md:text-lg text-neutral-20 mt-3 max-w-2xl mx-auto">From initial audience intelligence to continuous performance optimization.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PROCESS_STEPS.map((stepItem, index) => {
                            const StepIcon = stepItem.icon
                            return (
                                <div key={index} className="process-step bg-[#F4F8FE] rounded-3xl p-7 border border-blue-100/90 hover:border-accent-blue/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-3xl font-black text-accent-blue/30 group-hover:text-accent-blue transition-colors font-mono">{stepItem.step}</span>
                                            <div className="w-10 h-10 rounded-xl bg-white text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-all duration-300 shadow-2xs">
                                                <StepIcon className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold text-neutral-30 mb-2">{stepItem.title}</h3>
                                        <p className="text-xs sm:text-sm text-neutral-20 leading-relaxed font-normal">{stepItem.desc}</p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-bold text-accent-blue flex items-center justify-between">
                                        <span>Phase {stepItem.step}</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-accent-blue group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Leadership Section */}
            <div ref={teamRef} className="w-full bg-white py-16 md:py-24 px-6 team-section relative">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-accent-blue uppercase tracking-widest text-xs font-extrabold mb-3 inline-block">LEADERSHIP</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-30 tracking-tight">BUILT BY MEDIA SPECIALISTS</h2>
                        <p className="text-base md:text-lg text-neutral-20 mt-3 max-w-2xl mx-auto">Experience across audience strategy, platform ecosystems and structured media execution built around measurable outcomes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Ankita Shah */}
                        <div className="team-card group flex flex-col bg-white rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_24px_50px_rgba(21,108,194,0.15)] transition-all duration-500 border border-blue-200/60 hover:border-accent-blue/50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                            <div className="flex items-center gap-5 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-blue-600 text-white font-black text-2xl flex items-center justify-center shadow-md shrink-0">
                                    AS
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-black text-neutral-30">Ankita Shah</h3>
                                    <span className="inline-block mt-0.5 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue font-extrabold uppercase tracking-widest text-xs">
                                        Co-Founder
                                    </span>
                                </div>
                            </div>

                            <p className="text-neutral-20 text-base sm:text-lg leading-relaxed mb-6 flex-grow font-normal">
                                With 14+ years in digital media, Ankita brings a strong blend of strategic thinking, relationship building and attention to detail. Her strength lies in understanding people, simplifying complex challenges and turning ideas into effective solutions. At OnlyMedia, she brings a thoughtful, collaborative approach to building lasting client relationships and creating an organization that people trust.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3.5 py-1.5 rounded-full bg-[#EBF3FE] text-neutral-30 text-xs font-semibold border border-blue-200/50">Audience Strategy</span>
                                <span className="px-3.5 py-1.5 rounded-full bg-[#EBF3FE] text-neutral-30 text-xs font-semibold border border-blue-200/50">Brand Partnerships</span>
                                <span className="px-3.5 py-1.5 rounded-full bg-[#EBF3FE] text-neutral-30 text-xs font-semibold border border-blue-200/50">Client Success</span>
                            </div>

                            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">14+ YRS EXPERIENCE</span>
                                <a
                                    href="https://www.linkedin.com/in/ankita-shah-b59b4923/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EBF3FE] hover:bg-accent-blue text-neutral-30 hover:text-white font-bold text-sm transition-all duration-300 shadow-2xs group/link"
                                >
                                    <Linkedin className="w-4 h-4 stroke-[2.2] text-[#0A66C2] group-hover/link:text-white transition-colors" />
                                    <span>Connect on LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        {/* Akshay Shah */}
                        <div className="team-card group flex flex-col bg-white rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_24px_50px_rgba(21,108,194,0.15)] transition-all duration-500 border border-blue-200/60 hover:border-accent-blue/50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                            <div className="flex items-center gap-5 mb-6">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-blue to-blue-600 text-white font-black text-2xl flex items-center justify-center shadow-md shrink-0">
                                    AS
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-black text-neutral-30">Akshay Shah</h3>
                                    <span className="inline-block mt-0.5 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue font-extrabold uppercase tracking-widest text-xs">
                                        Co-Founder
                                    </span>
                                </div>
                            </div>

                            <p className="text-neutral-20 text-base sm:text-lg leading-relaxed mb-6 flex-grow font-normal">
                                With 16+ years in digital media and marketing, Akshay is driven by curiosity, strategic thinking and a strong understanding of what makes media work. His strength lies in connecting the bigger business objective with the right audience, technology and media opportunity. At OnlyMedia, he brings an entrepreneurial mindset, a passion for innovation and a relentless focus on creating solutions that deliver real value for clients.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3.5 py-1.5 rounded-full bg-[#EBF3FE] text-neutral-30 text-xs font-semibold border border-blue-200/50">Programmatic Execution</span>
                                <span className="px-3.5 py-1.5 rounded-full bg-[#EBF3FE] text-neutral-30 text-xs font-semibold border border-blue-200/50">CTV Solutions</span>
                                <span className="px-3.5 py-1.5 rounded-full bg-[#EBF3FE] text-neutral-30 text-xs font-semibold border border-blue-200/50">Media Innovation</span>
                            </div>

                            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">16+ YRS EXPERIENCE</span>
                                <a
                                    href="https://www.linkedin.com/in/akshayshah18/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EBF3FE] hover:bg-accent-blue text-neutral-30 hover:text-white font-bold text-sm transition-all duration-300 shadow-2xs group/link"
                                >
                                    <Linkedin className="w-4 h-4 stroke-[2.2] text-[#0A66C2] group-hover/link:text-white transition-colors" />
                                    <span>Connect on LinkedIn</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

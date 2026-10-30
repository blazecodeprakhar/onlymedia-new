'use client'
import React, { useRef } from 'react'
import Image from 'next/image';
import { motion } from 'motion/react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Target, Layers, Palette, TrendingUp, CheckCircle2 } from "lucide-react";

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

export default function AboutPage() {
    const mainRef = useRef<HTMLDivElement>(null)
    const teamRef = useRef<HTMLDivElement>(null)
    const pillarsRef = useRef<HTMLDivElement>(null)

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

            {/* Clean, Premium About Introduction Section */}
            <div className="relative pt-40 md:pt-48 pb-16 md:pb-24 bg-gradient-to-b from-[#F6FAFF] via-[#FBFCFE] to-white px-6 md:px-12 lg:px-16 overflow-hidden">
                {/* Subtle refined ambient background glow */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Top Two-Column Grid: Headline on left, Introduction on right */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                        {/* Left Column: Eyebrow + Headline + Strategic Pillars */}
                        <div className="lg:col-span-7 flex flex-col text-left about-reveal">
                            <span className="text-accent-blue font-bold text-xs sm:text-sm uppercase tracking-[0.25em] mb-4 inline-block">
                                About OnlyMedia
                            </span>
                            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-black leading-[1.1] tracking-[-0.03em] text-neutral-900">
                                More than an agency. <br />
                                We are your <span className="text-accent-blue font-serif italic font-normal">growth partners.</span>
                            </h1>

                            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-8 pt-6 border-t border-neutral-200/80 text-xs sm:text-sm font-semibold text-neutral-700">
                                <span className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-2xs">Audience Strategy</span>
                                <span className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-2xs">Programmatic Media</span>
                                <span className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-2xs">Connected TV & OTT</span>
                                <span className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-2xs">Interactive Formats</span>
                            </div>
                        </div>

                        {/* Right Column: Company Introduction & Key Proof Points */}
                        <div className="lg:col-span-5 flex flex-col text-left lg:pt-3 about-reveal">
                            <p className="text-lg sm:text-xl text-neutral-800 font-medium leading-relaxed">
                                OnlyMedia is a managed media partner combining audience intelligence, platform expertise, and creative innovation to deliver structured media execution across modern digital ecosystems.
                            </p>
                            <p className="text-base text-neutral-600 leading-relaxed font-normal mt-4">
                                We work closely with brands and agencies to activate campaigns with greater precision, clarity, and accountability — moving beyond generic ad placements to deliver measurable outcomes.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-6 mt-6 border-t border-neutral-200/80">
                                <div>
                                    <p className="text-3xl font-black text-neutral-900 tracking-tight">8+</p>
                                    <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-0.5">Platform Ecosystems</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-black text-neutral-900 tracking-tight">30+ Yrs</p>
                                    <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-0.5">Combined Leadership Depth</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Real Work & Campaign Execution Showcase */}
                    <div className="mt-16 md:mt-20 pt-10 border-t border-neutral-200/70 about-reveal">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-blue">Real Work in Action</span>
                                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mt-1">
                                    Structured execution across global ecosystems
                                </h3>
                            </div>
                            <span className="text-xs sm:text-sm text-neutral-500 font-medium">
                                Verified campaign activations & creative units
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {/* Card 1: Fujifilm */}
                            <div className="group bg-white rounded-2xl border border-neutral-200/80 hover:border-accent-blue/40 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                                <div className="p-5 flex items-center justify-between border-b border-neutral-100 bg-neutral-50/50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200/60 p-1 flex items-center justify-center">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src="/images/Logos/Fujifilms.png" alt="Fujifilm" className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-neutral-900">Fujifilm</p>
                                            <p className="text-[11px] text-neutral-500">Instax Mini 13 Launch</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-blue px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100">
                                        DV360 Video
                                    </span>
                                </div>
                                <div className="p-4 bg-neutral-50 flex items-center justify-center overflow-hidden">
                                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xs border border-neutral-200/60 bg-white">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="/Casestudy SS/Fuji FIlms.png" alt="Fujifilm Campaign" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col justify-between flex-1">
                                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                                        In-banner immersive video storytelling designed to drive completion and product recall.
                                    </p>
                                    <div className="pt-3 mt-3 border-t border-neutral-100 flex items-center justify-between">
                                        <span className="text-[11px] font-semibold text-neutral-500">Video Completion Rate</span>
                                        <span className="text-sm font-black text-accent-blue">51%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Sharp */}
                            <div className="group bg-white rounded-2xl border border-neutral-200/80 hover:border-accent-blue/40 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                                <div className="p-5 flex items-center justify-between border-b border-neutral-100 bg-neutral-50/50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200/60 p-1 flex items-center justify-center">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src="/images/Logos/logo-sharp.svg" alt="Sharp" className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-neutral-900">Sharp</p>
                                            <p className="text-[11px] text-neutral-500">55th Anniversary Campaign</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-blue px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100">
                                        Interactive DV360
                                    </span>
                                </div>
                                <div className="p-4 bg-neutral-50 flex items-center justify-center overflow-hidden">
                                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xs border border-neutral-200/60 bg-white">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="/Casestudy SS/Sharp.png" alt="Sharp Campaign" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col justify-between flex-1">
                                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                                        Interactive "tap-to-reveal" gamified ad units delivering above-benchmark click engagement.
                                    </p>
                                    <div className="pt-3 mt-3 border-t border-neutral-100 flex items-center justify-between">
                                        <span className="text-[11px] font-semibold text-neutral-500">Click-Through Action</span>
                                        <span className="text-sm font-black text-accent-blue">1.94% CTA</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Sony MAX */}
                            <div className="group bg-white rounded-2xl border border-neutral-200/80 hover:border-accent-blue/40 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                                <div className="p-5 flex items-center justify-between border-b border-neutral-100 bg-neutral-50/50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-white border border-neutral-200/60 p-1 flex items-center justify-center">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src="/images/Logos/SONY_MAX_Logo_2022.png" alt="Sony MAX" className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-neutral-900">Sony MAX</p>
                                            <p className="text-[11px] text-neutral-500">Premiere Activation</p>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-blue px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100">
                                        Connected TV / OTT
                                    </span>
                                </div>
                                <div className="p-4 bg-neutral-50 flex items-center justify-center overflow-hidden">
                                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xs border border-neutral-200/60 bg-white">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src="/Casestudy SS/SonyMax-Thamma.png" alt="Sony MAX Campaign" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                                <div className="p-5 flex flex-col justify-between flex-1">
                                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                                        High-impact connected television and streaming video strategies across large-screen audiences.
                                    </p>
                                    <div className="pt-3 mt-3 border-t border-neutral-100 flex items-center justify-between">
                                        <span className="text-[11px] font-semibold text-neutral-500">Living Room Reach</span>
                                        <span className="text-sm font-black text-accent-blue">High Attention</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Section */}
            <div ref={teamRef} className="w-full bg-white py-16 md:py-24 px-6 team-section relative border-t border-neutral-100">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-accent-blue uppercase tracking-widest text-xs font-extrabold mb-3 inline-block">LEADERSHIP</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-30 tracking-tight">BUILT BY MEDIA SPECIALISTS</h2>
                        <p className="text-base md:text-lg text-neutral-20 mt-3 max-w-2xl mx-auto">Experience across audience strategy, platform ecosystems and structured media execution built around measurable outcomes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Ankita Shah */}
                        <div className="team-card group flex flex-col bg-white rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_24px_50px_rgba(0,123,255,0.15)] transition-all duration-500 border border-blue-200/60 hover:border-accent-blue/50 relative overflow-hidden">
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
                        <div className="team-card group flex flex-col bg-white rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_24px_50px_rgba(0,123,255,0.15)] transition-all duration-500 border border-blue-200/60 hover:border-accent-blue/50 relative overflow-hidden">
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

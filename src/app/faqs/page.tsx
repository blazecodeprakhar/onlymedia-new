'use client'

import React, { useRef, useState } from 'react'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Plus, Minus } from "lucide-react";
import Link from 'next/link';

const faqs = [
    {
        question: "What does OnlyMedia do?",
        answer: "OnlyMedia is a strategic media solutions partner focused on creating impactful media strategies that drive measurable growth. We go beyond ad placements, We align every campaign with your business objectives, using data, custom planning, and continuous optimization across platforms like Meta, Google, YouTube, DV360, OTT, and Transit Media."
    },
    {
        question: "Why do businesses need a custom media plan?",
        answer: "Because one-size-fits-all media strategies don’t work. A custom media plan ensures:\n\n• Your audience is reached with precision\n• Budgets are optimized for ROI\n• Messaging aligns with your business goals\n\nAt OnlyMedia, we build bespoke media plans that are dynamic, data-driven, and performance-focused.\n\nLearn more in our blog: [Why Your Business Needs a Custom Media Plan (and How to Get One)]."
    },
    {
        question: "What is a data-driven media strategy and why is it important?",
        answer: "A data-driven strategy uses real-time analytics, audience behavior insights, and predictive modeling to remove guesswork from media buying. It helps you:\n\n• Identify high-intent audiences\n• Optimize ad spend\n• Measure what truly matters - business growth\n\nRead: [The Ultimate Guide to Developing a Data-Driven Media Strategy]."
    },
    {
        question: "How does OnlyMedia measure success?",
        answer: "We measure success using SMART KPIs - Specific, Measurable, Achievable, Relevant, and Time-bound. Metrics we track include:\n\n• Awareness: Reach, impressions\n• Engagement: CTR, interactions\n• Conversions: CPA, ROAS, leads\n\nWe also provide real-time dashboards and detailed reports so you know where every rupee is going.\n\nSee our blog: [Setting SMART KPIs for Your Digital Media Campaigns]."
    },
    {
        question: "Which industries does OnlyMedia work with?",
        answer: "We work with everyone, across multiple verticals including:\n\n• BFSI (Loans, Insurance, NBFCs)\n• D2C & Retail\n• FMCG & Lifestyle\n• Automotive, Education\n\nOur experience allows us to customize media strategies for both niche and mass-market businesses."
    },
    {
        question: "Do you offer performance marketing solutions?",
        answer: "Yes. We specialize in performance-driven campaigns that focus on:\n\n• Lead generation and acquisition\n• Affiliate marketing & app installs\n• Retention and remarketing strategies\n\nOur performance approach ensures you pay for results, not just reach."
    },
    {
        question: "How do you choose the right media platforms for campaigns?",
        answer: "Our approach is platform-agnostic. We don’t push trends, we pick what works for your goals. Based on audience insights and budget, we recommend the best mix across:\n\n• Meta\n• Google\n• YouTube, reddit\n• DV360 & Programmatic\n• OTT & Connected TV\n• On-ground activations (where relevant)"
    },
    {
        question: "How does OnlyMedia ensure campaigns are privacy-compliant?",
        answer: "We adhere to GDPR and data privacy norms by using consent-based and anonymized data. Our audience targeting is built on behavioral, contextual, and interest-based signals without compromising user privacy."
    },
    {
        question: "What is audience segmentation and why does it matter?",
        answer: "Audience segmentation is the process of grouping your customers based on:\n- Demographics\n- Behavior\n- Purchase intent\n- Engagement patterns\n\nAt OnlyMedia, this allows us to create personalized campaigns that convert better, because relevance drives results."
    },
    {
        question: "Do you offer integrated campaigns (online + offline)?",
        answer: "Yes! We create integrated media solutions that combine digital channels with on-ground activations, transit branding, and experiential marketing, ensuring consistency across all touchpoints."
    },
    {
        question: "What creative formats do you use?",
        answer: "We go beyond static banners. Our creative strategy includes:\n• Interactive ads\n• Rich media formats\n• Gamified creatives\n• Video-first storytelling\n\nInnovation in format leads to better engagement and stronger performance."
    },
    {
        question: "How can I start working with OnlyMedia?",
        answer: "Simply reach out to us at connect@yellow-moose-181905.hostingersite.com or fill in our contact form. We’ll schedule a discovery session to understand your business and craft a custom media strategy aligned with your growth goals."
    }
];

const FAQItem = ({ faq, isOpen, toggleOpen }: { faq: any, isOpen: boolean, toggleOpen: () => void }) => {
    // Format the answer to support links and newlines
    const formattedAnswer = faq.answer.split('\n').map((line: string, index: number) => {
        // Handle markdown-style links [Text] -> blue styled text
        const parts = line.split(/(\[.*?\])/g);

        return (
            <React.Fragment key={index}>
                {parts.map((part: string, i: number) => {
                    if (part.startsWith('[') && part.endsWith(']')) {
                        return <span key={i} className="text-accent-blue font-semibold hover:underline cursor-pointer">{part.slice(1, -1)}</span>
                    }
                    return <span key={i}>{part}</span>
                })}
                {index < faq.answer.split('\n').length - 1 && <br />}
            </React.Fragment>
        )
    })

    return (
        <div
            className={`border-b border-neutral-10/20 py-8 group cursor-pointer transition-colors duration-300 rounded-2xl px-6 md:px-10 -mx-6 md:-mx-10 ${isOpen ? 'bg-neutral-0/50' : 'hover:bg-neutral-0/30'}`}
            onClick={toggleOpen}
        >
            <div className="flex justify-between items-center gap-6 select-none">
                <h3 className={`text-2xl md:text-[32px] font-semibold tracking-[-0.03em] transition-colors duration-300 ${isOpen ? 'text-accent-blue' : 'text-neutral-30 group-hover:text-accent-blue'}`}>
                    {faq.question}
                </h3>
                <button className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)] ${isOpen ? 'bg-accent-blue text-white rotate-180' : 'bg-white border border-neutral-10/20 text-neutral-30 group-hover:bg-accent-blue group-hover:border-accent-blue group-hover:text-white'}`}>
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                </button>
            </div>

            <div className={`grid transition-all duration-[600ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                <div className="overflow-hidden">
                    <p className="text-xl md:text-2xl text-neutral-20 leading-[1.6] md:pr-16 max-w-4xl opacity-90">
                        {formattedAnswer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function FAQPage() {
    const heroRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLDivElement>(null)
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

    useGSAP(() => {
        gsap.from(".faq-reveal", {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "expo.out",
        })

        gsap.from(".faq-item-reveal", {
            y: 40,
            opacity: 0,
            duration: 1.0,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.4
        })
    }, { scope: heroRef })

    return (
        <main className="flex flex-col bg-beige-0 min-h-screen">
            <Navbar />

            {/* Premium Hero Section */}
            <div ref={heroRef} className="pt-48 pb-20 bg-linear-to-b from-beige-10 via-neutral-0/30 to-neutral-0 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <div className="flex items-center gap-4 mb-10 faq-reveal">
                    <p className="text-eyebrow-large text-accent-blue tracking-[0.5em] uppercase font-black text-xs">
                        KNOWLEDGE BASE
                    </p>
                </div>
                <h1 className="text-[64px] md:text-[96px] lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em] text-neutral-30 faq-reveal max-w-5xl">
                    Answers to your <br className="hidden md:block" />
                    <span className="text-accent-blue italic font-serif font-medium">biggest questions.</span>
                </h1>
                <p className="max-w-xl text-body-xl text-neutral-20 mt-12 faq-reveal leading-[1.4]">
                    Everything you need to know about our data-driven media solutions, custom strategies, and how we measure success.
                </p>
            </div>

            {/* Animated Accordion List */}
            <div className="w-full bg-neutral-0 pb-32 pt-10 px-6">
                <div className="max-w-5xl mx-auto flex flex-col" ref={listRef}>
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item-reveal">
                            <FAQItem
                                faq={faq}
                                isOpen={openIndex === index}
                                toggleOpen={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Outro CTA Block */}
            <div className="w-full relative py-32 bg-neutral-30 flex flex-col items-center justify-center text-center px-6 faq-item-reveal overflow-hidden">
                <div className="absolute inset-0 opacity-10 blur-3xl rounded-full bg-accent-blue scale-150 transform -translate-y-1/2"></div>
                <h2 className="text-[48px] md:text-[64px] font-bold text-white mb-6 tracking-tight relative z-10 max-w-3xl leading-[1.1]">
                    Still have questions? Let's talk strategy.
                </h2>
                <p className="text-xl md:text-2xl text-neutral-10 mb-12 max-w-2xl relative z-10">
                    We're here to help you navigate the complex media landscape. Let's start a conversation about your business goals.
                </p>
                <div className="relative z-10">
                    <Link href="/contact" className="group flex items-center justify-center bg-accent-blue text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_40px_rgba(37,99,235,0.4)] overflow-hidden relative">
                        <span className="relative z-10 flex items-center">
                            Get in touch
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

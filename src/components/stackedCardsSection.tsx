'use client'

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { ContainerScroll, CardSticky } from "@/components/blocks/cards-stack"

const PROCESS_PHASES = [
    {
        id: "process-1",
        title: "Results First",
        description:
            "Every strategy we build is focused on business impact. From improving acquisition efficiency to scaling revenue through smarter media investments, our campaigns are designed to produce measurable outcomes that move the business forward.",
    },
    {
        id: "process-2",
        title: "Platform Masters",
        description:
            "Our team operates across the most powerful digital ecosystems including Meta, Google, YouTube, DV360, and performance affiliate networks. With deep platform knowledge, we know how to unlock growth opportunities others often miss.",
    },
    {
        id: "process-3",
        title: "Hybrid Reach",
        description:
            "We bridge the gap between digital and physical media. By combining online performance campaigns with strategic offline placements like transit media, we create powerful brand visibility across the entire customer journey.",
    },
    {
        id: "process-4",
        title: "Audience Precision",
        description:
            "Using advanced data analysis and behavioral insights, we identify and reach the audiences that matter most. This ensures your brand speaks to the right people at the right time with maximum efficiency.",
    },
    {
        id: "process-5",
        title: "Creative Impact",
        description:
            "Great media deserves great storytelling. Our creative concepts are designed to capture attention, encourage interaction, and influence decisions through engaging and innovative formats.",
    },
    {
        id: "process-6",
        title: "Continuous Growth",
        description:
            "Marketing performance should never stay static. Through constant monitoring, data insights, and real time optimization, we refine campaigns continuously to unlock stronger performance over time.",
    },
]

const StackedCardsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const pinY = useTransform(scrollYProgress, [0, 1], ["0vh", "275vh"]);

    return (
        // Light sky-blue canvas — matches the site's blue-10/blue-20 palette
        <section
            ref={sectionRef}
            className="relative w-full h-[375vh]"
            style={{
                background: 'linear-gradient(160deg, #dbeafe 0%, #e0eeff 25%, #EBF3FF 55%, #dde8f8 80%, #e2ecf5 100%)'
            }}
        >
            {/* Very subtle soft glow orbs — barely visible, bleed through glass as warm light */}
            <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] left-[0%] w-[700px] h-[700px] rounded-full opacity-40"
                    style={{ background: 'radial-gradient(circle, #bfdbfe 0%, transparent 65%)' }} />
                <div className="absolute bottom-[0%] right-[0%] w-[600px] h-[600px] rounded-full opacity-35"
                    style={{ background: 'radial-gradient(circle, #93c5fd 0%, transparent 65%)' }} />
                <div className="absolute top-[35%] left-[35%] w-[450px] h-[450px] rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, #a5c8f0 0%, transparent 70%)' }} />
            </div>

            <motion.div
                style={{ y: pinY }}
                className="absolute top-0 left-0 h-screen w-full flex items-center justify-center"
            >
                <div className="container px-6 xl:px-12 max-w-7xl mx-auto w-full">
                    <div className="grid md:grid-cols-2 gap-16 xl:gap-24 items-center h-full">

                        {/* Left Content — dark text on light background */}
                        <div className="flex flex-col justify-center h-full max-w-lg pb-20">
                            <h5 className="text-sm uppercase tracking-widest text-accent-blue font-bold mb-4">WHY US</h5>
                            <h2 className="mb-6 mt-4 text-[40px] md:text-[52px] font-bold tracking-tight text-neutral-30 leading-[1.1]">
                                Smarter Media.<br />
                                <span className="text-accent-blue font-serif italic font-medium">Stronger Business<br />Outcomes.</span>
                            </h2>
                            <p className="max-w-prose text-[17px] text-neutral-20 leading-relaxed">
                                We combine strategy, technology, and creative thinking to build marketing systems that actually drive growth. Our approach connects audience intelligence, media performance, and creative innovation so every campaign works with purpose and delivers measurable results.
                            </p>
                        </div>

                        {/* Right — Glass Cards */}
                        <ContainerScroll className="relative w-full">
                            {PROCESS_PHASES.map((phase, index) => {
                                const total = PROCESS_PHASES.length;

                                return (
                                    <CardSticky
                                        key={phase.id}
                                        index={index}
                                        total={total}
                                        progress={scrollYProgress}
                                        className="rounded-[32px] w-full min-h-[400px] flex flex-col justify-center overflow-hidden"
                                        style={{
                                            // Light blue glassmorphism matching site palette
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(219,234,254,0.55) 50%, rgba(191,219,254,0.45) 100%)',
                                            backdropFilter: 'blur(24px) saturate(160%)',
                                            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
                                            border: '1px solid rgba(255,255,255,0.85)',
                                            boxShadow: '0 8px 40px rgba(147,197,253,0.18), 0 2px 12px rgba(147,197,253,0.12), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(147,197,253,0.15)',
                                        }}
                                        incrementY={3}
                                        incrementZ={10}
                                    >
                                        {/* Mirror sheen — bright top-edge highlight */}
                                        <div
                                            className="absolute top-0 left-0 right-0 h-[1px] rounded-t-[32px]"
                                            style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.6) 80%, transparent 100%)' }}
                                        />
                                        {/* Soft diagonal gloss sweep — mimics glass reflection */}
                                        <div
                                            className="absolute inset-0 pointer-events-none rounded-[32px]"
                                            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 45%, rgba(191,219,254,0.08) 100%)' }}
                                        />

                                        {/* Card Content */}
                                        <div className="relative z-10 p-10 md:p-14">
                                            <div className="flex items-center justify-between gap-4 mb-6">
                                                <h2 className="text-3xl font-bold tracking-tight text-neutral-30">
                                                    {phase.title}
                                                </h2>
                                                <h3 className="text-4xl font-black text-accent-blue/20 tabular-nums">
                                                    {String(index + 1).padStart(2, "0")}
                                                </h3>
                                            </div>

                                            {/* Thin blue accent rule */}
                                            <div className="w-10 h-[2px] rounded-full bg-accent-blue mb-6 opacity-50" />

                                            <p className="text-[16px] text-neutral-20 leading-relaxed">
                                                {phase.description}
                                            </p>
                                        </div>
                                    </CardSticky>
                                )
                            })}
                        </ContainerScroll>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default StackedCardsSection;

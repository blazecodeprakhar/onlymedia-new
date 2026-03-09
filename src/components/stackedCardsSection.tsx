'use client'

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { ContainerScroll, CardSticky } from "@/components/blocks/cards-stack"

const PROCESS_PHASES = [
    {
        id: "process-1",
        title: "Results First",
        description: "Every strategy ties directly to business impact, growing revenue, reducing acquisition costs, and delivering outcomes that actually move the needle.",
    },
    {
        id: "process-2",
        title: "Platform Masters",
        description: "We operate across Meta, Google, YouTube, DV360, and affiliate networks, unlocking growth opportunities others miss.",
    },
    {
        id: "process-3",
        title: "Hybrid Reach",
        description: "We blend digital performance campaigns with strategic offline placements to build brand visibility across the full customer journey.",
    },
    {
        id: "process-4",
        title: "Audience Precision",
        description: "Data-driven targeting ensures your brand reaches the right people, at the right moment, with maximum efficiency.",
    },
    {
        id: "process-5",
        title: "Creative Impact",
        description: "Compelling creative built to capture attention, spark interaction, and drive decisions. Not just impressions.",
    },
    {
        id: "process-6",
        title: "Continuous Growth",
        description: "We monitor, learn, and optimise in real time so your campaigns get sharper and stronger every week.",
    },
]

// These constants MUST match cards-stack.tsx: cardSpacingVh=55, divisor=275
const SECTION_HEIGHT_VH = 375;
const PIN_END_VH = 275;

const StackedCardsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const pinY = useTransform(
        scrollYProgress,
        [0, 1],
        ["0vh", `${PIN_END_VH}vh`],
        { clamp: true }
    );

    return (
        <section
            ref={sectionRef}
            className="relative w-full"
            style={{
                height: `${SECTION_HEIGHT_VH}vh`,
                overflowX: 'hidden',
                background: 'linear-gradient(160deg, #dbeafe 0%, #e0eeff 25%, #EBF3FF 55%, #dde8f8 80%, #e2ecf5 100%)'
            }}
        >
            {/* Glow orbs */}
            <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] left-[0%] w-[700px] h-[700px] rounded-full opacity-40"
                    style={{ background: 'radial-gradient(circle, #bfdbfe 0%, transparent 65%)' }} />
                <div className="absolute bottom-[0%] right-[0%] w-[600px] h-[600px] rounded-full opacity-35"
                    style={{ background: 'radial-gradient(circle, #93c5fd 0%, transparent 65%)' }} />
                <div className="absolute top-[35%] left-[35%] w-[450px] h-[450px] rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, #a5c8f0 0%, transparent 70%)' }} />
            </div>

            {/* ── Unified sticky pane: single-col on mobile, two-col on desktop ── */}
            <motion.div
                style={{ y: pinY }}
                className="absolute top-0 left-0 w-full flex items-start md:items-center justify-center"
            >
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 xl:px-14 py-16 md:py-0 md:h-screen md:flex md:items-center">
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 xl:gap-24 w-full">

                        {/* Left heading block */}
                        <div className="flex flex-col justify-center max-w-lg">
                            <h5 className="text-xs md:text-sm uppercase tracking-widest text-accent-blue font-bold mb-2 md:mb-3">
                                WHY US
                            </h5>
                            <h2 className="mb-4 md:mb-5 mt-2 text-[32px] md:text-[44px] xl:text-[52px] font-bold tracking-tight text-neutral-30 leading-[1.1]">
                                Smarter Media.<br />
                                <span className="text-accent-blue font-serif italic font-medium">
                                    Stronger Business <br className="hidden md:block" />Outcomes.
                                </span>
                            </h2>
                            <p className="max-w-sm text-[14px] md:text-[16px] xl:text-[17px] text-neutral-20 leading-relaxed">
                                Strategy, technology, and creative thinking united to build marketing systems that drive real, measurable growth.
                            </p>
                        </div>

                        {/* Right — stacked animated cards (same on all screen sizes) */}
                        <ContainerScroll className="relative w-full">
                            {PROCESS_PHASES.map((phase, index) => (
                                <CardSticky
                                    key={phase.id}
                                    index={index}
                                    total={PROCESS_PHASES.length}
                                    progress={scrollYProgress}
                                    className="rounded-[20px] md:rounded-[28px] w-full min-h-[220px] md:min-h-[340px] flex flex-col justify-center overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(219,234,254,0.55) 50%, rgba(191,219,254,0.45) 100%)',
                                        backdropFilter: 'blur(24px) saturate(160%)',
                                        WebkitBackdropFilter: 'blur(24px) saturate(160%)',
                                        border: '1px solid rgba(255,255,255,0.85)',
                                        boxShadow: '0 8px 40px rgba(147,197,253,0.18), 0 2px 12px rgba(147,197,253,0.12), inset 0 1px 0 rgba(255,255,255,0.95)',
                                    }}
                                    incrementY={3}
                                    incrementZ={10}
                                >
                                    {/* Mirror sheen */}
                                    <div className="absolute top-0 left-0 right-0 h-[1px] rounded-t-[20px] md:rounded-t-[28px]"
                                        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.6) 80%, transparent 100%)' }} />
                                    {/* Glass gloss */}
                                    <div className="absolute inset-0 pointer-events-none rounded-[20px] md:rounded-[28px]"
                                        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 45%, rgba(191,219,254,0.08) 100%)' }} />

                                    <div className="relative z-10 p-6 sm:p-8 md:p-10 xl:p-12">
                                        <div className="flex items-center justify-between gap-4 mb-3 md:mb-4">
                                            <h2 className="text-[18px] md:text-[22px] xl:text-[26px] font-bold tracking-tight text-neutral-30">
                                                {phase.title}
                                            </h2>
                                            <h3 className="text-[24px] md:text-3xl xl:text-4xl font-black text-accent-blue/20 tabular-nums">
                                                {String(index + 1).padStart(2, "0")}
                                            </h3>
                                        </div>
                                        <div className="w-6 md:w-8 h-[2px] rounded-full bg-accent-blue mb-3 md:mb-4 opacity-50" />
                                        <p className="text-[13px] md:text-[15px] xl:text-[16px] text-neutral-20 leading-relaxed">
                                            {phase.description}
                                        </p>
                                    </div>
                                </CardSticky>
                            ))}
                        </ContainerScroll>

                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default StackedCardsSection;

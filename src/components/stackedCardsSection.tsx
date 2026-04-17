'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'motion/react';
import { ContainerScroll, CardSticky } from "@/components/blocks/cards-stack"

const PROCESS_PHASES = [
    {
        id: "process-1",
        title: "Results First",
        description: "Every decision starts with outcomes. Campaigns are structured to align with revenue goals, cost efficiency and meaningful engagement ensuring media contributes to real business impact.",
    },
    {
        id: "process-2",
        title: "Platform Expertise",
        description: "Deep expertise across Meta, Google, YouTube, DV360, Pinterest, Snapchat, Reddit and affiliate ecosystems ensures campaigns are structured and scaled effectively.",
    },
    {
        id: "process-3",
        title: "Hybrid Reach",
        description: "We blend digital performance campaigns with strategic offline placements to build brand visibility across the full customer journey.",
    },
    {
        id: "process-4",
        title: "Audience Precision",
        description: "Better outcomes begin with better audience signals. We activate campaigns using behavioural, intent and engagement data to ensure media reaches users with higher relevance.",
    },
    {
        id: "process-5",
        title: "Creative Impact",
        description: "Compelling creative built to capture attention, spark interaction, and drive decisions. Not just impressions.",
    },
    {
        id: "process-6",
        title: "Continuous Growth",
        description: "We monitor performance across audiences, creatives and platforms, refining strategies continuously to improve efficiency and outcomes.",
    },
]

// These constants MUST match cards-stack.tsx: cardSpacingVh=55, divisor=275
const SECTION_HEIGHT_VH = 375;
const PIN_END_VH = 275;

// ─────────────────────────────────────────────
// MOBILE: Pure native-touch swipe card carousel
// No Lenis, no scroll-linking, no momentum/bounce
// ─────────────────────────────────────────────
function MobileCardCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right'>('left');
    const touchStartX = useRef<number | null>(null);
    const SWIPE_THRESHOLD = 40; // px needed to count as a swipe

    const goNext = useCallback(() => {
        if (activeIndex < PROCESS_PHASES.length - 1) {
            setDirection('left');   // next card slides in from right
            setActiveIndex(i => i + 1);
        }
    }, [activeIndex]);

    const goPrev = useCallback(() => {
        if (activeIndex > 0) {
            setDirection('right');  // prev card slides in from left
            setActiveIndex(i => i - 1);
        }
    }, [activeIndex]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const deltaX = touchStartX.current - e.changedTouches[0].clientX;
        touchStartX.current = null;
        if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
        if (deltaX > 0) goNext(); // swiped left → next
        else goPrev();            // swiped right → prev
    };

    const variants = {
        enter: (dir: 'left' | 'right') => ({ x: dir === 'left' ? '100%' : '-100%', opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: 'left' | 'right') => ({ x: dir === 'left' ? '-100%' : '100%', opacity: 0 }),
    };

    const phase = PROCESS_PHASES[activeIndex];

    return (
        <div className="flex flex-col gap-6 w-full">
            {/* Left heading block */}
            <div className="flex flex-col justify-center">
                <h5 className="text-sm md:text-base uppercase tracking-widest text-accent-blue font-bold mb-2">
                    WHY US
                </h5>
                <h2 className="mb-3 mt-1 text-[28px] font-bold tracking-tight text-neutral-30 leading-[1.1]">
                    Smarter Media.<br />
                    <span className="text-accent-blue font-serif italic font-medium">
                        Stronger Business Outcomes.
                    </span>
                </h2>
                <p className="text-[16px] text-neutral-20 leading-relaxed opacity-90">
                    Media works best when executed with clarity, precision and continuous optimization.
                </p>
            </div>

            {/* Card swiper */}
            <div
                className="relative overflow-hidden rounded-[20px] min-h-[260px] w-full"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                style={{ touchAction: 'pan-y' }}
            >
                <AnimatePresence custom={direction} initial={false} mode="wait">
                    <motion.div
                        key={phase.id}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute inset-0 flex flex-col justify-center p-6 rounded-[20px]"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(219,234,254,0.8) 50%, rgba(191,219,254,0.7) 100%)',
                            border: '1px solid rgba(255,255,255,0.9)',
                        }}
                    >
                        <div className="flex items-center justify-between gap-4 mb-3">
                            <h2 className="text-[18px] font-bold tracking-tight text-neutral-30">
                                {phase.title}
                            </h2>
                            <span className="text-[24px] font-black text-accent-blue/20 tabular-nums">
                                {String(activeIndex + 1).padStart(2, "0")}
                            </span>
                        </div>
                        <div className="w-6 h-[2px] rounded-full bg-accent-blue mb-3 opacity-50" />
                        <p className="text-[15px] text-neutral-20 leading-relaxed">
                            {phase.description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dot indicators + nav buttons */}
            <div className="flex items-center justify-between px-1">
                <div className="flex gap-2">
                    {PROCESS_PHASES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setDirection(i > activeIndex ? 'left' : 'right'); setActiveIndex(i); }}
                            className={`rounded-full transition-all duration-200 ${i === activeIndex ? 'w-6 h-2 bg-accent-blue' : 'w-2 h-2 bg-accent-blue/25'}`}
                        />
                    ))}
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={goPrev}
                        disabled={activeIndex === 0}
                        className="w-9 h-9 rounded-full border border-accent-blue/30 flex items-center justify-center disabled:opacity-30 text-accent-blue active:bg-accent-blue/10"
                        aria-label="Previous card"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 12L4 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 8H4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </button>
                    <button
                        onClick={goNext}
                        disabled={activeIndex === PROCESS_PHASES.length - 1}
                        className="w-9 h-9 rounded-full border border-accent-blue/30 flex items-center justify-center disabled:opacity-30 text-accent-blue active:bg-accent-blue/10"
                        aria-label="Next card"
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 8h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────
// DESKTOP: Original scroll-linked stacked cards
// ─────────────────────────────────────────────
function DesktopStackedCards() {
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
            id="why-us"
            ref={sectionRef}
            className="relative w-full hidden md:block"
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

            <motion.div
                style={{ y: pinY }}
                className="absolute top-0 left-0 w-full flex items-center justify-center"
            >
                <div className="w-full max-w-7xl mx-auto px-8 xl:px-14 py-0 h-screen flex items-center">
                    <div className="grid grid-cols-2 gap-16 xl:gap-24 w-full">

                        {/* Left heading block */}
                        <div className="flex flex-col justify-center max-w-lg">
                            <h5 className="text-lg uppercase tracking-widest text-accent-blue font-bold mb-3">
                                WHY US
                            </h5>
                            <h2 className="mb-5 mt-2 text-[44px] xl:text-[52px] font-bold tracking-tight text-neutral-30 leading-[1.1]">
                                Smarter Media.<br />
                                <span className="text-accent-blue font-serif italic font-medium">
                                    Stronger Business <br className="hidden xl:block" />Outcomes.
                                </span>
                            </h2>
                            <p className="max-w-sm text-[18px] xl:text-[19px] text-neutral-20 leading-relaxed opacity-90">
                                Media works best when executed with clarity, precision and continuous optimization.
                            </p>
                        </div>

                        {/* Right — stacked animated cards */}
                        <ContainerScroll className="relative w-full">
                            {PROCESS_PHASES.map((phase, index) => (
                                <CardSticky
                                    key={phase.id}
                                    index={index}
                                    total={PROCESS_PHASES.length}
                                    progress={scrollYProgress}
                                    className="rounded-[28px] w-full min-h-[340px] flex flex-col justify-center overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(219,234,254,0.7) 50%, rgba(191,219,254,0.6) 100%)',
                                        backdropFilter: 'blur(20px)',
                                        WebkitBackdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255,255,255,0.9)',
                                        boxShadow: '0 8px 30px rgba(147,197,253,0.12)',
                                    }}
                                    incrementY={3}
                                    incrementZ={10}
                                >
                                    {/* Mirror sheen */}
                                    <div className="absolute top-0 left-0 right-0 h-[1px] rounded-t-[28px]"
                                        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.6) 80%, transparent 100%)' }} />
                                    {/* Glass gloss */}
                                    <div className="absolute inset-0 pointer-events-none rounded-[28px]"
                                        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.05) 45%, rgba(191,219,254,0.08) 100%)' }} />

                                    <div className="relative z-10 p-10 xl:p-12">
                                        <div className="flex items-center justify-between gap-4 mb-4">
                                            <h2 className="text-[22px] xl:text-[26px] font-bold tracking-tight text-neutral-30">
                                                {phase.title}
                                            </h2>
                                            <h3 className="text-3xl xl:text-4xl font-black text-accent-blue/20 tabular-nums">
                                                {String(index + 1).padStart(2, "0")}
                                            </h3>
                                        </div>
                                        <div className="w-8 h-[2px] rounded-full bg-accent-blue mb-4 opacity-50" />
                                        <p className="text-[17px] xl:text-[18px] text-neutral-20 leading-relaxed">
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
    );
}

// ─────────────────────────────────────────────
// Main export: renders the right component
// ─────────────────────────────────────────────
const StackedCardsSection = () => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    // Avoid layout flash — render nothing until we know the viewport
    if (isMobile === null) return null;

    if (isMobile) {
        return (
            <section
                id="why-us"
                className="w-full px-5 py-16"
                style={{ background: 'linear-gradient(160deg, #dbeafe 0%, #e0eeff 25%, #EBF3FF 55%, #dde8f8 80%, #e2ecf5 100%)' }}
            >
                <MobileCardCarousel />
            </section>
        );
    }

    return <DesktopStackedCards />;
};

export default StackedCardsSection;

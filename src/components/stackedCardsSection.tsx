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

    // We track the scroll progress of the entire SECTION
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Plain transform — no spring to avoid bounce/overshoot on card stacking
    const pinY = useTransform(scrollYProgress, [0, 1], ["0vh", "275vh"]);

    return (
        // Parent bounds precisely mapped so the next section slides up perfectly on cue
        <section ref={sectionRef} className="bg-linear-to-b from-beige-0 to-[#F9F8F8] relative w-full h-[375vh]">

            <motion.div
                style={{ y: pinY }}
                className="relative top-0 h-screen w-full overflow-hidden flex items-center justify-center"
            >
                <div className="container px-6 xl:px-12 max-w-7xl mx-auto w-full">

                    <div className="grid md:grid-cols-2 gap-16 xl:gap-24 items-center h-full">

                        {/* Left Content - Now safely locked inside the pinned sticky container */}
                        <div className="flex flex-col justify-center h-full max-w-lg pb-20">
                            <h5 className="text-sm uppercase tracking-widest text-accent-blue font-bold mb-4">WHY US</h5>
                            <h2 className="mb-6 mt-4 text-[40px] md:text-[52px] font-bold tracking-tight text-neutral-30 leading-[1.1]">
                                Smarter Media.<br />
                                <span className="text-accent-blue font-serif italic font-medium">Stronger Business<br />Outcomes.</span>
                            </h2>
                            <p className="max-w-prose text-body-large text-neutral-20 leading-relaxed">
                                We combine strategy, technology, and creative thinking to build marketing systems that actually drive growth. Our approach connects audience intelligence, media performance, and creative innovation so every campaign works with purpose and delivers measurable results.
                            </p>
                        </div>

                        {/* Right Scrolling Wrapper */}
                        <ContainerScroll className="relative w-full">
                            {PROCESS_PHASES.map((phase, index) => {
                                // Calculate total cards to map progress correctly
                                const total = PROCESS_PHASES.length;

                                return (
                                    <CardSticky
                                        key={phase.id}
                                        index={index}
                                        total={total}
                                        progress={scrollYProgress}
                                        className="rounded-[40px] border border-[#E4E2E2] p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] bg-[#FFFFFF] w-full min-h-[400px] flex flex-col justify-center transition-colors hover:border-accent-blue/30"
                                        incrementY={3}
                                        incrementZ={10}
                                    >
                                        <div className="flex items-center justify-between gap-4 mb-8">
                                            <h2 className="text-3xl font-bold tracking-tight text-neutral-30">
                                                {phase.title}
                                            </h2>
                                            <h3 className="text-4xl font-black text-accent-blue/20">
                                                {String(index + 1).padStart(2, "0")}
                                            </h3>
                                        </div>

                                        <p className="text-lg text-neutral-20 leading-relaxed">
                                            {phase.description}
                                        </p>
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

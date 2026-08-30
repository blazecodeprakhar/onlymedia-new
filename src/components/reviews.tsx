'use client'

import React, { useRef } from 'react'
import { caseStudies } from '@/data/caseStudies'
import CaseStudyCard from './CaseStudyCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SmoothLink from './SmoothLink'
import { ArrowRight, TrendingUp, Target, BarChart3, Award } from 'lucide-react'

function Reviews() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 85%',
            }
        }).from('.case-studies-reveal', {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.15,
            ease: 'power2.out'
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="reviews py-6 sm:py-8 relative overflow-hidden w-full bg-transparent">
            {/* Soft Ambient Header Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent-blue/5 rounded-full blur-[130px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 flex flex-col items-center gap-10 sm:gap-12">
                {/* Header */}
                <div className="text-center flex flex-col items-center gap-5 max-w-4xl case-studies-reveal">
                    {/* Light Blue Theme Pill Badge */}
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/25 bg-accent-blue/10 text-accent-blue text-xs sm:text-sm font-bold tracking-widest uppercase shadow-sm shadow-accent-blue/5">
                        Campaign Case Studies
                    </span>

                    <h2 className="text-[30px] sm:text-[42px] md:text-[50px] text-neutral-30 max-w-4xl leading-[1.15] font-black tracking-tight">
                        OnlyMedia <span className="text-accent-blue font-serif italic font-normal">Data-Driven Media Solutions</span> That Deliver Measurable Growth
                    </h2>

                    <p className="text-base sm:text-lg text-neutral-20/90 max-w-2xl font-normal leading-relaxed">
                        Explore real results powered by high-intent targeting, programmatic execution, and platform partnerships across DV360, Meta, YouTube, Pinterest, and Connected TV.
                    </p>
                </div>



                {/* Rotating Case Study Cards Row */}
                <div
                    className="w-full overflow-hidden py-4 case-studies-reveal"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)'
                    }}
                >
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 pl-4">
                        {[...caseStudies, ...caseStudies].map((study, i) => (
                            <CaseStudyCard key={`${study.id}-${i}`} study={study} />
                        ))}
                    </div>
                </div>

                {/* Bottom Action Link */}
                <div className="flex justify-center mt-2 case-studies-reveal">
                    <SmoothLink
                        href="/insights"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-accent-blue text-white font-bold text-sm hover:bg-neutral-30 transition-all duration-300 shadow-md shadow-accent-blue/20 hover:shadow-xl hover:gap-3.5 group"
                    >
                        View All Case Studies on Insights
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </SmoothLink>
                </div>
            </div>
        </section>
    )
}

export default Reviews

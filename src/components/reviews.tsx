'use client'

import React, { useRef } from 'react'
import { caseStudies } from '@/data/caseStudies'
import CaseStudyCard from './CaseStudyCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SmoothLink from './SmoothLink'
import { ArrowRight, ChevronLeft, ChevronRight, Award } from 'lucide-react'

function Reviews() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 85%',
            }
        }).from('.case-studies-reveal', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power2.out'
        })
    }, { scope: sectionRef })

    const handleScroll = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return
        const scrollAmount = direction === 'left' ? -380 : 380
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }

    return (
        <section ref={sectionRef} className="reviews py-10 sm:py-16 relative overflow-hidden w-full bg-transparent">
            {/* Soft Ambient Header Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent-blue/5 rounded-full blur-[130px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col items-center gap-8 sm:gap-10">
                {/* Header + Manual Arrow Controls */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-7xl px-2 case-studies-reveal">
                    <div className="text-center md:text-left flex flex-col items-center md:items-start gap-3 max-w-3xl">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/25 bg-accent-blue/10 text-accent-blue text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-xs">
                            <Award className="w-3.5 h-3.5" />
                            Campaign Case Studies
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black text-neutral-900 tracking-tight leading-[1.15]">
                            OnlyMedia <span className="text-accent-blue font-serif italic font-normal">Data-Driven Media Solutions</span> That Deliver Measurable Growth
                        </h2>
                    </div>

                    {/* Manual Navigation Left & Right Arrow Buttons */}
                    <div className="flex items-center gap-3 shrink-0">
                        <button
                            onClick={() => handleScroll('left')}
                            className="w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-sm hover:shadow-lg hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300 flex items-center justify-center text-neutral-800 cursor-pointer active:scale-95"
                            aria-label="Scroll left case studies"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => handleScroll('right')}
                            className="w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-sm hover:shadow-lg hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-all duration-300 flex items-center justify-center text-neutral-800 cursor-pointer active:scale-95"
                            aria-label="Scroll right case studies"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Still Case Study Cards Row with Smooth Scroll & Edge Fade Mask */}
                <div
                    ref={scrollContainerRef}
                    className="w-full max-w-7xl overflow-x-auto scroll-smooth no-scrollbar py-4 px-4 flex gap-6 case-studies-reveal select-none"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)'
                    }}
                >
                    {caseStudies.map((study) => (
                        <CaseStudyCard key={study.id} study={study} />
                    ))}
                </div>

                {/* Bottom Action Link */}
                <div className="flex justify-center mt-2 case-studies-reveal">
                    <SmoothLink
                        href="/insights"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-accent-blue text-white font-bold text-sm hover:bg-neutral-900 transition-all duration-300 shadow-md shadow-accent-blue/20 hover:shadow-xl hover:gap-3.5 group"
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

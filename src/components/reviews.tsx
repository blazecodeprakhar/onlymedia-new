'use client'

import React, { useRef } from 'react'
import { caseStudies } from '@/data/caseStudies'
import CaseStudyCard from './CaseStudyCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SmoothLink from './SmoothLink'
import { ArrowRight, Sparkles } from 'lucide-react'

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
        <section ref={sectionRef} className="reviews py-8 overflow-hidden w-full">
            <div className="w-full max-w-[1400px] mx-auto px-4 flex flex-col items-center gap-10">
                {/* Header */}
                <div className="text-center flex flex-col items-center gap-4 max-w-4xl case-studies-reveal">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dark-brown/30 bg-beige-40/60 text-dark-brown text-[14px] font-semibold tracking-wider uppercase">
                        <Sparkles className="w-4 h-4 text-accent-blue" />
                        Campaign Case Studies
                    </span>

                    <h2 className="text-h2 text-neutral-30 max-w-3xl leading-tight font-black">
                        OnlyMedia Data-Driven Media Solutions That Deliver Measurable Growth
                    </h2>

                    <p className="text-body-normal text-neutral-20 max-w-2xl">
                        Explore real results powered by high-intent targeting, programmatic execution, and platform partnerships across DV360, Meta, YouTube, Pinterest, and Connected TV.
                    </p>
                </div>

                {/* Rotating Case Study Cards Row */}
                <div
                    className="w-full overflow-hidden py-4 case-studies-reveal"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
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
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-30 text-white font-bold text-sm hover:bg-accent-blue transition-all duration-300 shadow-md hover:shadow-xl hover:gap-3"
                    >
                        View All Case Studies on Insights
                        <ArrowRight className="w-4 h-4" />
                    </SmoothLink>
                </div>
            </div>
        </section>
    )
}

export default Reviews

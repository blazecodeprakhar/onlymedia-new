'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contactForm"

const EXPO_EASE = [0.16, 1, 0.3, 1] as const

export default function ContactPage() {
    const backdropRef = useRef<HTMLDivElement>(null)
    const orbitParallaxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = backdropRef.current
        if (!container) return

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        let rafId = 0
        let active = false
        let targetX = 0
        let targetY = 0
        let currentX = 0
        let currentY = 0

        const resetSpot = () => {
            container.style.setProperty('--cx', '50%')
            container.style.setProperty('--cy', '260px')
            if (orbitParallaxRef.current) {
                orbitParallaxRef.current.style.transform = 'translate3d(0px, 0px, 0px)'
            }
        }

        const tick = () => {
            if (!active) return

            const lerp = reducedMotion ? 1 : 0.14
            currentX += (targetX - currentX) * lerp
            currentY += (targetY - currentY) * lerp

            container.style.setProperty('--cx', `${currentX.toFixed(1)}px`)
            container.style.setProperty('--cy', `${currentY.toFixed(1)}px`)

            if (orbitParallaxRef.current && !reducedMotion) {
                const rect = container.getBoundingClientRect()
                const nx = rect.width ? (currentX / rect.width - 0.5) * -12 : 0
                const ny = rect.height ? (currentY / rect.height - 0.35) * -10 : 0
                orbitParallaxRef.current.style.transform = `translate3d(${nx.toFixed(1)}px, ${ny.toFixed(1)}px, 0)`
            }

            if (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2) {
                rafId = requestAnimationFrame(tick)
            } else {
                rafId = 0
            }
        }

        const handlePointerMove = (e: PointerEvent) => {
            if (e.pointerType === 'touch') return
            const rect = container.getBoundingClientRect()
            const nextX = e.clientX - rect.left
            const nextY = e.clientY - rect.top

            if (!active) {
                active = true
                currentX = nextX
                currentY = nextY
            }

            targetX = nextX
            targetY = nextY

            if (!rafId) {
                rafId = requestAnimationFrame(tick)
            }
        }

        const handlePointerLeave = () => {
            active = false
            if (rafId) {
                cancelAnimationFrame(rafId)
                rafId = 0
            }
            resetSpot()
        }

        resetSpot()
        container.addEventListener('pointermove', handlePointerMove, { passive: true })
        container.addEventListener('pointerleave', handlePointerLeave)

        return () => {
            if (rafId) cancelAnimationFrame(rafId)
            container.removeEventListener('pointermove', handlePointerMove)
            container.removeEventListener('pointerleave', handlePointerLeave)
        }
    }, [])

    return (
        <main className="flex flex-col bg-white min-h-screen">
            <Navbar />

            {/* Seamless Concentric Radar Backdrop wrapping Hero + upper ContactForm */}
            <div ref={backdropRef} className="contact-page-shell relative w-full overflow-hidden">
                {/* Fine architectural dot texture */}
                <div aria-hidden="true" className="contact-micro-grid absolute inset-0 pointer-events-none" />

                {/* Interactive ambient cursor spotlight */}
                <div aria-hidden="true" className="contact-spotlight absolute inset-0 pointer-events-none" />

                {/* Centered Full-Bleed Concentric Radar Field */}
                <div
                    aria-hidden="true"
                    className="contact-radar-mask pointer-events-none absolute left-1/2 -translate-x-1/2 top-[220px] sm:top-[250px] md:top-[285px] -translate-y-1/2 w-[960px] sm:w-[1380px] md:w-[1720px] lg:w-[2050px] z-0"
                >
                    <motion.div
                        ref={orbitParallaxRef}
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.25, ease: EXPO_EASE }}
                        className="w-full h-auto will-change-transform"
                    >
                        <svg viewBox="0 0 1800 1800" className="w-full h-auto block overflow-visible">
                            {/* Alternating concentric shaded ripple bands */}
                            <g fill="none">
                                <circle cx="900" cy="900" r="110" fill="#DBEAFE" fillOpacity="0.34" />
                                <circle cx="900" cy="900" r="267.5" stroke="#CFE2FC" strokeWidth="105" strokeOpacity="0.36" />
                                <circle cx="900" cy="900" r="477.5" stroke="#CFE2FC" strokeWidth="105" strokeOpacity="0.28" />
                                <circle cx="900" cy="900" r="687.5" stroke="#CFE2FC" strokeWidth="105" strokeOpacity="0.2" />
                                <circle cx="900" cy="900" r="897.5" stroke="#CFE2FC" strokeWidth="105" strokeOpacity="0.12" />
                            </g>

                            {/* Crisp concentric ring borders */}
                            <g fill="none" stroke="#8AB8F5">
                                <circle cx="900" cy="900" r="110" strokeOpacity="0.46" strokeWidth="1.2" />
                                <circle cx="900" cy="900" r="215" strokeOpacity="0.42" strokeWidth="1.2" />
                                <circle cx="900" cy="900" r="320" strokeOpacity="0.36" strokeWidth="1.2" />
                                <circle cx="900" cy="900" r="425" strokeOpacity="0.3" strokeWidth="1.2" />
                                <circle cx="900" cy="900" r="530" strokeOpacity="0.24" strokeWidth="1.2" />
                                <circle cx="900" cy="900" r="635" strokeOpacity="0.2" strokeWidth="1.2" />
                                <circle cx="900" cy="900" r="740" strokeOpacity="0.16" strokeWidth="1.2" />
                                <circle cx="900" cy="900" r="845" strokeOpacity="0.12" strokeWidth="1.2" />
                            </g>

                            {/* Subtle crosshair axes centered behind Let's Talk. */}
                            <g stroke="#027BFF" strokeOpacity="0.12" strokeWidth="1">
                                <line x1="900" y1="0" x2="900" y2="1800" />
                                <line x1="0" y1="900" x2="1800" y2="900" />
                            </g>

                            {/* Staggered outward sonar pulse waves */}
                            <circle
                                cx="900"
                                cy="900"
                                r="110"
                                fill="none"
                                stroke="#027BFF"
                                strokeWidth="1.5"
                                className="contact-sonar-1"
                            />
                            <circle
                                cx="900"
                                cy="900"
                                r="110"
                                fill="none"
                                stroke="#027BFF"
                                strokeWidth="1.5"
                                className="contact-sonar-2"
                            />

                            {/* Orbital Layer A: upper-left signal node + subtle sweep arc */}
                            <g className="contact-orbit-a">
                                <circle
                                    cx="900"
                                    cy="900"
                                    r="320"
                                    fill="none"
                                    stroke="#027BFF"
                                    strokeOpacity="0.22"
                                    strokeWidth="1.4"
                                    strokeDasharray="3 14"
                                />
                                <path
                                    d="M620 742 A320 320 0 0 1 735 625"
                                    fill="none"
                                    stroke="#027BFF"
                                    strokeWidth="2.4"
                                    strokeOpacity="0.55"
                                    strokeLinecap="round"
                                />
                                <circle cx="638" cy="716" r="14" fill="#027BFF" className="contact-node-halo" />
                                <circle cx="638" cy="716" r="6.5" fill="#027BFF" stroke="#FFFFFF" strokeWidth="2" />
                            </g>

                            {/* Orbital Layer B: upper-right & lower-right signal nodes */}
                            <g className="contact-orbit-b">
                                <path
                                    d="M1135 547 A425 425 0 0 1 1275 700"
                                    fill="none"
                                    stroke="#027BFF"
                                    strokeWidth="2.2"
                                    strokeOpacity="0.45"
                                    strokeLinecap="round"
                                />
                                <circle cx="1226" cy="627" r="14" fill="#027BFF" className="contact-node-halo" />
                                <circle cx="1226" cy="627" r="6.5" fill="#027BFF" stroke="#FFFFFF" strokeWidth="2" />

                                <circle cx="1318" cy="1226" r="14" fill="#027BFF" className="contact-node-halo" />
                                <circle cx="1318" cy="1226" r="6.5" fill="#027BFF" stroke="#FFFFFF" strokeWidth="2" />
                            </g>
                        </svg>
                    </motion.div>
                </div>

                {/* Contact Hero Copy */}
                <section className="relative z-10 pt-32 sm:pt-36 md:pt-44 pb-10 sm:pb-12 lg:pb-14 px-6 flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col items-center max-w-2xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.85, ease: EXPO_EASE, delay: 0.08 }}
                            className="flex items-center justify-center mb-4 md:mb-5"
                        >
                            <span className="px-4 sm:px-5 py-1.5 rounded-full border border-[#027BFF]/20 bg-[#E4F0FF]/85 backdrop-blur-sm text-accent-blue font-black tracking-[0.28em] uppercase text-[10px] md:text-xs shadow-[0_2px_14px_rgba(2,123,255,0.08)]">
                                PARTNER WITH US
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.95, ease: EXPO_EASE, delay: 0.16 }}
                            className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-black leading-[1.05] tracking-tight text-[#192A3D]"
                        >
                            Let’s <span className="text-accent-blue italic font-serif font-normal">Talk.</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.9, ease: EXPO_EASE, delay: 0.28 }}
                            className="max-w-xl mx-auto mt-6 flex flex-col gap-3 text-center"
                        >
                            <p className="text-base sm:text-lg text-[#192A3D] font-medium leading-relaxed">
                                Planning a campaign, exploring a new platform, <br className="hidden sm:inline" />
                                or looking for a smarter way to reach your audience?
                            </p>
                            <p className="text-sm sm:text-base text-[#2F4359]/85 leading-relaxed font-normal">
                                Tell us what you’re working on. We’ll help you identify the right audience, <br className="hidden sm:inline" />
                                media opportunities, and approach to move your campaign forward.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Form Card overlapping the lower radar field */}
                <div className="relative z-10 w-full pb-16">
                    <ContactForm />
                </div>
            </div>

            <Footer />
        </main>
    )
}

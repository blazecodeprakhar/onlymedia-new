'use client'

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const EXPO_EASE = [0.16, 1, 0.3, 1] as const
const ROTATING_WORDS = ['growth', 'reach', 'sales', 'ROI'] as const

let isInitialMount = true

function Hero() {
    const heroRef = useRef<HTMLElement>(null)
    const radarRef = useRef<HTMLDivElement>(null)
    const reticleRef = useRef<HTMLDivElement>(null)

    const [heroDelay] = useState(isInitialMount ? 1.05 : 0)
    const [wordIndex, setWordIndex] = useState(0)

    useEffect(() => {
        isInitialMount = false
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length)
        }, 2400)

        return () => clearInterval(timer)
    }, [])

    // Smooth 60/120fps spotlight + reticle cursor tracking without React re-renders
    useEffect(() => {
        const heroEl = heroRef.current
        if (!heroEl) return

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

        let rafId = 0
        let active = false
        let lastClientX = 0
        let lastClientY = 0
        let targetX = 0
        let targetY = 0
        let currentX = 0
        let currentY = 0

        const setDefaultSpot = () => {
            const isMobile = window.innerWidth < 768
            heroEl.style.setProperty('--spot-x', isMobile ? '50%' : '74%')
            heroEl.style.setProperty('--spot-y', isMobile ? '54%' : '50%')
            if (reticleRef.current) {
                reticleRef.current.style.opacity = '0'
            }
            if (radarRef.current) {
                radarRef.current.style.transform = 'translate3d(0px, 0px, 0px)'
            }
        }

        const tick = () => {
            if (!active) return

            const lerp = reducedMotion ? 1 : 0.18
            currentX += (targetX - currentX) * lerp
            currentY += (targetY - currentY) * lerp

            heroEl.style.setProperty('--spot-x', `${currentX.toFixed(1)}px`)
            heroEl.style.setProperty('--spot-y', `${currentY.toFixed(1)}px`)

            if (reticleRef.current) {
                reticleRef.current.style.opacity = '1'
                reticleRef.current.style.transform = `translate3d(${(currentX - 30).toFixed(1)}px, ${(currentY - 30).toFixed(1)}px, 0)`
            }

            if (radarRef.current && !reducedMotion) {
                const rect = heroEl.getBoundingClientRect()
                const nx = rect.width ? (currentX / rect.width - 0.5) * -14 : 0
                const ny = rect.height ? (currentY / rect.height - 0.5) * -14 : 0
                radarRef.current.style.transform = `translate3d(${nx.toFixed(1)}px, ${ny.toFixed(1)}px, 0)`
            }

            if (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2) {
                rafId = requestAnimationFrame(tick)
            } else {
                rafId = 0
            }
        }

        const updateFromClientCoords = (clientX: number, clientY: number) => {
            const rect = heroEl.getBoundingClientRect()
            const nextX = clientX - rect.left
            const nextY = clientY - rect.top

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

        const handlePointerMove = (e: PointerEvent) => {
            if (e.pointerType === 'touch') return
            lastClientX = e.clientX
            lastClientY = e.clientY
            updateFromClientCoords(e.clientX, e.clientY)
        }

        const handlePointerLeave = () => {
            active = false
            if (rafId) {
                cancelAnimationFrame(rafId)
                rafId = 0
            }
            setDefaultSpot()
        }

        const handleScroll = () => {
            if (!active) return
            const hoveredEl = document.elementFromPoint(lastClientX, lastClientY)
            if (!hoveredEl || !heroEl.contains(hoveredEl)) {
                handlePointerLeave()
            } else {
                updateFromClientCoords(lastClientX, lastClientY)
            }
        }

        setDefaultSpot()
        heroEl.addEventListener('pointerenter', handlePointerMove, { passive: true })
        heroEl.addEventListener('pointermove', handlePointerMove, { passive: true })
        heroEl.addEventListener('pointerleave', handlePointerLeave)
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', setDefaultSpot, { passive: true })

        return () => {
            if (rafId) cancelAnimationFrame(rafId)
            heroEl.removeEventListener('pointerenter', handlePointerMove)
            heroEl.removeEventListener('pointermove', handlePointerMove)
            heroEl.removeEventListener('pointerleave', handlePointerLeave)
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', setDefaultSpot)
        }
    }, [])

    const currentWord = ROTATING_WORDS[wordIndex]

    return (
        <section ref={heroRef} className="hero">
            {/* Base subtle dot-matrix grid */}
            <div aria-hidden="true" className="hero-dot-grid absolute inset-0 pointer-events-none" />

            {/* Interactive cursor-lit #027BFF dot-matrix spotlight */}
            <div aria-hidden="true" className="hero-dot-spotlight absolute inset-0 pointer-events-none" />

            {/* Ambient glow behind radar */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-[-10%] md:right-[2%] top-1/2 -translate-y-1/2 w-[min(85vw,560px)] h-[min(85vw,560px)] rounded-full bg-[#027BFF]/10 blur-[110px]"
            />

            {/* Precision Rotating Radar / Targeting Reticle */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[54%] -translate-y-1/2 w-[min(88vw,380px)] md:left-auto md:translate-x-0 md:right-[-40px] md:w-[440px] lg:right-[2%] xl:right-[4%] lg:w-[min(45vw,620px)] opacity-30 md:opacity-75 lg:opacity-90"
            >
                <motion.div
                    ref={radarRef}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1, ease: EXPO_EASE, delay: heroDelay + 0.1 }}
                    className="w-full h-auto will-change-transform"
                >
                    <svg viewBox="0 0 600 600" className="w-full h-auto block overflow-visible">
                        <defs>
                            <radialGradient id="hero-radar-sweep" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#027BFF" stopOpacity="0.16" />
                                <stop offset="100%" stopColor="#027BFF" stopOpacity="0.02" />
                            </radialGradient>
                        </defs>

                        {/* Concentric targeting rings */}
                        <g fill="none" stroke="#027BFF">
                            <circle cx="300" cy="300" r="70" strokeOpacity="0.6" strokeWidth="1.4" />
                            <circle cx="300" cy="300" r="130" strokeOpacity="0.45" strokeWidth="1.3" />
                            <circle cx="300" cy="300" r="190" strokeOpacity="0.34" strokeWidth="1.2" />
                            <circle cx="300" cy="300" r="250" strokeOpacity="0.24" strokeWidth="1.2" />
                            <circle cx="300" cy="300" r="292" strokeOpacity="0.16" strokeWidth="1.2" />
                        </g>

                        {/* Crosshair axes & cardinal tick marks */}
                        <g stroke="#192A3D" strokeOpacity="0.18" strokeWidth="1">
                            <line x1="300" y1="8" x2="300" y2="592" />
                            <line x1="8" y1="300" x2="592" y2="300" />
                        </g>

                        {/* Pulsing center radar wave */}
                        <circle
                            cx="300"
                            cy="300"
                            r="12"
                            fill="none"
                            stroke="#027BFF"
                            strokeWidth="1.5"
                            className="hero-radar-pulse"
                        />

                        {/* Primary orbital sweep (90s forward) */}
                        <g className="hero-radar-spin-a">
                            <path
                                d="M300 300 L395 135.5 A190 190 0 0 1 478.5 365 Z"
                                fill="url(#hero-radar-sweep)"
                            />
                            <circle
                                cx="300"
                                cy="300"
                                r="220"
                                fill="none"
                                stroke="#027BFF"
                                strokeOpacity="0.55"
                                strokeWidth="1.6"
                                strokeDasharray="2 11"
                            />
                            <path
                                d="M395 135.5 A190 190 0 0 1 478.5 365"
                                fill="none"
                                stroke="#027BFF"
                                strokeWidth="3.2"
                                strokeOpacity="0.95"
                                strokeLinecap="round"
                            />
                            <circle cx="478.5" cy="365" r="11" fill="#027BFF" fillOpacity="0.2" />
                            <circle cx="478.5" cy="365" r="6" fill="#027BFF" stroke="#FFFFFF" strokeWidth="2" />
                        </g>

                        {/* Secondary orbital counter-sweep (140s reverse) */}
                        <g className="hero-radar-spin-b" fill="none" stroke="#192A3D">
                            <path
                                d="M177.8 255.6 A130 130 0 0 0 240 410"
                                strokeWidth="2.4"
                                strokeOpacity="0.55"
                                strokeLinecap="round"
                            />
                            <circle cx="177.8" cy="255.6" r="5" fill="#192A3D" stroke="#FFFFFF" strokeWidth="2" />
                        </g>

                        {/* Signal nodes & center bullseye */}
                        <g fill="#027BFF" stroke="#FFFFFF" strokeWidth="2">
                            <circle cx="335" cy="239.4" r="5" />
                            <circle cx="504.8" cy="443.4" r="5" />
                            <circle cx="135.5" cy="395" r="5" />
                            <circle cx="249.7" cy="14.4" r="5" />
                            <circle cx="300" cy="300" r="8" />
                        </g>
                    </svg>
                </motion.div>
            </div>

            {/* Interactive desktop cursor target ring */}
            <div
                ref={reticleRef}
                aria-hidden="true"
                className="hero-cursor-reticle pointer-events-none absolute top-0 left-0 w-[60px] h-[60px] rounded-full border-[1.5px] border-[#027BFF] opacity-0 transition-opacity duration-200 z-[5] will-change-transform"
            >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full bg-[#027BFF]" />
            </div>

            {/* Main hero editorial copy */}
            <div className="hero-content">
                <div className="hero-copy">
                    <p className="sr-only">Performance Media Agency</p>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 26, filter: 'blur(8px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.9, ease: EXPO_EASE, delay: heroDelay + 0.15 }}
                    >
                        Targeted media.
                        <br />
                        Measurable{' '}
                        <span className="inline-flex items-baseline whitespace-nowrap">
                            <span className="inline-grid align-baseline">
                                <AnimatePresence mode="wait" initial={false}>
                                    <motion.span
                                        key={currentWord}
                                        initial={{ opacity: 0, y: 14, filter: 'blur(5px)' }}
                                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, y: -14, filter: 'blur(5px)' }}
                                        transition={{ duration: 0.4, ease: EXPO_EASE }}
                                        className="hero-rotating-word inline-block"
                                    >
                                        {currentWord}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                            <span>.</span>
                        </span>
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.85, ease: EXPO_EASE, delay: heroDelay + 0.35 }}
                    >
                        OnlyMedia is a managed media partner helping brands and agencies plan, activate and optimize campaigns across leading digital platforms. We combine audience intelligence, platform expertise and creative innovation to deliver accountable media outcomes.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default Hero

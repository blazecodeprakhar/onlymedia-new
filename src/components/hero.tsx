'use client'
import Image from "next/image"
import MainButton from "./buttons/mainButton"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useMediaQuery } from "react-responsive"
import { useState, useEffect } from "react"
import { motion } from "motion/react"

gsap.registerPlugin(ScrollTrigger, SplitText)

// Shared easing curve — same as Apple's "ease-out-expo"
const EXPO_EASE = [0.16, 1, 0.3, 1] as const

let isInitialMount = true;

function Hero() {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const [heroDelay] = useState(isInitialMount ? 1.1 : 0);

    useEffect(() => {
        isInitialMount = false;
    }, []);

    useGSAP(() => {
        // 1. Hero image parallax & entrance
        gsap.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'center top',
                scrub: true
            }
        }).fromTo('.hero-image', {
            rotateX: '20deg',
            scale: 0.82,
            translateY: '-60px'
        }, {
            rotateX: '0deg',
            scale: 1,
            translateY: '0px'
        })

        // 2. Cinematic Headline Reveal (Letters)
        const titleSplit = new SplitText(".hero-title", { type: "chars" });
        gsap.from(titleSplit.chars, {
            opacity: 0,
            y: 30,
            scale: 1.3,
            filter: "blur(12px)",
            duration: 1.2,
            stagger: 0.03,
            delay: heroDelay + 0.3,
            ease: "expo.out"
        });

        // 3. Cloud Entry & Continuous Floating
        /*
        const imageOffset = isMobile ? '-200px' : '-340px'
        const startOffset = isMobile ? '-50px' : '-100px'

        gsap.fromTo('.hero-left-cloud',
            { left: startOffset, opacity: 0, scale: 0.6, y: -20 },
            { left: imageOffset, opacity: 1, scale: 1, y: 0, duration: 2.5, ease: 'power3.out', delay: heroDelay }
        )
        gsap.fromTo('.hero-right-cloud',
            { right: startOffset, opacity: 0, scale: 0.6, y: 20 },
            { right: imageOffset, opacity: 1, scale: 1, y: 0, duration: 2.5, ease: 'power3.out', delay: heroDelay }
        )

        // Subtle perpetual floating for clouds
        gsap.to('.hero-left-cloud', {
            y: 20,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: heroDelay + 2
        })
        gsap.to('.hero-right-cloud', {
            y: -20,
            duration: 5.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: heroDelay + 2
        })
        */

        // 4. Background Pulse Glow
        gsap.fromTo('.hero-bg-glow',
            { opacity: 0, scale: 0.8 },
            { opacity: 0.6, scale: 1.2, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: heroDelay }
        )

    }, [heroDelay, isMobile])

    return (
        <section className='hero overflow-hidden relative'>
            {/* Cinematic Background Pulsing Glow */}
            <div className="hero-bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] w-[1000px] h-[1000px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none z-0" />

            {/* Cinematic Overlay Reveal Mask */}
            <motion.div
                className="absolute inset-0 bg-white z-[40] pointer-events-none"
                initial={{ transformOrigin: 'top' }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 1.4, ease: [0.85, 0, 0.15, 1], delay: heroDelay - 0.2 }}
            />

            <div className="hero-content relative z-10">
                <div className="top">
                    <div className="texts">
                        {/* Eyebrow */}
                        <motion.div
                            className="flex items-center gap-4 justify-center w-full mb-4 md:mb-6"
                            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                            animate={{ opacity: 0, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: EXPO_EASE, delay: heroDelay + 0.1 }}
                        >
                            <p className="text-accent-blue tracking-[0.45em] uppercase font-black text-[10px] md:text-sm opacity-0">
                                PERFORMANCE MEDIA AGENCY
                            </p>
                        </motion.div>

                        {/* Headline with high-end SplitText reveal */}
                        <h1 className="hero-title">
                            <span className="inline-block whitespace-nowrap">Targeted</span>{' '}
                            <span className="inline-block whitespace-nowrap">media.</span>
                            <br className="hidden md:block" />
                            <span className="inline-block whitespace-nowrap">Measurable</span>{' '}
                            <span className="text-accent-blue italic font-serif font-medium inline-block whitespace-nowrap">growth.</span>
                        </h1>

                        {/* Description fade-up */}
                        <motion.p
                            className="hero-description"
                            initial={{ opacity: 0, y: 24, filter: 'blur(5px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.9, ease: EXPO_EASE, delay: heroDelay + 0.8 }}
                        >
                            OnlyMedia is a managed media partner helping brands and agencies plan, activate and optimize campaigns across leading digital platforms.
                            <br />
                            We combine audience intelligence, platform expertise and creative innovation to deliver accountable media outcomes.
                        </motion.p>
                    </div>

                    {/* Buttons fade-up */}
                    <motion.div
                        className="buttons"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: EXPO_EASE, delay: heroDelay + 1.1 }}
                    >
                        <MainButton text="Why OnlyMedia" href="#why-us" className="shadow-[0_20px_50px_rgba(26,67,236,0.15)]" />
                        <MainButton variant="tertiary" text="Services" href="#features" />
                    </motion.div>
                </div>

                <div className="hero-image hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 150, rotateX: '15deg' }}
                        animate={{ opacity: 1, scale: 1, y: 0, rotateX: '0deg' }}
                        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: heroDelay + 0.3 }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <Image height={1250} width={1250} src={'/images/dashboard.png'} alt="dashboard" className="object-cover object-center w-full h-full" priority />
                    </motion.div>
                </div>
            </div>

            {/*
            <div className="hero-left-cloud">
                <Image src={'/images/left-cloud.png'} height={550} width={550} alt="left-cloud" className="object-cover object-center" priority />
            </div>
            <div className="hero-right-cloud">
                <Image src={'/images/right-cloud.png'} height={550} width={550} alt="left-cloud" className="object-cover object-center" priority />
            </div>
            */}
        </section>
    )
}

export default Hero


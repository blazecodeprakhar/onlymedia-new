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
    const [heroDelay] = useState(isInitialMount ? 1.8 : 0);

    useEffect(() => {
        isInitialMount = false;
    }, []);

    useGSAP(() => {
        // Hero image parallax on scroll — kept from before
        gsap.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: 'top top',
                end: 'center top',
                scrub: true
            }
        }).fromTo('.hero-image', {
            rotateX: '20deg',
            scale: 0.8,
            translateY: '-80px'
        }, {
            rotateX: '0deg',
            scale: 1,
            translateY: '0px'
        })

        // Epic cinematic cloud reveal
        const imageOffset = isMobile ? '-200px' : '-340px'
        const startOffset = isMobile ? '-50px' : '-100px'

        gsap.fromTo('.hero-left-cloud',
            { left: startOffset, opacity: 0, scale: 0.6 },
            { left: imageOffset, opacity: 1, scale: 1, duration: 2.5, ease: 'power3.out', delay: heroDelay }
        )
        gsap.fromTo('.hero-right-cloud',
            { right: startOffset, opacity: 0, scale: 0.6 },
            { right: imageOffset, opacity: 1, scale: 1, duration: 2.5, ease: 'power3.out', delay: heroDelay }
        )
    }, [heroDelay])

    // Stagger variants for headline words
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.055,
                delayChildren: heroDelay + 0.1,
            }
        }
    }
    const word = {
        hidden: { y: 40, opacity: 0, filter: 'blur(8px)' },
        show: { y: 0, opacity: 1, filter: 'blur(0px)', transition: { duration: 0.7, ease: EXPO_EASE } }
    }

    return (
        <section className='hero'>
            <div className="hero-content">
                <div className="top">
                    <div className="texts">
                        {/* Eyebrow */}
                        <motion.div
                            className="flex items-center gap-4 justify-center w-full mb-4 md:mb-6"
                            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8, ease: EXPO_EASE, delay: heroDelay + 0.1 }}
                        >
                            <p className="text-accent-blue tracking-[0.4em] uppercase font-black text-[11px] md:text-sm">
                                PERFORMANCE MEDIA AGENCY
                            </p>
                        </motion.div>

                        {/* Headline with staggered word reveal */}
                        <motion.h1
                            className="hero-title"
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            {['Targeted', 'media.'].map((w, i) => (
                                <motion.span key={i} variants={word} style={{ display: 'inline-block', marginRight: '0.25em' }}>
                                    {w}
                                </motion.span>
                            ))}
                            <br className="hidden md:block" />
                            {['Measurable'].map((w, i) => (
                                <motion.span key={i} variants={word} style={{ display: 'inline-block', marginRight: '0.25em', marginTop: '0.1em' }}>
                                    {w}
                                </motion.span>
                            ))}
                            <motion.span variants={word} className="text-accent-blue italic font-serif font-medium" style={{ display: 'inline-block', whiteSpace: 'nowrap', paddingRight: '0.05em' }}>
                                growth.
                            </motion.span>
                        </motion.h1>

                        {/* Description fade-up */}
                        <motion.p
                            className="hero-description"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: EXPO_EASE, delay: heroDelay + 0.5 }}
                        >
                            We deliver data-driven media solutions that connect brands with the right audiences and drive measurable growth across online and offline touchpoints.
                        </motion.p>
                    </div>

                    {/* Buttons fade-up */}
                    <motion.div
                        className="buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: EXPO_EASE, delay: heroDelay + 0.75 }}
                    >
                        <MainButton text="Why OnlyMedia" href="#why-us" />
                        <MainButton variant="tertiary" text="Services" href="#features" />
                    </motion.div>
                </div>

                <div className="hero-image hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.4, ease: EXPO_EASE, delay: heroDelay + 0.2 }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <Image height={1250} width={1250} src={'/images/dashboard.png'} alt="dashboard" className="object-cover object-center w-full h-full" priority />
                    </motion.div>
                </div>
            </div>

            <div className="hero-left-cloud">
                <Image src={'/images/left-cloud.png'} height={550} width={550} alt="left-cloud" className="object-cover object-center" priority />
            </div>
            <div className="hero-right-cloud">
                <Image src={'/images/right-cloud.png'} height={550} width={550} alt="left-cloud" className="object-cover object-center" priority />
            </div>
        </section>
    )
}

export default Hero


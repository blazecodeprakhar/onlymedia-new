'use client'
import Image from "next/image"
import MainButton from "./buttons/mainButton"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { useMediaQuery } from "react-responsive"
import { motion } from "motion/react"

gsap.registerPlugin(ScrollTrigger, SplitText)

// Shared easing curve — same as Apple's "ease-out-expo"
const EXPO_EASE = [0.16, 1, 0.3, 1] as const

function Hero() {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

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

        const imageOffset = isMobile ? '-200px' : '-340px'
        gsap.to('.hero-left-cloud', { left: imageOffset, duration: 1.4, ease: 'power3.out', delay: 1.2 })
        gsap.to('.hero-right-cloud', { right: imageOffset, duration: 1.4, ease: 'power3.out', delay: 1.2 })
    })

    // Stagger variants for headline words
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.055,
                delayChildren: 0.1,
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
                        {/* Headline with staggered word reveal */}
                        <motion.h1
                            className="hero-title"
                            style={isMobile ? { fontSize: '1.8rem', lineHeight: '1.2' } : {}}
                            variants={container}
                            initial="hidden"
                            animate="show"
                        >
                            {['TARGETED', 'MEDIA'].map((w, i) => (
                                <motion.span key={i} variants={word} style={{ display: 'inline-block', marginRight: '0.25em' }}>
                                    {w}
                                </motion.span>
                            ))}
                            <br />
                            {['MEASURABLE', 'GROWTH'].map((w, i) => (
                                <motion.span key={i} variants={word} style={{ display: 'inline-block', marginRight: '0.25em', whiteSpace: 'nowrap' }}>
                                    {w}
                                </motion.span>
                            ))}
                        </motion.h1>

                        {/* Description fade-up */}
                        <motion.p
                            className="hero-description"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: EXPO_EASE, delay: 0.5 }}
                        >
                            We deliver data-driven media solutions that connect brands with the right audiences and drive measurable growth across online and offline touchpoints.
                        </motion.p>
                    </div>

                    {/* Buttons fade-up */}
                    <motion.div
                        className="buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: EXPO_EASE, delay: 0.75 }}
                    >
                        <MainButton text="Try OnlyMedia" />
                        <MainButton variant="tertiary" text="See features" />
                    </motion.div>
                </div>

                <div className="hero-image">
                    <Image height={1250} width={1250} src={'/images/dashboard.png'} alt="dashboard" className="object-cover object-center" priority />
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


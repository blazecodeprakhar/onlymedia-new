'use client'
import Image from "next/image"
import MainButton from "./buttons/mainButton"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useMediaQuery } from "react-responsive"

function Hero() {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    useGSAP(() => {
        const heroTitleWords = SplitText.create('.hero-title', { type: "words" })

        gsap.from(heroTitleWords.words, {
            opacity: 0,
            translateY: '10px',
            filter: 'blur(20px)',
            stagger: 0.05,
            ease: 'power1.inOut'
        })

        const heroDescriptionWords = SplitText.create('.hero-description', { type: "words" })

        gsap.from(heroDescriptionWords.words, {
            delay: 0.1,
            opacity: 0,
            translateY: '10px',
            filter: 'blur(20px)',
            stagger: 0.05,
            ease: 'power1.inOut'
        })

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

        gsap.to('.hero-left-cloud', { left: imageOffset, duration: 1, ease: 'power1.inOut' })
        gsap.to('.hero-right-cloud', { right: imageOffset, duration: 1, ease: 'power1.inOut' })

    })

    return (
        <section className='hero'>
            <div className="hero-content">
                <div className="top">
                    <div className="texts">
                        <h1 className="hero-title" style={isMobile ? { fontSize: '1.8rem', lineHeight: '1.2' } : {}}>
                            TARGETED MEDIA<br />
                            <span style={{ whiteSpace: 'nowrap' }}>MEASURABLE GROWTH</span>
                        </h1>
                        <p className="hero-description">
                            We deliver data-driven media solutions that connect brands with the right audiences and drive measurable growth across online and offline touchpoints.
                        </p>
                    </div>

                    <div className="buttons">
                        <MainButton text="Try OnlyMedia" />
                        <MainButton variant="tertiary" text="See features" />
                    </div>
                </div>

                <div className="hero-image">
                    <Image height={1250} width={1250} src={'/images/dashboard.png'} alt="dashboard" className="object-cover object-center" />
                </div>
            </div>

            <div className="hero-left-cloud">
                <Image src={'/images/left-cloud.png'} height={550} width={550} alt="left-cloud" className="object-cover object-center" />
            </div>
            <div className="hero-right-cloud">
                <Image src={'/images/right-cloud.png'} height={550} width={550} alt="left-cloud" className="object-cover object-center" />
            </div>
        </section>
    )
}

export default Hero

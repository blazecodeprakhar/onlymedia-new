'use client'
import Image from "next/image"
import MainButton from "./buttons/mainButton"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { useState } from "react"

function AboutApp() {
    const [currentImage, setCurrentImage] = useState(0)

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: `.about-app`,
                start: 'top bottom',
            }
        }).fromTo(`.about-app`, {
            opacity: 0,
            translateY: '64px',
            ease: 'power2.inOut',
            duration: 1
        }, {
            opacity: 1,
            translateY: '0',
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.about-app-images',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true
            }
        }).fromTo('.about-app-image', {
            scale: 1.3,
            ease: 'power1.in',
            transformOrigin: 'center center'
        }, {
            scale: 1,
            ease: 'power1.inOut',
            transformOrigin: 'center center'
        })
    })

    return (
        <section className="about-app">
            <div className="wrapper">
                <div className="header">
                    <p className="text-eyebrow-large">
                        Seamless across devices
                    </p>

                    <h2 className="text-h2">
                        Work from anywhere, stay in sync
                    </h2>
                </div>

                <div className="about-app-images">
                    <div style={{ transform: `translateX(-${currentImage * 100 }%)` }} className="w-fit transition-transform duration-500 ease-in-out flex">
                        <Image src={'/images/about-app-image.png'} height={1505} width={1525} alt="about app image" className={`about-app-image ${currentImage == 0 ? 'z-20' : 'z-10'}`} />
                        <Image src={'/images/about-app-image-2.png'} height={1205} width={1025} alt="about app image" className={`about-app-image ${currentImage == 1 ? 'z-20' : 'z-10'}`} />
                    </div>

                    <div className="about-app-buttons">
                        <MainButton onClick={() => setCurrentImage(0)} variant={currentImage == 1 ? 'tertiary' : 'primary'} text="Mobile app" className="text-beige-0 hover:text-beige-0" />
                        <MainButton onClick={() => setCurrentImage(1)} variant={currentImage == 0 ? 'tertiary' : 'primary'} text="Web App" className="text-beige-0 hover:text-beige-0" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutApp

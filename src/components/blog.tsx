'use client'
import Image from "next/image"
import BlogItem from "./blogItem"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

function Blog() {
    const bigCardRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        if (!bigCardRef.current) return
        gsap.timeline({
            scrollTrigger: {
                trigger: '.blog',
                start: 'top bottom',
            }
        }).from('.blog', {
            opacity: 0,
            translateY: '64px',
            duration: 0.6,
            ease: 'power1.inOut'
        })

        bigCardRef.current.addEventListener("mouseenter", () => {
            gsap.to('#big-card-image', {
                scale: 1.1,
                duration: 0.6,
                ease: 'power1.inOut'
            })
        })

        bigCardRef.current.addEventListener("mouseleave", () => {
            gsap.to('#big-card-image', {
                scale: 1,
                duration: 0.6,
                ease: 'power1.inOut'
            })
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.blog-item',
                start: 'top bottom',
            }
        }).fromTo('.blog-item', { opacity: 0, translateY: '96px', duration: 0.6, ease: 'power1.inOut' }, {
            translateY: 0, opacity: 1, stagger: 0.2
        })
    })
    return (
        <section className="blog">
            <div className="container">
                <div className="header">
                    <p className="text-eyebrow-large">
                        Blog
                    </p>

                    <h2 className="text-h2">
                        Ideas to level-up your freelance game
                    </h2>
                </div>

                <div className="blog-cards">
                    <div ref={bigCardRef} className="big-card">
                        <div className="overflow-hidden rounded-2xl h-full w-full">
                            <Image id="big-card-image" src={'/images/dhyna-phils-blog.png'} height={1500} width={1500} alt="dhyna phils blog" className="h-full w-full object-cover object-center" />
                        </div>

                        <div className="flex flex-col lg:gap-0 gap-10 justify-between lg:py-7 md:px-0 py-0 px-4">
                            <div className="flex flex-col gap-6">
                                <div className="w-fit pt-[9px] pb-1.5 px-3 rounded-full bg-dark-brown">
                                    <p className="text-eyebrow-large text-beige-10">
                                        MUST READ
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <h3 className="text-h3">
                                        How to start a 100k creative agency in 2025
                                    </h3>
                                    <p className="text-body-large">
                                        Learn how to kickstart your journey into agency ownership with our comprehensive guide.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-3">
                                <div className="flex gap-3">
                                    <div className="size-13">
                                        <Image src={'/images/dhyna-phils.png'} height={250} width={250} alt="author" className="h-full w-full border-3 border-beige-0 rounded-full object-cover object-center" />
                                    </div>

                                    <div className="flex flex-col">
                                        <p className="text-lg text-neutral-30/150 font-medium">
                                            Dhyna Phils
                                        </p>
                                        <p className="text-body-small text-neutral-10">
                                            Head of Marketing
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-[9px] pb-2 px-3 rounded-full h-fit bg-accent-orange">
                                    <p className="text-eyebrow-small text-beige-10">
                                        FEATURED
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-cards">
                        <BlogItem id='blog-item-image-1' image='/images/agency-software.png' text='Top 10 digital agency software' badgeColor='bg-accent-blue' badgeText='TOOLS' />
                        <BlogItem id='blog-item-image-2' image='/images/project-success.png' text='A complete guide to project success in 2026' badgeColor='bg-accent-yellow' badgeText='INSIGHT' />
                        <BlogItem id='blog-item-image-3' image='/images/billable.png' text='What Are Billable Hours' badgeColor='bg-accent-green' badgeText='MANAGEMENT' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog

'use client'
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { testimonials } from '../../constants/index'
import ReviewCard from "./reviewCard"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

function Reviews() {

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.reviews',
                start: 'top bottom',
            }
        }).from('.reviews', {
            opacity: 0,
            translateY: '64px',
            duration: 0.6,
            ease: 'power1.inOut'
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.review-row',
                start: 'top bottom',
            }
        }).from('.review-row', {
            opacity: 0,
            translateY: '64px',
            duration: 0.6,
            ease: 'power1.inOut'
        })
    })

    return (
        <section className="reviews">
            <div className="container">
                <div className="big-review">
                    <p className="big-testimonial">
                        "OnlyMedia Data-Driven Media Solutions That Deliver Measurable Growth"
                    </p>

                    <div className="user-info">
                        <Image src={'/images/paulina-punla.png'} height={100} width={100} alt="perfil" className="object-cover object-center size-15 rounded-full border border-beige-0" />

                        <div>
                            <p className="text-body-normal text-neutral-30">Kavya Reddy</p>
                            <p className="text-body-small text-neutral-10">CMO, Mamaearth India</p>
                        </div>
                    </div>
                </div>

                <div className="review-row">
                    <div className="flex w-fit animate-marquee flex-nowrap gap-6">
                        {[...testimonials, ...testimonials].map(({ perfilImage, name, career, testimonial }, i) => (
                            <ReviewCard key={i} perfilImage={perfilImage} name={name} career={career} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews

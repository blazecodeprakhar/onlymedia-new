'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'

function FeatureImageWrapper({ id, src, alt }: { id: string, src: string, alt: string }) {
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: `#${id}`,
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true
            }
        }).fromTo(`#${id}`, {
            translateY: '60px'
        }, {
            translateY: '0px',
            ease: 'power1.inOut'
        })
    })
    
    return (
        <div className='feature-image-wrapper'>
            <Image
                id={id}
                src={src}
                height={700}
                width={700}
                alt={alt}
                className='object-center object-cover md:h-154 h-101 w-fit md:w-127 rounded-[20px]'
            />
        </div>
    )
}

export default FeatureImageWrapper

'use client'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"

function IntegrationsTicker() {

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.integrations-ticker-1',
                start: 'top bottom',
                end: 'top top',
                scrub: true
            }
        }).from('.integrations-ticker-1', {
            translateX: '-60px',
            ease: 'power3.inOut'
        })
    })

  return (
    <div className="integrations-ticker">
      <div className="integrations-ticker-1 flex-nowrap gap-4 flex">
        <Image src={'/images/image-1.svg'} height={200} width={200} alt="image 1" className="object-cover object-center size-18 " />
        <Image src={'/images/image-2.svg'} height={200} width={200} alt="image 1" className="object-cover object-center size-18 " />
        <Image src={'/images/image-3.svg'} height={200} width={200} alt="image 1" className="object-cover object-center size-18 " />
        <Image src={'/images/image-4.svg'} height={200} width={200} alt="image 1" className="object-cover object-center size-18 " />
        <Image src={'/images/image-5.svg'} height={200} width={200} alt="image 1" className="object-cover object-center size-18 " />
        <Image src={'/images/image-6.svg'} height={200} width={200} alt="image 1" className="object-cover object-center size-18 " />
        <Image src={'/images/image-7.svg'} height={200} width={200} alt="image 1" className="object-cover object-center size-18 " />
        <Image src={'/images/image-8.svg'} height={200} width={200} alt="image 1" className="object-cover object-center size-18 " />
        <Image src={'/images/image-9.svg'} height={200} width={200} alt="image 1" className="object-cover object-center size-18 " />
      </div>
    </div>
  )
}

export default IntegrationsTicker

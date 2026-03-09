"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { JSX } from "react"

gsap.registerPlugin(ScrollTrigger)

function BenefitsCard({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) {

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: '.benefits-card',
        start: 'top bottom',
      }
    }).fromTo('.benefits-card',
      { opacity: 0, y: 96 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power1.inOut', stagger: 0.2 }
    )
  })

  return (
    <div className="benefits-card w-full min-w-80 p-8 flex flex-col gap-8 lg:gap-17 bg-[#F0EAE5] rounded-3xl">
      <div className="icon bg-beige-0 size-14 flex items-center justify-center rounded-full">
        {icon}
      </div>

      <div className="texts flex flex-col gap-4">
        <h6 className="text-h5">
          {title}
        </h6>

        <p className="text-body-normal">
          {description}
        </p>
      </div>
    </div>
  )
}

export default BenefitsCard

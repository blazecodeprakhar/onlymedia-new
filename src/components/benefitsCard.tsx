"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { JSX, useRef } from "react"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(ScrollTrigger)

function BenefitsCard({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  useGSAP(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: isMobile ? 30 : 60 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
        }
      }
    )
  }, { dependencies: [isMobile] })

  return (
    <div ref={cardRef} className="benefits-card-wrapper w-full h-full">
      <div className="benefits-card h-full w-full p-6 xl:p-8 flex flex-col gap-6 lg:gap-8 bg-[#F0EAE5] rounded-3xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:bg-beige-30 cursor-default group">
        <div className="icon bg-beige-0 size-12 xl:size-14 flex items-center justify-center rounded-full shrink-0 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        <div className="texts flex flex-col gap-4 flex-grow">
          <h6 className="text-[20px]/[120%] xl:text-[22px]/[120%] font-semibold text-neutral-30 whitespace-nowrap overflow-hidden text-ellipsis shadow-none">
            {title}
          </h6>

          <p className="text-[16px]/[150%] xl:text-[17px]/[150%] font-normal text-neutral-20">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BenefitsCard

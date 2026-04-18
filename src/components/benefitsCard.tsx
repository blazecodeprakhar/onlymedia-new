"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { JSX, useRef, useState } from "react"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(ScrollTrigger)

function BenefitsCard({ icon, title, frontQuote, backDescription }: { icon: JSX.Element, title: string, frontQuote: string, backDescription: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const [flipped, setFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

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

  const showFront = !(isHovered && !isMobile) && !flipped;

  return (
    <div 
        ref={cardRef} 
        className="benefits-card-wrapper w-full h-full lg:group" 
        style={{ perspective: '1000px' }}
        onClick={() => { if (isMobile) setFlipped(!flipped) }}
        onMouseEnter={() => { if (!isMobile) setIsHovered(true) }}
        onMouseLeave={() => { if (!isMobile) setIsHovered(false) }}
    >
      <div 
        className="relative w-full h-full transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer"
        style={{ 
            transformStyle: 'preserve-3d', 
            transform: showFront ? 'rotateY(0deg)' : 'rotateY(180deg)' 
        }}
      >
        
        {/* FRONT FACE */}
        <div 
          className="relative w-full h-full p-6 xl:p-8 flex flex-col gap-6 lg:gap-8 bg-[#F0EAE5] rounded-3xl hover:shadow-xl transition-shadow duration-300"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="icon bg-beige-0 size-12 xl:size-14 flex items-center justify-center rounded-full shrink-0 transition-transform duration-300 lg:group-hover:scale-110">
            {icon}
          </div>

          <div className="texts flex flex-col gap-4 flex-grow">
            <h6 className="text-[20px]/[120%] xl:text-[22px]/[120%] font-semibold text-neutral-30 whitespace-nowrap overflow-hidden text-ellipsis shadow-none">
              {title}
            </h6>
            <p className="text-[15px]/[150%] xl:text-[17px]/[150%] font-medium italic text-neutral-20">
              "{frontQuote}"
            </p>
          </div>
          
          <div className="mt-auto pt-4 text-[13px] font-medium text-neutral-20/40 flex items-center gap-1.5 transition-colors lg:group-hover:text-accent-blue/80">
            Tap to reveal <span className="text-lg leading-none">&rarr;</span>
          </div>
        </div>

        {/* BACK FACE */}
        <div 
          className="absolute inset-0 w-full h-full p-6 xl:p-8 flex flex-col gap-4 bg-[#E2ECF5] rounded-3xl shadow-xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h6 className="text-[12px] uppercase tracking-widest text-neutral-30/60 font-bold mb-2">
            {title}
          </h6>
          <p className="text-[16px]/[160%] lg:text-[18px]/[160%] font-medium text-neutral-30 flex-grow">
            {backDescription}
          </p>
          
          <div className="mt-auto pt-4 text-[13px] font-medium text-neutral-30/50 flex items-center gap-1.5 hover:text-accent-blue transition-colors">
            <span className="rotate-180 text-lg leading-none">&rarr;</span> Tap to close
          </div>
        </div>

      </div>
    </div>
  )
}

export default BenefitsCard

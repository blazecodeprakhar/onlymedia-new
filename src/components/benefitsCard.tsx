"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { JSX, useRef, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { ExternalLink } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

function BenefitsCard({
  icon,
  title,
  frontQuote,
  backDescription,
  href
}: {
  icon: JSX.Element,
  title: string,
  frontQuote: string,
  backDescription: string,
  href?: string
}) {
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

  const handleClick = () => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
      return
    }
    if (isMobile) {
      setFlipped(!flipped)
    }
  }

  return (
    <div
      ref={cardRef}
      className={`benefits-card-wrapper w-full h-full lg:group ${href ? 'cursor-pointer' : ''}`}
      style={{ perspective: '1000px' }}
      onClick={handleClick}
      onMouseEnter={() => { if (!isMobile) setIsHovered(true) }}
      onMouseLeave={() => { if (!isMobile) setIsHovered(false) }}
      title={href ? `Open ${title}` : undefined}
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
          className="relative w-full h-full p-6 xl:p-8 flex flex-col gap-6 lg:gap-8 bg-[#E4EEFD] rounded-3xl hover:shadow-[0_20px_45px_rgba(0,102,255,0.12)] hover:-translate-y-1 transition-all duration-300 min-h-[320px] shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="icon bg-white text-accent-blue size-12 xl:size-14 flex items-center justify-center rounded-2xl shrink-0 transition-transform duration-300 lg:group-hover:scale-110 shadow-sm">
            {icon}
          </div>

          <div className="texts flex flex-col gap-4 flex-grow">
            <h6 className="text-[20px]/[120%] xl:text-[22px]/[120%] font-bold text-neutral-30">
              {title}
            </h6>
            <p className="text-[15px]/[150%] xl:text-[17px]/[150%] font-medium italic text-neutral-20">
              "{frontQuote}"
            </p>
          </div>

          <div className="mt-auto pt-4 text-[13px] font-bold text-accent-blue flex lg:hidden items-center gap-1.5">
            Tap to reveal <span className="text-lg leading-none">&rarr;</span>
          </div>
        </div>

        {/* BACK FACE */}
        <div
          className="absolute inset-0 w-full h-full p-6 xl:p-8 flex flex-col gap-4 bg-white text-neutral-30 rounded-3xl shadow-xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex items-center justify-between w-full mb-2">
            <h6 className="text-[12px] uppercase tracking-widest text-accent-blue font-bold">
              {title}
            </h6>
            {href && (
              <ExternalLink size={16} className="text-accent-blue" />
            )}
          </div>
          <p className="text-[16px]/[160%] lg:text-[18px]/[160%] font-medium text-neutral-30 flex-grow">
            {backDescription}
          </p>

          <div className="mt-auto pt-4 text-[13px] font-semibold text-accent-blue flex items-center gap-1.5">
            {href ? (
              <span className="inline-flex items-center gap-1.5 font-bold hover:underline">
                Open {title} <ExternalLink size={14} />
              </span>
            ) : (
              <span className="flex lg:hidden items-center gap-1.5 text-neutral-20">
                <span className="rotate-180 text-lg leading-none">&rarr;</span> Tap to close
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default BenefitsCard

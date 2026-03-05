'use client'
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import gsap from "gsap"
import { useRef } from "react"


interface BlogItemProps {
  id: string
  image: string
  text: string
  badgeColor: string
  badgeText: string
}

function BlogItem({ id, image, text, badgeColor, badgeText }: BlogItemProps) {
  const blogItemRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!blogItemRef.current) return

    blogItemRef.current.addEventListener("mouseenter", () => {
      gsap.to(`#${id}`, {
        scale: 1.1,
        duration: 0.6,
        ease: 'power1.inOut'
      })
    })

    blogItemRef.current.addEventListener("mouseleave", () => {
      gsap.to(`#${id}`, {
        scale: 1,
        duration: 0.6,
        ease: 'power1.inOut'
      })
    })
  })


  return (
    <div ref={blogItemRef} className='blog-item flex flex-1 flex-col gap-4'>
      <div className="h-[286px] w-full rounded-2xl overflow-hidden">
        <Image id={id} src={image} height={800} width={800} alt="image" className="object-center object-cover w-full rounded-2xl h-full" />
      </div>

      <div className="flex gap-6 items-center ">
        <h5 className="text-h5 w-full">
          {text}
        </h5>
        <div className={`pt-[9px] pb-2 px-3 rounded-full h-fit ${badgeColor}`}>
          <p className="text-eyebrow-small text-beige-10">
            {badgeText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogItem

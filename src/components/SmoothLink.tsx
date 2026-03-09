'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { useRef } from 'react'

interface SmoothLinkProps {
    href: string
    children: React.ReactNode
    className?: string
    onClick?: () => void
    prefetch?: boolean
}

export default function SmoothLink({ href, children, className, onClick, prefetch = false }: SmoothLinkProps) {
    const router = useRouter()
    const pathname = usePathname()
    const isNavigating = useRef(false)

    const handleClick = (e: React.MouseEvent) => {
        // Prevent default behavior
        e.preventDefault()
        
        // If already navigating, ignore
        if (isNavigating.current) return
        
        // Check if it's the same page
        if (pathname === href) {
            // Smooth scroll to top for same page
            gsap.to(window, {
                duration: 0.8,
                scrollTo: { y: 0, autoKill: false },
                ease: "power2.inOut"
            })
            if (onClick) onClick()
            return
        }
        
        // For different pages, navigate directly without any scrolling
        isNavigating.current = true
        
        // Use router.push for Next.js navigation without scrolling
        router.push(href)
        
        // Reset flag after navigation
        setTimeout(() => {
            isNavigating.current = false
        }, 1000)
        
        if (onClick) onClick()
    }

    return (
        <Link href={href} className={className} onClick={handleClick} prefetch={prefetch}>
            {children}
        </Link>
    )
}

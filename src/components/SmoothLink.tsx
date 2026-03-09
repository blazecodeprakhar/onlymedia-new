'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { useRef } from 'react'
import React from 'react'

interface SmoothLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: React.ReactNode
    className?: string
    onClick?: (e?: any) => void
    prefetch?: boolean
    ref?: React.Ref<HTMLAnchorElement>
}

export default function SmoothLink({ href, children, className, onClick, prefetch = false, ref, ...props }: SmoothLinkProps) {
    const router = useRouter()
    const pathname = usePathname()
    const isNavigating = useRef(false)

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Prevent default behavior
        e.preventDefault()

        // If already navigating, ignore
        if (isNavigating.current) return

        // Check if it's the same page
        // Allow checking for hash links
        const isHashLink = href.startsWith('#') || href.startsWith(`${pathname}#`)

        if (pathname === href && !isHashLink) {
            // Smooth scroll to top for same page without hash
            gsap.to(window, {
                duration: 0.8,
                scrollTo: { y: 0, autoKill: false },
                ease: "power2.inOut"
            })
            if (onClick) onClick(e)
            return
        }

        if (isHashLink) {
            // For hash links, let's manually scroll there instead of letting next.js jump abruptly
            const hashIndex = href.indexOf('#');
            const hash = href.substring(hashIndex);
            const target = document.querySelector(hash);
            if (target) {
                gsap.to(window, {
                    duration: 0.8,
                    scrollTo: { y: target, autoKill: false, offsetY: 50 },
                    ease: "power2.inOut"
                });
                if (onClick) onClick(e);
                return;
            }
        }

        // For different pages, navigate directly without any scrolling
        isNavigating.current = true

        // Use router.push for Next.js navigation without scrolling
        router.push(href)

        // Reset flag after navigation
        setTimeout(() => {
            isNavigating.current = false
        }, 1000)

        if (onClick) onClick(e)
    }

    return (
        <Link ref={ref} href={href} className={className} onClick={handleClick} prefetch={prefetch} {...props}>
            {children}
        </Link>
    )
}

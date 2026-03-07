'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * SmoothScrollManager
 * -------------------
 * Uses the native Lenis instance exposed on window by ReactLenis
 * to:
 *   1. Scroll to top of page smoothly on every route change
 *   2. Handle data-scroll-to="#id" anchor links smoothly
 */
export default function SmoothScrollManager() {
    const pathname = usePathname()

    // Smooth scroll to top on EVERY page navigation
    useEffect(() => {
        const lenis = (window as any).__lenis
        if (lenis) {
            lenis.scrollTo(0, { duration: 1.4, easing: (t: number) => 1 - Math.pow(1 - t, 4) })
        } else {
            // Fallback: native smooth scroll if Lenis isn't ready yet
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }, [pathname])

    // Handle anchor clicks globally via delegation
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('[data-scroll-to]')
            if (!target) return
            const id = target.getAttribute('data-scroll-to')
            const el = id ? document.querySelector(id) : null
            if (el) {
                e.preventDefault()
                const lenis = (window as any).__lenis
                if (lenis) {
                    lenis.scrollTo(el, { offset: -80, duration: 1.4, easing: (t: number) => 1 - Math.pow(1 - t, 4) })
                } else {
                    el.scrollIntoView({ behavior: 'smooth' })
                }
            }
        }
        document.addEventListener('click', handler)
        return () => document.removeEventListener('click', handler)
    }, [])

    return null
}

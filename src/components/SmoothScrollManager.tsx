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

    // Instant scroll to top on EVERY page navigation to clear old Lenis positions
    useEffect(() => {
        const lenis = (window as any).__lenis
        if (lenis) {
            // INSTANT reset! Smooth scrolling across entirely new pages causes out-of-bounds height glitches.
            lenis.scrollTo(0, { immediate: true })
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname])

    // Handle anchor clicks globally via delegation
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a')
            if (!target) return

            const href = target.getAttribute('href')
            if (!href) return

            // Handle scroll-to-id if present
            const scrollId = target.getAttribute('data-scroll-to')
            if (scrollId) {
                const el = document.querySelector(scrollId)
                if (el) {
                    e.preventDefault()
                    const lenis = (window as any).__lenis
                    if (lenis) {
                        lenis.scrollTo(el, { offset: -80, duration: 1.2, easing: (t: number) => 1 - Math.pow(1 - t, 4) })
                    } else {
                        el.scrollIntoView({ behavior: 'smooth' })
                    }
                }
                return
            }

            // Handle same-page links (e.g. clicking Home while on Home)
            try {
                const targetUrl = new URL(target.href, window.location.origin)
                // If the link points to the exact same page without a hash, we scroll to top instead of jumping
                if (targetUrl.pathname === pathname && (!targetUrl.hash || targetUrl.hash === '#')) {
                    e.preventDefault()
                    const lenis = (window as any).__lenis
                    if (lenis) {
                        lenis.scrollTo(0, { duration: 1.2, easing: (t: number) => 1 - Math.pow(1 - t, 4) })
                    } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }
                }
            } catch (err) {
                // Ignore invalid URLs
            }
        }
        document.addEventListener('click', handler)
        return () => document.removeEventListener('click', handler)
    }, [pathname])

    return null
}

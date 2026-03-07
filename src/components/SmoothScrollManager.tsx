'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useLenis } from '@/lib/lenis'

/**
 * SmoothScrollManager
 * -------------------
 * Extends the Lenis context instance to handle all Next.js native link clicks 
 * cleanly across route transitions.
 */
export default function SmoothScrollManager() {
    const pathname = usePathname()
    const router = useRouter()

    // Properly access instance from ReactLenis Provider context instead of window hack
    const lenis = useLenis()

    // 1. Instant reset on Next.js native navigation events to stop artifacts
    useEffect(() => {
        if (lenis) {
            lenis.scrollTo(0, { immediate: true })
        } else {
            window.scrollTo(0, 0)
        }
    }, [pathname, lenis])

    // 2. Global interception of clicks
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const link = (e.target as HTMLElement).closest('a')
            if (!link) return

            const href = link.getAttribute('href')
            // Ignore external, explicit blanks, and mailtos
            if (!href || link.getAttribute('target') === '_blank' || href.startsWith('mailto:') || href.startsWith('tel:')) return

            try {
                const targetUrl = new URL(link.href, window.location.origin)

                // Only intercept internal routing
                if (targetUrl.origin === window.location.origin) {

                    // Standard pass-through for modifier-clicks (open in new tab)
                    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

                    e.preventDefault()
                    e.stopPropagation() // CRITICAL: Prevent Next.js <Link> from instant routing

                    const currentScroll = window.scrollY

                    const executeNavigation = () => {
                        if (targetUrl.pathname === pathname) {
                            if (targetUrl.hash && targetUrl.hash !== '#') {
                                const el = document.querySelector(targetUrl.hash) as HTMLElement
                                if (el) lenis?.scrollTo(el, { offset: -80, duration: 1.2, easing: (t: number) => 1 - Math.pow(1 - t, 4) })
                            } else {
                                lenis?.scrollTo(0, { duration: 1.2, easing: (t: number) => 1 - Math.pow(1 - t, 4) })
                            }
                        } else {
                            // Go to the new page immediately
                            router.push(targetUrl.pathname + targetUrl.search + targetUrl.hash, { scroll: true })
                        }
                    }

                    // THE PREMIUM ANIMATION FIX requested by User: 
                    // If we are significantly scrolled down (e.g. footer) and click "Contact" or "Home",
                    // instead of glitching or snapping, the entire current page gracefully flies back up 
                    // to the absolutely top. Once at the top, THEN we swap to the new page.
                    if (lenis && currentScroll > 50 && (!targetUrl.hash || targetUrl.hash === '#')) {
                        // Start the smooth upward flight
                        lenis.scrollTo(0, {
                            duration: 1.0,
                            easing: (t: number) => 1 - Math.pow(1 - t, 4),
                        })

                        // Only navigate once we physically reach the top
                        setTimeout(() => {
                            if (targetUrl.pathname !== pathname) {
                                router.push(targetUrl.pathname + targetUrl.search + targetUrl.hash, { scroll: true })
                            }
                        }, 1000)
                    } else {
                        // If already near top, or navigating explicitly to a hash mid-page, don't wait 1s.
                        if (lenis && targetUrl.pathname !== pathname && (!targetUrl.hash || targetUrl.hash === '#')) {
                            // Instant snap internal lenis tracker so NextJS routing is flawless
                            lenis.scrollTo(0, { immediate: true })
                        }
                        executeNavigation()
                    }
                }
            } catch (err) {
                // Ignore invalid URLs entirely
            }
        }

        // Use capture: true so we intercept the click BEFORE Next.js <Link> handles it
        document.addEventListener('click', handler, { capture: true })
        return () => document.removeEventListener('click', handler, { capture: true })
    }, [pathname, router, lenis])

    return null
}

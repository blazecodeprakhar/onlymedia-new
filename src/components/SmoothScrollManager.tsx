'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useLenis } from '@/lib/lenis'

/**
 * SmoothScrollManager
 * -------------------
 * Handles in-page scroll navigation (hash links on the same page).
 * Does NOT scroll to top before or after navigation — users teleport
 * directly to the new page with no scroll animations on the current page.
 */
export default function SmoothScrollManager() {
    const pathname = usePathname()
    const router = useRouter()
    const lenis = useLenis()

    // Handle hash link clicks (same-page anchor navigation only)
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            const link = (e.target as HTMLElement).closest('a')
            if (!link) return

            const href = link.getAttribute('href')
            // Ignore: external links, blanks, mailtos, tels
            if (
                !href ||
                link.getAttribute('target') === '_blank' ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:')
            ) return

            try {
                const targetUrl = new URL(link.href, window.location.origin)

                // Only handle internal links
                if (targetUrl.origin !== window.location.origin) return

                // Ignore modifier-clicks (open in new tab)
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

                const isSamePage = targetUrl.pathname === pathname
                const hasHash = targetUrl.hash && targetUrl.hash !== '#'

                // ONLY intercept same-page hash links for smooth scroll
                if (isSamePage && hasHash) {
                    e.preventDefault()
                    e.stopPropagation()
                    const el = document.querySelector(targetUrl.hash) as HTMLElement
                    if (el && lenis) {
                        lenis.scrollTo(el, {
                            offset: -80,
                            duration: 1.0,
                            easing: (t: number) => 1 - Math.pow(1 - t, 4)
                        })
                    } else if (el) {
                        el.scrollIntoView({ behavior: 'smooth' })
                    }
                }

                // For ALL other links (different page, no hash): do nothing.
                // Let Next.js <Link> handle routing instantly with no scroll manipulation.

            } catch {
                // Ignore invalid URLs
            }
        }

        document.addEventListener('click', handler, { capture: true })
        return () => document.removeEventListener('click', handler, { capture: true })
    }, [pathname, lenis])

    return null
}

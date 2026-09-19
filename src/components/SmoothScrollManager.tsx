'use client'

import { useEffect, useRef } from 'react'
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
    const lenis = useLenis()
    const prevPathname = useRef(pathname)

    // Route-change scroll reset: Whenever pathname changes (e.g. / -> /about),
    // immediately reset window and Lenis scroll position to top (0, 0).
    useEffect(() => {
        if (prevPathname.current !== pathname) {
            prevPathname.current = pathname

            // Reset scroll immediately
            window.scrollTo(0, 0)
            if (lenis) {
                lenis.scrollTo(0, { immediate: true })
            }

            // If navigating to a URL with a hash (e.g. /#features), scroll to element
            if (window.location.hash && window.location.hash !== '#') {
                const hash = window.location.hash
                setTimeout(() => {
                    const el = document.querySelector(hash) as HTMLElement
                    if (el && lenis) {
                        lenis.scrollTo(el, {
                            offset: -80,
                            duration: 1.0,
                            easing: (t: number) => 1 - Math.pow(1 - t, 4)
                        })
                    } else if (el) {
                        el.scrollIntoView({ behavior: 'smooth' })
                    }
                }, 100)
            }
        }
    }, [pathname, lenis])

    // Handle link click events
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

                const currentPath = pathname ? pathname.replace(/\/$/, '') || '/' : '/'
                const targetPath = targetUrl.pathname ? targetUrl.pathname.replace(/\/$/, '') || '/' : '/'
                const isSamePage = targetPath === currentPath
                const hasHash = targetUrl.hash && targetUrl.hash !== '#'

                if (isSamePage) {
                    if (hasHash) {
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
                    } else {
                        // Same page without hash (e.g. clicking About while on /about): smooth scroll to top of page
                        e.preventDefault()
                        e.stopPropagation()
                        if (lenis) {
                            lenis.scrollTo(0, {
                                duration: 1.0,
                                easing: (t: number) => 1 - Math.pow(1 - t, 4)
                            })
                        } else {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                    }
                } else {
                    // Navigating to a DIFFERENT page: reset scroll position immediately
                    window.scrollTo(0, 0)
                    if (lenis) {
                        lenis.scrollTo(0, { immediate: true })
                    }
                }

            } catch {
                // Ignore invalid URLs
            }
        }

        document.addEventListener('click', handler, { capture: true })
        return () => document.removeEventListener('click', handler, { capture: true })
    }, [pathname, lenis])

    return null
}

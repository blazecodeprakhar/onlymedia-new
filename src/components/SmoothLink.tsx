'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useLenis } from '@/lib/lenis'
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
    const pathname = usePathname()
    const lenis = useLenis()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Normalize paths for comparison (ignoring trailing slashes)
        const currentPath = pathname ? pathname.replace(/\/$/, '') || '/' : '/'
        
        let targetPath = ''
        let hash = ''
        try {
            const url = new URL(href, 'http://dummy.com')
            targetPath = url.pathname.replace(/\/$/, '') || '/'
            hash = url.hash
        } catch {
            targetPath = href
        }

        const isSamePage = targetPath === currentPath

        if (isSamePage) {
            if (hash && hash !== '#') {
                // Same-page anchor: smooth scroll to element
                e.preventDefault()
                const target = document.querySelector(hash) as HTMLElement
                if (target) {
                    if (lenis) {
                        lenis.scrollTo(target, { offset: -80, duration: 1.0, easing: (t: number) => 1 - Math.pow(1 - t, 4) })
                    } else {
                        target.scrollIntoView({ behavior: 'smooth' })
                    }
                }
            } else {
                // Same-page top link (e.g. clicking About while on /about): smooth scroll to top of page
                e.preventDefault()
                if (lenis) {
                    lenis.scrollTo(0, { duration: 1.0, easing: (t: number) => 1 - Math.pow(1 - t, 4) })
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                }
            }
            if (onClick) onClick(e)
            return
        }

        // All other navigation (different page): reset scroll to top immediately so the new page opens at the top
        window.scrollTo(0, 0)
        if (lenis) {
            lenis.scrollTo(0, { immediate: true })
        }
        if (onClick) onClick(e)
    }

    return (
        <Link
            ref={ref}
            href={href}
            className={className}
            onClick={handleClick}
            prefetch={prefetch}
            scroll={true}
            {...props}
        >
            {children}
        </Link>
    )
}

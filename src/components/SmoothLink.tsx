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
        const isHashLink = href.startsWith('#') || href.startsWith(`${pathname}#`)

        if (isHashLink) {
            // Same-page anchor: smooth scroll to element
            e.preventDefault()
            const hashIndex = href.indexOf('#')
            const hash = href.substring(hashIndex)
            const target = document.querySelector(hash) as HTMLElement
            if (target) {
                if (lenis) {
                    lenis.scrollTo(target, { offset: -80, duration: 1.0, easing: (t: number) => 1 - Math.pow(1 - t, 4) })
                } else {
                    target.scrollIntoView({ behavior: 'smooth' })
                }
            }
            if (onClick) onClick(e)
            return
        }

        // All other navigation: let Next.js <Link> handle it instantly.
        // DO NOT scroll or animate anything on the current page.
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

'use client'

import { ReactLenis } from '@/lib/lenis'

// Lenis options for a perfectly silky, premium scroll feel
// Must be in a client component — functions can't be serialized in server components
const lenisOptions = {
    lerp: 0.08,
    smoothWheel: true,
    syncTouch: true,
    touchMultiplier: 1.5,
    duration: 1.4,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis root options={lenisOptions}>
            {children}
        </ReactLenis>
    )
}

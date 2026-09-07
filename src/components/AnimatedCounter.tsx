'use client'

import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedCounterProps {
    value: number
    decimals?: number
    prefix?: string
    suffix?: string
    duration?: number
    className?: string
}

export default function AnimatedCounter({
    value,
    decimals = 0,
    prefix = '',
    suffix = '',
    duration = 2.0,
    className = ''
}: AnimatedCounterProps) {
    const [displayValue, setDisplayValue] = useState<string>(
        `${prefix}${(0).toFixed(decimals)}${suffix}`
    )
    const elementRef = useRef<HTMLSpanElement>(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (!elementRef.current) return

        const counterObj = { val: 0 }

        const trigger = ScrollTrigger.create({
            trigger: elementRef.current,
            start: 'top 90%',
            once: true,
            onEnter: () => {
                if (hasAnimated.current) return
                hasAnimated.current = true

                gsap.to(counterObj, {
                    val: value,
                    duration: duration,
                    ease: 'power3.out',
                    onUpdate: () => {
                        setDisplayValue(
                            `${prefix}${counterObj.val.toFixed(decimals)}${suffix}`
                        )
                    }
                })
            }
        })

        return () => {
            trigger.kill()
        }
    }, [value, decimals, prefix, suffix, duration])

    return (
        <span ref={elementRef} className={className}>
            {displayValue}
        </span>
    )
}

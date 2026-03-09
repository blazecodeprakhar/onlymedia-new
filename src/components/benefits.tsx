'use client'

import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import BenefitsCard from "./benefitsCard"
import { HandshakeIcon } from "@phosphor-icons/react"
import { LanguagesIcon, RectangleGogglesIcon } from "lucide-react"

gsap.registerPlugin(ScrollTrigger);

// Triple the logo arrays so rows overflow on both sides, giving clean fade edges
const BASE_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const BASE_2 = [6, 4, 7, 1, 9, 3, 8, 5, 2];
const TICKER_1_IMAGES = [...BASE_1, ...BASE_1, ...BASE_1]; // 27 logos
const TICKER_2_IMAGES = [...BASE_2, ...BASE_2, ...BASE_2]; // 27 logos

export default function Benefits() {
    const mainRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Integration ticker 1 animation - slides right (from -200px to 0)
        gsap.timeline({
            scrollTrigger: {
                trigger: '.integrations-ticker-1',
                start: 'top bottom',
                end: 'top top',
                scrub: true
            }
        }).from('.integrations-ticker-1', {
            translateX: '-200px',
            ease: 'power2.inOut'
        })

        // Integration ticker 2 animation - slides left (from 0 to -200px)
        gsap.timeline({
            scrollTrigger: {
                trigger: '.integrations-ticker-2',
                start: 'top bottom',
                end: 'top top',
                scrub: true
            }
        }).to('.integrations-ticker-2', {
            translateX: '-200px',
            ease: 'power2.inOut'
        })

        // Reveal animation for header + cards
        gsap.from('.benefits-reveal', {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'expo.out',
            scrollTrigger: {
                trigger: mainRef.current,
                start: 'top 85%',
            }
        })
    }, { scope: mainRef })

    return (
        <section ref={mainRef} className="benefits-section">
            <div className="benefits-inner">
                {/* Header */}
                <div className="benefits-header benefits-reveal">
                    <span className="benefits-eyebrow">Features</span>
                    <h2 className="text-h2 max-w-3xl">Built for freelancers, powered by simplicity</h2>
                </div>

                {/* Integration Logos card - full width */}
                <div className="card-top-2 benefits-reveal">
                    {/* Centered heading */}
                    <h5 className="text-h4 text-center w-full">Integrates seamlessly with the tools you already use</h5>

                    <div className="app-logos">
                        {/* Ticker row 1 - slides right */}
                        <div className="integrations-ticker">
                            <div className="integrations-ticker-1">
                                {TICKER_1_IMAGES.map((num, i) => (
                                    <Image
                                        key={i}
                                        src={`/images/image-${num}.svg`}
                                        height={200}
                                        width={200}
                                        alt={`Integration tool ${num}`}
                                        className="object-cover object-center size-18 flex-shrink-0"
                                    />
                                ))}
                            </div>
                        </div>
                        {/* Ticker row 2 - slides left */}
                        <div className="integrations-ticker">
                            <div className="integrations-ticker-2">
                                {TICKER_2_IMAGES.map((num, i) => (
                                    <Image
                                        key={i}
                                        src={`/images/image-${num}.svg`}
                                        height={200}
                                        width={200}
                                        alt={`Integration tool ${num}`}
                                        className="object-cover object-center size-18 flex-shrink-0"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <p className="text-body-large text-center">
                        <span className="font-semibold">Seamless integrations</span>. Plug into the tools you love. Set up automations, sync your data, and make your systems work smarter together.
                    </p>
                </div>

                {/* Bottom three feature cards */}
                <div className="benefits-cards-bottom">
                    <BenefitsCard
                        icon={<HandshakeIcon size={24} />}
                        title="Collaborate in realtime"
                        description="Keep every conversation in sync — use comments, messages, and project chats to stay on the same page."
                    />
                    <BenefitsCard
                        icon={<LanguagesIcon size={24} />}
                        title="Speaks your language"
                        description="Set your language, currency, time, and date preferences for a seamless experience that feels truly local."
                    />
                    <BenefitsCard
                        icon={<RectangleGogglesIcon size={24} />}
                        title="View things your way"
                        description="Easily toggle between various views, including Kanban, cards, list, table, timeline, and calendar."
                    />
                </div>
            </div>
        </section>
    )
}

'use client'

import React, { useRef } from 'react'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactForm";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ContactPage() {
    const heroRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.from(".contact-reveal", {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "expo.out",
        })
    }, { scope: heroRef })

    return (
        <main className="flex flex-col bg-beige-0">
            <Navbar />

            {/* Hero Section for Partner With Us */}
            <div ref={heroRef} className="pt-32 md:pt-40 pb-10 bg-linear-to-b from-beige-10 via-neutral-0/30 to-neutral-0/50 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <div className="flex items-center justify-center gap-4 mb-4 contact-reveal">
                    <span className="px-4 py-1.5 rounded-full border border-accent-blue/20 bg-accent-blue/10 text-accent-blue font-black tracking-[0.3em] uppercase text-[10px] md:text-xs">
                        PARTNER WITH US
                    </span>
                </div>
                <h1 className="text-[36px] sm:text-[52px] md:text-[72px] lg:text-[84px] font-black leading-[1.05] tracking-tight text-neutral-30 contact-reveal">
                    Let’s <span className="text-accent-blue italic font-serif font-normal">Talk.</span>
                </h1>
                
                <div className="max-w-4xl mx-auto mt-6 contact-reveal flex flex-col gap-4 text-center">
                    <p className="text-base sm:text-lg md:text-xl text-neutral-30 font-medium leading-relaxed">
                        Planning a campaign, exploring a new platform, <br className="hidden sm:inline" />
                        or looking for a smarter way to reach your audience?
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-neutral-20/90 leading-relaxed max-w-3xl mx-auto font-normal">
                        Tell us what you’re working on. We’ll help you identify the right audience, <br className="hidden sm:inline" />
                        media opportunities, and approach to move your campaign forward.
                    </p>
                </div>
            </div>

            <div className="w-full bg-neutral-0/50">
                <ContactForm />
            </div>

            <Footer />
        </main>
    );
}

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

            {/* Simple Hero Section for Page Context */}
            <div ref={heroRef} className="pt-48 pb-10 bg-linear-to-b from-beige-10 via-neutral-0/30 to-neutral-0/50 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <div className="flex items-center gap-4 mb-10 contact-reveal">
                    <p className="text-eyebrow-large text-accent-blue tracking-[0.5em] uppercase font-black text-xs">
                        CONNECT WITH US
                    </p>
                </div>
                <h1 className="text-[64px] md:text-[96px] lg:text-[120px] font-black leading-[0.85] tracking-[-0.04em] text-neutral-30 contact-reveal">
                    Let’s build <br />
                    <span className="text-accent-blue italic font-serif font-medium">the future.</span>
                </h1>
                <p className="max-w-xl text-body-xl text-neutral-20 mt-12 mb-10 contact-reveal leading-relaxed">
                    Have a project in mind? We're ready to bring the strategy, data, and design to help you reach the next level.
                </p>
            </div>

            <div className="w-full bg-neutral-0/50">
                <ContactForm />
            </div>

            <Footer />
        </main>
    );
}

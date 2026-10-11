'use client'

import React, { useRef } from 'react'
import Image from 'next/image';
import { motion } from 'motion/react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contactForm";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import heroLeftImg from "../../../public/images/contact-hero-left.png";
import heroRightImg from "../../../public/images/contact-hero-right.png";

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

        // Gentle perpetual floating animation for PC graphics
        gsap.to(".floating-left-hero", {
            y: -12,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        })
        gsap.to(".floating-right-hero", {
            y: 12,
            duration: 4.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        })
    }, { scope: heroRef })

    return (
        <main className="flex flex-col bg-white">
            <Navbar />

            {/* Hero Section for Partner With Us */}
            <div ref={heroRef} className="relative pt-32 md:pt-40 pb-10 lg:pb-14 bg-gradient-to-b from-[#F0F6FD]/90 via-[#F7FAFD] to-[#F1F6FC] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                
                {/* Floating Left Graphic (PC Only - Hidden on Mobile) */}
                <div className="hidden lg:block absolute -left-2 xl:left-4 2xl:left-12 top-24 xl:top-28 w-[320px] xl:w-[400px] 2xl:w-[450px] pointer-events-none select-none z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -40, scale: 0.92 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="floating-left-hero w-full h-auto drop-shadow-[0_20px_40px_rgba(0,102,255,0.12)]"
                    >
                        <Image
                            src={heroLeftImg}
                            alt="Ideas to Impact"
                            width={440}
                            height={293}
                            priority
                            draggable={false}
                            onDragStart={(e) => e.preventDefault()}
                            onContextMenu={(e) => e.preventDefault()}
                            className="w-full h-auto object-contain pointer-events-none select-none"
                        />
                    </motion.div>
                </div>

                {/* Floating Right Graphic (PC Only - Hidden on Mobile) */}
                <div className="hidden lg:block absolute -right-2 xl:right-4 2xl:right-12 top-20 xl:top-24 w-[320px] xl:w-[400px] 2xl:w-[450px] pointer-events-none select-none z-10">
                    <motion.div
                        initial={{ opacity: 0, x: 40, scale: 0.92 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="floating-right-hero w-full h-auto drop-shadow-[0_20px_40px_rgba(0,102,255,0.12)]"
                    >
                        <Image
                            src={heroRightImg}
                            alt="Smarter Campaigns"
                            width={440}
                            height={293}
                            priority
                            draggable={false}
                            onDragStart={(e) => e.preventDefault()}
                            onContextMenu={(e) => e.preventDefault()}
                            className="w-full h-auto object-contain pointer-events-none select-none"
                        />
                    </motion.div>
                </div>

                {/* Center Content */}
                <div className="relative z-20 flex flex-col items-center max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-4 contact-reveal">
                        <span className="px-4 py-1.5 rounded-full border border-accent-blue/20 bg-accent-blue/10 text-accent-blue font-black tracking-[0.3em] uppercase text-[10px] md:text-xs">
                            PARTNER WITH US
                        </span>
                    </div>
                    <h1 className="text-[36px] sm:text-[52px] md:text-[68px] lg:text-[80px] font-black leading-[1.05] tracking-tight text-neutral-30 contact-reveal">
                        Let’s <span className="text-accent-blue italic font-serif font-normal">Talk.</span>
                    </h1>
                    
                    <div className="max-w-xl mx-auto mt-6 contact-reveal flex flex-col gap-3 text-center">
                        <p className="text-base sm:text-lg text-neutral-30 font-medium leading-relaxed">
                            Planning a campaign, exploring a new platform, <br className="hidden sm:inline" />
                            or looking for a smarter way to reach your audience?
                        </p>
                        <p className="text-sm sm:text-base text-neutral-20/85 leading-relaxed font-normal">
                            Tell us what you’re working on. We’ll help you identify the right audience, <br className="hidden sm:inline" />
                            media opportunities, and approach to move your campaign forward.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-gradient-to-b from-[#F1F6FC] via-[#F8FAFD] to-white pb-16">
                <ContactForm />
            </div>

            <Footer />
        </main>
    );
}

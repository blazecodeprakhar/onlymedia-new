'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import MainButton from './buttons/mainButton'
import { Envelope, Phone, MapPin, LinkedinLogo, FacebookLogo, InstagramLogo } from '@phosphor-icons/react'

function ContactForm() {
    const formRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.from(".contact-reveal", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
        })
    }, { scope: formRef })

    return (
        <section ref={formRef} className="pb-16 md:pb-20 pt-4 bg-gradient-to-b from-neutral-0/50 to-white relative overflow-hidden">
            {/* Soft decorative background circles */}
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-20/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="wrapper max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
                <div className="bg-white rounded-[32px] md:rounded-[48px] lg:p-16 md:p-12 p-6 sm:p-8 shadow-[0_20px_60px_-20px_rgba(26,22,21,0.06)] border border-neutral-30/[0.01] grid lg:grid-cols-12 md:gap-12 gap-8">

                    {/* Brand Info Column */}
                    <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6 md:gap-8">
                        <div className="contact-reveal">
                            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-extrabold leading-[1.1] tracking-tight text-neutral-30 mb-3 md:mb-4">
                                Let's start a <br />
                                <span className="text-accent-blue font-serif italic font-medium">conversation.</span>
                            </h2>
                            <p className="text-base md:text-lg text-neutral-20 leading-relaxed max-w-md">
                                Leave us your details and our team will get back to you as soon as possible.
                            </p>
                        </div>

                        <div className="flex flex-col gap-5 md:gap-6">
                            <div className="contact-reveal flex items-center gap-4 md:gap-5 group">
                                <div className="min-h-12 md:min-h-14 min-w-12 md:min-w-14 rounded-[16px] md:rounded-[18px] bg-accent-blue/5 text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-all duration-500">
                                    <Envelope size={24} weight="duotone" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-neutral-10/70 mb-0.5">Email</p>
                                    <p className="text-base sm:text-lg font-bold text-neutral-30 break-all sm:break-normal">connect@onlymedia.in</p>
                                </div>
                            </div>

                            <div className="contact-reveal flex items-center gap-4 md:gap-5 group">
                                <div className="min-h-12 md:min-h-14 min-w-12 md:min-w-14 rounded-[16px] md:rounded-[18px] bg-accent-blue/5 text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-all duration-500">
                                    <MapPin size={24} weight="duotone" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-neutral-10/70 mb-0.5">Visit Hub - Mumbai</p>
                                    <p className="text-base sm:text-lg font-bold text-neutral-30">Mumbai, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-reveal flex gap-3 md:gap-4 mt-1 md:mt-2">
                            <a href="https://in.linkedin.com/company/onlymedia-marketing-solutions" target="_blank" rel="noopener noreferrer" className="h-11 w-11 md:h-12 md:w-12 rounded-xl bg-neutral-0 hover:bg-neutral-30 hover:text-white text-neutral-20 flex items-center justify-center transition-all duration-300 shadow-md">
                                <LinkedinLogo size={20} weight="fill" />
                            </a>
                            <a href="https://www.instagram.com/onlymedia_official/" target="_blank" rel="noopener noreferrer" className="h-11 w-11 md:h-12 md:w-12 rounded-xl bg-neutral-0 hover:bg-neutral-30 hover:text-white text-neutral-20 flex items-center justify-center transition-all duration-300 shadow-md">
                                <InstagramLogo size={20} weight="fill" />
                            </a>
                            <a href="https://www.facebook.com/people/OnlyMedia/61574909529047/" target="_blank" rel="noopener noreferrer" className="h-11 w-11 md:h-12 md:w-12 rounded-xl bg-neutral-0 hover:bg-neutral-30 hover:text-white text-neutral-20 flex items-center justify-center transition-all duration-300 shadow-md">
                                <FacebookLogo size={20} weight="fill" />
                            </a>
                        </div>
                    </div>

                    {/* Input Form Column */}
                    <div className="lg:col-span-12 xl:col-span-7 contact-reveal">
                        <form className="flex flex-col gap-5 md:gap-6 bg-beige-10/60 md:p-8 p-5 sm:p-6 rounded-[24px] md:rounded-[32px] border border-neutral-30/5" onSubmit={(e) => e.preventDefault()}>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-neutral-30 pl-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        className="bg-white border-2 border-[#E4E2E2] rounded-xl md:rounded-2xl px-5 py-4 text-neutral-30 text-base font-medium placeholder:text-neutral-10 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 transition-all"
                                    />
                                </div>
                                {/* Company Name */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-neutral-30 pl-1">Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="Company name"
                                        className="bg-white border-2 border-[#E4E2E2] rounded-xl md:rounded-2xl px-5 py-4 text-neutral-30 text-base font-medium placeholder:text-neutral-10 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Mobile Number */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-neutral-30 pl-1">Mobile Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 9876543210"
                                        className="bg-white border-2 border-[#E4E2E2] rounded-xl md:rounded-2xl px-5 py-4 text-neutral-30 text-base font-medium placeholder:text-neutral-10 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 transition-all"
                                    />
                                </div>
                                {/* Email Address */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-neutral-30 pl-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        className="bg-white border-2 border-[#E4E2E2] rounded-xl md:rounded-2xl px-5 py-4 text-neutral-30 text-base font-medium placeholder:text-neutral-10 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-neutral-30 pl-1">Details</label>
                                <textarea
                                    rows={4}
                                    placeholder="Your message and campaign details..."
                                    className="bg-white border-2 border-[#E4E2E2] rounded-xl md:rounded-2xl px-5 py-4 text-neutral-30 text-base font-medium placeholder:text-neutral-10 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 transition-all resize-none"
                                ></textarea>
                            </div>

                            <div className="pt-2">
                                <MainButton
                                    text="Send Message"
                                    className="px-14 py-4 md:py-5 bg-neutral-30 text-white hover:bg-accent-blue transition-all duration-300 shadow-xl text-base font-bold w-full md:w-auto"
                                />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactForm


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
        <section ref={formRef} className="pb-32 pt-10 bg-linear-to-b from-neutral-0/50 to-beige-0 relative overflow-hidden">
            {/* Soft decorative background circles */}
            <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="wrapper max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
                <div className="bg-white rounded-[40px] md:rounded-[64px] lg:p-32 md:p-24 p-6 sm:p-10 shadow-[0_32px_128px_-32px_rgba(26,22,21,0.06)] border border-neutral-30/[0.01] grid lg:grid-cols-12 md:gap-24 gap-16">

                    {/* Brand Info Column */}
                    <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-10 md:gap-14">
                        <div className="contact-reveal">
                            <h2 className="text-[32px] sm:text-[42px] md:text-[64px] font-extrabold leading-[1.1] tracking-tight text-neutral-30 mb-6 md:mb-8">
                                Let's start a <br />
                                <span className="text-accent-blue font-serif italic font-medium">conversation.</span>
                            </h2>
                            <p className="text-lg md:text-body-xl text-neutral-20 leading-relaxed max-w-md">
                                Whether you're a startup or an established brand, we bring the data and creativity to help you grow.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8 md:gap-10">
                            <div className="contact-reveal flex items-center gap-5 md:gap-6 group">
                                <div className="min-h-14 md:min-h-16 min-w-14 md:min-w-16 rounded-[18px] md:rounded-[22px] bg-accent-blue/5 text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-all duration-500">
                                    <Envelope size={26} weight="duotone" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-neutral-10/70 mb-1">Email us</p>
                                    <p className="text-base sm:text-lg lg:text-xl font-bold text-neutral-30 break-all sm:break-normal">connect@onlymedia.in</p>
                                </div>
                            </div>

                            <div className="contact-reveal flex items-center gap-5 md:gap-6 group">
                                <div className="min-h-14 md:min-h-16 min-w-14 md:min-w-16 rounded-[18px] md:rounded-[22px] bg-accent-blue/5 text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-all duration-500">
                                    <Phone size={26} weight="duotone" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-neutral-10/70 mb-1">Call us</p>
                                    <p className="text-lg md:text-xl font-bold text-neutral-30">+91 9876543210</p>
                                </div>
                            </div>

                            <div className="contact-reveal flex items-center gap-5 md:gap-6 group">
                                <div className="min-h-14 md:min-h-16 min-w-14 md:min-w-16 rounded-[18px] md:rounded-[22px] bg-accent-blue/5 text-accent-blue flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-all duration-500">
                                    <MapPin size={26} weight="duotone" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-neutral-10/70 mb-1">Visit Hub</p>
                                    <p className="text-lg md:text-xl font-bold text-neutral-30">Mumbai, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-reveal flex gap-4 md:gap-5 mt-2 md:mt-4">
                            <a href="https://in.linkedin.com/company/onlymedia-marketing-solutions" target="_blank" rel="noopener noreferrer" className="h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-neutral-0 hover:bg-neutral-30 hover:text-white text-neutral-20 flex items-center justify-center transition-all duration-300 shadow-md">
                                <LinkedinLogo size={22} weight="fill" />
                            </a>
                            <a href="https://www.instagram.com/onlymedia_official/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-neutral-0 hover:bg-neutral-30 hover:text-white text-neutral-20 flex items-center justify-center transition-all duration-300 shadow-md">
                                <InstagramLogo size={22} weight="fill" />
                            </a>
                            <a href="https://www.facebook.com/people/OnlyMedia/61574909529047/" target="_blank" rel="noopener noreferrer" className="h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-neutral-0 hover:bg-neutral-30 hover:text-white text-neutral-20 flex items-center justify-center transition-all duration-300 shadow-md">
                                <FacebookLogo size={22} weight="fill" />
                            </a>
                        </div>
                    </div>

                    {/* Input Form Column */}
                    <div className="lg:col-span-12 xl:col-span-7 contact-reveal">
                        <form className="flex flex-col gap-6 md:gap-7 bg-beige-10/60 md:p-12 p-5 sm:p-8 rounded-[30px] md:rounded-[40px] border border-neutral-30/5">

                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-neutral-30 pl-1">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        className="bg-white border-2 border-[#E4E2E2] rounded-xl md:rounded-2xl px-5 py-4 text-neutral-30 text-base font-medium placeholder:text-neutral-10 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 transition-all"
                                    />
                                </div>
                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-neutral-30 pl-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        className="bg-white border-2 border-[#E4E2E2] rounded-xl md:rounded-2xl px-5 py-4 text-neutral-30 text-base font-medium placeholder:text-neutral-10 focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Service */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-neutral-30 pl-1">How can we help you succeed?</label>
                                <div className="relative">
                                    <select className="bg-white border-2 border-[#E4E2E2] rounded-xl md:rounded-2xl px-5 py-4 text-neutral-30 text-base font-medium focus:outline-none focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/10 transition-all w-full appearance-none cursor-pointer">
                                        <option>Brand Growth &amp; Strategy</option>
                                        <option>Web &amp; Digital Design</option>
                                        <option>Paid Media &amp; Performance</option>
                                        <option>Content Production</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-20">
                                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                                            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-neutral-30 pl-1">Tell us about your project</label>
                                <textarea
                                    rows={5}
                                    placeholder="Your message and goals..."
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

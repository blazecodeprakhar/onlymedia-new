'use client'

import SmoothLink from "./SmoothLink";
import Link from "next/link";
import Image from "next/image";
import MainButton from "./buttons/mainButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InstagramLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
    const footerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".footer-reveal", {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 90%",
            }
        });
    }, { scope: footerRef });

    return (
        <footer
            ref={footerRef}
            className="w-full bg-blue-20 text-neutral-30 overflow-hidden relative z-20"
            style={{
                background: 'linear-gradient(180deg, #9CC1E7 0%, #84B9EF 100%)'
            }}
        >
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/20 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-b from-transparent to-blue-20/50 blur-3xl pointer-events-none" />

            <div className="wrapper max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-12 relative z-10 flex flex-col gap-12 md:gap-24">

                {/* Floating Premium CTA Card */}
                <div className="footer-reveal relative bg-white/40 backdrop-blur-2xl border border-white/60 p-8 md:p-16 rounded-[32px] md:rounded-[40px] flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
                    <div className="max-w-2xl text-center lg:text-left">
                        <h2 className="text-[28px] sm:text-[40px] md:text-[52px] font-black leading-[1.1] tracking-tight mb-4 md:mb-6">
                            Ready to move <br className="hidden md:block" />
                            <span className="text-accent-blue">your brand forward?</span>
                        </h2>
                        <p className="text-base md:text-xl text-neutral-30/70 leading-relaxed font-medium">
                            OnlyMedia is where data clarity meets human impact. <br className="hidden lg:block" />
                            We build campaigns that don't just reach people, they move them.
                        </p>
                    </div>
                    <div className="shrink-0">
                        <MainButton
                            text="Start a conversation"
                            href="/contact"
                            className="bg-neutral-30 text-white px-10 py-6 text-xl hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-full"
                        />
                    </div>
                </div>

                {/* Main Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
                    {/* Brand Column */}
                    <div className="footer-reveal flex flex-col gap-8">
                        <SmoothLink href="/" className="flex items-center gap-2 w-fit">
                            <Image
                                src="/images/OM1Final-1.png"
                                alt="OnlyMedia logo"
                                width={120}
                                height={36}
                                className="object-contain"
                            />
                        </SmoothLink>
                        <p className="text-body-normal text-neutral-30/50 leading-relaxed">
                            OnlyMedia is where data clarity meets human impact. We build campaigns that don't just reach people, they move them.
                        </p>
                        <div className="flex gap-4">
                            <SmoothLink href="#" className="p-3 rounded-full bg-neutral-30/5 hover:bg-accent-blue/20 transition-colors group">
                                <LinkedinLogo size={20} className="text-neutral-30 group-hover:text-accent-blue transition-colors" weight="fill" />
                            </SmoothLink>
                            <SmoothLink href="#" className="p-3 rounded-full bg-neutral-30/5 hover:bg-accent-blue/20 transition-colors group">
                                <InstagramLogo size={20} className="text-neutral-30 group-hover:text-accent-blue transition-colors" weight="fill" />
                            </SmoothLink>
                            <SmoothLink href="#" className="p-3 rounded-full bg-neutral-30/5 hover:bg-accent-blue/20 transition-colors group">
                                <TwitterLogo size={20} className="text-neutral-30 group-hover:text-accent-blue transition-colors" weight="fill" />
                            </SmoothLink>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="footer-reveal flex flex-col gap-8">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">Company</p>
                        <nav className="flex flex-col gap-4">
                            <SmoothLink href="/about" className="text-body-normal text-neutral-30/60 hover:text-accent-blue transition-colors w-fit">About</SmoothLink>
                            <SmoothLink href="#" className="text-body-normal text-neutral-30/60 hover:text-accent-blue transition-colors w-fit">Strategy</SmoothLink>
                            <SmoothLink href="#" className="text-body-normal text-neutral-30/60 hover:text-accent-blue transition-colors w-fit">Our Work</SmoothLink>
                            <SmoothLink href="/contact" className="text-body-normal text-neutral-30/60 hover:text-accent-blue transition-colors w-fit">Contact</SmoothLink>
                        </nav>
                    </div>

                    <div className="footer-reveal flex flex-col gap-8">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">Solutions</p>
                        <nav className="flex flex-col gap-4">
                            {['Digital Media', 'Transit & OOH', 'Emerging Platforms', 'Data Analytics'].map((item) => (
                                <SmoothLink key={item} href="#" className="text-body-normal text-neutral-30/60 hover:text-accent-blue transition-colors w-fit">
                                    {item}
                                </SmoothLink>
                            ))}
                        </nav>
                    </div>

                    <div className="footer-reveal flex flex-col gap-8">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">Newsletter</p>
                        <div className="flex flex-col gap-4">
                            <p className="text-body-small text-neutral-30/60">
                                Get latest insights delivered directly to your inbox.
                            </p>
                            <div className="flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-white/40 border border-neutral-30/10 rounded-full px-6 py-4 text-neutral-30 placeholder:text-neutral-30/40 focus:outline-none focus:border-accent-blue/50 transition-colors"
                                />
                                <button className="w-full bg-neutral-30 text-white font-bold py-4 rounded-full hover:bg-accent-blue hover:text-white transition-all duration-300">
                                    Subscribe now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Area */}
                <div className="footer-reveal flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 border-t border-neutral-30/15 pt-8 md:pt-12 text-center md:text-left">
                    <p className="text-xs md:text-sm font-bold tracking-tight text-neutral-30/40 uppercase">
                        © {new Date().getFullYear()} OnlyMedia. Built for Global Impact.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-30/40">
                        <SmoothLink href="#" className="hover:text-accent-blue transition-colors">Privacy Policy</SmoothLink>
                        <SmoothLink href="#" className="hover:text-accent-blue transition-colors">Terms of Service</SmoothLink>
                        <SmoothLink href="#" className="hover:text-accent-blue transition-colors">Cookie Policy</SmoothLink>
                    </div>
                </div>

                {/* Giant background text for that premium feel */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[12vw] font-black text-white/10 uppercase pointer-events-none whitespace-nowrap hidden lg:block select-none mix-blend-overlay leading-none tracking-tighter">
                    OnlyMedia
                </div>
            </div>
        </footer>
    );
}

export default Footer;

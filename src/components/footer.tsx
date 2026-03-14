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
            className="w-full bg-neutral-30 text-white overflow-hidden relative"
        >
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-orange/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="wrapper max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10 flex flex-col gap-24">

                {/* Top Call to Action Area */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 border-b border-white/5 pb-20">
                    <div className="footer-reveal">
                        <h2 className="text-[36px] sm:text-[40px] md:text-[56px] font-bold leading-tight tracking-tight mb-4">
                            Ready to move <br />
                            <span className="text-accent-blue">your brand forward?</span>
                        </h2>
                        <p className="text-body-large text-white/60 max-w-lg">
                            We're here to help you navigate the complex media landscape with data and creativity.
                        </p>
                    </div>
                    <div className="footer-reveal">
                        <MainButton
                            text="Start a conversation"
                            href="/contact"
                            className="bg-white text-neutral-30 px-12 py-6 text-xl hover:bg-accent-blue hover:text-white transition-all duration-300 shadow-xl"
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
                        <p className="text-body-normal text-white/50 leading-relaxed">
                            OnlyMedia is where data clarity meets human impact. We build campaigns that don't just reach people, they move them.
                        </p>
                        <div className="flex gap-4">
                            <SmoothLink href="#" className="p-3 rounded-full bg-white/5 hover:bg-accent-blue/20 transition-colors group">
                                <LinkedinLogo size={20} className="text-white group-hover:text-accent-blue transition-colors" weight="fill" />
                            </SmoothLink>
                            <SmoothLink href="#" className="p-3 rounded-full bg-white/5 hover:bg-accent-blue/20 transition-colors group">
                                <InstagramLogo size={20} className="text-white group-hover:text-accent-blue transition-colors" weight="fill" />
                            </SmoothLink>
                            <SmoothLink href="#" className="p-3 rounded-full bg-white/5 hover:bg-accent-blue/20 transition-colors group">
                                <TwitterLogo size={20} className="text-white group-hover:text-accent-blue transition-colors" weight="fill" />
                            </SmoothLink>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="footer-reveal flex flex-col gap-8">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">Company</p>
                        <nav className="flex flex-col gap-4">
                            <SmoothLink href="/about" className="text-body-normal text-white/60 hover:text-white transition-colors w-fit">About</SmoothLink>
                            <SmoothLink href="#" className="text-body-normal text-white/60 hover:text-white transition-colors w-fit">Strategy</SmoothLink>
                            <SmoothLink href="#" className="text-body-normal text-white/60 hover:text-white transition-colors w-fit">Our Work</SmoothLink>
                            <SmoothLink href="/contact" className="text-body-normal text-white/60 hover:text-white transition-colors w-fit">Contact</SmoothLink>
                        </nav>
                    </div>

                    <div className="footer-reveal flex flex-col gap-8">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">Solutions</p>
                        <nav className="flex flex-col gap-4">
                            {['Digital Media', 'Transit & OOH', 'Emerging Platforms', 'Data Analytics'].map((item) => (
                                <SmoothLink key={item} href="#" className="text-body-normal text-white/60 hover:text-white transition-colors w-fit">
                                    {item}
                                </SmoothLink>
                            ))}
                        </nav>
                    </div>

                    <div className="footer-reveal flex flex-col gap-8">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-blue">Newsletter</p>
                        <div className="flex flex-col gap-4">
                            <p className="text-body-small text-white/60">
                                Get latest insights delivered directly to your inbox.
                            </p>
                            <div className="flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-accent-blue/50 transition-colors"
                                />
                                <button className="w-full bg-white text-neutral-30 font-bold py-4 rounded-full hover:bg-accent-blue hover:text-white transition-all duration-300">
                                    Subscribe now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Area */}
                <div className="footer-reveal flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
                    <p className="text-sm text-white/40">
                        © {new Date().getFullYear()} OnlyMedia. Built for impact.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-sm text-white/40">
                        <SmoothLink href="#" className="hover:text-white transition-colors">Privacy Policy</SmoothLink>
                        <SmoothLink href="#" className="hover:text-white transition-colors">Terms of Service</SmoothLink>
                        <SmoothLink href="#" className="hover:text-white transition-colors">Cookie Policy</SmoothLink>
                    </div>
                </div>

                {/* Giant background text for that premium feel */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-black text-white/[0.02] uppercase pointer-events-none whitespace-nowrap hidden lg:block select-none">
                    OnlyMedia
                </div>
            </div>
        </footer>
    );
}

export default Footer;

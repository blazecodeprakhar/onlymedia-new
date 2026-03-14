'use client'
import SmoothLink from "./SmoothLink";
import Image from "next/image"
import MainButton from "./buttons/mainButton"
import { Menu } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "motion/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [mounted, setMounted] = useState(false)
    const navContainerRef = useRef<HTMLDivElement>(null)
    const isMobileQuery = useMediaQuery({ query: '(max-width: 1024px)' })
    const isMobile = mounted ? isMobileQuery : false

    useEffect(() => {
        setMounted(true)

        const handleClickOutside = (event: MouseEvent) => {
            if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
                setOpenDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    useGSAP(() => {
        if (!mounted) return;

        // Minimization animation on scroll
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: '20px top',
                toggleActions: isMobile ? 'play none none none' : 'play none none reverse',
            }
        })

        const targetWidth = isMobile ? '88%' : '60%'
        navTween.to('#navbar', {
            width: targetWidth,
            duration: 0.8,
            ease: 'expo.inOut', // More premium feel
        }, 0)

        // Only animate background/blur for Desktop.
        // Mobile is hardcoded to glass in the style props.
        if (!isMobile) {
            navTween.fromTo(['#navbar > nav', '#navbar > .desktop-dropdown'],
                { backgroundColor: 'transparent', backdropFilter: 'blur(0px)', border: '1px solid rgba(255,255,255,0)' },
                { backgroundColor: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '28px', duration: 0.8, ease: 'expo.inOut' },
                0
            )
        }
    }, [isMobile, mounted])

    // Solid glass style for mobile to ensure NO transparency EVER.
    const mobileGlassStyle = {
        backgroundColor: 'rgba(255,255,255,0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.3)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.05)'
    }

    const navigationLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/#features' },
        { name: 'Blogs', href: '/blog' },
        { name: 'FAQs', href: '/faqs' },
    ]

    return (
        <header className='p-4 md:p-5 flex justify-center fixed z-50 w-full'>
            <div
                id="navbar"
                ref={navContainerRef}
                className="flex flex-col gap-3 w-full max-w-5xl transition-all duration-500 ease-out"
                style={{ width: isMobile ? '92%' : '100%' }} // Initial mobile width
            >
                <nav
                    className="flex items-center justify-between md:pl-6 md:pr-2 py-2 px-5 md:px-6"
                    style={isMobile ? mobileGlassStyle : {}}
                >
                    <SmoothLink href={'/'} className="pointer flex-shrink-0">
                        <div className="flex items-center justify-center gap-1">
                            <Image src="/images/OM1Final-1.png" alt="OnlyMedia Logo" width={80} height={24} className="object-contain" priority />
                        </div>
                    </SmoothLink>

                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <ul className="flex gap-1 text-body-large text-neutral-30">
                            {navigationLinks.map((link) => (
                                <li key={link.name} className="py-2 px-4 hover:rounded-full hover:bg-white/30 transition-colors">
                                    <SmoothLink href={link.href}>{link.name}</SmoothLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden lg:block">
                        <MainButton text="Get in touch" href="/contact" />
                    </div>

                    <button
                        className='lg:hidden p-2 rounded-full hover:bg-black/5 active:scale-95 transition-all'
                        onClick={() => setOpenDropdown(!openDropdown)}
                        aria-label="Toggle menu"
                    >
                        <Menu size={24} className="text-neutral-30" />
                    </button>
                </nav>

                {/* Mobile Dropdown Menu with Spring Physics */}
                <AnimatePresence>
                    {openDropdown && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: -10, scale: 0.98 }}
                            animate={{ opacity: 1, height: 'auto', y: 0, scale: 1 }}
                            exit={{ opacity: 0, height: 0, y: -10, scale: 0.98 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="lg:hidden text-center w-full z-10 overflow-hidden"
                            style={mobileGlassStyle}
                        >
                            <div className="p-6 flex flex-col gap-2">
                                <ul className="flex flex-col gap-1 text-body-large text-neutral-30 pb-6 border-b border-white/20">
                                    {navigationLinks.map((link) => (
                                        <li key={link.name} className="py-3 px-3 rounded-2xl hover:bg-white/30 transition-colors" onClick={() => setOpenDropdown(false)}>
                                            <SmoothLink href={link.href}>{link.name}</SmoothLink>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-col gap-3 pt-6">
                                    <MainButton
                                        className="w-full h-14 text-lg"
                                        text="Get in touch"
                                        href="/contact"
                                        onClick={() => setOpenDropdown(false)}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default Navbar

'use client'
import SmoothLink from "./SmoothLink";
import Image from "next/image"
import MainButton from "./buttons/mainButton"
import { Menu, ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "motion/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Navbar() {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [activeSection, setActiveSection] = useState<string>('Home')
    const [isScrolledPastHero, setIsScrolledPastHero] = useState<boolean>(false)
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

    // Track active page and in-page sections
    useEffect(() => {
        if (!pathname) return;

        if (pathname.startsWith('/about')) {
            setActiveSection('About');
            setIsScrolledPastHero(true);
            return;
        }
        if (pathname.startsWith('/insights')) {
            setActiveSection('Insights');
            setIsScrolledPastHero(true);
            return;
        }
        if (pathname !== '/') {
            setActiveSection('');
            setIsScrolledPastHero(true);
            return;
        }

        // On Home page ('/'): listen to scroll to check if scrolled away from hero and reflect Home vs Solutions
        const updateHomeSection = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            
            // Check if user has scrolled away from the hero section (e.g. past top 200px)
            setIsScrolledPastHero(scrollY > 200);

            const featuresEl = document.getElementById('features');
            if (featuresEl) {
                const rect = featuresEl.getBoundingClientRect();
                if (rect.top <= 260 && rect.bottom >= 150) {
                    setActiveSection('Solutions');
                    return;
                }
            }
            setActiveSection('Home');
        };

        updateHomeSection();
        window.addEventListener('scroll', updateHomeSection, { passive: true });
        return () => window.removeEventListener('scroll', updateHomeSection);
    }, [pathname]);

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
        { name: 'Solutions', href: '/#features' },
        { name: 'Insights', href: '/insights' },
        { name: 'ImpactFrames', href: 'https://impactframes.netlify.app/', target: '_blank', rel: 'noopener noreferrer' },
    ]

    // Only show active pill indicator when scrolled past the hero section on the home page (or on other pages)
    const showActivePill = pathname !== '/' || isScrolledPastHero;

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

                    {/* Desktop Menu with Animated Active Capsule */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-1 text-[15px] text-neutral-30 relative">
                            {navigationLinks.map((link) => {
                                const isCurrent = activeSection === link.name;
                                const isHighlighted = isCurrent && showActivePill;

                                return (
                                    <li key={link.name} className="relative z-10">
                                        <SmoothLink
                                            href={link.href}
                                            target={link.target}
                                            rel={link.rel}
                                            onClick={() => {
                                                if (link.name !== 'ImpactFrames') {
                                                    setActiveSection(link.name);
                                                }
                                            }}
                                            className={`relative z-10 px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1 cursor-pointer select-none ${
                                                isHighlighted
                                                    ? 'text-neutral-900 font-bold'
                                                    : 'text-neutral-700 hover:text-neutral-950 font-medium'
                                            }`}
                                        >
                                            <span>{link.name}</span>
                                            {link.target === '_blank' && (
                                                <ArrowUpRight size={13} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                                            )}
                                        </SmoothLink>

                                        <AnimatePresence>
                                            {isHighlighted && (
                                                <motion.div
                                                    layoutId="navbar-active-pill"
                                                    initial={{ opacity: 0, scale: 0.85 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.85 }}
                                                    className="absolute inset-0 rounded-full bg-white/90 shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-neutral-300/40 z-0"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 400,
                                                        damping: 32
                                                    }}
                                                />
                                            )}
                                        </AnimatePresence>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="hidden lg:block">
                        <MainButton text="Partner with us" href="/contact" />
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
                                    {navigationLinks.map((link) => {
                                        const isHighlighted = activeSection === link.name && showActivePill;
                                        return (
                                            <li
                                                key={link.name}
                                                className={`py-3 px-3 rounded-2xl transition-all duration-200 group flex justify-center ${
                                                    isHighlighted
                                                        ? 'bg-white/90 text-neutral-950 font-bold shadow-xs border border-white/60'
                                                        : 'hover:bg-white/30 text-neutral-700 font-medium'
                                                }`}
                                                onClick={() => {
                                                    if (link.name !== 'ImpactFrames') setActiveSection(link.name);
                                                    setOpenDropdown(false);
                                                }}
                                            >
                                                <SmoothLink href={link.href} target={link.target} rel={link.rel} className="flex items-center gap-1 justify-center w-full">
                                                    <span>{link.name}</span>
                                                    {link.target === '_blank' && (
                                                        <ArrowUpRight size={16} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                                                    )}
                                                </SmoothLink>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="flex flex-col gap-3 pt-6">
                                    <MainButton
                                        className="w-full h-14 text-lg"
                                        text="Partner with us"
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

'use client'
import SmoothLink from "./SmoothLink";
import Image from "next/image"
import MainButton from "./buttons/mainButton"
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [mounted, setMounted] = useState(false)
    const isMobileQuery = useMediaQuery({ query: '(max-width: 1024px)' })
    const isMobile = mounted ? isMobileQuery : false

    useEffect(() => {
        setMounted(true)
    }, [])

    useGSAP(() => {
        if (!mounted) return;

        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: '20px top',
                // For Desktop: swap background from transparent to glass
                // For Mobile: background is always glass in JSX, we only animate width
                toggleActions: isMobile ? 'play none none none' : 'play none none reverse',
            }
        })

        const width = isMobile ? '70%' : '60%'
        navTween.to('#navbar', {
            width: width,
            duration: 1,
            ease: 'power1.inOut',
        }, 0)

        // Only animate background/blur transition for Desktop.
        if (!isMobile) {
            navTween.fromTo(['#navbar > nav', '#navbar > div'],
                { backgroundColor: 'transparent', backdropFilter: 'blur(0px)', borderRadius: '0px' },
                { backgroundColor: '#ffffff40', backdropFilter: 'blur(10px)', borderRadius: '25px', duration: 1, ease: 'power1.inOut' },
                0
            )
        }
    }, [isMobile, mounted])

    const glassStyle = isMobile ? { backgroundColor: '#ffffff40', backdropFilter: 'blur(10px)', borderRadius: '25px' } : {}

    if (!mounted) return <header className='p-5 fixed z-50 w-full h-20' />;

    return (
        <header className='p-5 flex justify-center fixed z-50 w-full'>
            <div id="navbar" className="flex flex-col gap-4 w-5xl max-w-5xl">
                <nav className="flex items-center justify-between md:pl-6 md:pr-2 py-2 px-6" style={glassStyle}>
                    <SmoothLink href={'/'} className="pointer">
                        <div className="flex items-center justify-center gap-1">
                            <Image src="/images/OM1Final-1.png" alt="OnlyMedia Logo" width={80} height={24} className="object-contain grayscale brightness-0" priority />
                        </div>
                    </SmoothLink>

                    <div className="hidden lg:block">
                        <ul className="flex gap-2 text-body-large text-neutral-30">
                            <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                                <SmoothLink href={'/'}>Home</SmoothLink>
                            </li>
                            <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                                <SmoothLink href={'/about'}>About</SmoothLink>
                            </li>
                            <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                                <SmoothLink href={'/#features'}>Services</SmoothLink>
                            </li>
                            <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                                <SmoothLink href={'/blog'}>Blogs</SmoothLink>
                            </li>
                            <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                                <SmoothLink href={'/faqs'}>FAQs</SmoothLink>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <MainButton text="Get in touch" href="/contact" />
                    </div>

                    <button className='lg:hidden' onClick={() => setOpenDropdown(!openDropdown)}>
                        <Menu />
                    </button>
                </nav>
                <div className={`${!openDropdown && 'hidden'} p-6 lg:hidden text-center mt-2 w-full `} style={glassStyle}>
                    <ul className="flex flex-col gap-2 text-body-large text-neutral-30 pb-6">
                        <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                            <SmoothLink href={'/'}>Home</SmoothLink>
                        </li>
                        <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                            <SmoothLink href={'/about'}>About</SmoothLink>
                        </li>
                        <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                            <SmoothLink href={'/#features'}>Services</SmoothLink>
                        </li>
                        <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                            <SmoothLink href={'/blog'}>Blogs</SmoothLink>
                        </li>
                        <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                            <SmoothLink href={'/faqs'}>FAQs</SmoothLink>
                        </li>
                    </ul>
                    <div className="flex flex-col gap-3">
                        <MainButton className="w-full" text="Get in touch" href="/contact" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar

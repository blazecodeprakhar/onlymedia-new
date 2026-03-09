'use client'
import SmoothLink from "./SmoothLink";
import Image from "next/image"
import MainButton from "./buttons/mainButton"
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";


gsap.registerPlugin(ScrollTrigger, SplitText);


function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(false)
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: '20px top',
                toggleActions: 'play none none reverse',
            }
        })

        const width = isMobile ? '70%' : '60%'
        navTween.to('#navbar', {
            width: width,
            duration: 1,
            ease: 'power1.inOut',
        }, 0)

        navTween.fromTo('#navbar > nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#ffffff40',
            backdropFilter: 'blur(10px)',
            borderRadius: '25px',
            duration: 1,
            ease: 'power1.inOut',
        }, 0)

        navTween.fromTo('#navbar > div', { backgroundColor: 'transparent' }, {
            backgroundColor: '#ffffff40',
            backdropFilter: 'blur(10px)',
            borderRadius: '25px',
            duration: 1,
            ease: 'power1.inOut',
        }, 0)
    }, [])

    return (
        <header className='p-5 flex justify-center fixed z-50 w-full'>
            <div id="navbar" className="flex flex-col gap-4 w-5xl max-w-5xl">
                <nav className="flex items-center justify-between md:pl-6 md:pr-2 py-2 px-6">
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
                                <SmoothLink href={'#'}>Services</SmoothLink>
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
                <div className={`${!openDropdown && 'hidden'} p-6 lg:hidden text-center mt-2 w-full `}>
                    <ul className="flex flex-col gap-2 text-body-large text-neutral-30 pb-6">
                        <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                            <SmoothLink href={'/'}>Home</SmoothLink>
                        </li>
                        <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                            <SmoothLink href={'/about'}>About</SmoothLink>
                        </li>
                        <li className="py-2 px-3 hover:rounded-full hover:bg-white/20">
                            <SmoothLink href={'#'}>Services</SmoothLink>
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

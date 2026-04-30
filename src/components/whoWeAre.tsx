'use client'
import MainButton from "./buttons/mainButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

function WhoWeAre() {
    const sectionRef = useRef<HTMLElement>(null);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(".who-we-are .animate-up", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out"
        });

        tl.fromTo("#progress-line", { scaleY: 0 }, {
            scaleY: 1,
            duration: 1.5,
            ease: "power2.inOut"
        }, "-=1");

        // Hover effect for the visual glow elements - Desktop Only
        if (sectionRef.current && !isMobile) {
            sectionRef.current.addEventListener("mouseenter", () => {
                gsap.to(".who-we-are-bg", {
                    scale: 1.2,
                    opacity: 0.4,
                    duration: 3,
                    ease: "power2.out",
                    stagger: 0.2
                });
                gsap.to(".main-headline", {
                    x: 10,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });
            sectionRef.current.addEventListener("mouseleave", () => {
                gsap.to(".who-we-are-bg", {
                    scale: 1,
                    opacity: 0.2,
                    duration: 3,
                    ease: "power2.out"
                });
                gsap.to(".main-headline", {
                    x: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });
        }
    }, { scope: sectionRef, dependencies: [isMobile] });

    return (
        <section id="about" ref={sectionRef} className="who-we-are md:hidden pt-10 pb-10 lg:pt-16 lg:pb-16 bg-neutral-0/50 relative overflow-hidden">
            {/* Dynamic visual elements for pixel-perfect feel */}
            <div className="who-we-are-bg absolute -top-40 -right-40 w-80 md:w-120 h-80 md:h-120 bg-blue-30/10 rounded-full blur-[60px] md:blur-[120px] opacity-20 pointer-events-none" />
            <div className="hidden md:block who-we-are-bg absolute -bottom-40 -left-40 w-100 h-100 bg-accent-orange/5 rounded-full blur-[100px] opacity-15 pointer-events-none" />

            <div className="wrapper max-w-7xl mx-auto px-6 relative z-10">
                {/* Card: flex-col on mobile/tablet, flex-row on xl, always items-center on xl */}
                <div className="bg-white rounded-[48px] p-12 lg:p-20 xl:p-24 shadow-2xl shadow-neutral-30/[0.03] border border-neutral-30/[0.02] flex flex-col xl:flex-row gap-16 xl:gap-24 xl:items-center min-h-[520px]">

                    {/* Left Side: Bold Impact Statement */}
                    <div className="xl:w-[55%] flex-shrink-0 flex flex-col gap-10 animate-up">
                        <div className="flex items-center gap-4">
                            <span className="h-1 w-12 bg-accent-blue rounded-full" />
                            <p className="text-accent-blue tracking-[0.4em] uppercase font-bold text-sm">
                                OUR CORE STRATEGY
                            </p>
                        </div>
                        <h2 className="main-headline text-[40px] md:text-[56px] lg:text-[64px] leading-[1.05] text-neutral-30 font-black tracking-tight transition-all duration-500">
                            OnlyMedia is where <span className="text-accent-blue">precision targeting</span> delivers <span className="text-accent-orange italic">measurable outcomes.</span>
                        </h2>
                    </div>

                    {/* Right Side: Detailed Philosophy */}
                    <div className="xl:flex-1 flex flex-col gap-10 animate-up">
                        {/* Content block with left blue border */}
                        <div className="flex flex-col gap-7 relative border-l-2 border-neutral-30/10 pl-8 hover:border-accent-blue/50 transition-colors duration-700">
                            {/* Animated progress line overlay */}
                            <div className="absolute left-[-2px] top-0 bottom-0 w-0.5 bg-accent-blue origin-top z-20" id="progress-line" />

                            {/* Hook line */}
                            <p className="text-[20px] md:text-[22px] text-neutral-30 leading-[1.45] font-bold">
                                Access to platforms is no longer the challenge.
                                <span className="text-accent-blue"> Execution is.</span>
                            </p>

                            {/* Body paragraphs */}
                            <div className="flex flex-col gap-5">
                                <p className="text-[18px] md:text-[20px] text-neutral-20 leading-[1.75]">
                                    OnlyMedia focuses on making media work harder by combining audience intelligence, structured campaign management and interactive formats.
                                </p>
                                <p className="text-[18px] md:text-[20px] text-neutral-20 leading-[1.75]">
                                    We align the right audiences with the right platforms and continuously refine campaigns based on real signals.
                                </p>
                                <p className="text-[18px] md:text-[20px] text-neutral-20 leading-[1.75]">
                                    The result is media that is not just delivered, but optimized to drive measurable outcomes.
                                </p>
                            </div>

                            {/* Tag line — reduced tracking to prevent 3-line wrap */}
                            <p className="text-[14px] md:text-[15px] font-black text-accent-blue uppercase tracking-[0.12em] leading-[1.8]">
                                Audience Intelligence &bull; Execution &bull; Creative Innovation
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center pl-8">
                            <MainButton
                                text="Explore The Strategy"
                                href="#why-us"
                                className="px-10 py-[18px] text-base font-bold shadow-xl shadow-accent-blue/10 hover:shadow-accent-blue/20 min-w-[220px] text-center"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhoWeAre;

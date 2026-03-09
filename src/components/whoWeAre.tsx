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
        <section id="about" ref={sectionRef} className="who-we-are pt-10 pb-10 lg:pt-16 lg:pb-16 bg-neutral-0/50 relative overflow-hidden">
            {/* Dynamic visual elements for pixel-perfect feel */}
            <div className="who-we-are-bg absolute -top-40 -right-40 w-80 md:w-120 h-80 md:h-120 bg-blue-30/10 rounded-full blur-[60px] md:blur-[120px] opacity-20 pointer-events-none" />
            <div className="hidden md:block who-we-are-bg absolute -bottom-40 -left-40 w-100 h-100 bg-accent-orange/5 rounded-full blur-[100px] opacity-15 pointer-events-none" />

            <div className="wrapper max-w-7xl mx-auto px-6 relative z-10">
                <div className="bg-white rounded-[48px] p-12 lg:p-24 shadow-2xl shadow-neutral-30/[0.03] border border-neutral-30/[0.02] grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    {/* Left Side: Bold Impact Statement */}
                    <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-10">
                        <div className="animate-up">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-1 w-12 bg-accent-blue rounded-full" />
                                <p className="text-eyebrow-large text-accent-blue tracking-[0.4em] uppercase font-bold text-sm">
                                    OUR CORE STRATEGY
                                </p>
                            </div>
                            <h2 className="main-headline text-[48px] md:text-[64px] lg:text-[72px] leading-[1.05] text-neutral-30 font-bold tracking-tight transition-all duration-500">
                                OnlyMedia is where <br className="hidden md:block" />
                                <span className="text-accent-blue">data clarity </span> <br className="hidden md:block" />
                                meets <span className="text-accent-orange italic">human impact</span>.
                            </h2>
                        </div>
                    </div>

                    {/* Right Side: Detailed Philosophy */}
                    <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-12 animate-up">
                        <div className="flex flex-col gap-8 relative border-l-2 border-neutral-30/5 pl-8 hover:border-accent-blue/40 transition-colors duration-700">
                            {/* Animated progress line overlay */}
                            <div className="absolute left-[-2px] top-0 bottom-0 w-0.5 bg-accent-blue origin-top z-20" id="progress-line" />

                            <p className="text-body-xl text-neutral-20 leading-relaxed font-medium">
                                We bridge the gap between audience insights and execution. Across digital, transit, and emerging
                                platforms, we build campaigns that don't just reach people, they move them.
                            </p>

                            <div className="flex flex-col gap-3">
                                <p className="text-body-large text-neutral-10 leading-relaxed">
                                    Our mission is simple: transform raw insights into a measurable competitive advantage for your brand in an ever-shifting media landscape.
                                </p>
                            </div>

                            <p className="text-body-large font-bold text-accent-blue uppercase tracking-widest text-[13px] pt-4">
                                Strategy • Creativity • Execution
                            </p>
                        </div>

                        <div className="flex items-center gap-6 pl-8">
                            <MainButton text="Explore The Strategy" href="#why-us" className="px-10 py-5 shadow-2xl shadow-accent-blue/5 hover:shadow-accent-blue/15" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre;


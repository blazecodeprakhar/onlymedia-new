'use client'
import { CheckIcon } from "@phosphor-icons/react"
import MainButton from "./buttons/mainButton"
import LogosTicker from "./logosTicker"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

function Pricing() {

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.pricing',
                start: 'top bottom',
            }
        }).from('.pricing', {
            opacity: 0,
            translateY: '64px',
            duration: 0.6,
            ease: 'power1.inOut'
        })
    })

    return (
        <section className="pricing">
            <div className="container">
                <div className="header">
                    <p className="text-eyebrow-large">
                        Pricing
                    </p>

                    <h2 className="text-h2">
                        Simple plans for serious work
                    </h2>
                </div>

                <div className="pricing-cards">
                    <div className="p-8 flex flex-col gap-8 rounded-3xl bg-white/70 w-full">
                        <div className="top flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <p className="text-eyebrow-large">
                                    OnlyMedia Basic
                                </p>
                                <p className="text-h3">
                                    Free
                                </p>
                            </div>

                            <div className="flex flex-col gap-5">
                                <p className="text-body-large">
                                    For solo use with light needs.
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>Unlimited projects</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>Unlimited clients</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>Time tracking</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>CRM</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>iOS & Android app</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MainButton variant="secondary" text="Try OnlyMedia free" className="w-full" />
                    </div>

                    <div className="p-8 flex flex-col gap-8 rounded-3xl border-5 w-full border-blue-30 bg-linear-to-t from-beige-40 to-blue-20">
                        <div className="top flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <p className="text-eyebrow-large">
                                    OnlyMedia Premium
                                </p>
                                <p className="text-h3">
                                    $87/mo
                                </p>
                            </div>

                            <div className="flex flex-col gap-5">
                                <p className="text-body-large">
                                    For solo use with light needs.
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>Everything in Basic</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>Invoices & payments</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>Expense tracking</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>Income tracking</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>Scheduling</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MainButton text="Get started" className="w-full" />
                    </div>

                    <div className="p-8 flex flex-col gap-8 rounded-3xl bg-white/70 w-full">
                        <div className="top flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <p className="text-eyebrow-large">
                                    OnlyMedia Enterprise
                                </p>
                                <p className="text-h3">
                                    Flexible
                                </p>
                            </div>

                            <div className="flex flex-col gap-5">
                                <p className="text-body-large">
                                    For solo use with light needs.
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>Everything in Premium</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>Custom data import</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>Advanced onboarding</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>Hubspot integration</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-body-large">
                                        <CheckIcon />
                                        <p>Timesheets</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MainButton variant="secondary" text="Contact sales" className="w-full" />
                    </div>
                </div>

                <LogosTicker />
            </div>
        </section>
    )
}

export default Pricing

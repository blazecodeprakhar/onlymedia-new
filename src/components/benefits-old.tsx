'use client'
import Image from "next/image"
import IntegrationsTicker from "./integrationsTicker"
import IntegrationsTickerReverse from "./integrationsTickerRevers"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import BenefitsCard from "./benefitsCard"
import { HandshakeIcon } from "@phosphor-icons/react"
import { LanguagesIcon, RectangleGogglesIcon } from "lucide-react"

function Benefits() {

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.benefits',
                start: 'top bottom',
            }
        }).from('.benefits', {
            opacity: 0,
            translateY: '64px',
            duration: 0.6,
            ease: 'power1.inOut'
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.card-top-1',
                start: 'top bottom',
            }
        }).from('.card-top-1', {
            opacity: 0,
            translateY: '64px',
            duration: 0.6,
            ease: 'power1.inOut'
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.card-top-2',
                start: 'top bottom',
            }
        }).from('.card-top-2', {
            opacity: 0,
            translateY: '64px',
            duration: 0.6,
            ease: 'power1.inOut'
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '.card-top-1-image',
                start: 'top bottom',
                end: 'top center',
                scrub: true
            }
        }).from('.card-top-1-image', {
            translateY: '64px',
            ease: 'power1.inOut'
        })


        gsap.timeline({
            scrollTrigger: {
                trigger: '.app-logos',
                start: 'top bottom',
                end: 'top center',
                scrub: true
            }
        }).from('.app-logos', {
            translateY: '64px',
            ease: 'power1.inOut'
        })
    })

    return (
        <section className="benefits">
            <div className="container">
                <div className="header">
                    <p className="text-eyebrow-large">
                        Features
                    </p>

                    <h2 className="text-h2">
                        Built for freelancers, powered by simplicity
                    </h2>
                </div>

                <div className="cards">
                    <div className="top">
                        <div className="card-top-1">
                            <div className="w-full flex justify-start">
                                <h5 className="text-h4">
                                    Smart, flexible, and built around your business workflow
                                </h5> 
                            </div>

                            <Image src={'/images/card-top-1-image.svg'} height={600} width={600} alt="card top 1 image" className="card-top-1-image object-center object-cover"/>

                            <p className="text-body-large">
                                <span className="font-semibold">Personalize every detail</span>, From branding and interface layout to colors and menus, so Dreelio feels like an extension of your brand.
                            </p>
                        </div>

                        <div className="card-top-2">
                            <div className="w-full flex justify-start">
                                <h5 className="text-h4">
                                    Integrates seamlessly with the tools you already use
                                </h5> 
                            </div>

                            <div className="app-logos w-full flex flex-col gap-4">
                                <IntegrationsTicker />
                                <IntegrationsTickerReverse />
                            </div>

                            <p className="text-body-large">
                                <span className="font-semibold">Seamless integrations</span>. Plug Dreelio into the tools you love. Set up automations, sync your data, and make your systems work smarter together.
                            </p>
                        </div>
                    </div>

                    <div className="bottom">
                        <BenefitsCard icon={<HandshakeIcon size={24}/>} title="Collaborate in realtime" description="Keep every conversation in sync use comments, messages, and project chats to stay on the same page."/>
                        <BenefitsCard icon={<LanguagesIcon size={24}/>} title="Speaks your language" description="Set your language, currency, time, and date preferences for a seamless experience that feels truly local."/>
                        <BenefitsCard icon={<RectangleGogglesIcon size={24}/>} title="View things your way" description="Easily toggle between various views, including Kanban, cards, list, table, timeline, and calendar."/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits

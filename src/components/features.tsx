'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ClockAfternoonIcon, CurrencyCircleDollarIcon, FileDocIcon, ListChecksIcon, ListDashesIcon, ReceiptIcon, ShapesIcon } from '@phosphor-icons/react'
import MainButton from './buttons/mainButton'
import FeatureImageWrapper from './featureImageWrapper'
import FeaturePill from './featurePill'
import { TrendUpIcon } from '@phosphor-icons/react/dist/ssr'

function Features() {
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: `.block-1`,
                start: 'top bottom',
            }
        }).fromTo(`.block-1`, {
            opacity: 0,
            translateY: '64px',
            ease: 'power2.inOut',
            duration: 1
        }, {
            opacity: 1,
            translateY: '0',
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: `.block-2`,
                start: 'top bottom',
            }
        }).fromTo(`.block-2`, {
            opacity: 0,
            translateY: '64px',
            ease: 'power2.inOut',
            duration: 1
        }, {
            opacity: 1,
            translateY: '0',
        })
    })

    return (
        <section className='features'>
            <div className='container'>
                <div className='block-1'>
                    <FeatureImageWrapper id='feature-1-image' src='/images/feature-1-image.png' alt='feature 1' />

                    <div className='feature-copy'>
                        <div className='top'>
                            <div className='texts'>
                                <div className='header'>
                                    <p className='text-eyebrow-large'>
                                        Project management
                                    </p>

                                    <h2 className='text-h2'>
                                        Keep every project moving forward
                                    </h2>
                                </div>

                                <p className='text-body-large'>
                                    <span className='font-semibold'>Plan, assign, and deliver your work</span> - all in one place. With smart task tracking, deadlines, and real-time progress, you stay organized and clients stay confident.
                                </p>
                            </div>

                            <MainButton text='Try OnlyMedia free' className='lg:w-fit w-full' />
                        </div>

                        <div className='lists'>
                            <FeaturePill icon={<ListChecksIcon size={24} />} text='Tasks' />
                            <FeaturePill icon={<ClockAfternoonIcon size={24} />} text='Tasks' />
                            <FeaturePill icon={<ListDashesIcon size={24} />} text='Tasks' />
                            <FeaturePill icon={<FileDocIcon size={24} />} text='Tasks' />
                        </div>
                    </div>
                </div>

                <div className='block-2'>
                    <FeatureImageWrapper id='feature-2-image' src='/images/feature-2-image.png' alt='feature 1' />

                    <div className='feature-copy'>
                        <div className='top'>
                            <div className='texts'>
                                <div className='header'>
                                    <p className='text-eyebrow-large'>
                                        Financial management
                                    </p>

                                    <h2 className='text-h2'>
                                        Track income, get paid, stress less
                                    </h2>
                                </div>

                                <p className='text-body-large'>
                                    <span className='font-semibold'>Create branded invoices</span>, log expenses, and keep tabs on your earnings. Whether you bill hourly or per project, everything’s automated and tax-friendly.
                                </p>
                            </div>

                            <MainButton text='Try OnlyMedia free' className='lg:w-fit w-full' />
                        </div>

                        <div className='lists'>
                            <FeaturePill icon={<ReceiptIcon size={24} />} text='Tasks' />
                            <FeaturePill icon={<CurrencyCircleDollarIcon size={24} />} text='Tasks' />
                            <FeaturePill icon={<TrendUpIcon size={24} />} text='Tasks' />
                            <FeaturePill icon={<ShapesIcon size={24} />} text='Tasks' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features

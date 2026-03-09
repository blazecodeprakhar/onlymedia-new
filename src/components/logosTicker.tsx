import Image from 'next/image';

const brandLogos = [
    { src: '/brandlogos/LInked-In.png', alt: 'LinkedIn' },
    { src: '/brandlogos/Meta.png', alt: 'Meta' },
    { src: '/brandlogos/Pinterest-01.png', alt: 'Pinterest' },
    { src: '/brandlogos/Video-360.png', alt: 'Video 360' },
    { src: '/brandlogos/Youtube.png', alt: 'YouTube' },
    { src: '/brandlogos/new-Reddit-logo-red-horizontal-png-large-size.png', alt: 'Reddit' },
];

function LogosTicker() {
    return (
        <section className="logos-ticker">
            <div className="logos-ticker-content">
                <div className="logos-ticker-header">
                    <span className="logos-ticker-eyebrow">Partners</span>
                    <h2 className="logos-ticker-title">Trusted Media Partners</h2>
                </div>

                <div className="ticker">
                    <div>
                        {/* First logo group */}
                        {brandLogos.map((logo, index) => (
                            <div key={`group1-${index}`} className="flex items-center justify-center shrink-0">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={250}
                                    height={100}
                                    className="w-[140px] lg:w-[180px] h-auto object-contain transition-transform hover:scale-110 duration-300"
                                />
                            </div>
                        ))}

                        {/* Second logo group (duplicate for seamless loop) */}
                        {brandLogos.map((logo, index) => (
                            <div key={`group2-${index}`} className="flex items-center justify-center shrink-0">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={250}
                                    height={100}
                                    className="w-[140px] lg:w-[180px] h-auto object-contain transition-transform hover:scale-110 duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogosTicker

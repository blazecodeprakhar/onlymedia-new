import Image from 'next/image';

const brandLogos = [
    { src: '/images/Logos/Aesthetic Solutions.jpg', alt: 'Aesthetic Solutions', rounded: true },
    { src: '/images/Logos/AU-Bank-new-logo-for-GBM_1024X1024_(cropped).png', alt: 'AU Bank', rounded: true },
    { src: '/images/Logos/Axis_Max_Life_Insurance_logo.svg.png', alt: 'Axis Max Life Insurance', rounded: false },
    { src: '/images/Logos/Fujifilms.png', alt: 'Fujifilms', rounded: false },
    { src: '/images/Logos/Goboult.png', alt: 'Goboult', rounded: true },
    { src: '/images/Logos/gopal-namkeen-logo-png_seeklogo-443236.png', alt: 'Gopal Namkeen', rounded: false },
    { src: '/images/Logos/IMT Faridabad.png', alt: 'IMT Faridabad', rounded: false },
    { src: '/images/Logos/la-shield-600x600-1.jpg', alt: 'La Shield', rounded: true },
    { src: '/images/Logos/logo-sharp.svg', alt: 'Sharp', rounded: false },
    { src: '/images/Logos/Meesho-final-logo_(1).jpg', alt: 'Meesho', rounded: true },
    { src: '/images/Logos/NeoZep.png', alt: 'NeoZep', rounded: false },
    { src: '/images/Logos/nirma-logo-png_seeklogo-529186.png', alt: 'Nirma', rounded: false },
    { src: '/images/Logos/Philips-Logo.wine.png', alt: 'Philips', rounded: false },
    { src: '/images/Logos/vtion-blue-logo.svg', alt: 'Vtion', rounded: false },
];

function LogosTicker() {
    return (
        <section className="logos-ticker overflow-hidden">
            <div className="logos-ticker-content">
                <div className="logos-ticker-header">
                    <span className="logos-ticker-eyebrow">Partners</span>
                    <h2 className="logos-ticker-title">Trusted Media Partners</h2>
                </div>

                {/* Ticker wrapper — no scroll, clips overflow */}
                <div className="overflow-hidden w-full">
                    <div className="flex animate-ticker w-max">
                        {/* First logo group */}
                        {brandLogos.map((logo, index) => (
                            <div
                                key={`group1-${index}`}
                                className="flex items-center justify-center shrink-0 px-6 lg:px-10"
                            >
                                <div className="w-[120px] lg:w-[150px] h-[60px] lg:h-[70px] flex items-center justify-center">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className={`max-w-full max-h-full w-auto h-auto object-contain transition-transform hover:scale-110 duration-300 ${logo.rounded ? 'rounded-[16px]' : ''}`}
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Duplicate group for seamless loop */}
                        {brandLogos.map((logo, index) => (
                            <div
                                key={`group2-${index}`}
                                className="flex items-center justify-center shrink-0 px-6 lg:px-10"
                            >
                                <div className="w-[120px] lg:w-[150px] h-[60px] lg:h-[70px] flex items-center justify-center">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className={`max-w-full max-h-full w-auto h-auto object-contain transition-transform hover:scale-110 duration-300 ${logo.rounded ? 'rounded-[16px]' : ''}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LogosTicker;

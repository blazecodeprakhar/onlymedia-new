export interface CaseStudy {
    id: string;
    slug: string;
    brand: string;
    brandLogo?: string;
    brandColor?: string;
    platform: 'DV360' | 'YouTube' | 'Meta' | 'Pinterest' | 'CTV / OTT' | 'Prog. Video';
    campaign: string;
    dateLocation: string;
    metricLabel: string;
    metricValue: string;
    blurb: string;
    fullDetail: {
        platformFull: string;
        dateLocation: string;
        headlineMetric: string;
        paragraph: string;
    };
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'sharp-dv360',
        slug: 'sharp-dv360',
        brand: 'SHARP',
        brandLogo: '/images/Logos/logo-sharp.svg',
        brandColor: '#E60012',
        platform: 'DV360',
        campaign: '55th Anniversary: Omotenashi',
        dateLocation: 'INDONESIA · JUN 2025',
        metricLabel: 'CTA',
        metricValue: '1.94%',
        blurb: 'Festive "tap to reveal your discount" units on Blibli turned anniversary offers into direct clicks across Indonesia.',
        fullDetail: {
            platformFull: 'DISPLAY & VIDEO 360 (PROGRAMMATIC)',
            dateLocation: 'Indonesia · June 2025',
            headlineMetric: '1.94% CTA',
            paragraph: 'For its 55th anniversary in Indonesia, Sharp partnered with Blibli, running through programmatic display on DV360. An interactive "tap to reveal your discount" creative invited users to engage directly with tiered offers, delivering a 1.94% CTA well above typical display benchmarks for the category.'
        }
    },
    {
        id: 'fujifilm-dv360',
        slug: 'fujifilm-dv360',
        brand: 'FUJIFILM',
        brandLogo: '/images/Logos/Fujifilms.png',
        brandColor: '#009944',
        platform: 'DV360',
        campaign: 'Instax Mini 13 launch',
        dateLocation: 'MAR 2026',
        metricLabel: 'VIDEO COMPLETION RATE',
        metricValue: '51%',
        blurb: '"Perfectly timed selfies" video units held over half the audience to the end, proof for an instant-capture product.',
        fullDetail: {
            platformFull: 'DISPLAY & VIDEO 360 (PROGRAMMATIC)',
            dateLocation: 'March 2026',
            headlineMetric: '51% Video Completion Rate',
            paragraph: 'Fujifilm\'s launch of the Instax Mini 13 used immersive in-banner video built around the line "perfect selfies, perfectly timed," spotlighting the camera\'s auto-exposure and close-up modes. The relatable, moment-driven storytelling held over half of viewers to completion, a strong result for a product built on capturing spontaneous memories.'
        }
    },
    {
        id: 'sony-max-dv360',
        slug: 'sony-max-dv360',
        brand: 'SONY MAX',
        brandLogo: '/images/Logos/SONY_MAX_Logo_2022.png',
        brandColor: '#F58220',
        platform: 'DV360',
        campaign: 'Thamma: World TV Premiere',
        dateLocation: 'MAR 2026',
        metricLabel: 'ENGAGEMENT RATE',
        metricValue: '3.62%',
        blurb: 'Premiere key art with a #DekhoDilThaamKar set-reminder CTA drove strong pre-premiere interest.',
        fullDetail: {
            platformFull: 'DISPLAY & VIDEO 360 (PROGRAMMATIC)',
            dateLocation: 'March 2026',
            headlineMetric: '3.62% Engagement Rate',
            paragraph: 'Ahead of Thamma\'s World TV Premiere on Sony MAX, programmatic display creative built anticipation with striking key art and a "#DekhoDilThaamKar" set-reminder mechanic. The campaign generated a 3.62% engagement rate, reflecting strong audience interest in the premiere.'
        }
    },
    {
        id: 'sandisk-dv360',
        slug: 'sandisk-dv360',
        brand: 'SanDisk',
        brandLogo: '/images/Logos/Sandisk-Logo.jpg',
        brandColor: '#ED1C24',
        platform: 'DV360',
        campaign: 'MicroSD: Space for Your Moments',
        dateLocation: 'MAY 2026',
        metricLabel: 'ENGAGEMENT RATE',
        metricValue: '2.02%',
        blurb: 'A "swipe to expand storage" interactive unit let users demonstrate the product\'s value themselves.',
        fullDetail: {
            platformFull: 'DISPLAY & VIDEO 360 (PROGRAMMATIC)',
            dateLocation: 'May 2026',
            headlineMetric: '2.02% Engagement Rate',
            paragraph: 'SanDisk\'s MicroSD card campaign, "Space for Your Moments," paired everyday lifestyle storytelling with an interactive "swipe down to expand storage" unit. Letting users physically demonstrate the product\'s value on-screen contributed to a 2.02% engagement rate.'
        }
    },
    {
        id: 'la-shield-youtube',
        slug: 'la-shield-youtube',
        brand: 'La Shield',
        brandLogo: '/images/Logos/la-shield-600x600-1.jpg',
        brandColor: '#FF0000',
        platform: 'YouTube',
        campaign: 'Own the Sun',
        dateLocation: '2026',
        metricLabel: 'AD RECALL LIFT (BLS, 7-DAY)',
        metricValue: '+2.7%',
        blurb: 'Non-Skip, Skip and Shorts working together reached 12.42Mn+ viewers and 40.83Mn+ impressions.',
        fullDetail: {
            platformFull: 'YOUTUBE',
            dateLocation: 'March 2026',
            headlineMetric: '12.42Mn+ Reach · +2.7% Ad Recall Lift',
            paragraph: 'To drive awareness and engagement among women 18–34 for La Shield\'s sunscreen range, the campaign ran a multi-format YouTube strategy using Non-Skip (20s), Skip (30s) and Shorts (30s) ads to balance reach, engagement and video completion. The mix delivered 12.42Mn+ unified reach and 12.41Mn+ true views and an independent BLS brand study recorded a +2.7% ad recall lift over a 7-day window.'
        }
    },
    {
        id: 'nirma-ctv-ott',
        slug: 'nirma-ctv-ott',
        brand: 'NIRMA',
        brandLogo: '/images/Logos/nirma-logo-png_seeklogo-529186.png',
        brandColor: '#0055A5',
        platform: 'CTV / OTT',
        campaign: 'Advance: Ziddi Daagon Ke Liye',
        dateLocation: '30 SEC · MAR 2026',
        metricLabel: 'VIDEO COMPLETION RATE',
        metricValue: '80%',
        blurb: '30-sec spots across Aaj Tak, Jio TV+, Sony LIV and other top CTV apps held 4 in 5 viewers to the end.',
        fullDetail: {
            platformFull: 'IMPACT SCREENS (CONNECTED TV)',
            dateLocation: 'March 2026',
            headlineMetric: '80% Video Completion Rate',
            paragraph: 'Nirma Advance took its "Ziddi Daagon Ke Liye" film to the living room via CTV, running 30-second spots across leading connected-TV apps including Aaj Tak, JOJO, Sony LIV, Hungama, Jio TV+ and Xiaomi TV+. The premium, lean-back viewing context drove an 80% video completion rate.'
        }
    },
    {
        id: 'gopal-namkeen-prog-video',
        slug: 'gopal-namkeen-prog-video',
        brand: 'Gopal Namkeen',
        brandLogo: '/images/Logos/gopal-namkeen-logo-png_seeklogo-443236.png',
        brandColor: '#F7941D',
        platform: 'Prog. Video',
        campaign: 'Gathiya: Dhamaal 4 tie-in',
        dateLocation: 'GUJ · RAJ · MAH',
        metricLabel: 'VCR — 10 SEC (JAN–FEB \'26)',
        metricValue: '65%',
        blurb: 'Regional vernacular apps carried a punchy 10-sec film to 65% completion; a 40-sec film still held 44%.',
        fullDetail: {
            platformFull: 'DISPLAY & VIDEO 360 (PROGRAMMATIC)',
            dateLocation: 'February – July 2026 · Gujarat, Rajasthan & Maharashtra',
            headlineMetric: '65% VCR (10s) · 44% VCR (40s)',
            paragraph: 'Gopal Namkeen ran regional programmatic video across Gujarat, Rajasthan and Maharashtra on top vernacular apps and sites such as ABP Live, ShareChat, OLX and TV9 Gujarati. A punchy 10-second film delivered a 65% completion rate in Jan–Feb \'26, while a longer 40-second film tied to the Dhamaal 4 release still held 44% of viewers to the end in July \'26: strong retention for regional, snack-occasion storytelling.'
        }
    },
    {
        id: 'axis-max-life-meta',
        slug: 'axis-max-life-meta',
        brand: 'AXIS MAX LIFE',
        brandLogo: '/images/Logos/Axis_Max_Life_Insurance_logo.svg.png',
        brandColor: '#000000',
        platform: 'Meta',
        campaign: 'Term Plan: Confidence for Every Tomorrow',
        dateLocation: 'SEP 2025 – ONGOING',
        metricLabel: 'LEAD TO QUALITY LEAD RATE',
        metricValue: '61%',
        blurb: 'High-intent custom audiences turned a ₹1Cr cover, ₹595/month offer into consistently qualified leads.',
        fullDetail: {
            platformFull: 'META',
            dateLocation: 'September 2025 – ongoing',
            headlineMetric: '61% Lead to Quality Lead Rate',
            paragraph: 'Axis Max Life\'s term plan campaign promoted ₹1 crore & ₹2 crore of cover using high-intent custom audiences (Tax Payers, Premium Credit Card Holders, etc.) on Meta. The targeting precision translated into a 61% lead-to-quality-lead rate, well above typical benchmarks for the insurance category.'
        }
    },
    {
        id: 'vtion-meta',
        slug: 'vtion-meta',
        brand: 'VTION',
        brandLogo: '/images/Logos/vtion-blue-logo.svg',
        brandColor: '#92278F',
        platform: 'Meta',
        campaign: 'Panelist community app install',
        dateLocation: 'NOV 2025 – ONGOING',
        metricLabel: 'INSTALL TO REGISTRATION RATE',
        metricValue: '33%',
        blurb: 'Targeting women and optimising for Day-7 retention meant installs genuinely followed through to sign-up.',
        fullDetail: {
            platformFull: 'META',
            dateLocation: 'November 2025 – ongoing',
            headlineMetric: '33% Install to Registration Rate',
            paragraph: 'VTION\'s app campaign invited users to "join our community of 1,00,000+ panelists," targeting women specifically and optimising delivery for Day-7 retention rather than installs alone. This retention-first approach produced a 33% install-to-registration rate, showing that people who installed genuinely followed through to sign-up.'
        }
    },
    {
        id: 'goboult-meta',
        slug: 'goboult-meta',
        brand: 'boult',
        brandLogo: '/images/Logos/Goboult.png',
        brandColor: '#000000',
        platform: 'Meta',
        campaign: 'Saber watch & Mustang Thunder',
        dateLocation: 'MAR – MAY 2026',
        metricLabel: 'AVERAGE ORDER VALUE',
        metricValue: '₹3K+',
        blurb: 'Custom audiences built around each product\'s standout spec drove strong upsell into the premium range.',
        fullDetail: {
            platformFull: 'META',
            dateLocation: 'March – May 2026',
            headlineMetric: '₹3K+ Average Order Value',
            paragraph: 'GoBoult\'s Meta campaign for its Saber smartwatch (1.43" AMOLED, always-on display) and Mustang Thunder headphones (70-hour playtime) used high-intent custom audiences built around each product\'s standout spec. The campaign drove an average order value of ₹3,000+, reflecting strong upsell into the premium range.'
        }
    },
    {
        id: 'farzana-meta',
        slug: 'farzana-meta',
        brand: 'Farzana',
        brandLogo: '/images/Logos/Farzana.jpeg',
        brandColor: '#2E8B57',
        platform: 'Meta',
        campaign: 'Weekly sale offers: fresh produce',
        dateLocation: 'JUL 2026 – ONGOING',
        metricLabel: 'ROAS',
        metricValue: '3x',
        blurb: 'An always-on weekend cadence, tied to what\'s in season, has sustained a consistent 3x return on spend.',
        fullDetail: {
            platformFull: 'META',
            dateLocation: 'July 2026 – ongoing',
            headlineMetric: '3x ROAS',
            paragraph: 'Farzana\'s always-on Meta strategy promotes fresh sale offers every weekend, from Jordan apricots to Spanish cherries, keeping creative tied to what\'s in season. The consistent, offer-led cadence has sustained a 3x return on ad spend.'
        }
    },
    {
        id: 'philips-pinterest',
        slug: 'philips-pinterest',
        brand: 'PHILIPS',
        brandLogo: '/images/Logos/Philips-Logo.wine.png',
        brandColor: '#0B5EA8',
        platform: 'Pinterest',
        campaign: '2-in-1 AirStyler',
        dateLocation: 'JUL 2025',
        metricLabel: 'LIFT IN OUTBOUND CLICK RATE',
        metricValue: '2x',
        blurb: 'Placed against hair-pattern search moments, meeting high-intent beauty discovery rather than interrupting it.',
        fullDetail: {
            platformFull: 'PINTEREST',
            dateLocation: 'July 2025',
            headlineMetric: '2X Lift in Outbound Click Rate',
            paragraph: 'Philips placed its 2-in-1 AirStyler in front of users actively searching Pinterest by hair pattern and style, meeting high-intent beauty discovery moments rather than interrupting them. The contextual placement produced a 2X lift in outbound click rate versus baseline.'
        }
    },
    {
        id: 'meesho-pinterest',
        slug: 'meesho-pinterest',
        brand: 'meesho',
        brandLogo: '/images/Logos/Meesho-final-logo_(1).jpg',
        brandColor: '#F43397',
        platform: 'Pinterest',
        campaign: 'First Sunday Maha Sale',
        dateLocation: 'MUMBAI · DEC 2025',
        metricLabel: 'CLICK TO PURCHASE RATE',
        metricValue: '6.3%',
        blurb: 'Sale-day creative met shoppers already browsing style boards, converting discovery straight into purchase.',
        fullDetail: {
            platformFull: 'PINTEREST',
            dateLocation: 'Mumbai · December 2025',
            headlineMetric: '6.3% Click to Purchase Rate',
            paragraph: 'Meesho\'s First Sunday Maha Sale campaign in Mumbai used Pinterest\'s discovery-to-shop journey to reach shoppers already browsing style and home inspiration boards. The sale-day creative converted at a 6.3% click-to-purchase rate.'
        }
    }
];


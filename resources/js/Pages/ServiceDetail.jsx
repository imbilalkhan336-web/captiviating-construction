import { IoCheckmarkCircle } from 'react-icons/io5';
import {
    LuLayoutGrid, LuLayers, LuFilm, LuUtensils, LuArchive,
    LuHouse, LuClipboardList, LuRuler, LuFileCheck, LuHammer, LuCheckCheck, LuSparkles,
} from 'react-icons/lu';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import FeatureBlock from '@/Components/FrontComponents/FeatureBlock';
import ContactForm from '@/Components/FrontComponents/ContactForm';
import FaqAccordion from '@/Components/FrontComponents/FaqAccordion';
import ClientReviews from '@/Components/FrontComponents/ClientReviews';
import CtaSection from '@/Components/pages-sections/CtaSection';
import { PillButton } from '@/Components/FrontComponents/PillButton';

// Icon set exposed to the SERVICES data (referenced by name in iconCards items).
const ICONS = {
    LuLayoutGrid, LuLayers, LuFilm, LuUtensils, LuArchive,
    LuHouse, LuClipboardList, LuRuler, LuFileCheck, LuHammer, LuCheckCheck, LuSparkles,
};

// Content for each service page, keyed by slug. Text is original; images are
// pulled from the project gallery and can be swapped per service.
const SERVICES = {
    'build-on-your-lot-in-nj': {
        title: 'Build Your Dream Home On Your Perfect Piece Of Property',
        metaDescription:
            'Build a custom luxury home on your own lot in New Jersey. Captivating Construction Group handles design, permits, and construction from the ground up.',
        heroSubtitle:
            'Looking to build a custom home from scratch in New Jersey and want to make sure you end up with your dream home when all is said and done? The Captivating Construction Group is an experienced team of luxury home builders that specialize in new home construction in NJ.',
        heroImage: '/image/property-20.webp',
        intro: {
            eyebrow: 'Build On Your Lot',
            heading: 'Build Your Dream Home on Your Own Land',
            body: "Do you have land available in New Jersey and are looking for a construction team to build a home there? Look no further. The Captivating Construction Group is an experienced team of luxury home builders that can build your custom dream home on your own land. With years of experience, we're ready to bring your vision to life â€” whether you want to build from the ground up or renovate an existing home. When your home is built from the ground up, you'll know exactly what you're getting, down to the finest detail.",
            image: '/image/Grollo-Belmore-140.webp',
            ctaLabel: null,
        },
        servicesList: {
            heading: 'Services for Building on a Lot in NJ',
            body: 'When it comes to building your new home on a lot, no project is too big or too unique for Captivating Construction to tackle. We offer a wide range of services to take your project from the ground up.',
            bullets: [
                'Design & consulting from the ground up',
                'Custom luxury home building',
                'Architectural & refined services',
                'Top sub-contractors specializing in every trade',
                '3D renderings & floor plans',
                'Pools, patios, landscaping & driveways',
                'Surveying & engineering',
                'New construction from the ground up',
            ],
            image: '/image/1-800x600-1-1-768x576.webp',
        },
        timeline: {
            eyebrow: 'Timeline & Budget',
            heading: 'Timeline and Budget to Build on a Lot in NJ',
            body: 'When we begin a project, we build on your lot with a clear timeline and budget in mind â€” and we stick to it. We treat every home we build as if it were our own, keeping you informed at every step so there are no surprises along the way.',
            bulletsTitle: 'Contact Captivating Construction About Your New Home',
            image: '/image/gellory/24-West-4.webp',
            ctaLabel: null,
        },
        contactForm: true,
    },
    'nj-kitchen-renovations': {
        title: 'Kitchen Built-Outs & Renovations',
        metaDescription:
            'Custom kitchen renovations and built-outs in New Jersey â€” luxury design, full-service project management, and expert craftsmanship from Captivating Construction Group.',
        heroSubtitle:
            "The kitchen is the heart of the home, and we're here to help you captivate your dream kitchen in NJ. Captivating Construction Group brings decades of craftsmanship, design expertise, and a passion for perfection to every kitchen we remodel.",
        heroImage: '/image/home-hero-bg.webp',
        intro: {
            heading: 'Why Choose Captivating Construction Group for Kitchen Renovation in NJ',
            body: "Captivating Construction Group combines luxury design, expert project management, and unmatched attention to detail to ensure your renovation is both stunning and stress-free. From concept to completion, our full-service approach guarantees exceptional quality and clear communication every step of the way.",
            image: '/image/gellory/36-HH-4.webp',
            ctaLabel: null,
        },
        servicesGrid: {
            heading: 'Our Kitchen Remodeling Services',
            items: [
                {
                    title: 'Custom Kitchen Design & Planning',
                    body: 'Every great renovation starts with a vision. Our design specialists collaborate closely with you to develop a layout that maximizes space, reflects your lifestyle, and enhances the heart of your home.',
                },
                {
                    title: 'Full-Service Renovation Management',
                    body: "We handle every detail, from permits to scheduling and site supervision, so your renovation runs smoothly and efficiently. You'll always know the next step and can count on clear communication from start to finish.",
                },
                {
                    title: 'Quality Materials & Craftsmanship',
                    body: 'We pride ourselves on meticulous craftsmanship and a commitment to premium materials â€” from cabinetry and countertops to flooring and fixtures, chosen for durability, function, and lasting design appeal.',
                },
                {
                    title: 'Modern Upgrades & Energy-Efficient Solutions',
                    body: "Our team stays up to date with the latest design trends and smart-home technology. Whether you want efficient lighting, modern appliances, or sustainable materials, we'll help you build a kitchen that's as smart as it is elegant.",
                },
            ],
        },
        steps: {
            heading: 'What to Expect During Your Kitchen Renovation in NJ',
            items: [
                { step: 'Step 1', title: 'Consultation & Design', body: 'We discuss your goals, preferences, and vision to create a personalized design plan.' },
                { step: 'Step 2', title: 'Permits & Planning', body: 'Our team handles all necessary permits, scheduling, and preparation to ensure a smooth start.' },
                { step: 'Step 3', title: 'Construction & Project Management', body: 'Skilled builders manage every phase of construction, keeping your project on time and on budget.' },
                { step: 'Step 4', title: 'Final Walkthrough & Move-In', body: 'We inspect every detail carefully, ensuring quality and satisfaction before you enjoy your new kitchen.' },
            ],
        },
        benefits: {
            heading: 'Benefits of Working with a Trusted Kitchen Contractor in NJ',
            body: 'Choosing Captivating Construction means peace of mind. As a trusted kitchen contractor in NJ, we deliver a flawless renovation experience built on transparency, reliability, and superior craftsmanship.',
            bullets: [
                'Personalized guidance',
                'Comprehensive project management',
                'Transparent communication',
                'Long-term value',
                'On-time & on-budget delivery',
                'Premium materials & craftsmanship',
            ],
            image: '/image/gellory/38-FH-4.webp',
        },
        contactForm: true,
        faqsHeading: 'Frequently Asked Questions About Kitchen Remodeling in New Jersey',
        faqs: [
            { q: 'How long does a kitchen remodel typically take?', a: 'Most kitchen renovations in New Jersey take between 6 and 10 weeks, depending on size and complexity. During your consultation we provide a realistic timeline tailored to your specific project.' },
            { q: 'Can I customize my kitchen layout and design?', a: 'Absolutely. Every kitchen we build is fully customized to your space, style, and how you use it. Our design team works closely with you to create a layout that fits your life.' },
            { q: 'What is the average cost of a kitchen renovation in NJ?', a: 'Costs vary based on size, materials, and scope. We provide detailed, transparent estimates up front so you know exactly where your investment goes â€” with no surprises.' },
            { q: 'Do you provide warranties on your kitchen remodeling projects?', a: 'Yes. We stand behind our work with a workmanship warranty and pass along the manufacturer warranties on the materials and appliances we install.' },
        ],
    },
    'luxury-home-builder-nj': {
        title: 'Luxury Home Builder In NJ | Captivating Construction Group',
        metaDescription:
            'Luxury home builder in New Jersey with 30+ years of experience. Captivating Construction Group designs and builds bespoke, high-end custom homes across NJ.',
        heroSubtitle:
            'Looking to build a luxury home from scratch in New Jersey and want to make sure you end up with your dream home when all is said and done? The Captivating Construction Group is an experienced team of luxury home builders that specialize in new home construction in NJ.',
        heroImage: '/image/property-20.webp',
        sections: [
            {
                type: 'feature',
                heading: 'Trusted Luxury Home Builder in New Jersey',
                body: "When it comes to luxury home builders in New Jersey, you want someone you can trust â€” with the experience and the ability to make your vision a reality. Captivating Construction has over 30 years of expertise delivering the very highest-quality luxury home building. Every design reflects your unique lifestyle, whether you're after a serene coastal retreat, a modern family residence, or an estate with timeless architecture.",
                image: '/image/property-13.webp',
                ctaLabel: null,
            },
            {
                type: 'servicesShowcase',
                heading: 'Luxury Home Builder Services',
                body: "Whether you're envisioning a primary residence, vacation retreat, or coastal getaway, Captivating Construction has the skill and insight to bring your dream to life. Our team takes the time to understand your unique needs, lifestyle, and preferences â€” ensuring every detail comes together beautifully.",
                image: '/image/home-hero-bg.webp',
                items: [
                    { title: 'Custom Luxury Home Design & New Home Construction', body: 'From foundation to finish, our design-and-build custom luxury homes are crafted entirely around your vision.' },
                    { title: 'Full-Service Residential Construction', body: 'As a trusted NJ builder, we manage your luxury home project with expertise and transparency from start to finish.' },
                    { title: 'Roofing, Siding & Custom Stonework', body: 'Premium materials and expert craftsmanship create exteriors with lasting beauty, strength, and durability.' },
                    { title: 'Luxury Flooring, Tiling & Finishes', body: 'Custom high-end flooring, detailed tilework, and refined finishes that deliver timeless elegance.' },
                    { title: 'Open-Concept Floor Plans & Architectural Windows', body: 'Enhance light and space with open layouts and windows that blend form and function beautifully.' },
                    { title: 'Custom Kitchens & Built-In Features', body: 'Chef-inspired kitchens with premium cabinetry, custom islands, and seamless built-in features.' },
                    { title: 'Elegant Decks, Patios & Outdoor Living Spaces', body: 'Extend your living space outdoors with elegant decks, patios, and entertaining areas built for comfort.' },
                    { title: 'Home Bars, Personalized Additions & Finished Basements', body: 'From home bars to finished basements, we design spaces that elevate comfort and add lasting value.' },
                ],
            },
            {
                type: 'feature',
                heading: 'Why Choose Captivating Construction for Your Luxury Home in NJ',
                body: 'We are a team of experts in home interior and exterior construction, dedicated to transforming your living spaces into beautiful, functional, and comfortable areas. Every home deserves to be a sanctuary where you can relax and unwind.',
                bullets: [
                    'Over 30 years of experience in home building',
                    'A high-end residential construction company you can trust',
                    'Attention to detail & personalized construction',
                    'Careful management of timelines and budgets',
                ],
                image: '/image/gellory/DJI_20240830142704_0747_D.webp',
                ctaLabel: 'Contact Now',
            },
            {
                type: 'steps',
                heading: 'Our Luxury Home Building Process',
                items: [
                    { step: 'Step 1', title: 'Initial Consultation & Design Planning', body: 'We begin with a detailed consultation to understand your goals, style, and vision.' },
                    { step: 'Step 2', title: 'Budget & Timeline Development', body: 'We provide a transparent estimate and realistic schedule, aligning your expectations with project milestones.' },
                    { step: 'Step 3', title: 'Construction Management & Quality Oversight', body: 'Your project is overseen by experienced builders who coordinate every detail to maintain quality standards.' },
                    { step: 'Step 4', title: 'Final Walkthrough & Delivery of Your Dream Home', body: 'We finish with a full walkthrough to ensure every element meets your expectations.' },
                ],
            },
            {
                type: 'feature',
                reverse: true,
                heading: 'Captivating Construction: A New Jersey Luxury Home Builder',
                body: 'Your dream home begins with the right team. Our luxury homes can be found throughout New Jersey. Contact us today to discuss your project and make your dream a reality.',
                image: '/image/gellory/36-HH-4.webp',
                ctaLabel: null,
            },
            { type: 'contactForm' },
            {
                type: 'faqs',
                heading: 'Frequently Asked Questions About Luxury Home Building in NJ',
                faqs: [
                    { q: 'What does a luxury home builder do in New Jersey?', a: 'A luxury home builder manages the design and construction of high-end custom homes, coordinating every detail from architecture and materials to finishes and project management.' },
                    { q: 'How much does it cost to build a custom luxury home in NJ?', a: 'Costs vary widely based on size, location, materials, and finishes. We provide detailed, transparent estimates up front so you know exactly what to expect.' },
                    { q: 'How long does a high-end residential construction project take?', a: 'Most luxury home builds take 10 to 18 months depending on size and complexity. We provide a realistic timeline during planning and keep you updated throughout.' },
                    { q: 'Can I customize every aspect of my luxury home?', a: 'Absolutely. Every home we build is fully custom â€” from floor plans and finishes to smart-home features â€” designed entirely around your vision and lifestyle.' },
                    { q: 'Why should I hire a local NJ luxury home builder?', a: "A local builder understands New Jersey's zoning, permitting, and building requirements, and is nearby to manage your project closely from start to finish." },
                ],
            },
        ],
    },
    'full-home-remodel-new-construction-nj': {
        title: 'New Construction In NJ',
        metaDescription:
            'New home construction in New Jersey. Captivating Construction Group builds custom homes from the ground up â€” design, permits, and construction managed end to end.',
        heroSubtitle:
            "Looking to build a home from scratch in New Jersey and want to make sure you end up with your dream home when all is said and done? The Captivating Construction Group is an experienced team of luxury home builders that specialize in new home construction in NJ.",
        heroImage: '/image/worker-site.webp',
        sections: [
            {
                type: 'feature',
                heading: 'New Jersey New Home Construction Services',
                body: "When it comes to new home construction in New Jersey, no project is too big for Captivating Construction to tackle. Whether you're building a primary residence or a vacation home, we'll work with you every step of the way â€” on every aspect of the project, including:",
                bullets: [
                    'Custom home design & planning',
                    'Roofing & siding',
                    'Custom stonework',
                    'Custom flooring & tiling',
                    'Open floor plans',
                    'Environmental services',
                    'Site preparation & grading',
                    'Tree protection',
                ],
                image: '/image/home-hero-bg.webp',
                ctaLabel: null,
            },
            {
                type: 'servicesGrid',
                heading: 'Our New Home Construction Services',
                body: 'At Captivating Construction, every build is guided by a commitment to precision, collaboration, and design excellence. From your first consultation to the moment you step inside your finished home, our team handles each detail with care â€” ensuring your vision is brought to life exactly as you imagined.',
                items: [
                    { title: 'Custom Home Design & Planning', body: 'Our in-house design and planning process begins with your ideas. We listen closely to your lifestyle goals and aesthetic preferences to create a blueprint that balances functionality and beauty â€” from layout optimization to architectural detail, made with your comfort and vision in mind.' },
                    { title: 'Full-Service Construction Management', body: 'From permits to final walkthrough, our construction management team oversees every phase of your build. We coordinate directly with trusted sub-contractors, suppliers, and inspectors to keep your project on schedule and on budget, ensuring a smooth experience from start to finish.' },
                    { title: 'Energy-Efficient & Modern Homes', body: 'Our team incorporates modern building practices to ensure homes that are as efficient as they are beautiful. From high-performance insulation and windows to sustainable materials and smart-home technology, we help you enjoy lasting comfort and lower energy costs year-round.' },
                    { title: 'Quality Craftsmanship & Materials', body: "We believe your home should stand the test of time. That's why we use only premium materials and proven building techniques for every project. Our meticulous attention to detail means every space is built to be durable, refined, and held to the highest standards." },
                ],
            },
            {
                type: 'feature',
                heading: 'Why Choose Us for New Home Construction in NJ',
                body: 'Choosing us means working with a team that understands what it takes to build a home that feels truly yours. From day one, we focus on clear communication, dependable timelines, and lasting quality â€” so building your dream home is exciting, not stressful.',
                image: '/image/gellory/15-Blackbriar-1.webp',
                ctaLabel: null,
            },
            {
                type: 'feature',
                reverse: true,
                heading: 'Timeline and Budget for New Home Construction in NJ',
                body: 'When we begin a new home construction project, we do so with a clear timeline and budget in mind â€” and we stick to them. The timeline and budget are laid out for you upfront, before construction begins, so there are no surprises along the way, and our meticulous attention to detail means the timeline is followed as closely as possible.',
                image: '/image/gellory/4-Shady-oak-4.webp',
                ctaLabel: null,
            },
            {
                type: 'steps',
                heading: 'Our New Home Construction Process',
                items: [
                    { step: 'Step 1', title: 'Consultation & Design', body: 'We discuss your goals, preferences, and vision to create a personalized design plan.' },
                    { step: 'Step 2', title: 'Permits & Planning', body: 'Our team handles all necessary permits, scheduling, and preparation to ensure a smooth start.' },
                    { step: 'Step 3', title: 'Construction & Project Management', body: 'Skilled builders manage every phase of construction, keeping your project on time and on budget.' },
                    { step: 'Step 4', title: 'Final Walkthrough & Move-In', body: 'We inspect every detail carefully, ensuring quality and satisfaction before you move into your new home.' },
                ],
            },
            {
                type: 'feature',
                heading: 'Contact Captivating Construction About Your New Home',
                body: 'Your dream home begins with the right team. Our custom homes can be found throughout New Jersey. Contact us today to discuss your project and make your dream a reality.',
                image: '/image/gellory/38-FH-4.webp',
                ctaLabel: null,
            },
            { type: 'contactForm' },
            {
                type: 'faqs',
                heading: 'Frequently Asked Questions About New Home Construction in NJ',
                faqs: [
                    { q: 'How long does it take to build a new home in NJ?', a: 'The timeline varies depending on the size, design complexity, and permitting process. On average, new custom homes in New Jersey take between eight months and one year to complete â€” ensuring every phase, from foundation to finishing touches, is completed with accuracy and care.' },
                    { q: 'Can you customize every part of the home?', a: "Yes. Every home we build is fully custom, designed entirely around your needs, style, and how you live. From floor plans to finishes, you're involved in every decision." },
                    { q: 'What is the average cost of new home construction in NJ?', a: 'Costs vary widely based on size, location, materials, and finishes. We provide detailed, transparent estimates up front so you know exactly what to expect.' },
                    { q: 'Do you provide warranties on your new home?', a: 'Yes. We stand behind our work with a workmanship warranty and pass along the manufacturer warranties on the materials and systems we install.' },
                ],
            },
        ],
    },
    'basement-services-nj': {
        title: 'Basement Renovations Near Me | Captivating Construction, NJ',
        metaDescription:
            'Basement renovations in New Jersey â€” family rooms, home theaters, guest suites, custom bars, and finished living space. Captivating Construction finishes basements the right way.',
        heroSubtitle:
            'At Captivating Construction, we turn unfinished basements into functional and stylish living space that will delight both family and friends alike.',
        heroImage: '/image/gellory/18-Am-4.webp',
        heroButtonLabel: 'Free Consultation',
        sections: [
            {
                type: 'feature',
                heading: 'Transform Your Basement With Expert Renovation Services',
                body: 'Your basement is one of the most underused areas of your home â€” and one of the most full of potential. Our team handles everything from design to remodel, turning cold, unused square footage into a warm, welcoming space you and your family will love.',
                bullets: [
                    'Full basement design & remodels',
                    'Kitchens & wet bars',
                    'Renovations & additions',
                    'Home theaters',
                    'Basement finishing services',
                    'Custom bars & built-ins',
                ],
                image: '/image/gellory/38-FH-4.webp',
                ctaLabel: null,
            },
            {
                type: 'iconCards',
                heading: 'Our Basement Renovation Services',
                columns: 3,
                items: [
                    { icon: 'LuLayoutGrid', title: 'Full Basement Design & Remodels', body: 'Transform your unfinished basement into a functional, beautifully designed living space tailored to your needs.' },
                    { icon: 'LuLayers', title: 'Basement Finishing & Additions', body: 'From framing to lighting, our complete basement finishes and additions turn cold, unused space into comfort and value.' },
                    { icon: 'LuFilm', title: 'Custom Home Theaters & Entertainment Rooms', body: 'Design the ultimate home theater or entertainment space for movie nights, gaming, and entertaining guests.' },
                    { icon: 'LuUtensils', title: 'Kitchens, Bars & Built-Ins', body: 'Add convenience and character with a custom kitchenette, wet bar, or built-in storage and seating.' },
                    { icon: 'LuArchive', title: 'Storage Solutions & Functional Spaces', body: 'Incorporate smart shelving, closets, and organization systems that combine style with everyday practicality.' },
                ],
            },
            {
                type: 'feature',
                heading: 'Why Choose Captivating Construction for Your Basement Renovation in NJ',
                body: 'We are a team of experts in home interior and exterior renovations, dedicated to transforming your living space into a beautiful, functional, and comfortable area. Every home deserves a basement that works as hard as the rest of it.',
                bullets: [
                    'Over 30 years of experience in basement renovations',
                    'Skilled team & trusted subcontractors',
                    'Local expertise in NJ building codes and permits',
                    'Personalized design to fit your style & needs',
                ],
                image: '/image/home-hero-bg.webp',
                ctaLabel: 'Contact Now',
            },
            {
                type: 'iconCards',
                heading: 'Our Basement Renovation Process',
                columns: 4,
                items: [
                    { icon: 'LuHouse', title: 'Free In-Home Consultation for Your Basement Renovation', body: 'We begin with an in-home consultation to discuss your ideas, assess your space, and offer expert recommendations.' },
                    { icon: 'LuClipboardList', title: 'Detailed Construction & Design Estimate', body: 'After your consultation, we provide a transparent, itemized estimate outlining the full scope of your project.' },
                    { icon: 'LuRuler', title: 'Preliminary Layout & Visualization', body: "With a clear layout and visualization, you'll see exactly how your finished basement will look and function before construction begins." },
                    { icon: 'LuFileCheck', title: 'Permits & Approvals for Basement Renovation', body: 'We manage all necessary documentation and permits so your basement renovation meets code and local requirements.' },
                    { icon: 'LuHammer', title: 'Construction & Build-Out', body: 'Our skilled team brings your vision to life with careful attention to detail, coordination, and open communication.' },
                    { icon: 'LuCheckCheck', title: 'Final Inspections & Walkthroughs', body: 'Before completion, we schedule inspections and detailed walkthroughs with you to ensure everything meets expectations.' },
                    { icon: 'LuSparkles', title: 'Completion & Optional Interior Design Refresh', body: 'Once complete, we can connect you with trusted interior designers to elevate your new space even further.' },
                ],
            },
            {
                type: 'banner',
                heading: 'Built on Experience, Driven by Excellence',
                body: "For the best finishes that will truly captivate your family and friends, rely on experience. Our team has years of expertise fulfilling clients' dreams down to the finest detail. We'll guide you through the process with ease â€” whether you want to update a single room or transform your entire home.",
                buttonLabel: 'Free Consultation',
                buttonHref: '/contact',
                image: '/image/gellory/36-HH-4.webp',
            },
            { type: 'reviews' },
            { type: 'contactForm' },
            {
                type: 'faqs',
                heading: 'Frequently Asked Questions About Basement Renovations in NJ',
                faqs: [
                    { q: 'How much does a basement renovation cost in New Jersey?', a: 'Costs vary based on the size of your basement, the finishes you choose, and features like bathrooms or wet bars. We provide detailed, transparent estimates up front so you know exactly what to expect.' },
                    { q: 'How long does the renovation take?', a: 'Most basement renovations take between four and eight weeks depending on size and complexity. We provide a realistic timeline during planning and keep you updated throughout.' },
                    { q: 'Can I add a kitchen, bathroom, or entertainment area to my basement?', a: 'Absolutely. We regularly add kitchenettes, wet bars, full bathrooms, home theaters, and more. If you can imagine it, we can build it.' },
                    { q: 'Do you handle all permits and inspections for basement renovations in NJ?', a: 'Yes. As a licensed contractor, we handle all necessary permits and coordinate inspections so your finished basement is fully code-compliant.' },
                    { q: 'How do I choose the right design for my renovation?', a: "Our design team works closely with you to understand how you'll use the space, then creates a layout and finish plan tailored to your style, needs, and budget." },
                ],
            },
        ],
    },
    additions: {
        title: 'Home Additions in NJ',
        metaDescription:
            'Home additions in New Jersey â€” room additions, in-law and primary suites, sunrooms, and second-story additions that blend seamlessly with your home.',
        heroSubtitle:
            'More space, more comfort, more value â€” designed to blend seamlessly with your existing home.',
        heroImage: '/image/gellory/178-Dart-scaled.webp',
        blocks: [
            {
                eyebrow: 'Home Additions',
                heading: 'Room to Grow',
                body: 'When you love your home but need more space, an addition is the perfect solution. We design and build additions that feel like they were always part of the house â€” adding comfort today and value for years to come.',
                bulletsTitle: 'Popular Additions:',
                bullets: ['Room additions', 'In-law & primary suites', 'Sunrooms', 'Second-story additions'],
                image: '/image/gellory/4-Shady-oak-4.webp',
            },
            {
                heading: 'Built to Match',
                body: 'Our additions integrate seamlessly with your existing rooflines, materials, and layout â€” so the finished result looks intentional and cohesive, never tacked on.',
                image: '/image/gellory/24-West-4.webp',
            },
        ],
    },
};

function FeatureSection({ block, reverse = false, bg = 'white' }) {
    return (
        <section className={bg === 'gray' ? 'bg-[#f3f4f6]' : 'bg-white'}>
            <div className="mx-auto max-w-[1200px] px-4 py-14 lg:py-20">
                <FeatureBlock {...block} reverse={reverse} />
            </div>
        </section>
    );
}

function ServicesListSection({ eyebrow, heading, body, bullets = [], image, imageAlt = 'Captivating Construction project' }) {
    return (
        <section className="bg-[#f3f4f6]">
            <div className="mx-auto max-w-[1200px] px-4 py-14 lg:py-20">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    <div>
                        {eyebrow && (
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">{eyebrow}</p>
                        )}
                        <h2 className="mt-3 font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                            {heading}
                        </h2>
                        {body && <p className="mt-5 font-body text-base leading-relaxed text-gray-600">{body}</p>}
                        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {bullets.map((b) => (
                                <li key={b} className="flex items-start gap-2.5 font-body text-sm text-gray-700">
                                    <IoCheckmarkCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-blue-light" />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <img
                            src={image}
                            alt={imageAlt}
                            loading="lazy"
                            className="aspect-[4/3] w-full rounded-xl object-cover shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServicesGrid({ heading, body, items = [] }) {
    return (
        <section className="bg-white py-14 lg:py-20">
            <div className="mx-auto max-w-[1200px] px-4">
                <h2 className="text-center font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                    {heading}
                </h2>
                {body && (
                    <p className="mx-auto mt-4 max-w-3xl text-center font-body text-base leading-relaxed text-gray-600">
                        {body}
                    </p>
                )}
                <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
                    {items.map((item) => (
                        <div key={item.title}>
                            <h3 className="font-montserrat text-lg font-bold text-brand-blue-light">{item.title}</h3>
                            <p className="mt-2 font-body text-sm leading-relaxed text-gray-600">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StepsSection({ heading, items = [] }) {
    return (
        <section className="bg-[#f3f4f6] py-14 lg:py-20">
            <div className="mx-auto max-w-[1200px] px-4">
                <h2 className="text-center font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                    {heading}
                </h2>
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((item, i) => (
                        <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue-light font-body text-sm font-bold text-white">
                                {i + 1}
                            </div>
                            <p className="mt-4 text-xs font-bold uppercase tracking-wide text-brand-orange">{item.step}</p>
                            <h3 className="mt-1 font-montserrat text-lg font-bold leading-tight text-[#0A2A4A]">{item.title}</h3>
                            <p className="mt-2 font-body text-sm leading-relaxed text-gray-600">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function BenefitsSection({ heading, body, bullets = [], image, imageAlt = 'Captivating Construction project' }) {
    return (
        <section className="bg-white py-14 lg:py-20">
            <div className="mx-auto max-w-[1200px] px-4">
                <div className="overflow-hidden rounded-2xl bg-brand-blue px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                        <div>
                            <h2 className="font-montserrat text-2xl font-semibold leading-tight text-white md:text-3xl">
                                {heading}
                            </h2>
                            {body && (
                                <p className="mt-4 font-body text-sm leading-relaxed text-white/85 md:text-base">{body}</p>
                            )}
                            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {bullets.map((b) => (
                                    <li key={b} className="flex items-start gap-2.5 font-body text-sm text-white/90">
                                        <IoCheckmarkCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#40AAFF]" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <img
                                src={image}
                                alt={imageAlt}
                                loading="lazy"
                                className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServicesShowcaseSection({ heading, body, image, items = [], imageAlt = 'Captivating Construction project' }) {
    return (
        <section className="bg-white py-14 lg:py-20">
            <div className="mx-auto max-w-[1200px] px-4">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div>
                        <h2 className="font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                            {heading}
                        </h2>
                        {body && <p className="mt-4 font-body text-base leading-relaxed text-gray-600">{body}</p>}
                    </div>
                    {image && (
                        <div>
                            <img
                                src={image}
                                alt={imageAlt}
                                loading="lazy"
                                className="aspect-[16/10] w-full rounded-xl object-cover shadow-md"
                            />
                        </div>
                    )}
                </div>
                {items.length > 0 && (
                    <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                        {items.map((item) => (
                            <div key={item.title}>
                                <h3 className="font-montserrat text-base font-bold text-brand-blue-light">{item.title}</h3>
                                <p className="mt-2 font-body text-sm leading-relaxed text-gray-600">{item.body}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

function IconCards({ heading, body, items = [], columns = 3, bg = 'gray' }) {
    const colClass = columns === 4 ? 'lg:grid-cols-4' : columns === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3';
    return (
        <section className={bg === 'white' ? 'bg-white py-14 lg:py-20' : 'bg-[#f3f4f6] py-14 lg:py-20'}>
            <div className="mx-auto max-w-[1200px] px-4">
                <h2 className="text-center font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                    {heading}
                </h2>
                {body && (
                    <p className="mx-auto mt-4 max-w-3xl text-center font-body text-base leading-relaxed text-gray-600">
                        {body}
                    </p>
                )}
                <div className={`mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 ${colClass}`}>
                    {items.map((item) => {
                        const Icon = ICONS[item.icon];
                        return (
                            <div key={item.title} className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-light text-white">
                                    {Icon && <Icon className="h-6 w-6" />}
                                </div>
                                <h3 className="mt-4 font-montserrat text-base font-bold leading-tight text-[#0A2A4A]">{item.title}</h3>
                                <p className="mt-2 font-body text-sm leading-relaxed text-gray-600">{item.body}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function BannerSection({ heading, body, buttonLabel = 'Free Consultation', buttonHref = '/contact', image }) {
    return (
        <section className="relative overflow-hidden bg-[#0A2A4A]">
            {image && (
                <>
                    <div aria-hidden="true" className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
                    <div aria-hidden="true" className="absolute inset-0 bg-black/75" />
                </>
            )}
            <div className="relative mx-auto max-w-4xl px-4 py-16 text-center lg:py-20">
                <h2 className="font-montserrat text-2xl font-semibold text-white md:text-3xl">{heading}</h2>
                {body && <p className="mx-auto mt-4 max-w-2xl font-body text-sm leading-relaxed text-white/80">{body}</p>}
                <div className="mt-8 flex justify-center">
                    <PillButton href={buttonHref} variant="blue" size="md">{buttonLabel}</PillButton>
                </div>
            </div>
        </section>
    );
}

// Renders one section of a service page from its `type`.
function renderSection(section, i) {
    switch (section.type) {
        case 'feature':
            return <FeatureSection key={i} block={section} reverse={!!section.reverse} bg={section.bg || 'white'} />;
        case 'servicesShowcase':
            return <ServicesShowcaseSection key={i} {...section} />;
        case 'servicesGrid':
            return <ServicesGrid key={i} {...section} />;
        case 'steps':
            return <StepsSection key={i} {...section} />;
        case 'benefits':
            return <BenefitsSection key={i} {...section} />;
        case 'servicesList':
            return <ServicesListSection key={i} {...section} />;
        case 'contactForm':
            return <ContactForm key={i} />;
        case 'iconCards':
            return <IconCards key={i} {...section} />;
        case 'banner':
            return <BannerSection key={i} {...section} />;
        case 'reviews':
            return <ClientReviews key={i} />;
        case 'faqs':
            return <FaqAccordion key={i} heading={section.heading} faqs={section.faqs} />;
        case 'cta':
            return <CtaSection key={i} />;
        default:
            return null;
    }
}

export default function ServiceDetail({ slug, reviews = [], seo = {} }) {
    const service = SERVICES[slug];

    if (!service) {
        return null;
    }

    return (
        <SiteLayout reviews={reviews}>
            <Seo
                seo={seo}
                fallbackTitle={`${service.title} | Captivating Construction Group`}
                fallbackDescription={service.metaDescription}
            />

            {/* Hero */}
            <section className="relative bg-[#0A2A4A]">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${service.heroImage}')` }}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
                <div className="relative mx-auto max-w-[1200px] px-4 py-20 text-center lg:py-28">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange">
                        Our Services
                    </p>
                    <h1 className="mx-auto mt-3 max-w-4xl font-montserrat text-4xl font-bold text-white sm:text-5xl">
                        {service.title}
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl font-body text-sm leading-relaxed text-white/85 md:text-base">
                        {service.heroSubtitle}
                    </p>
                    <div className="mt-8 flex justify-center">
                        <PillButton href="/contact" variant="blue" size="md">
                            {service.heroButtonLabel || 'Schedule A Consultation'}
                        </PillButton>
                    </div>
                </div>
            </section>

            {/* Ordered sections (fully flexible per-page layout) */}
            {service.sections && service.sections.map(renderSection)}

            {/* Intro block (image left) */}
            {service.intro && <FeatureSection block={service.intro} />}

            {/* Services grid (title + description cards) */}
            {service.servicesGrid && <ServicesGrid {...service.servicesGrid} />}

            {/* Process steps */}
            {service.steps && <StepsSection {...service.steps} />}

            {/* Services list (bullets + image) */}
            {service.servicesList && <ServicesListSection {...service.servicesList} />}

            {/* Benefits (blue panel with bullets + image) */}
            {service.benefits && <BenefitsSection {...service.benefits} />}

            {/* Timeline block (image left) */}
            {service.timeline && <FeatureSection block={service.timeline} />}

            {/* Generic alternating blocks (other services) */}
            {service.blocks?.map((block, i) => (
                <FeatureSection
                    key={block.heading}
                    block={block}
                    reverse={i % 2 === 1}
                    bg={i % 2 === 1 ? 'gray' : 'white'}
                />
            ))}

            {service.contactForm && <ContactForm />}

            {service.faqs && (
                <FaqAccordion heading={service.faqsHeading || 'Frequently Asked Questions'} faqs={service.faqs} />
            )}

            <CtaSection />
        </SiteLayout>
    );
}

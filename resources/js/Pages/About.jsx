import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import ServiceSchema from '@/Components/FrontComponents/ServiceSchema';
import FeatureBlock from '@/Components/FrontComponents/FeatureBlock';
import ClientReviews from '@/Components/FrontComponents/ClientReviews';
import CtaSection from '@/Components/pages-sections/CtaSection';
import { PillButton } from '@/Components/FrontComponents/PillButton';
import { IoCheckmarkCircle } from 'react-icons/io5';
import {
    LuHandshake,
    LuClipboardList,
    LuPencilRuler,
    LuClipboardPen,
    LuHardHat,
    LuClipboardCheck,
} from 'react-icons/lu';

const HERO_BG = '/image/new-construction.webp';

const VALUES = [
    {
        title: 'Quality craftsmanship',
        body: 'We focus on the finest materials, workmanship, and finishes â€” built to last, never rushed.',
    },
    {
        title: 'Professional responsibility',
        body: 'We stand behind every commitment and every project, ensuring the job is done right the first time.',
    },
    {
        title: 'Clear communication',
        body: 'We keep you informed and involved at every stage, from first concept through final walkthrough.',
    },
    {
        title: 'Respect',
        body: 'We treat your home, your budget, and your timeline with the care and respect they deserve.',
    },
    {
        title: 'Custom experience',
        body: 'Every project is tailored to your unique vision and needs, from start to finish.',
    },
];

const PROCESS = [
    {
        icon: LuHandshake,
        title: 'Consultation & Discovery',
        body: 'We start by learning about your goals, budget, timeline, and project expectations. This is where alignment begins.',
    },
    {
        icon: LuClipboardList,
        title: 'Planning & Scope',
        body: 'We define the full project scope, outline responsibilities, establish milestones, and clearly document what is included.',
    },
    {
        icon: LuPencilRuler,
        title: 'Design Support',
        body: 'When design guidance or visualization is needed, we help you at every step and refine the direction before construction begins.',
    },
    {
        icon: LuClipboardPen,
        title: 'Permits & Inspections',
        body: 'We manage required permits and coordinate inspections to keep your project compliant and progressing smoothly.',
    },
    {
        icon: LuHardHat,
        title: 'Build Phase & Communication',
        body: 'We coordinate schedules, crews, and materials while keeping you informed through consistent communication on-site.',
    },
    {
        icon: LuClipboardCheck,
        title: 'Final Walkthrough',
        body: 'We review the completed work together, address final details, and ensure everything meets the agreed scope and standards.',
    },
];

const WHAT_WE_DO = [
    'Custom Home Building & New Construction',
    'Luxury Home Building',
    'Home Additions',
    'Full Home Remodels',
    'Kitchen & Bathroom Renovations',
    'Custom Built-Ins & Millwork',
    'Basement Finishing',
    'Exterior Renovations',
];

const WHY_US = [
    'A one-on-one, dedicated approach to your project',
    'A clear, transparent, and honest partnership',
    'Professional service and respect for your home',
    'Transparent expectations around cost and timeline',
    'Strong project management from concept to completion',
];

function AboutHero() {
    return (
        <section className="relative bg-black">
            <div className="relative overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${HERO_BG}')` }}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-black/70" />

                <div className="relative mx-auto max-w-4xl px-4 py-12 text-center lg:py-16">
                    <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-brand-blue-light">
                        About Us
                    </p>
                    <h1 className="mt-3 font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-white">
                        Building Your Vision Into Reality
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl font-body text-[15px] leading-relaxed text-white/85 md:text-base">
                        At Captivating Construction, we bring your dream home to life with expert craftsmanship,
                        innovative solutions, and personalized service. From concept to completion, our team
                        delivers exceptional results that stand the test of time.
                    </p>
                    <div className="mt-8">
                        <PillButton href="/contact" variant="blue" size="md">
                            Get Your Free Consultation
                        </PillButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AboutCompany() {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-[1200px] px-4">
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
                    <div>
                        <h2 className="font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                            About <span className="text-brand-blue-light">Captivating Construction Group</span>
                        </h2>
                        <div className="mt-6 space-y-4 font-body text-[15px] leading-relaxed text-gray-600">
                            <p>
                                Captivating Construction Group is a full-service custom home builder based in
                                Colts Neck, New Jersey, serving homeowners throughout the state. We specialize in
                                custom home building and high-quality renovations designed to reflect how you
                                live in and enjoy your home.
                            </p>
                            <p>
                                With over 30 years of experience, our team brings together skilled craftsmanship,
                                thoughtful planning, and hands-on project management. Whether you&apos;re building
                                a new custom home, expanding the footprint of your home, or transforming an
                                outdated, underused space, we bring a concierge-like approach tailored to your
                                needs â€” with meticulous attention to detail and a constant drive for perfection.
                            </p>
                            <p>
                                Our promise is simple: deliver well-built homes and renovations through
                                transparent communication, realistic timelines, and a tireless effort to exceed
                                your expectations at every turn.
                            </p>
                        </div>
                        <div className="mt-8">
                            <PillButton href="/contact" variant="blue" size="md">
                                Get A Free Consultation
                            </PillButton>
                        </div>
                    </div>

                    <div>
                        <img
                            src="/image/about-company.webp"
                            alt="Captivating Construction Group custom home interior"
                            loading="lazy"
                            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function MissionValues() {
    return (
        <section className="bg-[#f3f4f6] py-16 lg:py-24">
            <div className="mx-auto max-w-[1200px] px-4">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    <div>
                        <h2 className="font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                            Our Mission &amp; Values
                        </h2>
                        <p className="mt-5 font-body text-base leading-relaxed text-gray-600">
                            Our work is guided by clear principles that shape how we build and how we serve our clients.
                        </p>
                        <ul className="mt-6 space-y-4">
                            {VALUES.map((v) => (
                                <li key={v.title} className="flex items-start gap-3">
                                    <IoCheckmarkCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-blue-light" />
                                    <p className="font-body text-sm leading-relaxed text-gray-700">
                                        <span className="font-bold text-[#0A2A4A]">{v.title}:</span> {v.body}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <img
                            src="/image/mission-values.webp"
                            alt="Captivating Construction custom home exterior with fire pit"
                            loading="lazy"
                            className="w-full rounded-2xl object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function OurProcess() {
    return (
        <section className="bg-brand-blue-light py-16 lg:py-24">
            <div className="mx-auto max-w-[1200px] px-4">
                <div className="text-center">
                    <h2 className="font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-white">
                        Our Process
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl font-body text-base leading-relaxed text-white/85">
                        A well-defined process helps reduce uncertainty and keeps projects moving forward with confidence.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PROCESS.map(({ icon: Icon, title, body }) => (
                        <div key={title} className="rounded-xl bg-white p-6 text-center shadow-sm">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white">
                                <Icon className="h-7 w-7" />
                            </div>
                            <h3 className="mt-4 font-body text-lg font-bold text-brand-blue-light">{title}</h3>
                            <p className="mt-2 font-body text-sm leading-relaxed text-gray-600">{body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function AboutPage({ reviews = [], seo = {} }) {
    return (
        <SiteLayout reviews={reviews}>
            <Seo
                seo={seo}
                fallbackTitle="About Captivating Construction Group | NJ Custom Home Builder"
                fallbackDescription="Captivating Construction Group is a full-service New Jersey custom home builder with over 30 years of experience â€” new construction, renovations, additions, and remodeling built with luxury craftsmanship."
            />
            <ServiceSchema
                serviceName="About Captivating Construction Group"
                serviceType="Custom home builder and general contractor"
                description="A full-service New Jersey custom home builder based in Colts Neck â€” new construction, renovations, additions, and remodeling from concept to completion."
                path="/about"
            />

            <AboutHero />
            <AboutCompany />

            {/* What We Do â€” image left, service list right */}
            <section className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-[1200px] px-4">
                    <FeatureBlock
                        heading="What We Do"
                        body="We provide comprehensive construction and renovation services, tailored to homeowners who value craftsmanship, quality, and dependable execution. Our core services include:"
                        bullets={WHAT_WE_DO}
                        image="/image/what-we-do.webp"
                        imageAlt="Custom home interior built by Captivating Construction"
                        ctaLabel={null}
                        reverse={false}
                    />
                </div>
            </section>

            <MissionValues />
            <OurProcess />

            {/* Why Homeowners Choose Us â€” image left, checklist right */}
            <section className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-[1200px] px-4">
                    <FeatureBlock
                        eyebrow="Why Choose Us"
                        heading="Why Homeowners Choose Us"
                        body="Homeowners across New Jersey choose Captivating Construction Group for our dependable approach and consistent results. Our commitment is built on:"
                        bullets={WHY_US}
                        image="/image/why-choose-us.webp"
                        imageAlt="Custom home under construction by Captivating Construction"
                        ctaLabel="Schedule A Consultation"
                        reverse={false}
                    />
                </div>
            </section>

            <ClientReviews />
            <CtaSection />
        </SiteLayout>
    );
}

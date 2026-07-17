import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import ClientReviews from '@/Components/FrontComponents/ClientReviews';
import CtaSection from '@/Components/pages-sections/CtaSection';
import { PillButton } from '@/Components/FrontComponents/PillButton';
import { IoCheckmarkCircle } from 'react-icons/io5';

const HERO_BG = '/image/interiors.webp';

const TRUST = [
    {
        title: 'Experienced Professionals',
        body: 'Our team brings years of hands-on experience to every project, ensuring top-quality results that last.',
    },
    {
        title: 'On-Time, On-Budget Delivery',
        body: 'We believe in keeping our word. Your project is completed as promised â€” without unexpected delays or costs.',
    },
    {
        title: 'Personalized Approach',
        body: 'From the first consultation to the final walk-through, we listen, plan, and execute based on your vision.',
    },
    {
        title: 'Guaranteed Satisfaction',
        body: "Your happiness is our success. We're not done until you're completely satisfied with the finished result.",
    },
];

function TestimonialsHero() {
    return (
        <section className="relative bg-black">
            <div className="relative overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${HERO_BG}')` }}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-black/35" />

                <div className="relative mx-auto max-w-[1200px] px-4 py-20 lg:py-28">
                    <h1 className="font-montserrat text-[45px] font-bold leading-[54px] text-white">
                        Testimonials
                    </h1>
                </div>
            </div>
        </section>
    );
}

function WhyTrust() {
    return (
        <section className="bg-[#f3f4f6] py-16 lg:py-24">
            <div className="mx-auto max-w-[1200px] px-4">
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">
                            Trusted By Homeowners
                        </p>
                        <h2 className="mt-3 font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                            Why Homeowners Trust Captivating Construction
                        </h2>
                        <p className="mt-5 font-body text-base leading-relaxed text-gray-600">
                            Every project we complete is built on a foundation of trust, transparency, and
                            craftsmanship. We understand that your home or business is one of your biggest
                            investments â€” and that&apos;s why we treat every job with care and precision.
                        </p>

                        <ul className="mt-6 space-y-4">
                            {TRUST.map((item) => (
                                <li key={item.title} className="flex items-start gap-3">
                                    <IoCheckmarkCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-blue-light" />
                                    <p className="font-body text-sm leading-relaxed text-gray-700">
                                        <span className="font-bold text-[#0A2A4A]">{item.title}:</span> {item.body}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <PillButton href="/contact" variant="blue" size="md">
                                Contact Us Today
                            </PillButton>
                        </div>
                    </div>

                    <div>
                        <img
                            src="/image/why-choose-us.webp"
                            alt="Custom home built by Captivating Construction"
                            loading="lazy"
                            className="w-full rounded-2xl object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Testimonials({ reviews = [] }) {
    return (
        <SiteLayout reviews={reviews}>
            <Seo
                seo={{}}
                fallbackTitle="Testimonials | Captivating Construction Group â€” NJ Custom Home Builder"
                fallbackDescription="See what New Jersey homeowners say about Captivating Construction Group â€” real reviews on our custom home building, renovations, and additions."
            />

            <TestimonialsHero />
            <ClientReviews />
            <WhyTrust />
            <CtaSection />
        </SiteLayout>
    );
}

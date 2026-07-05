import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';
import ScheduleSection from '@/Components/FrontComponents/ScheduleSection';
import { PillButton } from '@/Components/FrontComponents/PillButton';
import { useScheduleModal } from '@/Components/FrontComponents/ScheduleModalProvider';
import {
    LuPercent,
    LuBadgeCheck,
    LuClock,
    LuHouse,
    LuWrench,
    LuShieldCheck,
    LuArrowRight,
    LuPhone,
} from 'react-icons/lu';

const offers = [
    {
        icon: LuPercent,
        badge: 'Limited Time',
        title: '$50 Off Any Repair',
        description:
            'Get $50 off any heating, cooling, or plumbing repair over $250. Mention this offer when you call or schedule online.',
        expires: 'Expires June 30, 2026',
        cta: 'Claim Offer',
    },
    {
        icon: LuBadgeCheck,
        badge: 'Most Popular',
        title: 'Free HVAC System Estimate',
        description:
            'Thinking about a new furnace or AC? We provide free, no-obligation estimates on all HVAC system replacements with upfront pricing.',
        expires: 'Ongoing',
        cta: 'Schedule Estimate',
    },
    {
        icon: LuHouse,
        badge: 'New Customers',
        title: '$100 Off First Service Call',
        description:
            'New to Guardian Air? Welcome to the family. Take $100 off your first service call — any trade, any time. No restrictions.',
        expires: 'Ongoing',
        cta: 'Redeem Now',
    },
    {
        icon: LuWrench,
        badge: 'Seasonal',
        title: 'Free Whole Home Generator Estimate',
        description:
            'Never lose power again. Get a free estimate for a whole-home standby generator tailored to your house and budget.',
        expires: 'Expires August 31, 2026',
        cta: 'Get Estimate',
    },
    {
        icon: LuShieldCheck,
        badge: 'Membership',
        title: 'Guardian Care Club — 20% Off',
        description:
            'Join our maintenance membership and save 20% on all repairs, priority scheduling, and two free tune-ups per year.',
        expires: 'Membership Renews Annually',
        cta: 'Learn More',
    },
    {
        icon: LuClock,
        badge: 'Emergency',
        title: 'No Emergency Fees — Ever',
        description:
            'We never charge extra for after-hours, weekend, or holiday emergency calls. Same fair rate, 24 hours a day, 365 days a year.',
        expires: 'Always',
        cta: 'Call Now',
    },
];

const howToRedeem = [
    {
        step: '01',
        title: 'Choose Your Offer',
        description: 'Browse our current promotions and pick the one that fits your needs.',
    },
    {
        step: '02',
        title: 'Call or Schedule Online',
        description: 'Mention the offer when you call or include it in your online request.',
    },
    {
        step: '03',
        title: 'Save on Service',
        description: 'Our technician applies the discount to your final invoice — no hassle.',
    },
];

export default function OffersPage({ reviews = [], seo = {} }) {
    const { open } = useScheduleModal();
    return (
        <SiteLayout reviews={reviews}>
            <Seo
                seo={seo}
                fallbackTitle="HVAC & Plumbing Specials & Coupons NJ | Guardian Air"
                fallbackDescription="HVAC coupons in NJ — current Guardian Air specials on heating, cooling & plumbing across Monmouth, Middlesex & Ocean counties. Licensed & insured. Save now!"
            />

            <article>
                <PageHeader
                    label="Save Big"
                    title="Current Specials & Offers"
                    description="HVAC coupons and plumbing specials for NJ homeowners — no gimmicks, no hidden conditions, just honest discounts from a local team that values your business."
                />

                {/* Offer Cards */}
                <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20 lg:py-28">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-orange/5 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl"
                    />

                    <div className="relative mx-auto max-w-7xl px-4">
                        <div className="mb-14 lg:mb-16">
                            <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">
                                Active Promotions
                            </p>
                            <span
                                aria-hidden="true"
                                className="mt-3 block h-0.5 w-10 rounded-full bg-brand-orange"
                            />
                            <h2 className="mt-4 max-w-2xl font-display text-[34px] uppercase leading-[0.95] text-[#07264A] md:text-[46px] lg:text-[54px]">
                                Deals You Can <span className="text-brand-orange">Use Today</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {offers.map((offer) => (
                                <div
                                    key={offer.title}
                                    className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-orange/40 hover:shadow-2xl"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white shadow-lg shadow-brand-orange/30 transition-transform duration-500 group-hover:scale-110">
                                            <offer.icon className="h-6 w-6" />
                                        </div>
                                        <span className="rounded-full bg-brand-orange/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-orange">
                                            {offer.badge}
                                        </span>
                                    </div>
                                    <h3 className="mt-5 font-display text-xl uppercase text-[#07264A]">
                                        {offer.title}
                                    </h3>
                                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-gray-600">
                                        {offer.description}
                                    </p>
                                    <p className="mt-4 text-[10px] font-extrabold uppercase tracking-widest text-gray-400">
                                        {offer.expires}
                                    </p>
                                    <PillButton href="/contact" aria-label={`${offer.cta} — ${offer.title}`} variant="outline" size="sm" className="mt-5 tracking-widest">
                                        {offer.cta}
                                        <LuArrowRight className="h-3.5 w-3.5" />
                                    </PillButton>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Redeem */}
                <section className="relative overflow-hidden bg-[#07264A] py-20 lg:py-28">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-orange/5 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl"
                    />

                    <div className="relative mx-auto max-w-7xl px-4">
                        <div className="mb-14 lg:mb-16">
                            <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">
                                Easy Savings
                            </p>
                            <span
                                aria-hidden="true"
                                className="mt-3 block h-0.5 w-10 rounded-full bg-brand-orange"
                            />
                            <h2 className="mt-4 max-w-2xl font-display text-[34px] uppercase leading-[0.95] text-white md:text-[46px] lg:text-[54px]">
                                How to <span className="text-brand-orange">Redeem</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {howToRedeem.map((item) => (
                                <div
                                    key={item.step}
                                    className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:border-brand-orange/40 hover:bg-white/10"
                                >
                                    <span className="font-display text-[64px] uppercase leading-none text-white/10 transition-colors duration-300 group-hover:text-brand-orange/20">
                                        {item.step}
                                    </span>
                                    <h3 className="-mt-4 font-display text-xl uppercase text-white">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 font-body text-sm leading-relaxed text-white/60">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <PillButton onClick={open} variant="orange" size="md">
                                <LuArrowRight className="h-4 w-4" />
                                Schedule Online
                            </PillButton>
                            <PillButton href="tel:+18482766300" variant="light" size="md" icon="phone">
                                Call (848) 276-6300
                            </PillButton>
                        </div>
                    </div>
                </section>
            </article>

            <ScheduleSection />

            <CtaBanner />
        </SiteLayout>
    );
}

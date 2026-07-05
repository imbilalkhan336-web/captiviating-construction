import { Link } from '@inertiajs/react';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import Breadcrumbs from '@/Components/FrontComponents/Breadcrumbs';
import SectionHeading from '@/Components/FrontComponents/SectionHeading';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';
import { PillButton } from '@/Components/FrontComponents/PillButton';
import { LuHeart, LuTrendingUp, LuShieldCheck, LuUsers, LuWrench, LuArrowRight } from 'react-icons/lu';

const PHONE = '(848) 276-6300';

const PERKS = [
    { icon: LuTrendingUp, title: 'Competitive Pay & Growth', body: 'Top-of-market pay, performance bonuses, and a clear path to advance your career.' },
    { icon: LuShieldCheck, title: 'Benefits & Stability', body: 'Health benefits, paid time off, and steady year-round work with a growing local company.' },
    { icon: LuWrench, title: 'Tools & Training', body: 'Company vehicle, stocked trucks, and ongoing training and certifications on us.' },
    { icon: LuUsers, title: 'A Team That Respects You', body: 'Family-owned culture where technicians are valued, not just numbers.' },
];

const ROLES = [
    'HVAC Service Technicians',
    'HVAC Installers',
    'Licensed Plumbers',
    'Drain & Sewer Technicians',
    'Customer Service / Dispatch',
];

export default function Careers() {
    return (
        <SiteLayout>
            <Seo
                seo={{}}
                fallbackTitle="Careers — Join Our Team | Guardian Air NJ"
                fallbackDescription="Join the Guardian Air team. We're hiring HVAC technicians, installers, and plumbers across Monmouth, Middlesex & Ocean counties, NJ — competitive pay, benefits, and growth."
            />

            <Breadcrumbs items={[{ label: 'Careers', href: '/careers' }]} />

            <article>
                <PageHeader
                    label="Join Our Team"
                    title="Build Your Career at Guardian Air"
                    description="We're a growing, family-owned home-services company serving central New Jersey — and we're always looking for skilled, customer-focused people to join us."
                    titleClassName="font-normal"
                >
                    <PillButton href={`tel:+1${PHONE.replace(/[^\d]/g, '')}`} variant="yellow" size="md" icon="phone">
                        Call {PHONE}
                    </PillButton>
                </PageHeader>

                <div className="bg-white">
                    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-4 lg:py-20">
                        {/* Why work with us */}
                        <section>
                            <SectionHeading sizeClass="text-[28px] font-normal">Why Work With Us</SectionHeading>
                            <p className="mt-4 max-w-3xl font-body text-[15px] leading-relaxed text-gray-600 md:text-base">
                                At Guardian Air, our people are the company. We serve homeowners and businesses across Monmouth,
                                Middlesex, and Ocean counties with honest, high-quality work — and we treat our team the same way
                                we treat our customers: fairly, with respect, and with room to grow.
                            </p>
                            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                {PERKS.map(({ icon: Icon, title, body }) => (
                                    <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                                            <Icon className="h-6 w-6" />
                                        </span>
                                        <h3 className="mt-4 font-display text-lg uppercase text-[#07264A]">{title}</h3>
                                        <p className="mt-2 font-body text-sm leading-relaxed text-gray-600">{body}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Open roles */}
                        <section className="mt-14">
                            <SectionHeading sizeClass="text-[28px] font-normal">Positions We Hire For</SectionHeading>
                            <p className="mt-4 max-w-3xl font-body text-[15px] leading-relaxed text-gray-600 md:text-base">
                                We're frequently hiring across our trades. Even if you don't see your exact role listed, we'd love
                                to hear from great people — reach out and tell us what you do.
                            </p>
                            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {ROLES.map((role) => (
                                    <div key={role} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                                            <LuHeart className="h-4 w-4" />
                                        </span>
                                        <span className="font-body text-sm font-bold text-[#07264A]">{role}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* How to apply */}
                        <section className="mt-14 rounded-2xl bg-[#07264A] p-8 text-center sm:p-12">
                            <h2 className="font-display text-[26px] uppercase leading-tight text-white md:text-[32px]">Ready to Apply?</h2>
                            <p className="mx-auto mt-3 max-w-xl font-body text-sm leading-relaxed text-white/80 md:text-base">
                                Send us your details and a quick note about your experience. We review every application and reach
                                out to qualified candidates fast.
                            </p>
                            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <PillButton href="/contact" variant="yellow" size="md">
                                    Apply Now
                                    <LuArrowRight className="h-4 w-4" />
                                </PillButton>
                                <PillButton href={`tel:+1${PHONE.replace(/[^\d]/g, '')}`} variant="light" size="md" icon="phone">
                                    {PHONE}
                                </PillButton>
                            </div>
                        </section>
                    </div>
                </div>
            </article>

            <CtaBanner titleWeightClass="font-normal" />
        </SiteLayout>
    );
}

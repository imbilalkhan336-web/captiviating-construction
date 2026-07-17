import { Link } from '@inertiajs/react';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import Breadcrumbs from '@/Components/FrontComponents/Breadcrumbs';
import ServiceSchema from '@/Components/FrontComponents/ServiceSchema';
import SectionHeading from '@/Components/FrontComponents/SectionHeading';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';
import { LuArrowRight, LuCalculator } from 'react-icons/lu';

export default function CostGuidesIndex({ guides = [], faqs: rawFaqs = [], seo = {} }) {
    const faqs = rawFaqs.map((f) => ({ question: f.q, answer: f.a }));

    return (
        <SiteLayout>
            <Seo
                seo={seo}
                fallbackTitle="HVAC, Plumbing & Drain Cost Guides (NJ) | Guardian Air"
                fallbackDescription="HVAC repair cost NJ â€” flat-rate 2026 price guides for furnace, AC, plumbing, duct & drain service across Monmouth, Middlesex & Ocean counties. Call today!"
            />
            <ServiceSchema
                serviceName="HVAC & Plumbing Cost Guides"
                serviceType="HVAC and plumbing pricing information"
                description="Honest cost guides for HVAC repair, AC repair, plumbing, duct cleaning, and drain cleaning across Monmouth, Middlesex, and Ocean counties, NJ."
                path="/cost-guides"
                faqs={faqs}
            />

            <Breadcrumbs items={[{ label: 'Cost Guides', href: '/cost-guides' }]} />

            <article>
                <PageHeader
                    label="Pricing"
                    title="What HVAC & Plumbing Services Cost in New Jersey"
                    description="Wondering about HVAC repair cost in NJ? No gimmicks, no hidden conditions â€” honest price ranges for heating, AC, plumbing, duct, and drain work so you know what to expect before you call."
                    image="/img/heroes/cost-guides.webp"
                    titleClassName="font-normal"
                />

                <div className="bg-white py-14 lg:py-20">
                    <div className="mx-auto max-w-[1200px] px-4">
                        <p className="max-w-3xl font-body text-[15px] leading-relaxed text-gray-600 md:text-base">
                            Looking for honest HVAC repair cost in NJ â€” or AC, plumbing, duct, and drain pricing? Guardian Air
                            publishes transparent 2026 price ranges for the most common services across Monmouth, Middlesex, and
                            Ocean counties, from Toms River and Freehold to Brick, Old Bridge, Red Bank, and Lakewood. Your exact
                            price is always confirmed with a flat-rate quote before any work begins.
                        </p>

                        {/* Cost guide index */}
                        <section className="mt-12">
                            <SectionHeading sizeClass="text-[26px] font-normal">Cost Guide Index</SectionHeading>
                            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {guides.map((guide) => (
                                    <Link
                                        key={guide.slug}
                                        href={guide.href}
                                        className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-lg"
                                    >
                                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                                            <LuCalculator className="h-6 w-6" />
                                        </span>
                                        <h3 className="mt-5 font-display text-xl uppercase text-[#07264A]">{guide.name}</h3>
                                        <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-gray-600">{guide.description}</p>
                                        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-orange">
                                            View Guide
                                            <LuArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </section>

                        <section className="mt-12 max-w-3xl">
                            <SectionHeading sizeClass="text-[26px] font-normal">Average NJ Pricing</SectionHeading>
                            <p className="mt-4 font-body text-[15px] leading-relaxed text-gray-600 md:text-base">
                                Each guide breaks down typical New Jersey price ranges by job and explains what's included. Diagnostic
                                service calls generally run $89 to $150 and are often credited toward the repair, and we never add
                                overtime fees for nights, weekends, or holidays. Browse the related service pages â€” <Link href="/heating" className="font-semibold text-blue-600 underline">heating</Link>, <Link href="/cooling" className="font-semibold text-blue-600 underline">cooling</Link>, <Link href="/plumbing" className="font-semibold text-blue-600 underline">plumbing</Link>, <Link href="/drains" className="font-semibold text-blue-600 underline">drains</Link>, and <Link href="/indoor-air-quality" className="font-semibold text-blue-600 underline">indoor air quality</Link> â€” for full details.
                            </p>
                        </section>

                        <section className="mt-12 max-w-3xl">
                            <SectionHeading sizeClass="text-[26px] font-normal">What Affects Price</SectionHeading>
                            <p className="mt-4 font-body text-[15px] leading-relaxed text-gray-600 md:text-base">
                                Final pricing depends on the specific part or job, the age and type of your system, accessibility,
                                and whether it's an emergency. Because every home is different, we provide an upfront, flat-rate quote
                                so you approve the price before we start.
                            </p>
                        </section>

                        <section className="mt-12 max-w-3xl">
                            <SectionHeading sizeClass="text-[26px] font-normal">Serving Monmouth, Middlesex & Ocean County</SectionHeading>
                            <p className="mt-4 font-body text-[15px] leading-relaxed text-gray-600 md:text-base">
                                These ranges apply across our service area. Find your town on our <Link href="/service-areas" className="font-semibold text-blue-600 underline">service areas</Link> page, or <Link href="/contact" className="font-semibold text-blue-600 underline">contact us</Link> for a precise quote.
                            </p>
                        </section>

                        {faqs.length > 0 && (
                            <section className="mt-12 max-w-3xl">
                                <SectionHeading sizeClass="text-[26px] font-normal">Frequently Asked Questions</SectionHeading>
                                <div className="mt-6 space-y-3">
                                    {faqs.map((f) => (
                                        <details key={f.question} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                                            <summary className="flex cursor-pointer items-center justify-between gap-3 font-body text-sm font-bold text-[#07264A]">
                                                {f.question}
                                                <LuArrowRight className="h-4 w-4 flex-shrink-0 text-brand-orange transition-transform group-open:rotate-90" />
                                            </summary>
                                            <p className="mt-3 font-body text-sm leading-relaxed text-gray-600">{f.answer}</p>
                                        </details>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </article>

            <CtaBanner titleWeightClass="font-normal" />
        </SiteLayout>
    );
}

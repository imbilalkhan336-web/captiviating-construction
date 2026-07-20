import { Link } from '@inertiajs/react';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import Breadcrumbs from '@/Components/FrontComponents/Breadcrumbs';
import ServiceSchema from '@/Components/FrontComponents/ServiceSchema';
import SectionHeading from '@/Components/FrontComponents/SectionHeading';
import ScheduleForm from '@/Components/FrontComponents/ScheduleForm';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';
import { PillButton } from '@/Components/FrontComponents/PillButton';
import { LuArrowLeft, LuArrowRight, LuCheck } from 'react-icons/lu';

// Theme-matched hero background per trade.
const HERO_BY_TRADE = {
    heating: '/img/heroes/heating.webp',
    cooling: '/img/heroes/cooling.webp',
    plumbing: '/img/heroes/plumbing.webp',
    drains: '/img/heroes/drains.webp',
    'commercial-hvac': '/img/heroes/commercial.webp',
    'indoor-air-quality': '/img/heroes/air-quality.webp',
};

const PHONE = '(848) 276-6300';

export default function TradeLocation({ trade, location, otherTrades = [], nearby = [], reviews = [], seo = {} }) {
    const svc = trade.locationName; // e.g. "Furnace Repair"
    const svcLower = svc.toLowerCase();
    const loc = location.name;
    const title = `${svc} in ${loc}, NJ | Captivating Construction Group`;
    const description = `${svc} in ${loc}  -  Captivating Construction Group provides licensed ${trade.label.toLowerCase()} service in ${loc}, ${location.county_name}, NJ. Same-day response & flat-rate pricing. Call now!`;

    const faqs = [
        { question: `How much does ${svcLower} cost in ${loc}?`, answer: `Cost depends on the specific issue and parts involved, but Captivating Construction Group always provides a flat-rate quote before any work begins  -  no hidden fees. Most ${svcLower} jobs in ${loc} are quoted on the spot after a quick diagnosis.` },
        { question: `How fast can you respond in ${loc}?`, answer: `Because our technicians work throughout ${location.county_name}, we can often reach ${loc} the same day, and we offer emergency service for urgent ${trade.label.toLowerCase()} problems.` },
        { question: `What ${trade.label.toLowerCase()} services do you offer in ${loc}?`, answer: `In ${loc} we handle repair, installation, replacement, and maintenance  -  backed by licensed, insured technicians and upfront, flat-rate pricing on every visit.` },
        { question: `Are you local to ${loc}?`, answer: `Yes. Captivating Construction Group serves ${loc} and the surrounding ${location.county_name} area with local technicians, so help is never far away.` },
    ];

    return (
        <SiteLayout showReviews={false}>
            <Seo seo={seo} fallbackTitle={title} fallbackDescription={description} />
            <ServiceSchema
                serviceName={`${svc} in ${loc}`}
                serviceType={`${trade.label} service`}
                description={description}
                path={`/${trade.slug}/${location.slug}`}
                faqs={faqs}
            />

            <Breadcrumbs
                items={[
                    { label: trade.label, href: `/${trade.slug}` },
                    { label: loc, href: `/${trade.slug}/${location.slug}` },
                ]}
            />

            <article>
                <PageHeader
                    label={location.county_name}
                    title={`${svc} in ${loc}, NJ`}
                    image={HERO_BY_TRADE[trade.slug] || '/img/heroes/company.webp'}
                    imageCover
                    description={`Licensed ${trade.label.toLowerCase()} service in ${loc}  -  fast scheduling, upfront flat-rate quotes, and technicians based right in ${location.county_name}.`}
                    titleClassName="font-normal"
                />

                <div className="bg-white">
                    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 px-5 py-16 sm:px-6 lg:px-4 lg:py-24">
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                            <div className="lg:col-span-7">
                                <Link
                                    href={`/${trade.slug}`}
                                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-gray-500 transition-colors hover:text-brand-orange"
                                >
                                    <LuArrowLeft className="h-3.5 w-3.5" />
                                    {trade.label} (main)
                                </Link>

                                <section className="mt-6">
                                    <SectionHeading sizeClass="text-[30px] font-normal">{svc} in {loc}</SectionHeading>
                                    <div className="mt-6 space-y-4 font-montserrat text-[16px] font-normal leading-[26px] text-black md:text-base [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline">
                                        {(trade.intro?.length
                                            ? trade.intro
                                            : [
                                                  `When you need ${svcLower} in ${loc}, Captivating Construction Group is the local team to call. We provide licensed, insured ${trade.label.toLowerCase()} service to homeowners and businesses throughout ${loc} and the surrounding ${location.county_name} area  -  with fast, often same-day response and honest, flat-rate pricing.`,
                                                  `Our technicians know the homes and systems common to ${loc}, so we diagnose the real problem quickly and fix it right the first time. No upsells, no surprises  -  just reliable comfort backed by a satisfaction guarantee.`,
                                              ]
                                        ).map((p, i) => (
                                            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                                        ))}
                                        {!trade.hasCustomCopy && (
                                            <p>
                                                Visit our main{' '}
                                                <Link href={`/${trade.slug}`} className="font-semibold text-blue-600 underline">
                                                    {trade.label.toLowerCase()} page
                                                </Link>{' '}
                                                for all our services, see{' '}
                                                <Link href={`/service-areas/${location.county_slug}`} className="font-semibold text-blue-600 underline">
                                                    {location.county_name}
                                                </Link>
                                                {nearby.length > 0 && (
                                                    <>
                                                        , or find us in{' '}
                                                        {nearby.map((n, i) => (
                                                            <span key={n.href}>
                                                                <Link href={n.href} className="font-semibold text-blue-600 underline">
                                                                    {n.name}
                                                                </Link>
                                                                {i < nearby.length - 1 ? ' and ' : ''}
                                                            </span>
                                                        ))}
                                                    </>
                                                )}.
                                            </p>
                                        )}
                                    </div>
                                </section>

                                {trade.issues?.length > 0 && (
                                    <section className="mt-12">
                                        <SectionHeading sizeClass="text-[26px] font-normal">Common {loc} Issues We Fix</SectionHeading>
                                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                            {trade.issues.map((issue) => (
                                                <div key={issue} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                                                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                                                        <LuCheck className="h-3.5 w-3.5" />
                                                    </span>
                                                    <span className="font-body text-sm font-semibold text-[#07264A]">{issue}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                <section className="mt-12">
                                    <SectionHeading sizeClass="text-[26px] font-normal">Why {loc} Homeowners Choose Captivating Construction Group</SectionHeading>
                                    <div className="mt-6 space-y-4 font-montserrat text-[16px] font-normal leading-[26px] text-black md:text-base">
                                        {(trade.why?.length
                                            ? trade.why
                                            : [
                                                  `Families across ${loc} choose Captivating Construction Group because we show up fast, charge fair flat rates, and treat your home like our own. Every technician is licensed and insured, and every job comes with a clear quote before any work begins.`,
                                                  `We're proud to be a local, family-owned company serving ${location.county_name}  -  the same trusted team your neighbors already rely on.`,
                                              ]
                                        ).map((p, i) => (
                                            <p key={i}>{p}</p>
                                        ))}
                                    </div>
                                </section>

                                <section className="mt-12">
                                    <SectionHeading sizeClass="text-[26px] font-normal">Book Service in {loc}</SectionHeading>
                                    <p className="mt-6 font-montserrat text-[16px] font-normal leading-[26px] text-black md:text-base">
                                        Ready to schedule {svcLower} in {loc}? Call us at {PHONE} or request service online  -  we'll
                                        confirm a time that works for you, often the same day.
                                    </p>
                                    <div className="mt-5">
                                        <PillButton href={`tel:+1${PHONE.replace(/[^\d]/g, '')}`} variant="yellow" size="md" icon="phone">
                                            Call {PHONE}
                                        </PillButton>
                                    </div>
                                </section>

                                {/* FAQs */}
                                <section className="mt-12">
                                    <SectionHeading sizeClass="text-[26px] font-normal">Frequently Asked Questions</SectionHeading>
                                    <div className="mt-6 space-y-3">
                                        {faqs.map((f) => (
                                            <details key={f.question} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                                                <summary className="flex cursor-pointer items-center justify-between gap-3 font-body text-sm font-bold text-[#07264A]">
                                                    {f.question}
                                                    <LuArrowRight className="h-4 w-4 flex-shrink-0 text-brand-orange transition-transform group-open:rotate-90" />
                                                </summary>
                                                <p className="mt-3 font-montserrat text-[16px] font-normal leading-[26px] text-black">{f.answer}</p>
                                            </details>
                                        ))}
                                    </div>
                                </section>

                                {/* Internal links: parent + nearby areas + contact */}
                                <section className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                                    <h3 className="font-display text-lg uppercase text-[#07264A]">Related</h3>
                                    <ul className="mt-3 space-y-2">
                                        <li>
                                            <Link href={`/${trade.slug}`} className="group inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gray-600 hover:text-brand-orange">
                                                <LuArrowRight className="h-3.5 w-3.5 text-brand-orange" />
                                                {trade.label} Services (main)
                                            </Link>
                                        </li>
                                        {nearby.map((n) => (
                                            <li key={n.href}>
                                                <Link href={n.href} className="group inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gray-600 hover:text-brand-orange">
                                                    <LuArrowRight className="h-3.5 w-3.5 text-brand-orange" />
                                                    {svc} in {n.name}
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <Link href="/contact" className="group inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gray-600 hover:text-brand-orange">
                                                <LuArrowRight className="h-3.5 w-3.5 text-brand-orange" />
                                                Contact Captivating Construction Group
                                            </Link>
                                        </li>
                                    </ul>
                                </section>
                            </div>

                            <aside className="lg:col-span-5">
                                <div className="lg:sticky lg:top-24">
                                    <ScheduleForm headingClassName="font-normal" />
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </article>

            <CtaBanner titleWeightClass="font-normal" />
        </SiteLayout>
    );
}

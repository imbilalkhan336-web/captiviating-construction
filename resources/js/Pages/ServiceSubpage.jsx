import { Link } from '@inertiajs/react';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import Breadcrumbs from '@/Components/FrontComponents/Breadcrumbs';
import ServiceSchema from '@/Components/FrontComponents/ServiceSchema';
import SectionHeading from '@/Components/FrontComponents/SectionHeading';
import ScheduleForm from '@/Components/FrontComponents/ScheduleForm';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';
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

function Paragraphs({ text }) {
    const str = String(text || '');
    // Render embedded HTML (e.g. in-content links) when present.
    if (/<[a-z][\s\S]*>/i.test(str)) {
        return (
            <div
                className="mt-4 space-y-4 font-body text-[15px] leading-relaxed text-gray-600 md:text-base [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: str }}
            />
        );
    }
    const paras = str
        .split(/\n\n+/)
        .map((p) => p.trim())
        .filter(Boolean);
    return (
        <div className="mt-4 space-y-4 font-body text-[15px] leading-relaxed text-gray-600 md:text-base">
            {paras.map((p, i) => (
                <p key={i}>{p}</p>
            ))}
        </div>
    );
}

export default function ServiceSubpage({ trade, service, siblings = [], reviews = [], seo = {} }) {
    const faqs = (service.faqs || []).map((f) => ({ question: f.q, answer: f.a }));
    const related = siblings.slice(0, 2);

    return (
        <SiteLayout showReviews={false} reviews={reviews}>
            <Seo seo={seo} fallbackTitle={service.title} fallbackDescription={service.description} />
            <ServiceSchema
                serviceName={service.name}
                serviceType={`${trade.label} â€” ${service.name}`}
                description={service.description}
                path={`/${trade.slug}/${service.slug}`}
                faqs={faqs}
            />

            <Breadcrumbs
                items={[
                    { label: trade.label, href: `/${trade.slug}` },
                    { label: service.name, href: `/${trade.slug}/${service.slug}` },
                ]}
            />

            <article>
                <PageHeader
                    label={trade.label}
                    title={service.h1 || service.name}
                    image={HERO_BY_TRADE[trade.slug] || '/img/heroes/company.webp'}
                    imageCover
                    description={service.description}
                    titleClassName="font-normal"
                />

                <div className="bg-white">
                    <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 lg:px-4 lg:py-24">
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                            <div className="lg:col-span-7">
                                <Link
                                    href={`/${trade.slug}`}
                                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-gray-500 transition-colors hover:text-brand-orange"
                                >
                                    <LuArrowLeft className="h-3.5 w-3.5" />
                                    All {trade.label} Services
                                </Link>

                                {service.intro && (
                                    /<[a-z][\s\S]*>/i.test(String(service.intro)) ? (
                                        <div
                                            className="mt-6 space-y-4 font-body text-lg font-semibold leading-relaxed text-[#07264A] [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline"
                                            dangerouslySetInnerHTML={{ __html: String(service.intro) }}
                                        />
                                    ) : (
                                        <p className="mt-6 font-body text-lg font-semibold leading-relaxed text-[#07264A]">
                                            {service.intro}
                                        </p>
                                    )
                                )}

                                {/* In-content contextual links */}
                                <p className="mt-4 font-body text-[15px] leading-relaxed text-gray-600 md:text-base">
                                    Explore our full range of{' '}
                                    <Link href={`/${trade.slug}`} className="font-semibold text-blue-600 underline">
                                        {trade.label.toLowerCase()} services
                                    </Link>
                                    {related.length > 0 && (
                                        <>
                                            {' '}â€” including{' '}
                                            {related.map((s, i) => (
                                                <span key={s.href}>
                                                    <Link href={s.href} className="font-semibold text-blue-600 underline">
                                                        {s.name.toLowerCase()}
                                                    </Link>
                                                    {i < related.length - 1 ? ' and ' : ''}
                                                </span>
                                            ))}
                                        </>
                                    )}
                                    {' '}â€” or{' '}
                                    <Link href="/contact" className="font-semibold text-blue-600 underline">
                                        contact us
                                    </Link>{' '}
                                    for fast service across{' '}
                                    <Link href="/service-areas" className="font-semibold text-blue-600 underline">
                                        Monmouth, Middlesex &amp; Ocean counties
                                    </Link>.
                                </p>

                                {service.highlights?.length > 0 && (
                                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        {service.highlights.map((point) => (
                                            <div key={point} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                                                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                                                    <LuCheck className="h-4 w-4" />
                                                </span>
                                                <span className="font-body text-sm font-semibold text-[#07264A]">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {(service.sections || []).map((s) => (
                                    <section key={s.heading} className="mt-10">
                                        <SectionHeading sizeClass="text-[26px] font-normal">{s.heading}</SectionHeading>
                                        <Paragraphs text={s.body} />
                                    </section>
                                ))}

                                {faqs.length > 0 && (
                                    <section className="mt-12">
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

                                {/* Internal links: parent + related + contact */}
                                <section className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                                    <h3 className="font-display text-lg uppercase text-[#07264A]">Related</h3>
                                    <ul className="mt-3 space-y-2">
                                        <li>
                                            <Link href={`/${trade.slug}`} className="group inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gray-600 hover:text-brand-orange">
                                                <LuArrowRight className="h-3.5 w-3.5 text-brand-orange" />
                                                {trade.label} Services (main)
                                            </Link>
                                        </li>
                                        {related.map((s) => (
                                            <li key={s.href}>
                                                <Link href={s.href} className="group inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gray-600 hover:text-brand-orange">
                                                    <LuArrowRight className="h-3.5 w-3.5 text-brand-orange" />
                                                    {s.name}
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <Link href="/contact" className="group inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gray-600 hover:text-brand-orange">
                                                <LuArrowRight className="h-3.5 w-3.5 text-brand-orange" />
                                                Contact Guardian Air
                                            </Link>
                                        </li>
                                    </ul>
                                </section>
                            </div>

                            {/* Sticky schedule form */}
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

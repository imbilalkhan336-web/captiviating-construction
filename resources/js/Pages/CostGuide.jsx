import { Link } from '@inertiajs/react';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import Breadcrumbs from '@/Components/FrontComponents/Breadcrumbs';
import ServiceSchema from '@/Components/FrontComponents/ServiceSchema';
import SectionHeading from '@/Components/FrontComponents/SectionHeading';
import ScheduleForm from '@/Components/FrontComponents/ScheduleForm';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';
import { LuArrowRight } from 'react-icons/lu';

function Body({ text }) {
    const str = String(text || '');
    if (/<[a-z][\s\S]*>/i.test(str)) {
        return (
            <p
                className="mt-4 font-body text-[15px] leading-relaxed text-gray-600 md:text-base [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: str }}
            />
        );
    }
    return <p className="mt-4 font-body text-[15px] leading-relaxed text-gray-600 md:text-base">{str}</p>;
}

export default function CostGuide({ guide, seo = {} }) {
    const faqs = (guide.faqs || []).map((f) => ({ question: f.q, answer: f.a }));

    return (
        <SiteLayout>
            <Seo seo={seo} fallbackTitle={guide.title} fallbackDescription={guide.description} />
            <ServiceSchema
                serviceName={guide.name}
                serviceType="HVAC and plumbing cost guide"
                description={guide.description}
                path={`/cost-guides/${guide.slug}`}
                faqs={faqs}
            />

            <Breadcrumbs
                items={[
                    { label: 'Cost Guides', href: '/cost-guides' },
                    { label: guide.name, href: `/cost-guides/${guide.slug}` },
                ]}
            />

            <article>
                <PageHeader label="Cost Guide" title={guide.h1 || guide.name} description={guide.description} image="/img/heroes/cost-guides.webp" titleClassName="font-normal" />

                <div className="bg-white">
                    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-4 lg:py-24">
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                            <div className="lg:col-span-7">
                                {guide.intro && (
                                    /<[a-z][\s\S]*>/i.test(String(guide.intro)) ? (
                                        <div
                                            className="space-y-4 font-body text-lg font-semibold leading-relaxed text-[#07264A] [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline"
                                            dangerouslySetInnerHTML={{ __html: String(guide.intro) }}
                                        />
                                    ) : (
                                        <p className="font-body text-lg font-semibold leading-relaxed text-[#07264A]">{guide.intro}</p>
                                    )
                                )}

                                {/* Price table */}
                                <section className="mt-8">
                                    <SectionHeading sizeClass="text-[26px] font-normal">Typical Price Ranges</SectionHeading>
                                    <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="bg-[#07264A] text-white">
                                                    <th className="px-5 py-3 font-body text-sm font-bold">Service</th>
                                                    <th className="px-5 py-3 text-right font-body text-sm font-bold">Typical Cost</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                {guide.rows.map((row) => (
                                                    <tr key={row[0]} className="bg-white">
                                                        <td className="px-5 py-3.5 font-body text-sm text-[#07264A]">{row[0]}</td>
                                                        <td className="px-5 py-3.5 text-right font-body text-sm font-bold text-[#07264A]">{row[1]}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="mt-3 font-body text-xs text-gray-500">
                                        Ranges are estimates for New Jersey homes and may vary with your system and situation. We
                                        always provide a flat-rate quote before any work begins.
                                    </p>
                                </section>

                                {(guide.sections || []).map((s) => (
                                    <section key={s.heading} className="mt-10">
                                        <SectionHeading sizeClass="text-[26px] font-normal">{s.heading}</SectionHeading>
                                        <Body text={s.body} />
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

                                {/* Internal links */}
                                <section className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                                    <h3 className="font-display text-lg uppercase text-[#07264A]">Related</h3>
                                    <ul className="mt-3 space-y-2">
                                        {guide.serviceLink && (
                                            <li>
                                                <Link href={guide.serviceLink.href} className="group inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gray-600 hover:text-brand-orange">
                                                    <LuArrowRight className="h-3.5 w-3.5 text-brand-orange" />
                                                    {guide.serviceLink.label}
                                                </Link>
                                            </li>
                                        )}
                                        <li>
                                            <Link href="/cost-guides" className="group inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gray-600 hover:text-brand-orange">
                                                <LuArrowRight className="h-3.5 w-3.5 text-brand-orange" />
                                                All Cost Guides
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact" className="group inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gray-600 hover:text-brand-orange">
                                                <LuArrowRight className="h-3.5 w-3.5 text-brand-orange" />
                                                Contact Guardian Air
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

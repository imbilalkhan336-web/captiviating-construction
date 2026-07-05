import { Link } from '@inertiajs/react';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import Breadcrumbs from '@/Components/FrontComponents/Breadcrumbs';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';

/**
 * Generic legal page (Terms, Privacy). Renders titled sections of prose.
 * Each section: { heading, body: string[] }.
 */
export default function LegalPage({ title, path, label, description, updated, sections = [] }) {
    return (
        <SiteLayout>
            <Seo
                seo={{}}
                fallbackTitle={`${title} | Guardian Air`}
                fallbackDescription={description}
            />

            <Breadcrumbs items={[{ label: title, href: path }]} />

            <article>
                <PageHeader label={label} title={title} description={description} titleClassName="font-normal" />

                <div className="bg-white">
                    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-6 lg:py-20">
                        {updated && (
                            <p className="mb-8 text-sm font-semibold text-gray-500">Last updated: {updated}</p>
                        )}

                        {sections.map((s) => (
                            <section key={s.heading} className="mb-8">
                                <h2 className="font-display text-[24px] uppercase leading-tight text-[#07264A]">{s.heading}</h2>
                                <div className="mt-4 space-y-4 font-body text-[15px] leading-relaxed text-gray-600 md:text-base">
                                    {s.body.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                            </section>
                        ))}

                        <p className="mt-10 font-body text-[15px] leading-relaxed text-gray-600">
                            Questions about this policy? <Link href="/contact" className="font-semibold text-blue-600 underline">Contact Guardian Air</Link>.
                        </p>
                    </div>
                </div>
            </article>

            <CtaBanner titleWeightClass="font-normal" />
        </SiteLayout>
    );
}

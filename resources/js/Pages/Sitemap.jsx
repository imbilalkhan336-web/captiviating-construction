import { Link } from '@inertiajs/react';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import Breadcrumbs from '@/Components/FrontComponents/Breadcrumbs';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';
import { LuChevronRight } from 'react-icons/lu';

export default function Sitemap({ groups = [] }) {
    return (
        <SiteLayout>
            <Seo
                seo={{}}
                fallbackTitle="Sitemap | Guardian Air"
                fallbackDescription="Browse every page on the Guardian Air website â€” services, service areas, cost guides, and more across Monmouth, Middlesex & Ocean counties, NJ."
            />

            <Breadcrumbs items={[{ label: 'Sitemap', href: '/sitemap' }]} />

            <article>
                <PageHeader
                    label="All Pages"
                    title="Sitemap"
                    description="Every page on the Guardian Air website, organized by section."
                    titleClassName="font-normal"
                />

                <div className="bg-white py-14 lg:py-20">
                    <div className="mx-auto max-w-[1200px] px-4">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {groups.map((group) => (
                                <div key={group.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                                    <div className="flex items-center gap-2.5">
                                        <span aria-hidden="true" className="h-5 w-1 rounded-full bg-brand-orange" />
                                        <h2 className="font-display text-lg uppercase text-[#07264A]">{group.title}</h2>
                                    </div>
                                    <ul className="mt-4 space-y-1.5">
                                        {group.links.map((l) => (
                                            <li key={l.href}>
                                                <Link
                                                    href={l.href}
                                                    className="group flex items-center gap-1.5 font-body text-sm font-semibold text-gray-600 transition-colors hover:text-brand-orange"
                                                >
                                                    <LuChevronRight className="h-3.5 w-3.5 flex-shrink-0 text-brand-orange/60 transition-transform group-hover:translate-x-0.5" />
                                                    {l.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <p className="mt-10 font-body text-sm text-gray-500">
                            Looking for the XML sitemap for search engines? It's at{' '}
                            <a href="/sitemap.xml" className="font-semibold text-blue-600 underline">/sitemap.xml</a>.
                        </p>
                    </div>
                </div>
            </article>

            <CtaBanner titleWeightClass="font-normal" />
        </SiteLayout>
    );
}

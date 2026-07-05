import { Link } from '@inertiajs/react';
import { LuArrowRight, LuChevronRight } from 'react-icons/lu';
import { PillButton } from '@/Components/FrontComponents/PillButton';

/**
 * Polished internal-links block used at the bottom of service pages.
 *
 * columns: [{ title, links: [{ label, href }] }]
 * viewAll: { label, href } — optional branded pill button
 * note:    optional ReactNode rendered under the button (e.g. emergency line)
 */
export default function RelatedLinks({ eyebrow = 'Explore', heading = 'Related Services & Areas', columns = [], viewAll, note }) {
    return (
        <section className="border-t border-gray-100 bg-gradient-to-b from-gray-50 to-white py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-10">
                    {eyebrow && (
                        <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">{eyebrow}</p>
                    )}
                    {heading && (
                        <h2 className="mt-2 font-display text-[26px] uppercase leading-[0.95] text-[#07264A] md:text-[32px]">
                            {heading}
                        </h2>
                    )}
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {columns.map((col) => (
                        <div
                            key={col.title}
                            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-lg"
                        >
                            <div className="flex items-center gap-2.5">
                                <span aria-hidden="true" className="h-5 w-1 rounded-full bg-brand-orange" />
                                <h3 className="font-display text-base uppercase tracking-wide text-[#07264A]">{col.title}</h3>
                            </div>
                            <ul className="mt-3 divide-y divide-gray-100">
                                {col.links.map((l) => (
                                    <li key={l.href}>
                                        <Link
                                            href={l.href}
                                            className="group flex items-center gap-2 py-2.5 font-body text-sm font-semibold text-gray-600 transition-colors hover:text-brand-orange"
                                        >
                                            <LuChevronRight className="h-4 w-4 flex-shrink-0 text-brand-orange/60 transition-transform group-hover:translate-x-0.5" />
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {(viewAll || note) && (
                    <div className="mt-12 flex flex-col items-center gap-4">
                        {viewAll && (
                            <PillButton href={viewAll.href} variant="yellow" size="md">
                                {viewAll.label}
                                <LuArrowRight className="h-4 w-4" />
                            </PillButton>
                        )}
                        {note}
                    </div>
                )}
            </div>
        </section>
    );
}

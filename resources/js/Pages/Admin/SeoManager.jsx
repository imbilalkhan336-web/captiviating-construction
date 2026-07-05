import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { LuSearch, LuPencil, LuTriangleAlert } from 'react-icons/lu';

export default function SeoManager({ pages = [] }) {
    return (
        <AdminLayout header={<h1 className="text-lg font-bold text-[#07264A]">SEO Settings</h1>}>
            <Head title="Admin — SEO" />

            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                        <LuSearch className="h-5 w-5" />
                    </span>
                    <div>
                        <p className="font-display text-xl uppercase text-[#07264A]">Page SEO</p>
                        <p className="text-sm text-gray-500">
                            Edit the title, meta description, social preview, and indexing for each public page.
                        </p>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <ul className="divide-y divide-gray-100">
                    {pages.map((page) => {
                        const noindex = (page.seo?.robots || '').includes('noindex');
                        return (
                            <li key={page.slug}>
                                <Link
                                    href={route('admin.seo.edit', page.slug)}
                                    className="group flex items-start gap-4 p-5 transition-colors hover:bg-gray-50"
                                >
                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <p className="font-display text-base uppercase text-[#07264A]">{page.label}</p>
                                            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold text-gray-500">
                                                {page.path}
                                            </span>
                                            {noindex && (
                                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
                                                    <LuTriangleAlert className="h-3 w-3" /> noindex
                                                </span>
                                            )}
                                        </div>
                                        <p className="mt-1 truncate text-sm font-semibold text-gray-700">
                                            {page.seo?.title || <span className="italic text-gray-400">No title set</span>}
                                        </p>
                                        <p className="mt-0.5 line-clamp-2 text-xs text-gray-500">
                                            {page.seo?.description || (
                                                <span className="italic text-gray-400">No description set</span>
                                            )}
                                        </p>
                                    </div>
                                    <span className="flex flex-shrink-0 items-center gap-1.5 text-xs font-semibold text-gray-400 group-hover:text-brand-orange">
                                        <LuPencil className="h-4 w-4" /> Edit
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </AdminLayout>
    );
}

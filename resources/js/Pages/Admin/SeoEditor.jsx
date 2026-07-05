import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { LuArrowLeft, LuCheck, LuLoader, LuExternalLink } from 'react-icons/lu';

const inputClass =
    'mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20';
const labelClass = 'block text-[11px] font-extrabold uppercase tracking-widest text-gray-500';

function CharCount({ value, ideal }) {
    const len = (value || '').length;
    const over = len > ideal;
    return (
        <span className={`text-[11px] font-semibold ${over ? 'text-amber-600' : 'text-gray-400'}`}>
            {len}/{ideal}
        </span>
    );
}

export default function SeoEditor({ page, label, path, seo = {}, record = null, defaults = null }) {
    const { data, setData, put, processing, recentlySuccessful, errors } = useForm({
        title: record?.title ?? '',
        description: record?.description ?? '',
        og_title: record?.og_title ?? '',
        og_description: record?.og_description ?? '',
        og_image: record?.og_image ?? '',
        canonical: record?.canonical ?? '',
        robots: record?.robots ?? 'index, follow',
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('admin.seo.update', page));
    };

    return (
        <AdminLayout header={<h1 className="text-lg font-bold text-[#07264A]">SEO — {label}</h1>}>
            <Head title={`Admin — SEO: ${label}`} />

            <div className="mb-5 flex items-center justify-between">
                <Link
                    href={route('admin.seo')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-orange"
                >
                    <LuArrowLeft className="h-4 w-4" /> All pages
                </Link>
                <a
                    href={path}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-orange"
                >
                    View page <LuExternalLink className="h-4 w-4" />
                </a>
            </div>

            <form onSubmit={submit} className="mx-auto max-w-3xl space-y-6">
                {/* Search engine listing */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <p className="font-display text-lg uppercase text-[#07264A]">Search Result</p>
                    <p className="mb-4 text-xs text-gray-500">How this page appears in Google.</p>

                    <div className="space-y-4">
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="title" className={labelClass}>Title</label>
                                <CharCount value={data.title} ideal={60} />
                            </div>
                            <input
                                id="title"
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                placeholder={defaults?.title || ''}
                                className={inputClass}
                            />
                            {errors.title && <p className="mt-1 text-xs text-red-600">{errors.title}</p>}
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="description" className={labelClass}>Meta Description</label>
                                <CharCount value={data.description} ideal={160} />
                            </div>
                            <textarea
                                id="description"
                                rows={3}
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                placeholder={defaults?.description || ''}
                                className={inputClass}
                            />
                            {errors.description && <p className="mt-1 text-xs text-red-600">{errors.description}</p>}
                        </div>
                    </div>

                    {/* Live Google preview */}
                    <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50 p-4">
                        <p className="truncate text-sm text-[#1a0dab]">{data.title || defaults?.title || 'Page title'}</p>
                        <p className="text-xs text-[#006621]">guardianair.com{path}</p>
                        <p className="mt-0.5 line-clamp-2 text-xs text-gray-600">
                            {data.description || defaults?.description || 'Page description'}
                        </p>
                    </div>
                </div>

                {/* Social sharing */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <p className="font-display text-lg uppercase text-[#07264A]">Social Sharing (Open Graph)</p>
                    <p className="mb-4 text-xs text-gray-500">
                        Used when the page is shared on Facebook, X, LinkedIn, etc. Leave blank to reuse the title and description above.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label htmlFor="og_title" className={labelClass}>OG Title</label>
                            <input id="og_title" type="text" value={data.og_title} onChange={(e) => setData('og_title', e.target.value)} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="og_description" className={labelClass}>OG Description</label>
                            <textarea id="og_description" rows={2} value={data.og_description} onChange={(e) => setData('og_description', e.target.value)} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="og_image" className={labelClass}>OG Image URL</label>
                            <input id="og_image" type="text" value={data.og_image} onChange={(e) => setData('og_image', e.target.value)} placeholder="/img/og-image.webp" className={inputClass} />
                        </div>
                    </div>
                </div>

                {/* Advanced */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <p className="font-display text-lg uppercase text-[#07264A]">Advanced</p>
                    <div className="mt-4 space-y-4">
                        <div>
                            <label htmlFor="canonical" className={labelClass}>Canonical URL</label>
                            <input id="canonical" type="text" value={data.canonical} onChange={(e) => setData('canonical', e.target.value)} placeholder={path} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="robots" className={labelClass}>Robots</label>
                            <select id="robots" value={data.robots} onChange={(e) => setData('robots', e.target.value)} className={inputClass}>
                                <option value="index, follow">index, follow (visible to search engines)</option>
                                <option value="noindex, follow">noindex, follow</option>
                                <option value="noindex, nofollow">noindex, nofollow (hidden)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="submit"
                        disabled={processing}
                        className="inline-flex items-center gap-2 rounded-xl bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-orange/30 transition-colors hover:bg-brand-orange-dark disabled:opacity-60"
                    >
                        {processing ? <LuLoader className="h-4 w-4 animate-spin" /> : <LuCheck className="h-4 w-4" />}
                        Save SEO
                    </button>
                    {recentlySuccessful && <span className="text-sm font-semibold text-green-600">Saved!</span>}
                </div>
            </form>
        </AdminLayout>
    );
}

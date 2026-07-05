import { useState } from 'react';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    LuPlus,
    LuPencil,
    LuTrash2,
    LuCheck,
    LuX,
    LuUpload,
    LuTag,
    LuExternalLink,
} from 'react-icons/lu';

const inputClass =
    'mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-body text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20';
const labelClass = 'block text-[11px] font-extrabold uppercase tracking-widest text-gray-500';

/* ------------------------------------------------------------------ *
 * Add / Edit modal
 * ------------------------------------------------------------------ */

function TagModal({ tag, onClose }) {
    const isEdit = Boolean(tag);
    const [preview, setPreview] = useState(tag?.image_path || '');

    const form = useForm({
        ...(isEdit ? { _method: 'put' } : {}),
        name: tag?.name || '',
        slug: tag?.slug || '',
        image_path: tag?.image_path || '',
        link: tag?.link || '',
        image: null,
    });
    const { data, setData, errors, processing } = form;

    const pickFile = (e) => {
        const file = e.target.files?.[0] || null;
        setData('image', file);
        if (file) setPreview(URL.createObjectURL(file));
    };

    const submit = (e) => {
        e.preventDefault();
        const opts = { forceFormData: true, preserveScroll: true, onSuccess: onClose };
        if (isEdit) {
            form.post(route('tags.update', tag.id), opts);
        } else {
            form.post(route('tags.store'), opts);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-8">
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />

            <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
                <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl uppercase text-[#07264A]">
                        {isEdit ? 'Edit Tag' : 'New Tag'}
                    </h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
                        aria-label="Close"
                    >
                        <LuX className="h-5 w-5" />
                    </button>
                </div>

                <form onSubmit={submit} className="mt-6 space-y-5">
                    <div>
                        <label className={labelClass}>Tag Name</label>
                        <input
                            type="text"
                            autoFocus
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className={inputClass}
                            placeholder="e.g. Facebook"
                        />
                        {errors.name && <p className="mt-1 text-xs font-semibold text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                        <label className={labelClass}>Slug (optional — auto-generated from name)</label>
                        <input
                            type="text"
                            value={data.slug}
                            onChange={(e) => setData('slug', e.target.value)}
                            className={inputClass}
                            placeholder="facebook"
                        />
                        {errors.slug && <p className="mt-1 text-xs font-semibold text-red-500">{errors.slug}</p>}
                    </div>

                    <div>
                        <label className={labelClass}>Link (URL — makes the tag clickable)</label>
                        <input
                            type="text"
                            value={data.link}
                            onChange={(e) => setData('link', e.target.value)}
                            className={inputClass}
                            placeholder="https://facebook.com/your-page"
                        />
                        {errors.link && <p className="mt-1 text-xs font-semibold text-red-500">{errors.link}</p>}
                    </div>

                    {/* Tag image */}
                    <div className="space-y-3 border-t border-gray-100 pt-5">
                        <label className={labelClass}>Tag Image</label>
                        <label className="flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-3 py-4 text-center transition-colors hover:border-brand-orange hover:bg-brand-orange/[0.03]">
                            <LuUpload className="h-4 w-4 text-gray-400" />
                            <span className="text-xs font-semibold text-gray-600">
                                {data.image ? data.image.name : 'Click to choose an image'}
                            </span>
                            <span className="text-[11px] text-gray-400">JPG, PNG, WEBP or GIF — up to 5 MB</span>
                            <input type="file" accept="image/*" onChange={pickFile} className="hidden" />
                        </label>
                        {errors.image && <p className="mt-1 text-xs font-semibold text-red-500">{errors.image}</p>}

                        <input
                            type="text"
                            value={data.image_path}
                            onChange={(e) => {
                                setData('image_path', e.target.value);
                                if (!data.image) setPreview(e.target.value);
                            }}
                            className={inputClass}
                            placeholder="…or paste an image path / URL"
                        />
                        {preview && <img src={preview} alt="" className="max-h-44 rounded-xl border border-gray-200 object-cover" />}
                    </div>

                    <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center">
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-2.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-brand-orange-dark disabled:opacity-50 sm:w-auto"
                        >
                            <LuCheck className="h-4 w-4" />
                            {processing ? 'Saving…' : isEdit ? 'Save Changes' : 'Create Tag'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 px-6 py-2.5 text-xs font-extrabold uppercase tracking-widest text-gray-600 transition-colors hover:bg-gray-100 sm:w-auto"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ *
 * Tag manager
 * ------------------------------------------------------------------ */

export default function TagManager({ tags = [] }) {
    const flash = usePage().props.flash;
    const [modal, setModal] = useState(null); // null | 'new' | tag object

    const remove = (tag) => {
        if (!window.confirm(`Delete tag "${tag.name}"? This cannot be undone.`)) return;
        router.delete(route('tags.destroy', tag.id), { preserveScroll: true });
    };

    return (
        <AdminLayout header={<h1 className="text-lg font-bold text-[#07264A]">Tags</h1>}>
            <Head title="Admin — Tags" />

            {flash?.status && (
                <div className="mb-6 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700">
                    <LuCheck className="h-4 w-4" />
                    {flash.status}
                </div>
            )}

            {/* Toolbar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div>
                    <p className="text-sm font-bold text-[#07264A]">Manage tags</p>
                    <p className="text-xs text-gray-400">Create and organize tags for articles and sections. {tags.length} total.</p>
                </div>
                <button
                    type="button"
                    onClick={() => setModal('new')}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-widest text-white shadow-sm transition-colors hover:bg-brand-orange-dark"
                >
                    <LuPlus className="h-4 w-4" />
                    New Tag
                </button>
            </div>

            {tags.length === 0 ? (
                <div className="rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center">
                    <p className="text-sm font-semibold text-gray-400">No tags yet. Click "New Tag" to create your first one.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {tags.map((tag) => (
                        <div
                            key={tag.id}
                            className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                        >
                            <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                                {tag.image_path ? (
                                    <img src={tag.image_path} alt={tag.name} className="h-full w-full object-cover" />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-gray-300">
                                        <LuTag className="h-6 w-6" />
                                    </div>
                                )}
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="font-display text-base uppercase text-[#07264A]">{tag.name}</p>
                                <div className="mt-0.5 flex flex-wrap items-center gap-2">
                                    <span className="text-xs text-gray-400">/{tag.slug}</span>
                                    {tag.link && (
                                        <a
                                            href={tag.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1 text-[11px] text-brand-orange hover:underline"
                                        >
                                            <LuExternalLink className="h-3 w-3" />
                                            {tag.link}
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-shrink-0 items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => setModal(tag)}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-gray-500 shadow-sm transition-colors hover:border-brand-orange hover:text-brand-orange"
                                >
                                    <LuPencil className="h-3.5 w-3.5" />
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    onClick={() => remove(tag)}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-gray-500 shadow-sm transition-colors hover:border-red-400 hover:text-red-500"
                                >
                                    <LuTrash2 className="h-3.5 w-3.5" />
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {modal && <TagModal tag={modal === 'new' ? null : modal} onClose={() => setModal(null)} />}
        </AdminLayout>
    );
}

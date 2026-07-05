import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import RichTextarea from '@/Components/RichTextarea';
import {
    LuArrowLeft,
    LuCheck,
    LuType,
    LuImage,
    LuCircleHelp,
    LuUpload,
    LuExternalLink,
    LuTag,
} from 'react-icons/lu';

const TYPE_META = {
    section: { label: 'Section', icon: LuType, color: 'bg-blue-100 text-blue-700' },
    image: { label: 'Image', icon: LuImage, color: 'bg-purple-100 text-purple-700' },
    faq: { label: 'FAQ', icon: LuCircleHelp, color: 'bg-emerald-100 text-emerald-700' },
};

const FIELD_LABELS = {
    section: { heading: 'Section Title', body: 'Content' },
    faq: { heading: 'Question', body: 'Answer' },
    image: { heading: 'Image Alt Text', body: null },
};

const inputClass =
    'mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-body text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20';
const labelClass = 'block text-[11px] font-extrabold uppercase tracking-widest text-gray-500';

export default function BlockEditor({ page, label, block, tags = [] }) {
    const meta = TYPE_META[block.type] || TYPE_META.section;
    const Icon = meta.icon;
    const labels = FIELD_LABELS[block.type] || { heading: 'Heading', body: 'Body' };

    // FAQs are managed on their own page; everything else lives on the page editor.
    const returnTo = block.type === 'faq' ? route('admin.faqs', page) : route('admin.pages.edit', page);

    // Local preview of a freshly-picked file (falls back to the saved URL).
    const [preview, setPreview] = useState(block.image_path || '');

    const form = useForm({
        _method: 'put',
        page,
        type: block.type,
        heading: block.heading || '',
        body: block.body || '',
        image_path: block.image_path || '',
        image: null,
        return_to: returnTo,
        tag_ids: block.tags?.map((t) => t.id) || [],
    });

    const { data, setData, errors, processing } = form;

    const toggleTag = (tagId) => {
        const current = new Set(data.tag_ids);
        if (current.has(tagId)) {
            current.delete(tagId);
        } else {
            current.add(tagId);
        }
        setData('tag_ids', Array.from(current));
    };

    const pickFile = (e) => {
        const file = e.target.files?.[0] || null;
        setData('image', file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();
        // POST with _method=put so the file upload survives method spoofing.
        form.post(route('content-blocks.update', block.id), {
            forceFormData: true,
        });
    };

    // Compact for sections (image is optional/secondary), full size for image blocks.
    const compact = block.type === 'section';

    const imageField = (
        <div className={compact ? 'space-y-3 border-t border-gray-100 pt-5' : 'space-y-4'}>
            <div>
                <label className={labelClass}>{compact ? 'Add an Image (optional)' : 'Upload Image'}</label>
                <label
                    className={`mt-1.5 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 text-center transition-colors hover:border-brand-orange hover:bg-brand-orange/[0.03] ${
                        compact ? 'px-3 py-4' : 'px-4 py-8'
                    }`}
                >
                    <LuUpload className={compact ? 'h-4 w-4 text-gray-400' : 'h-6 w-6 text-gray-400'} />
                    <span className={`font-semibold text-gray-600 ${compact ? 'text-xs' : 'text-sm'}`}>
                        {data.image ? data.image.name : 'Click to choose an image'}
                    </span>
                    <span className="text-[11px] text-gray-400">JPG, PNG, WEBP or GIF — up to 5 MB</span>
                    <input type="file" accept="image/*" onChange={pickFile} className="hidden" />
                </label>
                {errors.image && <p className="mt-1 text-xs font-semibold text-red-500">{errors.image}</p>}
            </div>

            <div>
                <label className={labelClass}>…or paste an Image Path / URL</label>
                <input
                    type="text"
                    value={data.image_path}
                    onChange={(e) => {
                        setData('image_path', e.target.value);
                        if (!data.image) setPreview(e.target.value);
                    }}
                    className={inputClass}
                    placeholder="/img/heating.webp"
                />
                {errors.image_path && <p className="mt-1 text-xs font-semibold text-red-500">{errors.image_path}</p>}
            </div>

            {preview && (
                <div>
                    <label className={labelClass}>Preview</label>
                    <img
                        src={preview}
                        alt=""
                        className={`mt-1.5 rounded-xl border border-gray-200 object-cover ${compact ? 'max-h-36' : 'max-h-64'}`}
                    />
                </div>
            )}
        </div>
    );

    return (
        <AdminLayout
            header={
                <div className="flex min-w-0 items-center gap-3">
                    <Link
                        href={returnTo}
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-brand-orange hover:text-brand-orange"
                        title="Back to page"
                    >
                        <LuArrowLeft className="h-4 w-4" />
                    </Link>
                    <h1 className="truncate text-lg font-bold text-[#07264A]">
                        Edit Block <span className="text-brand-orange">— {label}</span>
                    </h1>
                </div>
            }
        >
            <Head title={`Admin — Edit ${meta.label}`} />

            <div className="mx-auto max-w-3xl">
                <form onSubmit={submit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                    {/* Type badge */}
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest ${meta.color}`}>
                        <Icon className="h-3.5 w-3.5" />
                        {meta.label} Block
                    </span>

                    <div className="mt-6 space-y-6">
                        {/* Heading / Title / Question / Alt text */}
                        <div>
                            <label className={labelClass}>{labels.heading}</label>
                            <input
                                type="text"
                                value={data.heading}
                                onChange={(e) => setData('heading', e.target.value)}
                                className={inputClass}
                            />
                            {errors.heading && <p className="mt-1 text-xs font-semibold text-red-500">{errors.heading}</p>}
                        </div>

                        {/* Image blocks: the image is the primary content. */}
                        {block.type === 'image' && imageField}

                        {/* Body / Content / Answer */}
                        {labels.body && (
                            <div>
                                <label className={labelClass}>{labels.body}</label>
                                <RichTextarea
                                    rows={block.type === 'faq' ? 5 : 12}
                                    value={data.body}
                                    onChange={(e) => setData('body', e.target.value)}
                                    className="mt-1.5"
                                />
                                {errors.body && <p className="mt-1 text-xs font-semibold text-red-500">{errors.body}</p>}
                            </div>
                        )}

                        {/* Section blocks: optional image, placed at the bottom. */}
                        {block.type === 'section' && imageField}

                        {/* Tags */}
                        <div className="space-y-3 border-t border-gray-100 pt-5">
                            <label className={labelClass}>Tags</label>
                            {tags.length === 0 ? (
                                <p className="text-xs text-gray-400">No tags available. Create one in the Tags section.</p>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {tags.map((tag) => {
                                        const selected = data.tag_ids.includes(tag.id);
                                        return (
                                            <button
                                                key={tag.id}
                                                type="button"
                                                onClick={() => toggleTag(tag.id)}
                                                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                                                    selected
                                                        ? 'bg-brand-orange text-white shadow-sm'
                                                        : 'border border-gray-200 bg-white text-gray-600 hover:border-brand-orange hover:text-brand-orange'
                                                }`}
                                            >
                                                {tag.image_path && (
                                                    <img src={tag.image_path} alt="" className="h-4 w-4 rounded-full object-cover" />
                                                )}
                                                {!tag.image_path && <LuTag className="h-3 w-3" />}
                                                {tag.name}
                                                {tag.link && <LuExternalLink className="h-3 w-3 opacity-70" />}
                                                {selected && <LuCheck className="h-3 w-3" />}
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                            {errors.tag_ids && <p className="mt-1 text-xs font-semibold text-red-500">{errors.tag_ids}</p>}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center">
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-2.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-brand-orange-dark disabled:opacity-50 sm:w-auto"
                        >
                            <LuCheck className="h-4 w-4" />
                            {processing ? 'Saving…' : 'Save Changes'}
                        </button>
                        <Link
                            href={returnTo}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 px-6 py-2.5 text-xs font-extrabold uppercase tracking-widest text-gray-600 transition-colors hover:bg-gray-100 sm:w-auto"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import RichTextarea from '@/Components/RichTextarea';
import {
    LuArrowLeft,
    LuCheck,
    LuUpload,
    LuExternalLink,
    LuTag,
    LuEye,
    LuEyeOff,
} from 'react-icons/lu';

const inputClass =
    'mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-body text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20';
const labelClass = 'block text-[11px] font-extrabold uppercase tracking-widest text-gray-500';

export default function BlogEditor({ post = null, tags = [] }) {
    const isEdit = Boolean(post);
    const [preview, setPreview] = useState(post?.image_path || '');
    const form = useForm({
        ...(isEdit ? { _method: 'put' } : {}),
        title: post?.title || '',
        slug: post?.slug || '',
        excerpt: post?.excerpt || '',
        body: post?.body || '',
        image_path: post?.image_path || '',
        image: null,
        is_published: post ? post.is_published : true,
        tag_ids: post?.tags?.map((t) => t.id) || [],
    });

    const { data, setData, errors, processing } = form;

    const pickFile = (e) => {
        const file = e.target.files?.[0] || null;
        setData('image', file);
        if (file) setPreview(URL.createObjectURL(file));
    };

    const toggleTag = (tagId) => {
        const current = new Set(data.tag_ids);
        if (current.has(tagId)) {
            current.delete(tagId);
        } else {
            current.add(tagId);
        }
        setData('tag_ids', Array.from(current));
    };

    const submit = (e) => {
        e.preventDefault();
        const opts = { forceFormData: true };
        if (isEdit) {
            form.post(route('posts.update', post.id), opts);
        } else {
            form.post(route('posts.store'), opts);
        }
    };

    return (
        <AdminLayout
            header={
                <div className="flex min-w-0 items-center gap-3">
                    <Link
                        href={route('admin.blog')}
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-brand-orange hover:text-brand-orange"
                        title="Back to blog list"
                    >
                        <LuArrowLeft className="h-4 w-4" />
                    </Link>
                    <h1 className="truncate text-lg font-bold text-[#07264A]">
                        {isEdit ? 'Edit Post' : 'New Post'}
                        {isEdit && <span className="text-brand-orange"> — {post.title}</span>}
                    </h1>
                </div>
            }
        >
            <Head title={`Admin — ${isEdit ? 'Edit Post' : 'New Post'}`} />

            <div className="mx-auto max-w-3xl">
                <form onSubmit={submit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                    {/* Status badge */}
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest ${
                        isEdit
                            ? post.is_published
                                ? 'bg-emerald-100 text-emerald-700'
                                : 'bg-gray-100 text-gray-500'
                            : 'bg-blue-100 text-blue-700'
                    }`}>
                        {isEdit ? (
                            <>
                                {post.is_published ? <LuEye className="h-3.5 w-3.5" /> : <LuEyeOff className="h-3.5 w-3.5" />}
                                {post.is_published ? 'Published' : 'Draft'}
                            </>
                        ) : (
                            'New Post'
                        )}
                    </span>

                    <div className="mt-6 space-y-6">
                        {/* Title */}
                        <div>
                            <label className={labelClass}>Title</label>
                            <input
                                type="text"
                                autoFocus
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                className={inputClass}
                                placeholder="e.g. 5 Signs Your Furnace Needs Repair"
                            />
                            {errors.title && <p className="mt-1 text-xs font-semibold text-red-500">{errors.title}</p>}
                        </div>

                        {/* Slug */}
                        <div>
                            <label className={labelClass}>Slug (optional — auto-generated from title)</label>
                            <input
                                type="text"
                                value={data.slug}
                                onChange={(e) => setData('slug', e.target.value)}
                                className={inputClass}
                                placeholder="furnace-repair-signs"
                            />
                            {errors.slug && <p className="mt-1 text-xs font-semibold text-red-500">{errors.slug}</p>}
                        </div>

                        {/* Excerpt */}
                        <div>
                            <label className={labelClass}>Excerpt (short summary for the blog listing)</label>
                            <textarea
                                rows={2}
                                value={data.excerpt}
                                onChange={(e) => setData('excerpt', e.target.value)}
                                className={inputClass}
                                placeholder="A one or two sentence teaser…"
                            />
                            {errors.excerpt && <p className="mt-1 text-xs font-semibold text-red-500">{errors.excerpt}</p>}
                        </div>

                        {/* Body — the main content */}
                        <div>
                            <label className={labelClass}>Content</label>
                            <RichTextarea
                                rows={14}
                                value={data.body}
                                onChange={(val) => setData('body', val)}
                                className="mt-1.5"
                                placeholder="Write the article here…"
                            />
                            {errors.body && <p className="mt-1 text-xs font-semibold text-red-500">{errors.body}</p>}
                        </div>

                        {/* Tags */}
                        <div className="space-y-3 border-t border-gray-100 pt-5">
                            <label className={labelClass}>Tags</label>

                            {tags.length === 0 ? (
                                <p className="text-xs text-gray-400">No tags available. Create one first.</p>
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
                                                title={tag.link ? tag.link : undefined}
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

                        {/* Cover image */}
                        <div className="space-y-3 border-t border-gray-100 pt-5">
                            <label className={labelClass}>Cover Image</label>
                            <label className="flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-center transition-colors hover:border-brand-orange hover:bg-brand-orange/[0.03]">
                                <LuUpload className="h-5 w-5 text-gray-400" />
                                <span className="text-sm font-semibold text-gray-600">
                                    {data.image ? data.image.name : 'Click to choose an image'}
                                </span>
                                <span className="text-[11px] text-gray-400">JPG, PNG, WEBP or GIF — up to 5 MB</span>
                                <input type="file" accept="image/*" onChange={pickFile} className="hidden" />
                            </label>
                            {errors.image && <p className="mt-1 text-xs font-semibold text-red-500">{errors.image}</p>}

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
                                    placeholder="/img/cover.webp"
                                />
                                {errors.image_path && <p className="mt-1 text-xs font-semibold text-red-500">{errors.image_path}</p>}
                            </div>

                            {preview && (
                                <div>
                                    <label className={labelClass}>Preview</label>
                                    <img
                                        src={preview}
                                        alt=""
                                        className="mt-1.5 max-h-56 rounded-xl border border-gray-200 object-cover"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Published toggle */}
                        <label className="flex cursor-pointer items-center gap-3 border-t border-gray-100 pt-5">
                            <input
                                type="checkbox"
                                checked={data.is_published}
                                onChange={(e) => setData('is_published', e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange"
                            />
                            <span className="text-sm font-semibold text-[#07264A]">
                                Published <span className="font-normal text-gray-400">— visible on the public blog</span>
                            </span>
                        </label>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center">
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-2.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-brand-orange-dark disabled:opacity-50 sm:w-auto"
                        >
                            <LuCheck className="h-4 w-4" />
                            {processing ? 'Saving…' : isEdit ? 'Save Changes' : 'Publish Post'}
                        </button>
                        <Link
                            href={route('admin.blog')}
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

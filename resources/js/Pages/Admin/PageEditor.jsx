import { useEffect, useRef, useState } from 'react';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import SectionHeading from '@/Components/FrontComponents/SectionHeading';
import RichTextarea from '@/Components/RichTextarea';
import {
    LuPlus,
    LuPencil,
    LuTrash2,
    LuChevronUp,
    LuChevronDown,
    LuExternalLink,
    LuCircleHelp,
    LuCheck,
    LuUpload,
    LuX,
    LuGripVertical,
    LuTag,
} from 'react-icons/lu';

const PAGE_PATH = {
    heating: '/heating',
    cooling: '/cooling',
    plumbing: '/plumbing',
    'indoor-air-quality': '/indoor-air-quality',
    drains: '/drains',
    commercial: '/commercial-hvac',
};

const HEADING_SIZE = 'text-[30px] md:text-[34px]';

const inputClass =
    'mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-body text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20';
const labelClass = 'block text-[11px] font-extrabold uppercase tracking-widest text-gray-500';

/* ------------------------------------------------------------------ *
 * Live (read-only) rendering — mirrors the public ServiceArticle
 * ------------------------------------------------------------------ */

function Paragraphs({ text }) {
    if (!text) return null;

    if (/<[a-z][\s\S]*>/i.test(text)) {
        return (
            <div
                className="mt-6 space-y-4 font-body text-[15px] leading-relaxed text-gray-600 md:text-base [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: text }}
            />
        );
    }

    const paras = text
        .split(/\n\n+/)
        .map((p) => p.trim())
        .filter(Boolean);

    return (
        <div className="mt-6 space-y-4 font-body text-[15px] leading-relaxed text-gray-600 md:text-base">
            {paras.map((p, i) => {
                const dash = p.indexOf(' — ');
                if (dash > 0 && dash < 48 && !/[,.]/.test(p.slice(0, dash))) {
                    return (
                        <p key={i}>
                            <span className="font-bold text-[#07264A]">{p.slice(0, dash)}</span>
                            {p.slice(dash)}
                        </p>
                    );
                }
                return <p key={i}>{p}</p>;
            })}
        </div>
    );
}

function LiveBlock({ block }) {
    if (block.type === 'image') {
        return (
            <div className="overflow-hidden rounded-2xl shadow-xl">
                <img src={block.image_path || '/img/cover.webp'} alt={block.heading || ''} className="h-full w-full object-cover" />
            </div>
        );
    }

    return (
        <section>
            <SectionHeading sizeClass={HEADING_SIZE}>{block.heading}</SectionHeading>
            <Paragraphs text={block.body} />
            {block.image_path && (
                <div className="mt-6 overflow-hidden rounded-2xl shadow-lg">
                    <img src={block.image_path} alt={block.heading || ''} className="h-full w-full object-cover" />
                </div>
            )}
        </section>
    );
}

/* ------------------------------------------------------------------ *
 * Inline editor — opens in place when a block is clicked
 * ------------------------------------------------------------------ */

function InlineEditor({ block, page, tags, onDone }) {
    const [preview, setPreview] = useState(block.image_path || '');
    const form = useForm({
        _method: 'put',
        page,
        type: block.type,
        heading: block.heading || '',
        body: block.body || '',
        image_path: block.image_path || '',
        image: null,
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

    const labels = {
        section: { heading: 'Section Title', body: 'Content' },
        image: { heading: 'Image Alt Text', body: null },
    }[block.type] || { heading: 'Heading', body: 'Body' };

    const pickFile = (e) => {
        const file = e.target.files?.[0] || null;
        setData('image', file);
        if (file) setPreview(URL.createObjectURL(file));
    };

    const submit = (e) => {
        e.preventDefault();
        form.post(route('content-blocks.update', block.id), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: onDone,
        });
    };

    return (
        <form onSubmit={submit} className="space-y-5">
            <div>
                <label className={labelClass}>{labels.heading}</label>
                <input
                    type="text"
                    autoFocus
                    value={data.heading}
                    onChange={(e) => setData('heading', e.target.value)}
                    className={inputClass}
                />
                {errors.heading && <p className="mt-1 text-xs font-semibold text-red-500">{errors.heading}</p>}
            </div>

            {labels.body && (
                <div>
                    <label className={labelClass}>{labels.body}</label>
                    <RichTextarea
                        rows={8}
                        value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                        className="mt-1.5"
                    />
                    {errors.body && <p className="mt-1 text-xs font-semibold text-red-500">{errors.body}</p>}
                </div>
            )}

            {/* Add Image — for image blocks, and optional on sections */}
            <div className="space-y-3 border-t border-gray-100 pt-4">
                <label className={labelClass}>
                    {block.type === 'image' ? 'Image' : 'Add an Image (optional)'}
                </label>
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
                {preview && <img src={preview} alt="" className="max-h-40 rounded-xl border border-gray-200 object-cover" />}
            </div>

            {/* Tags */}
            <div className="space-y-3 border-t border-gray-100 pt-4">
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
            </div>

            <div className="flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center">
                <button
                    type="submit"
                    disabled={processing}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-brand-orange-dark disabled:opacity-50 sm:w-auto"
                >
                    <LuCheck className="h-4 w-4" />
                    {processing ? 'Saving…' : 'Save'}
                </button>
                <button
                    type="button"
                    onClick={onDone}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-gray-600 transition-colors hover:bg-gray-100 sm:w-auto"
                >
                    <LuX className="h-4 w-4" />
                    Cancel
                </button>
            </div>
        </form>
    );
}

/* ------------------------------------------------------------------ *
 * Editable block — live preview that turns into the editor on click
 * ------------------------------------------------------------------ */

function EditableBlock({
    block,
    page,
    tags,
    index,
    total,
    editing,
    moving,
    moveActive,
    onClick,
    onDoubleClick,
    onDone,
    onDelete,
    onMove,
}) {
    const border = moving
        ? 'border-brand-orange ring-2 ring-brand-orange/40 shadow-lg'
        : editing
        ? 'border-brand-orange ring-2 ring-brand-orange/20'
        : moveActive
        ? 'border-dashed border-brand-orange/50 hover:border-brand-orange hover:ring-2 hover:ring-brand-orange/30'
        : 'border-gray-200 hover:border-brand-orange/50 hover:shadow-md';

    return (
        <div className={`group relative rounded-2xl border bg-white p-6 shadow-sm transition-all sm:p-8 ${border}`}>
            {/* Block action toolbar — always visible so it works on touch devices */}
            <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5">
                {/* Grab handle — double-tap to pick up */}
                <button
                    type="button"
                    onClick={() => onDoubleClick(block, index)}
                    className={`flex h-9 w-9 items-center justify-center rounded-lg border shadow-sm transition-colors sm:h-8 sm:w-8 ${
                        moving ? 'border-brand-orange bg-brand-orange text-white' : 'border-gray-200 bg-white text-gray-400 hover:border-brand-orange hover:text-brand-orange'
                    }`}
                    title="Pick up / drop"
                >
                    <LuGripVertical className="h-4 w-4" />
                </button>
                <button
                    type="button"
                    onClick={() => onMove(index, -1)}
                    disabled={index === 0}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:border-brand-orange hover:text-brand-orange disabled:cursor-not-allowed disabled:opacity-30 sm:h-8 sm:w-8"
                    title="Move up"
                >
                    <LuChevronUp className="h-4 w-4" />
                </button>
                <button
                    type="button"
                    onClick={() => onMove(index, 1)}
                    disabled={index === total - 1}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:border-brand-orange hover:text-brand-orange disabled:cursor-not-allowed disabled:opacity-30 sm:h-8 sm:w-8"
                    title="Move down"
                >
                    <LuChevronDown className="h-4 w-4" />
                </button>
                <button
                    type="button"
                    onClick={() => onDelete(block)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:border-red-400 hover:text-red-500 sm:h-8 sm:w-8"
                    title="Delete"
                >
                    <LuTrash2 className="h-4 w-4" />
                </button>
            </div>

            {editing ? (
                <InlineEditor block={block} page={page} tags={tags} onDone={onDone} />
            ) : (
                <button
                    type="button"
                    onClick={() => onClick(block, index)}
                    onDoubleClick={() => onDoubleClick(block, index)}
                    className="block w-full text-left"
                >
                    <LiveBlock block={block} />
                    <span
                        className={`mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest transition-colors ${
                            moving
                                ? 'bg-brand-orange text-white'
                                : moveActive
                                ? 'bg-brand-orange/10 text-brand-orange'
                                : 'bg-gray-100 text-gray-500 group-hover:bg-brand-orange group-hover:text-white'
                        }`}
                    >
                        {moving ? (
                            <>
                                <LuGripVertical className="h-3 w-3" />
                                Moving — tap a spot to drop
                            </>
                        ) : moveActive ? (
                            <>
                                <LuChevronUp className="h-3 w-3" />
                                Tap to drop here
                            </>
                        ) : (
                            <>
                                <LuPencil className="h-3 w-3" />
                                Tap to edit · double-tap to move
                            </>
                        )}
                    </span>
                </button>
            )}
        </div>
    );
}

/* ------------------------------------------------------------------ *
 * Add Section modal
 * ------------------------------------------------------------------ */

function AddSectionModal({ page, tags, onClose }) {
    const [preview, setPreview] = useState('');
    const form = useForm({
        page,
        type: 'section',
        heading: '',
        body: '',
        image: null,
        tag_ids: [],
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
        if (file) setPreview(URL.createObjectURL(file));
    };

    const submit = (e) => {
        e.preventDefault();
        form.post(route('content-blocks.store'), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: onClose,
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-8">
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />

            <div className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
                <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl uppercase text-[#07264A]">Add Section</h2>
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
                        <label className={labelClass}>Section Title</label>
                        <input
                            type="text"
                            autoFocus
                            value={data.heading}
                            onChange={(e) => setData('heading', e.target.value)}
                            className={inputClass}
                            placeholder="e.g. Why Maintenance Is Important"
                        />
                        {errors.heading && <p className="mt-1 text-xs font-semibold text-red-500">{errors.heading}</p>}
                    </div>

                    <div>
                        <label className={labelClass}>Content</label>
                        <RichTextarea
                            rows={8}
                            value={data.body}
                            onChange={(e) => setData('body', e.target.value)}
                            className="mt-1.5"
                            placeholder="Write the section content here…"
                        />
                        {errors.body && <p className="mt-1 text-xs font-semibold text-red-500">{errors.body}</p>}
                    </div>

                    <div className="space-y-3 border-t border-gray-100 pt-5">
                        <label className={labelClass}>Add an Image (optional)</label>
                        <label className="flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-3 py-4 text-center transition-colors hover:border-brand-orange hover:bg-brand-orange/[0.03]">
                            <LuUpload className="h-4 w-4 text-gray-400" />
                            <span className="text-xs font-semibold text-gray-600">
                                {data.image ? data.image.name : 'Click to choose an image'}
                            </span>
                            <span className="text-[11px] text-gray-400">JPG, PNG, WEBP or GIF — up to 5 MB</span>
                            <input type="file" accept="image/*" onChange={pickFile} className="hidden" />
                        </label>
                        {errors.image && <p className="mt-1 text-xs font-semibold text-red-500">{errors.image}</p>}
                        {preview && <img src={preview} alt="" className="max-h-36 rounded-xl border border-gray-200 object-cover" />}
                    </div>

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
                    </div>

                    <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center">
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-2.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-brand-orange-dark disabled:opacity-50 sm:w-auto"
                        >
                            <LuPlus className="h-4 w-4" />
                            {processing ? 'Adding…' : 'Add Section'}
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
 * Page editor
 * ------------------------------------------------------------------ */

export default function PageEditor({ page, label, blocks = [], tags = [] }) {
    const flash = usePage().props.flash;
    const [adding, setAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);

    // FAQs are managed on their own page; show only sections/images here.
    // Local order state so drag/move reorders feel instant before the server confirms.
    const [order, setOrder] = useState(() => blocks.filter((b) => b.type !== 'faq'));
    const faqCount = blocks.filter((b) => b.type === 'faq').length;

    // Resync when the server returns a new set of blocks (after save/add/delete).
    useEffect(() => {
        setOrder(blocks.filter((b) => b.type !== 'faq'));
    }, [blocks]);

    // The block currently "picked up" for repositioning (double-tap to pick up).
    const [movingId, setMovingId] = useState(null);
    const clickTimer = useRef(null);

    // Cancel move-mode with Escape.
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') setMovingId(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const persist = (list) => {
        router.post(route('content-blocks.reorder'), { ids: list.map((b) => b.id) }, { preserveScroll: true });
    };

    const remove = (block) => {
        if (!window.confirm('Delete this block? This cannot be undone.')) return;
        router.delete(route('content-blocks.destroy', block.id), { preserveScroll: true });
    };

    const move = (index, dir) => {
        const target = index + dir;
        if (target < 0 || target >= order.length) return;
        const list = [...order];
        [list[index], list[target]] = [list[target], list[index]];
        setOrder(list);
        persist(list);
    };

    // Move the picked-up block to a target index, then persist.
    const dropAt = (targetIndex) => {
        const from = order.findIndex((b) => b.id === movingId);
        if (from === -1 || from === targetIndex) {
            setMovingId(null);
            return;
        }
        const list = [...order];
        const [moved] = list.splice(from, 1);
        list.splice(targetIndex, 0, moved);
        setOrder(list);
        persist(list);
        setMovingId(null);
    };

    // Single tap: edit, or drop here if a block is picked up.
    const handleClick = (block, index) => {
        if (movingId) {
            dropAt(index);
            return;
        }
        // Wait briefly to see if this becomes a double-tap.
        if (clickTimer.current) return;
        clickTimer.current = setTimeout(() => {
            clickTimer.current = null;
            setEditingId(block.id);
        }, 220);
    };

    // Double tap: pick the block up (or drop it if already moving).
    const handleDoubleClick = (block) => {
        if (clickTimer.current) {
            clearTimeout(clickTimer.current);
            clickTimer.current = null;
        }
        setEditingId(null);
        setMovingId((cur) => (cur === block.id ? null : block.id));
    };

    return (
        <AdminLayout
            header={
                <div className="flex items-center gap-3">
                    <h1 className="text-lg font-bold text-[#07264A]">
                        Editing: <span className="text-brand-orange">{label}</span>
                    </h1>
                </div>
            }
        >
            <Head title={`Admin — Edit ${label}`} />

            {/* Flash confirmation */}
            {flash?.status && (
                <div className="mb-6 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700">
                    <LuCheck className="h-4 w-4" />
                    {flash.status}
                </div>
            )}

            {/* Toolbar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div>
                    <p className="text-sm font-bold text-[#07264A]">Live page content</p>
                    <p className="text-xs text-gray-400">Click any section to edit it, or add an image.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <button
                        type="button"
                        onClick={() => setAdding(true)}
                        className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-widest text-white shadow-sm transition-colors hover:bg-brand-orange-dark"
                    >
                        <LuPlus className="h-4 w-4" />
                        Add Section
                    </button>
                    <a
                        href={PAGE_PATH[page] || '/'}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-widest text-gray-600 transition-colors hover:bg-gray-100"
                    >
                        <LuExternalLink className="h-3.5 w-3.5" />
                        View Page
                    </a>
                </div>
            </div>

            {/* Move-mode banner */}
            {movingId && (
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-orange/40 bg-brand-orange/[0.06] px-5 py-3">
                    <p className="flex items-center gap-2 text-sm font-bold text-brand-orange">
                        <LuGripVertical className="h-4 w-4" />
                        Moving a section — tap where you want it to go.
                    </p>
                    <button
                        type="button"
                        onClick={() => setMovingId(null)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-brand-orange/40 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-brand-orange transition-colors hover:bg-brand-orange hover:text-white"
                    >
                        <LuX className="h-3.5 w-3.5" />
                        Cancel
                    </button>
                </div>
            )}

            {/* Live, editable content */}
            {order.length === 0 ? (
                <div className="rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center">
                    <p className="text-sm font-semibold text-gray-400">No content yet. Add a section above to get started.</p>
                </div>
            ) : (
                <div className="space-y-5">
                    {order.map((block, i) => (
                        <EditableBlock
                            key={block.id}
                            block={block}
                            page={page}
                            tags={tags}
                            index={i}
                            total={order.length}
                            editing={editingId === block.id}
                            moving={movingId === block.id}
                            moveActive={movingId !== null && movingId !== block.id}
                            onClick={handleClick}
                            onDoubleClick={handleDoubleClick}
                            onDone={() => setEditingId(null)}
                            onDelete={remove}
                            onMove={move}
                        />
                    ))}
                </div>
            )}

            {/* FAQs — managed on their own page */}
            <Link
                href={route('admin.faqs', page)}
                className="mt-5 flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <LuCircleHelp className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                    <p className="font-display text-lg uppercase text-[#07264A]">FAQs</p>
                    <p className="text-xs font-semibold text-gray-400">
                        {faqCount} question{faqCount === 1 ? '' : 's'} — click to add or edit
                    </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-4 py-2 text-[11px] font-extrabold uppercase tracking-widest text-white">
                    <LuPencil className="h-3.5 w-3.5" />
                    Manage
                </span>
            </Link>

            {adding && <AddSectionModal page={page} tags={tags} onClose={() => setAdding(false)} />}
        </AdminLayout>
    );
}

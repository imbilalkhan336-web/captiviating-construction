﻿import { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import SectionHeading from '@/Components/FrontComponents/SectionHeading';
import ScheduleForm from '@/Components/FrontComponents/ScheduleForm';
import RichTextarea from '@/Components/RichTextarea';
import {
    LuCheck,
    LuPencil,
    LuTrash2,
    LuPlus,
    LuChevronUp,
    LuChevronDown,
    LuX,
    LuTag,
    LuExternalLink,
} from 'react-icons/lu';

const inputClass =
    'mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-body text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20';
const labelClass = 'block text-[11px] font-extrabold uppercase tracking-widest text-gray-500';

/* ------------------------------------------------------------------ *
 * Read-only rendering
 * ------------------------------------------------------------------ */

// Section body: blank-line-separated paragraphs, with a bold lead-in for
// "Term  -  explanation" lines so the article keeps its styled look.
function Paragraphs({ text }) {
    if (!text) return null;

    // Content produced by the WYSIWYG editor (or previously converted)
    if (/<[a-z][\s\S]*>/i.test(text)) {
        return (
            <div
                className="mt-6 space-y-4 font-montserrat text-[16px] font-normal leading-[26px] text-black md:text-base [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: text }}
            />
        );
    }

    // Legacy plain-text fallback
    const paras = text
        .split(/\n\n+/)
        .map((p) => p.trim())
        .filter(Boolean);

    return (
        <div className="mt-6 space-y-4 font-montserrat text-[16px] font-normal leading-[26px] text-black md:text-base">
            {paras.map((p, i) => {
                const dash = p.indexOf('  -  ');
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

function ArticleBlock({ block, headingSizeClass }) {
    if (block.type === 'image') {
        return (
            <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                    src={block.image_path || '/img/heating.webp'}
                    alt={block.heading || 'Captivating Construction Group HVAC and plumbing service in New Jersey'}
                    className="h-full w-full object-cover"
                />
            </div>
        );
    }

    return (
        <section>
            <SectionHeading sizeClass={headingSizeClass}>{block.heading}</SectionHeading>
            <Paragraphs text={block.body} />
            {block.image_path && (
                <div className="mt-6 overflow-hidden rounded-2xl shadow-lg">
                    <img src={block.image_path} alt={block.heading || 'Captivating Construction Group HVAC and plumbing service in New Jersey'} className="h-full w-full object-cover" />
                </div>
            )}
            {block.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {block.tags.map((tag) =>
                        tag.link ? (
                            <a
                                key={tag.id}
                                href={tag.link}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-brand-orange hover:text-white"
                            >
                                {tag.image_path && <img src={tag.image_path} alt="" className="h-4 w-4 rounded-full object-cover" />}
                                {tag.name}
                                <LuExternalLink className="h-3 w-3 opacity-70" />
                            </a>
                        ) : (
                            <span
                                key={tag.id}
                                className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600"
                            >
                                {tag.image_path && <img src={tag.image_path} alt="" className="h-4 w-4 rounded-full object-cover" />}
                                {tag.name}
                            </span>
                        )
                    )}
                </div>
            )}
        </section>
    );
}

function FaqItem({ question, answer, isOpen, onToggle }) {
    return (
        <div
            className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all ${
                isOpen ? 'border-brand-orange/40 shadow-md' : 'border-gray-200 hover:shadow-md'
            }`}
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
            >
                <span className={`flex-shrink-0 text-brand-orange transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                </span>
                <span aria-hidden="true" className="h-6 w-px flex-shrink-0 bg-gray-200" />
                <span className="font-body text-sm font-bold text-[#07264A] md:text-[15px]">{question}</span>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    {/<[a-z][\s\S]*>/i.test(answer) ? (
                        <div
                            className="pb-4 pl-[56px] pr-5 font-body text-[14px] leading-relaxed text-gray-600 [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline"
                            dangerouslySetInnerHTML={{ __html: answer }}
                        />
                    ) : (
                        <p className="pb-4 pl-[56px] pr-5 font-body text-[14px] leading-relaxed text-gray-600">
                            {answer}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ *
 * Admin editing
 * ------------------------------------------------------------------ */

function BlockForm({ block, tags, onSave, onCancel, saving }) {
    const [heading, setHeading] = useState(block.heading || '');
    const [body, setBody] = useState(block.body || '');
    const [imagePath, setImagePath] = useState(block.image_path || '');
    const [selectedTagIds, setSelectedTagIds] = useState(block.tags?.map((t) => t.id) || []);

    const labels = {
        section: { heading: 'Section Title', body: 'Content' },
        faq: { heading: 'Question', body: 'Answer' },
        image: { heading: 'Image Alt Text', body: null },
    }[block.type] || { heading: 'Heading', body: 'Body' };

    const toggleTag = (tagId) => {
        setSelectedTagIds((prev) =>
            prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
        );
    };

    const submit = (e) => {
        e.preventDefault();
        onSave({ heading, body, image_path: imagePath, tag_ids: selectedTagIds });
    };

    return (
        <form onSubmit={submit} className="rounded-2xl border-2 border-dashed border-brand-orange/50 bg-brand-orange/[0.03] p-5">
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-widest text-brand-orange">
                Editing {block.type} block
            </p>

            <div className="space-y-4">
                <div>
                    <label className={labelClass}>{labels.heading}</label>
                    <input type="text" value={heading} onChange={(e) => setHeading(e.target.value)} className={inputClass} />
                </div>

                {block.type === 'image' && (
                    <div>
                        <label className={labelClass}>Image Path / URL</label>
                        <input
                            type="text"
                            value={imagePath}
                            onChange={(e) => setImagePath(e.target.value)}
                            className={inputClass}
                            placeholder="/img/heating.webp"
                        />
                        {imagePath && <img src={imagePath} alt="" className="mt-3 max-h-40 rounded-lg object-cover" />}
                    </div>
                )}

                {labels.body && (
                    <div>
                        <label className={labelClass}>{labels.body}</label>
                        <RichTextarea
                            rows={block.type === 'faq' ? 4 : 7}
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            className="mt-1.5"
                        />
                    </div>
                )}

                {tags.length > 0 && (
                    <div className="border-t border-gray-100 pt-4">
                        <label className={labelClass}>Tags</label>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {tags.map((tag) => {
                                const selected = selectedTagIds.includes(tag.id);
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
                    </div>
                )}
            </div>

            <div className="mt-4 flex items-center gap-3">
                <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-brand-orange-dark disabled:opacity-50"
                >
                    <LuCheck className="h-4 w-4" />
                    Save
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-gray-600 transition-colors hover:bg-gray-100"
                >
                    <LuX className="h-4 w-4" />
                    Cancel
                </button>
            </div>
        </form>
    );
}

function BlockToolbar({ onEdit, onDelete, onUp, onDown, isFirst, isLast }) {
    const btn = 'flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:border-brand-orange hover:text-brand-orange disabled:cursor-not-allowed disabled:opacity-30';
    return (
        <div className="mb-3 flex items-center gap-2">
            <button type="button" onClick={onUp} disabled={isFirst} className={btn} title="Move up">
                <LuChevronUp className="h-4 w-4" />
            </button>
            <button type="button" onClick={onDown} disabled={isLast} className={btn} title="Move down">
                <LuChevronDown className="h-4 w-4" />
            </button>
            <button type="button" onClick={onEdit} className={btn} title="Edit">
                <LuPencil className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={onDelete}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:border-red-400 hover:text-red-500"
                title="Delete"
            >
                <LuTrash2 className="h-4 w-4" />
            </button>
        </div>
    );
}

/* ------------------------------------------------------------------ *
 * ServiceArticle  -  shared two-column article + editor + sticky form
 * ------------------------------------------------------------------ */

export default function ServiceArticle({ page, blocks = [], tags = [], metaLabel = 'Service Guide', faqEyebrow, headingSizeClass, formHeadingClassName = '' }) {
    const { auth } = usePage().props;
    const isAdmin = Boolean(auth?.user?.is_admin);

    const [editing, setEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [saving, setSaving] = useState(false);
    const [openFaq, setOpenFaq] = useState(-1);

    const articleBlocks = blocks.filter((b) => b.type !== 'faq');
    const faqBlocks = blocks.filter((b) => b.type === 'faq');

    const saveBlock = (block, data) => {
        setSaving(true);
        router.put(`/content-blocks/${block.id}`, { page, type: block.type, ...data }, {
            preserveScroll: true,
            onSuccess: () => setEditingId(null),
            onFinish: () => setSaving(false),
        });
    };

    const deleteBlock = (block) => {
        if (!window.confirm('Delete this block? This cannot be undone.')) return;
        router.delete(`/content-blocks/${block.id}`, { preserveScroll: true });
    };

    const addBlock = (type) => {
        const defaults = {
            section: { heading: 'New Section', body: 'Add your content here.' },
            faq: { heading: 'New question?', body: 'Add the answer here.' },
            image: { heading: 'Describe the image', image_path: '/img/heating.webp' },
        }[type];
        router.post('/content-blocks', { page, type, ...defaults }, { preserveScroll: true });
    };

    // Reorder within a sub-list, keeping article and faq groups grouped.
    const move = (which, index, dir) => {
        const list = which === 'article' ? [...articleBlocks] : [...faqBlocks];
        const target = index + dir;
        if (target < 0 || target >= list.length) return;
        [list[index], list[target]] = [list[target], list[index]];
        const ordered = which === 'article' ? [...list, ...faqBlocks] : [...articleBlocks, ...list];
        router.post('/content-blocks/reorder', { ids: ordered.map((b) => b.id) }, { preserveScroll: true });
    };

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 px-5 py-16 sm:px-6 lg:px-4 lg:py-24">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                        {/* Article content */}
                        <div className="lg:col-span-7">
                            {/* Article blocks */}
                            <div className="space-y-12 lg:space-y-16">
                                {articleBlocks.map((block, i) => (
                                    <div key={block.id}>
                                        {editing && (
                                            <BlockToolbar
                                                onEdit={() => setEditingId(block.id)}
                                                onDelete={() => deleteBlock(block)}
                                                onUp={() => move('article', i, -1)}
                                                onDown={() => move('article', i, 1)}
                                                isFirst={i === 0}
                                                isLast={i === articleBlocks.length - 1}
                                            />
                                        )}
                                        {editing && editingId === block.id ? (
                                            <BlockForm
                                                block={block}
                                                tags={tags}
                                                saving={saving}
                                                onSave={(data) => saveBlock(block, data)}
                                                onCancel={() => setEditingId(null)}
                                            />
                                        ) : (
                                            <ArticleBlock block={block} headingSizeClass={headingSizeClass} />
                                        )}
                                    </div>
                                ))}
                            </div>

                            {editing && (
                                <div className="mt-8 flex flex-wrap gap-3 rounded-2xl border-2 border-dashed border-gray-200 p-4">
                                    <span className="self-center text-[11px] font-extrabold uppercase tracking-widest text-gray-400">
                                        Add block:
                                    </span>
                                    {['section', 'image'].map((t) => (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => addBlock(t)}
                                            className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-2 text-[11px] font-extrabold uppercase tracking-widest text-gray-700 transition-colors hover:bg-brand-orange hover:text-white"
                                        >
                                            <LuPlus className="h-3.5 w-3.5" />
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            )}

                            {/* Frequently Asked Questions */}
                            <section className="mt-16 lg:mt-20">
                                {faqEyebrow && (
                                    <p className="mb-[12px] text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-blue-light">
                                        {faqEyebrow}
                                    </p>
                                )}
                                <SectionHeading sizeClass={headingSizeClass}>Frequently Asked Questions</SectionHeading>
                                <div className="mt-8 space-y-3">
                                    {faqBlocks.map((block, i) => (
                                        <div key={block.id}>
                                            {editing && (
                                                <BlockToolbar
                                                    onEdit={() => setEditingId(block.id)}
                                                    onDelete={() => deleteBlock(block)}
                                                    onUp={() => move('faq', i, -1)}
                                                    onDown={() => move('faq', i, 1)}
                                                    isFirst={i === 0}
                                                    isLast={i === faqBlocks.length - 1}
                                                />
                                            )}
                                            {editing && editingId === block.id ? (
                                                <BlockForm
                                                    block={block}
                                                    tags={tags}
                                                    saving={saving}
                                                    onSave={(data) => saveBlock(block, data)}
                                                    onCancel={() => setEditingId(null)}
                                                />
                                            ) : (
                                                <FaqItem
                                                    question={block.heading}
                                                    answer={block.body}
                                                    isOpen={openFaq === block.id}
                                                    onToggle={() => setOpenFaq(openFaq === block.id ? -1 : block.id)}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {editing && (
                                    <button
                                        type="button"
                                        onClick={() => addBlock('faq')}
                                        className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-2 text-[11px] font-extrabold uppercase tracking-widest text-gray-700 transition-colors hover:bg-brand-orange hover:text-white"
                                    >
                                        <LuPlus className="h-3.5 w-3.5" />
                                        Add FAQ
                                    </button>
                                )}
                            </section>
                        </div>

                        {/* Sticky Schedule Online form */}
                        <aside className="lg:col-span-5">
                            <div className="lg:sticky lg:top-24">
                                <ScheduleForm headingClassName={formHeadingClassName} />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
}

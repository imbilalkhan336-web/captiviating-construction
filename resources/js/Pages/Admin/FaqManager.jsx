import { useState } from 'react';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import RichTextarea from '@/Components/RichTextarea';
import {
    LuArrowLeft,
    LuPlus,
    LuPencil,
    LuTrash2,
    LuChevronUp,
    LuChevronDown,
    LuCircleHelp,
    LuCheck,
    LuX,
} from 'react-icons/lu';

const inputClass =
    'mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-body text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20';
const labelClass = 'block text-[11px] font-extrabold uppercase tracking-widest text-gray-500';

// Modal that collects a new FAQ's question + answer before creating it.
function AddFaqModal({ page, onClose }) {
    const form = useForm({
        page,
        type: 'faq',
        heading: '',
        body: '',
    });
    const { data, setData, errors, processing } = form;

    const submit = (e) => {
        e.preventDefault();
        form.post(route('content-blocks.store'), {
            preserveScroll: true,
            onSuccess: onClose,
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-8">
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />

            <div className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
                <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl uppercase text-[#07264A]">Add FAQ</h2>
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
                        <label className={labelClass}>Question</label>
                        <input
                            type="text"
                            autoFocus
                            value={data.heading}
                            onChange={(e) => setData('heading', e.target.value)}
                            className={inputClass}
                            placeholder="e.g. How often should I service my furnace?"
                        />
                        {errors.heading && <p className="mt-1 text-xs font-semibold text-red-500">{errors.heading}</p>}
                    </div>

                    <div>
                        <label className={labelClass}>Answer</label>
                        <RichTextarea
                            rows={5}
                            value={data.body}
                            onChange={(e) => setData('body', e.target.value)}
                            className="mt-1.5"
                            placeholder="Write the answer here…"
                        />
                        {errors.body && <p className="mt-1 text-xs font-semibold text-red-500">{errors.body}</p>}
                    </div>

                    <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center">
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-2.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-brand-orange-dark disabled:opacity-50 sm:w-auto"
                        >
                            <LuPlus className="h-4 w-4" />
                            {processing ? 'Adding…' : 'Add FAQ'}
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

export default function FaqManager({ page, label, faqs = [] }) {
    const flash = usePage().props.flash;
    const [adding, setAdding] = useState(false);

    const backTo = route('admin.pages.edit', page);

    const remove = (faq) => {
        if (!window.confirm('Delete this FAQ? This cannot be undone.')) return;
        router.delete(route('content-blocks.destroy', faq.id), { preserveScroll: true });
    };

    const move = (index, dir) => {
        const target = index + dir;
        if (target < 0 || target >= faqs.length) return;
        const order = faqs.map((f) => f.id);
        [order[index], order[target]] = [order[target], order[index]];
        router.post(route('content-blocks.reorder'), { ids: order }, { preserveScroll: true });
    };

    return (
        <AdminLayout
            header={
                <div className="flex min-w-0 items-center gap-3">
                    <Link
                        href={backTo}
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-brand-orange hover:text-brand-orange"
                        title="Back to page"
                    >
                        <LuArrowLeft className="h-4 w-4" />
                    </Link>
                    <h1 className="truncate text-lg font-bold text-[#07264A]">
                        FAQs <span className="text-brand-orange">— {label}</span>
                    </h1>
                </div>
            }
        >
            <Head title={`Admin — ${label} FAQs`} />

            {/* Flash confirmation */}
            {flash?.status && (
                <div className="mb-6 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700">
                    <LuCheck className="h-4 w-4" />
                    {flash.status}
                </div>
            )}

            {/* Toolbar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-gray-500">
                    {faqs.length} question{faqs.length === 1 ? '' : 's'} on this page
                </p>
                <button
                    type="button"
                    onClick={() => setAdding(true)}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-widest text-white shadow-sm transition-colors hover:bg-brand-orange-dark"
                >
                    <LuPlus className="h-4 w-4" />
                    Add FAQ
                </button>
            </div>

            {/* FAQ list */}
            {faqs.length === 0 ? (
                <div className="rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center">
                    <p className="text-sm font-semibold text-gray-400">No FAQs yet. Add one above to get started.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={faq.id} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                                <div className="flex min-w-0 flex-1 items-start gap-3">
                                    <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                                        <LuCircleHelp className="h-5 w-5" />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-bold text-[#07264A]">{faq.heading}</p>
                                        {faq.body && (
                                            <p
                                                className="mt-1 line-clamp-2 text-sm leading-relaxed text-gray-500 [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline"
                                                dangerouslySetInnerHTML={{ __html: faq.body }}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-shrink-0 items-center gap-1.5 self-end sm:self-auto">
                                    <button
                                        type="button"
                                        onClick={() => move(i, -1)}
                                        disabled={i === 0}
                                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-brand-orange hover:text-brand-orange disabled:cursor-not-allowed disabled:opacity-30"
                                        title="Move up"
                                    >
                                        <LuChevronUp className="h-4 w-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => move(i, 1)}
                                        disabled={i === faqs.length - 1}
                                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-brand-orange hover:text-brand-orange disabled:cursor-not-allowed disabled:opacity-30"
                                        title="Move down"
                                    >
                                        <LuChevronDown className="h-4 w-4" />
                                    </button>
                                    <Link
                                        href={route('admin.blocks.edit', [page, faq.id])}
                                        className="flex h-8 items-center gap-1.5 rounded-lg border border-gray-200 px-3 text-xs font-extrabold uppercase tracking-widest text-gray-500 transition-colors hover:border-brand-orange hover:text-brand-orange"
                                        title="Edit"
                                    >
                                        <LuPencil className="h-3.5 w-3.5" />
                                        Edit
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => remove(faq)}
                                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-red-400 hover:text-red-500"
                                        title="Delete"
                                    >
                                        <LuTrash2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {adding && <AddFaqModal page={page} onClose={() => setAdding(false)} />}
        </AdminLayout>
    );
}

import { useState } from 'react';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import RichTextarea from '@/Components/RichTextarea';
import {
    LuPlus,
    LuPencil,
    LuTrash2,
    LuCheck,
    LuX,
    LuStar,
    LuMessageSquare,
    LuEye,
    LuEyeOff,
} from 'react-icons/lu';

const inputClass =
    'mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-body text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20';
const labelClass = 'block text-[11px] font-extrabold uppercase tracking-widest text-gray-500';

const AVATAR_COLORS = [
    'bg-emerald-600',
    'bg-emerald-500',
    'bg-rose-600',
    'bg-slate-700',
    'bg-teal-600',
    'bg-indigo-600',
    'bg-orange-500',
    'bg-cyan-600',
    'bg-purple-600',
    'bg-amber-600',
    'bg-pink-600',
    'bg-blue-700',
];

function StarRating({ rating, onChange }) {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    onClick={() => onChange(star)}
                    className={`transition-colors ${star <= rating ? 'text-brand-yellow' : 'text-gray-300 hover:text-brand-yellow/50'}`}
                >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </button>
            ))}
        </div>
    );
}

function ReviewModal({ review, onClose }) {
    const isEdit = Boolean(review);

    const form = useForm({
        ...(isEdit ? { _method: 'put' } : {}),
        name: review?.name || '',
        body: review?.body || '',
        rating: review?.rating || 5,
        avatar_color: review?.avatar_color || AVATAR_COLORS[0],
        is_published: review ? review.is_published : true,
    });
    const { data, setData, errors, processing } = form;

    const submit = (e) => {
        e.preventDefault();
        const opts = { preserveScroll: true, onSuccess: onClose };
        if (isEdit) {
            form.post(route('reviews.update', review.id), opts);
        } else {
            form.post(route('reviews.store'), opts);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-8">
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />

            <div className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
                <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl uppercase text-[#07264A]">
                        {isEdit ? 'Edit Review' : 'New Review'}
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
                        <label className={labelClass}>Reviewer Name</label>
                        <input
                            type="text"
                            autoFocus
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className={inputClass}
                            placeholder="e.g. John Smith"
                        />
                        {errors.name && <p className="mt-1 text-xs font-semibold text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                        <label className={labelClass}>Rating</label>
                        <div className="mt-2">
                            <StarRating rating={data.rating} onChange={(r) => setData('rating', r)} />
                        </div>
                        {errors.rating && <p className="mt-1 text-xs font-semibold text-red-500">{errors.rating}</p>}
                    </div>

                    <div>
                        <label className={labelClass}>Review Text</label>
                        <RichTextarea
                            rows={5}
                            value={data.body}
                            onChange={(e) => setData('body', e.target.value)}
                            className="mt-1.5"
                            placeholder="Write the review here…"
                        />
                        {errors.body && <p className="mt-1 text-xs font-semibold text-red-500">{errors.body}</p>}
                    </div>

                    <div>
                        <label className={labelClass}>Avatar Color</label>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {AVATAR_COLORS.map((color) => (
                                <button
                                    key={color}
                                    type="button"
                                    onClick={() => setData('avatar_color', color)}
                                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white transition-all ${color} ${
                                        data.avatar_color === color ? 'ring-2 ring-offset-2 ring-brand-orange scale-110' : 'hover:scale-105'
                                    }`}
                                >
                                    A
                                </button>
                            ))}
                        </div>
                        {errors.avatar_color && <p className="mt-1 text-xs font-semibold text-red-500">{errors.avatar_color}</p>}
                    </div>

                    <label className="flex cursor-pointer items-center gap-3 border-t border-gray-100 pt-5">
                        <input
                            type="checkbox"
                            checked={data.is_published}
                            onChange={(e) => setData('is_published', e.target.checked)}
                            className="h-4 w-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange"
                        />
                        <span className="text-sm font-semibold text-[#07264A]">
                            Published <span className="font-normal text-gray-400">— visible on the website</span>
                        </span>
                    </label>

                    <div className="flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center">
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-2.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-sm transition-all hover:bg-brand-orange-dark disabled:opacity-50 sm:w-auto"
                        >
                            <LuCheck className="h-4 w-4" />
                            {processing ? 'Saving…' : isEdit ? 'Save Changes' : 'Add Review'}
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

export default function ReviewManager({ reviews = [] }) {
    const flash = usePage().props.flash;
    const [modal, setModal] = useState(null);

    const remove = (review) => {
        if (!window.confirm(`Delete review from "${review.name}"? This cannot be undone.`)) return;
        router.delete(route('reviews.destroy', review.id), { preserveScroll: true });
    };

    const formatDate = (value) => {
        if (!value) return '';
        return new Date(value).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    return (
        <AdminLayout header={<h1 className="text-lg font-bold text-[#07264A]">Reviews</h1>}>
            <Head title="Admin — Reviews" />

            {flash?.status && (
                <div className="mb-6 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700">
                    <LuCheck className="h-4 w-4" />
                    {flash.status}
                </div>
            )}

            {/* Toolbar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div>
                    <p className="text-sm font-bold text-[#07264A]">Manage customer reviews</p>
                    <p className="text-xs text-gray-400">Add, edit, or remove reviews. {reviews.length} total.</p>
                </div>
                <button
                    type="button"
                    onClick={() => setModal('new')}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-widest text-white shadow-sm transition-colors hover:bg-brand-orange-dark"
                >
                    <LuPlus className="h-4 w-4" />
                    New Review
                </button>
            </div>

            {reviews.length === 0 ? (
                <div className="rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center">
                    <p className="text-sm font-semibold text-gray-400">No reviews yet. Click "New Review" to add your first one.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                        >
                            {/* Header */}
                            <div className="flex items-start gap-3">
                                <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold text-white ${review.avatar_color}`}>
                                    {review.initials}
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-bold text-[#0A2A4A]">{review.name}</p>
                                    <div className="mt-0.5 flex items-center gap-1 text-brand-yellow">
                                        {[...Array(5)].map((_, i) => (
                                            <LuStar
                                                key={i}
                                                className={`h-3.5 w-3.5 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <span
                                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-widest ${
                                        review.is_published ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'
                                    }`}
                                >
                                    {review.is_published ? <LuEye className="h-3 w-3" /> : <LuEyeOff className="h-3 w-3" />}
                                    {review.is_published ? 'Live' : 'Hidden'}
                                </span>
                            </div>

                            {/* Body */}
                            <div className="mt-4 flex-1">
                                <p
                                    className="text-sm leading-relaxed text-gray-600 line-clamp-4 [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline"
                                    dangerouslySetInnerHTML={{ __html: review.body }}
                                />
                            </div>

                            {/* Footer */}
                            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                                <p className="text-xs text-gray-400">{formatDate(review.created_at)}</p>
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setModal(review)}
                                        className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-gray-500 shadow-sm transition-colors hover:border-brand-orange hover:text-brand-orange"
                                    >
                                        <LuPencil className="h-3.5 w-3.5" />
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => remove(review)}
                                        className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-extrabold uppercase tracking-widest text-gray-500 shadow-sm transition-colors hover:border-red-400 hover:text-red-500"
                                    >
                                        <LuTrash2 className="h-3.5 w-3.5" />
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {modal && <ReviewModal review={modal === 'new' ? null : modal} onClose={() => setModal(null)} />}
        </AdminLayout>
    );
}

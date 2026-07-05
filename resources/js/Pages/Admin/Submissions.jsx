import { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    LuInbox,
    LuCheck,
    LuCheckCheck,
    LuTrash2,
    LuMailOpen,
    LuMail,
    LuPhone,
    LuCalendar,
    LuWrench,
    LuArrowLeft,
    LuArrowRight,
    LuEye,
    LuX,
    LuExternalLink,
} from 'react-icons/lu';

function formatDate(value) {
    if (!value) return '';
    const d = new Date(value);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function SubmissionDetail({ submission, onClose, onToggleRead, onDelete }) {
    if (!submission) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-8">
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />
            <div className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
                <div className="flex items-center justify-between">
                    <h2 className="font-display text-xl uppercase text-[#07264A]">Submission Details</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
                        aria-label="Close"
                    >
                        <LuX className="h-5 w-5" />
                    </button>
                </div>

                <div className="mt-6 space-y-4">
                    {/* Type badge */}
                    <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest ${
                            submission.form_type === 'schedule'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-emerald-100 text-emerald-700'
                        }`}
                    >
                        {submission.form_type === 'schedule' ? <LuCalendar className="h-3 w-3" /> : <LuMail className="h-3 w-3" />}
                        {submission.form_type === 'schedule' ? 'Schedule Request' : 'Contact Form'}
                    </span>

                    {/* Name */}
                    <div>
                        <p className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400">Name</p>
                        <p className="mt-0.5 text-sm font-semibold text-[#07264A]">{submission.name}</p>
                    </div>

                    {/* Email */}
                    {submission.email && (
                        <div>
                            <p className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400">Email</p>
                            <a href={`mailto:${submission.email}`} className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:underline">
                                <LuMailOpen className="h-3.5 w-3.5" />
                                {submission.email}
                            </a>
                        </div>
                    )}

                    {/* Phone */}
                    {submission.phone && (
                        <div>
                            <p className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400">Phone</p>
                            <a href={`tel:${submission.phone.replace(/\D/g, '')}`} className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:underline">
                                <LuPhone className="h-3.5 w-3.5" />
                                {submission.phone}
                            </a>
                        </div>
                    )}

                    {/* Service */}
                    {submission.service && (
                        <div>
                            <p className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400">Service Needed</p>
                            <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#07264A]">
                                <LuWrench className="h-3.5 w-3.5 text-gray-400" />
                                {submission.service.charAt(0).toUpperCase() + submission.service.slice(1)}
                            </p>
                        </div>
                    )}

                    {/* Preferred Date */}
                    {submission.preferred_date && (
                        <div>
                            <p className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400">Preferred Date</p>
                            <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#07264A]">
                                <LuCalendar className="h-3.5 w-3.5 text-gray-400" />
                                {submission.preferred_date}
                            </p>
                        </div>
                    )}

                    {/* Message */}
                    {submission.message && (
                        <div>
                            <p className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400">Message</p>
                            <p className="mt-1 whitespace-pre-wrap rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-700">
                                {submission.message}
                            </p>
                        </div>
                    )}

                    {/* Submitted From (source page) */}
                    {submission.source_page && (
                        <div>
                            <p className="text-[11px] font-extrabold uppercase tracking-widest text-gray-400">Submitted From</p>
                            <a
                                href={submission.source_page}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 underline"
                            >
                                <LuExternalLink className="h-3.5 w-3.5" />
                                {submission.source_page}
                            </a>
                        </div>
                    )}

                    {/* Date */}
                    <p className="text-xs text-gray-400">Received {formatDate(submission.created_at)}</p>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-5">
                    <button
                        type="button"
                        onClick={() => onToggleRead(submission)}
                        className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest shadow-sm transition-all ${
                            submission.is_read
                                ? 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                                : 'bg-brand-orange text-white hover:bg-brand-orange-dark'
                        }`}
                    >
                        {submission.is_read ? <LuMail className="h-4 w-4" /> : <LuCheckCheck className="h-4 w-4" />}
                        {submission.is_read ? 'Mark Unread' : 'Mark Read'}
                    </button>
                    <button
                        type="button"
                        onClick={() => onDelete(submission)}
                        className="inline-flex items-center gap-2 rounded-full border border-red-200 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-red-600 transition-colors hover:bg-red-50"
                    >
                        <LuTrash2 className="h-4 w-4" />
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Submissions({ submissions, unreadCount }) {
    const flash = usePage().props.flash;
    const [detail, setDetail] = useState(null);
    const [filter, setFilter] = useState('all'); // all | unread | contact | schedule

    const filtered = submissions.data.filter((s) => {
        if (filter === 'unread') return !s.is_read;
        if (filter === 'contact') return s.form_type === 'contact';
        if (filter === 'schedule') return s.form_type === 'schedule';
        return true;
    });

    const toggleRead = (submission) => {
        const routeName = submission.is_read ? 'submissions.unread' : 'submissions.read';
        router.post(route(routeName, submission.id), {}, { preserveScroll: true });
        setDetail((d) => (d && d.id === submission.id ? { ...d, is_read: !d.is_read } : d));
    };

    const remove = (submission) => {
        if (!window.confirm('Delete this submission? This cannot be undone.')) return;
        router.delete(route('submissions.destroy', submission.id), { preserveScroll: true });
        setDetail(null);
    };

    return (
        <AdminLayout
            header={
                <div className="flex items-center gap-3">
                    <h1 className="text-lg font-bold text-[#07264A]">Submissions</h1>
                    {unreadCount > 0 && (
                        <span className="rounded-full bg-brand-orange px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-white">
                            {unreadCount} unread
                        </span>
                    )}
                </div>
            }
        >
            <Head title="Admin — Submissions" />

            {flash?.status && (
                <div className="mb-6 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700">
                    <LuCheck className="h-4 w-4" />
                    {flash.status}
                </div>
            )}

            {/* Filters */}
            <div className="mb-6 flex flex-wrap items-center gap-2">
                {[
                    { key: 'all', label: 'All' },
                    { key: 'unread', label: 'Unread' },
                    { key: 'contact', label: 'Contact' },
                    { key: 'schedule', label: 'Schedule' },
                ].map((f) => (
                    <button
                        key={f.key}
                        type="button"
                        onClick={() => setFilter(f.key)}
                        className={`rounded-full px-4 py-2 text-[11px] font-extrabold uppercase tracking-widest transition-all ${
                            filter === f.key
                                ? 'bg-brand-orange text-white shadow-sm'
                                : 'border border-gray-200 bg-white text-gray-600 hover:border-brand-orange hover:text-brand-orange'
                        }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* List */}
            {filtered.length === 0 ? (
                <div className="rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center">
                    <p className="text-sm font-semibold text-gray-400">No submissions found.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {filtered.map((s) => (
                        <div
                            key={s.id}
                            className={`flex flex-col gap-4 rounded-2xl border bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center ${
                                s.is_read ? 'border-gray-200' : 'border-brand-orange/40'
                            }`}
                        >
                            <div className="flex min-w-0 flex-1 items-start gap-4">
                                <span
                                    className={`mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${
                                        s.form_type === 'schedule'
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'bg-emerald-100 text-emerald-700'
                                    }`}
                                >
                                    {s.form_type === 'schedule' ? <LuCalendar className="h-5 w-5" /> : <LuMail className="h-5 w-5" />}
                                </span>

                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                        <p className="truncate font-display text-base uppercase text-[#07264A]">{s.name}</p>
                                        {!s.is_read && (
                                            <span className="flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-brand-orange" />
                                        )}
                                    </div>
                                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500">
                                        {s.email && <span className="truncate">{s.email}</span>}
                                        {s.phone && <span className="truncate">{s.phone}</span>}
                                        {s.service && (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600">
                                                <LuWrench className="h-3 w-3" />
                                                {s.service}
                                            </span>
                                        )}
                                        {s.preferred_date && (
                                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
                                                <LuCalendar className="h-3 w-3" />
                                                {s.preferred_date}
                                            </span>
                                        )}
                                    </div>
                                    {s.message && (
                                        <p className="mt-1 line-clamp-1 text-sm text-gray-500">{s.message}</p>
                                    )}
                                    <p className="mt-1 text-[11px] text-gray-400">{formatDate(s.created_at)}</p>
                                </div>
                            </div>

                            <div className="flex flex-shrink-0 items-center gap-2 self-end sm:self-auto">
                                <button
                                    type="button"
                                    onClick={() => setDetail(s)}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:border-brand-orange hover:text-brand-orange"
                                    title="View"
                                >
                                    <LuEye className="h-4 w-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => toggleRead(s)}
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg border shadow-sm transition-colors ${
                                        s.is_read
                                            ? 'border-gray-200 bg-white text-gray-500 hover:border-brand-orange hover:text-brand-orange'
                                            : 'border-brand-orange/40 bg-brand-orange/5 text-brand-orange hover:bg-brand-orange hover:text-white'
                                    }`}
                                    title={s.is_read ? 'Mark unread' : 'Mark read'}
                                >
                                    {s.is_read ? <LuMail className="h-4 w-4" /> : <LuCheckCheck className="h-4 w-4" />}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => remove(s)}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:border-red-400 hover:text-red-500"
                                    title="Delete"
                                >
                                    <LuTrash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {submissions.links && submissions.links.length > 3 && (
                <div className="mt-6 flex items-center justify-center gap-2">
                    {submissions.links.map((link, i) => {
                        if (link.url === null) {
                            return (
                                <span
                                    key={i}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 text-gray-400"
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            );
                        }
                        return (
                            <Link
                                key={i}
                                href={link.url}
                                className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-semibold transition-colors ${
                                    link.active
                                        ? 'border-brand-orange bg-brand-orange text-white'
                                        : 'border-gray-200 bg-white text-gray-600 hover:border-brand-orange hover:text-brand-orange'
                                }`}
                                preserveScroll
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        );
                    })}
                </div>
            )}

            {detail && (
                <SubmissionDetail
                    submission={detail}
                    onClose={() => setDetail(null)}
                    onToggleRead={toggleRead}
                    onDelete={remove}
                />
            )}
        </AdminLayout>
    );
}

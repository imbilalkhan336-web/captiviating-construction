import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { LuCheck, LuLoader, LuStar } from 'react-icons/lu';

const inputClass =
    'mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20';
const labelClass = 'block text-[11px] font-extrabold uppercase tracking-widest text-gray-500';

export default function Settings({ settings = {} }) {
    const { data, setData, put, processing, recentlySuccessful, errors } = useForm({
        reviews_count: settings.reviews_count ?? '',
        reviews_rating: settings.reviews_rating ?? '',
        phone: settings.phone ?? '',
        notification_email: settings.notification_email ?? '',
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('admin.settings.update'));
    };

    return (
        <AdminLayout header={<h1 className="text-lg font-bold text-[#07264A]">Site Settings</h1>}>
            <Head title="Admin — Settings" />

            <form onSubmit={submit} className="mx-auto max-w-2xl space-y-6">
                {/* Reviews */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                            <LuStar className="h-5 w-5" />
                        </span>
                        <div>
                            <p className="font-display text-xl uppercase text-[#07264A]">Google Reviews</p>
                            <p className="text-sm text-gray-500">
                                Controls the review count and star rating shown across the site.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="reviews_count" className={labelClass}>Number of Reviews</label>
                            <input
                                id="reviews_count"
                                type="text"
                                inputMode="numeric"
                                value={data.reviews_count}
                                onChange={(e) => setData('reviews_count', e.target.value)}
                                placeholder="200"
                                className={inputClass}
                            />
                            <p className="mt-1 text-[11px] text-gray-400">Shown as "Over {data.reviews_count || '200'}+ Reviews".</p>
                            {errors.reviews_count && <p className="mt-1 text-xs text-red-600">{errors.reviews_count}</p>}
                        </div>
                        <div>
                            <label htmlFor="reviews_rating" className={labelClass}>Average Rating</label>
                            <input
                                id="reviews_rating"
                                type="text"
                                inputMode="decimal"
                                value={data.reviews_rating}
                                onChange={(e) => setData('reviews_rating', e.target.value)}
                                placeholder="4.8"
                                className={inputClass}
                            />
                            {errors.reviews_rating && <p className="mt-1 text-xs text-red-600">{errors.reviews_rating}</p>}
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <p className="font-display text-xl uppercase text-[#07264A]">Contact & Leads</p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="phone" className={labelClass}>Phone Number</label>
                            <input
                                id="phone"
                                type="text"
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                placeholder="(848) 276-6300"
                                className={inputClass}
                            />
                            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                        </div>
                        <div>
                            <label htmlFor="notification_email" className={labelClass}>Lead Notification Email</label>
                            <input
                                id="notification_email"
                                type="email"
                                value={data.notification_email}
                                onChange={(e) => setData('notification_email', e.target.value)}
                                placeholder="sales@guardmyhvac.com"
                                className={inputClass}
                            />
                            <p className="mt-1 text-[11px] text-gray-400">Contact &amp; schedule form submissions are emailed here.</p>
                            {errors.notification_email && <p className="mt-1 text-xs text-red-600">{errors.notification_email}</p>}
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
                        Save Settings
                    </button>
                    {recentlySuccessful && <span className="text-sm font-semibold text-green-600">Saved!</span>}
                </div>
            </form>
        </AdminLayout>
    );
}

import { useState } from 'react';
import { router } from '@inertiajs/react';
import { LuCheck, LuLoader } from 'react-icons/lu';
import { PillButton, PhonePillButton } from '@/Components/FrontComponents/PillButton';

const PHONE = '(848) 276-6300';

const inputClass =
    'mt-1.5 block w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 font-body text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:bg-white focus:ring-2 focus:ring-brand-orange/20';
const labelClass = 'block text-[11px] font-extrabold uppercase tracking-widest text-gray-500';

export default function ScheduleForm({ headingClassName = '' }) {
    const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);
        setError('');

        router.post(
            route('submissions.store'),
            {
                form_type: 'schedule',
                name: form.name,
                phone: form.phone,
                email: form.email,
                preferred_date: form.date,
                message: form.message,
                source_page: typeof window !== 'undefined' ? window.location.pathname : null,
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setSubmitted(true);
                    setProcessing(false);
                    setForm({ name: '', phone: '', email: '', date: '', message: '' });
                    setTimeout(() => setSubmitted(false), 5000);
                },
                onError: (errors) => {
                    setProcessing(false);
                    setError(errors.message || Object.values(errors)[0] || 'Something went wrong. Please try again.');
                },
            }
        );
    };

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-gray-200/60">
            <div className="bg-gradient-to-br from-brand-blue to-[#07264A] px-6 py-6">
                <h3 className={`font-display text-[26px] uppercase leading-[0.95] text-white ${headingClassName}`}>
                    Schedule Online
                </h3>
            </div>

            <div className="px-6 py-6">
                {submitted ? (
                    <div className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-5">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <LuCheck className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-body text-sm font-bold text-green-800">Request received!</p>
                            <p className="font-body text-xs text-green-700">We'll confirm your appointment shortly.</p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold text-red-600">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="schedule-name" className={labelClass}>Full Name</label>
                            <input id="schedule-name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="John Smith" />
                        </div>
                        <div>
                            <label htmlFor="schedule-phone" className={labelClass}>Phone Number</label>
                            <input id="schedule-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClass} placeholder="(732) 555-1234" />
                        </div>
                        <div>
                            <label htmlFor="schedule-email" className={labelClass}>Email Address</label>
                            <input id="schedule-email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
                        </div>
                        <div>
                            <label htmlFor="schedule-date" className={labelClass}>Preferred Date</label>
                            <input id="schedule-date" name="date" type="date" value={form.date} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label htmlFor="schedule-message" className={labelClass}>How Can We Help?</label>
                            <textarea id="schedule-message" name="message" rows={3} value={form.message} onChange={handleChange} className={inputClass} placeholder="Briefly describe the issue..." />
                        </div>

                        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <PillButton type="submit" variant="yellow" icon="calendar" size="md" className="w-full text-sm sm:flex-1" disabled={processing}>
                                {processing ? (
                                    <span className="inline-flex items-center gap-2">
                                        <LuLoader className="h-4 w-4 animate-spin" />
                                        Sending…
                                    </span>
                                ) : (
                                    'Schedule Online'
                                )}
                            </PillButton>
                            <PhonePillButton phone={PHONE} label="Call" size="md" className="w-full text-sm sm:flex-1" />
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

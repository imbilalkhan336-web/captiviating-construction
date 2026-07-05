import { useState } from 'react';
import { router } from '@inertiajs/react';
import { LuLoader, LuCheck } from 'react-icons/lu';

const PROJECT_TYPES = [
    'New Construction',
    'Full Home Remodel',
    'Kitchen Renovation',
    'Bathroom Renovation',
    'Basement Finishing',
    'Home Addition',
    'Other',
];

const labelClass = 'mb-1.5 block font-body text-xs font-semibold text-gray-600';
const inputClass =
    'w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 font-body text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-brand-blue-light focus:ring-2 focus:ring-brand-blue-light/20';

/**
 * Compact, reusable "request a quote" form card for sidebars.
 * Posts to the shared submissions endpoint as a quote lead.
 */
export default function RequestQuoteCard({ heading = 'Request A Free Quote' }) {
    const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        const clean = name === 'phone' ? value.replace(/\D/g, '') : value;
        setForm((prev) => ({ ...prev, [name]: clean }));
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProcessing(true);
        setError('');

        router.post(
            route('submissions.store'),
            {
                form_type: 'quote',
                name: form.name,
                phone: form.phone,
                email: form.email,
                service: form.service,
                message: form.message,
                source_page: typeof window !== 'undefined' ? window.location.pathname : null,
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setSubmitted(true);
                    setProcessing(false);
                    setForm({ name: '', phone: '', email: '', service: '', message: '' });
                },
                onError: (errors) => {
                    setProcessing(false);
                    setError(Object.values(errors)[0] || 'Something went wrong. Please try again.');
                },
            }
        );
    };

    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="bg-gradient-to-br from-brand-blue to-[#07264A] px-6 py-5">
                <h3 className="font-montserrat text-xl font-semibold text-white">{heading}</h3>
            </div>

            <div className="px-6 py-6">
                {submitted ? (
                    <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <LuCheck className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-body text-sm font-bold text-green-800">Thank you!</p>
                            <p className="font-body text-xs text-green-700">We&apos;ll be in touch shortly.</p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="rq-name" className={labelClass}>Full Name</label>
                            <input id="rq-name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="John Smith" />
                        </div>
                        <div>
                            <label htmlFor="rq-phone" className={labelClass}>Phone Number</label>
                            <input id="rq-phone" name="phone" type="tel" inputMode="numeric" required value={form.phone} onChange={handleChange} className={inputClass} placeholder="(732) 555-1234" />
                        </div>
                        <div>
                            <label htmlFor="rq-email" className={labelClass}>Email Address</label>
                            <input id="rq-email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
                        </div>
                        <div>
                            <label htmlFor="rq-service" className={labelClass}>Project Type</label>
                            <select
                                id="rq-service"
                                name="service"
                                required
                                value={form.service}
                                onChange={handleChange}
                                className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%236b7280%22 stroke-width=%222%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22M19 9l-7 7-7-7%22/></svg>')] bg-[length:1.1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10 ${form.service ? 'text-gray-800' : 'text-gray-400'}`}
                            >
                                <option value="" disabled>Choose A Project Type</option>
                                {PROJECT_TYPES.map((t) => <option key={t} value={t} className="text-gray-800">{t}</option>)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="rq-message" className={labelClass}>How Can We Help?</label>
                            <textarea id="rq-message" name="message" rows={3} value={form.message} onChange={handleChange} className={inputClass} placeholder="Briefly describe your project..." />
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue-light px-6 py-3 font-body text-sm font-bold text-white shadow-lg transition-colors hover:bg-brand-blue disabled:opacity-60"
                        >
                            {processing ? (
                                <><LuLoader className="h-4 w-4 animate-spin" /> Sending…</>
                            ) : (
                                'Request Free Quote'
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}

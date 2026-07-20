import { useState } from 'react';
import { router } from '@inertiajs/react';
import { LuLoader, LuCheck, LuRotateCw } from 'react-icons/lu';

const PROJECT_TYPES = [
    'New Construction',
    'Full Home Remodel',
    'Kitchen Renovation',
    'Bathroom Renovation',
    'Basement Finishing',
    'Home Addition',
    'Other',
];

const labelClass = 'mb-1.5 block font-body text-sm font-semibold text-[#0A2A4A]';
const inputClass =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-body text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-brand-blue-light focus:ring-2 focus:ring-brand-blue-light/20';

/**
 * Reusable "Contact Us For A Free Consultation" form section.
 * Posts to the shared submissions endpoint.
 */
export default function ContactForm({ title = 'Contact Us For A Free Consultation' }) {
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
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
                form_type: 'contact',
                name: `${form.firstName} ${form.lastName}`.trim(),
                email: form.email,
                phone: form.phone,
                service: form.service,
                message: form.message,
                source_page: typeof window !== 'undefined' ? window.location.pathname : null,
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setSubmitted(true);
                    setProcessing(false);
                    setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
                },
                onError: (errors) => {
                    setProcessing(false);
                    setError(Object.values(errors)[0] || 'Something went wrong. Please try again.');
                },
            }
        );
    };

    return (
        <section className="bg-white py-[60px] md:py-[80px] lg:py-[100px]">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
                    <h2 className="text-center font-montserrat text-2xl font-semibold text-[#0A2A4A] md:text-3xl">
                        {title}
                    </h2>

                    {submitted ? (
                        <div className="mt-8 flex flex-col items-center gap-3 text-center">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <LuCheck className="h-7 w-7" />
                            </div>
                            <p className="font-body text-lg font-bold text-[#0A2A4A]">Thank you!</p>
                            <p className="font-body text-sm text-gray-600">
                                Your request has been received. Our team will reach out shortly to get started.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            {error && (
                                <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600">
                                    {error}
                                </div>
                            )}

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="c-first" className={labelClass}>
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input id="c-first" name="firstName" type="text" required value={form.firstName} onChange={handleChange} className={inputClass} placeholder="First Name" />
                                </div>
                                <div>
                                    <label htmlFor="c-last" className={labelClass}>
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input id="c-last" name="lastName" type="text" required value={form.lastName} onChange={handleChange} className={inputClass} placeholder="Last Name" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="c-email" className={labelClass}>
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input id="c-email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="Email" />
                                </div>
                                <div>
                                    <label htmlFor="c-phone" className={labelClass}>
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input id="c-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClass} placeholder="Phone Number" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="c-service" className={labelClass}>
                                    Choose a Project Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="c-service"
                                    name="service"
                                    required
                                    value={form.service}
                                    onChange={handleChange}
                                    className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%236b7280%22 stroke-width=%222%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22M19 9l-7 7-7-7%22/></svg>')] bg-[length:1.1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10 ${form.service ? 'text-gray-800' : 'text-gray-400'}`}
                                >
                                    <option value="" disabled>Choose A Project Type</option>
                                    {PROJECT_TYPES.map((t) => (
                                        <option key={t} value={t} className="text-gray-800">{t}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="c-message" className={labelClass}>Message</label>
                                <textarea id="c-message" name="message" rows={4} value={form.message} onChange={handleChange} className={inputClass} placeholder="Tell us about your project..." />
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-light px-8 py-3 font-body text-sm font-bold text-white shadow-lg transition-colors hover:bg-brand-blue disabled:opacity-60"
                            >
                                {processing ? (
                                    <>
                                        <LuLoader className="h-4 w-4 animate-spin" /> Sending…
                                    </>
                                ) : (
                                    'Submit'
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

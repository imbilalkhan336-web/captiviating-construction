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

const labelClass = 'mb-1.5 block font-body text-sm font-semibold text-white';
// Custom, white, full-width pill inputs.
const inputClass =
    'w-full rounded-full border border-white/40 bg-white px-5 py-3 font-body text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-brand-blue-light focus:ring-2 focus:ring-brand-blue-light/30';

/**
 * Reusable dark, image-backed quote form banner with white custom inputs.
 * Drop it near the bottom of any page.
 */
export default function QuoteBanner({
    bg = '/image/interiors.webp',
    title = 'Get A Quote On Your Home Renovation',
    highlight = 'In Only 3 Minutes!',
    subtitle = "Let's Get Started—Just Fill Out The Form Below!",
}) {
    const [form, setForm] = useState({ service: '', phone: '', name: '', email: '' });
    const [robot, setRobot] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        // Phone accepts digits only.
        const clean = name === 'phone' ? value.replace(/\D/g, '') : value;
        setForm((prev) => ({ ...prev, [name]: clean }));
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!robot) {
            setError('Please confirm you are not a robot.');
            return;
        }
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
                source_page: typeof window !== 'undefined' ? window.location.pathname : null,
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setSubmitted(true);
                    setProcessing(false);
                    setForm({ service: '', phone: '', name: '', email: '' });
                    setRobot(false);
                },
                onError: (errors) => {
                    setProcessing(false);
                    setError(Object.values(errors)[0] || 'Something went wrong. Please try again.');
                },
            }
        );
    };

    return (
        <section className="relative bg-black">
            <div className="relative overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${bg}')` }}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-black/75" />

                <div className="relative mx-auto max-w-3xl px-4 py-16 lg:py-20">
                    <h2 className="font-montserrat text-[28px] font-semibold not-italic leading-tight text-white md:text-[34px]">
                        {title}
                    </h2>
                    <p className="mt-2 font-body text-lg font-bold text-brand-orange">{highlight}</p>
                    <p className="mt-1 font-body text-sm font-semibold text-brand-orange">{subtitle}</p>

                    {submitted ? (
                        <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white/95 p-6">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <LuCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-body text-base font-bold text-[#0A2A4A]">Thank you!</p>
                                <p className="font-body text-sm text-gray-600">
                                    Your request has been received. Our team will reach out shortly.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                            {error && (
                                <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
                                    {error}
                                </div>
                            )}

                            <div>
                                <label htmlFor="qb-service" className={labelClass}>
                                    Choose a Project Type <span className="text-brand-orange">*</span>
                                </label>
                                <select
                                    id="qb-service"
                                    name="service"
                                    required
                                    value={form.service}
                                    onChange={handleChange}
                                    className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%236b7280%22 stroke-width=%222%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22M19 9l-7 7-7-7%22/></svg>')] bg-[length:1.1rem] bg-[right_1.1rem_center] bg-no-repeat pr-10 ${form.service ? 'text-gray-800' : 'text-gray-400'}`}
                                >
                                    <option value="" disabled>Choose A Project Type</option>
                                    {PROJECT_TYPES.map((t) => (
                                        <option key={t} value={t} className="text-gray-800">{t}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="qb-phone" className={labelClass}>
                                    Phone Number <span className="text-brand-orange">*</span>
                                </label>
                                <input id="qb-phone" name="phone" type="tel" inputMode="numeric" required value={form.phone} onChange={handleChange} className={inputClass} placeholder="Phone Number" />
                            </div>

                            <div>
                                <label htmlFor="qb-name" className={labelClass}>
                                    Full Name <span className="text-brand-orange">*</span>
                                </label>
                                <input id="qb-name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Full Name" />
                            </div>

                            <div>
                                <label htmlFor="qb-email" className={labelClass}>
                                    Email <span className="text-brand-orange">*</span>
                                </label>
                                <input id="qb-email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="Email" />
                            </div>

                            {/* reCAPTCHA-style confirmation (visual placeholder) */}
                            <div className="flex w-full max-w-xs items-center justify-between rounded border border-gray-300 bg-white px-4 py-3">
                                <label className="flex items-center gap-3 font-body text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        checked={robot}
                                        onChange={(e) => setRobot(e.target.checked)}
                                        className="h-6 w-6 rounded border-2 border-gray-300 text-brand-blue-light focus:ring-brand-blue-light/30"
                                    />
                                    I&apos;m not a robot
                                </label>
                                <div className="flex flex-col items-center text-[9px] leading-tight text-gray-400">
                                    <LuRotateCw className="mb-0.5 h-6 w-6 text-gray-400" />
                                    reCAPTCHA
                                    <span>Privacy · Terms</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-light px-7 py-3 font-body text-sm font-bold text-white shadow-lg transition-colors hover:bg-brand-blue disabled:opacity-60"
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

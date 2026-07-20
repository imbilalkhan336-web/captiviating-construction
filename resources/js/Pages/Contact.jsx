import { useState } from 'react';
import { router } from '@inertiajs/react';
import { LuLoader, LuCheck } from 'react-icons/lu';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import ServiceSchema from '@/Components/FrontComponents/ServiceSchema';
import CtaSection from '@/Components/pages-sections/CtaSection';

const HERO_BG = '/image/about-company.webp';

const PROJECT_TYPES = [
    'New Construction',
    'Full Home Remodel',
    'Kitchen Renovation',
    'Bathroom Renovation',
    'Basement Finishing',
    'Home Addition',
    'Other',
];

const BUDGETS = ['Under $50k', '$50k - $100k', '$100k - $250k', '$250k - $500k', '$500k+'];

const HEAR_OPTIONS = ['Google', 'Referral', 'Social Media', 'Drove By', 'Home Show', 'Other'];

const labelClass = 'mb-1.5 block font-body text-xs font-semibold text-gray-600';
const inputClass =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-body text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-brand-blue-light focus:ring-2 focus:ring-brand-blue-light/20';

function ContactHero() {
    return (
        <section className="relative bg-black">
            <div className="relative overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${HERO_BG}')` }}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-black/35" />

                <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-[60px] md:py-[80px] lg:py-[100px]">
                    <h1 className="font-montserrat text-[45px] font-bold leading-[54px] text-white">
                        Contact Us
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default function ContactPage({ reviews = [], seo = {} }) {
    const [form, setForm] = useState({
        first: '',
        last: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        location: '',
        description: '',
        hear: '',
    });
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

        const message = [
            form.budget && `Estimated budget: ${form.budget}`,
            form.location && `Project location: ${form.location}`,
            form.description && `Project details: ${form.description}`,
            form.hear && `Heard about us via: ${form.hear}`,
        ]
            .filter(Boolean)
            .join('\n');

        router.post(
            route('submissions.store'),
            {
                form_type: 'contact',
                name: `${form.first} ${form.last}`.trim(),
                email: form.email,
                phone: form.phone,
                service: form.projectType,
                message,
                source_page: typeof window !== 'undefined' ? window.location.pathname : null,
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setSubmitted(true);
                    setProcessing(false);
                    setForm({
                        first: '', last: '', email: '', phone: '',
                        projectType: '', budget: '', location: '', description: '', hear: '',
                    });
                },
                onError: (errors) => {
                    setProcessing(false);
                    setError(Object.values(errors)[0] || 'Something went wrong. Please try again.');
                },
            }
        );
    };

    const selectChevron =
        "appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%236b7280%22 stroke-width=%222%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22M19 9l-7 7-7-7%22/></svg>')] bg-[length:1.1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10";

    return (
        <SiteLayout reviews={reviews}>
            <Seo
                seo={seo}
                fallbackTitle="Contact Us | Captivating Construction Group - NJ Custom Home Builder"
                fallbackDescription="Request a free consultation with Captivating Construction Group. Tell us about your custom home, renovation, or addition project in New Jersey and we'll be in touch."
            />
            <ServiceSchema
                serviceName="Contact Captivating Construction Group"
                serviceType="Custom home builder and general contractor"
                description="Request a free consultation for custom home building, renovations, and additions across New Jersey."
                path="/contact"
            />

            <ContactHero />

            {/* Request a consultation form */}
            <section className="bg-[#f3f4f6] py-[60px] md:py-[80px] lg:py-[100px]">
                <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-10">
                        <h2 className="font-montserrat text-2xl font-bold text-[#0A2A4A] md:text-3xl">
                            Request A Free Consultation
                        </h2>

                        {submitted ? (
                            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-6">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                                    <LuCheck className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-body text-base font-bold text-green-800">Thank you!</p>
                                    <p className="font-body text-sm text-green-700">
                                        Your consultation request has been received. Our team will reach out shortly.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                                {error && (
                                    <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-600">
                                        {error}
                                    </div>
                                )}

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="c-first" className={labelClass}>First Name <span className="text-red-500">*</span></label>
                                        <input id="c-first" name="first" type="text" required value={form.first} onChange={handleChange} className={inputClass} />
                                    </div>
                                    <div>
                                        <label htmlFor="c-last" className={labelClass}>Last Name <span className="text-red-500">*</span></label>
                                        <input id="c-last" name="last" type="text" required value={form.last} onChange={handleChange} className={inputClass} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="c-email" className={labelClass}>Email <span className="text-red-500">*</span></label>
                                        <input id="c-email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} />
                                    </div>
                                    <div>
                                        <label htmlFor="c-phone" className={labelClass}>Phone Number <span className="text-red-500">*</span></label>
                                        <input id="c-phone" name="phone" type="tel" inputMode="numeric" required value={form.phone} onChange={handleChange} className={inputClass} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="c-type" className={labelClass}>Choose a Project Type <span className="text-red-500">*</span></label>
                                        <select id="c-type" name="projectType" required value={form.projectType} onChange={handleChange} className={`${inputClass} ${selectChevron} ${form.projectType ? 'text-gray-800' : 'text-gray-400'}`}>
                                            <option value="" disabled>Choose A Project Type</option>
                                            {PROJECT_TYPES.map((t) => <option key={t} value={t} className="text-gray-800">{t}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="c-budget" className={labelClass}>Estimated Project Budget?</label>
                                        <select id="c-budget" name="budget" value={form.budget} onChange={handleChange} className={`${inputClass} ${selectChevron} ${form.budget ? 'text-gray-800' : 'text-gray-400'}`}>
                                            <option value="" disabled>Select a budget range</option>
                                            {BUDGETS.map((b) => <option key={b} value={b} className="text-gray-800">{b}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="c-location" className={labelClass}>Where Is Your Project Located?</label>
                                    <input id="c-location" name="location" type="text" value={form.location} onChange={handleChange} className={inputClass} placeholder="City, NJ" />
                                </div>

                                <div>
                                    <label htmlFor="c-description" className={labelClass}>Describe Your Project <span className="text-red-500">*</span></label>
                                    <textarea id="c-description" name="description" rows={4} required value={form.description} onChange={handleChange} className={inputClass} />
                                </div>

                                <div>
                                    <label htmlFor="c-hear" className={labelClass}>How Did You Hear About Captivating Construction Group?</label>
                                    <select id="c-hear" name="hear" value={form.hear} onChange={handleChange} className={`${inputClass} ${selectChevron} ${form.hear ? 'text-gray-800' : 'text-gray-400'}`}>
                                        <option value="" disabled>Select an option</option>
                                        {HEAR_OPTIONS.map((h) => <option key={h} value={h} className="text-gray-800">{h}</option>)}
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-light px-7 py-3 font-body text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-brand-blue disabled:opacity-60"
                                >
                                    {processing ? (
                                        <><LuLoader className="h-4 w-4 animate-spin" /> Sending...</>
                                    ) : (
                                        'Submit'
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Service-area map */}
            <section>
                <iframe
                    title="Captivating Construction Group service area - New Jersey"
                    src="https://maps.google.com/maps?q=Colts+Neck,+New+Jersey&t=&z=10&ie=UTF8&iwloc=&output=embed"
                    className="block h-[420px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </section>

            <CtaSection />
        </SiteLayout>
    );
}

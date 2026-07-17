import { useState } from 'react';
import { router } from '@inertiajs/react';
import { LuLoader, LuCheck, LuRotateCw } from 'react-icons/lu';
import { FaRegCheckCircle } from 'react-icons/fa';
import { PillButton } from '@/Components/FrontComponents/PillButton';
import HeroServicesStrip from './HeroServicesStrip';

// Kitchen interior background. Swap this constant to change the hero photo.
const HERO_BG = '/image/home-hero-bg.webp';

const VALUE_PROPS = [
    'Decades of trusted construction experience',
    'Exceptional craftsmanship and timeless design',
    'Lasting value for families across New Jersey',
    'Custom homes tailored to your lifestyle and vision',
];

const PROJECT_TYPES = [
    'New Construction',
    'Full Home Remodel',
    'Kitchen Renovation',
    'Bathroom Renovation',
    'Basement Finishing',
    'Home Addition',
    'Other',
];

const labelClass = 'mb-1.5 block font-body text-sm font-semibold text-gray-600';
const inputClass =
    'w-full rounded-full border border-gray-300 bg-white px-4 py-2.5 font-body text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-brand-blue-light focus:ring-2 focus:ring-brand-blue-light/20';

/* ---------- Quote form (right card) ---------- */
function QuoteForm() {
    const [form, setForm] = useState({ service: '', phone: '', name: '', email: '' });
    const [robot, setRobot] = useState(false);
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
        <div className="w-full rounded-2xl bg-white p-6 shadow-2xl sm:p-8 lg:max-w-md lg:justify-self-end">
            {submitted ? (
                <div className="flex flex-col items-center gap-3 py-12 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <LuCheck className="h-7 w-7" />
                    </div>
                    <h3 className="font-body text-lg font-bold text-[#0A2A4A]">Thank you!</h3>
                    <p className="font-body text-sm text-gray-600">
                        Your request has been received. Our team will reach out shortly to get started on your project.
                    </p>
                </div>
            ) : (
                <>
                    <h3 className="text-center font-montserrat text-[18px] font-extrabold leading-[22px] text-[rgb(10,71,122)]">
                        Get A Quote On Your Project
                    </h3>
                    <p className="mt-1 text-center font-montserrat text-[16px] font-normal leading-[19px] text-black">
                        Let&apos;s get started—just fill out the form below!
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                        {error && (
                            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="q-service" className={labelClass}>
                                Choose a Project Type <span className="text-red-500">*</span>
                            </label>
                            <select
                                id="q-service"
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
                            <label htmlFor="q-phone" className={labelClass}>
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input id="q-phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClass} placeholder="Phone Number" />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="q-name" className={labelClass}>
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input id="q-name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Full Name" />
                            </div>
                            <div>
                                <label htmlFor="q-email" className={labelClass}>
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input id="q-email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="Email" />
                            </div>
                        </div>

                        {/* reCAPTCHA-style confirmation (visual placeholder) */}
                        <div className="flex items-center justify-between rounded border border-gray-300 bg-[#f9f9f9] px-4 py-3">
                            <label className="flex items-center gap-3 font-body text-sm text-gray-700">
                                <input
                                    type="checkbox"
                                    checked={robot}
                                    onChange={(e) => setRobot(e.target.checked)}
                                    className="h-7 w-7 rounded border-2 border-gray-300 text-brand-blue-light focus:ring-brand-blue-light/30"
                                />
                                I&apos;m not a robot
                            </label>
                            <div className="flex flex-col items-center text-[9px] leading-tight text-gray-400">
                                <LuRotateCw className="mb-0.5 h-6 w-6" />
                                reCAPTCHA
                                <span>Privacy Â· Terms</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-light px-8 py-3 font-body text-sm font-bold text-white shadow-lg transition-colors hover:bg-brand-blue disabled:opacity-60"
                        >
                            {processing ? (
                                <>
                                    <LuLoader className="h-4 w-4 animate-spin" /> Sendingâ€¦
                                </>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </form>
                </>
            )}
        </div>
    );
}

/* ---------- Hero section ---------- */
export default function Hero() {
    return (
        <section className="relative bg-[#0A2A4A]">
            <div className="relative overflow-hidden">
                {/* Kitchen background photo */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${HERO_BG}')` }}
                />
                {/* Dark overlay across the whole hero */}
                <div aria-hidden="true" className="absolute inset-0 bg-black/65" />

                <div className="relative mx-auto max-w-[1200px] px-4 py-16 lg:py-20">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        {/* Left â€" headline, copy, checklist, CTA */}
                        <div>
                            <h1 className="font-montserrat text-[45px] font-bold not-italic leading-[54px] text-white">
                                Building New Jersey&apos;s
                                <br />
                                Finest Custom Homes
                            </h1>

                            <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-white/85 md:text-base">
                                With decades of experience, we specialize in designing and building custom homes
                                that reflect your lifestyle, needs, and vision. From concept to completion, our team
                                delivers exceptional craftsmanship, timeless design, and lasting value across New Jersey.
                            </p>

                            <ul className="mt-6 space-y-3">
                                {VALUE_PROPS.map((prop) => (
                                    <li key={prop} className="flex items-center gap-3 font-body text-sm text-white md:text-[15px]">
                                        <FaRegCheckCircle
                                            aria-hidden="true"
                                            className="flex-shrink-0 text-[18px] leading-[18px] text-[rgb(68,170,255)]"
                                        />
                                        {prop}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <PillButton href="/contact" variant="blue" size="md">
                                    Contact Us Today
                                </PillButton>
                            </div>
                        </div>

                        {/* Right â€" quote form */}
                        <QuoteForm />
                    </div>
                </div>

                <HeroServicesStrip />
            </div>
        </section>
    );
}

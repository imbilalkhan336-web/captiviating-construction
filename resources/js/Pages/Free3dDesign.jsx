import { useState } from 'react';
import { router } from '@inertiajs/react';
import { LuLoader, LuCheck, LuRotateCw } from 'react-icons/lu';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import ServiceSchema from '@/Components/FrontComponents/ServiceSchema';
import FeatureBlock from '@/Components/FrontComponents/FeatureBlock';
import Gallery from '@/Components/FrontComponents/Gallery';
import CtaSection from '@/Components/pages-sections/CtaSection';
import { PillButton } from '@/Components/FrontComponents/PillButton';

const HERO_BG = '/image/home-hero-bg.webp';
const FORM_ANCHOR = '#design-form';

const INCLUDED = [
    'Customized layout based on your room dimensions',
    'Selection of cabinet styles, colors, and finishes',
    'Integration of RTA (Ready to Assemble) or pre-assembled cabinets',
    'Appliance placement and functional flow optimization',
    'Realistic renderings delivered within 5â€“7 business days',
];

const WHY_US = [
    'Free, No-Obligation Designs',
    'Nationwide Service & Fast Turnarounds',
    'Access to exclusive contractor pricing on kitchen cabinets',
    'Expert support for both DIY homeowners and trade professionals',
];

const SPACES = ['Kitchen', 'Bathroom', 'Kitchen & Bath', 'Entire House'];

const labelClass = 'mb-1.5 block font-body text-sm font-semibold text-gray-600';
const inputClass =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-body text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-brand-blue-light focus:ring-2 focus:ring-brand-blue-light/20';

function Hero() {
    return (
        <section className="relative bg-black">
            <div className="relative overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${HERO_BG}')` }}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-black/70" />

                <div className="relative mx-auto max-w-4xl px-4 py-20 text-center lg:py-28">
                    <p className="font-script text-2xl text-brand-blue-light md:text-3xl">
                        Dream It. See It. Build It.
                    </p>
                    <h1 className="mt-2 font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-white">
                        Transform Your Kitchen With A Free 3D Design From Captivating Construction
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl font-body text-[15px] leading-relaxed text-white/85 md:text-base">
                        At Captivating Construction, we make it easy to bring your kitchen renovation vision to
                        life â€” starting with a <span className="font-semibold text-white">free 3D kitchen design</span> tailored
                        to your space, style, and budget. Whether you&apos;re upgrading your home, remodeling for
                        resale, or starting fresh, our expert kitchen designers use advanced software to deliver
                        photorealistic 3D renderings that help you visualize the final result before construction begins.
                    </p>
                    <div className="mt-8">
                        <PillButton href={FORM_ANCHOR} variant="blue" size="md">
                            Start Your Free 3D Design
                        </PillButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

function DesignForm() {
    const [form, setForm] = useState({
        first: '',
        last: '',
        email: '',
        phone: '',
        spaces: [],
        style: '',
        notes: '',
        fileName: '',
    });
    const [robot, setRobot] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        const clean = name === 'phone' ? value.replace(/\D/g, '') : value;
        setForm((prev) => ({ ...prev, [name]: clean }));
        if (error) setError('');
    };

    const toggleSpace = (space) => {
        setForm((prev) => ({
            ...prev,
            spaces: prev.spaces.includes(space)
                ? prev.spaces.filter((s) => s !== space)
                : [...prev.spaces, space],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!robot) {
            setError('Please confirm you are not a robot.');
            return;
        }
        setProcessing(true);
        setError('');

        const message = [
            form.style && `Kitchen style: ${form.style}`,
            form.notes && `Notes: ${form.notes}`,
            form.fileName && `Measurements file: ${form.fileName}`,
        ]
            .filter(Boolean)
            .join('\n');

        router.post(
            route('submissions.store'),
            {
                form_type: 'quote',
                name: `${form.first} ${form.last}`.trim(),
                email: form.email,
                phone: form.phone,
                service: form.spaces.join(', '),
                message,
                source_page: typeof window !== 'undefined' ? window.location.pathname : null,
            },
            {
                preserveScroll: true,
                onSuccess: () => {
                    setSubmitted(true);
                    setProcessing(false);
                },
                onError: (errors) => {
                    setProcessing(false);
                    setError(Object.values(errors)[0] || 'Something went wrong. Please try again.');
                },
            }
        );
    };

    return (
        <section id="design-form" className="bg-[#f3f4f6] py-16 lg:py-24">
            <div className="mx-auto max-w-3xl px-4">
                <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-10">
                    <h2 className="text-center font-montserrat text-2xl font-bold text-[#0A2A4A] md:text-3xl">
                        Get Your Free 3D Kitchen Design Today
                    </h2>
                    <p className="mt-2 text-center font-body text-sm font-semibold text-brand-orange">
                        Start planning your dream kitchen with a custom 3D design â€” absolutely free and tailored to your space.
                    </p>

                    {submitted ? (
                        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-6">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                                <LuCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-body text-base font-bold text-green-800">Request received!</p>
                                <p className="font-body text-sm text-green-700">
                                    Our design team will reach out shortly to start your free 3D kitchen design.
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

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="d-first" className={labelClass}>
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input id="d-first" name="first" type="text" required value={form.first} onChange={handleChange} className={inputClass} placeholder="First Name" />
                                </div>
                                <div>
                                    <label htmlFor="d-last" className={labelClass}>
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input id="d-last" name="last" type="text" required value={form.last} onChange={handleChange} className={inputClass} placeholder="Last Name" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="d-email" className={labelClass}>
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input id="d-email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="Email" />
                                </div>
                                <div>
                                    <label htmlFor="d-phone" className={labelClass}>
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input id="d-phone" name="phone" type="tel" inputMode="numeric" required value={form.phone} onChange={handleChange} className={inputClass} placeholder="Phone Number" />
                                </div>
                            </div>

                            <div>
                                <span className={labelClass}>What Spaces Are Included In Your Project?</span>
                                <div className="flex flex-wrap gap-x-6 gap-y-2">
                                    {SPACES.map((space) => (
                                        <label key={space} className="flex items-center gap-2 font-body text-sm text-gray-700">
                                            <input
                                                type="checkbox"
                                                checked={form.spaces.includes(space)}
                                                onChange={() => toggleSpace(space)}
                                                className="h-4 w-4 rounded border-gray-300 text-brand-blue-light focus:ring-brand-blue-light/30"
                                            />
                                            {space}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="d-style" className={labelClass}>
                                    Kitchen Style You Love (Modern, Traditional, Transitional, Etc.)
                                </label>
                                <textarea id="d-style" name="style" rows={2} value={form.style} onChange={handleChange} className={inputClass} />
                            </div>

                            <div>
                                <label htmlFor="d-notes" className={labelClass}>
                                    Additional Notes / Preferences
                                </label>
                                <textarea id="d-notes" name="notes" rows={3} value={form.notes} onChange={handleChange} className={inputClass} />
                            </div>

                            <div>
                                <label htmlFor="d-file" className={labelClass}>
                                    Upload Kitchen Measurements
                                </label>
                                <input
                                    id="d-file"
                                    name="file"
                                    type="file"
                                    onChange={(e) => setForm((prev) => ({ ...prev, fileName: e.target.files?.[0]?.name || '' }))}
                                    className="block w-full font-body text-sm text-gray-600 file:mr-4 file:rounded-md file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#0A2A4A] hover:file:bg-gray-200"
                                />
                            </div>

                            {/* reCAPTCHA-style confirmation (visual placeholder) */}
                            <div className="flex w-full max-w-xs items-center justify-between rounded border border-gray-300 bg-[#f9f9f9] px-4 py-3">
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
                                    <span>Privacy Â· Terms</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-light px-7 py-3 font-body text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-brand-blue disabled:opacity-60"
                            >
                                {processing ? (
                                    <>
                                        <LuLoader className="h-4 w-4 animate-spin" /> Sendingâ€¦
                                    </>
                                ) : (
                                    'Submit My Free Design Request'
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default function Free3dDesign({ reviews = [], seo = {}, gallery = [] }) {
    return (
        <SiteLayout reviews={reviews}>
            <Seo
                seo={seo}
                fallbackTitle="Free 3D Kitchen Design | Captivating Construction Group"
                fallbackDescription="Get a free, photorealistic 3D kitchen design tailored to your space, style, and budget. No-obligation designs with fast turnarounds and contractor pricing on cabinets."
            />
            <ServiceSchema
                serviceName="Free 3D Kitchen Design"
                serviceType="Kitchen design and remodeling"
                description="Free photorealistic 3D kitchen designs tailored to your space, style, and budget â€” for homeowners and contractors across New Jersey and nationwide."
                path="/free-3d-design"
            />

            <Hero />

            {/* What's Included â€” text left, image right */}
            <section className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-[1200px] px-4">
                    <FeatureBlock
                        heading="What's Included In Your Free 3D Kitchen Design?"
                        bullets={INCLUDED}
                        image="/image/interiors.webp"
                        imageAlt="3D kitchen design rendering"
                        ctaLabel="Start Your Free 3D Design"
                        ctaHref={FORM_ANCHOR}
                        reverse
                    />
                </div>
            </section>

            {/* Why choose us â€” image left, text right */}
            <section className="bg-[#f3f4f6] py-16 lg:py-24">
                <div className="mx-auto max-w-[1200px] px-4">
                    <FeatureBlock
                        heading="Why Homeowners & Contractors Choose Us:"
                        bullets={WHY_US}
                        image="/image/what-we-do.webp"
                        imageAlt="Custom kitchen built by Captivating Construction"
                        ctaLabel="Start Your Free 3D Design"
                        ctaHref={FORM_ANCHOR}
                    />
                </div>
            </section>

            {/* Gallery */}
            <section className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-[1200px] px-4">
                    <div className="text-center">
                        <h2 className="font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                            Real Kitchens. Real Results.
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl font-body text-base leading-relaxed text-gray-600">
                            Browse real 3D kitchen designs and remodels â€” custom-built by our team and delivered nationwide.
                        </p>
                    </div>
                    <div className="mt-10">
                        <Gallery images={gallery} />
                    </div>
                </div>
            </section>

            <DesignForm />
            <CtaSection />
        </SiteLayout>
    );
}

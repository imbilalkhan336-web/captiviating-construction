import { LuBadgeCheck, LuHardHat, LuClock, LuHandshake, LuBadgeDollarSign, LuShieldCheck } from 'react-icons/lu';

const FEATURES = [
    {
        icon: LuBadgeCheck,
        title: 'Quality Construction',
        body: 'We use top-grade materials and proven techniques to ensure lasting quality.',
    },
    {
        icon: LuHardHat,
        title: 'Experienced Team',
        body: 'Our skilled professionals bring years of expertise to every project.',
    },
    {
        icon: LuClock,
        title: 'On-Time Delivery',
        body: 'We value your time and ensure projects are completed on schedule.',
    },
    {
        icon: LuHandshake,
        title: 'Transparent Process',
        body: 'Clear communication and honest updates at every step of the project.',
    },
    {
        icon: LuBadgeDollarSign,
        title: 'Competitive Pricing',
        body: 'High-quality construction solutions that fit your budget.',
    },
    {
        icon: LuShieldCheck,
        title: 'Safety First',
        body: 'We follow strict safety standards to protect our team and your project.',
    },
];

function Feature({ icon: Icon, title, body }) {
    return (
        <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 bg-white text-brand-orange shadow-sm">
                <Icon className="h-7 w-7" strokeWidth={1.6} />
            </div>
            <h3 className="mt-4 font-display text-base font-semibold uppercase leading-tight text-[#0A2A4A]">{title}</h3>
            <p className="mx-auto mt-2 max-w-[220px] font-body text-sm leading-relaxed text-gray-500">{body}</p>
        </div>
    );
}

export default function WhyChooseUs() {
    return (
        <section className="relative overflow-hidden bg-white py-16 lg:py-24">
            {/* Construction photo (diagonal white fade baked into the image) â€” desktop only */}
            <div
                aria-hidden="true"
                className="absolute inset-0 hidden bg-cover bg-right bg-no-repeat lg:block"
                style={{ backgroundImage: "url('/image/why-choose-bg.webp')" }}
            />

            <div className="relative mx-auto max-w-[1200px] px-4">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3">
                        <span aria-hidden="true" className="h-px w-10 bg-brand-orange" />
                        <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">
                            Why Choose Us
                        </p>
                    </div>
                    <h2 className="mt-4 font-display text-[30px] font-semibold uppercase leading-tight text-[#0A2A4A] md:text-[38px] lg:text-[44px]">
                        Building More
                        <br />
                        Than Structures
                    </h2>
                    <p className="mt-5 max-w-md font-body text-base leading-relaxed text-gray-600">
                        We deliver exceptional construction services with quality, integrity and
                        on-time results you can trust.
                    </p>

                    <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        {FEATURES.map((feature) => (
                            <Feature
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                body={feature.body}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

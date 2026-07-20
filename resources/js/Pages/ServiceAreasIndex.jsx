import { Link } from '@inertiajs/react';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import Breadcrumbs from '@/Components/FrontComponents/Breadcrumbs';
import ServiceSchema from '@/Components/FrontComponents/ServiceSchema';
import ScheduleSection from '@/Components/FrontComponents/ScheduleSection';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';
import { LuMapPin, LuArrowRight, LuClock, LuShieldCheck, LuBadgeDollarSign, LuHouse, LuFlame, LuSnowflake, LuWrench, LuDroplets, LuWind, LuBuilding2 } from 'react-icons/lu';

const FAQS = [
    { question: 'Which areas of New Jersey does Captivating Construction Group serve?', answer: 'We serve homeowners throughout New Jersey, with a strong focus on Monmouth, Middlesex, Ocean, Bergen, and Essex counties. The pages below break down coverage by county and city.' },
    { question: 'Do you build custom homes across all your service areas?', answer: 'Yes. Custom home builds, additions, kitchen renovations, basement finishing, and full remodels are available throughout every county we serve.' },
    { question: 'Does pricing change by location?', answer: 'Project pricing is based on scope, materials, and site conditions — not your zip code. We provide detailed written estimates for every project before work begins.' },
    { question: “What if my town isn't listed on your service-area pages?”, answer: 'Contact us anyway. The listed towns are anchors, not boundaries — we regularly take on projects in surrounding communities throughout New Jersey.' },
    { question: 'Do you handle permits for projects in every area you serve?', answer: 'Yes. We manage all required permits and inspections in every municipality we work in, so you never have to navigate local building departments alone.' },
    { question: 'Can you work on commercial or multi-family properties?', answer: 'We focus primarily on residential construction and renovation, but we do take on select commercial and multi-family projects — contact us to discuss your specific needs.' },
];

const TRADES = [
    { icon: LuHouse, name: 'Custom Home Builds', href: '/services/luxury-home-builder-nj', body: 'Full custom home construction on your lot — designed and built to your vision.' },
    { icon: LuWrench, name: 'Kitchen Renovations', href: '/services/nj-kitchen-renovations', body: 'Complete kitchen remodels with custom cabinetry, countertops, and layout redesigns.' },
    { icon: LuBuilding2, name: 'Additions', href: '/services/additions', body: 'Seamless home additions that expand your living space without disrupting your life.' },
    { icon: LuFlame, name: 'Basement Finishing', href: '/services/basement-services-nj', body: 'Transform unfinished basements into living space, home offices, or entertainment rooms.' },
    { icon: LuShieldCheck, name: 'Build On Your Lot', href: '/services/build-on-your-lot-in-nj', body: 'Own land? We\'ll design and build your dream home from the ground up.' },
    { icon: LuMapPin, name: 'New Construction', href: '/services/full-home-remodel-new-construction-nj', body: 'Full-home new construction and complete gut renovations across New Jersey.' },
];

const WHY = [
    { icon: LuShieldCheck, title: 'Licensed & Insured', body: 'Fully licensed NJ general contractor with insurance on every project, every time.' },
    { icon: LuBadgeDollarSign, title: 'Transparent Pricing', body: 'Detailed written estimates before any work begins — no hidden costs or surprises.' },
    { icon: LuClock, title: 'On-Time Delivery', body: 'We set realistic timelines and hold ourselves accountable to deliver on schedule.' },
    { icon: LuHouse, title: 'NJ Local Experts', body: 'Family-owned and rooted in New Jersey — we know local codes, permits, and communities.' },
];

export default function ServiceAreasIndex({ counties = [], reviews = [] }) {
    return (
        <SiteLayout reviews={reviews}>
            <Seo
                seo={{}}
                fallbackTitle=”Service Areas — Custom Home Builder & Remodeler NJ | Captivating Construction Group”
                fallbackDescription=”Captivating Construction Group serves homeowners throughout New Jersey — find your county for custom home builds, kitchen renovations, additions, and basement finishing. Call today!”
            />
            <ServiceSchema
                serviceName="Service Areas — NJ Custom Home Builder"
                serviceType="Custom home building and renovation"
                description="Captivating Construction Group serves homeowners across New Jersey with custom home builds, renovations, additions, and remodels."
                path="/service-areas"
                faqs={FAQS}
            />

            <Breadcrumbs items={[{ label: 'Service Areas', href: '/service-areas' }]} />

            <article>
                <PageHeader
                    label="Where We Work"
                    title="Areas We Serve Across New Jersey"
                    description="Find your county and town below  -  Captivating Construction Group brings the same trusted technicians to homes and businesses across central New Jersey."
                    image="/img/heroes/local.webp"
                />

                {/* Intro + map */}
                <section className="bg-white py-[60px] md:py-[80px] lg:py-[100px]">
                    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                            <div>
                                <p className="font-montserrat text-[16px] font-normal leading-[26px] text-black md:text-base">
                                    Looking for trusted HVAC service areas in NJ? Captivating Construction Group covers homes and
                                    businesses across <strong className="text-[#07264A]">Monmouth, Middlesex, and Ocean
                                    counties</strong>  -  from the Jersey Shore towns along the Garden State Parkway to the
                                    inland neighborhoods of central New Jersey. Whether you're near the boardwalks of Point
                                    Pleasant, the historic downtown of Red Bank, or the busy corridors of Edison and
                                    Woodbridge, our licensed technicians are nearby and ready to help  -  often the same day.
                                </p>
                                <p className="mt-4 font-montserrat text-[16px] font-normal leading-[26px] text-black md:text-base">
                                    We handle heating, cooling, plumbing, drains, and indoor air quality for every kind of
                                    home and property in the region. No matter where you live across our three counties, you
                                    get the same honest, flat-rate pricing and friendly, professional service.
                                </p>

                                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {WHY.map(({ icon: Icon, title, body }) => (
                                        <div key={title} className="flex items-start gap-3">
                                            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                                                <Icon className="h-5 w-5" />
                                            </span>
                                            <div className="leading-tight">
                                                <p className="font-body text-sm font-bold text-[#07264A]">{title}</p>
                                                <p className="mt-1 font-body text-xs leading-relaxed text-gray-600">{body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Service-area map */}
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/20 ring-1 ring-gray-200">
                                <iframe
                                    title="Captivating Construction Group HVAC service area map  -  Monmouth, Middlesex & Ocean counties, NJ"
                                    src="https://maps.google.com/maps?q=Monmouth+County,+New+Jersey&t=&z=8&ie=UTF8&iwloc=&output=embed"
                                    className="block aspect-[4/3] w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* County hubs + city hubs */}
                <section className="bg-gray-50 py-[60px] md:py-[80px] lg:py-[100px]">
                    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                        <div className="mb-10">
                            <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">Counties We Serve</p>
                            <h2 className="mt-2 font-display text-[28px] uppercase leading-[0.95] text-[#07264A] md:text-[34px]">
                                Choose Your County
                            </h2>
                        </div>

                        <div className="space-y-8">
                            {counties.map((county) => (
                                <div key={county.slug} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div className="flex items-start gap-3">
                                            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                                                <LuMapPin className="h-5 w-5" />
                                            </span>
                                            <div>
                                                <h3 className="font-display text-2xl uppercase text-[#07264A]">{county.name}</h3>
                                                {county.description && (
                                                    <p className="mt-1 max-w-2xl font-montserrat text-[16px] font-normal leading-[26px] text-black">
                                                        {county.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <Link
                                            href={`/service-areas/${county.slug}`}
                                            className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-[#07264A] px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-brand-orange"
                                        >
                                            County Hub
                                            <LuArrowRight className="h-3.5 w-3.5" />
                                        </Link>
                                    </div>

                                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                        {county.cities.map((city) => (
                                            <Link
                                                key={city.slug}
                                                href={city.href}
                                                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-all hover:border-brand-orange/50 hover:bg-white hover:shadow-md"
                                            >
                                                <span className="flex items-center gap-2 font-body text-sm font-bold text-[#07264A]">
                                                    <LuMapPin className="h-4 w-4 text-brand-orange" />
                                                    {city.name}
                                                </span>
                                                <LuArrowRight className="h-4 w-4 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-brand-orange" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trades available across the full service area */}
                <section className="bg-white py-[60px] md:py-[80px] lg:py-[100px]">
                    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                        <div className="mb-10 max-w-3xl">
                            <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">Full-Service Coverage</p>
                            <h2 className="mt-2 font-display text-[28px] uppercase leading-[0.95] text-[#07264A] md:text-[34px]">
                                Every Service, Everywhere We Work
                            </h2>
                            <p className="mt-4 font-montserrat text-[16px] font-normal leading-[26px] text-black md:text-base">
                                Coverage means more than a pin on a map. Every trade we offer is available in every
                                town across our HVAC service areas  -  there's no town where we only do heating or
                                only do drains. The same licensed technicians, the same flat-rate book, all six
                                service lines, all three counties.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {TRADES.map(({ icon: Icon, name, href, body }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-brand-orange/50 hover:shadow-md"
                                >
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <h3 className="mt-4 font-display text-xl uppercase text-[#07264A]">{name}</h3>
                                    <p className="mt-2 font-montserrat text-[16px] font-normal leading-[26px] text-black">{body}</p>
                                    <span className="mt-4 inline-flex items-center gap-1.5 font-body text-xs font-extrabold uppercase tracking-widest text-brand-orange">
                                        Explore {name}
                                        <LuArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How regional coverage actually works */}
                <section className="bg-gray-50 py-[60px] md:py-[80px] lg:py-[100px]">
                    <div className="mx-auto max-w-3xl px-4">
                        <div className="mb-8">
                            <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">How Coverage Works</p>
                            <h2 className="mt-2 font-display text-[28px] uppercase leading-[0.95] text-[#07264A] md:text-[34px]">
                                Built Around Central Jersey's Roads
                            </h2>
                        </div>
                        <div className="space-y-4 font-montserrat text-[16px] font-normal leading-[26px] text-black md:text-base [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline">
                            <p>
                                Our service areas aren't drawn around a single shop  -  they're built along the
                                corridors central New Jersey actually drives. Crews run zoned routes off the Garden
                                State Parkway, Route 9, Route 18, and I-195, so the truck that reaches you is the
                                one already working your part of the region, not one fighting traffic from the
                                other side of the state. That zoning is why a no-AC call in Brick and a water-heater
                                swap in Woodbridge can both land same-day appointments on the same afternoon.
                            </p>
                            <p>
                                Calls are dispatched in three tiers. Emergencies  -  burst pipes, gas smells, no heat
                                in a freeze  -  go straight to the front of the line in whichever county they come from. Same-day slots
                                handle urgent-but-stable problems like a failing AC or a slow leak. Everything else,
                                from <Link href="/heating">seasonal tune-ups</Link> to planned
                                {' '}<Link href="/cooling">system replacements</Link>, is scheduled around your week,
                                with arrival windows we actually keep.
                            </p>
                            <p>
                                The easiest way to use this page: pick your county hub above for an overview of
                                local service, then click through to your town's page for neighborhood-level detail.
                                Each town page also links to dedicated pages for every trade in that location  -  so
                                whether you're searching for a plumber in Toms River or AC repair in Edison, there's
                                a page that speaks to exactly where you live.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Service-area FAQs */}
                <section className="bg-white py-[60px] md:py-[80px] lg:py-[100px]">
                    <div className="mx-auto max-w-3xl px-4">
                        <div className="mb-8 text-center">
                            <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">Coverage Questions</p>
                            <h2 className="mt-2 font-display text-[28px] uppercase leading-[0.95] text-[#07264A] md:text-[34px]">
                                Service Area FAQs
                            </h2>
                        </div>
                        <div className="space-y-3">
                            {FAQS.map((f) => (
                                <details key={f.question} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                                    <summary className="flex cursor-pointer items-center justify-between gap-3 font-body text-sm font-bold text-[#07264A]">
                                        {f.question}
                                        <LuArrowRight className="h-4 w-4 flex-shrink-0 text-brand-orange transition-transform group-open:rotate-90" />
                                    </summary>
                                    <p className="mt-3 font-montserrat text-[16px] font-normal leading-[26px] text-black">{f.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </article>

            <ScheduleSection />

            <CtaBanner titleWeightClass="font-normal" />
        </SiteLayout>
    );
}

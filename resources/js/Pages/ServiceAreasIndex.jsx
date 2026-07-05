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
    { question: 'Which New Jersey counties does Guardian Air serve?', answer: 'Three: Monmouth, Middlesex, and Ocean. Inside those county lines we cover every town — the pages below break coverage down by county and by city.' },
    { question: 'Are response times the same across all your service areas?', answer: 'Close to it. Trucks are stationed around the region rather than at one central shop, so same-day service is standard in all three counties and emergencies typically see help within hours.' },
    { question: 'Does pricing change by location?', answer: 'Never. One flat-rate book covers the entire service area, so a repair costs the same in Freehold, Edison, or Toms River.' },
    { question: "What if my town isn't listed on your service-area pages?", answer: 'Call anyway. The listed towns are anchors, not boundaries — we routinely serve neighboring communities just outside them.' },
    { question: 'Is every service available in every town you cover?', answer: 'Yes. Heating, cooling, plumbing, drains, and indoor air quality are all offered everywhere we work — there are no "partial coverage" towns where only some trades are available.' },
    { question: 'Do you serve commercial properties throughout your service areas?', answer: 'We do. Offices, restaurants, retail spaces, and light-industrial buildings get the same coverage footprint as homes, with commercial HVAC and plumbing crews dispatched across all three counties.' },
    { question: 'Is emergency service available across the entire coverage area?', answer: 'Around the clock. Burst pipes, no-heat nights, and failed AC during a heatwave get priority dispatch in every county we serve — weekends and holidays included, with no overtime premium.' },
];

const TRADES = [
    { icon: LuFlame, name: 'Heating', href: '/heating', body: 'Furnace, boiler, and heat-pump repair, replacement, and tune-ups for cold Jersey winters.' },
    { icon: LuSnowflake, name: 'Cooling', href: '/cooling', body: 'AC repair, central air installation, and ductless mini-splits sized for humid shore summers.' },
    { icon: LuWrench, name: 'Plumbing', href: '/plumbing', body: 'Licensed plumbers for water heaters, leaks, fixtures, and 24/7 emergency calls.' },
    { icon: LuDroplets, name: 'Drains', href: '/drains', body: 'Drain cleaning, hydro jetting, and sewer camera inspections that find the real blockage.' },
    { icon: LuWind, name: 'Indoor Air Quality', href: '/indoor-air-quality', body: 'Duct cleaning, air purifiers, and humidity control for cleaner air in every room.' },
    { icon: LuBuilding2, name: 'Commercial HVAC', href: '/commercial-hvac', body: 'Rooftop units, ductwork, and maintenance plans for businesses across central NJ.' },
];

const WHY = [
    { icon: LuClock, title: 'Local & Same-Day', body: 'Technicians based in the area mean faster response when you need it most.' },
    { icon: LuShieldCheck, title: 'Licensed & Insured', body: 'Fully licensed NJ technicians and clean, code-compliant work on every visit.' },
    { icon: LuBadgeDollarSign, title: 'Upfront Pricing', body: 'Flat-rate quotes before any work begins — no overtime fees, no surprises.' },
    { icon: LuHouse, title: 'Neighbors You Trust', body: 'Family-owned and rooted in the communities we serve across central NJ.' },
];

export default function ServiceAreasIndex({ counties = [], reviews = [] }) {
    return (
        <SiteLayout reviews={reviews}>
            <Seo
                seo={{}}
                fallbackTitle="HVAC Service Areas — Central New Jersey | Guardian Air"
                fallbackDescription="Guardian Air's HVAC service areas span Monmouth, Middlesex & Ocean counties, NJ — find your town for fast, licensed heating, cooling & plumbing. Call today!"
            />
            <ServiceSchema
                serviceName="HVAC Service Areas"
                serviceType="HVAC, plumbing, and drain service"
                description="Guardian Air's HVAC service areas across Monmouth, Middlesex, and Ocean counties, New Jersey."
                path="/service-areas"
                faqs={FAQS}
            />

            <Breadcrumbs items={[{ label: 'Service Areas', href: '/service-areas' }]} />

            <article>
                <PageHeader
                    label="Where We Work"
                    title="Areas We Serve Across New Jersey"
                    description="Find your county and town below — Guardian Air brings the same trusted technicians to homes and businesses across central New Jersey."
                    image="/img/heroes/local.webp"
                />

                {/* Intro + map */}
                <section className="bg-white py-14 lg:py-20">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                            <div>
                                <p className="font-body text-[15px] leading-relaxed text-gray-600 md:text-base">
                                    Looking for trusted HVAC service areas in NJ? Guardian Air covers homes and
                                    businesses across <strong className="text-[#07264A]">Monmouth, Middlesex, and Ocean
                                    counties</strong> — from the Jersey Shore towns along the Garden State Parkway to the
                                    inland neighborhoods of central New Jersey. Whether you're near the boardwalks of Point
                                    Pleasant, the historic downtown of Red Bank, or the busy corridors of Edison and
                                    Woodbridge, our licensed technicians are nearby and ready to help — often the same day.
                                </p>
                                <p className="mt-4 font-body text-[15px] leading-relaxed text-gray-600 md:text-base">
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
                                    title="Guardian Air HVAC service area map — Monmouth, Middlesex & Ocean counties, NJ"
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
                <section className="bg-gray-50 py-14 lg:py-20">
                    <div className="mx-auto max-w-7xl px-4">
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
                                                    <p className="mt-1 max-w-2xl font-body text-sm leading-relaxed text-gray-600">
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
                <section className="bg-white py-14 lg:py-20">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="mb-10 max-w-3xl">
                            <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">Full-Service Coverage</p>
                            <h2 className="mt-2 font-display text-[28px] uppercase leading-[0.95] text-[#07264A] md:text-[34px]">
                                Every Service, Everywhere We Work
                            </h2>
                            <p className="mt-4 font-body text-[15px] leading-relaxed text-gray-600 md:text-base">
                                Coverage means more than a pin on a map. Every trade we offer is available in every
                                town across our HVAC service areas — there's no town where we only do heating or
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
                                    <p className="mt-2 font-body text-sm leading-relaxed text-gray-600">{body}</p>
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
                <section className="bg-gray-50 py-14 lg:py-20">
                    <div className="mx-auto max-w-3xl px-4">
                        <div className="mb-8">
                            <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">How Coverage Works</p>
                            <h2 className="mt-2 font-display text-[28px] uppercase leading-[0.95] text-[#07264A] md:text-[34px]">
                                Built Around Central Jersey's Roads
                            </h2>
                        </div>
                        <div className="space-y-4 font-body text-[15px] leading-relaxed text-gray-600 md:text-base [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline">
                            <p>
                                Our service areas aren't drawn around a single shop — they're built along the
                                corridors central New Jersey actually drives. Crews run zoned routes off the Garden
                                State Parkway, Route 9, Route 18, and I-195, so the truck that reaches you is the
                                one already working your part of the region, not one fighting traffic from the
                                other side of the state. That zoning is why a no-AC call in Brick and a water-heater
                                swap in Woodbridge can both land same-day appointments on the same afternoon.
                            </p>
                            <p>
                                Calls are dispatched in three tiers. Emergencies — burst pipes, gas smells, no heat
                                in a freeze — go straight to the front of the line in whichever county they come from. Same-day slots
                                handle urgent-but-stable problems like a failing AC or a slow leak. Everything else,
                                from <Link href="/heating">seasonal tune-ups</Link> to planned
                                {' '}<Link href="/cooling">system replacements</Link>, is scheduled around your week,
                                with arrival windows we actually keep.
                            </p>
                            <p>
                                The easiest way to use this page: pick your county hub above for an overview of
                                local service, then click through to your town's page for neighborhood-level detail.
                                Each town page also links to dedicated pages for every trade in that location — so
                                whether you're searching for a plumber in Toms River or AC repair in Edison, there's
                                a page that speaks to exactly where you live.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Service-area FAQs */}
                <section className="bg-white py-14 lg:py-20">
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
                                    <p className="mt-3 font-body text-sm leading-relaxed text-gray-600">{f.answer}</p>
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

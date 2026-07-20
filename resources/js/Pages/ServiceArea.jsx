import { Link } from '@inertiajs/react';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import Breadcrumbs from '@/Components/FrontComponents/Breadcrumbs';
import ServiceSchema from '@/Components/FrontComponents/ServiceSchema';
import ScheduleForm from '@/Components/FrontComponents/ScheduleForm';
import SectionHeading from '@/Components/FrontComponents/SectionHeading';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';
import { LuMapPin, LuArrowRight, LuCheck } from 'react-icons/lu';

export default function ServiceArea({ area, cities = [], trades = [], reviews = [] }) {
    const intro = area.intro?.length
        ? area.intro
        : [`Captivating Construction Group proudly serves homeowners throughout ${area.name} with custom home builds, kitchen renovations, basement finishing, additions, and full remodels.`];
    const faqs = (area.faqs || []).map((f) => ({ question: f.q, answer: f.a }));

    return (
        <SiteLayout showReviews={false}>
            <Seo
                seo={{}}
                fallbackTitle={`${area.title} | Captivating Construction Group`}
                fallbackDescription={area.description}
            />
            <ServiceSchema
                serviceName={`Custom Home Builder & Remodeler in ${area.name}`}
                serviceType="Custom home building and renovation"
                description={area.description}
                path={`/service-areas/${area.slug}`}
                faqs={faqs}
            />

            <Breadcrumbs
                items={[
                    { label: 'Service Areas', href: '/service-areas' },
                    { label: area.name, href: `/service-areas/${area.slug}` },
                ]}
            />

            <article>
                <PageHeader
                    label="Service Area"
                    title={`Captivating Construction Group in ${area.name}, NJ`}
                    image="/img/heroes/local.webp"
                    imageCover
                    description={area.description}
                    titleClassName="font-normal"
                />

                <div className="bg-white">
                    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 px-5 py-16 sm:px-6 lg:px-4 lg:py-24">
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                            <div className="lg:col-span-7">
                                <section>
                                    <SectionHeading sizeClass="text-[30px] font-normal">
                                        Your Local HVAC &amp; Plumbing Team in {area.name}
                                    </SectionHeading>
                                    <div className="mt-6 space-y-4 font-montserrat text-[16px] font-normal leading-[26px] text-black md:text-base [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline">
                                        {intro.map((p, i) => (
                                            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                                        ))}
                                    </div>
                                </section>

                                {/* Services offered in this county */}
                                <section className="mt-12">
                                    <SectionHeading sizeClass="text-[26px] font-normal">
                                        Services We Offer in {area.name}
                                    </SectionHeading>
                                    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        {trades.map((s) => (
                                            <Link
                                                key={s.slug}
                                                href={s.href}
                                                className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition-all hover:border-brand-orange/50 hover:shadow-md"
                                            >
                                                <span className="flex items-center gap-2 font-body text-sm font-bold text-[#07264A]">
                                                    <LuCheck className="h-4 w-4 text-brand-orange" />
                                                    {s.label} in {area.name}
                                                </span>
                                                <LuArrowRight className="h-4 w-4 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-brand-orange" />
                                            </Link>
                                        ))}
                                    </div>
                                </section>

                                {/* Towns served  -  each links to its city hub */}
                                <section className="mt-12">
                                    <SectionHeading sizeClass="text-[26px] font-normal">
                                        Towns We Serve in {area.name}
                                    </SectionHeading>
                                    <div className="mt-6 flex flex-wrap gap-2.5">
                                        {(cities.length > 0
                                            ? cities
                                            : area.towns.map((t) => ({ slug: t, name: t, href: null }))
                                        ).map((town) =>
                                            town.href ? (
                                                <Link
                                                    key={town.slug}
                                                    href={town.href}
                                                    className="group inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 font-body text-sm font-semibold text-[#07264A] transition-all hover:border-brand-orange/50 hover:bg-white hover:text-brand-orange"
                                                >
                                                    <LuMapPin className="h-3.5 w-3.5 text-brand-orange" />
                                                    {town.name}
                                                </Link>
                                            ) : (
                                                <span
                                                    key={town.slug}
                                                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 font-body text-sm font-semibold text-[#07264A]"
                                                >
                                                    <LuMapPin className="h-3.5 w-3.5 text-brand-orange" />
                                                    {town.name}
                                                </span>
                                            )
                                        )}
                                    </div>
                                    <p className="mt-4 font-body text-sm text-gray-500">
                                        Don&apos;t see your town? We likely still serve it  -  give us a call to confirm.
                                    </p>
                                </section>

                                {faqs.length > 0 && (
                                    <section className="mt-12">
                                        <SectionHeading sizeClass="text-[26px] font-normal">
                                            {area.name} Service FAQs
                                        </SectionHeading>
                                        <div className="mt-6 space-y-3">
                                            {faqs.map((f) => (
                                                <details key={f.question} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                                                    <summary className="flex cursor-pointer items-center justify-between gap-3 font-body text-sm font-bold text-[#07264A]">
                                                        {f.question}
                                                        <LuArrowRight className="h-4 w-4 flex-shrink-0 text-brand-orange transition-transform group-open:rotate-90" />
                                                    </summary>
                                                    <p className="mt-3 font-montserrat text-[16px] font-normal leading-[26px] text-black">{f.answer}</p>
                                                </details>
                                            ))}
                                        </div>
                                    </section>
                                )}
                            </div>

                            {/* Sticky schedule form */}
                            <aside className="lg:col-span-5">
                                <div className="lg:sticky lg:top-24">
                                    <ScheduleForm headingClassName="font-normal" />
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </article>

            <CtaBanner titleWeightClass="font-normal" />
        </SiteLayout>
    );
}

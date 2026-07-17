import { useState } from 'react';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import Gallery from '@/Components/FrontComponents/Gallery';
import FeatureBlock from '@/Components/FrontComponents/FeatureBlock';
import RedefiningLuxury from '@/Components/pages-sections/RedefiningLuxury';
import CtaSection from '@/Components/pages-sections/CtaSection';

const HERO_BG = '/image/gellory/DJI_20240830142704_0747_D.webp';

const CATEGORIES = ['All', 'New Construction', 'Renovations', 'Additions', 'Exteriors'];

export default function Portfolio({ gallery = [], reviews = [], seo = {} }) {
    const [filter, setFilter] = useState('All');
    const cats = CATEGORIES.slice(1);
    const shown = filter === 'All' ? gallery : gallery.filter((_, i) => cats[i % cats.length] === filter);

    return (
        <SiteLayout reviews={reviews}>
            <Seo
                seo={seo}
                fallbackTitle="Portfolio | Captivating Construction Group"
                fallbackDescription="Explore our portfolio of custom homes, renovations, additions, and remodels built across New Jersey by Captivating Construction Group."
            />

            {/* Hero */}
            <section className="relative bg-[#0A2A4A]">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${HERO_BG}')` }}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
                <div className="relative mx-auto max-w-[1200px] px-4 py-20 text-center lg:py-28">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange">
                        Our Work
                    </p>
                    <h1 className="mt-3 font-montserrat text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                        Portfolio
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl font-body text-sm leading-relaxed text-white/85 md:text-base">
                        A look at the custom homes, renovations, and additions we&apos;ve brought to life for
                        families across New Jersey â€” built with craftsmanship, care, and lasting value.
                    </p>
                </div>
            </section>

            {/* Gallery */}
            <section className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-[1200px] px-4">
                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue-light">
                            Portfolio
                        </p>
                        <h2 className="mt-2 font-montserrat text-[35px] font-semibold leading-tight text-black">
                            Building Success Stories
                        </h2>
                    </div>
                    {/* Filter tabs */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                        {CATEGORIES.map((c) => (
                            <button
                                key={c}
                                type="button"
                                onClick={() => setFilter(c)}
                                className={`rounded-full px-4 py-2 font-body text-xs font-bold transition-colors sm:text-sm ${
                                    filter === c
                                        ? 'bg-brand-blue-light text-white shadow'
                                        : 'text-gray-600 hover:text-brand-blue-light'
                                }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <div className="mt-10">
                        <Gallery images={shown} />
                    </div>
                </div>
            </section>

            {/* Redefining Luxury (reused) */}
            <RedefiningLuxury />

            {/* Second feature block */}
            <section className="bg-[#f3f4f6] py-16 lg:py-24">
                <div className="mx-auto max-w-[1200px] px-4">
                    <FeatureBlock
                        reverse
                        eyebrow="Our Approach"
                        heading="Built Around You, From Start to Finish"
                        body="Every project begins with your vision. We combine decades of experience with a concierge-like approach â€” guiding you through planning, design, and construction so the finished result reflects exactly how you want to live. Meticulous attention to detail and an uncompromising commitment to quality are the cornerstone of everything we build."
                        image="/image/gellory/21-Driftwood-5-1.webp"
                        imageAlt="Custom home built by Captivating Construction"
                    />
                </div>
            </section>

            {/* CTA */}
            <CtaSection />
        </SiteLayout>
    );
}

import { Link } from '@inertiajs/react';
import { LuTrees, LuSofa, LuStar, LuArrowRight, LuCheck } from 'react-icons/lu';

function CapabilityCard({ icon: Icon, title, items, image, href = '/services' }) {
    return (
        <div
            className="group relative isolate flex flex-col overflow-hidden rounded-2xl bg-[#07264A] bg-cover bg-center p-8 ring-1 ring-white/5 transition-transform duration-500 ease-out hover:-translate-y-1"
            style={image ? { backgroundImage: `url('${image}')` } : undefined}
        >
            <div className="absolute inset-0 bg-[#07264A]/80" aria-hidden="true" />
            <div className="relative z-10 flex flex-1 flex-col">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange ring-1 ring-brand-orange/30 backdrop-blur-sm">
                    <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold uppercase text-white">
                    {title}
                </h3>
                <ul className="mt-4 flex-1 space-y-2.5">
                    {items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 font-body text-sm leading-snug text-white/80">
                            <LuCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" />
                            {item}
                        </li>
                    ))}
                </ul>
                <Link
                    href={href}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-orange"
                >
                    Explore Services
                    <LuArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}

export default function AreaWeServe() {
    return (
        <section className="relative bg-white pt-12 pb-8">
            <div className="mx-auto max-w-[1200px] px-4">
                <div>
                    <p className="text-sm font-extrabold uppercase text-brand-orange md:text-base lg:text-[24px]">
                        What We Build
                    </p>
                    <h2 className="mt-3 font-display text-[30px] font-semibold uppercase leading-tight text-black md:text-[38px] lg:text-[44px]">
                        Inside &amp; out, done right.
                    </h2>
                    <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-black">
                        From striking curb appeal to refined interior finishes, Captivating Construction
                        handles every detail of your project with one trusted team â€” delivering timeless
                        design and lasting value across New Jersey.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <CapabilityCard
                        icon={LuTrees}
                        title="Exteriors"
                        items={[
                            'Roofing & Siding',
                            'Custom Stonework',
                            'Decks & Balconies',
                            'Paver Driveways',
                            'Custom Windows',
                            'Patios & Outdoor Living',
                        ]}
                    />
                    <CapabilityCard
                        icon={LuSofa}
                        title="Interiors"
                        items={[
                            'Full Home Remodels',
                            'Kitchen & Bathroom Renovations',
                            'Custom Built-Ins',
                            'Coffered Ceilings',
                            'Custom Bars',
                        ]}
                    />
                    <CapabilityCard
                        icon={LuStar}
                        title="Specialty Services"
                        items={[
                            'Build Your Lot',
                            'Luxury Home Builders',
                            'Basement Renovations',
                            'Home Additions',
                            'Kitchen Renovations',
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

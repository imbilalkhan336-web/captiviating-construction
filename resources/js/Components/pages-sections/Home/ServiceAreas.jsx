import { Link } from '@inertiajs/react';
import { LuMapPin, LuArrowRight } from 'react-icons/lu';

const counties = [
    {
        name: 'Monmouth',
        towns: 'Freehold, Red Bank, Middletown, Howell',
        tag: 'Same-Day',
        href: '/service-areas/monmouth-county',
    },
    {
        name: 'Middlesex',
        towns: 'Edison, New Brunswick, Woodbridge, Piscataway',
        tag: 'Same-Day',
        href: '/service-areas/middlesex-county',
    },
    {
        name: 'Ocean',
        towns: 'Toms River, Brick, Lakewood, Point Pleasant',
        tag: 'Same-Day',
        href: '/service-areas/ocean-county',
    },
];

export default function ServiceAreas() {
    return (
        <section className="relative overflow-hidden bg-[#07264A] py-20 lg:py-28">
            {/* Decorative blur orbs */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand-orange/5 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-brand-blue/5 blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Map */}
                    <div className="relative">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/10">
                            <iframe
                                title="Guardian Air service map — New Jersey"
                                src="https://maps.google.com/maps?q=New+Jersey,+USA&t=&z=8&ie=UTF8&iwloc=&output=embed"
                                className="block aspect-[4/3] w-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -bottom-5 -right-2 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-dark px-5 py-3 text-center shadow-lg shadow-brand-orange/30 sm:right-6">
                            <p className="font-display text-lg uppercase tracking-wide text-white">
                                3 Counties
                            </p>
                            <p className="text-[10px] font-extrabold uppercase tracking-widest text-white/80">
                                Same-Day Response
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">
                            Service Areas
                        </p>
                        <span
                            aria-hidden="true"
                            className="mt-3 block h-0.5 w-10 rounded-full bg-brand-orange"
                        />
                        <h2 className="mt-4 font-display text-[34px] uppercase leading-[0.95] text-white md:text-[46px] lg:text-[54px]">
                            Proudly Serving{' '}
                            <span className="text-brand-orange">Central NJ</span>
                        </h2>
                        <p className="mt-5 max-w-md font-body text-[15px] leading-relaxed text-white/70 md:text-base">
                            Guardian Air proudly serves homeowners and businesses across Central New
                            Jersey. From heating emergencies in Freehold to plumbing repairs in Toms
                            River, our licensed technicians are never far away.
                        </p>

                        {/* County cards */}
                        <div className="mt-8 space-y-3">
                            {counties.map((area) => (
                                <Link
                                    key={area.name}
                                    href={area.href}
                                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-all duration-500 hover:border-brand-orange/40 hover:bg-white/10"
                                >
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-orange/20 text-brand-orange transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                                        <LuMapPin className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <p className="font-display text-base uppercase tracking-wide text-white">
                                                {area.name}
                                            </p>
                                            <span className="rounded-full bg-brand-orange/20 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-brand-orange">
                                                {area.tag}
                                            </span>
                                        </div>
                                        <p className="mt-0.5 text-xs text-white/50">
                                            {area.towns}
                                        </p>
                                    </div>
                                    <LuArrowRight className="h-4 w-4 text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-orange" />
                                </Link>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href="/services"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-dark px-8 py-3.5 text-sm font-extrabold uppercase tracking-widest text-white shadow-lg shadow-brand-orange/30 transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                        >
                            View All Services
                            <LuArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

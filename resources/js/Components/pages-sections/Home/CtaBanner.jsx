import { LuShieldCheck, LuCalendarCheck, LuGem, LuAward } from 'react-icons/lu';
import { PillButton, PhonePillButton } from '@/Components/FrontComponents/PillButton';

const PHONE = '(732) 272-5937';

const trustItems = [
    {
        icon: LuShieldCheck,
        title: 'Licensed & Insured',
        body: 'A fully licensed New Jersey builder.',
    },
    {
        icon: LuCalendarCheck,
        title: 'On Time & On Budget',
        body: 'Careful planning on every project.',
    },
    {
        icon: LuGem,
        title: 'Quality Craftsmanship',
        body: 'Timeless design and lasting value.',
    },
    {
        icon: LuAward,
        title: '30+ Years Experience',
        body: 'Decades of trusted construction.',
    },
];

export default function CtaBanner({ titleWeightClass = 'font-semibold' }) {
    return (
        <section className="bg-white py-8 lg:py-12">
            <div className="mx-auto max-w-[1200px] px-4">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                    <div
                        className="relative bg-[#07264A] bg-cover bg-center p-8 sm:p-12 lg:p-16"
                        style={{ backgroundImage: "url('/img/readywhen.webp')" }}
                    >
                        <div className="lg:w-1/2">
                            <p className="text-[12px] font-extrabold uppercase text-brand-orange lg:text-[12px]">
                                Ready to Build?
                            </p>
                            <h2 className={`mt-3 font-display text-[28px] ${titleWeightClass} uppercase leading-tight text-white md:text-[36px] lg:text-[42px]`}>
                                Let&apos;s Build Something
                                <br />
                                <span className="text-brand-orange">Captivating</span>.
                            </h2>
                            <p className="mt-5 max-w-md font-montserrat text-sm leading-relaxed text-white/80">
                                Serving homeowners across New Jersey from concept to completion. Call now
                                or reach out and let&apos;s bring your vision to life.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <PillButton href="/contact" variant="yellow" size="sm" className="min-w-[180px] justify-center lg:min-w-[230px] lg:gap-3 lg:px-8 lg:py-3 lg:text-sm">
                                    Contact Us Today
                                </PillButton>
                                <PhonePillButton phone={PHONE} label={PHONE} size="sm" className="min-w-[180px] justify-center lg:min-w-[230px] lg:gap-3 lg:px-8 lg:py-3 lg:text-sm" />
                            </div>
                        </div>

                        {/* Trust strip */}
                        <div className="mt-12 grid grid-cols-1 divide-y divide-brand-orange/20 overflow-hidden rounded-2xl border border-brand-orange/30 bg-brand-blue-dark sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
                            {trustItems.map(({ icon: Icon, title, body }, idx) => (
                                <div
                                    key={title}
                                    className={[
                                        'flex items-start gap-4 p-4',
                                        idx > 0 ? 'sm:border-l sm:border-brand-orange/20' : '',
                                        idx === 2 ? 'sm:border-l-0 lg:border-l' : '',
                                    ].join(' ')}
                                >
                                    <Icon className="h-12 w-12 flex-shrink-0 text-brand-orange" style={{ strokeWidth: 1.25 }} />
                                    <div className="leading-tight">
                                        <div className="font-poppins text-sm font-bold uppercase tracking-wide text-brand-yellow">
                                            {title}
                                        </div>
                                        <p className="mt-1 font-montserrat text-xs leading-snug text-white/70">
                                            {body}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

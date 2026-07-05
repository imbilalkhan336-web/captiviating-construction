import { PillButton } from '../../FrontComponents/PillButton';

const perks = [
    'Two annual tune-ups (heating + cooling)',
    'Priority emergency service',
    '15% off all repairs',
    'No overtime or after-hours fees',
];

function CheckBadge() {
    return (
        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                />
            </svg>
        </span>
    );
}

export default function ComfortClub() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue to-brand-blue-light py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">
                            Membership
                        </p>
                        <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight text-white md:text-4xl lg:text-5xl">
                            Join the Arctic Comfort Club
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-white/80">
                            Priority service, savings, and peace of mind — year-round protection
                            for your home's heating, cooling, and plumbing systems.
                        </p>

                        <ul className="mt-8 space-y-3">
                            {perks.map((p) => (
                                <li key={p} className="flex items-start gap-3">
                                    <CheckBadge />
                                    <span className="text-white">{p}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10">
                            <PillButton variant="yellow" size="md" className="shadow-xl shadow-black/40">
                                Learn More
                            </PillButton>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div className="relative rounded-2xl border-2 border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur">
                            <p className="text-xs font-semibold uppercase tracking-widest text-brand-yellow">
                                Member Benefits
                            </p>
                            <p className="mt-2 text-5xl font-extrabold text-white">
                                $15<span className="text-2xl text-white/70">/mo</span>
                            </p>
                            <p className="mt-1 text-sm text-white/70">Starting price for residential plans</p>
                            <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                                <div className="rounded-lg bg-white/10 p-4">
                                    <div className="text-3xl font-extrabold text-brand-yellow">2x</div>
                                    <div className="mt-1 text-xs uppercase text-white/80">Tune-ups/yr</div>
                                </div>
                                <div className="rounded-lg bg-white/10 p-4">
                                    <div className="text-3xl font-extrabold text-brand-yellow">15%</div>
                                    <div className="mt-1 text-xs uppercase text-white/80">Off repairs</div>
                                </div>
                                <div className="rounded-lg bg-white/10 p-4">
                                    <div className="text-3xl font-extrabold text-brand-yellow">$0</div>
                                    <div className="mt-1 text-xs uppercase text-white/80">Overtime fees</div>
                                </div>
                                <div className="rounded-lg bg-white/10 p-4">
                                    <div className="text-3xl font-extrabold text-brand-yellow">24/7</div>
                                    <div className="mt-1 text-xs uppercase text-white/80">Priority access</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

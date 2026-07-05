const affiliations = [
    { label: 'NATE Certified' },
    { label: 'Energy Star Partner' },
    { label: 'BBB A+ Rated' },
    { label: 'ACCA Member' },
    { label: 'EPA Certified' },
    { label: 'Carrier Factory Authorized' },
];

export default function Affiliations() {
    return (
        <section className="bg-brand-gray py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-4">
                <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">
                    Trusted Affiliations &amp; Certifications
                </p>
                <div className="mt-8 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-6 md:gap-6">
                    {affiliations.map((a) => (
                        <div
                            key={a.label}
                            className="flex h-24 items-center justify-center rounded-lg bg-white px-4 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
                        >
                            <span className="text-center text-xs font-bold uppercase tracking-wider text-brand-blue">
                                {a.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

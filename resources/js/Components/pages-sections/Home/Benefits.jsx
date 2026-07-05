function CheckIcon() {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="mt-1 h-5 w-5 flex-shrink-0 text-brand-orange"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            />
        </svg>
    );
}

const benefits = [
    { title: 'Family-Owned Since 1977', body: 'Three generations of trusted New Jersey HVAC service.' },
    { title: 'NATE-Certified Technicians', body: 'Top-tier industry credentials on every truck.' },
    { title: '24/7 Emergency Service', body: "Heat and cooling failures don't wait — neither do we." },
    { title: 'Upfront, Transparent Pricing', body: 'No surprises. Full quotes before any work begins.' },
    { title: '100% Satisfaction Guarantee', body: 'We stand behind every install and every repair.' },
    { title: 'Licensed, Bonded &amp; Insured', body: 'Full NJ HVAC and plumbing licensing, bonding, and insurance.' },
    { title: 'Same-Day Service Available', body: 'Most jobs scheduled and completed within 24 hours.' },
    { title: 'Financing Options Available', body: '0% APR financing on qualifying installs.' },
];

export default function Benefits() {
    return (
        <section className="relative bg-white py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">
                        Why Choose Arctic Air
                    </p>
                    <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight text-[#0A2A4A] md:text-4xl">
                        Eight Reasons Homeowners Trust Us
                    </h2>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((b) => (
                        <div key={b.title} className="flex items-start gap-3">
                            <CheckIcon />
                            <div>
                                <h3 className="font-bold text-[#0A2A4A]">{b.title}</h3>
                                <p className="mt-1 text-sm leading-relaxed text-gray-600">{b.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

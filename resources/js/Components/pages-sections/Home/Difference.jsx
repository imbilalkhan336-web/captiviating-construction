import { PillButton } from '../../FrontComponents/PillButton';

const points = [
    {
        title: 'Extensive Experience',
        body: 'With over 45 years in the industry, we\'ve honed our skills and knowledge to offer you the best service possible.',
    },
    {
        title: 'Wide Range of Services',
        body: 'From air conditioning installation to furnace repair to plumbing and drains, our comprehensive service has you covered.',
    },
    {
        title: 'Customer-Focused Approach',
        body: 'Your comfort and satisfaction are our top priorities. We listen to your needs and tailor our services accordingly.',
    },
    {
        title: 'Innovative Technology',
        body: 'We use the latest HVAC technology to ensure maximum efficiency and performance in every job.',
    },
    {
        title: 'Competitive Pricing',
        body: 'Get high-quality services without breaking the bank. We offer competitive pricing and transparent estimates.',
    },
];

function Bullet() {
    return (
        <span aria-hidden="true" className="mt-2 inline-block h-2.5 w-2.5 flex-shrink-0 rotate-45 bg-brand-orange" />
    );
}

export default function Difference() {
    return (
        <section className="relative overflow-hidden bg-white py-20 lg:py-24">
            <div className="relative mx-auto max-w-[1200px] px-4">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-center">
                    <div className="lg:col-span-6">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">
                            The Arctic Air Difference
                        </p>
                        <h2 className="mt-4 text-3xl font-extrabold uppercase leading-tight text-[#0A2A4A] md:text-4xl lg:text-5xl">
                            Committed to Excellence in{' '}
                            <span className="text-brand-orange">Every Aspect</span>{' '}
                            of Our Work
                        </h2>

                        <ul className="mt-8 space-y-5">
                            {points.map((p) => (
                                <li key={p.title} className="flex items-start gap-3">
                                    <Bullet />
                                    <p className="text-base leading-relaxed text-gray-600">
                                        <span className="font-bold text-[#0A2A4A]">{p.title}:</span>{' '}
                                        {p.body}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10">
                            <PillButton variant="yellow" size="sm" className="w-[150px] shadow-xl shadow-black/40">About Us</PillButton>
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="relative h-full min-h-[360px] lg:min-h-[480px] overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
                            <img
                                src="https://www.arcticac.com/wp-content/uploads/2026/03/new-group-airial-img.webp"
                                alt="The Arctic Air team"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { IoCheckmarkCircle } from 'react-icons/io5';
import { PillButton } from '@/Components/FrontComponents/PillButton';

const POINTS = [
    'Custom homes designed around your lifestyle and vision',
    'Expert renovations that transform outdated spaces',
    'Basement finishing that adds comfort and value',
    'Personalized consultations to guide every step of the process',
];

export default function Craftsmanship() {
    return (
        <section className="bg-[#f3f4f6] py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Left — image collage + highlight card */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <img
                                src="/image/property-13.webp"
                                alt="Captivating Construction custom home"
                                loading="lazy"
                                className="aspect-[5/4] w-full rounded-xl object-cover shadow-sm"
                            />
                            <img
                                src="/image/property-20.webp"
                                alt="Custom home exterior by Captivating Construction"
                                loading="lazy"
                                className="aspect-[5/4] w-full rounded-xl object-cover shadow-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <img
                                src="/image/property-14.webp"
                                alt="Luxury home built by Captivating Construction"
                                loading="lazy"
                                className="aspect-[5/4] w-full rounded-xl object-cover shadow-sm"
                            />
                            <div className="flex flex-1 flex-col justify-center rounded-xl bg-brand-blue p-6 text-center shadow-sm">
                                <h3 className="font-display text-xl font-bold uppercase leading-tight text-white">
                                    Excellence That Gets Noticed
                                </h3>
                                <p className="mt-3 font-body text-sm leading-relaxed text-white/80">
                                    Recognized for excellence, our projects and craftsmanship have been featured
                                    in local and regional news outlets.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right — content */}
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue-light">
                            Building Exceptional Homes
                        </p>
                        <h2 className="mt-3 font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                            Craftsmanship You Can Trust
                        </h2>
                        <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-gray-600">
                            At Captivating Construction, we blend expertise, innovation, and care to deliver
                            projects that exceed expectations.
                        </p>

                        <ul className="mt-6 space-y-3.5">
                            {POINTS.map((point) => (
                                <li key={point} className="flex items-center gap-3 font-body text-[15px] text-gray-700">
                                    <IoCheckmarkCircle className="h-5 w-5 flex-shrink-0 text-brand-blue-light" />
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <PillButton href="/contact" variant="blue" size="md">
                                Schedule A Consultation
                            </PillButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

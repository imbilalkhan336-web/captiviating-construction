
import { PhonePillButton, SchedulePillButton } from './PillButton';

export default function About() {
    return (
        <section className="relative overflow-hidden bg-white pt-[10rem] pb-20">
            {/* Blue diagonal background for left side */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-brand-blue to-brand-blue-light skew-x-6 -translate-x-20 hidden lg:block rounded-r-3xl" />

            <div className="relative mx-auto max-w-[1200px] px-4">
                <div className="flex flex-col items-center gap-12 lg:flex-row">
                    {/* Image Side */}
                    <div className="relative w-full lg:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/img/about-img.webp"
                                alt="Arctic Air technician"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Rating Badge */}
                        <div className="absolute -bottom-6 left-6 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-brand-orange shadow-lg">
                            <span className="text-2xl font-extrabold text-white">4.8</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="h-2.5 w-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-[9px] font-semibold text-white/80 mt-0.5">500+ Reviews</span>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 lg:pl-8">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                            About Us
                        </span>
                        <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight text-brand-blue md:text-4xl">
                            Reliable, Long-Serving New Jersey HVAC Company
                        </h2>
                        <p className="mt-6 text-gray-600 leading-relaxed">
                            Arctic Air is your go-to HVAC service and installation company in New Jersey. Since 1977, we've been dedicated to
                            providing top-notch heating, cooling, and electrical solutions with a focus on reliability and
                            customer satisfaction.
                        </p>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Whether you're looking for a new air conditioner or a garage door or need to get a quick electrical or
                            plumbing repair, our reliable team is here to ensure your home remains comfortable year-round.
                            Discover why so many New Jersey residents trust us for all of their HVAC needs.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <PhonePillButton phone="(843) 545-5882" label="(843) 545-5882" size="md" />
                            <SchedulePillButton size="md" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { LuAward, LuGem, LuUsers, LuCalendarCheck } from 'react-icons/lu';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { AiOutlineSafety } from 'react-icons/ai';
import { TbHomeStar } from 'react-icons/tb';

function MiniFeature({ icon: Icon, title, body }) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none lg:rounded-xl lg:border lg:border-gray-200 lg:bg-white lg:p-4 lg:shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A55C1]/10 text-[#0A55C1]">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-black">
                {title}
            </h3>
            <p className="mt-1 font-body text-sm leading-relaxed text-gray-600">{body}</p>
        </div>
    );
}

function StatItem({ icon: Icon, value, label, iconClassName = 'h-6 w-6 lg:h-8 lg:w-8', className = '' }) {
    return (
        <div className={`flex items-center justify-start gap-4 px-2 lg:justify-center lg:gap-3 ${className}`}>
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand-orange/70 text-white lg:h-14 lg:w-14">
                <Icon className={iconClassName} />
            </div>
            <div className="leading-tight">
                <div className="text-[17px] font-extrabold text-white md:text-[21px] lg:text-[32px]">{value}</div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-brand-orange lg:text-sm">
                    {label}
                </div>
            </div>
        </div>
    );
}

export default function About({ image = '/img/about-img.webp' } = {}) {
    return (
        <section className="relative bg-white pt-12 pb-8">
            <div className="mx-auto max-w-[1200px] px-4">
                {/* Top â€” Mission + photo */}
                <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-12">
                    <div className="lg:col-span-6">
                        <p className="text-[14px] font-extrabold uppercase tracking-tight text-brand-orange md:text-[14px] lg:text-[19px]">
                            About Captivating Construction
                        </p>
                        <h2 className="mt-3 font-display text-[30px] font-semibold uppercase leading-tight text-black md:text-[38px] lg:text-[44px]">
                            Craftsmanship is our mission.
                        </h2>
                        <p className="mt-6 max-w-xl font-body text-[14px] leading-relaxed text-black">
                            For over 30 years, Captivating Construction has built a reputation on
                            responsibility, quality, and customer service. We see building as a fluid
                            process in which our experience and attention to detail allow us to stand
                            above the rest â€” and we take pride in finishing every project on time and on budget.
                        </p>

                        <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:gap-x-6 sm:gap-y-0 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-5">
                            <MiniFeature
                                icon={AiOutlineSafety}
                                title="Responsibility"
                                body="We stand behind our word and every commitment we make."
                            />
                            <span aria-hidden="true" className="hidden w-px bg-gray-200 sm:block lg:hidden" />
                            <MiniFeature
                                icon={LuGem}
                                title="Quality"
                                body="Exceptional craftsmanship and timeless, lasting design."
                            />
                            <span aria-hidden="true" className="hidden w-px bg-gray-200 sm:block lg:hidden" />
                            <MiniFeature
                                icon={LuUsers}
                                title="Customer Service"
                                body="Your vision leads â€” we guide you from concept to completion."
                            />
                            <span aria-hidden="true" className="hidden w-px bg-gray-200 sm:block lg:hidden" />
                            <MiniFeature
                                icon={IoShieldCheckmarkOutline}
                                title="Licensed & Insured"
                                body="A fully licensed New Jersey builder you can trust."
                            />
                        </div>
                    </div>

                    <div className="relative lg:col-span-6">
                        <img
                            src={image}
                            alt="Captivating Construction custom home craftsmanship"
                            className="w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>

                {/* Stats bar */}
                <div className="mt-8 rounded-2xl bg-brand-blue px-6 py-6 shadow-lg">
                    <div className="grid grid-cols-2 items-center lg:grid-cols-4 lg:divide-x lg:divide-white/15">
                        <StatItem
                            icon={LuAward}
                            value="30+"
                            label="Years of Experience"
                            className="border-b border-r border-white/15 py-4 lg:border-0 lg:py-0"
                        />
                        <StatItem
                            icon={TbHomeStar}
                            value="Custom"
                            label="Homes Built For You"
                            className="border-b border-white/15 py-4 lg:border-0 lg:py-0"
                        />
                        <StatItem
                            icon={LuCalendarCheck}
                            value="On Time"
                            label="& On Budget"
                            className="border-r border-white/15 py-4 lg:border-0 lg:py-0"
                        />
                        <StatItem
                            icon={LuGem}
                            value="100%"
                            label="Quality Committed"
                            className="py-4 lg:py-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

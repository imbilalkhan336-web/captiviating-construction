import { LuShieldCheck, LuClock, LuBadgeDollarSign } from 'react-icons/lu';
import ScheduleForm from '@/Components/FrontComponents/ScheduleForm';

const points = [
    { icon: LuClock, title: 'Same-Day Service', body: 'Fast response when you need it most.' },
    { icon: LuShieldCheck, title: 'Licensed & Insured', body: 'Trusted, certified technicians on every job.' },
    { icon: LuBadgeDollarSign, title: 'Upfront Pricing', body: 'Honest quotes with no hidden surprises.' },
];

export default function ScheduleSection({
    eyebrow = 'Ready When You Are',
    title = 'Book Your Service Today',
    description = 'Tell us what you need and pick a time that works for you. Our team serves Monmouth, Middlesex, and Ocean counties with fast, honest home-comfort service.',
}) {
    return (
        <section className="bg-gray-50 py-16 lg:py-24">
            <div className="mx-auto max-w-[1200px] px-4">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    <div>
                        <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">
                            {eyebrow}
                        </p>
                        <span aria-hidden="true" className="mt-3 block h-0.5 w-10 rounded-full bg-brand-orange" />
                        <h2 className="mt-4 font-display text-[34px] uppercase leading-[0.95] text-[#07264A] md:text-[46px] lg:text-[54px]">
                            {title}
                        </h2>
                        <p className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-gray-600 md:text-base">
                            {description}
                        </p>

                        <ul className="mt-8 space-y-5">
                            {points.map(({ icon: Icon, title: t, body }) => (
                                <li key={t} className="flex items-start gap-4">
                                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <div className="leading-tight">
                                        <p className="font-body text-sm font-bold text-[#07264A]">{t}</p>
                                        <p className="mt-1 font-body text-sm leading-relaxed text-gray-600">{body}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <ScheduleForm />
                </div>
            </div>
        </section>
    );
}

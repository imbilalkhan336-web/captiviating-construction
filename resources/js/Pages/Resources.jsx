import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';
import ScheduleSection from '@/Components/FrontComponents/ScheduleSection';
import {
    LuThermometer,
    LuDroplets,
    LuZap,
    LuShieldCheck,
    LuClipboardCheck,
    LuCircleHelp,
    LuArrowRight,
    LuDownload,
} from 'react-icons/lu';

const resources = [
    {
        icon: LuThermometer,
        title: 'HVAC Maintenance Guide',
        description:
            'Learn how to keep your furnace and AC running efficiently year-round. Covers filter changes, duct cleaning, and when to call a pro.',
        tag: 'HVAC',
    },
    {
        icon: LuDroplets,
        title: 'Plumbing Prevention Tips',
        description:
            'Avoid costly water damage with these simple prevention strategies. From pipe insulation to drain care and leak detection.',
        tag: 'Plumbing',
    },
    {
        icon: LuZap,
        title: 'Indoor Air Quality Tips',
        description:
            'Simple steps to breathe easier at home. Filter changes, humidity control, duct cleaning, and the warning signs of poor air quality.',
        tag: 'Air Quality',
    },
    {
        icon: LuShieldCheck,
        title: 'Emergency Preparedness',
        description:
            'What to do when your heat goes out at 2 AM or a pipe bursts. Step-by-step emergency response guide for NJ homeowners.',
        tag: 'Emergency',
    },
    {
        icon: LuClipboardCheck,
        title: 'Seasonal Maintenance Checklist',
        description:
            'A printable checklist for spring and fall tune-ups. Stay ahead of breakdowns with our seasonal home maintenance timeline.',
        tag: 'Checklist',
    },
    {
        icon: LuHelpCircle,
        title: 'Frequently Asked Questions',
        description:
            'Answers to the most common questions about pricing, warranties, service areas, and what to expect during a service call.',
        tag: 'FAQ',
    },
];

const seasonalTips = [
    {
        season: 'Spring',
        tips: ['Schedule AC tune-up', 'Check outdoor unit', 'Replace air filters', 'Inspect ductwork'],
    },
    {
        season: 'Summer',
        tips: ['Monitor refrigerant levels', 'Clear condensate drain', 'Check thermostat settings', 'Clean around outdoor unit'],
    },
    {
        season: 'Fall',
        tips: ['Schedule furnace inspection', 'Test heating system', 'Seal air leaks', 'Check carbon monoxide detectors'],
    },
    {
        season: 'Winter',
        tips: ['Insulate exposed pipes', 'Let faucets drip in cold snaps', 'Keep vents clear', 'Schedule boiler service'],
    },
];

export default function ResourcesPage({ reviews = [], seo = {} }) {
    return (
        <SiteLayout reviews={reviews}>
            <Seo
                seo={seo}
                fallbackTitle="HVAC & Plumbing Resources & Tips | Guardian Air"
                fallbackDescription="Free guides, checklists, and tips for HVAC maintenance, plumbing prevention, and indoor air quality from Guardian Air — serving Monmouth, Middlesex, and Ocean counties."
            />

            <article>
                <PageHeader
                    label="Help Center"
                    title="Resources & Tips"
                    description="Free guides, checklists, and expert advice to help you maintain your home's comfort systems and avoid costly surprises."
                />

                {/* Resource Cards */}
                <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-20 lg:py-28">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-orange/5 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl"
                    />

                    <div className="relative mx-auto max-w-7xl px-4">
                        <div className="mb-14 lg:mb-16">
                            <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">
                                Knowledge Base
                            </p>
                            <span
                                aria-hidden="true"
                                className="mt-3 block h-0.5 w-10 rounded-full bg-brand-orange"
                            />
                            <h2 className="mt-4 max-w-2xl font-display text-[34px] uppercase leading-[0.95] text-[#07264A] md:text-[46px] lg:text-[54px]">
                                Expert Advice for <span className="text-brand-orange">Homeowners</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {resources.map((item) => (
                                <div
                                    key={item.title}
                                    className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-orange/40 hover:shadow-2xl"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white shadow-lg shadow-brand-orange/30 transition-transform duration-500 group-hover:scale-110">
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-gray-500">
                                            {item.tag}
                                        </span>
                                    </div>
                                    <h3 className="mt-5 font-display text-xl uppercase text-[#07264A]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-gray-600">
                                        {item.description}
                                    </p>
                                    <button className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-orange transition-all group-hover:gap-3">
                                        Read More
                                        <LuArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Seasonal Checklist */}
                <section className="relative overflow-hidden bg-[#07264A] py-20 lg:py-28">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-orange/5 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl"
                    />

                    <div className="relative mx-auto max-w-7xl px-4">
                        <div className="mb-14 lg:mb-16">
                            <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">
                                Stay Ahead
                            </p>
                            <span
                                aria-hidden="true"
                                className="mt-3 block h-0.5 w-10 rounded-full bg-brand-orange"
                            />
                            <h2 className="mt-4 max-w-2xl font-display text-[34px] uppercase leading-[0.95] text-white md:text-[46px] lg:text-[54px]">
                                Seasonal <span className="text-brand-orange">Maintenance</span> Checklist
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {seasonalTips.map((season) => (
                                <div
                                    key={season.season}
                                    className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-brand-orange/40 hover:bg-white/10"
                                >
                                    <p className="font-display text-2xl uppercase text-brand-orange">
                                        {season.season}
                                    </p>
                                    <ul className="mt-4 space-y-3">
                                        {season.tips.map((tip, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-orange" />
                                                <span className="font-body text-sm text-white/70">
                                                    {tip}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-dark px-8 py-3.5 text-sm font-extrabold uppercase tracking-widest text-white shadow-lg shadow-brand-orange/30 transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                            >
                                <LuDownload className="h-4 w-4" />
                                Download Full Checklist
                            </a>
                        </div>
                    </div>
                </section>
            </article>

            <ScheduleSection />

            <CtaBanner />
        </SiteLayout>
    );
}

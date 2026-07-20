﻿import { Head } from '@inertiajs/react';
import SiteLayout from '@/Layouts/SiteLayout';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';
import { LuAward, LuUsers, LuMapPin } from 'react-icons/lu';
import { IoSettingsOutline, IoCallOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';
import { AiOutlineSafety } from 'react-icons/ai';

const values = [
    {
        icon: AiOutlineSafety,
        title: 'Integrity First',
        body: 'We tell you what is wrong  -  even when the answer is free advice. No upsells, no manufactured emergencies, no pressure quotes at the kitchen table.',
    },
    {
        icon: LuAward,
        title: 'Quality Craft',
        body: 'Every install and repair is held to manufacturer specs and exceeds local code. We do not take shortcuts that come back to bite homeowners later.',
    },
    {
        icon: LuUsers,
        title: 'Customer First',
        body: 'Your schedule and your home come before our convenience. We arrive in the window, protect your floors, and stand behind every job we touch.',
    },
    {
        icon: LuMapPin,
        title: 'Local & Rooted',
        body: 'We live where we work. Our technicians are your neighbors across Monmouth, Middlesex, and Ocean counties  -  invested in the long-term comfort of every NJ home.',
    },
];

const process = [
    {
        step: '01',
        icon: IoShieldCheckmarkOutline,
        title: 'Honest Diagnosis',
        body: 'We listen first, then inspect. You get a clear explanation in plain English  -  not technician-speak  -  so you understand what is actually wrong before we recommend anything.',
    },
    {
        step: '02',
        icon: LuAward,
        title: 'Upfront Pricing',
        body: 'Flat-rate quotes before any work begins. You approve the scope and the number before we pick up a tool  -  no surprise charges, no hourly meter running.',
    },
    {
        step: '03',
        icon: IoSettingsOutline,
        title: 'Quality Execution',
        body: 'Licensed HVAC and plumbing technicians complete the job to spec with the right parts on the truck  -  not whatever happens to be in stock.',
    },
    {
        step: '04',
        icon: IoCallOutline,
        title: 'Follow-Up & Guarantee',
        body: 'We follow up after every job to confirm everything is running right, and we back our workmanship with a written guarantee you can hold us to.',
    },
];

export default function TestPage({ reviews = [] }) {
    return (
        <SiteLayout reviews={reviews}>
            <Head title="Test  -  Captivating Construction Group" />

            <PageHeader
                label="Design Preview"
                title="Test Components"
                description="A living styleguide where new sections, layouts, and interactions are prototyped before they roll out across the site."
                image="/img/test-hero.webp"
            />

            {/* Our Values  -  split layout, heading left */}
            <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-[60px] md:py-[80px] lg:py-[100px]">
                <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-orange/5 blur-3xl" />
                <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#0A55C1]/5 blur-3xl" />

                <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
                        {/* Heading column (left) */}
                        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
                            <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">
                                What We Stand For
                            </p>
                            <h2 className="mt-3 font-display text-[42px] uppercase leading-[0.95] text-black md:text-[54px] lg:text-[62px]">
                                Standards We<br />
                                <span className="whitespace-nowrap text-brand-orange">Refuse to Bend</span>
                            </h2>
                            <span aria-hidden="true" className="mt-6 block h-1 w-16 rounded-full bg-brand-orange" />
                            <p className="mt-6 max-w-md font-montserrat text-[16px] font-normal leading-[26px] text-black md:text-base">
                                Four non-negotiables that shape every quote we write and every
                                job we close across central New Jersey  -  the lines we will not
                                cross, no matter how busy the day gets.
                            </p>

                            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-orange ring-1 ring-brand-orange/20">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                                Four Principles
                            </div>
                        </div>

                        {/* Cards (right, 2Ã—2) */}
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                {values.map(({ icon: Icon, title, body }, i) => (
                                    <div
                                        key={title}
                                        className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-xl"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="absolute right-4 top-2 font-display text-[64px] leading-none text-gray-100 transition-colors duration-300 group-hover:text-brand-orange/10"
                                        >
                                            {`0${i + 1}`}
                                        </span>

                                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white shadow-lg shadow-brand-orange/30">
                                            <Icon className="h-7 w-7" />
                                        </div>

                                        <span
                                            aria-hidden="true"
                                            className="relative mt-6 block h-1 w-8 rounded-full bg-brand-orange transition-all duration-300 group-hover:w-14"
                                        />

                                        <h3 className="relative mt-4 font-display text-xl uppercase text-[#07264A]">
                                            {title}
                                        </h3>
                                        <p className="relative mt-3 font-montserrat text-[16px] font-normal leading-[26px] text-black">
                                            {body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach  -  split layout, cards left, heading right (blue accent) */}
            <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-[60px] md:py-[80px] lg:py-[100px]">
                <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-blue/5 blur-3xl" />
                <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-brand-blue-light/5 blur-3xl" />

                <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
                        {/* Cards (left, 2x2) */}
                        <div className="order-2 lg:order-1 lg:col-span-7">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                {process.map(({ step, icon: Icon, title, body }) => (
                                    <div
                                        key={step}
                                        className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="absolute right-4 top-2 font-display text-[64px] leading-none text-gray-100 transition-colors duration-300 group-hover:text-brand-blue/10"
                                        >
                                            {step}
                                        </span>

                                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue-light to-brand-blue text-white shadow-lg shadow-brand-blue/30">
                                            <Icon className="h-7 w-7" />
                                        </div>

                                        <span
                                            aria-hidden="true"
                                            className="relative mt-6 block h-1 w-8 rounded-full bg-brand-blue transition-all duration-300 group-hover:w-14"
                                        />

                                        <h3 className="relative mt-4 font-display text-xl uppercase text-[#07264A]">
                                            {title}
                                        </h3>
                                        <p className="relative mt-3 font-montserrat text-[16px] font-normal leading-[26px] text-black">
                                            {body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Heading column (right) */}
                        <div className="order-1 lg:order-2 lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
                            <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-blue">
                                Our Approach
                            </p>
                            <h2 className="mt-3 font-display text-[42px] uppercase leading-[0.95] text-black md:text-[54px] lg:text-[62px]">
                                How <span className="text-brand-blue">We Work</span><br />
                                Step by Step
                            </h2>
                            <span aria-hidden="true" className="mt-6 block h-1 w-16 rounded-full bg-brand-blue" />
                            <p className="mt-6 max-w-md font-montserrat text-[16px] font-normal leading-[26px] text-black md:text-base">
                                A clear, four-step process so you know exactly what to expect
                                from the first phone call to the final follow-up  -  no surprises,
                                no scope creep, no scramble at the end.
                            </p>

                            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-brand-blue ring-1 ring-brand-blue/20">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                                Four Steps
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaBanner />
        </SiteLayout>
    );
}

import { useState } from 'react';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import { LuChevronRight } from 'react-icons/lu';
import CtaSection from '@/Components/pages-sections/CtaSection';

const HERO_BG = '/image/home-hero-bg.webp';

const FAQS = [
    {
        q: 'Timelines & Budgets?',
        a: "Every project is unique, so timelines and budgets are tailored to your specific scope. During your initial consultation we'll walk through your goals, provide a detailed estimate, and set a realistic schedule â€” then keep you updated at every milestone so there are no surprises.",
    },
    {
        q: 'How & When Are Payments Made?',
        a: "Payments are structured around clearly defined project milestones rather than a single lump sum. You'll receive a written payment schedule up front, so you always know exactly what's due and when â€” tied to real, verifiable progress on your project.",
    },
    {
        q: 'What About Permits?',
        a: 'As a licensed general contractor, we handle the entire permitting process for you â€” preparing documentation, submitting applications, and scheduling inspections so your project stays fully code-compliant from start to finish.',
    },
    {
        q: 'What Should I Ask Potential Contractors?',
        a: "Always ask about licensing and insurance, references and completed projects, a written contract and timeline, and how they handle changes and communication. We're happy to answer every one of these â€” transparency is at the core of how we work.",
    },
    {
        q: 'What About Materials?',
        a: "We use high-quality, durable materials and guide you through the options that best fit your design goals and budget. You're involved in every material selection, so the finished result reflects your taste and stands the test of time.",
    },
    {
        q: 'What Is a Change Order?',
        a: 'A change order is a written agreement documenting any change to the original scope, cost, or timeline â€” for example, if you decide to add or modify work mid-project. It keeps everything transparent and ensures you approve any adjustment before we proceed.',
    },
];

function FaqItem({ faq, isOpen, onToggle }) {
    return (
        <div className="overflow-hidden rounded-lg shadow-sm">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 bg-brand-blue-light px-5 py-4 text-left text-white transition-colors hover:bg-brand-blue"
            >
                <span className="font-body text-sm font-semibold md:text-base">{faq.q}</span>
                <LuChevronRight className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <p className="border-x border-b border-gray-100 bg-white px-5 py-4 font-body text-sm leading-relaxed text-gray-600">
                        {faq.a}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Faqs({ reviews = [], seo = {} }) {
    const [open, setOpen] = useState(0);

    return (
        <SiteLayout reviews={reviews}>
            <Seo
                seo={seo}
                fallbackTitle="FAQs | Captivating Construction Group"
                fallbackDescription="Answers to common questions about timelines, budgets, payments, permits, materials, and change orders for your custom home or renovation project in New Jersey."
            />

            {/* Hero */}
            <section className="relative bg-[#0A2A4A]">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${HERO_BG}')` }}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-black/65" />
                <div className="relative mx-auto max-w-[1200px] px-4 py-20 lg:py-24">
                    <h1 className="font-montserrat text-4xl font-bold text-white sm:text-5xl">
                        Frequently Asked Questions
                    </h1>
                </div>
            </section>

            {/* FAQ accordion */}
            <section className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-4xl px-4">
                    <div className="text-center">
                        <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand-blue-light">
                            FAQ&apos;s
                        </p>
                        <h2 className="mt-2 font-montserrat text-[35px] font-semibold leading-tight text-black">
                            Frequently Asked Questions
                        </h2>
                        <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-gray-600">
                            Captivating Construction Group is a full service construction company that will work
                            with you on every step of your project from start to finish. We provide a full range
                            of services from the renovation of a single bathroom to the remodeling of an entire
                            house. Our mission is to take your vision and make it come to life.
                        </p>
                    </div>

                    <div className="mt-10 space-y-3">
                        {FAQS.map((faq, i) => (
                            <FaqItem
                                key={faq.q}
                                faq={faq}
                                isOpen={open === i}
                                onToggle={() => setOpen(open === i ? -1 : i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection />
        </SiteLayout>
    );
}

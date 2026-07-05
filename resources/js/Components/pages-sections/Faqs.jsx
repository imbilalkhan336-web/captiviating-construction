import { useState } from 'react';

const defaultFaqs = [
    {
        q: 'What areas do you service?',
        a: 'We provide heating, cooling, plumbing, and drain services across Monmouth, Middlesex, and Ocean counties in New Jersey. If you\'re nearby and not sure, just give us a call.',
    },
    {
        q: 'Do you offer emergency service?',
        a: 'Yes. Our team is available 24/7 for HVAC and plumbing emergencies. When something breaks at the worst possible time, we\'ll be there to get your home comfortable again.',
    },
    {
        q: 'Are your technicians licensed and insured?',
        a: 'Absolutely. Every Guardian Air technician is fully licensed, insured, and trained — so you get safe, professional, and code-compliant work on every visit.',
    },
    {
        q: 'Do you provide upfront pricing?',
        a: 'Always. We give you a clear, honest price before any work begins — no hidden fees, no surprise charges, and no high-pressure upsells.',
    },
    {
        q: 'How soon can you come out?',
        a: 'In most cases we offer same-day service. Call us or schedule online and we\'ll get a technician to your home as quickly as possible.',
    },
    {
        q: 'What forms of payment do you accept?',
        a: 'We accept all major credit cards, checks, and offer flexible financing options on qualifying installations. Ask us about current financing promotions.',
    },
];

function FaqItem({ faq, isOpen, onToggle }) {
    return (
        <div
            className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all ${
                isOpen ? 'border-brand-orange/40 shadow-md' : 'border-gray-200 hover:shadow-md'
            }`}
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
            >
                <span
                    className={`flex-shrink-0 text-brand-orange transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                </span>
                <span aria-hidden="true" className="h-6 w-px flex-shrink-0 bg-gray-200" />
                <span className="font-body text-sm font-bold text-[#07264A] md:text-[15px]">{faq.q}</span>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className="overflow-hidden">
                    <p className="pb-4 pl-[56px] pr-5 font-body text-[14px] leading-relaxed text-gray-600">{faq.a}</p>
                </div>
            </div>
        </div>
    );
}

export default function Faqs({
    label = 'Got Questions?',
    title = 'Frequently Asked Questions',
    faqs = defaultFaqs,
}) {
    const [openFaq, setOpenFaq] = useState(-1);

    return (
        <section id="faqs" className="scroll-mt-28 bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
            <div className="mx-auto max-w-4xl px-4">
                <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-blue-light">
                        {label}
                    </p>
                    <h2 className="mt-2 font-display text-[26px] font-semibold uppercase leading-tight text-[#07264A] md:text-[34px] lg:text-[38px]">
                        {title}
                    </h2>
                </div>

                <div className="mt-8 space-y-3">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={faq.q}
                            faq={faq}
                            isOpen={openFaq === index}
                            onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

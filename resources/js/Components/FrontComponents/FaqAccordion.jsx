import { useState } from 'react';
import { LuChevronRight } from 'react-icons/lu';

/**
 * Reusable blue-bar FAQ accordion section.
 */
export default function FaqAccordion({ heading = 'Frequently Asked Questions', faqs = [] }) {
    const [open, setOpen] = useState(0);

    if (!faqs.length) {
        return null;
    }

    return (
        <section className="bg-white py-8 md:py-12">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <h2 className="text-center font-montserrat text-[28px] font-semibold leading-tight text-black md:text-[34px]">
                    {heading}
                </h2>

                <div className="mt-10 space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={faq.q} className="overflow-hidden rounded-lg shadow-sm">
                            <button
                                type="button"
                                onClick={() => setOpen(open === i ? -1 : i)}
                                aria-expanded={open === i}
                                className="flex w-full items-center justify-between gap-4 bg-brand-blue-light px-5 py-4 text-left text-white transition-colors hover:bg-brand-blue"
                            >
                                <span className="font-body text-sm font-semibold md:text-base">{faq.q}</span>
                                <LuChevronRight className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-90' : ''}`} />
                            </button>
                            <div className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                <div className="overflow-hidden">
                                    <p className="border-x border-b border-gray-100 bg-white px-5 py-4 font-montserrat text-[16px] font-normal leading-[26px] text-black">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

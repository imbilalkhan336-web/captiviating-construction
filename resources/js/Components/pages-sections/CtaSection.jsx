import { PillButton } from '@/Components/FrontComponents/PillButton';

/**
 * Reusable call-to-action banner. Drop it near the bottom of any page.
 */
export default function CtaSection({
    title = 'Ready to Start Your Next Project?',
    text = 'From new construction to renovations, our team is here to bring your vision to life with trusted craftsmanship and decades of experience in New Jersey.',
    buttonLabel = 'Get A Free Consultation',
    buttonHref = '/contact',
}) {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1200px] px-4 py-12 lg:py-10">
                <div className="rounded-3xl bg-brand-blue-light px-8 py-8 lg:px-16 lg:py-10">
                    <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div className="lg:max-w-2xl">
                            <h2 className="font-montserrat text-3xl font-semibold leading-tight text-white md:text-4xl">
                                {title}
                            </h2>
                            <p className="mt-4 font-body text-sm leading-relaxed text-white/85 md:text-base">
                                {text}
                            </p>
                        </div>
                        <PillButton href={buttonHref} variant="light" size="md" className="flex-shrink-0">
                            {buttonLabel}
                        </PillButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

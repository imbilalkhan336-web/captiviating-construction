import { PillButton } from '@/Components/FrontComponents/PillButton';

export default function GroupStatement() {
    return (
        <section className="bg-brand-blue-light py-8 lg:py-10">
            <div className="mx-auto max-w-4xl px-4 text-center">
                <h2 className="font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-white">
                    Captivating Construction Group
                </h2>

                <p className="mx-auto mt-6 max-w-2xl font-body text-[15px] leading-relaxed text-white/90 md:text-base">
                    For over 30 years, we&apos;ve been driven by one motto: deliver the finest quality homes with
                    the highest level of customer service. Responsibility, quality, and craftsmanship are what we
                    pin our reputation on — because you can&apos;t put a price on peace of mind, and when you work
                    with us, you won&apos;t have to.
                </p>

                <div className="mt-10">
                    <PillButton href="/contact" variant="light" size="md" className="!normal-case tracking-wider">
                        Contact Us Today
                    </PillButton>
                </div>
            </div>
        </section>
    );
}

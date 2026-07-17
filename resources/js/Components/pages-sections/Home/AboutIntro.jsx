import { PillButton } from '@/Components/FrontComponents/PillButton';

const ABOUT_IMG = '/image/about-img.webp';
const LOGO = '/image/CC-logo.webp';

export default function AboutIntro() {
    return (
        <section className="relative bg-brand-gray py-20 lg:py-16">
            <div className="mx-auto max-w-[1200px] px-4">
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
                    {/* Left â€” heading + copy + CTA */}
                    <div>
                        <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand-blue-light">
                            About Us
                        </p>
                        <h2 className="mt-2 font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                            Decades Of Captivating Craftsmanship
                        </h2>

                        <div className="mt-4 space-y-3 font-body text-[15px] leading-relaxed text-gray-600">
                            <p>
                                Captivating Construction Group is a full-service custom home builder that has
                                provided the pinnacle of luxury construction to their clients for decades.
                            </p>
                            <p>
                                Our team is committed to providing first-class service, exceptional quality, and
                                flawless craftsmanship in every project we undertake. Each client &amp; custom home
                                are unique which is why we provide a concierge like approach tailored to their needs.
                                Our meticulous attention to detail and constant drive for perfection are what
                                distinguish us from the competition.
                            </p>
                            <p>
                                This unwavering dedication to the highest quality standards represents the
                                cornerstone of our work and reflects our tireless effort to exceed our clients&apos;
                                expectations at every turn.
                            </p>
                        </div>

                        <div className="mt-6">
                            <PillButton href="/contact" variant="blue" size="md" className="!normal-case">
                                Contact Us Today
                            </PillButton>
                        </div>
                    </div>

                    {/* Right â€” home photo + logo */}
                    <div>
                        <img
                            src={ABOUT_IMG}
                            alt="Captivating Construction Group custom luxury home"
                            className="w-full rounded-2xl object-cover shadow-lg"
                        />
                        <div className="mt-4 flex justify-center">
                            <img
                                src={LOGO}
                                alt="Captivating Construction Group"
                                className="h-24 w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { PillButton } from '@/Components/FrontComponents/PillButton';
import Gallery from '@/Components/FrontComponents/Gallery';

export default function Portfolio({ images = [] }) {
    if (!images.length) {
        return null;
    }

    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="text-center">
                    <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand-blue-light">
                        Portfolio
                    </p>
                    <h2 className="mt-2 font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                        Building Success Stories
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-gray-600">
                        Explore a selection of the custom homes, renovations, and additions we&apos;ve brought
                        to life for families across New Jersey.
                    </p>
                </div>

                <div className="mt-10">
                    <Gallery images={images} />
                </div>

                <div className="mt-12 text-center">
                    <PillButton href="/portfolio" variant="blue" size="md">
                        View Full Portfolio
                    </PillButton>
                </div>
            </div>
        </section>
    );
}

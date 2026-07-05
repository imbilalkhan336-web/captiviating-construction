import { IoCheckmarkCircle } from 'react-icons/io5';
import { PillButton } from '@/Components/FrontComponents/PillButton';

/**
 * Reusable image + text content block.
 * `reverse` flips the image to the right and the text to the left.
 * Optional `bulletsTitle` + `bullets` render a two-column checklist.
 */
export default function FeatureBlock({
    eyebrow,
    heading,
    body,
    bulletsTitle,
    bullets = [],
    image,
    imageAlt,
    reverse = false,
    ctaLabel = 'Schedule A Consultation',
    ctaHref = '/contact',
}) {
    return (
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Image */}
            <div className={reverse ? 'lg:order-2' : 'lg:order-1'}>
                <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-xl object-cover shadow-md"
                />
            </div>

            {/* Content */}
            <div className={reverse ? 'lg:order-1' : 'lg:order-2'}>
                {eyebrow && (
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">{eyebrow}</p>
                )}
                <h2 className="mt-3 font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                    {heading}
                </h2>
                {body && (
                    <p className="mt-5 font-body text-base leading-relaxed text-gray-600">{body}</p>
                )}

                {bulletsTitle && (
                    <p className="mt-6 font-body text-sm font-bold text-[#0A2A4A]">{bulletsTitle}</p>
                )}
                {bullets.length > 0 && (
                    <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2.5 font-body text-sm text-gray-700">
                                <IoCheckmarkCircle className="h-5 w-5 flex-shrink-0 text-brand-blue-light" />
                                {b}
                            </li>
                        ))}
                    </ul>
                )}

                {ctaLabel && (
                    <div className="mt-7">
                        <PillButton href={ctaHref} variant="blue" size="md">
                            {ctaLabel}
                        </PillButton>
                    </div>
                )}
            </div>
        </div>
    );
}

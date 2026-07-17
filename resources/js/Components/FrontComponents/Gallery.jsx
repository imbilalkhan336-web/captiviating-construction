import { useState } from 'react';
import { LuX } from 'react-icons/lu';

/**
 * Reusable masonry image gallery with a lightbox.
 * Pass an array of image URLs via `images`.
 */
export default function Gallery({ images = [], className = '', columns = 3 }) {
    const [active, setActive] = useState(null);

    if (!images.length) {
        return null;
    }

    const colClass = columns === 3
        ? 'columns-1 sm:columns-2 lg:columns-3'
        : 'columns-2 sm:columns-3 lg:columns-4';

    return (
        <>
            <div className={`${colClass} gap-4 [column-fill:_balance] ${className}`}>
                {images.map((src, i) => (
                    <button
                        key={`${src}-${i}`}
                        type="button"
                        onClick={() => setActive(src)}
                        className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl shadow-sm"
                    >
                        <img
                            src={src}
                            alt={`Captivating Construction project ${i + 1}`}
                            loading="lazy"
                            className="w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </button>
                ))}
            </div>

            {active && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
                    onClick={() => setActive(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <button
                        type="button"
                        onClick={() => setActive(null)}
                        aria-label="Close"
                        className="absolute right-5 top-5 text-white/80 transition-colors hover:text-white"
                    >
                        <LuX className="h-8 w-8" />
                    </button>
                    <img
                        src={active}
                        alt="Captivating Construction project"
                        className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}

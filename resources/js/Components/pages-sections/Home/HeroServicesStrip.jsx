﻿const BADGES = [
    { src: '/image/google-scaled-1-e1759092706691-1536x696.webp', alt: 'Google Reviews  -  5 stars' },
    { src: '/image/fb-5-stars-e1759008133881.webp', alt: 'Facebook  -  5-star rated' },
    { src: '/image/NAHB-3Stack-removebg-preview-e1759092889222.webp', alt: 'NAHB  -  National Association of Home Builders' },
    { src: '/image/download-removebg-preview-e1759092825557.webp', alt: 'BBB Accredited Business' },
    { src: '/image/download__4_-removebg-preview-e1759092946496.webp', alt: 'Houzz' },
];

export default function HeroServicesStrip() {
    return (
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-2 gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-lg sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
                {BADGES.map((badge) => (
                    <div
                        key={badge.src}
                        className="flex items-center justify-center rounded-lg bg-white px-4 py-3"
                    >
                        <img
                            src={badge.src}
                            alt={badge.alt}
                            loading="lazy"
                            className="max-h-10 w-auto max-w-full object-contain md:max-h-12"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

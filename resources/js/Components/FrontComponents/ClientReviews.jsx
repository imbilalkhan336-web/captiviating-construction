import { useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { LuChevronLeft, LuChevronRight, LuInfo } from 'react-icons/lu';

const REVIEWS = [
    { name: 'Hal Simoff', initial: 'H', color: 'bg-purple-500', time: '11 months ago', text: 'Great experience renovating our kitchen. Highly recommend' },
    { name: 'Priscila Salcedo', initial: 'P', color: 'bg-blue-600', time: '11 months ago', text: 'Captivating Construction Group did an exceptional job from start to finish. Their team was professional, punctual, and paid incredible attention to detail throughout the entire project.' },
    { name: 'Sharon Jaramillo', initial: 'S', color: 'bg-teal-500', time: '11 months ago', text: 'Excellent work.' },
    { name: 'Michael Reyes', initial: 'M', color: 'bg-slate-600', time: '1 year ago', text: 'From design to completion the craftsmanship was outstanding. Couldn’t be happier with our new custom home.' },
    { name: 'Jennifer Torres', initial: 'J', color: 'bg-rose-500', time: '1 year ago', text: 'Professional, on time, and on budget. They made the whole build process stress-free from day one.' },
];

function GoogleG({ className = 'h-4 w-4' }) {
    return (
        <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
            <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
            <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
            <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
            <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
        </svg>
    );
}

function Stars({ className = 'h-4 w-4' }) {
    return (
        <div className="flex items-center gap-0.5 text-[#FBBC05]">
            {[0, 1, 2, 3, 4].map((i) => (
                <FaStar key={i} className={className} />
            ))}
        </div>
    );
}

function ReviewCard({ review }) {
    return (
        <div className="flex w-[300px] flex-shrink-0 flex-col rounded-lg bg-gray-50 p-5">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full font-body text-lg font-bold text-white ${review.color}`}>
                        {review.initial}
                    </div>
                    <div className="leading-tight">
                        <p className="font-body text-sm font-bold text-[#0A2A4A]">{review.name}</p>
                        <p className="font-body text-xs text-gray-500">{review.time}</p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-[10px] leading-tight text-gray-400">
                    <span>Posted on</span>
                    <GoogleG className="mt-1 h-4 w-4" />
                </div>
            </div>

            <div className="mt-3 flex items-center gap-1.5">
                <Stars className="h-4 w-4" />
                <RiVerifiedBadgeFill className="h-4 w-4 text-[#4285F4]" />
            </div>

            <p className="mt-3 font-body text-sm leading-relaxed text-gray-700">{review.text}</p>
        </div>
    );
}

export default function ClientReviews() {
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue-light">
                        Google Reviews
                    </p>
                    <h2 className="mt-2 font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                        What Our Clients Say
                    </h2>
                </div>

                <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:gap-10">
                    {/* Rating summary */}
                    <div className="flex-shrink-0 text-center lg:w-56">
                        <p className="font-body text-lg font-extrabold uppercase tracking-wide text-[#0A2A4A]">
                            Excellent
                        </p>
                        <div className="mt-2 flex justify-center">
                            <Stars className="h-6 w-6" />
                        </div>
                        <p className="mt-2 font-body text-sm text-gray-600">
                            Based on <span className="font-bold text-[#0A2A4A]">30 reviews</span>
                        </p>
                        <div className="mt-3 flex justify-center">
                            <span className="font-body text-2xl font-medium">
                                <span className="text-[#4285F4]">G</span>
                                <span className="text-[#EA4335]">o</span>
                                <span className="text-[#FBBC05]">o</span>
                                <span className="text-[#4285F4]">g</span>
                                <span className="text-[#34A853]">l</span>
                                <span className="text-[#EA4335]">e</span>
                            </span>
                        </div>
                    </div>

                    {/* Carousel */}
                    <div className="relative w-full min-w-0">
                        <button
                            type="button"
                            onClick={() => scroll(-1)}
                            aria-label="Previous reviews"
                            className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-md transition-colors hover:text-brand-orange"
                        >
                            <LuChevronLeft className="h-5 w-5" />
                        </button>

                        <div
                            ref={scrollRef}
                            className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {REVIEWS.map((review) => (
                                <ReviewCard key={review.name} review={review} />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => scroll(1)}
                            aria-label="Next reviews"
                            className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-md transition-colors hover:text-brand-orange"
                        >
                            <LuChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Trustindex badge */}
                <div className="mt-5 flex justify-end">
                    <span className="inline-flex items-center gap-1.5 rounded bg-[#1a7a5e] px-3 py-1.5 font-body text-xs font-semibold text-white">
                        Verified by Trustindex
                        <LuInfo className="h-3.5 w-3.5" />
                    </span>
                </div>
            </div>
        </section>
    );
}

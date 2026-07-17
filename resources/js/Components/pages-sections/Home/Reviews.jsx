import { useRef, useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { LuStar } from 'react-icons/lu';

const FALLBACK_REVIEWS = [
    { name: 'Jessica Nunno', initial: 'J', avatarBg: 'bg-emerald-600', timeAgo: '1 day ago', body: 'They did a great job installing our new HVAC. They worked quickly and everything went smoothly from quote to cleanup. Truly a five-star experience!', rating: 5 },
    { name: 'Barbara Caroleo', initial: 'B', avatarBg: 'bg-emerald-500', timeAgo: '1 day ago', body: 'Very professional and reliable. The crew arrived right on time, walked me through the work, and left the place spotless.', rating: 5 },
    { name: 'Richard Singer', initial: 'R', avatarBg: 'bg-rose-600', timeAgo: '1 day ago', body: 'Matt was friendly but professional. Replaced the capacitor for $307 when the AC stopped cooling â€” back up and running in under an hour.', rating: 5 },
    { name: 'Vic Alvarado', initial: 'V', avatarBg: 'bg-slate-700', timeAgo: '2 days ago', body: 'Tech Dawan Carter went beyond what was expected and was very knowledgeable. He took time to explain the issue and fixed it the first visit.', rating: 5 },
    { name: 'Baba Estates LLC', initial: 'B', avatarBg: 'bg-teal-600', timeAgo: '2 days ago', body: 'Excellent service from start to finish â€” quoted fairly, scheduled fast, and delivered exactly what we needed for our property.', rating: 5 },
    { name: 'Tom Reilly', initial: 'T', avatarBg: 'bg-indigo-600', timeAgo: '3 days ago', body: 'On time, courteous, and explained the work clearly before starting. Pricing was upfront and honest. Highly recommended for HVAC service.', rating: 5 },
    { name: 'Maria Lopez', initial: 'M', avatarBg: 'bg-orange-500', timeAgo: '4 days ago', body: 'Replaced our old furnace with no issues at all. Crew was friendly, neat, and the new system is dramatically quieter than the old one.', rating: 5 },
    { name: 'Daniel Park', initial: 'D', avatarBg: 'bg-cyan-600', timeAgo: '5 days ago', body: 'Quick response when our AC went out during a heatwave. Fair pricing and the technician walked me through everything before doing the work.', rating: 5 },
    { name: 'Sarah Whitfield', initial: 'S', avatarBg: 'bg-purple-600', timeAgo: '6 days ago', body: 'Booked online in the evening and they were here next morning. Diagnosed a leak in the line set and had us cooling again same day.', rating: 5 },
    { name: 'Anthony Russo', initial: 'A', avatarBg: 'bg-amber-600', timeAgo: '1 week ago', body: 'Five stars all around. Honest tech, no upsell pressure, and the new thermostat install made our energy bill noticeably lower.', rating: 5 },
    { name: 'Lakeisha Brown', initial: 'L', avatarBg: 'bg-pink-600', timeAgo: '1 week ago', body: 'I called for a clogged drain and they had someone here within two hours. Fixed it in 30 minutes and gave me tips to keep it from happening again.', rating: 5 },
    { name: 'Michael O\'Connor', initial: 'M', avatarBg: 'bg-blue-700', timeAgo: '2 weeks ago', body: 'Used Guardian Air for both a heating tune-up and a plumbing repair. One company, one invoice â€” couldn\'t be easier.', rating: 5 },
];

function timeAgo(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) return 'just now';
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (weeks < 4) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
    return `${years} year${years > 1 ? 's' : ''} ago`;
}

function VerifiedCheck() {
    return (
        <svg className="h-4 w-4 text-blue-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
        </svg>
    );
}

function StarRow({ rating = 5 }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <LuStar
                    key={star}
                    className={`h-4 w-4 ${star <= rating ? 'fill-current text-brand-yellow' : 'text-gray-300'}`}
                />
            ))}
        </div>
    );
}

function GoogleMark() {
    return (
        <span className="font-semibold leading-none">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
        </span>
    );
}

function ReviewCard({ review }) {
    return (
        <div className="snap-center sm:snap-start shrink-0 w-[280px] sm:w-[300px] rounded-xl bg-white p-5 shadow-lg ring-1 ring-black/5">
            <div className="flex items-start gap-3">
                <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold text-white ${review.avatarBg}`}>
                    {review.initial}
                </div>
                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                        <p className="truncate text-sm font-bold text-[#0A2A4A]">{review.name}</p>
                        <VerifiedCheck />
                    </div>
                    <p className="mt-0.5 flex items-center gap-1 text-xs text-gray-500">
                        <span>{review.timeAgo} on</span>
                        <GoogleMark />
                    </p>
                </div>
            </div>

            <div className="mt-4">
                <StarRow rating={review.rating} />
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{review.body}</p>
            </div>
        </div>
    );
}

export default function Reviews({ reviews = [] }) {
    const { siteSettings = {} } = usePage().props;
    const reviewsCount = siteSettings.reviews_count || '200';
    const scrollerRef = useRef(null);
    const dragRef = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });
    const [activeDot, setActiveDot] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    // Transform database reviews or use fallback
    const reviewList = reviews.length > 0
        ? reviews.map((r) => ({
              name: r.name,
              initial: r.initials || r.name.charAt(0).toUpperCase(),
              avatarBg: r.avatar_color || 'bg-emerald-600',
              timeAgo: timeAgo(r.created_at),
              body: r.body,
              rating: r.rating || 5,
          }))
        : FALLBACK_REVIEWS;

    const dotCount = Math.min(5, Math.ceil(reviewList.length / 2.5)) || 1;

    function scrollByCard(direction) {
        const el = scrollerRef.current;
        if (!el) return;
        const card = el.querySelector('[data-review-card]');
        const step = card ? card.getBoundingClientRect().width + 20 : 320;
        el.scrollBy({ left: direction * step, behavior: 'smooth' });
    }

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;
        function onScroll() {
            const max = el.scrollWidth - el.clientWidth;
            const ratio = max > 0 ? el.scrollLeft / max : 0;
            setActiveDot(Math.round(ratio * (dotCount - 1)));
        }
        el.addEventListener('scroll', onScroll, { passive: true });
        return () => el.removeEventListener('scroll', onScroll);
    }, [dotCount]);

    function onPointerDown(e) {
        const el = scrollerRef.current;
        if (!el) return;
        dragRef.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: 0 };
        setIsDragging(true);
        el.style.scrollBehavior = 'auto';
        el.style.scrollSnapType = 'none';
        el.setPointerCapture?.(e.pointerId);
    }

    function onPointerMove(e) {
        if (!dragRef.current.active) return;
        const el = scrollerRef.current;
        if (!el) return;
        const dx = e.clientX - dragRef.current.startX;
        dragRef.current.moved = Math.abs(dx);
        el.scrollLeft = dragRef.current.startScroll - dx;
    }

    function onPointerUp(e) {
        if (!dragRef.current.active) return;
        dragRef.current.active = false;
        setIsDragging(false);
        const el = scrollerRef.current;
        if (el) {
            el.style.scrollBehavior = '';
            el.style.scrollSnapType = '';
        }
        el?.releasePointerCapture?.(e.pointerId);
    }

    function onClickCapture(e) {
        if (dragRef.current.moved > 5) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    function scrollToDot(index) {
        const el = scrollerRef.current;
        if (!el) return;
        const max = el.scrollWidth - el.clientWidth;
        const target = (index / (dotCount - 1)) * max;
        el.scrollTo({ left: target, behavior: 'smooth' });
    }

    return (
        <section className="relative overflow-hidden bg-[#F2F4F6] py-20 lg:py-16">
            <div className="relative mx-auto max-w-[1200px] px-4">
                <p className="text-center font-poppins text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A73E8]">
                    Hear What Our Customers Are Saying
                </p>
                <h2 className="mt-2 text-center font-display text-2xl uppercase text-[#0A2A4A] md:text-3xl lg:text-4xl">
                    Over {reviewsCount}+ Reviews
                </h2>

                <div className="relative mt-6">
                    <div
                        ref={scrollerRef}
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}
                        onPointerLeave={onPointerUp}
                        onPointerCancel={onPointerUp}
                        onClickCapture={onClickCapture}
                        className={`flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 px-[calc(50%-140px)] sm:px-0 select-none touch-pan-y [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
                            isDragging ? 'cursor-grabbing' : 'cursor-grab'
                        }`}
                    >
                        {reviewList.map((r, i) => (
                            <div key={i} data-review-card>
                                <ReviewCard review={r} />
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={() => scrollByCard(-1)}
                        aria-label="Previous reviews"
                        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 hidden lg:flex h-10 w-10 items-center justify-center rounded-full bg-gray-500/80 text-white shadow-md hover:bg-gray-600 transition-colors"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollByCard(1)}
                        aria-label="Next reviews"
                        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 hidden lg:flex h-10 w-10 items-center justify-center rounded-full bg-gray-500/80 text-white shadow-md hover:bg-gray-600 transition-colors"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Pagination dots */}
                {dotCount > 1 && (
                    <div className="mt-4 flex justify-center gap-2">
                        {[...Array(dotCount)].map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                aria-label={`Go to review group ${i + 1}`}
                                onClick={() => scrollToDot(i)}
                                className={`h-2.5 w-2.5 rounded-full transition-colors hover:scale-125 ${
                                    i === activeDot ? 'bg-[#0A2A4A]' : 'bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

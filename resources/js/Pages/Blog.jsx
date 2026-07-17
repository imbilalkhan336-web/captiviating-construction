import { Link, usePage } from '@inertiajs/react';
import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import CtaSection from '@/Components/pages-sections/CtaSection';
import { LuArrowRight, LuPencil } from 'react-icons/lu';

const HERO_BG = '/image/construction-worker-gripping-a-hammer-working-on-a-new-home-construction-768x511.webp';

// Card images used when a post has no image of its own â€” cycled by index.
const CARD_IMAGES = [
    '/image/How-to-Avoid-Costly-Mistakes-When-Building-a-New-Home-768x512.webp',
    '/image/construction-worker-gripping-a-hammer-working-on-a-new-home-construction-768x511.webp',
    '/image/unnamed.webp',
    '/image/unnamed-1.webp',
    '/image/unnamed-2.webp',
    '/image/unnamed-3.webp',
];

function PostCard({ post, fallbackImage = '/img/cover.webp' }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
        >
            <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                    src={post.image_path || fallbackImage}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col p-5">
                <h2 className="font-montserrat text-base font-bold leading-snug text-[#0A2A4A] transition-colors group-hover:text-brand-blue-light">
                    {post.title}
                </h2>
                {post.excerpt && (
                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-gray-500">
                        {post.excerpt}
                    </p>
                )}
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-blue-light">
                    Read More
                    <LuArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
            </div>
        </Link>
    );
}

export default function Blog({ posts = [], seo = {} }) {
    const { auth } = usePage().props;
    const isAdmin = Boolean(auth?.user?.is_admin);

    return (
        <SiteLayout showReviews={false}>
            <Seo
                seo={seo}
                fallbackTitle="Blog | Captivating Construction Group"
                fallbackDescription="Guides and insights on custom home building, renovations, additions, and construction for New Jersey homeowners â€” from the Captivating Construction Group team."
            />

            {/* Hero */}
            <section className="relative bg-black">
                <div className="relative overflow-hidden">
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${HERO_BG}')` }}
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

                    <div className="relative mx-auto max-w-[1200px] px-4 py-20 lg:py-28">
                        <h1 className="font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-white">
                            Read From Our Blog
                        </h1>
                    </div>
                </div>
            </section>

            {/* Posts */}
            <section className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-[1200px] px-4">
                    {isAdmin && (
                        <div className="mb-8 flex justify-end">
                            <Link
                                href={route('admin.blog')}
                                className="inline-flex items-center gap-2 rounded-full bg-[#0A2A4A] px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-brand-blue-light"
                            >
                                <LuPencil className="h-3.5 w-3.5" />
                                Manage Posts
                            </Link>
                        </div>
                    )}

                    {posts.length === 0 ? (
                        <div className="rounded-2xl border-2 border-dashed border-gray-200 p-16 text-center">
                            <p className="font-montserrat text-2xl font-semibold text-[#0A2A4A]">No posts yet</p>
                            <p className="mt-2 font-body text-sm text-gray-500">
                                Check back soon â€” we&apos;re working on new articles.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {posts.map((post, i) => (
                                <PostCard key={post.id} post={post} fallbackImage={CARD_IMAGES[i % CARD_IMAGES.length]} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <CtaSection />
        </SiteLayout>
    );
}

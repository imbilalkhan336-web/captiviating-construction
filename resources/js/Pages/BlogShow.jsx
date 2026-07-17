import { Head, Link } from '@inertiajs/react';
import SiteLayout from '@/Layouts/SiteLayout';
import RequestQuoteCard from '@/Components/FrontComponents/RequestQuoteCard';
import CtaSection from '@/Components/pages-sections/CtaSection';
import { LuArrowLeft, LuArrowRight, LuExternalLink, LuChevronRight } from 'react-icons/lu';

const SERVICE_LINKS = [
    { name: 'New Construction', href: '/services' },
    { name: 'Renovations & Remodels', href: '/services' },
    { name: 'Basements', href: '/services' },
    { name: 'Kitchen Renovations', href: '/services' },
    { name: 'Bathroom Renovations', href: '/services' },
    { name: 'Home Additions', href: '/services' },
];

function BlogSidebar() {
    return (
        <aside className="lg:col-span-5">
            <div className="space-y-6 lg:sticky lg:top-24">
                {/* Request a quote form */}
                <RequestQuoteCard />

                {/* Service page links */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <div className="bg-gradient-to-br from-brand-blue to-[#07264A] px-6 py-5">
                        <h3 className="font-display text-xl uppercase leading-none text-white">Our Services</h3>
                    </div>
                    <ul className="divide-y divide-gray-100">
                        {SERVICE_LINKS.map((service) => (
                            <li key={service.href}>
                                <Link
                                    href={service.href}
                                    className="group flex items-center justify-between px-6 py-3.5 text-sm font-semibold text-[#07264A] transition-colors hover:bg-gray-50 hover:text-brand-orange"
                                >
                                    {service.name}
                                    <LuChevronRight className="h-4 w-4 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-brand-orange" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}

function formatDate(value) {
    if (!value) return '';
    return new Date(value).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

// Render the body as blank-line-separated paragraphs, matching the
// article styling used across the service pages.
function Body({ text }) {
    if (!text) return null;

    if (/<[a-z][\s\S]*>/i.test(text)) {
        return (
            <div
                className="mt-8 space-y-5 font-body text-[15px] leading-relaxed text-gray-700 md:text-base [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: text }}
            />
        );
    }

    const paras = text
        .split(/\n\n+/)
        .map((p) => p.trim())
        .filter(Boolean);

    return (
        <div className="mt-8 space-y-5 font-body text-[15px] leading-relaxed text-gray-700 md:text-base">
            {paras.map((p, i) => (
                <p key={i}>{p}</p>
            ))}
        </div>
    );
}

export default function BlogShow({ post, related = [] }) {
    return (
        <SiteLayout showReviews={false}>
            <Head>
                <title>{`${post.title} | Captivating Construction Group Blog`}</title>
                <meta name="description" content={post.excerpt || post.title} />
                <link rel="canonical" href={`https://guardmyhvac.com/blog/${post.slug}`} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.title,
                        description: post.excerpt || undefined,
                        image: post.image_path ? `https://guardmyhvac.com${post.image_path}` : undefined,
                        datePublished: post.created_at,
                        dateModified: post.updated_at || post.created_at,
                        author: { '@type': 'Organization', name: 'Captivating Construction Group' },
                        publisher: { '@type': 'Organization', name: 'Captivating Construction Group' },
                        mainEntityOfPage: `https://guardmyhvac.com/blog/${post.slug}`,
                    })}
                </script>
            </Head>

            <article>
                {/* Hero â€” full-width bg image + light black overlay, like the other pages */}
                <section className="relative bg-black">
                    <div className="relative overflow-hidden">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url('${post.image_path || '/img/cover.webp'}')` }}
                        />
                        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

                        <div className="relative mx-auto max-w-[1200px] px-4 py-20 lg:py-28">
                            {post.created_at && (
                                <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand-blue-light">
                                    {formatDate(post.created_at)}
                                </p>
                            )}
                            <h1 className="mt-3 max-w-3xl font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-white">
                                {post.title}
                            </h1>
                            {post.excerpt && (
                                <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-white/85">
                                    {post.excerpt}
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                <div className="bg-white">
                    <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 lg:px-4 lg:py-24">
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
                            <div className="min-w-0 lg:col-span-7">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-gray-500 transition-colors hover:text-brand-orange"
                                >
                                    <LuArrowLeft className="h-3.5 w-3.5" />
                                    Back to Blog
                                </Link>

                                <Body text={post.body} />

                                {post.tags?.length > 0 && (
                                    <div className="mt-10 flex flex-wrap gap-2">
                                        {post.tags.map((tag) =>
                                            tag.link ? (
                                                <a
                                                    key={tag.id}
                                                    href={tag.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-brand-orange hover:text-white"
                                                >
                                                    {tag.image_path && (
                                                        <img src={tag.image_path} alt="" className="h-4 w-4 rounded-full object-cover" />
                                                    )}
                                                    {tag.name}
                                                    <LuExternalLink className="h-3 w-3 opacity-70" />
                                                </a>
                                            ) : (
                                                <span
                                                    key={tag.id}
                                                    className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600"
                                                >
                                                    {tag.image_path && (
                                                        <img src={tag.image_path} alt="" className="h-4 w-4 rounded-full object-cover" />
                                                    )}
                                                    {tag.name}
                                                </span>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>

                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </article>

            {/* Related posts */}
            {related.length > 0 && (
                <section className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-[1200px] px-4">
                        <h2 className="font-display text-2xl uppercase text-[#07264A]">More From the Blog</h2>
                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {related.map((p) => (
                                <Link
                                    key={p.id}
                                    href={`/blog/${p.slug}`}
                                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                                        <img
                                            src={p.image_path || '/img/cover.webp'}
                                            alt={p.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <h3 className="font-display text-lg uppercase leading-tight text-[#07264A]">
                                            {p.title}
                                        </h3>
                                        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-orange">
                                            Read More
                                            <LuArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CtaSection />
        </SiteLayout>
    );
}

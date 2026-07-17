import { Head, Link } from '@inertiajs/react';
import { LuChevronRight } from 'react-icons/lu';

/**
 * Visual breadcrumb trail + BreadcrumbList JSON-LD.
 *
 * items: [{ label, href }] â€” the last item is rendered as the current page
 * (not a link). Always prepend Home.
 */
export default function Breadcrumbs({ items = [], baseUrl = 'https://guardmyhvac.com' }) {
    const trail = [{ label: 'Home', href: '/' }, ...items];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: trail.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.label,
            item: `${baseUrl}${item.href}`,
        })),
    };

    return (
        <nav aria-label="Breadcrumb" className="bg-white">
            <Head>
                <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
            </Head>
            <div className="mx-auto max-w-[1200px] px-4 pt-6">
                <ol className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-gray-500">
                    {trail.map((item, i) => {
                        const isLast = i === trail.length - 1;
                        return (
                            <li key={item.href} className="flex items-center gap-1.5">
                                {isLast ? (
                                    <span className="text-[#07264A]">{item.label}</span>
                                ) : (
                                    <Link href={item.href} className="transition-colors hover:text-brand-orange">
                                        {item.label}
                                    </Link>
                                )}
                                {!isLast && <LuChevronRight className="h-3.5 w-3.5 text-gray-300" />}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
}

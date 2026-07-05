import { Head, usePage } from '@inertiajs/react';

/**
 * Renders SEO meta tags from an admin-managed `seo` object (passed as a
 * page prop). Falls back to the provided fallback title/description when
 * a page has no SEO record yet.
 *
 * Pages are indexable by default (robots = index, follow). A page can opt
 * out by setting its own `seo.robots` value; private/auth routes are kept
 * out of search via the AddRobotsTag (X-Robots-Tag) middleware.
 */
export default function Seo({ seo = {}, fallbackTitle = '', fallbackDescription = '' }) {
    const title = seo.title || fallbackTitle;
    const description = seo.description || fallbackDescription;
    const ogTitle = seo.og_title || title;
    const ogDescription = seo.og_description || description;
    const ogImage = seo.og_image || null;
    // Build an absolute, self-referencing canonical: use the admin-set value
    // when present, otherwise the current path, prefixed with the site base URL.
    const page = usePage();
    const appUrl = page.props.app_url || '';
    const canonicalPath = (seo.canonical || page.url || '/').split('?')[0];
    const canonical = /^https?:\/\//i.test(canonicalPath) ? canonicalPath : appUrl + canonicalPath;
    const robots = seo.robots || 'index, follow';

    return (
        <Head>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            <meta name="robots" content={robots} />
            <link rel="canonical" href={canonical} />
            <meta property="og:type" content="website" />
            {ogTitle && <meta property="og:title" content={ogTitle} />}
            {ogDescription && <meta property="og:description" content={ogDescription} />}
            {ogImage && <meta property="og:image" content={ogImage} />}
            {canonical && <meta property="og:url" content={canonical} />}
            <meta name="twitter:card" content={ogImage ? 'summary_large_image' : 'summary'} />
            {ogTitle && <meta name="twitter:title" content={ogTitle} />}
            {ogDescription && <meta name="twitter:description" content={ogDescription} />}
            {ogImage && <meta name="twitter:image" content={ogImage} />}
        </Head>
    );
}

import { Head } from '@inertiajs/react';

const BASE_URL = 'https://guardmyhvac.com';
const PHONE = '(848) 276-6300';
const COUNTIES = ['Monmouth County', 'Middlesex County', 'Ocean County'];

/**
 * Emits JSON-LD for a service page: HVACBusiness (LocalBusiness) with
 * areaServed, a Service node, and an optional FAQPage built from the page's
 * FAQ blocks. Helps Google show rich results and understand local intent.
 */
export default function ServiceSchema({ serviceName, serviceType, description, path = '/', faqs = [] }) {
    const business = {
        '@context': 'https://schema.org',
        '@type': 'HVACBusiness',
        '@id': `${BASE_URL}/#business`,
        name: 'Guardian Air',
        description: 'Licensed and insured HVAC and plumbing service across Monmouth, Middlesex, and Ocean counties, New Jersey.',
        url: BASE_URL,
        telephone: PHONE,
        areaServed: COUNTIES.map((name) => ({ '@type': 'AdministrativeArea', name })),
        address: {
            '@type': 'PostalAddress',
            addressRegion: 'NJ',
            addressCountry: 'US',
        },
    };

    const service = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        serviceType: serviceType || serviceName,
        description,
        url: `${BASE_URL}${path}`,
        provider: { '@id': `${BASE_URL}/#business` },
        areaServed: COUNTIES.map((name) => ({ '@type': 'AdministrativeArea', name })),
    };

    const graph = [business, service];

    if (faqs.length > 0) {
        graph.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
        });
    }

    return (
        <Head>
            {graph.map((node, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(node)}
                </script>
            ))}
        </Head>
    );
}

import { Head } from '@inertiajs/react';

const BASE_URL = 'https://capconnj.com';
const PHONE = '(732) 272-5937';
const AREAS = ['Monmouth County, NJ', 'Middlesex County, NJ', 'Ocean County, NJ', 'Bergen County, NJ', 'Essex County, NJ'];

export default function ServiceSchema({ serviceName, serviceType, description, path = '/', faqs = [] }) {
    const business = {
        '@context': 'https://schema.org',
        '@type': 'HomeAndConstructionBusiness',
        '@id': `${BASE_URL}/#business`,
        name: 'Captivating Construction Group',
        description: 'Licensed and insured custom home builder and renovation contractor serving New Jersey homeowners.',
        url: BASE_URL,
        telephone: PHONE,
        email: 'info@capconnj.com',
        areaServed: AREAS.map((name) => ({ '@type': 'AdministrativeArea', name })),
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
        areaServed: AREAS.map((name) => ({ '@type': 'AdministrativeArea', name })),
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

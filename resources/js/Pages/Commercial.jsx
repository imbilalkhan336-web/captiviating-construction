import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import Breadcrumbs from '@/Components/FrontComponents/Breadcrumbs';
import ServiceSchema from '@/Components/FrontComponents/ServiceSchema';
import ServiceArticle from '@/Components/FrontComponents/ServiceArticle';
import RelatedLinks from '@/Components/FrontComponents/RelatedLinks';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';
import { LuShieldCheck } from 'react-icons/lu';

const TRUST = ['Licensed & Insured', 'NATE-Certified', 'EPA 608 Certified'];

const COLUMNS = [
    {
        title: 'Commercial Services',
        links: [
            { label: 'Maintenance Contracts', href: '/commercial-hvac/maintenance-contracts' },
            { label: 'Commercial HVAC Repair', href: '/commercial-hvac/repair' },
            { label: 'Commercial Plumbing', href: '/commercial-plumbing' },
        ],
    },
    {
        title: 'Commercial Service Areas',
        links: [
            { label: 'Monmouth County', href: '/commercial-hvac/monmouth-county' },
            { label: 'Middlesex County', href: '/commercial-hvac/middlesex-county' },
            { label: 'Ocean County', href: '/commercial-hvac/ocean-county' },
            { label: 'Toms River', href: '/commercial-hvac/toms-river' },
            { label: 'Freehold', href: '/commercial-hvac/freehold' },
            { label: 'Brick', href: '/commercial-hvac/brick' },
        ],
    },
    {
        title: 'Explore Other Services',
        links: [
            { label: 'Heating & Furnace Repair', href: '/heating' },
            { label: 'Cooling & AC Repair', href: '/cooling' },
            { label: 'Indoor Air Quality', href: '/indoor-air-quality' },
            { label: 'Plumbing', href: '/plumbing' },
        ],
    },
];

export default function CommercialPage({ blocks = [], tags = [], reviews = [], seo = {} }) {
    const faqs = blocks
        .filter((b) => b.type === 'faq')
        .map((b) => ({ question: b.heading, answer: b.body }));

    return (
        <SiteLayout showReviews={false}>
            <Seo
                seo={seo}
                fallbackTitle="Commercial HVAC Services in NJ | Guardian Air"
                fallbackDescription="Commercial HVAC in NJ — Guardian Air keeps offices, restaurants & retail comfortable across Monmouth, Middlesex & Ocean counties. Licensed & insured — call!"
            />
            <ServiceSchema
                serviceName="Commercial HVAC Services"
                serviceType="Commercial HVAC repair, installation, and maintenance"
                description="Commercial HVAC repair, installation, boiler service, and preventive maintenance contracts across Monmouth, Middlesex, and Ocean counties, NJ."
                path="/commercial-hvac"
                faqs={faqs}
            />

            <Breadcrumbs items={[{ label: 'Commercial HVAC', href: '/commercial-hvac' }]} />

            <article>
                <PageHeader
                    label="For Your Business"
                    title="Commercial HVAC Services in New Jersey"
                    image="/img/commercial-hero.webp"
                    imageCover
                    description="Commercial HVAC repair, installation, boilers, and preventive maintenance contracts for offices, restaurants, retail, and multi-family buildings across Monmouth, Middlesex & Ocean counties — with 24/7 emergency response."
                    titleClassName="font-normal"
                >
                    <div className="flex flex-wrap gap-2">
                        {TRUST.map((t) => (
                            <span
                                key={t}
                                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-white ring-1 ring-white/20"
                            >
                                <LuShieldCheck className="h-3.5 w-3.5 text-brand-orange" />
                                {t}
                            </span>
                        ))}
                    </div>
                </PageHeader>

                <ServiceArticle
                    page="commercial"
                    tags={tags}
                    blocks={blocks}
                    metaLabel="Commercial Guide"
                    faqEyebrow="New Jersey Commercial HVAC Contractors"
                    headingSizeClass="text-[30px] font-normal"
                    formHeadingClassName="font-normal"
                />

                <RelatedLinks
                    eyebrow="Commercial"
                    heading="Explore Our Commercial Services & Areas"
                    columns={COLUMNS}
                    viewAll={{ label: 'View All Service Areas', href: '/service-areas' }}
                />
            </article>

            <CtaBanner titleWeightClass="font-normal" />
        </SiteLayout>
    );
}

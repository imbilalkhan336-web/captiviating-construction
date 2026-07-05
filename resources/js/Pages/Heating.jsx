import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import Breadcrumbs from '@/Components/FrontComponents/Breadcrumbs';
import ServiceSchema from '@/Components/FrontComponents/ServiceSchema';
import ServiceArticle from '@/Components/FrontComponents/ServiceArticle';
import RelatedLinks from '@/Components/FrontComponents/RelatedLinks';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';

const COLUMNS = [
    {
        title: 'Furnace & Heating Services',
        links: [
            { label: 'Furnace Replacement', href: '/heating/furnace-replacement' },
            { label: 'Boiler Repair', href: '/heating/boiler-repair' },
            { label: 'Heat Pump Service', href: '/heating/heat-pump' },
            { label: 'Furnace Tune-Up', href: '/heating/furnace-tune-up' },
        ],
    },
    {
        title: 'Heating Service Areas',
        links: [
            { label: 'Toms River', href: '/heating/toms-river' },
            { label: 'Freehold', href: '/heating/freehold' },
            { label: 'Brick', href: '/heating/brick' },
            { label: 'Old Bridge', href: '/heating/old-bridge' },
            { label: 'Red Bank', href: '/heating/red-bank' },
            { label: 'Lakewood', href: '/heating/lakewood' },
        ],
    },
    {
        title: 'Explore Other Services',
        links: [
            { label: 'Cooling & AC Repair', href: '/cooling' },
            { label: 'Plumbing & Water Heaters', href: '/plumbing' },
            { label: 'Indoor Air Quality', href: '/indoor-air-quality' },
            { label: 'Commercial HVAC', href: '/commercial-hvac' },
        ],
    },
];

export default function HeatingPage({ blocks = [], tags = [], reviews = [], seo = {} }) {
    const faqs = blocks
        .filter((b) => b.type === 'faq')
        .map((b) => ({ question: b.heading, answer: b.body }));

    return (
        <SiteLayout showReviews={false}>
            <Seo
                seo={seo}
                fallbackTitle="Furnace Repair & Heating Services in NJ | Guardian Air"
                fallbackDescription="Need furnace repair in NJ? Guardian Air offers same-day, licensed & insured heating repair across Monmouth, Middlesex & Ocean counties. Call today!"
            />
            <ServiceSchema
                serviceName="Furnace Repair & Heating Services"
                serviceType="HVAC heating repair and installation"
                description="Furnace repair, boiler service, heat pump installation, and heating system replacement across Monmouth, Middlesex, and Ocean counties, NJ."
                path="/heating"
                faqs={faqs}
            />

            <Breadcrumbs items={[{ label: 'Heating', href: '/heating' }]} />

            <article>
                <PageHeader
                    label="Stay Warm"
                    title="Furnace Repair & Heating Services in New Jersey"
                    image="/img/heating-hero.webp"
                    imageCover
                    description="Furnace repair, boiler service, heat pump installs, and full system replacements across Monmouth, Middlesex & Ocean counties. Licensed, insured, and available 24/7 — call Guardian Air for same-day no-heat emergency service."
                    titleClassName="font-normal"
                />

                <ServiceArticle
                    page="heating"
                    tags={tags}
                    blocks={blocks}
                    metaLabel="Heating Guide"
                    faqEyebrow="New Jersey Heating Repair Contractors"
                    headingSizeClass="text-[30px] font-normal"
                    formHeadingClassName="font-normal"
                />

                <RelatedLinks
                    eyebrow="Heating"
                    heading="Explore Our Heating Services & Areas"
                    columns={COLUMNS}
                    viewAll={{ label: 'View All Service Areas', href: '/service-areas' }}
                />
            </article>

            <CtaBanner titleWeightClass="font-normal" />
        </SiteLayout>
    );
}

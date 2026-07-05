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
        title: 'Air Quality Services',
        links: [
            { label: 'Air Duct Cleaning', href: '/indoor-air-quality/duct-cleaning' },
            { label: 'Mold Testing', href: '/indoor-air-quality/mold-testing' },
            { label: 'Air Purifier Installation', href: '/indoor-air-quality/air-purifier' },
            { label: 'Humidifier & Dehumidifier', href: '/indoor-air-quality/humidifier-dehumidifier' },
        ],
    },
    {
        title: 'Air Quality Service Areas',
        links: [
            { label: 'Toms River', href: '/indoor-air-quality/toms-river' },
            { label: 'Freehold', href: '/indoor-air-quality/freehold' },
            { label: 'Brick', href: '/indoor-air-quality/brick' },
            { label: 'Old Bridge', href: '/indoor-air-quality/old-bridge' },
            { label: 'Red Bank', href: '/indoor-air-quality/red-bank' },
            { label: 'Lakewood', href: '/indoor-air-quality/lakewood' },
        ],
    },
    {
        title: 'Explore Other Services',
        links: [
            { label: 'Heating & Furnace Repair', href: '/heating' },
            { label: 'Cooling & AC Repair', href: '/cooling' },
            { label: 'Plumbing', href: '/plumbing' },
            { label: 'Commercial HVAC', href: '/commercial-hvac' },
        ],
    },
];

export default function AirQualityPage({ blocks = [], tags = [], reviews = [], seo = {} }) {
    const faqs = blocks
        .filter((b) => b.type === 'faq')
        .map((b) => ({ question: b.heading, answer: b.body }));

    return (
        <SiteLayout showReviews={false}>
            <Seo
                seo={seo}
                fallbackTitle="Air Quality Testing & IAQ Solutions in NJ | Guardian Air"
                fallbackDescription="Worried about your home's air? Guardian Air provides licensed indoor air quality testing across Monmouth, Middlesex & Ocean counties, NJ. Call today!"
            />
            <ServiceSchema
                serviceName="Indoor Air Quality & Air Quality Testing"
                serviceType="Indoor air quality testing and solutions"
                description="Air quality testing, air purifiers, duct cleaning, mold testing, and humidity control across Monmouth, Middlesex, and Ocean counties, NJ."
                path="/indoor-air-quality"
                faqs={faqs}
            />

            <Breadcrumbs items={[{ label: 'Indoor Air Quality', href: '/indoor-air-quality' }]} />

            <article>
                <PageHeader
                    label="Breathe Easier"
                    title="Indoor Air Quality & Air Quality Testing in New Jersey"
                    image="/img/air-quality-hero.webp"
                    imageCover
                    description="Air quality testing, whole-home purifiers, duct cleaning, mold testing, and humidity control across Monmouth, Middlesex & Ocean counties. Licensed, insured, and focused on a healthier home."
                    titleClassName="font-normal"
                />

                <ServiceArticle
                    page="indoor-air-quality"
                    tags={tags}
                    blocks={blocks}
                    metaLabel="Air Quality Guide"
                    faqEyebrow="New Jersey Indoor Air Quality Experts"
                    headingSizeClass="text-[30px] font-normal"
                    formHeadingClassName="font-normal"
                />

                <RelatedLinks
                    eyebrow="Indoor Air Quality"
                    heading="Explore Our Air Quality Services & Areas"
                    columns={COLUMNS}
                    viewAll={{ label: 'View All Service Areas', href: '/service-areas' }}
                />
            </article>

            <CtaBanner titleWeightClass="font-normal" />
        </SiteLayout>
    );
}

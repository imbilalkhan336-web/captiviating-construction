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
        title: 'Air Conditioning Services',
        links: [
            { label: 'AC Installation', href: '/cooling/ac-installation' },
            { label: 'Ductless Mini-Split', href: '/cooling/ductless-mini-split' },
            { label: 'AC Tune-Up', href: '/cooling/ac-tune-up' },
        ],
    },
    {
        title: 'Cooling Service Areas',
        links: [
            { label: 'Toms River', href: '/cooling/toms-river' },
            { label: 'Freehold', href: '/cooling/freehold' },
            { label: 'Brick', href: '/cooling/brick' },
            { label: 'Old Bridge', href: '/cooling/old-bridge' },
            { label: 'Red Bank', href: '/cooling/red-bank' },
            { label: 'Lakewood', href: '/cooling/lakewood' },
        ],
    },
    {
        title: 'Explore Other Services',
        links: [
            { label: 'Heating & Furnace Repair', href: '/heating' },
            { label: 'Indoor Air Quality', href: '/indoor-air-quality' },
            { label: 'Plumbing', href: '/plumbing' },
            { label: 'Commercial HVAC', href: '/commercial-hvac' },
        ],
    },
];

export default function CoolingPage({ blocks = [], tags = [], reviews = [], seo = {} }) {
    const faqs = blocks
        .filter((b) => b.type === 'faq')
        .map((b) => ({ question: b.heading, answer: b.body }));

    return (
        <SiteLayout showReviews={false}>
            <Seo
                seo={seo}
                fallbackTitle="AC Repair & Air Conditioning Services in NJ | Guardian Air"
                fallbackDescription="Need AC repair in NJ? Guardian Air delivers same-day, licensed & insured air conditioning repair across Monmouth, Middlesex & Ocean counties. Call now!"
            />
            <ServiceSchema
                serviceName="AC Repair & Air Conditioning Services"
                serviceType="Air conditioning repair and installation"
                description="AC repair, central air installation, ductless mini-split, and air conditioning maintenance across Monmouth, Middlesex, and Ocean counties, NJ."
                path="/cooling"
                faqs={faqs}
            />

            <Breadcrumbs items={[{ label: 'Cooling', href: '/cooling' }]} />

            <article>
                <PageHeader
                    label="Beat the Heat"
                    title="AC Repair & Air Conditioning Services Across New Jersey"
                    image="/img/cooling-hero.webp"
                    imageCover
                    description="AC repair, central air installation, ductless cooling, and full system tune-ups across Monmouth, Middlesex & Ocean counties. Licensed, insured, and ready with fast emergency service all summer long."
                    titleClassName="font-normal"
                />

                <ServiceArticle
                    page="cooling"
                    tags={tags}
                    blocks={blocks}
                    metaLabel="Cooling Guide"
                    faqEyebrow="New Jersey Cooling Repair Contractors"
                    headingSizeClass="text-[30px] font-normal"
                    formHeadingClassName="font-normal"
                />

                <RelatedLinks
                    eyebrow="Cooling"
                    heading="Explore Our Cooling Services & Areas"
                    columns={COLUMNS}
                    viewAll={{ label: 'View All Service Areas', href: '/service-areas' }}
                />
            </article>

            <CtaBanner titleWeightClass="font-normal" />
        </SiteLayout>
    );
}

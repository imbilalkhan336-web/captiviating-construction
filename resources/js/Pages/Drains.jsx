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
        title: 'Drain & Sewer Services',
        links: [
            { label: 'Sewer Repair', href: '/drains/sewer-repair' },
            { label: 'Hydro Jetting', href: '/drains/hydro-jetting' },
            { label: 'Camera Inspection', href: '/drains/camera-inspection' },
        ],
    },
    {
        title: 'Drain Service Areas',
        links: [
            { label: 'Toms River', href: '/drains/toms-river' },
            { label: 'Freehold', href: '/drains/freehold' },
            { label: 'Brick', href: '/drains/brick' },
            { label: 'Old Bridge', href: '/drains/old-bridge' },
            { label: 'Red Bank', href: '/drains/red-bank' },
            { label: 'Lakewood', href: '/drains/lakewood' },
        ],
    },
    {
        title: 'Explore Other Services',
        links: [
            { label: 'Plumbing & Water Heaters', href: '/plumbing' },
            { label: 'Commercial Plumbing', href: '/commercial-plumbing' },
            { label: 'Heating & Furnace Repair', href: '/heating' },
            { label: 'Cooling & AC Repair', href: '/cooling' },
        ],
    },
];

export default function DrainsPage({ blocks = [], tags = [], reviews = [], seo = {} }) {
    const faqs = blocks
        .filter((b) => b.type === 'faq')
        .map((b) => ({ question: b.heading, answer: b.body }));

    return (
        <SiteLayout showReviews={false}>
            <Seo
                seo={seo}
                fallbackTitle="Drain Cleaning & Sewer Services in NJ | Guardian Air"
                fallbackDescription="Need drain cleaning in NJ? Guardian Air offers licensed, insured drain & sewer service across Monmouth, Middlesex & Ocean counties. Call today!"
            />
            <ServiceSchema
                serviceName="Drain Cleaning & Sewer Services"
                serviceType="Drain cleaning and sewer repair"
                description="Drain cleaning, sewer repair, hydro jetting, and camera inspection across Monmouth, Middlesex, and Ocean counties, NJ."
                path="/drains"
                faqs={faqs}
            />

            <Breadcrumbs items={[{ label: 'Drains', href: '/drains' }]} />

            <article>
                <PageHeader
                    label="Flow Restored"
                    title="Drain Cleaning & Sewer Repair in New Jersey"
                    image="/img/drains-hero.webp"
                    imageCover
                    description="Slow drains cleared, sewer lines repaired, and stubborn clogs jetted away — licensed technicians, honest quotes, and emergency response when a backup can't wait."
                    titleClassName="font-normal"
                />

                <ServiceArticle
                    page="drains"
                    tags={tags}
                    blocks={blocks}
                    metaLabel="Drain Guide"
                    faqEyebrow="New Jersey Drain & Sewer Experts"
                    headingSizeClass="text-[30px] font-normal"
                    formHeadingClassName="font-normal"
                />

                <RelatedLinks
                    eyebrow="Drains"
                    heading="Explore Our Drain Services & Areas"
                    columns={COLUMNS}
                    viewAll={{ label: 'View All Service Areas', href: '/service-areas' }}
                />
            </article>

            <CtaBanner titleWeightClass="font-normal" />
        </SiteLayout>
    );
}

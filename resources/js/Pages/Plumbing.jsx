import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import PageHeader from '@/Components/FrontComponents/PageHeader';
import Breadcrumbs from '@/Components/FrontComponents/Breadcrumbs';
import ServiceSchema from '@/Components/FrontComponents/ServiceSchema';
import ServiceArticle from '@/Components/FrontComponents/ServiceArticle';
import RelatedLinks from '@/Components/FrontComponents/RelatedLinks';
import CtaBanner from '@/Components/pages-sections/Home/CtaBanner';
import { PillButton } from '@/Components/FrontComponents/PillButton';
import { LuPhone } from 'react-icons/lu';

const PHONE = '(848) 276-6300';
const TEL = `tel:+1${PHONE.replace(/[^\d]/g, '')}`;

const COLUMNS = [
    {
        title: 'Plumbing Services',
        links: [
            { label: 'Emergency Plumber', href: '/plumbing/emergency-plumber' },
            { label: 'Water Heater Service', href: '/plumbing/water-heater' },
            { label: 'Tankless Water Heater', href: '/plumbing/tankless-water-heater' },
            { label: 'Leak Detection', href: '/plumbing/leak-detection' },
        ],
    },
    {
        title: 'Plumber Near You',
        links: [
            { label: 'Toms River', href: '/plumbing/toms-river' },
            { label: 'Freehold', href: '/plumbing/freehold' },
            { label: 'Brick', href: '/plumbing/brick' },
            { label: 'Old Bridge', href: '/plumbing/old-bridge' },
            { label: 'Red Bank', href: '/plumbing/red-bank' },
            { label: 'Lakewood', href: '/plumbing/lakewood' },
        ],
    },
    {
        title: 'Explore Other Services',
        links: [
            { label: 'Drain Cleaning & Sewer', href: '/drains' },
            { label: 'Heating & Water Heaters', href: '/heating' },
            { label: 'Indoor Air Quality', href: '/indoor-air-quality' },
            { label: 'Commercial Plumbing', href: '/commercial-plumbing' },
        ],
    },
];

export default function PlumbingPage({ blocks = [], tags = [], reviews = [], seo = {} }) {
    const faqs = blocks
        .filter((b) => b.type === 'faq')
        .map((b) => ({ question: b.heading, answer: b.body }));

    return (
        <SiteLayout showReviews={false}>
            <Seo
                seo={seo}
                fallbackTitle="Licensed Plumber NJ — 24/7 Plumbing Service | Guardian Air"
                fallbackDescription="Need a licensed plumber in NJ? Guardian Air offers 24/7 insured plumbing repair across Monmouth, Middlesex & Ocean counties. Call now for fast service!"
            />
            <ServiceSchema
                serviceName="Licensed Plumbing Services"
                serviceType="Residential plumbing repair and installation"
                description="Licensed plumber serving Monmouth, Middlesex, and Ocean counties, NJ — emergency plumbing, water heaters, leak detection, and pipe repair."
                path="/plumbing"
                faqs={faqs}
            />

            <Breadcrumbs items={[{ label: 'Plumbing', href: '/plumbing' }]} />

            <article>
                <PageHeader
                    label="Licensed & Insured"
                    title="Expert Plumbing Services in Monmouth, Middlesex & Ocean County, NJ"
                    image="/img/plumbing-hero.webp"
                    imageCover
                    description="Licensed plumbers for emergency repairs, water heaters, leak detection, and repiping across central New Jersey. Flat-rate pricing, 24/7 response — call Guardian Air today."
                    titleClassName="font-normal"
                >
                    <PillButton href={TEL} variant="yellow" size="md" icon="phone">
                        24/7 Emergency: {PHONE}
                    </PillButton>
                </PageHeader>

                <ServiceArticle
                    page="plumbing"
                    tags={tags}
                    blocks={blocks}
                    metaLabel="Plumbing Guide"
                    faqEyebrow="New Jersey Licensed Plumbers"
                    headingSizeClass="text-[30px] font-normal"
                    formHeadingClassName="font-normal"
                />

                <RelatedLinks
                    eyebrow="Plumbing"
                    heading="Explore Our Plumbing Services & Areas"
                    columns={COLUMNS}
                    viewAll={{ label: 'View All Service Areas', href: '/service-areas' }}
                    note={
                        <a
                            href={TEL}
                            className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-[#07264A] hover:text-brand-orange"
                        >
                            <LuPhone className="h-4 w-4 text-brand-orange" />
                            24/7 Emergency Plumber: {PHONE}
                        </a>
                    }
                />
            </article>

            <CtaBanner titleWeightClass="font-normal" />
        </SiteLayout>
    );
}

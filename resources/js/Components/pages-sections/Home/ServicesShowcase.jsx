import FeatureBlock from '@/Components/FrontComponents/FeatureBlock';

const BLOCKS = [
    {
        eyebrow: 'Renovations & Remodels',
        heading: 'Breathing New Life Into Every Space',
        body: 'From kitchens and bathrooms to complete home makeovers, our renovation and remodeling services are designed to breathe new life into your space. With expert craftsmanship and modern design, we transform tired, outdated rooms into functional, stylish spaces that add lasting value to your home.',
        image: '/image/renovations-remodels.webp',
        imageAlt: 'Renovated custom home',
    },
    {
        eyebrow: 'Basements',
        heading: "Taking The 'Unfinished' And Making It Part Of Your Home",
        body: 'That basement has the potential to offer an entire additional floor of living space â€” far more than storage. Our expertise turns unfinished, underused basements into inviting living areas. Allow us to help you transform your basement into a captivating gathering space for family and friends to enjoy.',
        image: '/image/basements.webp',
        imageAlt: 'Finished basement living space',
    },
    {
        eyebrow: 'New Construction',
        heading: 'Turning Your Vision Into Reality',
        body: 'At Captivating Construction, we take your ideas and turn them into beautifully built spaces. With a focus on quality, detail, and personalized service, we ensure every project reflects your unique vision while delivering lasting value.',
        bullets: ['Full Home Remodels', 'Open Floor Plans', 'Crawl Spaces', 'Second Story Additions', 'Large Additions'],
        image: '/image/new-construction.webp',
        imageAlt: 'New home under construction',
    },
    {
        eyebrow: 'Exteriors',
        heading: "Make Your Home's First Impression Unforgettable",
        body: 'From routine upgrades to full exterior transformations, we create spaces that capture attention and leave a lasting impression. Our team blends style, quality, and craftsmanship to ensure your home stands out from the rest.',
        bulletsTitle: 'Exterior Services Include:',
        bullets: ['Roofing & Siding', 'Custom Stonework', 'Decks & Balconies', 'Paver Driveways', 'Custom Windows', 'Patios & Outdoor Living Spaces'],
        image: '/image/exteriors.webp',
        imageAlt: 'Custom home exterior',
    },
    {
        eyebrow: 'Interiors',
        heading: 'Your Interior Deserves To Be Nothing Short of Perfect',
        body: "Your interior is where you spend most of your time, and every detail should reflect your comfort, style, and functionality. At Captivating Construction, we design and build interiors that balance beauty with everyday living â€” spaces you'll love to spend time in.",
        bulletsTitle: 'Interior Services Include:',
        bullets: ['Full Home Remodels', 'Kitchen & Bathroom Renovations', 'Custom Built-Ins', 'Coffered Ceilings', 'Custom Bars'],
        image: '/image/interiors.webp',
        imageAlt: 'Custom home interior kitchen',
    },
];

export default function ServicesShowcase() {
    return (
        <div>
            {BLOCKS.map((block, i) => (
                <section key={block.heading} className={i % 2 === 1 ? 'bg-[#f3f4f6]' : 'bg-white'}>
                    <div className="mx-auto max-w-[1200px] px-4 py-14 lg:py-20">
                        <FeatureBlock {...block} reverse={i % 2 === 1} />
                    </div>
                </section>
            ))}
        </div>
    );
}

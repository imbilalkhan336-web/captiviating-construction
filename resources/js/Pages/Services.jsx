import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import ServiceSchema from '@/Components/FrontComponents/ServiceSchema';
import Craftsmanship from '@/Components/pages-sections/Home/Craftsmanship';
import GroupStatement from '@/Components/pages-sections/Home/GroupStatement';
import ServicesShowcase from '@/Components/pages-sections/Home/ServicesShowcase';
import QuoteBanner from '@/Components/FrontComponents/QuoteBanner';

const HERO_BG = '/image/about-company.webp';

function ServicesHero() {
    return (
        <section className="relative bg-black">
            <div className="relative overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${HERO_BG}')` }}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

                <div className="relative mx-auto max-w-[1200px] px-4 py-20 lg:py-28">
                    <h1 className="font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-white">
                        Services
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default function ServicesPage({ reviews = [], seo = {} }) {
    return (
        <SiteLayout reviews={reviews}>
            <Seo
                seo={seo}
                fallbackTitle="Our Services | Captivating Construction Group â€” NJ Custom Home Builder"
                fallbackDescription="Custom home building, renovations, additions, basements, exteriors, and interior remodeling across New Jersey â€” built with luxury craftsmanship and decades of experience."
            />
            <ServiceSchema
                serviceName="Construction & Renovation Services"
                serviceType="Custom home builder and general contractor"
                description="New construction, renovations, additions, basements, exteriors, and interior remodeling across New Jersey â€” from concept to completion."
                path="/services"
            />

            <ServicesHero />
            <Craftsmanship />
            <GroupStatement />
            <ServicesShowcase />
            <QuoteBanner />
        </SiteLayout>
    );
}

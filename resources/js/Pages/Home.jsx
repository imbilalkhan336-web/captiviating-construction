import Seo from '@/Components/Seo';
import SiteLayout from '@/Layouts/SiteLayout';
import ServiceSchema from '@/Components/FrontComponents/ServiceSchema';
import Hero from '@/Components/pages-sections/Home/Hero';
import AboutIntro from '@/Components/pages-sections/Home/AboutIntro';
import Craftsmanship from '@/Components/pages-sections/Home/Craftsmanship';
import ServicesShowcase from '@/Components/pages-sections/Home/ServicesShowcase';
import GroupStatement from '@/Components/pages-sections/Home/GroupStatement';
import Portfolio from '@/Components/pages-sections/Home/Portfolio';
import ClientReviews from '@/Components/FrontComponents/ClientReviews';
import Services from '@/Components/pages-sections/Home/Services';
import RedefiningLuxury from '@/Components/pages-sections/RedefiningLuxury';
import CtaSection from '@/Components/pages-sections/CtaSection';

const HOME_FAQS = [
    { q: 'Do you build custom homes from the ground up?', a: 'Yes. From your first concept and lot selection through the final walk-through, we design and build fully custom homes tailored to your lifestyle, needs, and vision — with the craftsmanship and lasting value our name is built on.' },
    { q: 'What areas of New Jersey do you serve?', a: "We're based in Colts Neck and build custom homes, renovations, and additions for homeowners across New Jersey. Reach out with your address and we'll confirm we cover your area." },
    { q: 'Do you handle both interior and exterior work?', a: 'We do. From roofing, siding, custom stonework, decks, and paver driveways to full home remodels, kitchens, baths, custom built-ins, and coffered ceilings — interiors and exteriors are handled by one trusted team.' },
    { q: 'How do you keep projects on time and on budget?', a: 'Building is a fluid process, and our experience and attention to detail let us plan carefully and communicate clearly at every stage. Finishing on time and on budget is a point of pride for us — not an afterthought.' },
    { q: 'Do you offer consultations before a project?', a: 'Absolutely. We provide expert guidance on planning, budgeting, and design so you can make confident decisions before construction ever begins. Contact us to schedule yours.' },
];

export default function Home({ reviews = [], posts = [], seo = {}, gallery = [] }) {
    return (
        <SiteLayout reviews={reviews}>
            <Seo
                seo={seo}
                fallbackTitle="NJ Custom Home Builders | Captivating Construction Group"
                fallbackDescription="Captivating Construction Group is a full-service New Jersey custom home builder with over 30 years of experience — new home construction, renovations, additions, and basement finishing built with luxury craftsmanship."
            />
            <ServiceSchema
                serviceName="Custom Home Building & Renovation"
                serviceType="Custom home builder and general contractor"
                description="Custom home building, renovations, additions, basements, and remodeling across New Jersey — from concept to completion."
                path="/"
                faqs={HOME_FAQS.map((f) => ({ question: f.q, answer: f.a }))}
            />
            <Hero />
            <Services />
            <AboutIntro />
            <ClientReviews />
            <Craftsmanship />
            <ServicesShowcase />
            <GroupStatement />
            <Portfolio images={gallery} />
            <RedefiningLuxury />
            <CtaSection />
        </SiteLayout>
    );
}

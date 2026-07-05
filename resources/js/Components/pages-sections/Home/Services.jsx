import { LuBuilding2, LuHouse, LuLayers, LuWrench } from 'react-icons/lu';
import { PillButton } from '@/Components/FrontComponents/PillButton';

const SERVICES = [
    {
        icon: LuBuilding2,
        title: 'New Construction',
        body: 'We design and build custom homes and commercial projects with quality craftsmanship and lasting value.',
    },
    {
        icon: LuHouse,
        title: 'Renovations',
        body: 'From kitchens to full remodels, we transform spaces with modern design and skilled workmanship.',
    },
    {
        icon: LuLayers,
        title: 'Basements',
        body: 'Turn unused basements into inviting living areas, from family rooms to guest suites and home theaters.',
    },
    {
        icon: LuWrench,
        title: 'Consultations',
        body: 'Get expert guidance on planning, budgeting, and design to bring your construction vision to life.',
    },
];

function ServiceCard({ icon: Icon, title, body }) {
    return (
        <div className="group relative mt-7 rounded-lg border border-gray-200 bg-white px-6 pb-8 pt-12 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue-light/40 hover:shadow-lg">
            {/* Icon circle overlaps the top edge of the card */}
            <div className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-brand-blue-light text-white shadow-md">
                <Icon className="h-7 w-7" />
            </div>
            <h3 className="font-body text-xl font-bold text-brand-blue">{title}</h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-gray-600">{body}</p>
        </div>
    );
}

export default function Services() {
    return (
        <section className="relative bg-white py-20 lg:py-28">
            <div className="relative mx-auto max-w-7xl px-4 text-center">
                <p className="text-[13px] font-extrabold uppercase tracking-[0.25em] text-brand-blue-light">
                    Our Construction Services
                </p>
                <h2 className="mt-3 font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                    Captivating New Jersey For Decades
                </h2>
                <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-gray-600">
                    With decades of trusted experience, we&apos;ve been building, renovating, and
                    transforming homes and businesses across New Jersey with unmatched craftsmanship and care.
                </p>

                <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {SERVICES.map((service) => (
                        <ServiceCard
                            key={service.title}
                            icon={service.icon}
                            title={service.title}
                            body={service.body}
                        />
                    ))}
                </div>

                <div className="mt-12">
                    <PillButton href="/contact" variant="blue" size="md">
                        Schedule A Consultation
                    </PillButton>
                </div>
            </div>
        </section>
    );
}

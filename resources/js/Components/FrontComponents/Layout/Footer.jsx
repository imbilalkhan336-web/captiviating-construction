import { Link } from '@inertiajs/react';
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu';
import { FaInstagram, FaFacebookF, FaHouzz } from 'react-icons/fa';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Kitchen Design', href: '/services' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact us', href: '/contact' },
];

const SERVICE_LINKS = [
    { label: 'Build Your Lot', href: '/services/build-on-your-lot-in-nj' },
    { label: 'Kitchen Renovations', href: '/services/nj-kitchen-renovations' },
    { label: 'Luxury Home Builders', href: '/services/luxury-home-builder-nj' },
    { label: 'New Construction Services', href: '/services/full-home-remodel-new-construction-nj' },
    { label: 'Basements Renovations', href: '/services/basement-services-nj' },
    { label: 'Additions', href: '/services/additions' },
];

function ColumnTitle({ children }) {
    return (
        <div className="mb-5">
            <h3 className="text-lg font-semibold text-white">{children}</h3>
            <span aria-hidden="true" className="mt-2 block h-0.5 w-9 rounded-full bg-brand-orange" />
        </div>
    );
}

function FooterLink({ href, children }) {
    const isHash = href.startsWith('/#');
    const cls = 'font-body text-sm text-white/80 transition-colors hover:text-white';
    return isHash ? (
        <a href={href} className={cls}>{children}</a>
    ) : (
        <Link href={href} className={cls}>{children}</Link>
    );
}

function Social({ href, label, icon: Icon }) {
    return (
        <a
            href={href}
            aria-label={label}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-orange"
        >
            <Icon className="h-4 w-4" />
        </a>
    );
}

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0e4d8a] text-white">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {/* Brand */}
                    <div>
                        <div className="inline-block rounded-lg bg-white p-3 shadow-sm">
                            <img src="/image/logo.webp" alt="Captivating Construction Group" className="h-14 w-auto" />
                        </div>
                        <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-white">
                            Captivating Construction is a full service customer focused commercial construction
                            company delivering high quality projects by traditional design-bid-build services as a
                            general contractor as well as design-build services.
                        </p>
                    </div>

                    {/* Navigations */}
                    <div>
                        <ColumnTitle>Navigations</ColumnTitle>
                        <ul className="space-y-3">
                            {NAV_LINKS.map((l) => (
                                <li key={l.label}><FooterLink href={l.href}>{l.label}</FooterLink></li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <ColumnTitle>Services</ColumnTitle>
                        <ul className="space-y-3">
                            {SERVICE_LINKS.map((l) => (
                                <li key={l.label}><FooterLink href={l.href}>{l.label}</FooterLink></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <ColumnTitle>Contact Info</ColumnTitle>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:info@capconnj.com" className="flex items-start gap-3 font-body text-sm text-white/80 transition-colors hover:text-white">
                                    <LuMail className="mt-0.5 h-4 w-4 flex-shrink-0" /> info@capconnj.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3 font-body text-sm text-white/80">
                                <LuMapPin className="mt-0.5 h-4 w-4 flex-shrink-0" /> 21 Driftwood Lane Colts Neck NJ 07722
                            </li>
                            <li>
                                <a href="tel:+17322725937" className="flex items-start gap-3 font-body text-sm text-white/80 transition-colors hover:text-white">
                                    <LuPhone className="mt-0.5 h-4 w-4 flex-shrink-0" /> 732-272-5937
                                </a>
                            </li>
                        </ul>

                        <div className="my-6 h-px w-full bg-white/15" />

                        <ColumnTitle>Follow Us</ColumnTitle>
                        <div className="flex gap-3">
                            <Social href="#" label="Instagram" icon={FaInstagram} />
                            <Social href="#" label="Facebook" icon={FaFacebookF} />
                            <Social href="#" label="Houzz" icon={FaHouzz} />
                            <Social href="mailto:info@capconnj.com" label="Email" icon={LuMail} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/15">
                <div className="mx-auto flex w-full flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-white/70 sm:flex-row">
                    <p>&copy; {year} Captivating Construction. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <a href="/sitemap" className="transition-colors hover:text-white">Sitemap</a>
                        <a href="/privacy" className="transition-colors hover:text-white">Privacy Policy</a>
                        <a href="/terms" className="transition-colors hover:text-white">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

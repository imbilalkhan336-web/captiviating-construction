import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { PillButton } from '../PillButton';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    {
        label: 'Services',
        href: '/services',
        sublinks: [
            { label: 'Build Your Lot', href: '/services/build-on-your-lot-in-nj' },
            { label: 'Kitchen Renovations', href: '/services/nj-kitchen-renovations' },
            { label: 'Luxury Home Builders', href: '/services/luxury-home-builder-nj' },
            { label: 'New Construction Services', href: '/services/full-home-remodel-new-construction-nj' },
            { label: 'Basements Renovations', href: '/services/basement-services-nj' },
            { label: 'Additions', href: '/services/additions' },
        ],
    },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Kitchen Design', href: '/free-3d-design' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
];

function Caret() {
    return (
        <svg className="ml-1 inline-block h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// One top-level item handles a plain link, a hash anchor, or a hover dropdown.
function NavItem({ link, openMenu, setOpenMenu }) {
    const { url } = usePage();
    const isActive = link.href === '/' ? url === '/' : url === link.href || url.startsWith(link.href + '/');
    const linkClasses =
        `flex items-center whitespace-nowrap px-2.5 py-2 [font-family:'Manrope',sans-serif] text-[16px] font-semibold leading-[20px] transition-colors hover:text-[#0060B9] ${isActive ? 'text-[#0060B9]' : 'text-black'}`;

    if (link.sublinks) {
        return (
            <div
                className="relative"
                onMouseEnter={() => setOpenMenu(link.label)}
                onMouseLeave={() => setOpenMenu(null)}
            >
                <Link href={link.href} className={linkClasses}>
                    {link.label}
                    <Caret />
                </Link>
                {openMenu === link.label && (
                    <div className="absolute left-0 top-full z-50 min-w-[210px] rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                        {link.sublinks.map((sub) => (
                            <Link
                                key={sub.label}
                                href={sub.href}
                                className="block whitespace-nowrap px-4 py-2 text-xs font-semibold uppercase text-[#07264A] transition-colors hover:bg-[#005EAB] hover:text-white"
                            >
                                {sub.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    if (link.anchor) {
        return (
            <a href={link.href} className={linkClasses}>
                {link.label}
            </a>
        );
    }

    return (
        <Link href={link.href} className={linkClasses}>
            {link.label}
        </Link>
    );
}

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-md">
            <div className="mx-auto flex max-w-[1200px] items-center px-4 py-1">
                <Link href="/" className="mr-6 flex flex-shrink-0 items-center">
                    <img
                        src="/image/logo.webp"
                        alt="Captivating Construction Group"
                        className="h-14 w-auto md:h-16 lg:h-20"
                    />
                </Link>

                {/* Spacer pushes everything to the right */}
                <div className="flex-1" />

                {/* Desktop nav links */}
                <div className="hidden items-center gap-0.5 lg:flex lg:mr-2 xl:mr-3">
                    {navLinks.map((link) => (
                        <NavItem key={link.label} link={link} openMenu={openMenu} setOpenMenu={setOpenMenu} />
                    ))}
                </div>

                {/* CTA button */}
                <div className="hidden flex-shrink-0 items-center md:flex">
                    <PillButton href="/contact" variant="dark" size="sm" className="!px-7 !py-3">
                        Get A Quote
                    </PillButton>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="ml-auto flex items-center justify-center rounded-md p-2 text-[#07264A] hover:bg-gray-100 lg:hidden"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="max-h-[calc(100dvh-64px)] overflow-y-auto overscroll-contain border-t border-gray-200 bg-white px-4 pb-6 lg:hidden">
                    <div className="flex flex-col gap-1 pt-4">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                {link.anchor ? (
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block rounded-lg px-4 py-3 text-xs font-bold uppercase text-[#07264A] transition-colors hover:bg-gray-100 hover:text-brand-orange"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block rounded-lg px-4 py-3 text-xs font-bold uppercase text-[#07264A] transition-colors hover:bg-gray-100 hover:text-brand-orange"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                                {link.sublinks && (
                                    <div className="ml-3 flex flex-col border-l border-gray-200 pl-2">
                                        {link.sublinks.map((sub) => (
                                            <Link
                                                key={sub.label}
                                                href={sub.href}
                                                onClick={() => setMobileOpen(false)}
                                                className="rounded-lg px-4 py-2 text-[11px] font-semibold uppercase text-[#07264A]/80 transition-colors hover:bg-gray-100 hover:text-brand-orange"
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 border-t border-gray-200 pt-5">
                        <PillButton href="/contact" variant="dark" size="md" className="w-full justify-center">
                            Get A Quote
                        </PillButton>
                    </div>
                </div>
            )}
        </nav>
    );
}

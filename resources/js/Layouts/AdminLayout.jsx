import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    LuLayoutDashboard,
    LuFileStack,
    LuExternalLink,
    LuLogOut,
    LuMenu,
    LuX,
    LuChevronDown,
    LuNewspaper,
    LuInbox,
    LuMessageSquare,
    LuSearch,
    LuSettings,
} from 'react-icons/lu';

const PAGES = [
    { slug: 'heating', label: 'Heating' },
    { slug: 'cooling', label: 'Cooling' },
    { slug: 'plumbing', label: 'Plumbing' },
    { slug: 'indoor-air-quality', label: 'Indoor Air Quality' },
    { slug: 'drains', label: 'Drains' },
    { slug: 'commercial', label: 'Commercial' },
];

function SidebarContent() {
    const { url, props } = usePage();
    const isAdmin = props.auth.user?.is_admin;
    const isDashboard = url === '/admin' || url === '/admin/';
    const [pagesOpen, setPagesOpen] = useState(true);

    return (
        <div className="flex h-full flex-col">
            <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
                <img src="/img/logo.webp" alt="Guardian Air" className="h-8 w-auto" />
                <span className="text-xs font-extrabold uppercase tracking-widest text-white/60">{isAdmin ? 'Admin' : 'Panel'}</span>
            </div>

            <nav className="admin-sidebar-scroll flex-1 space-y-1 overflow-y-auto px-3 py-4">
                {isAdmin && (
                    <Link
                        href={route('admin.dashboard')}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                            isDashboard ? 'bg-brand-orange text-white' : 'text-white/80 hover:bg-white/10'
                        }`}
                    >
                        <LuLayoutDashboard className="h-4 w-4" />
                        Dashboard
                    </Link>
                )}

                {isAdmin && (
                    <Link
                        href={route('admin.blog')}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                            url.startsWith('/admin/blog') ? 'bg-brand-orange text-white' : 'text-white/80 hover:bg-white/10'
                        }`}
                    >
                        <LuNewspaper className="h-4 w-4" />
                        Blog Posts
                    </Link>
                )}

                {isAdmin && (
                    <Link
                        href={route('admin.submissions')}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                            url.startsWith('/admin/submissions') ? 'bg-brand-orange text-white' : 'text-white/80 hover:bg-white/10'
                        }`}
                    >
                        <LuInbox className="h-4 w-4" />
                        Submissions
                    </Link>
                )}

                <Link
                    href={route('admin.reviews')}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                        url.startsWith('/admin/reviews') ? 'bg-brand-orange text-white' : 'text-white/80 hover:bg-white/10'
                    }`}
                >
                    <LuMessageSquare className="h-4 w-4" />
                    Reviews
                </Link>

                {isAdmin && (
                    <div className="pt-3">
                        <button
                            type="button"
                            onClick={() => setPagesOpen((v) => !v)}
                            aria-expanded={pagesOpen}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
                        >
                            <LuFileStack className="h-4 w-4" />
                            <span className="flex-1 text-left">Page Content</span>
                            <LuChevronDown className={`h-4 w-4 transition-transform ${pagesOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {pagesOpen && (
                            <div className="mt-1 space-y-1 pl-4">
                                {PAGES.map((p) => {
                                    const active = url.startsWith(`/admin/pages/${p.slug}`);
                                    return (
                                        <Link
                                            key={p.slug}
                                            href={route('admin.pages.edit', p.slug)}
                                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                                                active ? 'bg-brand-orange text-white' : 'text-white/70 hover:bg-white/10'
                                            }`}
                                        >
                                            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-current opacity-60" />
                                            {p.label}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}

                {isAdmin && (
                    <Link
                        href={route('admin.seo')}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                            url.startsWith('/admin/seo') ? 'bg-brand-orange text-white' : 'text-white/80 hover:bg-white/10'
                        }`}
                    >
                        <LuSearch className="h-4 w-4" />
                        SEO
                    </Link>
                )}

                {isAdmin && (
                    <Link
                        href={route('admin.settings')}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                            url.startsWith('/admin/settings') ? 'bg-brand-orange text-white' : 'text-white/80 hover:bg-white/10'
                        }`}
                    >
                        <LuSettings className="h-4 w-4" />
                        Settings
                    </Link>
                )}
            </nav>

            <div className="space-y-1 border-t border-white/10 px-3 py-4">
                <Link
                    href="/"
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
                >
                    <LuExternalLink className="h-4 w-4" />
                    View Site
                </Link>
                <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
                >
                    <LuLogOut className="h-4 w-4" />
                    Log Out
                </Link>
            </div>
        </div>
    );
}

export default function AdminLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="admin-panel min-h-screen bg-gray-100">
            {/* Desktop sidebar */}
            <aside className="fixed inset-y-0 left-0 hidden w-64 bg-[#07264A] lg:block">
                <SidebarContent />
            </aside>

            {/* Mobile sidebar */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
                    <aside className="absolute inset-y-0 left-0 w-64 bg-[#07264A]">
                        <button
                            type="button"
                            onClick={() => setMobileOpen(false)}
                            className="absolute right-2 top-3 flex h-10 w-10 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white"
                            aria-label="Close menu"
                        >
                            <LuX className="h-6 w-6" />
                        </button>
                        <SidebarContent />
                    </aside>
                </div>
            )}

            <div className="lg:pl-64">
                <header className="sticky top-0 z-40 flex items-center gap-4 border-b border-gray-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
                    <button
                        type="button"
                        onClick={() => setMobileOpen(true)}
                        className="-ml-2 flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-800 lg:hidden"
                        aria-label="Open menu"
                    >
                        <LuMenu className="h-6 w-6" />
                    </button>
                    <div className="flex-1">
                        {header || <h1 className="text-lg font-bold text-[#07264A]">{user?.is_admin ? 'Admin Panel' : 'Review Panel'}</h1>}
                    </div>
                    <span className="hidden text-sm font-semibold text-gray-500 sm:block">{user?.name}</span>
                </header>

                <main className="px-4 py-8 sm:px-6 lg:px-8">{children}</main>
            </div>
        </div>
    );
}

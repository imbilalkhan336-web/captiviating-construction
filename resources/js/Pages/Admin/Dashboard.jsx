import { Head, Link, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { LuNewspaper, LuFileStack, LuExternalLink, LuArrowRight } from 'react-icons/lu';

function QuickLink({ href, external = false, icon: Icon, title, description }) {
    const className =
        'group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md';
    const inner = (
        <>
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
                <p className="font-display text-lg uppercase text-[#07264A]">{title}</p>
                <p className="text-xs font-semibold text-gray-400">{description}</p>
            </div>
            <LuArrowRight className="h-4 w-4 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-brand-orange" />
        </>
    );

    return external ? (
        <a href={href} target="_blank" rel="noreferrer" className={className}>
            {inner}
        </a>
    ) : (
        <Link href={href} className={className}>
            {inner}
        </Link>
    );
}

export default function AdminDashboard() {
    const user = usePage().props.auth.user;

    return (
        <AdminLayout header={<h1 className="text-lg font-bold text-[#07264A]">Dashboard</h1>}>
            <Head title="Admin — Dashboard" />

            {/* Welcome */}
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="font-display text-2xl uppercase text-[#07264A]">
                    Welcome back{user?.name ? `, ${user.name}` : ''}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                    Manage your website content from here. Use the menu on the left to edit pages, or jump in below.
                </p>
            </div>

            {/* Quick links */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <QuickLink
                    href={route('admin.blog')}
                    icon={LuNewspaper}
                    title="Blog Posts"
                    description="Add, edit, or delete blog articles"
                />
                <QuickLink
                    href={route('admin.pages.edit', 'heating')}
                    icon={LuFileStack}
                    title="Page Content"
                    description="Edit the content on your service pages"
                />
                <QuickLink
                    href="/"
                    external
                    icon={LuExternalLink}
                    title="View Site"
                    description="Open the public website"
                />
            </div>
        </AdminLayout>
    );
}

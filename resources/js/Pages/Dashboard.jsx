import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            header={
                <h1 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h1>
            }
        >
            <Head title="Dashboard">
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>

                    {user.is_admin && (
                        <div className="mt-6 overflow-hidden rounded-lg bg-white shadow-sm">
                            <div className="flex flex-wrap items-center justify-between gap-4 p-6">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">Content Management</h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Add, edit, delete, and reorder the content on your service pages.
                                    </p>
                                </div>
                                <Link
                                    href={route('admin.dashboard')}
                                    className="inline-flex items-center rounded-full bg-brand-orange px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-orange-dark"
                                >
                                    Open Admin Panel
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

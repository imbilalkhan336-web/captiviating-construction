import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register">
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <div className="mb-8 text-center">
                <h1 className="font-display text-3xl uppercase text-[#07264A]">
                    Create Account
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                    Join Guardian Air for faster booking and exclusive offers
                </p>
            </div>

            <form onSubmit={submit} className="space-y-5">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-xs font-extrabold uppercase tracking-widest text-gray-500"
                    >
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        autoComplete="name"
                        autoFocus
                        onChange={(e) => setData('name', e.target.value)}
                        className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                        placeholder="John Smith"
                    />
                    {errors.name && (
                        <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-xs font-extrabold uppercase tracking-widest text-gray-500"
                    >
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                        placeholder="you@example.com"
                    />
                    {errors.email && (
                        <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="block text-xs font-extrabold uppercase tracking-widest text-gray-500"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                        placeholder="••••••••"
                    />
                    {errors.password && (
                        <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                    )}
                </div>

                <div>
                    <label
                        htmlFor="password_confirmation"
                        className="block text-xs font-extrabold uppercase tracking-widest text-gray-500"
                    >
                        Confirm Password
                    </label>
                    <input
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                        placeholder="••••••••"
                    />
                    {errors.password_confirmation && (
                        <p className="mt-2 text-sm text-red-600">
                            {errors.password_confirmation}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-dark px-8 py-3.5 text-sm font-extrabold uppercase tracking-widest text-white shadow-lg shadow-brand-orange/30 transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:opacity-50 disabled:hover:translate-y-0"
                >
                    Create Account
                </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-500">
                Already have an account?{' '}
                <Link
                    href={route('login')}
                    className="font-semibold text-brand-blue transition-colors hover:text-brand-orange"
                >
                    Sign in
                </Link>
            </p>

            <div className="mt-6 text-center">
                <Link
                    href="/"
                    className="text-xs font-semibold uppercase tracking-wide text-gray-400 transition-colors hover:text-gray-600"
                >
                    &larr; Back to Home
                </Link>
            </div>
        </GuestLayout>
    );
}

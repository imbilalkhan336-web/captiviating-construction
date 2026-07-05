import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in">
                <meta name="robots" content="noindex, nofollow" />
            </Head>

            <div className="mb-8 text-center">
                <h1 className="font-display text-3xl uppercase text-[#07264A]">
                    Welcome Back
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                    Sign in to your Guardian Air account
                </p>
            </div>

            {status && (
                <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-medium text-green-700">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-5">
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
                        autoFocus
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
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                        className="mt-2 block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#07264A] shadow-sm outline-none transition-all focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                        placeholder="••••••••"
                    />
                    {errors.password && (
                        <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                    )}
                </div>

                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                            className="h-4 w-4 rounded border-gray-300 text-brand-orange focus:ring-brand-orange"
                        />
                        <span className="text-sm text-gray-600">Remember me</span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-orange"
                        >
                            Forgot password?
                        </Link>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-dark px-8 py-3.5 text-sm font-extrabold uppercase tracking-widest text-white shadow-lg shadow-brand-orange/30 transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:opacity-50 disabled:hover:translate-y-0"
                >
                    Sign In
                </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-500">
                Don&apos;t have an account?{' '}
                <Link
                    href={route('register')}
                    className="font-semibold text-brand-blue transition-colors hover:text-brand-orange"
                >
                    Create one
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

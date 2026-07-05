import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-white">
            {/* Left brand side — hidden on mobile */}
            <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#004C93] to-[#003B73] p-12 text-white lg:flex lg:w-1/2 xl:w-5/12">
                {/* Decorative blurs */}
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

                <div className="relative z-10">
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            src="/img/logo.webp"
                            alt="Guardian Air"
                            className="h-14 w-auto"
                        />
                    </Link>
                </div>

                <div className="relative z-10">
                    <h2 className="font-display text-4xl uppercase leading-tight">
                        Trusted Heating, Cooling
                        <br />& Plumbing in NJ
                    </h2>
                    <p className="mt-4 max-w-sm text-sm text-white/70">
                        Licensed technicians serving Monmouth, Middlesex & Ocean counties.
                        Same-day response, upfront pricing.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                            <p className="font-display text-2xl">24/7</p>
                            <p className="text-xs uppercase tracking-wide text-white/60">
                                Emergency Service
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                            <p className="font-display text-2xl">10+</p>
                            <p className="text-xs uppercase tracking-wide text-white/60">
                                Years Experience
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 text-xs text-white/40">
                    &copy; {new Date().getFullYear()} Guardian Air. All rights reserved.
                </div>
            </div>

            {/* Right form side */}
            <div className="flex w-full flex-col items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:w-1/2 lg:px-20 xl:w-7/12">
                <div className="w-full max-w-md">
                    {/* Mobile logo */}
                    <div className="mb-8 flex justify-center lg:hidden">
                        <Link href="/">
                            <img
                                src="/img/logo.webp"
                                alt="Guardian Air"
                                className="h-16 w-auto"
                            />
                        </Link>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

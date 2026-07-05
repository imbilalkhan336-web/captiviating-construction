import { Link, usePage } from '@inertiajs/react';
import { LuPhone, LuMail } from 'react-icons/lu';

export default function TopBar() {
    const { auth } = usePage().props;
    const isAdmin = Boolean(auth?.user?.is_admin);

    return (
        <div className={`bg-[#0A2A4A] text-white ${isAdmin ? 'block' : 'hidden md:block'}`}>
            <div className="mx-auto flex max-w-7xl items-center justify-center gap-5 px-4 py-2 text-xs font-semibold md:justify-end md:gap-7 md:text-sm">
                <a
                    href="mailto:info@capconnj.com"
                    className="flex items-center gap-2 text-white/90 transition-colors hover:text-brand-orange"
                >
                    <LuMail className="h-4 w-4 text-white" />
                    info@capconnj.com
                </a>
                <a
                    href="tel:+17322725937"
                    className="flex items-center gap-2 text-white/90 transition-colors hover:text-brand-orange"
                >
                    <LuPhone className="h-4 w-4 text-white" />
                    732-272-5937
                </a>

                {isAdmin && (
                    <Link
                        href="/admin"
                        className="font-bold text-brand-orange transition-colors hover:text-brand-orange-dark"
                    >
                        Dashboard
                    </Link>
                )}
            </div>
        </div>
    );
}

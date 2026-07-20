import { Link, usePage } from '@inertiajs/react';
import { LuPhone, LuMail } from 'react-icons/lu';

export default function TopBar() {
    const { auth } = usePage().props;
    const isAdmin = Boolean(auth?.user?.is_admin);

    return (
        <div className="bg-[#0A477A] text-white">
            <div className="mx-auto flex w-full max-w-[1280px] items-center justify-end gap-6 px-4 py-[10px] sm:px-6 lg:px-8">
                <a
                    href="mailto:info@capconnj.com"
                    className="flex items-center gap-1.5 [font-family:'Montserrat',sans-serif] text-[14px] font-normal leading-[21px] text-white transition-colors hover:text-white/80"
                >
                    <LuMail className="h-3.5 w-3.5 flex-shrink-0" />
                    <span className="text-white/40">|</span>
                    info@capconnj.com
                </a>

                <a
                    href="tel:+17322725937"
                    className="flex items-center gap-1.5 [font-family:'Montserrat',sans-serif] text-[14px] font-normal leading-[21px] text-white transition-colors hover:text-white/80"
                >
                    <LuPhone className="h-3.5 w-3.5 flex-shrink-0" />
                    732-272-5937
                </a>

                {isAdmin && (
                    <Link
                        href="/admin"
                        className="[font-family:'Montserrat',sans-serif] text-[14px] font-bold text-brand-orange transition-colors hover:text-white"
                    >
                        Dashboard
                    </Link>
                )}
            </div>
        </div>
    );
}

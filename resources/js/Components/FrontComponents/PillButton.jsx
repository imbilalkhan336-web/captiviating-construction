import { Link } from '@inertiajs/react';
import { useScheduleModal } from '@/Components/FrontComponents/ScheduleModalProvider';

function ShineSweep({ tint = 'light' }) {
    const tintClasses = tint === 'dark'
        ? 'from-[#003B73]/30 via-[#003B73]/15 to-transparent'
        : 'from-white/70 via-white/40 to-transparent';
    return (
        <span
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 left-full -z-0 w-full -skew-x-12 bg-gradient-to-l ${tintClasses} transition-transform duration-700 ease-out group-hover:-translate-x-[200%]`}
        />
    );
}

function PhoneIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            />
        </svg>
    );
}

function CalendarIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
        </svg>
    );
}

const SIZE_CLASSES = {
    sm: { wrap: 'gap-2 px-4 py-2', icon: 'h-3.5 w-3.5' },
    smd: { wrap: 'gap-2 px-5 py-2.5', icon: 'h-4 w-4' },
    md: { wrap: 'gap-2.5 px-7 py-3.5', icon: 'h-5 w-5' },
    lg: { wrap: 'gap-2 px-12 py-4', icon: 'h-5 w-5' },
};

// Each variant carries its own colors, shadow, and ring so the base stays
// neutral. `text` and `shine` drive the label color and the sweep tint.
const VARIANT_CLASSES = {
    light: { bg: 'bg-gradient-to-b from-white to-gray-200 shadow-lg shadow-black/25 ring-1 ring-black/5 transition-colors hover:from-gray-100 hover:to-gray-300', text: 'text-[#003B73]', shine: 'dark' },
    yellow: { bg: 'bg-gradient-to-b from-brand-yellow to-brand-orange shadow-lg shadow-black/25 ring-1 ring-black/5', text: 'text-white', shine: 'light' },
    orange: { bg: 'bg-gradient-to-r from-brand-orange to-brand-orange-dark shadow-lg shadow-brand-orange/30 ring-1 ring-black/5', text: 'text-white', shine: 'light' },
    dark: { bg: 'bg-[#005EAB] shadow-lg shadow-black/25 transition-colors hover:bg-[#004a8a]', text: 'text-white', shine: 'light' },
    blue: { bg: 'bg-brand-blue-light shadow-lg shadow-black/25 transition-colors hover:bg-brand-blue', text: 'text-white', shine: 'light' },
    outline: { bg: 'border-2 border-brand-orange bg-transparent transition-colors hover:bg-brand-orange hover:text-white', text: 'text-brand-orange', shine: null },
};

export function PillButton({
    variant = 'yellow',
    size = 'md',
    icon,
    children,
    className = '',
    href,
    type,
    ...rest
}) {
    const sz = SIZE_CLASSES[size] ?? SIZE_CLASSES.md;
    const vr = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.yellow;
    const Icon = icon === 'phone' ? PhoneIcon : icon === 'calendar' ? CalendarIcon : null;

    const classes = [
        'group relative isolate inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full',
        "[font-family:'Manrope',sans-serif] text-[16px] font-bold leading-[16px] uppercase tracking-wide whitespace-nowrap",
        vr.bg,
        vr.text,
        sz.wrap,
        className,
    ].join(' ');

    const inner = (
        <>
            {vr.shine && <ShineSweep tint={vr.shine} />}
            {Icon && <Icon className={`relative z-10 ${sz.icon}`} />}
            <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
        </>
    );

    // Internal route → Inertia <Link> (SPA nav); tel/mailto/external → <a>;
    // no href → real <button> (form submit / onClick actions).
    if (href) {
        const isInternal = href.startsWith('/');
        if (isInternal) {
            return (
                <Link href={href} {...rest} className={classes}>
                    {inner}
                </Link>
            );
        }
        return (
            <a href={href} {...rest} className={classes}>
                {inner}
            </a>
        );
    }

    return (
        <button type={type ?? 'button'} {...rest} className={classes}>
            {inner}
        </button>
    );
}

export function PhonePillButton({ phone, label, size = 'sm', className = '' }) {
    const digits = phone.replace(/[^\d+]/g, '');
    const telHref = digits.startsWith('+') ? `tel:${digits}` : `tel:+1${digits}`;

    const handleClick = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(phone).catch(() => {});
        }
    };

    return (
        <PillButton
            href={telHref}
            onClick={handleClick}
            variant="light"
            size={size}
            icon="phone"
            className={`normal-case ${className}`}
        >
            {label}
        </PillButton>
    );
}

export function SchedulePillButton({ children = 'Schedule Online', size = 'sm', className = '' }) {
    const { open } = useScheduleModal();
    return (
        <PillButton onClick={open} variant="yellow" size={size} icon="calendar" className={className}>
            {children}
        </PillButton>
    );
}

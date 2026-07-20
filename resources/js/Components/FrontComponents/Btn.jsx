import { Link } from '@inertiajs/react';

const VARIANTS = {
    blue:  'bg-[#005EAB] text-white hover:bg-[#004a8a]',
    light: 'bg-white text-[#005EAB] hover:bg-gray-100',
};

export default function Btn({
    href,
    children,
    variant = 'blue',
    className = '',
    type = 'button',
    ...rest
}) {
    const variantCls = VARIANTS[variant] ?? VARIANTS.blue;

    const cls = [
        "inline-flex items-center justify-center gap-2 rounded-full px-7 py-[18px]",
        "[font-family:'Manrope',sans-serif] text-[16px] font-bold leading-[16px] uppercase tracking-wide",
        "transition-colors whitespace-nowrap",
        variantCls,
        className,
    ].join(' ');

    if (href) {
        const isInternal = href.startsWith('/');
        return isInternal
            ? <Link href={href} className={cls} {...rest}>{children}</Link>
            : <a href={href} className={cls} {...rest}>{children}</a>;
    }

    return (
        <button type={type} className={cls} {...rest}>
            {children}
        </button>
    );
}

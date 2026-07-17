export default function Button({ children, variant = 'orange', size = 'md', href = '#', className = '' }) {
    const base = "inline-flex items-center justify-center [font-family:'Manrope',sans-serif] text-[16px] font-bold leading-[16px] uppercase tracking-wide rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        orange: 'bg-brand-orange hover:bg-brand-orange-dark text-white focus:ring-brand-orange',
        blue: 'bg-brand-blue hover:bg-brand-blue-dark text-white focus:ring-brand-blue',
        outline: 'border-2 border-white text-white hover:bg-white hover:text-brand-blue focus:ring-white',
    };

    const sizes = {
        sm: 'px-5 py-2',
        md: 'px-7 py-3',
        lg: 'px-9 py-4',
    };

    return (
        <a href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
            {children}
        </a>
    );
}

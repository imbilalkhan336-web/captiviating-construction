export default function SectionTitle({ subtitle, title, align = 'center', light = false }) {
    return (
        <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
            {subtitle && (
                <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                    {subtitle}
                </span>
            )}
            <h2 className={`mt-2 text-3xl font-extrabold uppercase md:text-4xl ${light ? 'text-white' : 'text-brand-blue'}`}>
                {title}
            </h2>
        </div>
    );
}

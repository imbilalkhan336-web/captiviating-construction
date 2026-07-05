export default function PageHeader({
    label,
    title,
    description,
    image = '/img/heroes/company.webp',
    imagePosition = 'right',
    imageCover = true,
    children,
    titleClassName = '',
}) {
    const positionClass =
        imagePosition === 'center' ? 'bg-center' : 'bg-right';

    return (
        <section className="bg-white pt-6 lg:pt-10">
            <div className="mx-auto max-w-7xl px-4">
                <div className="relative overflow-hidden rounded-2xl bg-[#0A2A4A] shadow-xl">
                    {/* Background image */}
                    {image && (
                        <div
                            aria-hidden="true"
                            className={
                                imageCover
                                    ? 'absolute inset-0 bg-cover bg-center bg-no-repeat'
                                    : `absolute inset-0 bg-no-repeat ${positionClass}`
                            }
                            style={{
                                backgroundImage: `url('${image}')`,
                                ...(imageCover ? {} : { backgroundSize: 'auto 100%' }),
                            }}
                        />
                    )}

                    {/* Gradient overlay — darker on the left where text lives */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-r from-[#0A2A4A] via-[#0A2A4A]/85 to-[#0A2A4A]/30 md:via-[#0A2A4A]/75 md:to-transparent"
                    />

                    {/* Decorative depth orbs */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-12 -left-12 h-48 w-48 rounded-full bg-[#0A55C1]/15 blur-2xl"
                    />

                    {/* Content */}
                    <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
                        <div className="max-w-lg">
                            {/* Eyebrow label with accent line */}
                            <p className="text-[12px] font-extrabold uppercase tracking-[0.25em] text-brand-orange">
                                {label}
                            </p>
                            <span
                                aria-hidden="true"
                                className="mt-3 block h-0.5 w-10 rounded-full bg-brand-orange"
                            />

                            {/* Title */}
                            <h1 className={`mt-4 font-display text-[32px] uppercase leading-[0.95] text-white md:text-[42px] lg:text-[50px] ${titleClassName}`}>
                                {title}
                            </h1>

                            {/* Description */}
                            {description && (
                                <p className="mt-5 font-body text-sm leading-relaxed text-white/85 md:text-base">
                                    {description}
                                </p>
                            )}

                            {/* Extra content (buttons, badges, etc.) */}
                            {children && (
                                <div className="mt-6">{children}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

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
            <div className="mx-auto max-w-[1200px] px-4">
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

                    {/* Gradient overlay â€” darker on the left where text lives */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-r from-[#0A2A4A]/80 via-[#0A2A4A]/50 to-[#0A2A4A]/10 md:via-[#0A2A4A]/40 md:to-transparent"
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
                            {/* Title */}
                            <h1 className={`font-montserrat text-[45px] font-bold leading-[54px] text-white ${titleClassName}`}>
                                {title}
                            </h1>

                            {/* Description */}
                            {description && (
                                <p className="mt-5 font-montserrat text-[16px] font-normal leading-[24px] text-white/85">
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

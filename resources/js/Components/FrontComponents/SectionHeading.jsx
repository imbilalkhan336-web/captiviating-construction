export default function SectionHeading({ children, sizeClass = 'text-[30px] md:text-[40px] lg:text-[46px]' }) {
    return (
        <div>
            <h2 className={`font-display ${sizeClass} uppercase leading-[0.95] text-[#07264A]`}>
                {children}
            </h2>
            <span aria-hidden="true" className="mt-4 block h-1 w-14 rounded-full bg-brand-orange" />
        </div>
    );
}

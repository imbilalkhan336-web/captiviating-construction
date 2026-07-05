const serviceIcons = {
    heating: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 6.51 6.51 0 009 11.5a3 3 0 105.09-2.137 6.376 6.376 0 011.273-4.149z" />
        </svg>
    ),
    cooling: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l4 4m-4-4L8 7m4 14l4-4m-4 4l-4-4M3 12h18M3 12l4-4m-4 4l4 4m14-4l-4-4m4 4l-4 4" />
        </svg>
    ),
    plumbing: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3v3.75m0 0H6A2.25 2.25 0 003.75 9v1.5a2.25 2.25 0 002.25 2.25h.75m3-6h4.5m0 0V3m0 3.75H18a2.25 2.25 0 012.25 2.25v1.5A2.25 2.25 0 0118 12.75h-.75m-8.25 0v3.75c0 1.243 1.007 2.25 2.25 2.25h1.5c1.243 0 2.25-1.007 2.25-2.25V12.75m-6 0h6" />
        </svg>
    ),
    drains: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-1.2 0-3 1.5-3 4.5S10.8 12 12 12s3-1.5 3-4.5S13.2 3 12 3zm0 9v9m-4-5l4 4 4-4" />
        </svg>
    ),
    electric: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
    ),
    airQuality: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25h2.25M3 12h2.25m0 0h13.5M3 15.75h2.25M18.75 8.25H21M18.75 15.75H21" />
        </svg>
    ),
    commercial: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
    ),
};

export default function ServiceCard({ icon, label, href = '#' }) {
    return (
        <a
            href={href}
            className="group flex flex-col items-center gap-3 rounded-2xl bg-white px-6 py-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gray text-brand-orange transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                {serviceIcons[icon]}
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-brand-blue">
                {label}
            </span>
        </a>
    );
}

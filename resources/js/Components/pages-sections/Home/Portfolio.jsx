import { useState } from 'react';
import { PillButton } from '@/Components/FrontComponents/PillButton';
import Gallery from '@/Components/FrontComponents/Gallery';

const TABS = ['All', 'Current Projects', 'Featured Custom Homes', 'Transformations'];

const CATS = ['Current Projects', 'Featured Custom Homes', 'Transformations'];
function getCategory(i) { return CATS[i % CATS.length]; }

export default function Portfolio({ images = [] }) {
    const [active, setActive] = useState('All');

    if (!images.length) return null;

    const filtered = active === 'All' ? images : images.filter((_, i) => getCategory(i) === active);

    return (
        <section className="bg-white py-16 lg:py-12">
            <div className="mx-auto max-w-[1200px] px-4">
                <div className="text-center">
                    <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-brand-blue-light">
                        Portfolio
                    </p>
                    <h2 className="mt-2 font-montserrat text-[35px] font-semibold not-italic leading-[46px] text-black">
                        Building Success Stories
                    </h2>
                </div>

                {/* Filter tabs */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => setActive(tab)}
                            className={`px-6 py-2.5 text-[16px] font-semibold transition-colors ${
                                active === tab
                                    ? 'bg-[#005EAB] text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="mt-6">
                    <Gallery images={filtered} columns={3} />
                </div>

                <div className="mt-6 text-center">
                    <PillButton href="/portfolio" variant="blue" size="md">
                        View Full Portfolio
                    </PillButton>
                </div>
            </div>
        </section>
    );
}

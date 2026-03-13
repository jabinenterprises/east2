import React from 'react';
import statsBg from '@/assets/stats-bg.jpg';

const StatsSection = () => {
    const stats = [
        { label: 'Students Sponsored', value: '7' },
        { label: 'Funds Raised', value: '$3000' },
        { label: 'Sponsors', value: '10' },
        { label: 'Years of Operation', value: '5' },
    ];
    return (
        <>
            <section className="relative overflow-hidden py-25 [clip-path:inset(0)]">
                <img
                    src={statsBg}
                    alt=""
                    className="fixed top-0 left-0 z-1 h-full w-full object-cover"
                />
                <div className="absolute inset-0 z-2 bg-primary-foreground/40" />
                <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:flex md:justify-around">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <div className="mb-2 text-3xl font-bold text-foreground md:text-5xl">
                                {stat.value}
                            </div>
                            <div className="text-sm text-foreground/90 md:text-lg">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default StatsSection;

import React from 'react';
import joyBg from '@/assets/joy-bg.jpg';

const JoyOfGivingSection = () => {
    return (
        <>
            <section className="relative overflow-hidden border-none py-30 [clip-path:inset(0)]">
                <img
                    src={joyBg}
                    alt=""
                    className="fixed top-0 left-0 z-1 h-full w-full object-cover"
                />
                <div className="absolute inset-0 z-2 bg-primary-foreground/40" />
                <div className="relative z-10 container">
                    <h2 className="text-center text-3xl font-bold text-foreground md:text-start md:text-4xl">
                        The Joy of Giving
                    </h2>
                </div>
            </section>
        </>
    );
};

export default JoyOfGivingSection;

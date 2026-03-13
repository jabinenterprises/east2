import React from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
    return (
        <section
            className="relative flex h-screen items-center"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-primary-foreground/40" />
            <div className="relative z-10 container px-6 md:px-12">
                <div className="max-w-2xl">
                    <h2 className="font-sora mb-4 font-heading text-[50px] leading-tight font-bold text-foreground md:mb-6">
                        Fuel Dreams, Transform Lives
                    </h2>
                    <p className="mb-6 text-base leading-relaxed text-foreground/90 md:mb-8 md:text-lg">
                        Your donation today can unlock a student's potential and
                        pave the way for a brighter future. Every contribution
                        brings us closer to equal education for all.
                    </p>
                    <div className="flex gap-4">
                        <button className="rounded-full bg-[#00714b] px-6 py-3 text-sm font-medium text-foreground hover:opacity-90 md:px-8 md:text-base">
                            Donate
                        </button>
                        <button className="rounded-full border border-foreground bg-white px-6 py-3 text-sm font-medium text-black hover:bg-black/10 hover:text-white md:px-8 md:text-base">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

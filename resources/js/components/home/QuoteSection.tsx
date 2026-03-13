import React from 'react';
import quoteBg from '@/assets/quote-bg.jpg';

const QuoteSection = () => {
    return (
        <section className="relative overflow-hidden py-30">
            <img
                src={quoteBg}
                alt=""
                className="absolute inset-0 z-1 h-full w-full object-cover"
            />
            <div className="absolute inset-0 z-2 bg-primary-foreground/40" />
            <div className="relative z-3 mx-auto max-w-7xl px-4">
                <div className="grid items-start gap-6 md:container lg:grid-cols-2">
                    <div>
                        <h3 className="text-[30px] leading-tight font-bold text-foreground md:text-[32px]">
                            Education is the most powerful weapon you can use to
                            change the world.
                        </h3>
                        <p className="mt-2.5 text-base text-foreground/70 md:text-lg">
                            Nelson Mandela.
                        </p>
                        <p className="mt-2.5 text-base font-medium text-foreground/70 md:text-lg">
                            Help us arm a generation with knowledge,
                            opportunity, and hope.
                        </p>
                        <div className="w-full">
                            <div className="mt-5 w-32 border-4 border-foreground/60 md:w-48" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;

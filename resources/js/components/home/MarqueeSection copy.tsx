import React from 'react';
import eastLogo from '@/assets/east-logo.png';

const MarqueeSection = () => {
    return (
        <section className="overflow-hidden bg-black py-8">
            <div className="relative w-full overflow-hidden">
                <div className="animate-marquee flex w-max items-center gap-8">
                    {/* Repeatable Item */}
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <span className="text-[150px] leading-[180px] font-semibold tracking-[-0.03em] text-white [text-shadow:1px_0_0_#919191,0_1px_0_#919191,-1px_0_0_#919191,0_-1px_0_#919191] max-[430px]:text-[80px] max-[430px]:leading-[100px]">
                                EAST AFRICAN SPONSORSHIP TRUST
                            </span>

                            {/* Divider */}
                            <span className="relative flex items-center">
                                <span className="h-[18px] w-[18px] rounded-full border border-[#919191]"></span>
                                <span className="ml-6 h-[18px] w-[18px] rounded-full border border-[#919191]"></span>
                            </span>

                            {/* Logo */}
                            <img
                                src={eastLogo}
                                alt="logo"
                                className="h-[150px] w-auto max-md:h-[100px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        // <section className="overflow-hidden bg-background py-8 md:py-12">
        //     <div className="animate-marquee flex items-center whitespace-nowrap">
        //         {[...Array(4)].map((_, i) => (
        //             <div key={i} className="mx-4 flex items-center md:mx-8">
        //                 <span
        //                     className="text-4xl font-bold tracking-wider text-muted/60 md:text-7xl"
        //                     style={{
        //                         WebkitTextStroke: '1px hsl(0 0% 85%)',
        //                         color: 'transparent',
        //                     }}
        //                 >
        //                     TRUST
        //                 </span>
        //                 <span className="mx-2 text-muted-foreground/30 md:mx-4">
        //                     ••
        //                 </span>
        //                 <img
        //                     src={eastLogo}
        //                     alt="EAST"
        //                     className="mx-2 h-12 w-12 object-contain md:mx-4 md:h-20 md:w-20"
        //                 />
        //                 <span className="mx-2 text-muted-foreground/30 md:mx-4">
        //                     ••
        //                 </span>
        //                 <span
        //                     className="text-4xl font-bold tracking-wider md:text-7xl"
        //                     style={{
        //                         WebkitTextStroke: '1px hsl(0 0% 85%)',
        //                         color: 'transparent',
        //                     }}
        //                 >
        //                     EAST AFRICAN SPONSORSHIP
        //                 </span>
        //             </div>
        //         ))}
        //     </div>
        // </section>
    );
};

export default MarqueeSection;

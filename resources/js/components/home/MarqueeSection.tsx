import React from 'react';
import eastLogo from '@/assets/east-logo.png';

const items = [
    { type: 'text', value: 'EAST AFRICAN SPONSORSHIP TRUST' },
    { type: 'logo', value: `${eastLogo}` },
];

const MarqueeSection = ({ speed = 35, reverse = false }) => {
    const content = [...items, ...items, ...items];

    return (
        <section id="sitename" className="overflow-hidden py-2 md:py-10">
            <div className="group relative w-full overflow-hidden">
                <div
                    className={`marquee-track flex w-max items-center gap-10 ${
                        reverse ? 'marquee-reverse' : ''
                    }`}
                    style={{ animationDuration: `${speed}s` }}
                >
                    {/* duplicate content for seamless loop */}
                    {[...content, ...content].map((item, index) => (
                        <div key={index} className="flex items-center gap-10">
                            {item.type === 'text' && (
                                // <span className="text-[150px] leading-45 font-semibold tracking-[-0.03em] whitespace-nowrap text-white/0 [text-shadow:1px_0_0_#919191,0_1px_0_#919191,-1px_0_0_#919191,0_-1px_0_#919191] max-[430px]:text-[70px] max-lg:text-[120px] max-md:text-[100px]">
                                //     {item.value}
                                // </span>
                                <span className="text-[150px] leading-45 font-semibold tracking-[-0.03em] whitespace-nowrap text-transparent [-webkit-text-stroke:1px_#919191] max-[430px]:text-[70px] max-lg:text-[120px] max-md:text-[100px]">
                                    {item.value}
                                </span>
                            )}

                            {item.type === 'logo' && (
                                <img
                                    src={item.value}
                                    alt="logo"
                                    className="h-37.5 w-auto max-md:h-25"
                                />
                            )}

                            {/* Divider */}
                            <div className="flex gap-6">
                                <span className="h-4.5 w-4.5 rounded-full border border-[#919191]"></span>
                                <span className="h-4.5 w-4.5 rounded-full border border-[#919191]"></span>
                            </div>
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

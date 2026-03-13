import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import trustee1 from '@/assets/trustee1.jpg';
import trustee2 from '@/assets/trustee2.jpg';
import trustee3 from '@/assets/trustee3.jpg';
import trustee4 from '@/assets/trustee4.jpg';
import trustee5 from '@/assets/trustee5.jpg';
import trustee6 from '@/assets/trustee6.jpg';

const trustees = [
    {
        name: 'Alison Rogers',
        role: 'Trustee',
        img: `${trustee1}`,
    },
    {
        name: 'Jonathan Pennington-Ridge',
        role: 'Trustee',
        img: `${trustee2}`,
    },
    {
        name: 'Wendy Pennington-Ridge',
        role: 'Trustee',
        img: `${trustee3}`,
    },
    {
        name: 'Minesh Patel',
        role: 'Trustee',
        img: `${trustee4}`,
    },
    {
        name: 'Patricia Ridley',
        role: 'Trustee',
        img: `${trustee5}`,
    },
    {
        name: 'Simon Rowe',
        role: 'Trustee',
        img: `${trustee6}`,
    },
];

const TrusteesSection = () => {
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto">
                <div className="mb-8 text-center md:mb-12">
                    <h2 className="text-2xl font-bold tracking-wide text-primary-foreground md:text-3xl">
                        OUR TRUSTEES
                    </h2>
                    <div className="mx-auto mt-3 h-1 w-12 bg-green-800" />
                </div>
                <div className="">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        spaceBetween={24}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        className=""
                    >
                        {trustees.map((trustee, i) => (
                            <SwiperSlide key={i}>
                                <div className="flex justify-center">
                                    <div className="w-56 sm:w-48 md:w-72">
                                        <img
                                            src={trustee.img}
                                            alt={`Trustee ${i + 1}`}
                                            className="h-56 w-full object-cover sm:h-48 md:h-72"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
        // <section
        //     id="trustees"
        //     className="trustees section flex flex-col items-center py-16"
        // >
        //     {/* Section Title */}
        //     <div className="container mb-12" data-aos="fade-up">
        //         <h2 className="text-center text-4xl font-bold">Our Trustees</h2>
        //     </div>

        //     {/* Slider */}
        //     <div
        //         className="container w-full"
        //         data-aos="fade-up"
        //         data-aos-delay="100"
        //     >
        //         <div className="swiper init-swiper">
        //             <div className="swiper-wrapper flex">
        //                 {trustees.map((trustee, index) => (
        //                     <div
        //                         key={index}
        //                         className="swiper-slide w-full flex-shrink-0 px-3 md:w-1/2 lg:w-1/3 xl:w-1/4"
        //                     >
        //                         <a href="#">
        //                             <div className="trustee-item group relative h-full overflow-hidden rounded-lg bg-slate-50 shadow-lg">
        //                                 <img
        //                                     src={trustee.img}
        //                                     alt={trustee.name}
        //                                     className="h-full w-full object-cover"
        //                                 />

        //                                 {/* Overlay */}
        //                                 <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-800/80 via-gray-800/20 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        //                                     <div className="trustee-info text-white">
        //                                         <h2 className="text-xl font-bold">
        //                                             {trustee.name}
        //                                         </h2>
        //                                         <p className="text-lg opacity-70">
        //                                             {trustee.role}
        //                                         </p>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </a>
        //                     </div>
        //                 ))}
        //             </div>

        //             {/* Pagination */}
        //             <div className="swiper-pagination mt-5"></div>
        //         </div>
        //     </div>
        // </section>
    );
};

export default TrusteesSection;

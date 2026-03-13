import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    EffectCoverflow,
    Pagination,
    Navigation,
    Autoplay,
} from 'swiper/modules';

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
        <section className="overflow-hidden bg-gray-200 py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="mb-8 text-center md:mb-12">
                    <h2 className="text-2xl font-bold tracking-wide text-primary-foreground md:text-3xl">
                        OUR TRUSTEES
                    </h2>
                    <div className="mx-auto mt-3 h-1 w-12 bg-green-800" />
                </div>
                <style>{`
          .featured-carousel .swiper-slide {
            transition: transform 0.8s ease, opacity 0.8s ease;
            opacity: 0.5;
            transform: scale(0.75) perspective(1200px) rotateY(0deg);
          }
          .featured-carousel .swiper-slide-active {
            opacity: 1;
            transform: scale(1) perspective(1200px) rotateY(0deg);
            z-index: 10;
          }
          .featured-carousel .swiper-slide-prev {
            opacity: 0.7;
            transform: scale(0.8) perspective(1200px) rotateY(8deg) translateX(5%);
          }
          .featured-carousel .swiper-slide-next {
            opacity: 0.7;
            transform: scale(0.8) perspective(1200px) rotateY(-8deg) translateX(-5%);
          }
          .featured-carousel .swiper-pagination-bullet {
            background: hsl(0 0% 100% / 0.5);
            opacity: 1;
          }
          .featured-carousel .swiper-pagination-bullet-active {
            background: hsl(0 0% 100%);
          }
          .featured-carousel .swiper-button-prev,
          .featured-carousel .swiper-button-next {
            color: hsl(0 0% 100% / 0.7);
          }
          .featured-carousel .swiper-button-prev:hover,
          .featured-carousel .swiper-button-next:hover {
            color: hsl(0 0% 100%);
          }
        `}</style>
                <Swiper
                    modules={[
                        EffectCoverflow,
                        Pagination,
                        Navigation,
                        Autoplay,
                    ]}
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    loop
                    slidesPerView="auto"
                    speed={800}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 80,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    // navigation
                    className="featured-carousel pb-14"
                >
                    {trustees.map((trustee, i) => (
                        <SwiperSlide
                            key={i}
                            style={{ width: 'min(700px, 80vw)' }}
                        >
                            <div className="group relative aspect-16/10 overflow-hidden rounded-2xl">
                                <img
                                    src={trustee.img}
                                    alt={trustee.name}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                                {/* Overlay */}
                                <div className="invisible absolute inset-0 flex items-end bg-linear-to-t from-gray-700 via-gray-600/40 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 max-md:visible max-md:opacity-100 md:invisible md:opacity-0">
                                    <div>
                                        <h2 className="text-xl font-bold text-white">
                                            {trustee.name}
                                        </h2>

                                        <p className="text-lg text-white/70">
                                            {trustee.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TrusteesSection;

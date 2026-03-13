import React from 'react';
import trustee1 from '@/assets/trustee1.jpg';
import trustee2 from '@/assets/trustee2.jpg';
import trustee3 from '@/assets/trustee3.jpg';
import trustee4 from '@/assets/trustee4.jpg';
import trustee5 from '@/assets/trustee5.jpg';
import trustee6 from '@/assets/trustee6.jpg';

const trustees = [trustee1, trustee2, trustee3, trustee4, trustee5, trustee6];

const TrusteesSection = () => {
    return (
        <section className="px-6 py-12 md:px-12 md:py-20">
            <div className="mb-8 text-center md:mb-12">
                <h2 className="text-2xl font-bold tracking-wide text-foreground md:text-3xl">
                    OUR TRUSTEES
                </h2>
                <div className="mx-auto mt-3 h-1 w-12 bg-primary" />
            </div>
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 sm:flex-row md:gap-8">
                {trustees.map((img, i) => (
                    <div key={i} className="w-56 sm:w-48 md:w-72">
                        <img
                            src={img}
                            alt={`Trustee ${i + 1}`}
                            className="h-56 w-full object-cover sm:h-48 md:h-72"
                        />
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary" />
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="h-3 w-3 rounded-full bg-muted-foreground/30"
                    />
                ))}
            </div>
        </section>
    );
};

export default TrusteesSection;

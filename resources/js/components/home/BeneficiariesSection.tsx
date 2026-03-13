import React from 'react';
import { Users, Sparkles, Radio } from 'lucide-react';
import b1 from '@/assets/b1.jpg';
import b2 from '@/assets/b2.jpg';
import b3 from '@/assets/b3.jpg';
import b4 from '@/assets/b4.jpg';

const BeneficiariesSection = () => {
    return (
        <section id="beneficiaries" className="relative py-20">
            {/* Section Title */}
            <div className="container mx-auto mb-12 px-6 text-center">
                <h3 className="text-lg font-semibold text-primary-foreground/70">
                    Recipients
                </h3>
                <h2 className="mt-2 text-2xl font-bold text-primary-foreground md:text-4xl">
                    Our Beneficiaries
                </h2>
            </div>

            <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2">
                {/* Left Content */}
                <div
                    className="flex flex-col justify-center space-y-6 lg:order-1"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h3 className="text-2xl font-bold text-primary-foreground">
                        Meet the Future You’re Helping to Build.
                    </h3>

                    <p className="text-primary-foreground/70">
                        Every scholarship has a face, a story, and a dream. Here
                        are just a few of the brilliant minds you’ve empowered.
                    </p>

                    <ul className="space-y-3 text-primary-foreground/70 md:space-y-6">
                        <li className="flex gap-4">
                            <div>
                                <h5 className="text-lg font-semibold">
                                    Diverse Fields of Study
                                </h5>
                                <p className="">
                                    Supporting future doctors, engineers,
                                    teachers, and entrepreneurs.
                                </p>
                            </div>
                        </li>

                        <li className="flex gap-4">
                            <div>
                                <h5 className="text-lg font-semibold">
                                    Proven Success
                                </h5>
                                <p className="">
                                    90% graduation rate among scholarship
                                    recipients.
                                </p>
                            </div>
                        </li>

                        <li className="flex gap-4">
                            <div>
                                <h5 className="text-lg font-semibold">
                                    Sustainable Impact
                                </h5>
                                <p className="">
                                    Many alumni return to uplift their hometowns
                                    through skills and investments.
                                </p>
                            </div>
                        </li>
                    </ul>

                    <div>
                        <button className="mb-4 rounded-full bg-green-800 px-8 py-3 font-medium text-foreground hover:opacity-90 md:mb-0">
                            See More
                        </button>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="lg:order-0">
                    <div className="relative grid aspect-square w-full shrink-0 grid-cols-2">
                        {/* 1st beneficiary */}
                        <div className="relative">
                            <div className="absolute -bottom-2 left-0 z-1 w-full rotate-4 shadow-xl">
                                <div className="bg-white p-2">
                                    <img
                                        src={b1}
                                        alt=""
                                        className="h-auto w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* 2nd beneficiary */}
                        <div className="relative">
                            <div className="absolute right-3 bottom-0 z-2 w-full -rotate-3 shadow-xl">
                                <div className="bg-white p-2">
                                    <img
                                        src={b2}
                                        alt=""
                                        className="h-auto w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* 3rd beneficiary */}
                        <div className="relative">
                            <div className="absolute top-0 left-0 z-3 w-full -rotate-4 shadow-xl">
                                <div className="bg-white p-2">
                                    <img
                                        src={b3}
                                        alt=""
                                        className="-auto w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* 4th beneficiary */}
                        <div className="relative">
                            <div className="absolute -top-5 right-0 z-3 w-full rotate-4 shadow-xl">
                                <div className="bg-white p-2">
                                    <img
                                        src={b4}
                                        alt=""
                                        className="-auto w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeneficiariesSection;

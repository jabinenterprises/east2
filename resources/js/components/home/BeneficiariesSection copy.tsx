import React from 'react';
import { Users, Sparkles, Radio } from 'lucide-react';
import b1 from '@/assets/b1.jpg';
import b2 from '@/assets/b2.jpg';
import b3 from '@/assets/b3.jpg';
import b4 from '@/assets/b4.jpg';

const BeneficiariesSection = () => {
    return (
        <section className="px-6 py-12 md:px-12 md:py-20">
            <div className="mb-8 text-center md:mb-12">
                <p className="mb-1 text-lg text-muted-foreground">Recipients</p>
                <h2 className="text-2xl font-bold tracking-wide text-foreground md:text-3xl">
                    OUR BENEFICIARIES
                </h2>
                <div className="mx-auto mt-3 h-1 w-12 bg-primary" />
            </div>
            <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 md:flex-row md:gap-12">
                <div className="mx-auto grid flex-shrink-0 grid-cols-2 gap-3 md:mx-0 md:gap-4">
                    <img
                        src={b1}
                        alt="Beneficiary 1"
                        className="h-36 w-36 object-cover md:h-48 md:w-48"
                    />
                    <img
                        src={b2}
                        alt="Beneficiary 2"
                        className="h-36 w-36 object-cover md:h-48 md:w-48"
                    />
                    <img
                        src={b3}
                        alt="Beneficiary 3"
                        className="h-36 w-36 object-cover md:h-48 md:w-48"
                    />
                    <img
                        src={b4}
                        alt="Beneficiary 4"
                        className="h-36 w-36 object-cover md:h-48 md:w-48"
                    />
                </div>
                <div className="flex-1">
                    <h3 className="mb-3 text-xl font-bold text-foreground md:text-2xl">
                        Meet the Future You're Helping to Build.
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                        Every scholarship has a face, a story, and a dream. Here
                        are just a few of the brilliant minds you've empowered.
                    </p>
                    <ul className="mb-8 space-y-4">
                        <li className="flex items-start gap-3">
                            <Users className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <div>
                                <h4 className="font-bold text-foreground">
                                    Diverse Fields of Study
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    Supporting future doctors, engineers,
                                    teachers, and entrepreneurs.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Sparkles className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <div>
                                <h4 className="font-bold text-foreground">
                                    Proven Success
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    90% graduation rate among scholarship
                                    recipients.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <Radio className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <div>
                                <h4 className="font-bold text-foreground">
                                    Sustainable Impact
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    Many alumni return to uplift their hometowns
                                    through skills and investments.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <button className="rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground hover:opacity-90">
                        See More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BeneficiariesSection;

import React from 'react';
import { Users, GitFork, Radio } from 'lucide-react';
import aboutImg1 from '@/assets/about1.jpg';
import aboutImg2 from '@/assets/about2.jpg';
import sideImg from '@/assets/SideImg.png';

const AboutSection = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-6">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Image */}
                    {/* <div
                        className="relative"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <img
                            src={sideImg}
                            alt=""
                            className="h-auto w-full object-cover"
                        />
                    </div> */}
                    <div className="relative">
                        <div className="absolute"></div>
                        <div className="z-2 max-w-full self-start">
                            <div className="rotate-z-[1.047] border-10 border-white">
                                <img
                                    src={aboutImg1}
                                    alt=""
                                    // className="blur-[0] brightness-100 contrast-100 hue-rotate-0 saturate-0"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div
                        className="flex flex-col justify-center lg:pl-6"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h3 className="text-3xl font-bold text-primary-foreground">
                            Why We Do What We Do
                        </h3>

                        <p className="mt-3 text-gray-600">
                            We believe every talented student deserves a chance
                            to succeed— regardless of financial limitations.
                        </p>

                        {/* Feature List */}
                        <ul className="mt-8 space-y-4 text-primary-foreground/70 md:space-y-10">
                            <li className="flex items-start">
                                {/* <i className="bi bi-diagram-3 mr-5 shrink-0 text-5xl text-green-700"></i> */}
                                <div>
                                    <h5 className="text-lg font-bold">
                                        Holistic Support
                                    </h5>
                                    <p className="text-sm">
                                        Beyond tuition, we offer mentorship and
                                        career guidance.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start">
                                {/* <i className="bi bi-fullscreen-exit mr-5 shrink-0 text-5xl text-green-700"></i> */}
                                <div>
                                    <h5 className="text-lg font-bold">
                                        How We Work
                                    </h5>
                                    <p className="text-sm">
                                        Rigorous selection ensures funds reach
                                        the most deserving candidates.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start">
                                {/* <i className="bi bi-broadcast mr-5 shrink-0 text-5xl text-green-700"></i> */}
                                <div>
                                    <h5 className="text-lg font-bold">
                                        Empowering Futures
                                    </h5>
                                    <p className="text-sm">
                                        We provide scholarships to
                                        high-potential students facing financial
                                        hardships.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        {/* CTA */}
                        <div className="mt-6">
                            <a
                                href="#"
                                className="inline-block rounded-full bg-green-700 px-8 py-3 text-white transition hover:bg-green-800"
                            >
                                Our Mission
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

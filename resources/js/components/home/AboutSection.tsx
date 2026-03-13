import React from 'react';
import { Users, GitFork, Radio } from 'lucide-react';
import aboutImg1 from '@/assets/about1.jpg';
import aboutImg2 from '@/assets/about2.jpg';
import sideImg from '@/assets/SideImg.png';
import watercolorBg from '@/assets/watercolor.png';

const SharingIcon = () => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="24"
            cy="24"
            r="23"
            stroke="#d4a843"
            strokeWidth="2"
            fill="none"
        />
        <path
            d="M24 14c-3 0-6 2.5-6 6 0 4.5 6 10 6 10s6-5.5 6-10c0-3.5-3-6-6-6z"
            stroke="#d4a843"
            strokeWidth="1.5"
            fill="none"
        />
        <path
            d="M24 28c-3 0-6 2.5-6 6 0 4.5 6 10 6 10s6-5.5 6-10c0-3.5-3-6-6-6z"
            stroke="#d4a843"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
        />
        <circle cx="18" cy="36" r="2" fill="#d4a843" />
        <circle cx="30" cy="36" r="2" fill="#d4a843" />
        <circle cx="24" cy="38" r="2" fill="#d4a843" />
    </svg>
);

const CommunityIcon = () => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle
            cx="24"
            cy="24"
            r="23"
            stroke="#5a9a3c"
            strokeWidth="2"
            fill="none"
        />
        <path
            d="M16 28c0-4.4 3.6-8 8-8s8 3.6 8 8"
            stroke="#5a9a3c"
            strokeWidth="1.5"
            fill="none"
        />
        <path
            d="M20 24c0-2.2 1.8-4 4-4s4 1.8 4 4"
            stroke="#5a9a3c"
            strokeWidth="1.5"
            fill="none"
        />
        <circle
            cx="24"
            cy="18"
            r="3"
            stroke="#5a9a3c"
            strokeWidth="1.5"
            fill="none"
        />
        <path d="M14 34h20" stroke="#5a9a3c" strokeWidth="1.5" />
    </svg>
);

const ResponsibilitiesIcon = () => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M24 16c-3.5 0-7 3-7 7 0 5.5 7 11 7 11s7-5.5 7-11c0-4-3.5-7-7-7z"
            stroke="#c44e3a"
            strokeWidth="1.5"
            fill="none"
        />
        <path
            d="M18 32c-2 1-4 2-4 4h20c0-2-2-3-4-4"
            stroke="#c44e3a"
            strokeWidth="1.5"
            fill="none"
        />
        <path d="M20 36h8" stroke="#c44e3a" strokeWidth="1.5" />
    </svg>
);

const AboutSection = () => {
    return (
        <section
            className="relative overflow-hidden px-6 py-16 md:px-12 md:py-24 lg:py-32"
            //   style={{
            //     backgroundImage: `url(${watercolorBg})`,
            //     backgroundSize: "cover",
            //     backgroundPosition: "center",
            //   }}
        >
            <div className="container mx-auto">
                {/* Badge */}
                <div className="mb-6 flex justify-center">
                    <span className="rounded bg-[#4a7c3a] px-4 py-1.5 text-xs font-semibold tracking-widest text-white uppercase">
                        WHO WE ARE
                    </span>
                </div>

                {/* Main Heading */}
                <h2 className="mb-12 text-center font-serif text-3xl leading-tight font-bold tracking-wide text-[#1a2332] uppercase sm:text-4xl md:mb-20 md:text-5xl lg:text-5xl">
                    Why We Do What We Do
                </h2>

                {/* Two Column Layout */}
                <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-16">
                    {/* Left - Overlapping Photos */}
                    <div
                        className="relative h-87.5 w-full shrink-0 sm:h-105 md:h-120 lg:w-[45%]"
                        // style={{
                        //     backgroundImage: `url(${watercolorBg})`,
                        //     backgroundSize: 'cover',
                        //     backgroundPosition: 'center',
                        // }}
                    >
                        {/* water color bg */}
                        <div className="absolute -top-[10%] -left-[10%] z-1 mb-0 h-[120%] w-[120%] min-w-full bg-center">
                            <div className="h-full scale-[1.03864] transform transition-all duration-1200 ease-out">
                                <img
                                    src={watercolorBg}
                                    className="inline-block h-full w-full rounded-none border-none align-middle shadow-none"
                                    alt=""
                                />
                            </div>
                        </div>
                        {/* Photo 1 - B&W, rotated slightly left */}
                        <div className="absolute top-0 left-0 z-10 w-[55%] -rotate-3 shadow-xl sm:left-4 sm:w-[52%]">
                            <div className="rounded bg-white p-2">
                                <img
                                    src={aboutImg1}
                                    alt="Caring moment"
                                    className="h-60 w-full object-cover sm:h-75 md:h-90"
                                />
                            </div>
                        </div>
                        {/* Photo 2 - Color, overlapping, rotated slightly right */}
                        <div className="absolute bottom-0 left-[30%] z-20 w-[60%] rotate-2 shadow-xl sm:left-[35%] sm:w-[55%]">
                            <div className="rounded bg-white p-2">
                                <img
                                    src={aboutImg2}
                                    alt="Volunteers serving food"
                                    className="h-50 w-full object-cover sm:h-60 md:h-70"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right - Text Content */}
                    <div className="flex-1">
                        <div
                            className="flex flex-col justify-center lg:pl-6"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {/* <h3 className="text-3xl font-bold text-primary-foreground">
                                Why We Do What We Do
                            </h3> */}

                            <p className="text-gray-600">
                                We believe every talented student deserves a
                                chance to succeed— regardless of financial
                                limitations.
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
                                            Beyond tuition, we offer mentorship
                                            and career guidance.
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
                                            Rigorous selection ensures funds
                                            reach the most deserving candidates.
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
                                            high-potential students facing
                                            financial hardships.
                                        </p>
                                    </div>
                                </li>
                            </ul>

                            {/* CTA */}
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="inline-block rounded-full bg-green-800 px-8 py-3 text-white transition hover:bg-green-800"
                                >
                                    Our Mission
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

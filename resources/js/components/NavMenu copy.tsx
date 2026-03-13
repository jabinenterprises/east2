import React from 'react';
import eastDarkLogo from '@/assets/east-dark.png';
import eastLightLogo from '@/assets/east-light.png';

const NavMenu = () => {
    return (
        <header className="fixed top-0 left-0 z-[997] w-full border-b border-white/10 bg-transparent py-[5px] transition-all duration-300">
            <div className="relative container mx-auto flex items-center px-4 xl:max-w-screen-xl">
                {/* Logo */}
                <a href="/" className="mr-auto flex items-center leading-none">
                    <img
                        src={eastLightLogo}
                        alt="Light Logo"
                        className="max-h-[70px] transition-all duration-300"
                    />
                    <img
                        src={eastDarkLogo}
                        alt="Dark Logo"
                        className="hidden max-h-[70px] transition-all duration-300"
                    />
                </a>

                {/* Navigation */}
                <nav className="hidden xl:block">
                    <ul className="flex items-center space-x-5">
                        <li>
                            <a
                                href="/"
                                className="relative text-[15px] font-normal transition-colors duration-300 hover:text-green-600"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="/aims-mission"
                                className="text-[15px] font-normal transition-colors duration-300 hover:text-green-600"
                            >
                                Aims and Missions
                            </a>
                        </li>

                        {/* Dropdown */}
                        <li className="group relative">
                            <button className="flex items-center text-[15px] font-normal transition-colors duration-300 group-hover:text-green-600">
                                Sponsored Students
                                <span className="ml-1 text-xs">⌄</span>
                            </button>

                            <ul className="absolute top-full left-0 mt-3 hidden min-w-[200px] bg-white py-2 shadow-xl group-hover:block">
                                <li>
                                    <a
                                        href="#"
                                        className="block px-5 py-2 text-[15px] hover:text-green-600"
                                    >
                                        Current Recipients
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block px-5 py-2 text-[15px] hover:text-green-600"
                                    >
                                        Former Recipients
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a
                                href="/application"
                                className="text-[15px] hover:text-green-600"
                            >
                                Apply
                            </a>
                        </li>
                        <li>
                            <a
                                href="/volunteer"
                                className="text-[15px] hover:text-green-600"
                            >
                                Volunteer
                            </a>
                        </li>
                        <li>
                            <a
                                href="/trustees"
                                className="text-[15px] hover:text-green-600"
                            >
                                Trustees
                            </a>
                        </li>
                        <li>
                            <a
                                href="/faqs"
                                className="text-[15px] hover:text-green-600"
                            >
                                FAQs
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact-us"
                                className="text-[15px] hover:text-green-600"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Action Buttons */}
                <div className="ml-5 flex items-center gap-2 xl:ml-5">
                    <a
                        href="#"
                        className="hidden rounded-[10px] border px-5 py-2 text-[15px] font-normal tracking-[1px] transition duration-300 xl:inline-block"
                    >
                        Login
                    </a>

                    <a
                        href="#"
                        className="rounded-[10px] bg-green-600 px-5 py-2 text-[15px] font-normal tracking-[1px] text-white transition duration-300 hover:bg-green-700"
                    >
                        Donate
                    </a>
                </div>
            </div>
        </header>
    );
};

export default NavMenu;

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import eastDarkLogo from '@/assets/east-dark.png';
import eastLightLogo from '@/assets/east-light.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 80) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    // }, []);

    return (
        <nav
            className={`fixed top-0 left-0 z-50 container flex min-w-full items-center justify-between ${scrolled ? 'bg-[#e7e56a]' : 'bg-[#000000]/0'} px-4 py-3 ${menuOpen ? 'bg-[#e7e56a]' : ''} transition-colors duration-300 ease-in-out md:px-12`}
        >
            <div className="flex items-center">
                <img
                    src={scrolled || menuOpen ? eastDarkLogo : eastLightLogo}
                    alt="EAST Logo"
                    className="h-14 w-14 object-contain md:h-14 md:w-14"
                />
            </div>

            {/* Desktop nav */}
            <div
                className={`hidden items-center gap-6 ${scrolled ? 'text-[#212529]/70' : 'text-[#d7d7d7]'} lg:flex`}
            >
                <a
                    href="#"
                    className="relative text-sm font-medium after:absolute after:-bottom-2 after:left-0 after:h-0.75 after:w-full after:bg-green-800"
                >
                    Home
                </a>
                <a href="#" className="text-sm font-medium hover:opacity-80">
                    Aims and Missions
                </a>
                {/* <a
                    href="#"
                    className="flex items-center gap-1 text-sm font-medium hover:opacity-80"
                >
                    Sponsored Students <ChevronDown className="h-4 w-4" />
                </a> */}

                {/* --------------------------------------------------------------------------- */}
                {/* DROPDOWN */}
                <div className="group relative px-2.5">
                    <a href="#" className="nav-link flex items-center">
                        Sponsored Students
                        <ChevronDown size={14} />
                    </a>

                    {/* Dropdown menu */}
                    <ul className="absolute top-full left-0 hidden shadow-[0px_0px_30px_rgba(0,0,0,0.1)] group-hover:block">
                        <li className="dropdown-item">
                            <a href="#">Current Recipients</a>
                        </li>

                        <li className="dropdown-item">
                            <a href="#">Former Recipients</a>
                        </li>
                    </ul>
                </div>
                {/* --------------------------------------------------------------------------- */}

                {/* Dropdown */}
                {/* <div
                    className="group relative text-sm"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <button className="flex items-center gap-1 hover:text-green-600">
                        Sponsored Students
                        <ChevronDown size={14} />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute left-0 mt-3 w-50 overflow-hidden rounded-md bg-white shadow-lg">
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Current Recipients
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Former Recipients
                            </a>
                        </div>
                    )}
                </div> */}
                <a href="#" className="text-sm font-medium hover:opacity-80">
                    Apply
                </a>
                <a href="#" className="text-sm font-medium hover:opacity-80">
                    Volunteer
                </a>
                <a href="#" className="text-sm font-medium hover:opacity-80">
                    Trustees
                </a>
                <a href="#" className="text-sm font-medium hover:opacity-80">
                    FAQs
                </a>
                <a href="#" className="text-sm font-medium hover:opacity-80">
                    Contact
                </a>
            </div>

            {/* Desktop buttons */}
            <div className="hidden items-center gap-3 lg:flex">
                <button
                    className={`rounded-full border ${scrolled ? 'border-[#212529] text-[#212529]' : 'border-foreground text-foreground'} px-6 py-2 text-sm font-medium hover:bg-foreground/5`}
                >
                    Login
                </button>
                <button className="rounded-full bg-[#00714b] px-6 py-2 text-sm font-medium text-foreground hover:opacity-90">
                    Donate
                </button>
            </div>

            <div className="flex items-center justify-center gap-4 lg:hidden">
                <div className="">
                    <button className="rounded-full bg-[#00714b] px-4 py-1.5 text-sm font-medium text-foreground">
                        Donate
                    </button>
                </div>
                {/* Mobile hamburger */}
                <button
                    className={`${scrolled || menuOpen ? 'text-[#212529]' : 'text-foreground'} lg:hidden`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className={`h-6 w-6 ${scrolled ? '' : ''}`} />
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    className={`absolute top-full right-0 left-0 z-50 flex flex-col gap-3 border-t border-foreground/10 bg-[#e7e56a] p-4 text-[#212529]/70 lg:hidden`}
                >
                    <a href="#" className="py-2 text-sm font-medium">
                        Home
                    </a>
                    <a href="#" className="py-2 text-sm font-medium">
                        Aims and Missions
                    </a>
                    {/* <a
                        href="#"
                        className="flex items-center gap-1 py-2 text-sm font-medium"
                    >
                        Sponsored Students <ChevronDown className="h-4 w-4" />
                    </a> */}
                    {/* Mobile Dropdown */}
                    <div>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex w-full justify-between text-sm text-gray-700"
                        >
                            Sponsored Students
                            <div className="flex h-6 w-6 items-center justify-center rounded-[50%] bg-green-800 text-white">
                                {dropdownOpen ? (
                                    <ChevronUp size={16} />
                                ) : (
                                    <ChevronDown size={16} />
                                )}
                            </div>
                        </button>

                        {dropdownOpen && (
                            <div className="mt-2 ml-4 space-y-2 rounded-md bg-[#eeec91] px-4 py-2">
                                <a href="#" className="block text-gray-600">
                                    Current Recipients
                                </a>
                                <a href="#" className="block text-gray-600">
                                    Former Recipients
                                </a>
                            </div>
                        )}
                    </div>
                    <a href="#" className="py-2 text-sm font-medium">
                        Apply
                    </a>
                    <a href="#" className="py-2 text-sm font-medium">
                        Volunteer
                    </a>
                    <a href="#" className="py-2 text-sm font-medium">
                        Trustees
                    </a>
                    <a href="#" className="py-2 text-sm font-medium">
                        FAQs
                    </a>
                    <a href="#" className="py-2 text-sm font-medium">
                        Contact
                    </a>
                    <div className="flex w-full items-center justify-center gap-3 py-1">
                        <button className="w-full rounded-full border border-[#212529] px-6 py-2 text-sm font-medium text-[#212529]">
                            Login
                        </button>
                        {/* <button className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground">
                            Donate
                        </button> */}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

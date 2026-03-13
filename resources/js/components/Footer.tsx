import React from 'react';
import ContinentsMap from './ContinentsMap';

const Footer: React.FC = () => {
    return (
        <footer
            id="footer"
            className="relative bg-[#d9d9d9] text-[14px] text-black"
        >
            {/* Background Map */}
            <div className="absolute inset-0 z-0 hidden items-center justify-end text-[color-mix(in_srgb,var(--shade-dark),transparent_95%)] md:flex [&_path]:fill-current [&_path]:stroke-[color-mix(in_srgb,var(--shade-dark),transparent_97%)]">
                {/* Replace with your SVG component */}
                <ContinentsMap />
            </div>

            {/* Footer Top */}
            <div className="relative container border-none pt-12">
                <div className="mx-auto px-4">
                    <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-12">
                        {/* About */}
                        <div className="md:col-span-1 lg:col-span-4">
                            <a
                                href="/"
                                className="mb-6.5 flex items-center leading-none"
                            >
                                <span
                                    className="text-[26px] font-bold tracking-[1px]"
                                    style={{
                                        // color: 'var(--heading-color)',
                                        fontFamily: 'Sora',
                                    }}
                                >
                                    EAST
                                </span>
                            </a>

                            <div
                                className="text-[14px]"
                                style={{ fontFamily: 'Poppins' }}
                            >
                                Since 2019, we’ve transformed ‘impossible
                                dreams’ into degrees by removing financial
                                barriers - but our work goes beyond tuition. We
                                went from a single scholarship to becoming a
                                movement. Redefining "merit" in education
                                access.
                            </div>

                            {/* Social Links */}
                            <div className="mt-4 flex">
                                {[
                                    'x-twitter',
                                    'facebook',
                                    'instagram',
                                    'tiktok',
                                ].map((icon) => (
                                    <a
                                        key={icon}
                                        href="#"
                                        className="mr-2 flex h-10 w-10 items-center justify-center text-[24px] transition-colors"
                                        style={{
                                            color: 'color-mix(in srgb, var(--default-color), transparent 30%)',
                                        }}
                                    >
                                        <i className={`fa-brands fa-${icon}`} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="container mb-7 md:col-span-1 lg:col-span-2">
                            <h4 className="pb-3 text-[16px] font-bold">
                                Contact Info
                            </h4>

                            <div className="space-y-1 pt-3">
                                <p>Braeburn School</p>
                                <p>Arusha</p>

                                <p className="mt-3">
                                    <strong>Phone:</strong>{' '}
                                    <span>+255 712 345 678</span>
                                </p>

                                <p>
                                    <strong>Email:</strong>{' '}
                                    <span>east@braeburn.sc.tz</span>
                                </p>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="mb-[30px] md:col-span-1 lg:col-span-2">
                            <h4 className="pb-[12px] text-[16px] font-bold">
                                Quick Links
                            </h4>

                            <ul className="m-0 list-none p-0">
                                {[
                                    'Home',
                                    'Aims and Mission',
                                    'Sponsored Students',
                                    'Apply',
                                    'Volunteer',
                                    'Trustees',
                                    'FAQs',
                                    'Contact Us',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center py-[10px]"
                                    >
                                        <a
                                            href="#"
                                            className="leading-none"
                                            style={{
                                                color: 'color-mix(in srgb, var(--default-color), transparent 10%)',
                                            }}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="md:col-span-2 lg:col-span-4">
                            <h4 className="pb-3 text-[16px] font-bold">
                                Our Newsletter
                            </h4>

                            <p>
                                Sign up to our newsletter and receive the latest
                                news and updates on our services and progress!
                            </p>

                            <form className="my-6">
                                <div className="relative flex rounded-lg border bg-white p-[6px_8px] transition focus-within:border-black">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full border-0 bg-transparent p-1 outline-none"
                                        style={{
                                            color: 'var(--default-color)',
                                        }}
                                    />

                                    <input
                                        type="submit"
                                        value="Subscribe"
                                        className="rounded-r-lg bg-green-800 px-5 text-[16px] text-white transition"
                                        style={{
                                            margin: '-7px -8px -7px 0',
                                            // background: 'var(--accent-color)',
                                            // color: 'var(--contrast-color)',
                                        }}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="relative bg-[#616161] py-6 text-white">
                <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center lg:flex-row lg:justify-between lg:text-left">
                    <p className="mb-3 lg:mb-0">
                        Registered UK Charity Number: 1190820
                    </p>

                    <p className="mb-3 lg:mb-0">
                        © 2025 <strong>East African Sponsorship Trust</strong>.
                        All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

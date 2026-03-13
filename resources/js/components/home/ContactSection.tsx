import React from 'react';
import contactBg from '@/assets/contact-bg.jpg';
import Bgsplash from '@/assets/watercolor-splash.png';

const ContactSection = () => {
    return (
        <section className="m-0 p-0">
            <div className="relative pb-150 text-gray-900 md:pb-120 lg:pb-80">
                {/* Background Image */}
                <div className="relative">
                    <img src={contactBg} alt="" className="h-auto w-full" />

                    <div className="absolute inset-0 bg-primary-foreground/30" />
                </div>

                <img
                    src={Bgsplash}
                    alt=""
                    className="absolute -bottom-10 z-0 hidden h-auto w-100 md:right-0 md:flex lg:right-90 xl:right-100"
                />

                <div className="absolute top-12 left-0 z-10 mx-auto w-full px-6 md:top-40 md:right-10 lg:right-10 xl:right-20">
                    <div className="flex flex-col gap-10 md:grid lg:grid-cols-2">
                        {/* Contact Form */}
                        <div className="order-1">
                            <div className="relative -mb-40 flex min-h-150 flex-col justify-start md:-mb-24">
                                <div className="border-none border-gray-900 bg-white p-6 shadow-xl">
                                    <h3 className="mb-4 text-2xl font-semibold">
                                        Contact Us
                                    </h3>

                                    <form>
                                        <div className="space-y-5">
                                            {/* Name + Email */}
                                            <div className="grid gap-4 md:grid-cols-2">
                                                <div>
                                                    <label
                                                        htmlFor="name"
                                                        className="block text-sm font-medium"
                                                    >
                                                        Name:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        placeholder="Full name"
                                                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                                                    />
                                                </div>

                                                <div>
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-sm font-medium"
                                                    >
                                                        Email:
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        placeholder="Email address"
                                                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                                                    />
                                                </div>
                                            </div>

                                            {/* Subject */}
                                            <div>
                                                <label
                                                    htmlFor="subject"
                                                    className="block text-sm font-medium"
                                                >
                                                    Subject:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    placeholder="Subject"
                                                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                                                />
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label
                                                    htmlFor="message"
                                                    className="block text-sm font-medium"
                                                >
                                                    Message:
                                                </label>
                                                <textarea
                                                    id="message"
                                                    rows={4}
                                                    placeholder="Your message"
                                                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
                                                />
                                            </div>

                                            {/* Submit Button */}
                                            <div className="w-full">
                                                <button
                                                    type="submit"
                                                    className="w-full rounded-full bg-green-800 px-8 py-3 font-medium text-foreground hover:opacity-90 md:w-auto"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Empty right side (for layout / image exposure) */}
                        <div
                            className="order-0 hidden lg:block"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

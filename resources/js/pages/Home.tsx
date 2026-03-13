import React from 'react';
import { Head } from '@inertiajs/react';

const Home = () => {
    return (
        <>
            <Head title="Home" />

            <div className="flex min-h-screen flex-col bg-gray-100">
                {/* Hero Section */}
                <section className="flex flex-grow items-center justify-center">
                    <div className="text-center">
                        <h1 className="mb-6 text-5xl font-bold text-gray-900">
                            Welcome to My Web App
                        </h1>

                        <p className="mb-8 text-lg text-gray-600">
                            This is my first Laravel + React + Tailwind page.
                        </p>

                        <button className="rounded-lg bg-blue-600 px-6 py-3 text-white shadow-md transition duration-300 hover:bg-blue-700">
                            Get Started
                        </button>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 py-4 text-center text-white">
                    © {new Date().getFullYear()} My Web App
                </footer>
            </div>
        </>
    );
};

export default Home;

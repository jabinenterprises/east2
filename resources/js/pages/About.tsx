import React from 'react';
import { Head, Link } from '@inertiajs/react';

const About = () => {
    return (
        <>
            <Head title="About" />

            <div className="flex min-h-screen items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-bold">About Us</h1>

                    <Link href="/" className="text-blue-600 hover:underline">
                        Go Back Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default About;

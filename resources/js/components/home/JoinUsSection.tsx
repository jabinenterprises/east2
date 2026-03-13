import React from 'react';
import { DollarSign, UserPlus, Heart, ChevronRight } from 'lucide-react';
import watercolorBg from '@/assets/watercolor-bg.png';

const cards = [
    {
        // icon: <DollarSign className="h-10 w-10 text-emerald-600" />,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-10 w-10 fill-green-800"
            >
                <path d="M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0 48 93.1 48 208s93.1 208 208 208zM233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4 5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3 0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1 0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1 5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3 0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34 26.4-61.5 59.1-62.4zM480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z" />
            </svg>
        ),
        title: 'Donate',
        subtitle: 'Give the Gift of Education',
        desc: 'Your one-time or recurring donation funds scholarships, books, and mentorship programs for deserving students.',
    },
    {
        // icon: <UserPlus className="h-10 w-10 text-emerald-600" />,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-10 w-10 fill-green-800"
            >
                <path d="M96 96C60.7 96 32 124.7 32 160L32 480C32 515.3 60.7 544 96 544L544 544C579.3 544 608 515.3 608 480L608 160C608 124.7 579.3 96 544 96L96 96zM176 352L240 352C284.2 352 320 387.8 320 432C320 440.8 312.8 448 304 448L112 448C103.2 448 96 440.8 96 432C96 387.8 131.8 352 176 352zM152 256C152 225.1 177.1 200 208 200C238.9 200 264 225.1 264 256C264 286.9 238.9 312 208 312C177.1 312 152 286.9 152 256zM392 208L504 208C517.3 208 528 218.7 528 232C528 245.3 517.3 256 504 256L392 256C378.7 256 368 245.3 368 232C368 218.7 378.7 208 392 208zM392 304L504 304C517.3 304 528 314.7 528 328C528 341.3 517.3 352 504 352L392 352C378.7 352 368 341.3 368 328C368 314.7 378.7 304 392 304z" />
            </svg>
        ),
        title: 'Become a Member',
        subtitle: 'Commit to Long-Term Impact',
        desc: 'Join our monthly giving community and sustain scholarships year-round. Members receive exclusive impact reports.',
    },
    {
        // icon: <Heart className="h-10 w-10 text-emerald-600" />,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="h-10 w-10 fill-green-800"
            >
                <path d="M560 128C573.2 128 580.7 143.1 572.8 153.6L544 192L544 368C544 447.5 479.5 512 400 512L288 512L241.7 558.3C231.3 568.7 215.2 570.7 202.6 563.1L105.5 504.9C88.5 494.7 90.5 469.4 108.9 462L224 416C87.8 375.1 71.5 233.8 86 159.7C89.6 141.9 109.3 135.4 125.3 144.2L384 288L384 208C384 163.8 419.8 128 464 128L560 128zM464 184C450.7 184 440 194.7 440 208C440 221.3 450.7 232 464 232C477.3 232 488 221.3 488 208C488 194.7 477.3 184 464 184zM246.5 54.4C258.9 40.7 279.8 45.5 289 61.5L345.4 159.8C339.6 174.2 336.2 189.9 336 206.3L202.1 132C212.2 100.4 229.1 73.6 246.5 54.4z" />
            </svg>
        ),
        title: 'Volunteer',
        subtitle: 'Lend Your Time & Skills',
        desc: 'Mentor students, organize fundraisers, or help with outreach—your expertise changes lives.',
    },
];

const JoinUsSection = () => {
    return (
        <section
            className="px-6 py-12 md:px-12 md:py-20"
            // style={{
            //     backgroundImage: `url(${watercolorBg})`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     backgroundRepeat: 'no-repeat',
            // }}
        >
            <div className="container mx-auto flex flex-col items-start gap-8 lg:flex-row">
                <div className="order-2 flex flex-1 flex-col gap-6 sm:flex-row lg:order-1">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="flex-1 rounded-lg bg-white/80 p-6 text-center shadow-lg"
                        >
                            <div className="mb-4 flex justify-center">
                                {card.icon}
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-gray-600">
                                {card.title}
                            </h3>
                            <p className="mb-3 text-sm text-gray-600">
                                {card.subtitle}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="order-1 w-full text-center lg:order-2 lg:w-80 lg:text-right">
                    <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
                        Join Us in Shaping the Future
                    </h2>
                    <p className="mb-6 text-sm text-primary-foreground">
                        Whether you donate, volunteer, or spread the word - your
                        action today unlocks opportunities for students in need.
                        Pick your path and start making a difference.
                    </p>
                    <button className="inline-flex items-center gap-2 rounded-full bg-green-800 px-6 py-3 font-medium text-foreground hover:opacity-90">
                        Learn More <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JoinUsSection;

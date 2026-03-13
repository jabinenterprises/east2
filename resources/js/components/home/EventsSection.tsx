import React from 'react';
import { ArrowRight } from 'lucide-react';
import eventsImg from '@/assets/events-img.jpg';

const events = [
    {
        day: '24',
        month: 'Aug 2025',
        time: 'Arusha 9.00 am - 2.30 pm',
        title: 'Miles for minds run',
    },
    {
        day: '12',
        month: 'Sept 2025',
        time: 'Arusha 7.30 pm - 9.00 pm',
        title: 'Borne fire night.',
    },
    {
        day: '30',
        month: 'Sept 2025',
        time: 'Arusha 9.00 am - 3.30 pm',
        title: 'Creativity for a cause artwork done.',
    },
];

function EventsSection() {
    return (
        <section className="px-6 py-12 md:px-12 md:py-20">
            {/* Section Title */}
            <div className="container mb-8 text-center md:mb-12">
                <p className="mb-1 text-lg text-primary-foreground/90">
                    Events
                </p>
                <h2 className="text-2xl font-bold tracking-wide text-primary-foreground md:text-3xl">
                    UPCOMING EVENTS
                </h2>
                <div className="mx-auto mt-3 h-1 w-12 bg-emerald-700" />
            </div>

            {/* Event List */}
            <div className="container mx-auto flex flex-col gap-8 lg:flex-row">
                {/* Event Image */}
                <div
                    className="event-img relative order-1 min-h-100 w-full lg:order-2 lg:w-1/2"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <img
                        src={eventsImg}
                        alt="Event Infograph"
                        className="absolute inset-0 h-full w-full rounded object-cover"
                    />
                </div>

                {/* Event List */}
                <div className="order-2 flex flex-col gap-6 lg:order-1 lg:w-1/2">
                    {events.map((e) => (
                        <article
                            key={e.title}
                            className="event-card flex flex-col overflow-hidden bg-white text-gray-900 shadow-lg md:flex-row"
                        >
                            {/* Date Box */}
                            <div className="flex flex-col items-center justify-center bg-green-800 p-4 text-gray-300 md:w-[30%]">
                                <div className="text-4xl leading-tight font-bold text-foreground">
                                    {e.day}
                                </div>
                                <div className="text-xl font-semibold">
                                    {e.month}
                                </div>
                            </div>
                            {/* Event Details */}
                            <div className="flex-1 p-6 md:w-[70%]">
                                <p className="mb-2 text-lg text-muted-foreground">
                                    {e.time}
                                </p>
                                <h3 className="truncate text-lg font-semibold text-primary-foreground md:text-xl">
                                    {e.title}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Event Image */}
                {/* <div className="w-full md:w-96">
                    <img
                        src={eventsImg}
                        alt="Events"
                        className="h-56 w-full rounded object-cover md:h-72"
                    />
                </div> */}
            </div>

            {/* Button Section */}
            <div className="container mt-8">
                <a
                    href=""
                    className="flex items-center gap-2 leading-none font-semibold text-gray-700/80 transition-colors duration-300 group-hover:text-accent"
                >
                    <span>More Events</span>
                    <ArrowRight className="h-4 w-4" />
                </a>
            </div>
        </section>
    );
}

export default EventsSection;

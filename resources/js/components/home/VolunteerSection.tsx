import React from 'react';
import volunteerImg from '@/assets/vonlunteer-img.png';
import BgPict from '@/assets/bg_picture.jpg';
import BgPictMbl from '@/assets/bg_picture_mbl.jpg';
import BlueWatercolorBg from '@/assets/blue_watercolor.png';

const VolunteerSection = () => {
    return (
        <section
            className="relative bg-[url('@/assets/bg_picture_mbl.jpg')] bg-cover bg-center bg-no-repeat px-6 lg:bg-[url('@/assets/bg_picture.jpg')]"
            // style={{
            //     backgroundImage: `url(${BgPict})`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     backgroundRepeat: 'no-repeat',
            // }}
        >
            <img
                src={BlueWatercolorBg}
                alt=""
                className="absolute right-0 bottom-0 z-0 m-0 w-auto -scale-x-[1] rotate-90 p-0 md:w-140"
            />
            <div className="container mx-auto flex flex-col items-stretch gap-8 md:gap-12 lg:flex-row">
                <div className="z-20 flex-1 py-12 md:px-12 md:py-20">
                    <p className="mb-1 text-lg text-primary-foreground/80">
                        Get Involved
                    </p>
                    <h2 className="mb-2 text-2xl font-bold tracking-wide text-primary-foreground md:text-3xl">
                        BECOME A VOLUNTEER
                    </h2>
                    <div className="mb-6 h-1 w-12 bg-green-800" />
                    <p className="mb-4 text-primary-foreground/70">
                        Join our community of passionate volunteers who are
                        making a real difference in the lives of students across
                        East Africa. Whether you can spare a few hours a week or
                        commit to a longer engagement, your time and skills are
                        invaluable.
                    </p>
                    <p className="mb-6 text-primary-foreground/70 md:mb-8">
                        From mentoring students and organizing fundraisers to
                        helping with outreach and administrative support - there
                        are many ways to contribute. Together, we can create
                        lasting change.
                    </p>
                    <button className="mb-4 rounded-full bg-green-800 px-8 py-3 font-medium text-foreground hover:opacity-90 md:mb-0">
                        Sign Up to Volunteer
                    </button>
                </div>
                <div className="relative flex w-full flex-1 shrink-0 items-end justify-center">
                    <div className="">
                        <img
                            src={volunteerImg}
                            alt="Volunteer"
                            className="h-auto w-full rounded object-cover hue-rotate-0 saturate-150"
                        />
                    </div>
                </div>
            </div>

            {/* <div className="relative container mx-auto flex flex-col items-center gap-8 md:gap-12 lg:flex-row">
                <div className="flex-1">
                    <div className="relative flex w-full flex-wrap self-start">
                        <div className="mbe-5 mb-0 w-full">
                            <div className="mt-56 mr-0 mb-4 ml-0">
                                <div className="relative">
                                    <h3 className="text-left text-[170px] leading-32.5 font-semibold -tracking-[5.1px]">
                                        BECOME
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mbe-5 mb-0 w-full">
                        <div className="m-0 mb-10">
                            <div className="relative">
                                <h2 className="relative mb-0 text-left text-[80px] leading-15 font-semibold -tracking-[0.03em]">
                                    A VOLUNTEER
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="mb-0 w-full text-[18px] leading-[1.66] font-normal not-last:mbe-5">
                        <div className="m-0 mb-12.5 p-0 pl-0">
                            <p>
                                From mentoring students and organizing
                                fundraisers to helping with outreach and
                                administrative support - there are many ways to
                                contribute. Together, we can create lasting
                                change.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex min-h-0.5 w-full">
                    <div className="relative flex w-full flex-wrap content-start">
                        <div className="absolute bottom-0 -left-13 z-1 mb-0 w-[initial] max-w-[initial] items-center text-center content-[initial] not-last:mbe-5">
                            <div className="m-0">
                                <img
                                    src={volunteerImg}
                                    alt="Volunteer"
                                    className="inline-block h-auto max-w-full rounded-none align-middle shadow-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default VolunteerSection;

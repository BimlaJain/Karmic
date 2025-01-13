import React from 'react';
import CommonHeading from '../common/CommonHeading';
import CommonButton from '../common/CommonButton';
import { UPCOMING_PROJECTS } from '../utils/helper';


const UpcomingProjects = () => {
    

    return (
        <div id='upcomingprojects' className="lg:pt-24 md:pt-20 pt-16 xl:pb-[136px] lg:pb-24 md:pb-20 pb-16">
            <div className="container">
                <div className="relative">
                <div className="absolute lg:top-[-21%] md:left-[33%] left-[19%] md:top-[-30%]  top-[-28%]">
                    <img
                        src="./assets/images/png/heading-line.png"
                        alt="line"
                        className="md:w-[344px] w-[250px]"
                    />
                </div>
                <CommonHeading
                    text={'Upcoming Projects'}
                    classStyle={'lg:!pb-12 md:!pb-10 !pb-8'}
                />
                </div>
                <div className="flex max-lg:flex-wrap justify-center md:gap-[29px] gap-5">
                    {UPCOMING_PROJECTS.map((project) => (
                        <div
                            key={project.id}
                            className="p-4 border backdrop-blur-lg bg-white/10 rounded-3xl border-gray-700"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="pb-4 xl:max-w-[231px] pointer-events-none"
                            />
                            <div className="flex justify-between">
                                <p className="font-sunflower font-medium text-xl leading-custom-xl text-white">
                                    {project.title}
                                </p>
                                <p className="font-sunflower font-bold text-base leading-custom-xl text-white">
                                    {project.time}
                                </p>
                            </div>
                            <p className="font-space font-light text-base leading-custom-2xl text-white">
                                {project.category}
                            </p>
                        </div>
                    ))}
                </div>
                <CommonButton classStyle={`px-8 py-[9px] border !border-white flex justify-center !mt-6 mx-auto items-center text-white font-sunflower font-medium !text-base rounded-full transition-all duration-700 ease-in-out hover:bg-white hover:text-black`} text={'View All'} />
            </div>
        </div>
    );
};

export default UpcomingProjects;

import React from "react";
import CommonHeading from "../common/CommonHeading";
import { CARDS_LIST } from "../utils/helper";
const Projects = () => {
    return (
        <div id="projects" className="bg-cover bg-center bg-no-repeat h-[902px] max-lg:h-full bg-whiteImg relative">
            <div className="container pt-24">
                <div className="absolute lg:top-[8%] lg:left-[37%] md:top-[-3%] md:left-[28%] left-[18%] top-[9%]">
                    <img
                        src="./assets/images/png/black-heading-line.png"
                        alt="line"
                        className="md:w-[344px] w-[250px]"
                    />
                </div>
                <CommonHeading
                    text={'projects'}
                    classStyle={'!text-black'}
                />
                <p className="text-center max-w-[532px] mx-auto text-dark-black text-base leading-6 font-normal pt-6 max-xl:pt-16 max-sm:pt-10 ">
                    Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh
                    egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna
                    id nisl quis vestibulum rhoncus.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
                    {CARDS_LIST.map((obj, i) => (
                        <div key={i}>
                            <img
                                src={obj}
                                alt="projectName"
                                className="w-full max-w-[273px] transition-all ease-linear duration-200 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center ">
                    <button className="text-black text-sm leading-5 transition-all ease-linear duration-200 hover:bg-black hover:text-white max-w-[119px] mx-auto py-3 border border-solid border-black rounded-full px-8 mt-10">
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projects;

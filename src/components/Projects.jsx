import React from 'react'
import CommonHeading from '../common/CommonHeading';
import CommonButton from '../common/CommonButton'
import { PROJECTS_LISTS } from '../utils/helper'

const Projects = () => {
    return (
        <div className='bg-cover bg-center bg-no-repeat max-lg:bg-white lg:bg-whiteImg xl:h-[820px] pt-16 sm:pt-[86px] lg:pb-[120px] md:pb-16 pb-12' id='projects'>
            <div className='container'>
                <div className="relative">
                    <div className="absolute lg:top-[-36%] lg:left-[33%] md:left-[26%] left-[19%] md:top-[-53%]  top-[-40%]">
                        <img
                            src="./assets/images/png/black-heading-line.png"
                            alt="line"
                            className="md:w-[344px] w-[250px] pointer-events-none"
                        />
                    </div>
                    <CommonHeading
                        text={'projects'}
                        classStyle={'!md:pb-10 !text-black'} />  
                </div>
                <p className='text-base max-w-[532px] mx-auto text-center pt-7 leading-6 font-normal font-space max-lg:pt-4'>Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.</p>
                <div className='flex flex-wrap sm:pt-[22px] justify-center'>
                    {PROJECTS_LISTS.map((obj, i) => (
                        <div
                            key={i}
                            className={`w-3/12 flex max-xl:w-4/12 max-md:w-6/12 max-sm:w-full px-2 pt-6`}
                        >
                            <div
                                className={` mx-auto hover:sm:scale-125 hover:scale-110 hover:!z-20 overflow-hidden group transition-all relative duration-300 cursor-pointer flex w-full rounded-lg justify-center  ${i === 0 ? '' : ''
                                    }`}
                            >
                                <img
                                    className=" w-full rounded-lg pointer-events-none"
                                    src={obj.image}
                                    alt='projects-image'
                                />
                                <div className='absolute min-h-[47px] font-sunflower flex justify-center items-center shadow-shadow-2xl bg-dark-gray transition-all duration-300 w-full group-hover:bottom-0 bottom-[-50%]'>
                                    <p className='text-white text-base leading-5 sm:text-xl font-bold'>
                                        {obj.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center pt-14 max-lg:pt-10 max-md:pt-5'>
                    <CommonButton classStyle={`px-8 py-[9px] border border-black flex justify-center mx-auto items-center  text-black font-sunflower font-medium !text-base rounded-full transition-all duration-700 ease-in-out hover:bg-black hover:text-white`} text={'View All'} />
                </div>
            </div>
        </div>
    )
}

export default Projects
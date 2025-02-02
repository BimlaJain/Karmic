import React from 'react'
import { VALUES_DATA } from '../utils/helper'
import CommonHeading from '../common/CommonHeading'

const Values = () => {
    return (
        <>
            <div className='container'>
                <div className="relative">
                <div className="absolute lg:top-[-36%] lg:left-[33%] md:left-[28%] left-[14%] md:top-[-53%]  top-[-40%]">
                    <img
                        src="./assets/images/png/heading-line.png"
                        alt="line"
                        className="md:w-[344px] w-[250px]"
                    />
                </div>
                <CommonHeading
                    text={'values'}
                />
                </div>
                <div className='flex flex-row max-lg:justify-center flex-wrap -mx-3 xl:pt-[77px] md:pt-12 pt-8'>
                    {VALUES_DATA.map((service, index) => (
                        <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-[10.5px] lg:mb-10 sm:mb-6 mb-5 relative group'>
                            <div className='absolute -top-[18px] xl:-right-1 -right-2 group-hover:opacity-100 opacity-0 transition-opacity duration-700 -z-10'>
                                <img src={service.circle} alt="circle" className='xl:w-[73px] xl:h-[74px] size-16' />
                            </div>
                            <div className="md:max-w-[369px] lg:min-h-[276px] sm:min-h-[256px] min-h-[200px] h-full xl:p-5 p-4 rounded-xl hover:shadow-custom-xl border border-dusk-black hover:bg-white/10 hover:backdrop-blur-lg duration-700 z-20">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="size-10 pointer-events-none"
                                />
                                <h3 className="font-bold text-xl font-space leading-custom-4xl text-white lg:pt-5 pt-4 pb-[6px]">
                                    {service.title}
                                </h3>
                                {service.description && (
                                    <p className="font-normal text-base font-space text-white xl:max-w-[329px]">
                                        {service.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Values
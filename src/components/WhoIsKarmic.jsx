import React from 'react'
import CommonHeading from '../common/CommonHeading'
import { KARMIC_IMAGES } from '../utils/helper';

const Karmic = () => {
    return (
        <div className='xl:pb-[156px] lg:pb-[120px] sm:pb-24 pb-16 xl:pt-[81px] pt-[50px]'>
            <div className="container">
                <div className="relative">
                <div className="absolute lg:top-[-36%] md:left-[33%] left-[22%] md:top-[-53%] top-[-40%]">
                    <img
                        src="./assets/images/png/heading-line.png"
                        alt="line"
                        className="md:w-[344px] w-[250px]"
                    />
                </div>
                <CommonHeading
                    text={'Who is karmic?'}
                    classStyle={'!pb-3'}
                />
                </div>
                <p className='text-base max-w-[532px] mx-auto text-center font-space leading-custom-2xl pb-[2px] font-normal text-white pt-2'>
                    We are builders, innovators, and believers.
                </p>
                <p className='text-base max-w-[532px] mx-auto text-center font-space leading-custom-2xl font-normal text-white'>
                    We believe in a future that rests in your hands, and yours alone. The future is decentralized, The future is web3.
                </p>
                <div className="flex max-xl:flex-wrap pt-6 max-xl:justify-center">
                    {KARMIC_IMAGES.map((image, index) => (
                        <img
                            key={index}
                            className='max-w-[369px] max-xl:max-w-[300px] max-lg:max-w-[329px] pointer-events-none'
                            src={image.image}
                            alt={image.alt}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Karmic;

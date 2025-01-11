import React from 'react'
import CommonHeading from '../common/CommonHeading'
const Karmic = () => {
    return (
        <div className=' xl:pb-[156px] lg:pb-[120px] sm:pb-24 pb-16 xl:pt-[81px] md:pt-[50px] '>
            <div className="container relative">
                <div className="absolute lg:top-[-4%] lg:left-[33%] md:top-[-3%] md:left-[28%] left-[15%] top-[-1%]">
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
                <p className='text-base max-w-[532px] mx-auto text-center leading-custom-2xl pb-[2px] font-normal text-white pt-2'>We are builders, innovaters, and believers.</p>
                <p className='text-base max-w-[532px] mx-auto text-center leading-custom-2xl font-normal text-white'>We believe in a future that rests in your hands, and yours alone. The future is decentralized, The future is web3.</p>
                <div className="flex max-xl:flex-wrap pt-10 max-xl:justify-center">
                    <img className='max-w-[369px] max-xl:max-w-[300px] max-lg:max-w-[329px] pointer-events-none' src="./assets/images/png/karmic-one.png" alt="one" />
                    <img className='max-w-[369px] max-xl:max-w-[300px] max-lg:max-w-[329px] pointer-events-none' src="./assets/images/png/karmic-two.png" alt="two" />
                    <img className='max-w-[369px] max-xl:max-w-[300px] max-lg:max-w-[329px] pointer-events-none' src="./assets/images/png/karmic-three.png" alt="three" />
                </div>
            </div>
        </div>
    )
}

export default Karmic
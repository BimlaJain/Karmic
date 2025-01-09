
import React from 'react';
import { ButtonArrow } from '../utils/icons';

const CommonButton = (props) => {
    return (
        <button
            className={`bg-white text-black lg:py-3 py-2 xl:px-8 lg:px-7 px-5 rounded-[82px] font-bold lg:text-base text-sm leading-[20px] ${props.className}`}
        >
            {props.text.classStyle}
            <span className={`${props.customClass} hidden`}>
                <ButtonArrow />
            </span>
        </button>
    );
};

export default CommonButton;
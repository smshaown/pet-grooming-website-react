import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const Bundles = ({bundles}) => {
 
    return (
        <div className='flex flex-col md:flex-row justify-between gap-[30px]'>
            {bundles.map((bundle, index) => {
                // destructure bundle 
                const {name, price, list} = bundle;
                return(
                    <div key={index} className='w-full lg:max-w-1/3 bg-white shadow-primary text-center h-[560px] rounded-[60px] py-12 px-8'>
                        <div className='text-5xl font-bold text-blue mb-4'>${price}</div>
                        <div className='capitalize mb-12 text-blue font-medium'>{name}</div>
                        <div className='flex flex-col gap-y-4 max-w-[230px]'>
                            {list.map((item, index) => {
                                return(
                                    <div key={index} className=' flex items-center gap-x-3'>
                                        <BsCheckCircleFill className='text-orange text-xl' />
                                        <div>{item}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Bundles;
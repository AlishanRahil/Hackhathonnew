import React from 'react'
import Imag from '../cards/Vector 17.png'
import Image from 'next/image';
const Support = () => {
  return (
    <div className='max-w-[900px] mx-auto py-12' data-aos='fade-up'>
      <div className='flex justify-between items-center'>
        {/* Left Side: Heading */}
        <div className='w-[50%]'>
          <h1 className='text-3xl font-bold'><span className=' text-orange-400'>St</span>ill Need Our Support?</h1>
          <p className='max-w-[300px] mt-5 font-semibold'>
            Lorem ipsum dolor sit amet 
          </p>
        </div>

        {/* Right Side: Input and Subscribe Button */}
        <div className='w-[45%]'>
          <div className='flex'>
            <input
              type="email"
              placeholder='Enter your email'
              className='px-6 py-4 border-[1px] border-black w-full bg-orange-500 text-white'
            />
            <button className='bg-white px-10 py-2 text-orange-400 '>
              Subscribe
            </button>
          </div>
        </div>
      </div>
       <Image alt='my' src={Imag} className=' mt-10'/>
    </div>
  );
}

export default Support;

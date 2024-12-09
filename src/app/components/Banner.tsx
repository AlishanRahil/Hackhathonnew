import React from 'react'
import Image from 'next/image'
import Banner1 from '../Tesmonial/Blog Card 1.png'

const Banner = () => {
  return (
        <div className=' bg-white'>
    <div className=' bg-white h-[550px]  max-w-full'>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             <div>
                <Image alt='banner1' src={Banner1}  data-aos='fade-right'/>
             </div>

             <div className='  md:mt-32 md:mx-0 mx-auto'>
                <h1 className=' text-center md:text-start  text-2xl md:text-4xl  font-bold' data-aos='fade-right'>We Believe that a team <br /> makes    any project better</h1>
                <p className=' text-center mt-5 md:text-start' data-aos='fade-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident cum, quisquam voluptatibus blanditiis, saepe tenetur qui magnam ab nihil tempore ipsam porro, veniam eum quibusdam expedita dolores aspernatur incidunt obcaecati.</p>
              <div className='  flex justify-center md:justify-start '>
              <button data-aos='fade-right' className='  mb-5 mt-5 bg-black px-5 py-2 rounded-lg text-white md:text-xl shadow-[5px_5px_10px_0px_rgba(255,255,255,0.2)] hover:bg-white hover:text-black'>Discover More</button>
              </div>
             </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner

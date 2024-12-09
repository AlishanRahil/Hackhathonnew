import React from 'react'
import Image from 'next/image'
import hero from '../Assets/Image (1).png'

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[600px] md:min-h-[650px] relative">
       
        <div  className=' flex flex-col  justify-center px-5 md:py-0 text-center md:text-left'>
        <h1 className=' text-orange-400   font-mono  md:ml-3 text-xl mb-2'>Its Quick &<span> Genusing</span></h1> 
            <h1 className='  text-3xl md:text-5xl lg:text-6xl font-bold mt-5 md:mt-0'><span className=' text-orange-400'>Th</span>e Art Of Speed Of Food Quality </h1>
                <p className=' text-lg mt-5'>It is a long established fact that a reader will be by readable content of a page when are the best product.</p>
               

               <div className=' flex  justify-center  md:justify-start gap-8 mt-2'>
                <button className='  bg-yellow-500  gap-2  flex mt-4 px-8 md:px-14 rounded-lg md:rounded-full py-2 md:py-5'>Order Now</button>
               </div>
        </div> 
        <div className=' mt-10 md:mt-0 flex items-center justify-center'>
            <Image src={hero} alt='dumble'   className=' w-[300px] md:w-[550px] lg:w-[700px] drop-shadow-sm'/>
        </div>
      </div>
    </div>
  )
}

export default Hero

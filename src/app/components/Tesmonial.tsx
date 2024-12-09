import React from 'react'
import Image from 'next/image'
import tesmonial from '../Tesmonial/Testimonials - Copy (2).png'
const Tesmonial = () => {
  return (
    <div className=' flex justify-center  pt-20'>
      <Image src={tesmonial}alt='tes'/>
    </div>
  )
}

export default Tesmonial

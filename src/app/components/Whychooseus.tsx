import React from 'react'
import Image from 'next/image'
import why from '../Assets/Why chose us.png'
const Whychooseus = () => {
  return (
    <div className='  flex justify-center cursor-pointer'>
      <Image src={why} alt='whychooseus'/>
    </div>
  )
}

export default Whychooseus

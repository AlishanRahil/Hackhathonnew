import React from 'react'
import Image from 'next/image'
import Menu from '../cards/Our Menu (1).png'

const Ourmenu = () => {
  return (
    <div className="flex flex-col items-center mx-auto mt-10 py-10">
      {/* Small heading */}
      <h2 className="text-sm font-medium text-orange-400">Choose & Pick</h2>
      {/* Big heading */}
      <h1 className="text-3xl font-bold"><span className=' text-orange-400'>Fr</span>om Our Menu</h1>
      
      {/* Image centered */}
      <div className="flex justify-center">
        <Image alt="ourmenus" src={Menu} />
      </div>
    </div>
  )
}

export default Ourmenu

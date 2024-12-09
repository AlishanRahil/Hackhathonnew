import React from 'react'
import Image from 'next/image'
import fodd from '../clients/Clients.png'
const Clients = () => {
  return (
    <div className=' flex justify-center pt-20'>
      <Image alt='food' src={fodd} width={1700}/>
    </div>
  )
}

export default Clients

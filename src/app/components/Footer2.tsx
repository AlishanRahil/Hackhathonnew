'use client'
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer2 = () => {
  return (
    <div className=' flex items-center justify-between bg-orange-500 text-center p-5'>
      {/* Image at the top of the footer */}

      {/* Footer content */}
      <div className=''>
        <p className='text-sm mx-10'>© Copyright 2024 By Ayeman, All Rights Reserved</p>
      </div>

      <div className=' flex items-center gap-4 text-xl mx-10 '>
        <div className=' bg-white'>
        <FaFacebook color='blue'/>
        </div>
       <div className=' bg-white'>
       <FaLinkedinIn color='blue'/>
       </div>
       <div className=' bg-white'>
       <FaInstagram color='purple'/>
       </div>
       <div className=' bg-white'>
       <FaYoutube color='red'/>
       </div>
      </div>
    </div>
  );
};

export default Footer2;

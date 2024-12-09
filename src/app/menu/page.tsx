import React from 'react';
import Image from 'next/image';
import MenuImage from '../Tesmonial/unsplash_4ycv3Ky1ZZU.png'; // Replace with the path to your image
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

const OurMenu = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center  justify-center mt-5 ">
        {/* Image with Overlay Headings */}
        <div className="relative w-full max-w-8xl mb-10">
          {/* Background Image */}
          <Image
            src={MenuImage}
            alt="Our Menu"
            className="rounded-lg"
            layout="responsive"
            width={1600}
            height={900}
          />

          {/* Overlay Headings */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
           <div className=' flex flex-wrap gap-3'>
           <h2 className="text-4xl font-bold">Our</h2>
           <h1 className="text-4xl font-bold">Menu</h1>
           </div>

            {/* Subtext below heading */}
            <div className="mt-4 text-lg">
              <p>
                Home  <span className="text-yellow-300">Menu</span>
              </p>
            </div>


          </div>


        </div>
       <div className=' bg-white'>
       <Banner/>
       </div>
      </div>
    </>
  );
};

export default OurMenu;

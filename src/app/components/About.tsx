import React from 'react';

import Image from 'next/image';
import hero1 from '../Assets/unsplash_mAQZ3X_8_l0.png';
import hero2 from '../Assets/unsplash_fdlZBWIP0aM.png';
import hero3 from '../Assets/unsplash_jpkfc5_d-DI.png';
import Path from '../Assets/Path 76977.png'

const About = () => {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[600px] md:min-h-[650px] relative">
  {/* /* Left: Text Content */ }
          <div className="flex flex-col justify-center px-5 md:py-0 text-center md:text-left">
     <h1 className="text-orange-400 font-mono md:ml-3 text-xl mb-2">
            About <span> Us</span>
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-5xl gap-2 font-semibold mt-5 md:mt-0">
            <span className="text-orange-400">We</span> Create The Best Foody Product 
          </h1>
          <p className="text-lg mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cum libero provident, laborum doloribus officiis distinctio praesentium, perspiciatis mollitia perferendis ab officia sed nisi maiores est hic expedita beatae quibusdam?
          </p>

          
          <div className='  flex items-center justify-start mt-5 gap-3'>
            <Image alt='patgh' src={Path}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>


          <div className='  flex items-center justify-start mt-5 gap-3'>
            <Image alt='patgh' src={Path}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className='  flex items-center justify-start mt-5 gap-3'>
            <Image alt='patgh' src={Path}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>


          <div className="flex justify-center md:justify-start gap-8 mt-2">
            <button className="bg-yellow-500 gap-2 flex mt-4 px-8 md:px-14 rounded-lg md:rounded-full py-2 md:py-4">
              Read More
            </button>
          </div>
        </div>

        {/* Right: Images */}
        <div className="mt-10 md:mt-0 flex flex-col items-center gap-5">
          {/* Top Image */}
          <div className="w-full flex justify-center">
            <Image src={hero2} alt="Top Image" className="w-[300px] md:w-[400px] lg:w-[500px] drop-shadow-sm mt-20" />
          </div>
          {/* Bottom Two Images */}
          <div className="grid grid-cols-2 gap-5">
            <Image src={hero1} alt="Bottom Image 1" className="w-[150px] md:w-[200px] lg:w-[250px] drop-shadow-sm" />
            <Image src={hero3} alt="Bottom Image 2" className="w-[150px] md:w-[200px] lg:w-[250px] drop-shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

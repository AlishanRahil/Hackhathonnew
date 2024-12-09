import React from 'react';
import Image from 'next/image';
import food1 from '../Tesmonial/Rectangle 8863.png'; // Replace with your actual image paths
import food2 from '../Tesmonial/Card 2.png';
import food3 from '../Tesmonial/Card 3.png';
import food4 from '../Tesmonial/Card 4.png';

const Chef = () => {
  return (
    <div className="container mx-auto py-20">
      {/* Small Heading: Food Category */}
      <div className="text-center mb-2">
        <h3 className="text-orange-400 text-lg font-semibold">Chef &apos;s</h3>
      </div>

      {/* Big Heading: Menu */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold"><span className=' text-orange-400'>Me</span>et Our Chef&apos;s</h1>
      </div>

      {/* Food Images in a Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 ">
        <div className="flex justify-center">
          <Image src={food1} alt="Food 1" className="rounded-lg drop-shadow-lg" />
        </div>
        <div className="flex justify-center">
          <Image src={food2} alt="Food 2" className="rounded-lg drop-shadow-lg" />
        </div>
        <div className="flex justify-center">
          <Image src={food3} alt="Food 3" className="rounded-lg drop-shadow-lg" />
        </div>
        <div className="flex justify-center">
          <Image src={food4} alt="Food 4" className="rounded-lg drop-shadow-lg" />
        </div>

      </div>
        <div className=' flex justify-center items-center mt-16'>
        <button className=' text-center border-2 border-orange-400 px-10 py-3 rounded-full'>See More</button>
        </div>
    </div>
  );
};

export default Chef;

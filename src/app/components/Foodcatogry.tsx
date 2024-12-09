import React from 'react';
import Image from 'next/image';
import food1 from '../Assets/unsplash_-lHZUkiWM74.png'; // Replace with your actual image paths
import food2 from '../Assets/unsplash_dphM2U1xq0U.png';
import food3 from '../Assets/unsplash_MRHyv-hHxgk.png';
import food4 from '../Assets/unsplash_q54Oxq44MZs.png';

const FoodCategory = () => {
  return (
    <div className="container mx-auto py-20">
      {/* Small Heading: Food Category */}
      <div className="text-center mb-2">
        <h3 className="text-orange-400 text-lg font-semibold">Food Category</h3>
      </div>

      {/* Big Heading: Menu */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold"><span className=' text-orange-400'>Ch</span>oose Food Item</h1>
      </div>

      {/* Food Images in a Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </div>
  );
};

export default FoodCategory;

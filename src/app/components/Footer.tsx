import React from 'react';
import desing from '../Assets/Icon Box.png';
import Image from 'next/image';
import recentPostImg from '../Assets/unsplash_-lHZUkiWM74.png'; // Example image for recent posts
import watchImg from '../cards/Watch.png'; // Imported watch image
import Footer2 from './Footer2';

const Footer = () => {
  return (
    <div className='' data-aos='zoom-in-out'>
      <div className="container py-11 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-start">
          {/* About Us Section */}
          <div className='space-y-4 mx-auto'>
            <div className='flex items-center space-x-3'>
              <Image src={desing} alt='image' className='w-10' />
              <p className='text-2xl font-bold'>About Us</p>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab distinctio delectus magnam fuga quo nam dolorem dignissimos ullam placeat deleniti.</p>
            
            {/* Watch Image and Text */}
            <div className='mt-6 flex gap-2'>
              <Image src={watchImg} alt='Watch' className='w-20 h-14 object-cover' />
              <p className='text-lg font-semibold'>Check out our latest collection of watches! </p>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className='space-y-4'>
            <h1 className='text-2xl font-bold mb-3 text-center'>Useful Links</h1>
            <ul className='space-y-1 text-center gap-5'>
              <li className=' '>Home</li>
              <li className=' mb-5'>About</li>
              <li className=' mb-5'>Projects</li>
              <li className=' mb-5'>Services</li>
            </ul>
          </div>

          {/* Help Section */}
          <div className='space-y-4'>
            <h1 className='text-2xl font-bold mb-3'>Help</h1>
            <ul className='space-y-1'>
              <li>What is your return policy?</li>
              <li>How can I track my order?</li>
              <li>Do you offer international shipping?</li>
              <li>How do I contact customer service?</li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className='space-y-4'>
            <h1 className='text-2xl font-bold mb-3'>Recent Posts</h1>
            <div className='space-y-3'>
              {/* Example of a recent post item */}
              <div className='flex items-center space-x-3'>
                <Image src={recentPostImg} alt='Recent Post' className='w-16 h-16 object-cover' />
                <div>
                  <p className='font-semibold'>Post Title 1</p>
                  <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              {/* Another recent post */}
              <div className='flex items-center space-x-3'>
                <Image src={recentPostImg} alt='Recent Post' className='w-16 h-16 object-cover' />
                <div>
                  <p className='font-semibold'>Post Title 2</p>
                  <p className='text-sm'>Consectetur adipisicing elit.</p>
                </div>
              </div>
              {/* Another recent post */}
              <div className='flex items-center space-x-3'>
                <Image src={recentPostImg} alt='Recent Post' className='w-16 h-16 object-cover' />
                <div>
                  <p className='font-semibold'>Post Title 3</p>
                  <p className='text-sm'>Dignissimos ullam placeat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2/>
    </div>
  );
};

export default Footer;

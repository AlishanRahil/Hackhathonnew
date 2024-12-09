// import React from 'react';
// import Image from 'next/image';
// import { FaRegBookmark, FaRegCommentDots, FaRegThumbsUp } from 'react-icons/fa';
// import blogcard from '../Tesmonial/Blog Card 1.png'; // Replace with your actual image path
// import blog1 from '../cards/Blog Card 2.png'
// import blog2 from '../cards/Blog Card 3.png'
// const Blogs = () => {
//   return (
//     <div className="flex flex-wrap justify-center py-10 mt-20 gap-4">
//       <div className=" w-[300px] shadow-lg rounded-lg overflow-hidden   ">
//         {/* Blog Image */}
//         <div className="w-full overflow-hidden border cursor-pointer ">
//           <Image 
//             src={blogcard} 
//             alt="Blog Card Image" 
//             className="w-full h-auto object-cover"
//           />

//         </div>
//          </div>

//          <div className=" w-[300px] shadow-lg rounded-lg overflow-hidden cursor-pointer ">
//         {/* Blog Image */}
//         <div className="w-full overflow-hidden border  ">
//           <Image 
//             src={blog1} 
//             alt="Blog Card Image" 
//             className="w-full h-auto object-cover"
//           />
          
//         </div>
//          </div>


//          <div className=" w-[300px] shadow-lg rounded-lg overflow-hidden cursor-pointer">
//         {/* Blog Image */}
//         <div className="w-full overflow-hidden border  ">
//           <Image 
//             src={blog2} 
//             alt="Blog Card Image" 
//             className="w-full h-auto object-cover"
//           />
          
//         </div>
//          </div>
//           </div>
   

//   );
// };

// export default Blogs;




import React from 'react';
import Image from 'next/image';
import blogcard from '../Tesmonial/Blog Card 1.png'; // Replace with your actual image path
import blog1 from '../cards/Blog Card 2.png';
import blog2 from '../cards/Blog Card 3.png';

const Blogs = () => {
  return (
    <div className="py-10 mt-20">
      {/* Headings */}
      <div className="text-center mb-8">
        <h3 className="text-xl text-orange-400 font-serif">Blog Post</h3>
        <h1 className="text-3xl font-bold">Latest News & Blogs</h1>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-center gap-4">
        {/* Blog 1 */}
        <div className="w-[300px] shadow-lg rounded-lg overflow-hidden cursor-pointer">
          <div className="w-full overflow-hidden border">
            <Image 
              src={blogcard} 
              alt="Blog Card Image" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Blog 2 */}
        <div className="w-[300px] shadow-lg rounded-lg overflow-hidden cursor-pointer">
          <div className="w-full overflow-hidden border">
            <Image 
              src={blog1} 
              alt="Blog Card Image" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Blog 3 */}
        <div className="w-[300px] shadow-lg rounded-lg overflow-hidden cursor-pointer">
          <div className="w-full overflow-hidden border">
            <Image 
              src={blog2} 
              alt="Blog Card Image" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

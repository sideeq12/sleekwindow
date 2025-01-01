import React from 'react'

const Reviews = () => {
  return (
   <div className='pr-14 text-center mx-auto text-white pt-40'>
    <h1>Testimonials</h1>
     <div className='flex justify-center mx-auto gap-10 pt-20  overflow-x-scroll scrollbar-hide'>
      <div className='w-60 flex flex-col py-4 md:py-8  space-y-4 px-6 text-center border  rounded-md'>
        <div className='w-24 bg-cover bg-center mx-auto rounded-full h-24 bg-[url("/images/gabriel.jpg")] '>
        </div>
        <b className='font-serif'>Stacy Palmer</b>
        <p className='text-sm font-light'>"Zerah-Luxury has completely transformed my wardrobe. The quality and design of their clothing are unmatched. I always feel confident and stylish in their pieces."</p>
      </div>
      <div className='w-60 flex flex-col py-4 md:py-8 space-y-4 px-6 text-center border  rounded-md'>
        <div className='w-24 bg-cover bg-center mx-auto rounded-full h-24 bg-[url("/images/alexandru.jpg")]  '>
        </div>
        <b className='font-serif'>Alexandru Racheal</b>
        <p className='text-sm  font-light'>"I love the unique designs and the attention to detail in every piece. Zerah-Luxury truly stands out in the fashion industry. Highly recommend to anyone looking for something special."</p>
      </div>
      <div className='w-60 flex flex-col py-4 md:py-8  space-y-4 px-6 text-center border  rounded-md'>
        <div className='w-24 bg-cover bg-center mx-auto rounded-full h-24 bg-[url("/images/gabriel.jpg")] '>
        </div>
        <b className='font-serif'>Gabriel Johnson</b>
        <p className='text-sm font-light'>"The customer service at Zerah-Luxury is exceptional. They go above and beyond to ensure you are satisfied with your purchase. I am a loyal customer for life."</p>
      </div>
      <div className='w-60 flex flex-col py-4 md:py-8  space-y-4 px-6 text-center border  rounded-md'>
        <div className='w-24 bg-cover bg-center mx-auto rounded-full h-24 bg-[url("/images/roksolana.jpg")]  '>
        </div>
        <b className='font-serif'>Roksolana Ivanova</b>
        <p className='text-sm font-light'>"Zerah-Luxury offers a perfect blend of tradition and innovation. Their clothing is not only beautiful but also comfortable to wear. I always receive compliments when I wear their pieces"</p>
      </div>
     
    </div>
   </div>
  )
}

export default Reviews

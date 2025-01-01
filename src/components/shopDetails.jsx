import React from 'react'

const ShopDetails = () => {
  return (
<div className='h-screen text-white pt-4 md:pt-16 '>
      <h1 className='text-center'>Fashion with a Purpose</h1>
      <div className='flex mx-auto p-4 mt-6 md:pt-20 justify-center  gap-14 '>
        <img src="/images/smart.jpg" alt="should Top images trending"  className='w-1/2 h-96'/>
        <div className='w-1/3'>
            <h4 className='mb-4 text-2xl'>Trending images</h4>
            <p className='text-left justify-start font-light'>   Welcome to Zerah-Luxury, where fashion meets individuality. Our journey began
             with a simple idea: to create clothing that not only looks good but feels good.
             We believe that every piece of clothing tells a story, and we are here to help you write yours.

Founded in 2024, Zerah-Luxury has grown from a passion project into a community-driven brand
 cherished by fashion enthusiasts worldwide. Our designs are inspired by the perfect blend of 
 tradition and innovation, capturing the spirit of those who dare to stand out.</p>
        </div>
      </div>
</div>
  )
}

export default ShopDetails

import React from 'react'

const Collections = () => {
  return (
<div className='h-screen text-white pt-4 md:pt-16 relative '>
    
      <div className='flex relative flex-row-reverse mx-auto p-4 mt-6 md:pt-20 justify-center  gap-14 '>
        {/* <div className=' relative'> */}
        {/* <img src="/images/jeremy.jpg" alt="should Top images trending"  className=''/> */}
        
        {/* </div> */}
        <div className="relative w-1/2 h-64">
  <img 
    src="/images/samson.jpg" 
    alt="First Image" 
    className="absolute top-0 left-0 w-96 h-[30rem] object-cover z-10 transform translate-y-14 "
  />
  <img 
    src="/images/jeremy.jpg" 
    alt="Second Image" 
    className="absolute top-0 left-0 w-96 h-[30rem]  object-cover z-0 transform -translate-y-10 translate-x-28"
  />
</div>
        <div className='w-1/3'>
            <h4 className='mb-4 text-2xl'>Collections</h4>
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

export default Collections;

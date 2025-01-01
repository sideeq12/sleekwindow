import { useState, useRef } from 'react'
import { motion, useInView } from "framer-motion"
import './App.css'
import Scene from './components/scene'
import { useScroll } from 'framer-motion'
import ShopDetails from './components/shopDetails'
import Collections from './components/collections'
import Reviews from './components/reviews'
function App() {
  const container = useRef()
  const {scrollYProgress } = useScroll({
    target : container,
    offset : ['start start','end end']
  })

  return (
    <main className=' w-screen px-10 md:px-20 '>
      <div className='h-[300vh] text-white '>
      <div className='flex justify-between pt-14'>
      <h2 className='  font-semibold text-3xl'>Zerah-Luxury</h2>
        <nav>
          <ul className='flex  gap-8'>
            <li><a href='#' className='text-white'>Collections</a></li>
            <li><a href='#' className='text-white'>Contact Us</a></li>
            <li><a href='#' className='text-white'>About Us
            </a></li>
          </ul>
        </nav>
      </div>
      <motion.h1 initial={{
       x: 100 
      }}
      whileInView={{
        x: 0 
      }}
      transition={{ duration: 1, delay: 1, ease: "linear" }}
      viewport={{
        amount : "all",
      }} className='text-5xl mx-auto w-5/6 relative top-[20vh] z-40 font-semibold text-center'>Explore 
      timeless fashion designed for every occasion, crafted to perfection</motion.h1>
<div className='h-screen sticky top-0'>
<Scene scrollProgress={scrollYProgress} />
</div>
</div>
<div className='flex flex-col space-y-10'>
<ShopDetails />
<Collections />
<Reviews /></div>

    </main>
  )
}

export default App

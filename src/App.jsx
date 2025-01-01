import { useState, useRef } from 'react'
import './App.css'
import Scene from './components/scene'
import { useScroll } from 'framer-motion'
import ShopDetails from './components/shopDetails'
import Collections from './components/collections'
import Reviews from './components/reviews'
import Footer from './components/footer'
function App() {
  const container = useRef()
  const {scrollYProgress } = useScroll({
    target : container,
    offset : ['start start','end end']
  })

  return (
    <main className=' w-screen overflow-clip px-10 md:px-20 '>
      <div className='h-[300vh] text-white '>
      <div className='flex justify-between pt-14'>
      <h2 className='  font-semibold text-3xl font-serif'>Zerah-Luxury</h2>
        <nav>
          <ul className='hidden mid:flex gap-8'>
            <li><a href='#' className='text-white'>Collections</a></li>
            <li><a href='#' className='text-white'>Contact Us</a></li>
            <li><a href='#' className='text-white'>About Us
            </a></li>
          </ul>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-list mt-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
          </div>
        </nav>
      </div>
      <h1  className='text-5xl mx-auto w-5/6 relative top-[20vh] z-40 font-semibold text-center'>Explore 
      timeless fashion designed for every occasion, crafted to perfection</h1>
<div className='h-screen sticky top-0'>
<Scene scrollProgress={scrollYProgress} />
</div>
</div>
<div className='flex flex-col space-y-10'>
<ShopDetails />
<Collections />
<Reviews />
<Footer />
</div>

    </main>
  )
}

export default App

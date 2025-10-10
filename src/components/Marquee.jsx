import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
 let marqueeElem = Array.from({length:4}).map((ele,index)=>(
  <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:10}} key={index} className='text-[25vw] sm:text-[22vw] md:text-[20vw] font-bold font-title -mb-4 sm:-mb-5 md:-mb-6 pr-8 sm:pr-10'>We Are Orbit Walls</motion.h1>
 ))
  return (
    <div   data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-8 sm:py-12 md:py-16 bg-background rounded-xl sm:rounded-2xl md:rounded-t-3xl'>
        <div className='h-fit border-b-2 border-t-2 border-zinc-300 overflow-hidden text-white flex whitespace-nowrap leading-none'>
          {marqueeElem}
        </div>
    </div>
  )
}

export default Marquee
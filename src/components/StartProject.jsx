import React from 'react'
import { MdArrowOutward } from "react-icons/md";

function StartProject() {
  return (
    <div className='w-full md:h-screen h-[80vh] md:mt-0 mt-[10vh]  pt-20 relative'>
        <h1 className='text-white font-[FG] font-extrabold md:text-[8vw] text-[16vw] uppercase md:leading-[6vw] leading-[12vw] text-center tracking-tight'>Ready</h1>
        <h1 className='text-white font-[FG] font-extrabold md:text-[8vw] text-[16vw] uppercase md:leading-[6vw] leading-[12vw] text-center tracking-tight'>to start</h1>
        <h1 className='text-white font-[FG] font-extrabold md:text-[8vw] text-[16vw] uppercase md:leading-[6vw] leading-[12vw] text-center tracking-tight'>the project?</h1>


        <div id='startProject' className='flex items-center justify-center gap-3 group mt-10'>
                <button className='px-4 py-1 text-2xl rounded-full border-2 border-primary text-white uppercase tracking-tight font-semibold group-hover:bg-primary group-hover:text-secondary transition duration-700'>start the project</button>
                <div className='rounded-full border-2 border-primary p-2 text-2xl font-semibold text-white group-hover:bg-primary group-hover:text-secondary transition duration-700'>
                    <MdArrowOutward />
                </div>
        </div>
    </div>     
  )
}

export default StartProject

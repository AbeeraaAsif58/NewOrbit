import React, { useState } from 'react'

function Cards() {
    const packs = [
        {logo:"	https://ochi.design/wp-content/uploads/2022/04/logo001.svg",btn:"©2019-2020"},
        {logo:"https://ochi.design/wp-content/uploads/2022/04/logo002.svg",btn:"RATTING 5.0 ON CLUTCH"},
        {logo:"	https://ochi.design/wp-content/uploads/2022/04/logo003.png",btn:"BUISNESS BOOTCAMP ALUMINI"},
    ]

    const [pack, setPack] = useState(packs);
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.2"  className='h-[70vh] sm:h-[80vh] md:h-[90vh] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 sm:px-8 md:px-16 gap-4 sm:gap-5'>
        {pack.map((items,index)=>(
           <div key={index} className={`h-[20vh] sm:h-[25vh] md:h-[53vh] mt-4 sm:mt-8 md:mt-32 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 md:py-3 ${index === 0? "sm:col-span-2 md:col-span-1 md:w-[45vw] bg-emerald-800":"md:w-[22vw] bg-zinc-900"}`}>
                <div className='w-full h-[80%] sm:h-[85%] grid place-items-center'>   
                    <img className='w-[30vw] sm:w-[20vw] md:w-[8vw] h-[8vh] sm:h-[10vh] rounded-lg sm:rounded-xl object-contain' src={`${items.logo}`} alt="" />        
                </div>
                <button className='px-2 sm:px-3 text-white py-1 sm:py-2 border-2 border-gray-500 rounded-full text-xs sm:text-sm md:text-sm w-full sm:w-auto font-poppins'>{items.btn}</button>
            </div> 
        ))}
    </div>
  )
}

export default Cards
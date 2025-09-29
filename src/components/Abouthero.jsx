import React from 'react'

function Abouthero() {
  return (
    <div className='w-full md:rounded-t-3xl rounded-b-[1rem] overflow-hidden bg-secondary py-10 md:py-30 px-4 md:px-16'>
        <h2 className='text-[8vw] md:text-[3.5vw] leading-none font-normal font-[NM] w-full md:w-[85%] py-16 md:py-32 text-primary'>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='text-primary'>raise funds</span>, 
            <span className='underline text-primary'> sell products</span>, 
            <span className='underline text-primary'> explain complex ideas</span>, and 
            <span className='underline text-primary'> hire great people</span>.
        </h2>

        <div className='w-full md:w-[100vw] -mx-4 md:-mx-16 border-t-[1px] border-primary/40 mt-10 md:mt-20'></div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-5 mt-4 mb-20 md:mb-36 justify-between w-full'>
            <h4 className='text-xl md:text-[1.1vw] w-full md:w-[80%] text-primary'>What you can expect:</h4>
            <div className='w-full md:w-auto'>
                <p className='text-base md:text-[1.1vw] md:w-[50%] text-primary'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
                <p className='text-base md:text-[1.1vw] md:w-[50%] mt-5 text-primary'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className='underline mt-8 md:mt-auto md:mr-11 text-primary'>
                <p className='text-base md:text-[1.1vw]'>S :</p>
                <br />
                <p className='text-base md:text-[1.1vw]'>Instagram</p>
                <p className='text-base md:text-[1.1vw]'>Behance</p>
                <p className='text-base md:text-[1.1vw]'>FaceBook</p>
                <p className='text-base md:text-[1.1vw]'>LinkedIn</p>
            </div>
        </div>

        <div className='w-full md:w-[100vw] -mx-4 md:-mx-16 border-t-[1px] border-primary/40 mt-10 md:mt-20'></div>
        <div className='flex flex-col md:flex-row gap-8 md:gap-5 items-start justify-between w-full pt-4'>
            <div className='w-full md:w-1/2'>
                <h1 className='text-4xl md:text-[3vw] font-semibold tracking-tight text-primary'>Our approach:</h1>
                <button className='mt-4 md:w-42 mt-3 px-7 py-4 rounded-full bg-[#c3e0e5] text-[#202c3f] flex items-center justify-center md:justify-start gap-3'>
                    READ MORE
                    <div className='size-1 bg-[#202c3f] rounded-full'></div>
                </button>
            </div>
            <div style={{ backgroundImage: "url('https://images.pexels.com/photos/12885859/pexels-photo-12885859.jpeg')" }} className='w-full md:w-1/2 h-[40vh] md:h-[55vh] rounded-xl md:rounded-3xl bg-center bg-cover'>
            </div>
        </div>
    </div>
  )
}

export default Abouthero

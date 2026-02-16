import React from 'react'

const AboutSection = () => {
  return (
    <div className='relative w-full border-[0.4px] border-[#FFB800] rounded-2xl flex justify-center py-20 overflow-hidden'>
        <div className='relative z-20 w-[80%] flex flex-col gap-8 text-white font-sans'>
            <p className='w-[80%] font-light text-[20px] max-xl:text-[16px]'>Time Capsule is a virtual museum dedicated to showcasing humanity's greatest achievements. From ancient innovations to modern breakthroughs, we explore the milestones that have shaped our world. Dive into our rich collection of articles, videos, and interactive features to see how far we've come and be inspired by the journey of human progress.</p>
            <h1 className='font-against text-[64px] max-xl:text-[32px] self-end mt-16'>Tracing Our<br/> Milestones</h1>
            <p className='text-[24px] font-normal max-xl:text-[16px] cursor-pointer'>Read More</p>
        </div>
        <img src="base.svg" alt="base" className='absolute z-10 bottom-0'/>
        <img src="base2.svg" alt="base" className='absolute z-10 bottom-0'/>
        <img src="base3.svg" alt="base" className='absolute z-10 bottom-0'/>
        <img src="base4.svg" alt="base" className='absolute bottom-0'/>
    </div>
  )
}

export default AboutSection
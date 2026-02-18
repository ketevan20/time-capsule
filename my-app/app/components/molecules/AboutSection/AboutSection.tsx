import { motion } from 'motion/react'
import React from 'react'

const AboutSection = ({ref}: any) => {
  return (
    <div ref={ref} className='scroll-mt-16 relative w-full border-[0.4px] border-[#FFB800] rounded-2xl flex justify-center py-20 overflow-hidden max-sm:p-6'>
        <div className='relative z-20 sm:w-[80%] flex flex-col gap-8 text-white font-sans'>
            <motion.p initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0}} transition={{duration: 1, ease: 'anticipate'}} viewport={{once: true}} className='w-[80%] font-thin font-sans text-[20px] max-2xl:text-[16px] max-sm:text-[12px]'>Time Capsule is a virtual museum dedicated to showcasing humanity's greatest achievements. From ancient innovations to modern breakthroughs, we explore the milestones that have shaped our world. Dive into our rich collection of articles, videos, and interactive features to see how far we've come and be inspired by the journey of human progress.</motion.p>
            <motion.h1 initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x:0}} transition={{duration: 1, ease: 'anticipate'}} viewport={{once: true}} className='font-against text-[64px] max-2xl:text-[32px] max-sm:text-[24px] self-end mt-16 max-md:mt-8'>Tracing Our<br/> Milestones</motion.h1>
            <motion.p initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0}} transition={{duration: 1, ease: 'anticipate'}} viewport={{once: true}}  className='underline text-[24px] font-normal max-2xl:text-[16px] cursor-pointer max-sm:text-[10px]'>Read More</motion.p>
        </div>
        <motion.img initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y:0}} transition={{duration: 1, ease: 'anticipate', delay: 0.1}} viewport={{once: true, amount: 0.2}} src="base.svg" alt="base" className='absolute z-10 bottom-0'/>
        <motion.img initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y:0}} transition={{duration: 1, ease: 'anticipate', delay: 0.2}} viewport={{once: true, amount: 0.2}} src="base2.svg" alt="base" className='absolute z-10 bottom-0'/>
        <motion.img initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y:0}} transition={{duration: 1, ease: 'anticipate', delay: 0.3}} viewport={{once: true, amount: 0.2}} src="base3.svg" alt="base" className='absolute z-10 bottom-0'/>
        <motion.img initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y:0}} transition={{duration: 1, ease: 'anticipate', delay: 0.4}} viewport={{once: true, amount: 0.2}} src="base4.svg" alt="base" className='absolute z-10 bottom-0'/>
    </div>
  )
}

export default AboutSection
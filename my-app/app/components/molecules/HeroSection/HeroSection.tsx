'use client'
import { motion } from 'motion/react'
import React from 'react'

const HeroSection = ({ref}: any) => {
    return (
        <div ref={ref} className='w-full h-screen relative overflow-hidden'>
            <div className='max-w-375 left-[50%] -translate-x-[50%] absolute z-201 top-[22%] w-full flex justify-between items-center px-16 max-xl:px-4 max-md:top-24'>
                <motion.div initial={{opacity: 0, x: -100}} animate={{opacity: 1, x:0}} transition={{duration: 1, ease: 'anticipate'}} className='sm:max-w-122.5 flex flex-col gap-4 items-start max-xl:gap-2'>
                    <p className='font-sans text-white text-[16px] max-xl:text-[12px]'>Virtual Achievement  Museum</p>
                    <h1 className='font-against text-[64px] text-white max-xl:text-[28px] max-md:text-[24px] max-sm:text-[20px]'>THE ART OF LIVING</h1>
                    <div className='w-[80%] h-px bg-[#FFFFFF]'></div>
                    <p className='text-[#FFB800] font-sans text-[20px] font-semibold max-xl:text-[14px]  max-md:text-[12px]'>"Our greatest glory is not in never falling, but<br /> in rising every time we fall."</p>
                    <motion.button whileHover={{scale: 1.05}} transition={{duration:0.1}} className='cursor-pointer font-sans py-4 px-12 bg-[#FFB800] text-black rounded-sm font-bold text-[22.45px] max-xl:px-3 max-xl:py-2 max-xl:text-[16px]  max-md:text-[12px]'>Uncover History</motion.button>
                </motion.div>
                <motion.div initial={{opacity: 0, x: 100}} animate={{opacity: 1, x:0}} transition={{duration: 1, ease: 'anticipate'}} className='max-sm:hidden text-right text-[#FFFFFF] opacity-60 text-[16px] max-md:text-[12px]'>
                    <p className='hover:text-[#FFB800] underline cursor-pointer'>Science and Discovery</p>
                    <p className='hover:text-[#FFB800] underline cursor-pointer'>Technology and Invention</p>
                    <p className='hover:text-[#FFB800] underline cursor-pointer'>Arts and Culture</p>
                    <p className='hover:text-[#FFB800] underline cursor-pointer'>Social Progress and Governance</p>
                    <p className='hover:text-[#FFB800] underline cursor-pointer'>Medicine and Health</p>
                    <p className='hover:text-[#FFB800] underline cursor-pointer'>Exploration and Discovery</p>
                    <p className='hover:text-[#FFB800] underline cursor-pointer'>Innovation and Entrepreneurship</p>
                </motion.div>
            </div>

            <img src="/hero.svg" alt="angel" className='absolute z-200 max-h-full max-w-full bottom-0 left-[50%] -translate-x-[50%] max-lg:max-w-[80%] max-lg:max-h-[80%] max-md:max-w-[70%] max-md:max-h-[70%]' />
            <motion.p
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                    duration: 10,
                    ease: "linear",
                }}
                className="text-[290px] max-xl:text-[150px] leading-[3%] font-grenze text-[#ffffff1a] absolute bottom-70 whitespace-nowrap max-xl:bottom-50"
            >
                The journey of a thousand miles begins with a single step.
            </motion.p>
            {/* <img src="/clouds.svg" alt="clouds" className='h-100 w-full absolute left-0 right-0 bottom-0 translate-y-[40%]' /> */}
            {/* <img src="/shadow.svg" alt="yellow-shadow" className='absolute bottom-0 left-0 translate-y-[50%]' /> */}
        </div>
    )
}

export default HeroSection
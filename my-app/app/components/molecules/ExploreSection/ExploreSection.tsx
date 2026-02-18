'use client'
import { motion } from 'motion/react'
import React from 'react'

const ExploreSection = ({ref}: any) => {
    return (
        <div ref={ref} className='w-full flex gap-3 items-center max-lg:flex-col max-lg:gap-6 scroll-mt-16'>
            <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0}} transition={{duration: 1, ease: 'anticipate'}} viewport={{once: true}} className='flex-[1.5] font-sans text-white max-lg:self-start'>
                <h1 className='font-black leading-[120%] text-[64px] max-2xl:text-[32px] mb-2 max-md:text-[24px]'>Begin Your Journey Through Time</h1>
                <p className='font-light text-[24px] max-2xl:text-[16px] leading-[120%] max-md:text-[14px]'>Dive Deeper into Humanity's Greatest Achievements</p>
            </motion.div>

            <div className='flex-2 grid grid-cols-5 grid-rows-2 gap-5 max-sm:grid-cols-1 max-sm:grid-rows-[auto_auto]'>

                <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x:0}} transition={{duration: 1, ease: 'anticipate'}} viewport={{once: true}} className='relative z-20 sm:col-span-3 sm:row-span-2 bg-linear-to-b from-black to-black/0 backdrop-blur-sm rounded-2xl border-[0.4px] border-[#FFB800] p-4 flex flex-col gap-2 items-center text-center'>
                    <p className='text-[#FFB800] text-[16px] max-2xl:text-[12px] font-light'>From Early Civilizations to Modern Societies</p>
                    <p className='font-bold text-white text-[20px] max-2xl:text-[16px]'>Discover the Greatest Achievements</p>
                    <div className='relative min-w-55 max-w-[90%]'>
                        <img src="thinkerBackground.svg" alt="" className='max-w-full' />
                        <img src="thinker.svg" alt="" className='absolute bottom-0' />
                    </div>
                    <div className='absolute bottom-4 left-2 right-2 text-center font-sans'>
                        <motion.button whileHover={{ scale: 1.05 }} transition={{ duration: 0.1 }} className='text-[16px] text-white max-2xl:text-[12px] cursor-pointer border-[0.8px] border-[#FFB800] rounded-sm px-8 py-2 whitespace-nowrap bg-linear-to-b from-black to-black/0 backdrop-blur-sm'>Explore Now</motion.button>
                        <p className='text-[12px] text-white max-2xl:text-[10px] mt-2'>Explore the complete timeline of humanity’s greatest achievements. Discover how each milestone has shaped our world and driven progress through the ages.</p>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0}} transition={{duration: 1, ease: 'anticipate', delay: 1}} viewport={{once: true}} className='relative overflow-hidden z-10 sm:col-span-2 bg-linear-to-b from-black to-black/0 backdrop-blur-sm px-5 py-4 rounded-2xl border-[0.4px] border-[#FFB800]'>
                    <img src="tshirts.svg" alt="" className='absolute z-10 right-0 bottom-0 max-h-full' />
                    <div className='relative z-20'>
                        <div className='font-sans text-white'>
                            <p className='text-[26px] max-2xl:text-[20px] font-bold leading-[120%] max-md:text-[16px] mb-2'>Show Your Passion</p>
                            <p className='text-[16px] max-2xl:text-[14px] font-light leading-[120%] max-md:text-[14px]'>Show your support through stylish merchandise.</p>
                        </div>
                        <motion.button whileHover={{ scale: 1.05 }} transition={{ duration: 0.1 }} className='mt-6 bg-[#FFB800] rounded-2xl px-4 py-2 font-grenze font-bold'>Merchandise</motion.button>
                    </div>
                </motion.div>

                <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0}} transition={{duration: 1, ease: 'anticipate', delay: 1}} viewport={{once: true}} className='relative z-10 sm:col-span-2 bg-linear-to-b from-black to-black/0 backdrop-blur-sm px-5 py-4 rounded-2xl border-[0.4px] border-[#FFB800] font-sans text-white'>
                    <h1 className='text-[26px] max-2xl:text-[20px] font-bold max-md:text-[16px] mb-2'>Be Part of the Journey</h1>
                    <p  className='text-[16px] max-2xl:text-[14px] font-light max-md:text-[14px] mb-2'>Connect with like-minded individuals. Share your thoughts, participate in discussions,</p>
                </motion.div>
            </div>
        </div>
    )
}

export default ExploreSection
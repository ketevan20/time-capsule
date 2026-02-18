'use client'
import React from 'react'
import { behanceIcon, facebookIcon, instagramIcon, spotifyIcon, twitterIcon } from '@/app/Icons/Icons'
import { motion, scale } from 'motion/react'

export const iconFunc = (icon: any) => {
    return (
        <motion.div whileHover={{scale: 1.1}} transition={{duration:0.2}} className='w-8 h-8 flex items-center justify-center bg-[rgba(255,184,0,1)] rounded-full xl:w-10 xl:h-10 max-md:w-6 max-md:h-6'>
            {icon}
        </motion.div>
    )
}
const SocialIcons = () => {
  return (
    <div className='flex gap-5 max-xl:gap-3 max-lg:gap-2'>
        <motion.div initial={{opacity: 0, y: '50%'}} whileInView={{opacity:1, y: 0}} transition={{duration:1}} viewport={{once: true}}>{iconFunc(twitterIcon)}</motion.div>
        <motion.div initial={{opacity: 0, y: '50%'}} whileInView={{opacity:1, y: 0}} transition={{duration:1, delay:0.2}} viewport={{once: true}}>{iconFunc(facebookIcon)}</motion.div>
        <motion.div initial={{opacity: 0, y: '50%'}} whileInView={{opacity:1, y: 0}} transition={{duration:1, delay:0.4}} viewport={{once: true}}>{iconFunc(instagramIcon)}</motion.div>
        <motion.div initial={{opacity: 0, y: '50%'}} whileInView={{opacity:1, y: 0}} transition={{duration:1, delay:0.6}} viewport={{once: true}}>{iconFunc(behanceIcon)}</motion.div>
        <motion.div initial={{opacity: 0, y: '50%'}} whileInView={{opacity:1, y: 0}} transition={{duration:1, delay:0.8}} viewport={{once: true}}>{iconFunc(spotifyIcon)}</motion.div>
    </div>
  )
}

export default SocialIcons
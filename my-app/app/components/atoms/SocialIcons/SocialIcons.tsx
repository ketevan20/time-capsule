'use client'
import React from 'react'
import { behanceIcon, facebookIcon, instagramIcon, spotifyIcon, twitterIcon } from '@/app/Icons/Icons'
import { motion, scale } from 'motion/react'

export const iconFunc = (icon: any) => {
    return (
        <motion.div whileHover={{scale: 1.1}} transition={{duration:0.2}} className='w-8 h-8 flex items-center justify-center bg-[rgba(255,184,0,1)] rounded-full xl:w-10 xl:h-10'>
            {icon}
        </motion.div>
    )
}
const SocialIcons = () => {
  return (
    <div className='flex gap-5 max-xl:gap-3'>
        {iconFunc(twitterIcon)}
        {iconFunc(facebookIcon)}
        {iconFunc(behanceIcon)}
        {iconFunc(spotifyIcon)}
        {iconFunc(instagramIcon)}
    </div>
  )
}

export default SocialIcons
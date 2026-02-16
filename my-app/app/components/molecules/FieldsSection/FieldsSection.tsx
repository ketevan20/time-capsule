'use client'
import { motion } from 'motion/react'
import React from 'react'

const FieldItem = ({item}: {item: string}) => {
    return (
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.1 }} className='cursor-pointer border-[0.4px] border-[rgba(255,184,0,1)] rounded-sm bg-linear-to-b from-black to-black/0 backdrop-blur-sm p-2 font-sans text-center text-[20px] max-xl:text-[16px] opacity-60 text-[#FFFFFF]'>
            {item}
        </motion.div>
    )
}

const FieldsSection = ({ref}: any) => {
    return (
        <div ref={ref} className='w-full scroll-mt-24'>
            <motion.h1 initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0}} transition={{duration: 1, ease: 'anticipate'}} viewport={{once: true}} className='text-[64px] max-xl:text-[32px] font-black text-white mb-5'>Choose a field</motion.h1>
            <div className='grid grid-cols-3 gap-5 max-xl:gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                <motion.div initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y:0}} transition={{duration: 1, ease: 'anticipate'}} viewport={{once: true}}><FieldItem item='Science and Discovery'/></motion.div>
                <motion.div initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y:0}} transition={{duration: 1, ease: 'anticipate'}} viewport={{once: true}}><FieldItem item='Arts and Culture'/></motion.div>
                <motion.div initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y:0}} transition={{duration: 1, ease: 'anticipate'}} viewport={{once: true}}><FieldItem item='Medicine and Health'/></motion.div>
                <motion.div initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y:0}} transition={{duration: 1, ease: 'anticipate', delay: 0.4}} viewport={{once: true}}><FieldItem item='Technology and Invention'/></motion.div>
                <motion.div initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y:0}} transition={{duration: 1, ease: 'anticipate', delay: 0.4}} viewport={{once: true}}><FieldItem item='Social Progress and Governance'/></motion.div>
                <motion.div initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y:0}} transition={{duration: 1, ease: 'anticipate', delay: 0.4}} viewport={{once: true}}><FieldItem item='Exploration and Discovery'/></motion.div>
                <motion.div initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y:0}} transition={{duration: 1, ease: 'anticipate', delay: 0.8}} viewport={{once: true}}><FieldItem item='Innovation and Entrepreneurship'/></motion.div>
            </div>
        </div>
    )
}

export default FieldsSection
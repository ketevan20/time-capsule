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

const FieldsSection = () => {
    return (
        <div className='w-full'>
            <h1 className='text-[64px] max-xl:text-[32px] font-black text-white mb-5'>Choose a field</h1>
            <div className='grid grid-cols-3 gap-5 max-xl:gap-3'>
                <FieldItem item='Science and Discovery'/>
                <FieldItem item='Arts and Culture'/>
                <FieldItem item='Medicine and Health'/>
                <FieldItem item='Technology and Invention'/>
                <FieldItem item='Social Progress and Governance'/>
                <FieldItem item='Exploration and Discovery'/>
                <FieldItem item='Innovation and Entrepreneurship'/>

            </div>
        </div>
    )
}

export default FieldsSection
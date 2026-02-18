import { motion } from 'motion/react'
import React from 'react'

type ResourceCategoryProps = {
    icon: string,
    title: string,
    text: string
}

const ResourceCategory = ({icon, title, text}: ResourceCategoryProps) => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration:1}} viewport={{once: true}} className='max-w-63 flex flex-col text-center items-center gap-6'>
        <img src={icon} alt="" className='w-25 h-25'/>
        <div className='text-white'>
            <h3 className='mb-2 text-[16px] font-black opacity-90'>{title}</h3>
            <p className='text-[14px] font-light opacity-90'>{text}</p>
        </div>
    </motion.div>
  )
}

export default ResourceCategory
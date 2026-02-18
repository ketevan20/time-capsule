'use client'
import { motion } from 'motion/react'
import React from 'react'

type DocumenttaryItemProps = {
    title: string;
    subtitle: string;
    year: string;
    text: string;
}

const DocumentaryItem = ({ title, subtitle, year, text }: DocumenttaryItemProps) => {
    return (
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.1 }} className='relative w-full cursor-pointer border-[0.3px] border-[rgba(255,184,0,1)] rounded-2xl bg-linear-to-b from-black to-black/0 backdrop-blur-sm px-8 py-6 flex md:items-center gap-20 max-2xl:gap-10 justify-between  text-white max-md:flex-col'>
            <div className='flex flex-col justify-between flex-1 shrink-0'>
                <div>
                    <p className='opacity-33 text-[20px] max-2xl:text-[16px]'>{subtitle}</p>
                    <h1 className='text-[28px] font-black max-2xl:text-[24px]'>{title}</h1>
                </div>
                <p className='md:px-2 font-against opacity-33 text-[16px] max-2xl:text-[12px] mt-8 max-md:mt-4'>{year}</p>
            </div>
            <div className='flex flex-2'>
                <p className='font-sans font-thin text-[16px] max-2xl:text-[14px]'>{text}</p>
            </div>
            <img src="playButton.svg" alt="play button" className='max-w-5 max-h-5 absolute top-4 right-4'/>
        </motion.div>
    )
}

const DocumentarySection = ({ref}: any) => {
    return (
        <div ref={ref}>
            <motion.h1 initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x:0}} transition={{duration: 1, ease: 'anticipate'}} viewport={{once: true}} className='text-[64px] max-2xl:text-[32px] font-black text-white mb-5'>Choose a field</motion.h1>
            <div className='flex flex-col gap-16 max-md:gap-8'>
                <motion.div initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y:0}} transition={{duration: 1, ease: 'anticipate'}} viewport={{once: true}}><DocumentaryItem title='The Printing Press' subtitle='Technology and Inventions' year='Year 1440' text='The invention of the printing press in 1440 by Johannes Gutenberg revolutionized how knowledge was shared. For the first time, books and documents could be mass-produced, drastically reducing the cost of producing written material. This breakthrough sparked the rapid spread of ideas, accelerating the Renaissance, scientific advancements, and education across Europe, shaping the modern world.' /></motion.div>
                <motion.div initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y:0}} transition={{duration: 1, ease: 'anticipate', delay: 0.1}} viewport={{once: true}}><DocumentaryItem title='The Birth of Renaissance Art' subtitle='arts and culture' year='14th to 17th Century' text='The Renaissance was a pivotal period in European history, marking the transition from the Middle Ages to modernity. Spanning from the 14th to the 17th century, it was characterized by a revival of classical learning and wisdom, drawing inspiration from the art and culture of ancient Greece and Rome. This era witnessed an unprecedented flourishing of art, literature, science, and philosophy.' /></motion.div>
                <motion.div initial={{opacity: 0, y: -100}} whileInView={{opacity: 1, y:0}} transition={{duration: 1, ease: 'anticipate', delay: 0.2}} viewport={{once: true}}><DocumentaryItem title='The Discovery of Penicillin' subtitle='Medicine and Health' year='Year 1928' text="In 1928, Alexander Fleming discovered penicillin, the first true antibiotic, revolutionizing modern medicine. This breakthrough led to the development of treatments for bacterial infections that were once fatal, saving millions of lives and transforming healthcare forever. Penicillin's discovery marks one of the most important milestones in medical history." />            </motion.div>
            </div>
        </div>
    )
}

export default DocumentarySection
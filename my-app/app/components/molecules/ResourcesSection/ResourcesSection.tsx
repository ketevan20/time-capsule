import React from 'react'
import ResourceCategory from '../../atoms/ResourceCategory/ResourceCategory'

const ResourcesSection = () => {
  return (
    <div className='w-full'>
        <p className='text-center font-thin opacity-90 font-grenze text-[14px] max-2xl:text-[12px] text-[#FFFFFF]'>Delve into the most significant milestones in human history. Explore detailed articles and captivating videos that bring these achievements to life. Whether it's the marvels of ancient civilizations or the breakthroughs of modern times, discover how each epoch has shaped the world we live in today.</p>
        <div className='mt-20 flex items-center justify-around gap-6 max-md:flex-col'>
            <ResourceCategory icon={'/videos.svg'} title='Insightful Documentary Videos' text='Watch detailed and engaging videos that bring history and achievements to life.'/>
            <ResourceCategory icon='/audiobooks.svg' title='Audiobooks' text='Listen to narrated accounts of significant moments in history.' />
            <ResourceCategory icon='/texsts.svg' title='Readable Texts' text="Explore written records of humanity's greatest achievements." />

        </div>
    </div>
  )
}

export default ResourcesSection
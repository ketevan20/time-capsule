import React from 'react'
import ResourcesSection from '../ResourcesSection/ResourcesSection'
import ExploreSection from '../ExploreSection/ExploreSection'

const ContentSection = () => {
  return (
    <div className='w-full min-h-screen relative flex justify-center'>
        <img src="BG.svg" alt="background element" className='absolute z-99 left-0 max-h-[95%] top-[50%] -translate-y-[50%] -translate-x-[40%]'/>
        <div className='relative mt-25 z-100 w-[80%] max-w-325 flex flex-col gap-40'>
            <ResourcesSection />
            <ExploreSection />
        </div>
    </div>
  )
}

export default ContentSection
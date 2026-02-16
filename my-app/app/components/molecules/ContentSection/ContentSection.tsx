import React from 'react'
import ResourcesSection from '../ResourcesSection/ResourcesSection'
import ExploreSection from '../ExploreSection/ExploreSection'
import AboutSection from '../AboutSection/AboutSection'
import FieldsSection from '../FieldsSection/FieldsSection'
import DocumentarySection from '../DocumentarySection/DocumentarySection'
import { backgroundIcon } from '@/app/Icons/Icons'

const ContentSection = () => {
  return (
    <div className='w-full min-h-600 relative flex justify-center'>
        {/* <img src="BG.svg" alt="background element" className='absolute z-99 left-0 h-full max-h-[90%] object-contain top-[50%] -translate-y-[50%] -translate-x-[40%]'/> */}
        {backgroundIcon}
        <div className='relative py-25 z-100 w-[80%] max-w-325 flex flex-col gap-40'>
            <ResourcesSection />
            <ExploreSection />
            <AboutSection />
            <FieldsSection />
            <DocumentarySection />
        </div>
    </div>
  )
}

export default ContentSection
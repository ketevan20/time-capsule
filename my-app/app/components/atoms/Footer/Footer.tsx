import React from 'react'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import SocialIcons from '../SocialIcons/SocialIcons'

const Footer = ({ref, refs, scrollToSection}: any) => {
    return (
        <div ref={ref} className='relative z-100 bg-[rgba(125,90,0,1)] px-16 pt-8 pb-4 max-2xl:px-12 font-lato max-md:px-6 max-sm:px-4'>
            <img src="/earth.svg" alt="earth" className='absolute bottom-0 left-[50%] -translate-x-[50%] mix-blend-color-dodge max-md:h-[70%]' />
            <div className='relative z-20'>
                <div className='flex justify-between items-center max-sm:flex-col max-sm:gap-2'>
                    <button onClick={() => scrollToSection(refs.homeRef)} className='cursor-pointer'><Logo /></button>
                    <div className='max-sm:hidden'><NavBar refs={refs} scrollToSection={scrollToSection} /></div>
                    <SocialIcons />
                </div>
                <div className='w-full h-px bg-white my-4'></div>
                <p className='text-center text-white mt-6.5 text-[16px] max-2xl:text-[12px]'>© 2024 Time Capsule. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
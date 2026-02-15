import React from 'react'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import SocialIcons from '../SocialIcons/SocialIcons'

const Footer = () => {
    return (
        <div className='relative bg-[rgba(125,90,0,1)] px-16 pt-8 pb-4 max-xl:px-12 font-lato'>
            <img src="/earth.svg" alt="earth" className='absolute bottom-0 left-[50%] -translate-x-[50%] mix-blend-color-dodge' />
            <div className='relative z-20'>
                <div className='flex justify-between items-center'>
                    <Logo />
                    <NavBar />
                    <SocialIcons />
                </div>
                <div className='w-full h-px bg-white my-4'></div>
                <p className='text-center text-white mt-6.5 text-[16px] max-xl:text-[12px]'>© 2024 Time Capsule. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
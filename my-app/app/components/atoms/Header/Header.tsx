import React from 'react'
import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <div className='bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0.92)_35%,rgba(0,0,0,0)_100%)] flex justify-between items-center px-16 py-5 max-xl:px-12 font-lato font-normal'>
        <Logo />
        <div className='flex gap-11.25 text-[24px] max-xl:text-[16px] max-xl:gap-8'>
            <button className='hover:text-[rgba(255,184,0,1)] hover:underline'>Explore</button>
            <button className='hover:text-[rgba(255,184,0,1)] hover:underline'>About</button>
            <button className='hover:text-[rgba(255,184,0,1)] hover:underline'>Fields</button>
            <button className='hover:text-[rgba(255,184,0,1)] hover:underline'>Highlights</button>
            <button className='hover:text-[rgba(255,184,0,1)] hover:underline'>contact us</button>
        </div>
    </div>
  )
}

export default Header
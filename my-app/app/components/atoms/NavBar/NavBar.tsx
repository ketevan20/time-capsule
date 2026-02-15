import React from 'react'

const NavBar = () => {
    return (
        <div className='flex gap-11.25 text-[24px] max-xl:text-[16px] max-xl:gap-8 text-white'>
            <button className='hover:text-[rgba(255,184,0,1)] hover:underline'>Explore</button>
            <button className='hover:text-[rgba(255,184,0,1)] hover:underline'>About</button>
            <button className='hover:text-[rgba(255,184,0,1)] hover:underline'>Fields</button>
            <button className='hover:text-[rgba(255,184,0,1)] hover:underline'>Highlights</button>
            <button className='hover:text-[rgba(255,184,0,1)] hover:underline'>contact us</button>
        </div>
    )
}

export default NavBar
import React from 'react'

const NavBar = ({ scrollToSection, refs }: any) => {
    return (
        <div className='flex gap-11.25 text-[24px] max-2xl:text-[14px] max-2xl:gap-8 text-white max-md:flex-col max-lg:gap-4 max-md:gap-2'>
            <button onClick={() => scrollToSection(refs.exploreRef)} className='hover:text-[rgba(255,184,0,1)] hover:underline cursor-pointer'>Explore</button>
            <button onClick={() => scrollToSection(refs.aboutRef)} className='hover:text-[rgba(255,184,0,1)] hover:underline cursor-pointer'>About</button>
            <button onClick={() => scrollToSection(refs.fieldsRef)} className='hover:text-[rgba(255,184,0,1)] hover:underline cursor-pointer'>Fields</button>
            <button onClick={() => scrollToSection(refs.highlightsRef)} className='hover:text-[rgba(255,184,0,1)] hover:underline cursor-pointer'>Highlights</button>
            <button onClick={() => scrollToSection(refs.contactRef)} className='hover:text-[rgba(255,184,0,1)] hover:underline cursor-pointer'>contact us</button>
        </div>
    )
}

export default NavBar
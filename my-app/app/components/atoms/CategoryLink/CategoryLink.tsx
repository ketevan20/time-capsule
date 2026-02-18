import React from 'react'

const CategoryLink = () => {
    return (
        <div className='text-right text-[#FFFFFF] opacity-60 text-[16px] max-md:text-[12px] max-md:text-center flex flex-col max-md:gap-2'>
            <p className='hover:text-[#FFB800] underline cursor-pointer'>Science and Discovery</p>
            <p className='hover:text-[#FFB800] underline cursor-pointer'>Technology and Invention</p>
            <p className='hover:text-[#FFB800] underline cursor-pointer'>Arts and Culture</p>
            <p className='hover:text-[#FFB800] underline cursor-pointer'>Social Progress and Governance</p>
            <p className='hover:text-[#FFB800] underline cursor-pointer'>Medicine and Health</p>
            <p className='hover:text-[#FFB800] underline cursor-pointer'>Exploration and Discovery</p>
            <p className='hover:text-[#FFB800] underline cursor-pointer'>Innovation and Entrepreneurship</p>
        </div>
    )
}

export default CategoryLink
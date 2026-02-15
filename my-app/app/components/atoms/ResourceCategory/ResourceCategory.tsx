import React from 'react'

type ResourceCategoryProps = {
    icon: string,
    title: string,
    text: string
}

const ResourceCategory = ({icon, title, text}: ResourceCategoryProps) => {
  return (
    <div className='max-w-63 flex flex-col text-center items-center gap-6'>
        <img src={icon} alt="" className='w-25 h-25'/>
        <div className='text-white'>
            <h3 className='mb-2 text-[16px] font-black opacity-90'>{title}</h3>
            <p className='text-[14px] font-light opacity-90'>{text}</p>
        </div>
    </div>
  )
}

export default ResourceCategory
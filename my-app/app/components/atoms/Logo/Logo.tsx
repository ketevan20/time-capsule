import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <img src="/logo.svg" alt="Logo" className='w-[155px] h-[87px] max-lg:w-25 max-lg:h-25 max-md:w-20 max-md:h-20'/>
        {/* <Image src="/logo.svg" alt="Logo" width={155} height={87} /> */}
    </div>
  )
}

export default Logo
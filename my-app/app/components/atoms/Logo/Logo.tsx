import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image src="/logo.svg" alt="Logo" width={155} height={87} />
    </div>
  )
}

export default Logo
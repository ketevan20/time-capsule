import React from 'react'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'

const Header = () => {
  return (
    <div className='bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0.92)_35%,rgba(0,0,0,0)_100%)] flex justify-between items-center px-16 py-5 max-xl:px-12 font-lato font-normal'>
        <Logo />
        <NavBar />
    </div>
  )
}

export default Header
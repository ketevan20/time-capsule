import React from 'react'
import Header from '../../atoms/Header/Header'
import Footer from '../../atoms/Footer/Footer'
import HeroSection from '../../molecules/HeroSection/HeroSection'
import ContentSection from '../../molecules/ContentSection/ContentSection'

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <img src="/clouds.svg" alt="clouds" className='h-100 w-full absolute left-0 right-0 bottom-0 translate-y-[40%]' />
      <img src="/shadow.svg" alt="yellow-shadow" className='absolute top-screen -translate-y-[50%]' />
      <ContentSection />
      <Footer />
    </div>
  )
}

export default Home
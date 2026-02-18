'use client'
import React, { useRef } from 'react'
import Header from '../../atoms/Header/Header'
import Footer from '../../atoms/Footer/Footer'
import HeroSection from '../../molecules/HeroSection/HeroSection'
import ContentSection from '../../molecules/ContentSection/ContentSection'

const Home = () => {
  const aboutRef = useRef(null);
  const exploreRef = useRef(null);
  const contactRef = useRef(null);
  const fieldsRef = useRef(null);
  const highlightsRef = useRef(null);
  const homeRef = useRef(null);

   const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} refs={{ aboutRef, exploreRef, contactRef, fieldsRef, highlightsRef, homeRef}} />
      <HeroSection ref={homeRef}/>
      <img src="/clouds.svg" alt="clouds" className='w-full absolute left-0 right-0 bottom-0 translate-y-[40%] max-sm:translate-y-[60%]' />
      <img src="/shadow.svg" alt="yellow-shadow" className='absolute top-screen -translate-y-[50%]' />
      <ContentSection refs={{ aboutRef, exploreRef, contactRef, fieldsRef, highlightsRef }} />
      <Footer scrollToSection={scrollToSection} refs={{ aboutRef, exploreRef, contactRef, fieldsRef, highlightsRef, homeRef }} ref={contactRef}/>
    </div>
  )
}

export default Home
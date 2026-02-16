import React, { useEffect, useRef, useState } from 'react'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Header = ({ scrollToSection, refs }: any) => {
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) setIsMenuOpen(true);

    const handleScroll = () => {
      if (window.innerWidth < 768) return;

      setIsVisible(false);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div initial={{ y: '-100%' }} animate={{ y: isVisible ? 0 : "-100%" }} transition={{ duration: 0.5, ease: "easeInOut" }} className='fixed z-300 w-full bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0.92)_35%,rgba(0,0,0,0)_100%)] flex justify-between items-center px-16 py-5 max-xl:px-12 font-lato font-normal max-md:px-6 max-sm:px-4 max-sm:py-0'>
      <button onClick={() => scrollToSection(refs.homeRef)} className='cursor-pointer'><Logo /></button>
      <div className='hidden md:block'><NavBar scrollToSection={scrollToSection} refs={refs} /></div>
      <div className='absolute top-4 right-4 z-400 block md:hidden'>
        <button onClick={() => { setIsOpen(!isOpen); setIsMenuOpen(!isMenuOpen) }} className='text-white'>{!isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
      </div>

      {
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut", type: 'tween' }}
              className='absolute min-h-screen w-[50%] flex items-center justify-center right-0 top-0 bottom-0 bg-linear-to-b from-black to-black/0 backdrop-blur-sm'
            >
              <NavBar scrollToSection={scrollToSection} refs={refs} />
            </motion.div>
          )}
        </AnimatePresence>
      }
    </motion.div>
  )
}

export default Header
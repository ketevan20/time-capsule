import React, { useEffect, useRef, useState } from 'react'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import CategoryLink from '../CategoryLink/CategoryLink';

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
    <motion.div initial={{ y: '-100%' }} animate={{ y: isVisible ? 0 : "-100%" }} transition={{ duration: 0.5, ease: "easeInOut" }} className='fixed z-300 w-full bg-[linear-gradient(180deg,#000000_0%,rgba(0,0,0,0.92)_35%,rgba(0,0,0,0)_100%)] flex justify-between items-center px-16 py-5 max-2xl:px-6 max-2xl:py-1 font-sans font-normal max-md:px-6 max-sm:px-4 max-sm:py-0'>
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
              transition={{ duration: 0.5, ease: "easeInOut", type: "tween" }}
              className='absolute min-h-screen w-[50%] flex flex-col items-center justify-around right-0 top-0 bottom-0 
                 bg-white/3 backdrop-blur-2xl backdrop-saturate-180 
                 border-l border-[#FFB800]/40 
                 shadow-[-15px_0_30px_-10px_rgba(255,184,0,0.15)]'
            >
              <div className="absolute inset-y-0 left-0 w-0.5 bg-linear-to-b from-transparent via-[#FFB800]/60 to-transparent" />

              <div className="absolute inset-0 bg-radial-gradient from-[#FFB800]/5 via-blue-500/2 to-transparent pointer-events-none" />

              <NavBar scrollToSection={scrollToSection} refs={refs} />
              <div className='w-[80%] h-px bg-[#FFFFFF]'></div>
              <CategoryLink />
            </motion.div>
          )}
        </AnimatePresence>
      }
    </motion.div>
  )
}

export default Header
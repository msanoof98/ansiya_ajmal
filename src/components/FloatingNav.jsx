import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation, CalendarPlus, Sparkles } from 'lucide-react'

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false)
  const [monogramClicked, setMonogramClicked] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMonogramClick = (e) => {
    e.preventDefault()
    setMonogramClicked(true)
    setTimeout(() => setMonogramClicked(false), 2400)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-4 px-6 sm:px-12 flex items-center justify-between ${
        scrolled
          ? 'bg-[#FFFDF9]/90 backdrop-blur-xl border-b border-[#C5A059]/30 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      {/* Brand Monogram with Easter Egg Tap */}
      <button 
        onClick={handleMonogramClick}
        className="flex items-center gap-3 group text-left cursor-pointer relative"
        title="Ansiya & Ajmal Wedding Celebration"
      >
        <div className="w-8 h-8 rounded-full border border-[#C5A059]/60 flex items-center justify-center font-serif text-sm text-[#C5A059] group-hover:bg-[#C5A059]/15 group-hover:scale-105 transition-all">
          A
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-lg sm:text-xl text-[#2C221B] font-light tracking-widest group-hover:text-[#C5A059] transition-colors">
            Ansiya &amp; Ajmal
          </span>
          <span className="font-sans text-[8px] uppercase tracking-[0.25em] text-[#A37F3B]">
            8 Rabi' I 1448 AH • 19 Sept 2026
          </span>
        </div>

        {/* Delight Tooltip on Monogram Click */}
        <AnimatePresence>
          {monogramClicked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -5 }}
              className="absolute left-0 top-full mt-2 bg-[#2C221B] text-[#FFFDF9] px-3 py-1.5 rounded-xl text-[10px] whitespace-nowrap shadow-xl border border-[#C5A059]/40 flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span>Nikkah Mubarak • September 19, 2026</span>
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Navigation Links */}
      <nav className="flex items-center gap-5 sm:gap-7 text-[11px] font-cinzel uppercase tracking-[0.2em] text-[#54463C]">
        <a
          href="https://maps.app.goo.gl/ioLsTzmLjpPHE2y96?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#2C221B] transition-colors flex items-center gap-1.5 group"
        >
          <span>Location</span>
          <Navigation className="w-3 h-3 text-[#C5A059] group-hover:rotate-45 transition-transform" />
        </a>
        <a
          href="#ceremony"
          className="py-2 px-5 rounded-full bg-[#2C221B] text-[#FFFDF9] text-[10px] tracking-[0.2em] font-medium hover:bg-[#43352A] transition-all shadow-sm flex items-center gap-1.5 group"
        >
          <CalendarPlus className="w-3 h-3 text-[#C5A059] group-hover:scale-110 transition-transform" />
          <span>Add To Calendar</span>
        </a>
      </nav>
    </motion.header>
  )
}

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation, CalendarPlus } from 'lucide-react'

export default function FloatingNav() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Only reveal floating nav when user has scrolled past the top hero section
      setVisible(window.scrollY > 180)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-40 py-3 px-4 sm:px-10 flex items-center justify-between bg-[#FFFDF9]/95 backdrop-blur-xl border-b border-[#C5A059]/30 shadow-md shadow-[#C5A059]/5"
        >
          {/* Brand Monogram */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C5A059]/60 flex items-center justify-center font-serif text-xs sm:text-sm text-[#C5A059] group-hover:bg-[#C5A059]/15 transition-all">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg text-[#2C221B] font-light tracking-wide group-hover:text-[#C5A059] transition-colors">
                Ansiya &amp; Ajmal
              </span>
              <span className="hidden sm:inline font-sans text-[8px] uppercase tracking-[0.2em] text-[#A37F3B]">
                8 Rabi' I 1448 AH • 19 Sept 2026
              </span>
            </div>
          </a>

          {/* Navigation Actions */}
          <nav className="flex items-center gap-3 sm:gap-6 text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.16em] text-[#54463C]">
            <a
              href="https://maps.app.goo.gl/ioLsTzmLjpPHE2y96?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2C221B] transition-colors flex items-center gap-1 py-1.5 px-2.5 rounded-lg hover:bg-[#F6F1E8]"
            >
              <span>Location</span>
              <Navigation className="w-3 h-3 text-[#C5A059]" />
            </a>
            <a
              href="#ceremony"
              className="py-2 px-3.5 sm:px-5 rounded-full bg-[#2C221B] text-[#FFFDF9] text-[9px] sm:text-[10px] tracking-[0.16em] font-medium hover:bg-[#43352A] transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap"
            >
              <CalendarPlus className="w-3 h-3 text-[#C5A059]" />
              <span>Add To Calendar</span>
            </a>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

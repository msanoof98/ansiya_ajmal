import React from 'react'
import { motion } from 'framer-motion'

export default function InitialLoader() {
  return (
    <motion.div
      key="initial-loader"
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%',
        transition: {
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1], // Cinematic upward curtain lift
        }
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F6F1E8] select-none overflow-hidden"
    >
      {/* Warm Ambient Radial Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1.2 }}
        transition={{ duration: 2.0, ease: 'easeOut' }}
        className="absolute w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-[#E8D7BE]/50 via-[#F5EBDD]/60 to-transparent blur-3xl pointer-events-none"
      />

      {/* Monogram Frame with Islamic Arch / Floral Medallion Details */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{
          duration: 1.5,
          ease: [0.25, 1, 0.5, 1], // Slow, elegant ease
        }}
        className="relative flex flex-col items-center justify-center px-10 py-10 sm:px-16 sm:py-14 border border-[#C5A059]/40 rounded-[40px] bg-[#FFFDF9]/90 backdrop-blur-xl shadow-2xl shadow-[#C5A059]/10"
      >
        {/* Arabic Bismillah Inscription */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ delay: 0.3, duration: 1.0 }}
          className="font-arabic text-xl sm:text-2xl text-[#C5A059] mb-3 tracking-wide"
          dir="rtl"
          lang="ar"
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </motion.div>

        {/* Monogram Initials "A & A" */}
        <div className="text-center my-1">
          <div className="font-serif text-5xl sm:text-7xl md:text-8xl font-light tracking-[0.18em] text-[#2C221B] pl-2 sm:pl-3">
            A <span className="text-[#C5A059] font-normal italic font-serif text-4xl sm:text-6xl md:text-7xl">&amp;</span> A
          </div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ delay: 0.6, duration: 1.0 }}
            className="mt-3 font-cinzel text-[10px] sm:text-xs tracking-widest-luxury uppercase text-[#7A6B60] font-medium"
          >
            The Nikkah Celebration
          </motion.div>
        </div>

        {/* Delicate Floral Vine Accent */}
        <div className="w-12 h-4 mt-3 flex items-center justify-center text-[#C5A059]">
          <svg viewBox="0 0 100 20" fill="currentColor" className="w-full h-full opacity-75">
            <path d="M50,10 C40,5 25,5 10,10 C5,12 0,10 0,10 C15,7 30,7 50,10 Z" />
            <path d="M50,10 C60,5 75,5 90,10 C95,12 100,10 100,10 C85,7 70,7 50,10 Z" />
            <circle cx="50" cy="10" r="2.5" />
          </svg>
        </div>
      </motion.div>

      {/* Gregorian & Hijri Dates Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-10 font-sans text-xs tracking-[0.22em] uppercase text-[#A37F3B] text-center font-medium"
      >
        <span>8 Rabi' al-Awwal 1448 AH</span>
        <span className="mx-2 opacity-50">•</span>
        <span>19 September 2026</span>
      </motion.div>
    </motion.div>
  )
}

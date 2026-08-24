import React from 'react'
import { motion } from 'framer-motion'

export default function InitialLoader({ onDismiss }) {
  return (
    <motion.div
      key="initial-loader"
      initial={{ y: 0 }}
      exit={{ 
        y: '-100%',
        transition: {
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1], // Crisp upward curtain lift
        }
      }}
      onClick={onDismiss}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F6F1E8] select-none overflow-hidden cursor-pointer"
    >
      {/* Warm Ambient Glow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.7, scale: 1.15 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="absolute w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-gradient-to-tr from-[#E8D7BE]/60 via-[#F5EBDD]/70 to-transparent blur-2xl pointer-events-none"
      />

      {/* Monogram Frame with Arch & Floral Details */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="relative flex flex-col items-center justify-center px-8 py-8 sm:px-14 sm:py-12 border border-[#C5A059]/45 rounded-[36px] bg-[#FFFDF9]/90 backdrop-blur-md shadow-xl"
      >
        {/* Arabic Bismillah Inscription */}
        <div
          className="font-arabic text-lg sm:text-2xl text-[#C5A059] mb-2 tracking-wide text-center"
          dir="rtl"
          lang="ar"
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </div>

        {/* Monogram Initials "A & A" */}
        <div className="text-center my-1">
          <div className="font-serif text-4xl sm:text-7xl font-light tracking-[0.16em] text-[#2C221B] pl-2">
            A <span className="text-[#C5A059] font-normal italic font-serif text-3xl sm:text-6xl">&amp;</span> A
          </div>

          <div className="mt-2 font-sans text-[9px] sm:text-[11px] tracking-widest-luxury uppercase text-[#7A6B60] font-medium">
            The Nikkah Celebration
          </div>
        </div>

        {/* Delicate Floral Vine Accent */}
        <div className="w-10 h-3 mt-2 flex items-center justify-center text-[#C5A059]">
          <svg viewBox="0 0 100 20" fill="currentColor" className="w-full h-full opacity-80">
            <path d="M50,10 C40,5 25,5 10,10 C5,12 0,10 0,10 C15,7 30,7 50,10 Z" />
            <path d="M50,10 C60,5 75,5 90,10 C95,12 100,10 100,10 C85,7 70,7 50,10 Z" />
            <circle cx="50" cy="10" r="2.5" />
          </svg>
        </div>
      </motion.div>

      {/* Gregorian & Hijri Dates Footer */}
      <div className="absolute bottom-8 font-sans text-[11px] tracking-[0.2em] uppercase text-[#A37F3B] text-center font-medium">
        <span>8 Rabi' I 1448 AH</span>
        <span className="mx-2 opacity-50">•</span>
        <span>19 Sept 2026</span>
      </div>
    </motion.div>
  )
}

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Moon } from 'lucide-react'

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Wedding Date: Saturday, September 19, 2026, 11:00 AM IST
    const targetDate = new Date('2026-09-19T11:00:00+05:30').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-between px-4 sm:px-6 pt-10 sm:pt-20 pb-8 sm:pb-12 overflow-hidden">
      
      {/* Top Islamic Calligraphy & Bismillah Medallion */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-xl mx-auto"
      >
        {/* Ornate Arch Frame for Bismillah */}
        <div className="px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full border border-[#C5A059]/40 bg-[#FFFDF9]/90 backdrop-blur-md shadow-sm flex items-center justify-center">
          <span 
            className="font-arabic text-lg sm:text-2xl md:text-3xl text-[#C5A059] tracking-wide leading-relaxed" 
            dir="rtl"
            lang="ar"
          >
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </span>
        </div>

        {/* Quranic Verse on Marriage */}
        <div className="mt-3.5 sm:mt-5 px-2 sm:px-4">
          <p 
            className="font-arabic text-sm sm:text-base md:text-lg text-[#54463C] leading-loose" 
            dir="rtl"
            lang="ar"
          >
            « وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً »
          </p>
          <p className="font-serif italic text-xs sm:text-[13px] text-[#7A6B60] mt-1 leading-relaxed max-w-md mx-auto">
            “And of His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them; and He placed between you affection and mercy.”
          </p>
          <p className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#A37F3B] mt-1 font-semibold">
            Surah Ar-Rum • 30:21
          </p>
        </div>
      </motion.div>

      {/* Central Couple Display */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center my-3 sm:my-6">
        
        {/* Pretitle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-2 sm:gap-3 font-cinzel text-[9px] sm:text-xs uppercase tracking-[0.22em] text-[#A37F3B] font-semibold mb-1.5 sm:mb-3"
        >
          <span className="w-5 sm:w-8 h-px bg-[#C5A059]/40" />
          <span>The Nikkah Celebration</span>
          <span className="w-5 sm:w-8 h-px bg-[#C5A059]/40" />
        </motion.div>

        {/* Upward Mask Stagger Reveal for Couple's Names */}
        <div className="overflow-hidden py-1 px-2 sm:px-4">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.4,
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-serif font-light text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-[#2C221B] tracking-tight leading-[1.08]"
          >
            Ansiya <span className="font-serif italic font-normal text-[#C5A059] text-3xl sm:text-6xl md:text-7xl lg:text-8xl px-1">&amp;</span> Ajmal
          </motion.h1>
        </div>

        {/* Dual Calendar Badge: Georgian + Hijri */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-3.5 sm:mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-sans tracking-[0.14em] uppercase"
        >
          <span className="flex items-center gap-1.5 text-[#A37F3B] font-semibold bg-[#FFFDF9]/95 px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 shadow-sm">
            <Moon className="w-3.5 h-3.5 text-[#C5A059]" />
            8 Rabi' al-Awwal 1448 AH
          </span>
          <span className="text-[#C5A059] hidden xs:inline">•</span>
          <span className="flex items-center text-[#2C221B] font-medium bg-[#FFFDF9]/95 px-3.5 py-1.5 rounded-full border border-[#C5A059]/40 shadow-sm">
            Saturday, Sept 19, 2026
          </span>
        </motion.div>

        {/* Typographic Luxury Countdown Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#FFFDF9]/80 border border-[#C5A059]/35 backdrop-blur-md inline-flex items-center gap-2 sm:gap-4 text-xs font-serif text-[#2C221B] shadow-sm"
        >
          <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.18em] text-[#A37F3B] font-bold">
            Countdown:
          </span>
          <div className="flex items-center gap-1.5 sm:gap-3 text-xs sm:text-base font-light">
            <span><strong className="font-normal font-serif text-[#C5A059] text-sm sm:text-lg">{timeLeft.days}</strong> <span className="text-[9px] sm:text-[10px] uppercase font-sans text-[#7A6B60]">Days</span></span>
            <span className="text-[#C5A059]/50">•</span>
            <span><strong className="font-normal font-serif text-[#C5A059] text-sm sm:text-lg">{String(timeLeft.hours).padStart(2, '0')}</strong> <span className="text-[9px] sm:text-[10px] uppercase font-sans text-[#7A6B60]">Hrs</span></span>
            <span className="text-[#C5A059]/50">•</span>
            <span><strong className="font-normal font-serif text-[#C5A059] text-sm sm:text-lg">{String(timeLeft.minutes).padStart(2, '0')}</strong> <span className="text-[9px] sm:text-[10px] uppercase font-sans text-[#7A6B60]">Mins</span></span>
            <span className="text-[#C5A059]/50">•</span>
            <span><strong className="font-normal font-serif text-[#C5A059] text-sm sm:text-lg">{String(timeLeft.seconds).padStart(2, '0')}</strong> <span className="text-[9px] sm:text-[10px] uppercase font-sans text-[#7A6B60]">Secs</span></span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Cue */}
      <motion.a
        href="#ceremony"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#7A6B60] hover:text-[#2C221B] transition-colors mt-2 group cursor-pointer"
        aria-label="Scroll to ceremony details"
      >
        <span>View Ceremony &amp; Directions</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-1"
        >
          <ChevronDown className="w-3.5 h-3.5 text-[#C5A059] group-hover:text-[#2C221B] transition-colors" />
        </motion.div>
      </motion.a>
    </section>
  )
}

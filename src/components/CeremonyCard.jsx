import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Calendar, Clock, MapPin, Navigation, CalendarPlus, ExternalLink } from 'lucide-react'

// Magnetic Button Component (21st.dev inspired with warm gold hover)
function MagneticButton({ children, href, onClick, className = '' }) {
  const buttonRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distanceX = (e.clientX - centerX) * 0.22
    const distanceY = (e.clientY - centerY) * 0.22
    setPosition({ x: distanceX, y: distanceY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center cursor-pointer transition-all duration-300 ${className}`}
    >
      {children}
    </motion.a>
  )
}

export default function CeremonyCard() {
  const cardRef = useRef(null)
  const [foilPos, setFoilPos] = useState({ x: 50, y: 50, opacity: 0 })

  // 3D Motion Values & Springs for noticeable, buttery smooth tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg'])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)

    // Foil glare coordinates
    setFoilPos({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.65,
    })
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setFoilPos((prev) => ({ ...prev, opacity: 0 }))
  }

  // Generate Google Calendar Link
  const googleCalendarUrl = () => {
    const title = encodeURIComponent('Ansiya & Ajmal Wedding Ceremony')
    const details = encodeURIComponent(
      'Wedding Ceremony of Ansiya & Ajmal at Holiday Home (8 Rabi al-Awwal 1448 AH). Directions: https://maps.app.goo.gl/ioLsTzmLjpPHE2y96?g_st=aw'
    )
    const location = encodeURIComponent('Holiday Home')
    const start = '20260919T053000Z'
    const end = '20260919T103000Z'
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`
  }

  return (
    <section id="ceremony" className="relative py-14 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto [perspective:1200px]">
      
      {/* Central 3D Foil-Stitched Islamic Arch Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="glass-warm-luxury rounded-[36px] sm:rounded-[56px] p-6 sm:p-14 md:p-16 text-center relative overflow-hidden shadow-2xl border border-[#C5A059]/50 transition-shadow duration-300 hover:shadow-[#C5A059]/20"
      >
        {/* Dynamic Gold Foil Glare Overlay that shifts with cursor */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
          style={{
            opacity: foilPos.opacity,
            background: `radial-gradient(circle 350px at ${foilPos.x}% ${foilPos.y}%, rgba(212, 175, 55, 0.3) 0%, rgba(255, 248, 235, 0.2) 30%, transparent 70%)`,
          }}
        />

        {/* Ambient Radial Lighting Glows */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-[#E8D7BE]/40 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-t from-[#F5EBDD]/50 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Top Islamic Supplication Dua */}
        <div className="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-[#C5A059]/25 relative z-10 [transform:translateZ(20px)]">
          <span className="font-cinzel text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#A37F3B] font-semibold block">
            Islamic Wedding Supplication • دعاء الزواج
          </span>

          <h3 
            className="font-arabic text-2xl sm:text-4xl text-[#C5A059] leading-relaxed" 
            dir="rtl"
            lang="ar"
          >
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </h3>

          <p className="font-serif italic text-sm sm:text-base text-[#54463C] max-w-lg mx-auto leading-relaxed">
            “May Allah bless you, shower His blessings upon you, and unite you both in goodness.”
          </p>
        </div>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-12 relative z-10 [transform:translateZ(30px)]">
          
          {/* Date Block */}
          <div className="flex flex-col items-center p-5 sm:p-6 rounded-3xl bg-[#FFFDF9]/80 border border-[#C5A059]/30 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
            <div className="w-10 h-10 rounded-full bg-[#EFE8DC] flex items-center justify-center text-[#C5A059] mb-2.5">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#7A6B60] font-semibold">
              The Date
            </span>
            <h4 className="font-serif text-2xl text-[#2C221B] font-light mt-1">
              Saturday
            </h4>
            <p className="font-serif text-lg text-[#C5A059] italic mt-0.5">
              September 19, 2026
            </p>
            <span 
              className="text-[11px] text-[#A37F3B] font-semibold font-arabic mt-1"
              lang="ar"
            >
              ٨ ربيع الأول ١٤٤٨ هـ
            </span>
          </div>

          {/* Time Block */}
          <div className="flex flex-col items-center p-5 sm:p-6 rounded-3xl bg-[#FFFDF9]/80 border border-[#C5A059]/30 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
            <div className="w-10 h-10 rounded-full bg-[#EFE8DC] flex items-center justify-center text-[#C5A059] mb-2.5">
              <Clock className="w-5 h-5" />
            </div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#7A6B60] font-semibold">
              The Time
            </span>
            <h4 className="font-serif text-2xl text-[#2C221B] font-light mt-1">
              11:00 AM
            </h4>
            <p className="font-sans text-xs text-[#54463C] mt-1">
              Wedding Ceremony
            </p>
            <span className="text-[11px] text-[#7A6B60] mt-1 font-sans font-medium">
              Insha'Allah
            </span>
          </div>

          {/* Venue Block */}
          <div className="flex flex-col items-center p-5 sm:p-6 rounded-3xl bg-[#FFFDF9]/80 border border-[#C5A059]/30 shadow-sm transition-transform duration-300 hover:scale-[1.02]">
            <div className="w-10 h-10 rounded-full bg-[#EFE8DC] flex items-center justify-center text-[#C5A059] mb-2.5">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#7A6B60] font-semibold">
              The Venue
            </span>
            <h4 className="font-serif text-2xl text-[#2C221B] font-light mt-1">
              Holiday Home
            </h4>
            <p className="font-sans text-xs text-[#54463C] mt-1">
              An intimate sanctuary
            </p>
            <span className="text-[11px] text-[#A37F3B] mt-1 font-medium">
              Celebration of Joy &amp; Faith
            </span>
          </div>

        </div>

        {/* Primary Action Buttons: Get Directions & Add to Calendar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-lg mx-auto relative z-10 [transform:translateZ(40px)]">
          
          {/* 21st.dev Magnetic Get Directions Button */}
          <MagneticButton
            href="https://maps.app.goo.gl/ioLsTzmLjpPHE2y96?g_st=aw"
            className="w-full sm:flex-1 min-h-[50px] py-4 px-7 rounded-full bg-gradient-to-r from-[#C5A059] to-[#D4AF37] text-[#1D1611] text-xs uppercase tracking-[0.22em] font-bold hover:brightness-110 shadow-lg shadow-[#C5A059]/25 transition-all duration-300 group gap-2.5"
          >
            <Navigation className="w-4 h-4 text-[#1D1611] group-hover:rotate-45 transition-transform duration-300" />
            <span>Get Directions</span>
          </MagneticButton>

          {/* Direct Google Calendar Button */}
          <a
            href={googleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 min-h-[50px] py-4 px-7 rounded-full bg-[#2C221B] text-[#FFFDF9] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#43352A] shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <CalendarPlus className="w-4 h-4 text-[#C5A059] group-hover:scale-110 transition-transform" />
            <span>Add To Calendar</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]/70" />
          </a>

        </div>

      </motion.div>

    </section>
  )
}

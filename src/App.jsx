import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import InitialLoader from './components/InitialLoader'
import FloatingNav from './components/FloatingNav'
import HeroSection from './components/HeroSection'
import CeremonyCard from './components/CeremonyCard'
import FloralBackground from './components/FloralBackground'
import Footer from './components/Footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 1.5s fade/scale + 1.0s hold = 2.5s before triggering upward exit slide
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-floral-ambient text-[#2C221B] font-sans antialiased overflow-x-hidden selection:bg-[#E8D7BE] selection:text-[#2C221B]">
      {/* Initial Loader with AnimatePresence for graceful exit */}
      <AnimatePresence mode="wait">
        {isLoading && <InitialLoader key="loader" />}
      </AnimatePresence>

      {/* Animated Floral Background & Floating Petals */}
      <FloralBackground />

      {/* Main Wedding Invitation Content */}
      <div className="relative z-10">
        <FloatingNav />
        <main>
          <HeroSection />
          <CeremonyCard />
        </main>
        <Footer />
      </div>
    </div>
  )
}

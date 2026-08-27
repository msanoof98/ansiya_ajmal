import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import InitialLoader from './components/InitialLoader'
import FloatingNav from './components/FloatingNav'
import HeroSection from './components/HeroSection'
import CeremonyCard from './components/CeremonyCard'
import FloralBackground from './components/FloralBackground'
import Footer from './components/Footer'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Snappy, elegant 1.1s initial loader for fast page performance
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-floral-ambient text-[#2C221B] font-sans antialiased overflow-x-hidden selection:bg-[#E8D7BE] selection:text-[#2C221B]">
      {/* Fast & Fluid Initial Loader */}
      <AnimatePresence mode="wait">
        {isLoading && <InitialLoader key="loader" onDismiss={() => setIsLoading(false)} />}
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

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  )
}

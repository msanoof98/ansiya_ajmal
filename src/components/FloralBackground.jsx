import React from 'react'
import { motion } from 'framer-motion'

export default function FloralBackground() {
  // Array of floating petals with different initial offsets and timings
  const petals = [
    { id: 1, left: '8%', delay: '0s', duration: '14s', size: 'w-4 h-6', className: 'animate-petal-1' },
    { id: 2, left: '22%', delay: '4s', duration: '18s', size: 'w-3 h-5', className: 'animate-petal-2' },
    { id: 3, left: '38%', delay: '2s', duration: '16s', size: 'w-5 h-7', className: 'animate-petal-3' },
    { id: 4, left: '55%', delay: '7s', duration: '15s', size: 'w-3 h-4', className: 'animate-petal-1' },
    { id: 5, left: '72%', delay: '5s', duration: '20s', size: 'w-4 h-6', className: 'animate-petal-2' },
    { id: 6, left: '88%', delay: '1s', duration: '17s', size: 'w-5 h-8', className: 'animate-petal-3' },
    { id: 7, left: '94%', delay: '9s', duration: '19s', size: 'w-3 h-5', className: 'animate-petal-1' },
    { id: 8, left: '4%', delay: '8s', duration: '16s', size: 'w-4 h-5', className: 'animate-petal-2' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* Top Left Animated Floral Branch */}
      <div className="absolute -top-6 -left-6 w-64 sm:w-80 md:w-96 text-[#C5A059]/35 origin-top-left animate-sway-slow">
        <svg viewBox="0 0 300 300" fill="currentColor" className="w-full h-full">
          {/* Main stem */}
          <path d="M0,0 C80,20 160,80 200,180 C210,210 220,250 210,290" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M50,15 C110,60 160,110 180,190" stroke="currentColor" strokeWidth="1.5" fill="none" />
          
          {/* Floral Petals & Leaves */}
          <path d="M120,50 C140,40 160,55 150,75 C140,95 115,80 120,50 Z" fill="currentColor" opacity="0.8" />
          <path d="M70,30 C90,20 110,35 100,55 C90,70 65,55 70,30 Z" fill="currentColor" opacity="0.7" />
          <path d="M160,100 C185,90 205,105 195,130 C185,150 155,135 160,100 Z" fill="currentColor" opacity="0.85" />
          <path d="M190,165 C215,155 235,175 220,200 C205,220 180,200 190,165 Z" fill="currentColor" opacity="0.8" />
          
          {/* Delicate Blossom Flowers */}
          <circle cx="135" cy="65" r="4" fill="#D4AF37" />
          <circle cx="178" cy="115" r="5" fill="#D4AF37" />
          <circle cx="205" cy="180" r="4.5" fill="#D4AF37" />
          <circle cx="85" cy="40" r="3.5" fill="#D4AF37" />

          {/* Secondary Delicate Leaves */}
          <path d="M40,60 C20,80 35,110 60,100 C80,90 70,60 40,60 Z" fill="currentColor" opacity="0.6" />
          <path d="M100,120 C80,145 95,175 125,160 C145,150 130,120 100,120 Z" fill="currentColor" opacity="0.65" />
        </svg>
      </div>

      {/* Top Right Animated Floral Branch */}
      <div className="absolute -top-6 -right-6 w-64 sm:w-80 md:w-96 text-[#C5A059]/35 origin-top-right animate-sway-reverse">
        <svg viewBox="0 0 300 300" fill="currentColor" className="w-full h-full transform -scale-x-100">
          <path d="M0,0 C80,20 160,80 200,180 C210,210 220,250 210,290" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M50,15 C110,60 160,110 180,190" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M120,50 C140,40 160,55 150,75 C140,95 115,80 120,50 Z" fill="currentColor" opacity="0.8" />
          <path d="M70,30 C90,20 110,35 100,55 C90,70 65,55 70,30 Z" fill="currentColor" opacity="0.7" />
          <path d="M160,100 C185,90 205,105 195,130 C185,150 155,135 160,100 Z" fill="currentColor" opacity="0.85" />
          <path d="M190,165 C215,155 235,175 220,200 C205,220 180,200 190,165 Z" fill="currentColor" opacity="0.8" />
          <circle cx="135" cy="65" r="4" fill="#D4AF37" />
          <circle cx="178" cy="115" r="5" fill="#D4AF37" />
          <circle cx="205" cy="180" r="4.5" fill="#D4AF37" />
        </svg>
      </div>

      {/* Bottom Left Subtle Floral Branch */}
      <div className="absolute -bottom-10 -left-10 w-72 sm:w-96 text-[#C5A059]/25 origin-bottom-left animate-sway-reverse">
        <svg viewBox="0 0 300 300" fill="currentColor" className="w-full h-full transform -scale-y-100">
          <path d="M0,0 C80,20 160,80 200,180 C210,210 220,250 210,290" stroke="currentColor" strokeWidth="1.8" fill="none" />
          <path d="M120,50 C140,40 160,55 150,75 C140,95 115,80 120,50 Z" fill="currentColor" opacity="0.7" />
          <path d="M160,100 C185,90 205,105 195,130 C185,150 155,135 160,100 Z" fill="currentColor" opacity="0.75" />
          <circle cx="135" cy="65" r="4" fill="#D4AF37" />
          <circle cx="178" cy="115" r="4" fill="#D4AF37" />
        </svg>
      </div>

      {/* Bottom Right Subtle Floral Branch */}
      <div className="absolute -bottom-10 -right-10 w-72 sm:w-96 text-[#C5A059]/25 origin-bottom-right animate-sway-slow">
        <svg viewBox="0 0 300 300" fill="currentColor" className="w-full h-full transform -scale-x-100 -scale-y-100">
          <path d="M0,0 C80,20 160,80 200,180 C210,210 220,250 210,290" stroke="currentColor" strokeWidth="1.8" fill="none" />
          <path d="M120,50 C140,40 160,55 150,75 C140,95 115,80 120,50 Z" fill="currentColor" opacity="0.7" />
          <path d="M160,100 C185,90 205,105 195,130 C185,150 155,135 160,100 Z" fill="currentColor" opacity="0.75" />
          <circle cx="135" cy="65" r="4" fill="#D4AF37" />
          <circle cx="178" cy="115" r="4" fill="#D4AF37" />
        </svg>
      </div>

      {/* Animated Floating Petals Cascade */}
      {petals.map((petal) => (
        <div
          key={petal.id}
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
          className={`absolute top-0 ${petal.size} ${petal.className}`}
        >
          <svg viewBox="0 0 30 40" fill="none" className="w-full h-full drop-shadow-sm">
            <path
              d="M15,0 C25,12 30,28 15,40 C0,28 5,12 15,0 Z"
              fill="url(#petalGoldGradient)"
              opacity="0.85"
            />
            <defs>
              <linearGradient id="petalGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FAF0DD" />
                <stop offset="60%" stopColor="#E5C78A" />
                <stop offset="100%" stopColor="#C5A059" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  )
}

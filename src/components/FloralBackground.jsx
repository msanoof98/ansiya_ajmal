import React from 'react'

export default function FloralBackground() {
  const petals = [
    { id: 1, left: '10%', delay: '0s', duration: '12s', size: 'w-3.5 h-5', className: 'animate-petal-1' },
    { id: 2, left: '30%', delay: '3s', duration: '15s', size: 'w-3 h-4', className: 'animate-petal-2' },
    { id: 3, left: '55%', delay: '1.5s', duration: '14s', size: 'w-4 h-6', className: 'animate-petal-3' },
    { id: 4, left: '75%', delay: '5s', duration: '16s', size: 'w-3 h-5', className: 'animate-petal-1' },
    { id: 5, left: '90%', delay: '2s', duration: '13s', size: 'w-3.5 h-5', className: 'animate-petal-2' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* Top Left Animated Floral Branch */}
      <div className="absolute -top-4 -left-4 w-44 sm:w-72 md:w-88 text-[#C5A059]/30 origin-top-left animate-sway-slow">
        <svg viewBox="0 0 300 300" fill="currentColor" className="w-full h-full">
          <path d="M0,0 C80,20 160,80 200,180 C210,210 220,250 210,290" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M120,50 C140,40 160,55 150,75 C140,95 115,80 120,50 Z" opacity="0.8" />
          <path d="M70,30 C90,20 110,35 100,55 C90,70 65,55 70,30 Z" opacity="0.7" />
          <path d="M160,100 C185,90 205,105 195,130 C185,150 155,135 160,100 Z" opacity="0.85" />
          <circle cx="135" cy="65" r="4" fill="#D4AF37" />
          <circle cx="178" cy="115" r="5" fill="#D4AF37" />
        </svg>
      </div>

      {/* Top Right Animated Floral Branch */}
      <div className="absolute -top-4 -right-4 w-44 sm:w-72 md:w-88 text-[#C5A059]/30 origin-top-right animate-sway-reverse">
        <svg viewBox="0 0 300 300" fill="currentColor" className="w-full h-full transform -scale-x-100">
          <path d="M0,0 C80,20 160,80 200,180 C210,210 220,250 210,290" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M120,50 C140,40 160,55 150,75 C140,95 115,80 120,50 Z" opacity="0.8" />
          <path d="M70,30 C90,20 110,35 100,55 C90,70 65,55 70,30 Z" opacity="0.7" />
          <path d="M160,100 C185,90 205,105 195,130 C185,150 155,135 160,100 Z" opacity="0.85" />
          <circle cx="135" cy="65" r="4" fill="#D4AF37" />
          <circle cx="178" cy="115" r="5" fill="#D4AF37" />
        </svg>
      </div>

      {/* Floating Petals Cascade */}
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
          <svg viewBox="0 0 30 40" fill="none" className="w-full h-full">
            <path
              d="M15,0 C25,12 30,28 15,40 C0,28 5,12 15,0 Z"
              fill="#D4AF37"
              opacity="0.55"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}

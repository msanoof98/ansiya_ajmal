import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Share2, Check, Moon } from 'lucide-react'

export default function Footer() {
  const [copied, setCopied] = useState(false)

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Ansiya & Ajmal Nikkah Invitation',
        text: 'You are cordially invited to celebrate the Nikkah & Wedding Ceremony of Ansiya & Ajmal on Saturday, September 19, 2026 (8 Rabi al-Awwal 1448 AH).',
        url: window.location.href,
      }).catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <footer className="relative py-16 px-6 border-t border-[#C5A059]/20 text-center bg-[#EFE8DC]/50 backdrop-blur-md">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        
        <h3 className="font-serif text-3xl sm:text-4xl text-[#2C221B] font-light">
          Ansiya <span className="text-[#C5A059] italic font-serif">&amp;</span> Ajmal
        </h3>

        <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#7A6B60] mt-2">
          8 Rabi' al-Awwal 1448 AH • Saturday, September 19, 2026 • Holiday Home
        </p>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="mt-6 inline-flex items-center gap-2 py-3 px-7 rounded-full border border-[#C5A059]/40 hover:border-[#C5A059] text-xs uppercase tracking-[0.2em] text-[#2C221B] hover:text-[#1D1611] transition-all bg-[#FFFDF9] hover:bg-[#F6F1E8] cursor-pointer shadow-sm hover:shadow-md"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Invitation Link Copied</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Share Invitation</span>
            </>
          )}
        </button>

        <div className="mt-12 pt-6 border-t border-[#C5A059]/15 w-full flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#7A6B60]">
          <span>With Prayers &amp; Gratitude</span>
          <span className="mt-2 sm:mt-0 flex items-center gap-1.5 text-[#A37F3B] font-medium">
            <Moon className="w-3 h-3 text-[#C5A059]" />
            Nikkah Mubarak
          </span>
        </div>
      </div>
    </footer>
  )
}

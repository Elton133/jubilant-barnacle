'use client'

import React from 'react'

export default function ReusableHero({ 
  title, 
  bluetitle,
  subtitle, 
  buttonText, 
  buttonOnClick 
}: any) {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#050A30] to-[#600FD7] py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight text-balance">
          {title}<br />{bluetitle && (
            <span className="text-[#9CD7FF]"> {bluetitle}</span>
          )}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
          {subtitle}
        </p>

        {/* Optional button */}
        {buttonText && buttonOnClick && (
          <button
            onClick={buttonOnClick}
            className="px-6 py-3 bg-white text-[#050A30] font-semibold rounded-lg hover:bg-gray-200 transition"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  )
}

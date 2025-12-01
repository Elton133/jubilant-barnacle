'use client'

import React from 'react'
import Link from 'next/link'

type Props = {
  title?: React.ReactNode
  bluetitle?: React.ReactNode
  subtitle?: React.ReactNode
  buttonText?: string
  buttonOnClick?: () => void
  buttonHref?: string
  background?: string
  showDecorations?: boolean
}

export default function ReusableHero({
  title,
  bluetitle,
  subtitle,
  buttonText,
  buttonOnClick,
  buttonHref,
  background,
  showDecorations = true,
}: Props) {
  const shouldRenderButton = Boolean(buttonText && (buttonOnClick || buttonHref))

  return (
    <div
      className={`
        relative w-full py-24 md:py-24 lg:py-32 overflow-hidden
        ${background || "bg-linear-to-r from-[#050A30] to-[#600FD7]"}
      `}
    >
      {/* Decorative background elements */}
      {showDecorations && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-7xl font-[Euclid-Circular-B-Bold] text-white mb-4 md:mb-6 leading-tight text-balance">
          {title}
          <br />
          {bluetitle && (
            <span className="text-[#9CD7FF]"> {bluetitle}</span>
          )}
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
          {subtitle}
        </p>

        {/* Optional button */}
        {shouldRenderButton && (
          <div>
            {buttonOnClick ? (
              <button
                onClick={buttonOnClick}
                className="px-6 py-3 bg-[#050A30] text-white font-semibold rounded-2xl transition hover:bg-[#F0F7FF] hover:text-[#050A30]"
              >
                {buttonText}
              </button>
            ) : (
              <Link href={buttonHref!} className="inline-block">
                <span className="px-6 py-3 bg-[#050A30] text-white font-semibold rounded-2xl transition inline-block hover:bg-[#F0F7FF] hover:text-[#050A30]">
                  {buttonText}
                </span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

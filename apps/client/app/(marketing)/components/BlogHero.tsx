'use client'

export default function BlogHero() {
  return (
    <div className="relative w-full bg-gradient-to-r from-purple-600 to-blue-500 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight text-balance">
          Event Planning Insights & Tips
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
          Expert advice, industry trends, and practical guides to help you create unforgettable events
        </p>
      </div>
    </div>
  )
}

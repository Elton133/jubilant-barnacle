'use client'

import { useEffect } from 'react'

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Bride',
      content: 'Found all event planners and vendors with perfect vendors.',
      rating: 5,
      image: '/testimonial-person.jpg'
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Groom',
      content: 'Loved working with vendors. Everything was seamless.',
      rating: 5,
      image: '/testimonial-person.jpg'
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Event Coordinator',
      content: 'The vendor selection and communication options are excellent.',
      rating: 5,
      image: '/testimonial-person.jpg'
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Event Coordinator',
      content: 'The vendor selection and communication options are excellent.',
      rating: 5,
      image: '/testimonial-person.jpg'
    }
  ]

  useEffect(() => {
    const carousel = document.querySelector('.testimonials-carousel')
    if (!carousel) return

    let scrollPosition = 0
    const cardWidth = 320 + 16 // card width + gap
    const speed = 0.5

    const animate = () => {
      scrollPosition += speed
      if (scrollPosition >= cardWidth * testimonials.length) {
        scrollPosition = 0
      }
      carousel.scrollLeft = scrollPosition
      requestAnimationFrame(animate)
    }

    animate()
  }, [testimonials.length])

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Our Testimonials</h2>
        
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div 
              className="testimonials-carousel flex gap-4 overflow-hidden scroll-smooth"
              style={{ scrollBehavior: 'smooth' }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-80 bg-gray-50 rounded-lg p-6 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image || "/placeholder.svg"} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full bg-gray-200 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm flex-1 mb-4">{testimonial.content}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">⭐</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import TestimonialsSlider from './TestimonialsSlider'

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Bride',
      content: 'Found all event planners and vendors with perfect vendors.',
      rating: 5,
      image: '/team.png'
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Groom',
      content: 'Loved working with vendors. Everything was seamless.',
      rating: 5,
      image: '/team.png'
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Event Coordinator',
      content: 'The vendor selection and communication options are excellent.',
      rating: 5,
      image: '/team.png'
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Event Coordinator',
      content: 'The vendor selection and communication options are excellent.',
      rating: 5,
      image: '/team.png'
    },
    {
      id: 5,
      name: 'Emily Davis',
      role: 'Event Coordinator',
      content: 'The vendor selection and communication options are excellent.',
      rating: 5,
      image: '/team.png'
    }
  ]

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Testimonials
        </h2>

        <TestimonialsSlider testimonials={testimonials} />
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { useState } from 'react'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="w-full py-8 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-center">
          <Image 
            src="/man.png" 
            alt="Newsletter signup"
            className=" h-auto"
            width={800}
            height={600}
          />
        </div>

        <div className="bg-blue-400 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sign Up For Our Newsletter</h2>
          
          <p className="text-gray-800 mb-8 text-sm">
            Join our community of planners and vendors for exclusive updates, event inspiration, and platform news.
          </p>
          
          <form 
            onSubmit={handleSubmit} 
            className="flex max-w-md mx-auto gap-3 bg-white p-2 rounded-xl shadow-sm border border-gray-200"
          >
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2 bg-transparent text-black placeholder-gray-500 focus:outline-none"
            />

            <button 
              type="submit"
              className="px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 active:scale-[0.98] transition"
            >
              Subscribe
            </button>
          </form>
          {submitted && (
            <p className="text-sm mt-4 text-gray-800">✓ Thank you for subscribing!</p>
          )}
        </div>
      </div>
    </section>
  )
}

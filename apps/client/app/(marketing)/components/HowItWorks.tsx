'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useIsMobile } from '../../../hooks/use-mobile'

type UserType = 'customers' | 'vendors'

interface AccordionItem {
  title: string
  content: string
}

const customerSteps: AccordionItem[] = [
  {
    title: 'Sign Up',
    content: 'Create your account and tell us about your event. Our platform makes it easy to get started in just a few minutes.',
  },
  {
    title: 'Get Approved',
    content: 'Our team reviews your event details to ensure quality and safety. Most approvals happen within 24 hours.',
  },
  {
    title: 'Get Discovered',
    content: 'Browse through our curated list of vendors and find the perfect match for your event needs.',
  },
]

const vendorSteps: AccordionItem[] = [
  {
    title: 'Sign Up',
    content: 'Create your vendor profile and showcase your services. Highlight your experience and unique offerings.',
  },
  {
    title: 'Get Approved',
    content: 'We verify your credentials and portfolio. Once approved, you\'re ready to connect with event planners.',
  },
  {
    title: 'Get Discovered',
    content: 'Your profile becomes visible to customers searching for vendors like you. Start receiving inquiries today.',
  },
]

const AccordionItem = ({
  item,
  isOpen,
  onToggle,
  isMobile,
}: {
  item: AccordionItem
  isOpen: boolean
  onToggle: () => void
  isMobile: boolean
}) => {
  return (
    <div
      className={`w-full max-w-2xl mx-auto rounded-lg bg-blue-50 transition-all duration-300 ${
        isOpen ? 'ring-2 ring-blue-200' : ''
      }`}
      onMouseEnter={() => !isMobile && onToggle()}
      onMouseLeave={() => !isMobile && onToggle()}
    >
      <button
        onClick={() => isMobile && onToggle()}
        className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-gray-900 hover:text-gray-700 transition-colors"
      >
        <span>{item.title}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-4 text-gray-700 border-t border-blue-100">
          {item.content}
        </div>
      )}
    </div>
  )
}

export function HowItWorks() {
  const [userType, setUserType] = useState<UserType>('customers')
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isMobile = useIsMobile()

  const steps = userType === 'customers' ? customerSteps : vendorSteps

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
          How It Works
        </h1>

        {/* Tab Toggle */}
        <div className="flex gap-2 bg-gray-100 p-1.5 rounded-full">
          <button
            onClick={() => {
              setUserType('customers')
              setOpenIndex(null)
            }}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              userType === 'customers'
                ? 'bg-gray-900 text-white'
                : 'bg-transparent text-gray-700 hover:text-gray-900'
            }`}
          >
            For Customers
          </button>
          <button
            onClick={() => {
              setUserType('vendors')
              setOpenIndex(null)
            }}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              userType === 'vendors'
                ? 'bg-gray-900 text-white'
                : 'bg-transparent text-gray-700 hover:text-gray-900'
            }`}
          >
            For Vendors
          </button>
        </div>

        {/* Accordions */}
        <div className="w-full flex flex-col gap-4">
          {steps.map((step, index) => (
            <AccordionItem
              key={index}
              item={step}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Search, Scale, Star, Leaf, MessageSquare, Settings } from 'lucide-react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import illuA from '../../../public/illuA.png'
import illuB from '../../../public/illuB.png'


gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin)

interface FlowStep {
  id: number
  icon: React.ReactNode
  title: string
  description: string
  side: 'left' | 'right'
}

const flowSteps: FlowStep[] = [
  {
    id: 1,
    icon: <Search className="w-12 h-12 text-blue-500" />,
    title: 'Create Your Vendor Profile',
    description:
      'Show off your brand. Add photos, packages, pricing, IG feed, reviews, and a short story about what makes your service stand out.',
    side: 'left'
  },
  {
    id: 2,
    icon: <Scale className="w-12 h-12 text-blue-500" />,
    title: 'Submit For Verification',
    description:
      'Approved vendors earn a "FEV Verified" badge, helping clients trust and book confidently.',
    side: 'right'
  },
  {
    id: 3,
    icon: <Star className="w-12 h-12 text-blue-500" />,
    title: 'Get Discovered By Event Planners',
    description:
      'Appear in category, location, and event type searches so the right clients easily find you.',
    side: 'left'
  },
  {
    id: 4,
    icon: <Leaf className="w-12 h-12 text-blue-500" />,
    title: 'Receive Inquiries & Bookings',
    description:
      'Clients can message you directly, request quotes, or book through your listing with instant notifications.',
    side: 'right'
  },
  {
    id: 5,
    icon: <MessageSquare className="w-12 h-12 text-blue-500" />,
    title: 'Build Credibility Through Reviews',
    description:
      'Each successful event boosts your reputation with verified reviews and ranking badges.',
    side: 'left'
  },
  {
    id: 6,
    icon: <Settings className="w-12 h-12 text-blue-500" />,
    title: 'Manage Everything Seamlessly',
    description:
      'Track leads, manage bookings, update your portfolio, and grow your presence — all in one dashboard.',
    side: 'right'
  }
]

export default function HowFevWorksForVendors() {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const lineRef = useRef<SVGPathElement | null>(null)
  const ballRef = useRef<SVGCircleElement | null>(null)

  useEffect(() => {
    const svg = svgRef.current
    const line = lineRef.current
    const ball = ballRef.current

    if (!svg || !line || !ball) return

    gsap.defaults({ ease: 'none' })

    const main = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: svg,
        scrub: 1.2,
        start: 'top center',
        end: 'bottom center',
        markers: false
      }
    })

    main.from('.theLine', { drawSVG: '0%' }, 0)

    main.to(
      '.ball01',
      {
        motionPath: {
          path: '.theLine',
          align: '.theLine',
          alignOrigin: [0.5, 0.5],
          autoRotate: false
        },
        duration: 1
      },
      0
    )

    // Highlight each step as the ball reaches it
    flowSteps.forEach((step) => {
      gsap.fromTo(
        `#step-${step.id}`,
        { opacity: 0.4, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          scrollTrigger: {
            trigger: `#step-${step.id}`,
            start: 'top 70%',
            end: 'bottom 60%',
            toggleActions: 'play reverse play reverse'
          }
        }
      )
    })
  }, [])

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto relative">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How FEV Works
            <br />
            For <span className="text-blue-500">Vendors</span>
          </h1>
        </div>

        {/* GSAP LINE (Desktop only) */}

        <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 z-10 overflow-visible">
          <svg
            ref={svgRef}
            id="svg-stage"
            width="12"
            height="1800"
            viewBox="0 0 12 1800"
            preserveAspectRatio="none"
            className="overflow-visible"
          >
            <path
              ref={lineRef}
              className="theLine"
              d="
                M 6 0
                Q 100 300 6 600
                Q -150 900 6 1200
                Q 50 1500 6 1800
              "
              stroke="#3b82f6"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />
            <circle
              className="ball01"
              ref={ballRef}
              r="12"
              cx="6"
              cy="0"
              fill="#3b82f6"
            />
          </svg>
        </div>


        {/* FLOW STEPS */}
        <div className="space-y-10 lg:space-y-5">
          {flowSteps.map((step, index) => (
            <motion.div
              id={`step-${step.id}`}
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`flex flex-col ${
                step.side === 'right'
                  ? 'lg:flex-row-reverse'
                  : 'lg:flex-row'
              } items-center gap-10`}
            >
              {/* ICON + TEXT */}
              <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left items-center lg:items-start">
                <div className="mb-6 bg-blue-50 p-6 rounded-full">
                  {step.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-700 leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>

              {/* IMAGES - Only show on steps 1 and 4 */}
              <div className="w-full lg:w-1/2">
                {step.id === 1 && (
                  <Image
                    src={illuA}
                    alt="Create Your Vendor Profile Illustration"
                    width={420}
                    height={420}
                    className="object-contain"
                  />
                )}
                {step.id === 4 && (
                  <Image
                    src={illuB}
                    alt="Receive Inquiries & Bookings Illustration"
                    width={420}
                    height={420}
                    className="object-contain"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow">
            Become A Vendor
          </button>
        </div>
      </div>
    </div>
  )
}

"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center flex-col">
      
      <Image
        src="/female-customer-places-items-counter 2.png"
        alt="find event vendor background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0  backdrop-blur-[3px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white"
      >
        <h1 className="text-4xl md:text-8xl mb-4 font-[Euclid-Circular-B-Bold]">
          Find The Perfect <br /><p className="text-[#9CD7FF]">Event Vendors</p> 
        </h1>

        <p className="text-md md:text-xl mb-6">
          Discover, compare and connect with trusted event vendors all in one platform.
        </p>

        <div className='flex gap-5 items-center justify-center'>
          <button className="px-6 py-3 bg-[#050A30] rounded-2xl text-white transition hover:bg-[#8A3AFF] hover:cursor-pointer border border-[#050A30] hover:border-[#F1F1F1]">
            Find Vendors
          </button>

          <button className="px-6 py-3 backdrop-blur-sm rounded-2xl border text-white hover:bg-white hover:text-[#050A30] hover:border-white hover:cursor-pointer transition">
            Join As Vendor
          </button>
        </div>
      </motion.div>

      {/* Bottom text */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-6">
        <span className="flex items-center bg-gradient-to-r from-[#9CD7FF] to-[#FFFFFF] bg-clip-text text-transparent">
          <Check size={16} />
          50+ Verified Vendors
        </span>

        <span className="flex items-center bg-gradient-to-r from-[#9CD7FF] to-[#FFFFFF] bg-clip-text text-transparent">
          <Check size={16} />
          200+ Reviews
        </span>

        <span className="flex items-center bg-gradient-to-r from-[#9CD7FF] to-[#FFFFFF] bg-clip-text text-transparent">
          <Check size={16} />
          100% Free to Browse
        </span>
      </div>
    </section>
  );
}

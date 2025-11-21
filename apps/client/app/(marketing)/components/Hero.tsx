"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

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

      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find The Perfect <br /> Event Vendors
        </h1>

        <p className="text-md md:text-xl mb-6">
          Discover, compare and connect with trusted event vendors all in one platform.
        </p>

        <div className='flex gap-5 items-center justify-center'>
          <button className="px-6 py-3 bg-[#050A30] rounded-lg text-white font-semibold hover:bg-gray-800 transition">
            Find Vendors
          </button>

          <button className="px-6 py-3 backdrop-blur-sm rounded-lg border text-white font-semibold hover:bg-gray-800 transition">
            Join As Vendor
          </button>
        </div>
      </motion.div>

      {/* Bottom text */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#9CD7FF] z-10 flex gap-6">
        <span>50+ Verified Vendors</span>
        <span>200+ Reviews</span>
        <span>100% Free to Browse</span>
      </div>

    </section>
  );
}

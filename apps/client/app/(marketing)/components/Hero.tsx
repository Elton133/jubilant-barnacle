"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';


export default function Hero() {
  return(
    <section className="relative h-[85vh] flex items-center justify-center text-center flex-col">
      <Image
        src="https://images.unsplash.com/photo-1762155784690-02f153971c45?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="find event vendor background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-black/40"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="relative z-10 text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find The Perfect <br /> Event Vendors</h1>
        <p className="text-lg md:text-2xl mb-6">Discover, compare and connect with trusted event vendors all in one platform.</p>
        <div className='flex gap-5 items-center justify-center'>
          <button className="px-6 py-3 bg-gray-900 rounded-full text-white font-semibold hover:bg-gray-800 transition">
          Find Vendors
        </button>
        <button className="px-6 py-3 bg-gray-900 rounded-full text-white font-semibold hover:bg-gray-800 transition">
          Join As Vendor
        </button>
        </div>
      </motion.div>
      
    </section>
  );
}

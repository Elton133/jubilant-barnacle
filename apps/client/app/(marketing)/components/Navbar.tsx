"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/fev logo white 3.png"


const navLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "How it works", href: "/how-it-works" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-4 md:px-8 py-5 backdrop-blur-lg  shadow-sm">
        {/* Left: Brand */}
        <div className="flex items-center gap-3">
          <Link href="/">
          <Image src={logo} width={150} height={100} alt="Logo" />
          </Link>
        </div>

        {/* Middle: Navigation (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-white hover:text-gray-300 transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b8b8b8] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* Sign in */}
          <button className="hidden sm:flex items-center gap-2 bg-[#9CD7FF] backdrop-blur-sm text-[#050A30] rounded-xl px-3 md:px-8 py-3 text-sm md:text-sm hover:bg-[#050A30] hover:text-white transition">
            <span> Sign in</span>
          </button>
          <button  className="hidden sm:flex items-center gap-2 bg-[#050A30] backdrop-blur-sm text-white rounded-xl px-3 md:px-8 py-3 text-sm md:text-sm hover:bg-[#050A30]/90 hover:text-white transition">
            <span>Get Started</span>
          </button>

         

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-gray-100/80 transition"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

     
       
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          {/* Menu Panel */}
          <motion.div
            key="panel"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-8 pt-12 shadow-xl"
            onClick={(e) => e.stopPropagation()} // prevent closing on content click
          >
            {/* Links */}
            <div className="flex flex-col items-center w-full gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="text-2xl font-semibold text-gray-900 hover:text-[#2A2C22] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    
    </>
  );
}
"use client";

import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#050A30] bg-cover bg-center bg-no-repeat text-white"

    >


      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          <div className="md:col-span-2">
            <p className="text-lg text-white mt-4">
              <p className="text-xl">Find Event Vendors</p> is your go-to platform for connecting with
              trusted event vendors. Whether you're planning a wedding, corporate
              event, or private party, we make it easy to find the perfect
              vendors to bring your vision to life.
            </p>
          </div>

          {/* About Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/blog"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/vendors"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Find Vendors
                </a>
              </li>
              <li>
                <a
                  href="/how-it-works"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Become a vendor
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@findeventvendors.com"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  hello@findeventvendors.com
                </a>
              </li>
              <li>
                <p className="text-white">8:00am - 3:00pm, Mon to Fri</p>
              </li>
             
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Info</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/careers"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Jobs
                </a>
              </li>
              
              <li>
                <a
                  href="/blog"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col gap-4">
                <span className="text-sm">@2025 Find Event Vendors. All rights reserved</span>
            </div>
            <div className="flex flex-col gap-4">
              <a className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
        
                <span className="text-sm ">Help Center</span>
              </a>
            </div>

            <div className="flex flex-col gap-6 md:items-end">
              <div className="flex gap-4">
                <a className="text-white hover:text-gray-900 transition-colors">
                  <Facebook className="w-7 h-7" />
                </a>
                <a className="text-white hover:text-gray-900 transition-colors">
                  <Instagram className="w-7 h-7" />
                </a>
                <a className="text-white hover:text-gray-900 transition-colors">
                  <Twitter className="w-7 h-7" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

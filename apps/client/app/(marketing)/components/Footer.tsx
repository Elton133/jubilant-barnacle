"use client";

import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050A30] bg-cover bg-center bg-no-repeat text-white">
      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Image
              src="/fev logo white 3.png"
              alt="Find Event Vendors Logo"
              width={200}
              height={100}
              className="mb-4"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/vendors"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Find Vendors
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <p className="text-white">123 Main Street, City, Country</p>
              </li>
              <li>
                <p className="text-white">+1 (123) 456-7890</p>
              </li>
              <li>
                <a
                  href="mailto:hello@findeventvendors.com"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  hello@findeventvendors.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-sm">@{year} Find Event Vendors. All rights reserved</span>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/help"
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              >
                <span className="text-sm">Help Center</span>
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/terms"
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              >
                <span className="text-sm">Terms of Service</span>
              </Link>
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
                  <X className="w-7 h-7" />
                </a>
                <a className="text-white hover:text-gray-900 transition-colors">
                  <Linkedin className="w-7 h-7" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

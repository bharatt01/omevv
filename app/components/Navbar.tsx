"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
 
 
  { name: "About Us", href: "/about" },
 
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
         <Link href="/" className="flex items-center">
  <Image
    src="/images/omev-logo-dark.png"
    alt="OMEV"
    width={140}
    height={55}
    className="h-18 w-auto object-contain"
    priority
  />
</Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-14">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-md text-gray-300 hover:text-[#5fb129] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
  href="https://wa.me/918858739294?text=Hi%20OMEV,%20I%20would%20like%20to%20book%20a%20test%20ride."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#5fb129] hover:bg-[#5fb129] text-black font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200"
>
  BOOK A TEST RIDE
</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-[#5fb129] py-2 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
  href="https://wa.me/918858739294?text=Hi%20OMEV,%20I%20would%20like%20to%20book%20a%20test%20ride."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#5fb129] hover:bg-[#5fb129] text-black font-semibold px-5 py-3 rounded-full text-sm mt-4"
>
  BOOK A TEST RIDE
</a>
          </div>
        </div>
      )}
    </nav>
  );
}
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex mb-5">
              <Image
                src="/images/omev-logo-dark.png"
                alt="OMEV"
                width={150}
                height={60}
                className="h-18 w-auto object-contain"
              />
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Pioneering the future of mobility with intelligent,
              sustainable, and high-performance electric vehicles.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: FaFacebook, href: "#" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaInstagram, href: "#" },
                { Icon: FaLinkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-[#00D084] hover:text-black hover:border-[#00D084] transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-5 text-sm tracking-wider uppercase text-gray-300">
              Quick Links
            </h4>

            <ul className="space-y-3.5">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-[#00D084] text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-5 text-sm tracking-wider uppercase text-gray-300">
              Our Products
            </h4>

            <ul className="space-y-3.5">
              <li>
                <Link
                  href="/products"
                  className="text-gray-500 hover:text-[#00D084] text-sm transition-colors"
                >
                  Electric Scooters
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="text-gray-500 hover:text-[#00D084] text-sm transition-colors"
                >
                  Smart Mobility
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="text-gray-500 hover:text-[#00D084] text-sm transition-colors"
                >
                  Accessories
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-[#00D084] text-sm transition-colors"
                >
                  Book a Test Ride
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold mb-5 text-sm tracking-wider uppercase text-gray-300">
              Get In Touch
            </h4>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[#00D084] mt-0.5 shrink-0"
                />

                <p className="text-gray-500 text-sm leading-relaxed">
                  OMEV Headquarters
                  <br />
          Lakhimpur, Uttar Pradesh
                </p>
              </div>

              <a
                href="tel:+918858739294"
                className="flex items-center gap-3 text-gray-500 hover:text-[#00D084] text-sm transition-colors"
              >
                <Phone size={17} className="text-[#00D084]" />
                +91 88587 39294
              </a>

              <a
                href="mailto:omevmotor@gmail.com"
                className="flex items-center gap-3 text-gray-500 hover:text-[#00D084] text-sm transition-colors"
              >
                <Mail size={17} className="text-[#00D084]" />
                omevmotor@gmail.com
              </a>

            </div>
          </div>
        </div>

        {/* Map + Newsletter */}
        <div className="grid lg:grid-cols-2 gap-8 pb-14">

          {/* Map */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-gray-300">
              Find Us
            </h4>

            <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.7576089035065!2d80.7816715!3d27.9707087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399f356601acae93%3A0xdf7fd12863725a2f!2sOM%20EV%20MOTOR!5e0!3m2!1sen!2sin!4v1786535413870!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />

              <div className="absolute bottom-3 left-3 bg-black/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
                <p className="text-white text-xs font-medium">
                  OMEV Headquarters
                </p>
                <p className="text-gray-500 text-[11px]">
                  Lakhimpur, Uttar Pradesh
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-gray-300">
              Stay Connected
            </h4>

            <p className="text-gray-500 text-sm mb-5 max-w-md">
              Get the latest OMEV updates, product launches and electric
              mobility news directly in your inbox.
            </p>

            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 rounded-l-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00D084] transition-colors"
              />

              <button
                className="bg-[#00D084] hover:bg-[#00B874] text-black px-5 rounded-r-lg transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <p className="text-gray-600 text-xs mt-3">
              No spam. Only important OMEV updates.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-600 text-sm">
            © 2026 OMEV. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-600">
            <Link
              href="/privacy-policy"
              className="hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-gray-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
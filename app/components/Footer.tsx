import Link from "next/link";
import { FaFacebook , FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#00D084] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">O</span>
              </div>
              <span className="text-xl font-bold">OMEV</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Pioneering the future of mobility with intelligent, sustainable, and high-performance electric vehicles.
            </p>
            <div className="flex gap-4">
              {[FaFacebook , FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00D084] hover:text-black transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-gray-300">Products</h4>
            <ul className="space-y-3">
              {["Electric Scooters", "Electric Bikes", "Fleet Vehicles", "Compare Models"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-[#00D084] text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-gray-300">Company</h4>
            <ul className="space-y-3">
              {["About OMEV", "Careers", "News & Media", "Become a Dealer"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-[#00D084] text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-gray-300">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Stay updated with OMEV news and offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-l-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#00D084] transition-colors"
              />
              <button className="bg-[#00D084] hover:bg-[#00B874] text-black px-4 rounded-r-lg transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 OMEV. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useState } from "react";
import {
  Battery,
  Zap,
  Shield,
  Smartphone,
  MapPin,
  BarChart3,
  Wifi,
  Globe,
  Activity,
  RefreshCw,
  AlertTriangle,
  Settings,
  PenTool,
  Monitor,
  Package,
  ClipboardCheck,
  Wrench,
  Award,
  Users,
  FileText,
  Clock,
  Leaf,
  Sun,
  Cloud,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import { Gauge } from "lucide-react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const smartConnectivity = [
  { icon: Smartphone, title: "App Control", desc: "Control your ride from anywhere" },
  { icon: MapPin, title: "GPS Tracking", desc: "Real-time location and navigation" },
  { icon: BarChart3, title: "Ride Analytics", desc: "Track performance and driving stats" },
  { icon: Wifi, title: "OTA Updates", desc: "Always updated wirelessly" },
  { icon: Globe, title: "Geo Fencing", desc: "Set safe zones and get alerts" },
  { icon: Activity, title: "Remote Diagnostics", desc: "Stay informed about your vehicle" },
];

const safetyTech = [
  { icon: Shield, title: "Dual Channel ABS", desc: "Superior braking control" },
  { icon: RefreshCw, title: "Regenerative Braking", desc: "Energy recovery for better range" },
  { icon: AlertTriangle, title: "Side Stand Sensor", desc: "Enhanced safety for every ride" },
  { icon: Battery, title: "Battery Protection", desc: "Multi-layer safety protection" },
  { icon: Settings, title: "Motor Protection", desc: "Built to perform in all conditions" },
];

const manufacturingSteps = [
  { icon: PenTool, title: "Design", desc: "Innovative design & engineering" },
  { icon: Monitor, title: "Simulation", desc: "Advanced simulation & testing" },
  { icon: Package, title: "Prototype", desc: "Built and tested for perfection" },
  { icon: ClipboardCheck, title: "Testing", desc: "Rigorously tested for safety" },
  { icon: Wrench, title: "Production", desc: "State-of-the-art manufacturing" },
  { icon: Award, title: "Quality Check", desc: "100% quality assurance" },
];

const innovationStats = [
  { icon: Users, value: "100+", label: "Engineers" },
  { icon: FileText, value: "25+", label: "Patents" },
  { icon: Clock, value: "1000+", label: "Testing Hours" },
];

const sustainability = [
  { icon: Leaf, title: "Zero Emissions", desc: "No pollution, only clean mobility" },
  { icon: RefreshCw, title: "Recyclable Battery", desc: "Environment-friendly battery solutions" },
  { icon: Sun, title: "Renewable Energy", desc: "Powered by clean energy" },
  { icon: Cloud, title: "Carbon Reduction", desc: "Lower carbon footprint for a better planet" },
];

const highlights = [
  { value: "120 KM", label: "Real Range" },
  { value: "90 km/h", label: "Top Speed" },
  { value: "3.5 hrs", label: "Charging Time" },
  { value: "95%", label: "Energy Efficiency" },
];

const faqs = [
  "What makes OMEV's battery technology different?",
  "How does regenerative braking work?",
  "Is OMEV waterproof?",
  "How often do you release software updates?",
  "Are the batteries recyclable?",
];

export default function TechnologyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-16 lg:pt-20">
      <Navbar />
      {/* ============================================
          HERO SECTION
      ============================================ */}
      <section className="relative bg-black min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#00D084]/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div>
              <p className="text-[#00D084] text-sm font-medium tracking-widest uppercase mb-4">
                Our Technology
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                THE TECHNOLOGY<br />
                BEHIND EVERY<br />
                RIDE.
              </h1>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
                Built with intelligent engineering, advanced batteries and precision manufacturing.
              </p>
              <button className="bg-[#00D084] hover:bg-[#00B874] text-black font-semibold px-6 py-3 rounded-md text-sm flex items-center gap-2 transition-colors">
                EXPLORE TECHNOLOGY
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Right Image + Floating Labels */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-white/10">
                  <span className="text-gray-600 text-sm">Exploded Scooter View</span>
                </div>
              </div>

              {/* Floating Labels */}
              <div className="absolute top-12 -right-4 flex items-center gap-3 bg-black/80 backdrop-blur border border-white/10 rounded-lg px-4 py-3">
                <Battery size={18} className="text-[#00D084]" />
                <div>
                  <p className="text-white text-xs font-semibold">Advanced Battery</p>
                </div>
              </div>
              <div className="absolute top-28 -right-4 flex items-center gap-3 bg-black/80 backdrop-blur border border-white/10 rounded-lg px-4 py-3">
                <Zap size={18} className="text-[#00D084]" />
                <div>
                  <p className="text-white text-xs font-semibold">Powerful Motor</p>
                </div>
              </div>
              <div className="absolute top-44 -right-4 flex items-center gap-3 bg-black/80 backdrop-blur border border-white/10 rounded-lg px-4 py-3">
                <Wifi size={18} className="text-[#00D084]" />
                <div>
                  <p className="text-white text-xs font-semibold">Smart Connectivity</p>
                </div>
              </div>
              <div className="absolute top-60 -right-4 flex items-center gap-3 bg-black/80 backdrop-blur border border-white/10 rounded-lg px-4 py-3">
                <Shield size={18} className="text-[#00D084]" />
                <div>
                  <p className="text-white text-xs font-semibold">Advanced Safety</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          ADVANCED BATTERY TECHNOLOGY
      ============================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center border border-gray-200">
                <span className="text-gray-400">Battery Pack Image</span>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <p className="text-[#00D084] text-sm font-medium tracking-widest uppercase mb-3">
                Advanced Battery Technology
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                High Performance. Built to Last.
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Our advanced lithium-ion batteries deliver more range, maximum safety and long life.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Gauge, title: "120 KM Real Range", desc: "Longer range for every journey" },
                  { icon: Shield, title: "IP67 Protection", desc: "Waterproof and dustproof" },
                  { icon: Zap, title: "Fast Charging", desc: "Charge up to 80% in 3.5 hours" },
                  { icon: ThermometerIcon, title: "Thermal Management", desc: "Keep battery cool and efficient" },
                  { icon: Battery, title: "Battery Management System", desc: "Smart BMS for maximum safety" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black text-sm">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          POWERFUL MOTOR TECHNOLOGY
      ============================================ */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                POWERFUL MOTOR TECHNOLOGY
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                High efficiency motors that deliver instant power and smooth acceleration.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Zap, title: "Peak Power", desc: "High performance when you need it" },
                  { icon: RefreshCw, title: "Instant Torque", desc: "Quick pickup and superior control" },
                  { icon: Battery, title: "High Efficiency", desc: "More range, less energy" },
                  { icon: Shield, title: "Silent Operation", desc: "Whisper quiet and smooth" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={20} className="text-[#00D084]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center border border-white/10">
                <span className="text-gray-600">Motor Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SMART CONNECTIVITY
      ============================================ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00D084] text-sm font-medium tracking-widest uppercase mb-3 text-center">
            Smart Connectivity
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-16 text-center">
            SMART CONNECTIVITY
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {smartConnectivity.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:border-[#00D084]/20 transition-colors">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-gray-700" />
                </div>
                <h3 className="font-semibold text-black text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          ADVANCED SAFETY TECHNOLOGY
      ============================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00D084] text-sm font-medium tracking-widest uppercase mb-3 text-center">
            Advanced Safety Technology
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-16 text-center">
            ADVANCED SAFETY TECHNOLOGY
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {safetyTech.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center hover:border-[#00D084]/20 transition-colors">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-100">
                  <item.icon size={24} className="text-gray-700" />
                </div>
                <h3 className="font-semibold text-black text-sm mb-1">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          MANUFACTURING PROCESS
      ============================================ */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            OUR MANUFACTURING PROCESS
          </h2>
          <p className="text-gray-500 text-center mb-16">
            Precision at every step. Quality in every ride.
          </p>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-0.5 bg-gray-800" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {manufacturingSteps.map((step, idx) => (
                <div key={step.title} className="relative text-center">
                  <div className="w-12 h-12 bg-[#111] border border-gray-700 rounded-xl flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon size={20} className="text-[#00D084]" />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          INNOVATION LAB
      ============================================ */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">INNOVATION LAB</h2>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Stats */}
            <div className="space-y-8">
              {innovationStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#111] border border-gray-800 rounded-xl flex items-center justify-center">
                    <stat.icon size={24} className="text-[#00D084]" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#00D084]">{stat.value}</p>
                    <p className="text-gray-500 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-white/10">
                <span className="text-gray-600">Lab Image</span>
              </div>
            </div>

            {/* Right Text */}
            <div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Our in-house R&D team is constantly pushing boundaries to build a smarter tomorrow.
              </p>
              <button className="bg-[#00D084] hover:bg-[#00B874] text-black font-semibold px-6 py-3 rounded-md text-sm flex items-center gap-2 transition-colors">
                LEARN MORE
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SUSTAINABILITY AT OUR CORE
      ============================================ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60 z-10" />
          <div className="w-full h-full bg-gradient-to-br from-green-900 to-black flex items-center justify-center">
            <span className="text-gray-700 text-sm">Nature Road Background</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SUSTAINABILITY AT OUR CORE
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We are committed to building a cleaner, greener and sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainability.map((item) => (
              <div key={item.title} className="bg-black/40 backdrop-blur border border-white/10 rounded-2xl p-6">
                <div className="w-10 h-10 bg-[#00D084]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-[#00D084]" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          TECHNOLOGY HIGHLIGHTS
      ============================================ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00D084] text-sm font-medium tracking-widest uppercase mb-12 text-center">
            Technology Highlights
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#00D084] mb-2">{item.value}</p>
                <p className="text-gray-500 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ
      ============================================ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00D084] text-sm font-medium tracking-widest uppercase mb-3 text-center">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-500 font-medium">
                      {idx + 1}
                    </span>
                    <span className="text-black text-sm font-medium">{faq}</span>
                  </div>
                  {openFaq === idx ? (
                    <Minus size={18} className="text-gray-400 flex-shrink-0" />
                  ) : (
                    <Plus size={18} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pl-14">
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
      ============================================ */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00D084] rounded-full blur-[200px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                EXPERIENCE<br />
                THE FUTURE OF MOBILITY
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
                Book a test ride today and feel the difference technology can make.
              </p>
              <button className="bg-[#00D084] hover:bg-[#00B874] text-black font-semibold px-8 py-4 rounded-md transition-colors flex items-center gap-2">
                BOOK A TEST RIDE
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="relative hidden lg:block">
              <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-white/10">
                <span className="text-gray-600">CTA Scooter Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper icon component for thermometer
function ThermometerIcon({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
    
  );
  <Footer />
}
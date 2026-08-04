"use client";

import Image from "next/image";
import {
  Zap,
  Gauge,
  Battery,
  Shield,
  Clock,
  ChevronRight,
  Star,
  MapPin,
  Users,
  Award,
  Calculator,
  Headphones,
  Wrench,
  Check,
  Phone,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = [
  { name: "Electric Scooters", image: "scooter" },
  { name: "Electric Bikes", image: "bike" },
  { name: "Fleet Vehicles", image: "fleet" },
  { name: "Upcoming Models", image: "upcoming" },
];

const featuredModels = [
  {
    name: "S1 PRO",
    tagline: "The perfect blend of performance, style and smart technology.",
    price: "₹89,999",
    image: "s1-pro",
    specs: [
      { icon: Gauge, label: "120 KM", sub: "Real Range" },
      { icon: Zap, label: "3.5 Hrs", sub: "Fast Charging" },
      { icon: Shield, label: "3 Years", sub: "Warranty" },
    ],
    layout: "left",
  },
  {
    name: "R1",
    tagline: "Unleash power, performance and unmatched control.",
    price: "₹1,24,999",
    image: "r1",
    specs: [
      { icon: Gauge, label: "120 KM", sub: "Real Range" },
      { icon: Zap, label: "90 km/h", sub: "Top Speed" },
      { icon: Battery, label: "3.5 Hrs", sub: "Fast Charging" },
      { icon: Shield, label: "3 Years", sub: "Warranty" },
    ],
    layout: "right",
  },
  {
    name: "S2 MAX",
    tagline: "Go further. Ride smarter. Every single day.",
    price: "₹1,09,999",
    image: "s2-max",
    specs: [
      { icon: Gauge, label: "120 KM", sub: "Real Range" },
      { icon: Zap, label: "90 km/h", sub: "Top Speed" },
      { icon: Battery, label: "3 Hrs", sub: "Fast Charging" },
      { icon: Shield, label: "3 Years", sub: "Warranty" },
    ],
    layout: "left",
  },
  {
    name: "URBAN X",
    tagline: "Compact, agile and built for the city.",
    price: "₹74,999",
    image: "urban-x",
    specs: [
      { icon: Gauge, label: "140 KM", sub: "Real Range" },
      { icon: Zap, label: "4 Hrs", sub: "Fast Charging" },
      { icon: Shield, label: "3 Years", sub: "Warranty" },
    ],
    layout: "right",
  },
];

const compareData = {
  headers: ["S1 Pro", "R1", "S2 Max", "Urban X"],
  rows: [
    { label: "Range", values: ["120 km", "120 km", "140 km", "100 km"] },
    { label: "Top Speed", values: ["90 km/h", "90 km/h", "95 km/h", "85 km/h"] },
    { label: "Charging Time", values: ["3.5 hrs", "3.5 hrs", "4 hrs", "3 hrs"] },
    { label: "Battery", values: ["3.1 kWh", "4.3 kWh", "3.7 kWh", "2.5 kWh"] },
    { label: "Motor Power", values: ["4.5 kW", "6.0 kW", "5.0 kW", "3.0 kW"] },
    { label: "Warranty", values: ["3 Years", "3 Years", "3 Years", "3 Years"] },
    { label: "Price (Starting at)", values: ["₹89,999", "₹1,24,999", "₹1,09,999", "₹74,999"], highlight: true },
  ],
};

const whyChoose = [
  { icon: Battery, title: "Long Range", desc: "Our batteries use a single charge with high-density batteries." },
  { icon: Zap, title: "Fast Charging", desc: "Charge up to 80% in just a few hours with fast charging tech." },
  { icon: Gauge, title: "Smart Dashboard", desc: "Everything you need, right at your fingertips." },
  { icon: Phone, title: "Connected App", desc: "Control, monitor and customize your ride from anywhere." },
];

const stats = [
  { icon: Users, value: "50,000+", label: "Happy Riders" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: MapPin, value: "25+", label: "Cities Covered" },
  { icon: Award, value: "150+", label: "Dealers Across India" },
];

const accessories = [
  { name: "Helmet", price: "₹2,499", image: "helmet" },
  { name: "Fast Charger", price: "₹5,999", image: "charger" },
  { name: "Top Box", price: "₹1,499", image: "topbox" },
  { name: "Smart Lock", price: "₹2,999", image: "smartlock" },
  { name: "Rain Cover", price: "₹1,499", image: "raincover" },
];

export default function ProductsPage() {
  return (
    <div className="pt-16 lg:pt-20">
      <Navbar />
      {/* HERO SECTION */}
      <section className="relative bg-black min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D084]/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Text */}
            <div>
              <p className="text-[#00D084] text-sm font-medium tracking-wider mb-4">OUR PRODUCTS</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                ENGINEERED FOR<br />EVERY RIDE.
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
                From daily commutes to long journeys, discover electric vehicles built for performance, comfort and intelligence.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#00D084] hover:bg-[#00B874] text-black font-semibold px-6 py-3 rounded-md text-sm flex items-center gap-2 transition-colors">
                  EXPLORE MODELS
                  <ChevronRight size={16} />
                </button>
                <button className="border border-white/30 hover:border-white text-white px-6 py-3 rounded-md text-sm transition-colors">
                  COMPARE MODELS
                </button>
              </div>
            </div>

            {/* Right Image + Floating Stats */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-white/10">
                  <span className="text-gray-600 text-sm">Scooter Hero Image</span>
                </div>
              </div>

              {/* Floating Stat Cards */}
              <div className="absolute top-8 -right-4 bg-[#111] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <Gauge size={18} className="text-[#00D084]" />
                <div>
                  <p className="text-white text-sm font-bold">120 km</p>
                  <p className="text-gray-500 text-xs">Real Range</p>
                </div>
              </div>
              <div className="absolute top-28 -right-4 bg-[#111] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <Zap size={18} className="text-[#00D084]" />
                <div>
                  <p className="text-white text-sm font-bold">90 km/h</p>
                  <p className="text-gray-500 text-xs">Top Speed</p>
                </div>
              </div>
              <div className="absolute top-48 -right-4 bg-[#111] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <Battery size={18} className="text-[#00D084]" />
                <div>
                  <p className="text-white text-sm font-bold">3.5 Hrs</p>
                  <p className="text-gray-500 text-xs">Fast Charging</p>
                </div>
              </div>
              <div className="absolute top-68 -right-4 bg-[#111] border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <Shield size={18} className="text-[#00D084]" />
                <div>
                  <p className="text-white text-sm font-bold">3 Years</p>
                  <p className="text-gray-500 text-xs">Warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR RIDE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm tracking-widest uppercase mb-12">Choose Your Ride</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="group cursor-pointer">
                <div className="bg-gray-100 rounded-2xl aspect-square mb-4 flex items-center justify-center border border-gray-200 group-hover:border-[#00D084]/30 transition-colors">
                  <span className="text-gray-400 text-xs">{cat.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">{cat.name}</h3>
                  <span className="text-[#00D084] text-xs font-medium flex items-center gap-1">
                    Explore <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MODELS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00D084] text-sm font-medium tracking-wider uppercase mb-3">Featured Models</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-16">OUR LINEUP</h2>

          <div className="space-y-20">
            {featuredModels.map((model) => (
              <div key={model.name}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${model.layout === "right" ? "lg:flex-row-reverse" : ""}`}>
                  {/* Text Side */}
                  <div className={model.layout === "right" ? "lg:order-2" : ""}>
                    <p className="text-gray-500 text-xs font-medium mb-2">OMEV</p>
                    <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">{model.name}</h3>
                    <p className="text-gray-600 mb-4">{model.tagline}</p>
                    <p className="text-2xl font-bold text-black mb-6">{model.price}*</p>
                    <button className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors mb-8">
                      EXPLORE MODEL
                    </button>
                  </div>

                  {/* Image Side */}
                  <div className={model.layout === "right" ? "lg:order-1" : ""}>
                    <div className="bg-white rounded-3xl aspect-[4/3] flex items-center justify-center border border-gray-200">
                      <span className="text-gray-400">{model.name} Image</span>
                    </div>
                  </div>
                </div>

                {/* Specs Row */}
                <div className={`mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 ${model.layout === "right" ? "lg:pr-[50%]" : "lg:pl-[50%]"}`}>
                  {model.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100">
                      <spec.icon size={20} className="text-[#00D084]" />
                      <div>
                        <p className="font-bold text-sm text-black">{spec.label}</p>
                        <p className="text-xs text-gray-500">{spec.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00D084] text-sm font-medium tracking-wider uppercase mb-3">Compare</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">YOUR PERFECT RIDE</h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-500 font-medium text-sm"></th>
                  {compareData.headers.map((h) => (
                    <th key={h} className="py-4 px-4 text-center">
                      <div className="w-16 h-16 bg-gray-800 rounded-xl mx-auto mb-2 flex items-center justify-center">
                        <span className="text-gray-600 text-xs">{h}</span>
                      </div>
                      <span className="text-white text-sm font-semibold">{h}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareData.rows.map((row) => (
                  <tr key={row.label} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-4 px-4 text-gray-400 text-sm">{row.label}</td>
                    {row.values.map((val, i) => (
                      <td
                        key={i}
                        className={`py-4 px-4 text-center text-sm ${row.highlight ? "text-[#00D084] font-semibold" : "text-gray-300"}`}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OMEV */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00D084] text-sm font-medium tracking-wider uppercase mb-3 text-center">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">WHY CHOOSE OMEV</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-[#111] border border-white/5 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#00D084]/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-[#00D084]" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT ON TRUST */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#00D084] text-sm font-medium tracking-wider uppercase mb-3">Trust</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                BUILT ON TRUST.<br />
                <span className="text-gray-600">LOVED BY THOUSANDS.</span>
              </h2>

              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#00D084]/10 rounded-lg flex items-center justify-center">
                      <stat.icon size={20} className="text-[#00D084]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gray-800 rounded-2xl flex items-center justify-center border border-white/10">
                <span className="text-gray-600">Riders on Road Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSORIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00D084] text-sm font-medium tracking-wider uppercase mb-3 text-center">Extras</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-16 text-center">ACCESSORIES</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {accessories.map((item, idx) => (
              <div key={item.name} className="text-center group cursor-pointer">
                <div className="relative bg-gray-100 rounded-2xl aspect-square mb-4 flex items-center justify-center border border-gray-200">
                  <span className="text-gray-400 text-xs">{item.name}</span>
                  <span className="absolute top-3 left-3 w-6 h-6 bg-black text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {idx + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-black">{item.name}</h3>
                <p className="text-[#00D084] font-semibold text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EASY FINANCE & WARRANTY */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00D084] text-sm font-medium tracking-wider uppercase mb-3 text-center">Peace of Mind</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-16 text-center">EASY FINANCE & WARRANTY</h2>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              {[
                { icon: Calculator, title: "Easy EMI", desc: "Flexible EMI options starting from just ₹2,999/month." },
                { icon: Check, title: "Low Down Payment", desc: "Bring home your OMEV with minimal upfront cost." },
                { icon: Clock, title: "Instant Approval", desc: "Quick loan approval with minimal documentation." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-200 flex-shrink-0">
                    <item.icon size={20} className="text-[#00D084]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-black mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Badge */}
            <div className="flex justify-center">
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D084]/20 to-transparent rounded-full border-2 border-[#00D084]/30 flex items-center justify-center">
                  <div className="text-center">
                    <Shield size={40} className="text-[#00D084] mx-auto mb-2" />
                    <p className="text-4xl font-bold text-[#00D084]">3</p>
                    <p className="text-lg font-bold text-black">YEARS</p>
                    <p className="text-sm text-gray-500">WARRANTY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {[
                { icon: Shield, title: "3 Years Warranty", desc: "Comprehensive coverage on battery and motor." },
                { icon: Headphones, title: "Roadside Assistance", desc: "24/7 support across all major cities." },
                { icon: Wrench, title: "Service Support", desc: "Pan-India service network." },
                { icon: MapPin, title: "Across India", desc: "150+ service centers nationwide." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-200 flex-shrink-0">
                    <item.icon size={20} className="text-[#00D084]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-black mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00D084] rounded-full blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#111] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                READY TO FIND YOUR PERFECT RIDE?
              </h2>
              <p className="text-gray-400 mb-8">
                Book a test ride today and experience the future of mobility.
              </p>
              <button className="bg-[#00D084] hover:bg-[#00B874] text-black font-semibold px-8 py-4 rounded-md transition-colors">
                BOOK A TEST RIDE
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="aspect-[16/9] bg-gray-800 rounded-2xl flex items-center justify-center border border-white/10">
                <span className="text-gray-600">CTA Scooter Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
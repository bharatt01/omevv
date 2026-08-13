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
import ProductCarousel from "../components/ProductCarousel";

const categories = [
  { name: "Electric Scooters", image: "scooter" },
  { name: "Electric Bikes", image: "bike" },
  { name: "Fleet Vehicles", image: "fleet" },
  { name: "Upcoming Models", image: "upcoming" },
];

const featuredModels = [
  {
    name: "Nexo",
    tagline: "The perfect blend of performance, style and smart technology.",
    images: [
      "/images/nexo.png",
      "/images/nexo-2.png",
      "/images/nexo-3.png",
      "/images/nexo-4.png",
      "/images/nexo-5.png",
    ],
    specs: [
      { icon: Gauge, label: "120 KM", sub: "Real Range" },
      { icon: Zap, label: "3.5 Hrs", sub: "Fast Charging" },
      { icon: Shield, label: "3 Years", sub: "Warranty" },
    ],
    layout: "left",
  },
  {
    name: "Raizen",
    tagline: "Unleash power, performance and unmatched control.",
    price: "₹1,24,999",
    images: [
      "/images/raizen.jpg",
      "/images/raizen-2.jpg",
      "/images/raizen-3.jpg",
      "/images/raizen-4.jpg",
      "/images/raizen-5.jpg",
    ],
    specs: [
      { icon: Gauge, label: "120 KM", sub: "Real Range" },
      { icon: Zap, label: "90 km/h", sub: "Top Speed" },
      { icon: Battery, label: "3.5 Hrs", sub: "Fast Charging" },
      { icon: Shield, label: "3 Years", sub: "Warranty" },
    ],
    layout: "right",
  },
  {
    name: "Orbit",
    tagline: "Go further. Ride smarter. Every single day.",
    price: "₹1,09,999",
    images: [
      "/images/orbit.png",
      "/images/orbit-2.png",
      "/images/orbit-3.png",
      "/images/orbit-4.png",
      "/images/orbit-5.png",
    ],
    specs: [
      { icon: Gauge, label: "140 KM", sub: "Real Range" },
      { icon: Zap, label: "95 km/h", sub: "Top Speed" },
      { icon: Battery, label: "4 Hrs", sub: "Fast Charging" },
      { icon: Shield, label: "3 Years", sub: "Warranty" },
    ],
    layout: "left",
  },
  {
    name: "Raizen Max",
    tagline: "Compact, agile and built for the city.",
    price: "₹74,999",
    images: [
      "/images/raizen-max.png",
      "/images/raizen-max-2.png",
      "/images/raizen-max-3.png",
      "/images/raizen-max-4.png",
      "/images/raizen-max-5.png",
    ],
    specs: [
      { icon: Gauge, label: "100 KM", sub: "Real Range" },
      { icon: Zap, label: "85 km/h", sub: "Top Speed" },
      { icon: Battery, label: "3 Hrs", sub: "Fast Charging" },
      { icon: Shield, label: "3 Years", sub: "Warranty" },
    ],
    layout: "right",
  },
  {
    name: "Raizen Pro",
    tagline: "Premium comfort with long-range performance.",
    price: "₹1,34,999",
    images: [
      "/images/raizen-pro.png",
      "/images/raizen-pro-2.png",
      "/images/raizen-pro-3.png",
      "/images/raizen-pro-4.png",
      "/images/raizen-pro-5.png",
    ],
    specs: [
      { icon: Gauge, label: "160 KM", sub: "Real Range" },
      { icon: Zap, label: "100 km/h", sub: "Top Speed" },
      { icon: Battery, label: "4 Hrs", sub: "Fast Charging" },
      { icon: Shield, label: "5 Years", sub: "Warranty" },
    ],
    layout: "left",
  },
  {
    name: "Storm",
    tagline: "Maximum power for every journey.",
    price: "₹1,49,999",
    images: [
      "/images/storm.png",
      "/images/storm-2.png",
      "/images/storm-3.png",
      "/images/storm-4.png",
      "/images/storm-5.png",
    ],
    specs: [
      { icon: Gauge, label: "180 KM", sub: "Real Range" },
      { icon: Zap, label: "105 km/h", sub: "Top Speed" },
      { icon: Battery, label: "4.5 Hrs", sub: "Fast Charging" },
      { icon: Shield, label: "5 Years", sub: "Warranty" },
    ],
    layout: "right",
  },
  {
    name: "Thunder",
    tagline: "Affordable electric mobility for everyone.",
    price: "₹69,999",
    images: [
      "/images/thunder.png",
      "/images/thunder-2.png",
      "/images/thunder-3.png",
      "/images/thunder-4.png",
      "/images/thunder-5.png",
    ],
    specs: [
      { icon: Gauge, label: "90 KM", sub: "Real Range" },
      { icon: Zap, label: "70 km/h", sub: "Top Speed" },
      { icon: Battery, label: "3 Hrs", sub: "Fast Charging" },
      { icon: Shield, label: "3 Years", sub: "Warranty" },
    ],
    layout: "left",
  },
  {
    name: "Zento",
    tagline: "Luxury meets next-generation electric mobility.",
    price: "₹1,59,999",
    images: [
      "/images/zento.png",
      "/images/zento-2.png",
      "/images/zento-3.png",
      "/images/zento-4.png",
      "/images/zento-5.png",
    ],
    specs: [
      { icon: Gauge, label: "200 KM", sub: "Real Range" },
      { icon: Zap, label: "110 km/h", sub: "Top Speed" },
      { icon: Battery, label: "5 Hrs", sub: "Fast Charging" },
      { icon: Shield, label: "5 Years", sub: "Warranty" },
    ],
    layout: "right",
  },
  {
    name: "Zento Pro",
    tagline: "Luxury meets next-generation electric mobility.",
    price: "₹1,59,999",
    images: [
      "/images/zento-pro.png",
      "/images/zento-pro-2.png",
      "/images/zento-pro-3.png",
      "/images/zento-pro-4.png",
      "/images/zento-pro-5.png",
    ],
    specs: [
      { icon: Gauge, label: "200 KM", sub: "Real Range" },
      { icon: Zap, label: "110 km/h", sub: "Top Speed" },
      { icon: Battery, label: "5 Hrs", sub: "Fast Charging" },
      { icon: Shield, label: "5 Years", sub: "Warranty" },
    ],
    layout: "left",
  },
];

const compareData: {
  headers: string[];
  rows: { label: string; values: string[]; highlight?: boolean }[];
} = {
  headers: ["Orbit", "Raizen", "Thunder", "Nexo"],
  rows: [
    { label: "Range", values: ["120 km", "120 km", "140 km", "100 km"] },
    { label: "Top Speed", values: ["90 km/h", "90 km/h", "95 km/h", "85 km/h"] },
    { label: "Charging Time", values: ["3.5 hrs", "3.5 hrs", "4 hrs", "3 hrs"] },
    { label: "Battery", values: ["3.1 kWh", "4.3 kWh", "3.7 kWh", "2.5 kWh"] },
    { label: "Motor Power", values: ["4.5 kW", "6.0 kW", "5.0 kW", "3.0 kW"] },
    { label: "Warranty", values: ["3 Years", "3 Years", "3 Years", "3 Years"] },
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
      <section className="relative bg-black min-h-[90vh] flex items-center overflow-hidden py-20 lg:py-0">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#5fb129]/10 rounded-full blur-[100px] lg:blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-[#5fb129]/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Text */}
            <div className="text-center lg:text-left">
  

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 text-center lg:text-left">
                <span className="block">ENGINEERED</span>
                <span className="block text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl my-1">
                  FOR
                </span>
                <span className="block bg-gradient-to-r from-[#5fb129] to-[#8fd657] bg-clip-text text-transparent">
                  EVERY RIDE.
                </span>
              </h1>

              <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                From daily commutes to long journeys, discover electric vehicles built for performance, comfort and intelligence.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
                <button className="bg-[#5fb129] hover:bg-[#8fd657] text-black font-semibold px-6 py-3 rounded-md text-sm flex items-center justify-center gap-2 transition-colors w-full sm:w-auto">
                  EXPLORE MODELS
                  <ChevronRight size={16} />
                </button>
                <button className="border border-white/30 hover:border-white text-white px-6 py-3 rounded-md text-sm transition-colors w-full sm:w-auto">
                  COMPARE MODELS
                </button>
              </div>
            </div>

            {/* Right Image + Floating Stats */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[4/3]">
                <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl shadow-[#5fb129]/5">
                  <Image
                    src="/images/orbit.png"
                    alt="Scooter Hero Image"
                    fill
                    className="object-contain p-8"
                  />
                </div>
              </div>

              <div className="absolute top-8 -right-4 bg-[#111] border border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-lg">
                <Gauge size={18} className="text-[#5fb129]" />
                <div>
                  <p className="text-white text-sm font-bold">120 km</p>
                  <p className="text-gray-500 text-xs">Real Range</p>
                </div>
              </div>
              <div className="absolute top-28 -right-4 bg-[#111] border border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-lg">
                <Zap size={18} className="text-[#5fb129]" />
                <div>
                  <p className="text-white text-sm font-bold">90 km/h</p>
                  <p className="text-gray-500 text-xs">Top Speed</p>
                </div>
              </div>
              <div className="absolute top-48 -right-4 bg-[#111] border border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-lg">
                <Battery size={18} className="text-[#5fb129]" />
                <div>
                  <p className="text-white text-sm font-bold">3.5 Hrs</p>
                  <p className="text-gray-500 text-xs">Fast Charging</p>
                </div>
              </div>
              <div className="absolute top-[17rem] -right-4 bg-[#111] border border-white/10 rounded-xl p-3 flex items-center gap-3 shadow-lg">
                <Shield size={18} className="text-[#5fb129]" />
                <div>
                  <p className="text-white text-sm font-bold">3 Years</p>
                  <p className="text-gray-500 text-xs">Warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED MODELS */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-black mb-10 lg:mb-16">
            Featured Models
          </h2>

          <div className="space-y-14 lg:space-y-20">
            {featuredModels.map((model) => (
              <div key={model.name}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Text Side */}
                  <div className={model.layout === "right" ? "lg:order-2" : ""}>
                    <p className="text-[#5fb129] text-xl font-semibold mb-2">OMEV</p>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">{model.name}</h3>
                    <p className="text-gray-600 mb-4">{model.tagline}</p>
                    <button className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors mb-8">
                      EXPLORE MODEL
                    </button>
                  </div>

                  {/* Image Side — auto-scrolling carousel */}
                  <div className="relative bg-white rounded-3xl aspect-[4/3] border border-gray-200 overflow-hidden">
                    <ProductCarousel images={model.images} alt={model.name} />
                  </div>
                </div>

                {/* Specs Row */}
                <div
                  className={`mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 ${
                    model.layout === "right" ? "lg:pr-[50%]" : "lg:pl-[50%]"
                  }`}
                >
                  {model.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100">
                      <spec.icon size={20} className="text-[#5fb129] shrink-0" />
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
      <section className="py-14 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#5fb129] text-sm font-medium tracking-wider uppercase mb-3">Compare</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 lg:mb-12">YOUR PERFECT RIDE</h2>

          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-gray-500 font-medium text-sm"></th>
                  {compareData.headers.map((h) => (
                    <th key={h} className="py-4 px-4 text-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-800 rounded-xl mx-auto mb-2 flex items-center justify-center">
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
                    <td className="py-4 px-4 text-gray-400 text-sm whitespace-nowrap">{row.label}</td>
                    {row.values.map((val, i) => (
                      <td
                        key={i}
                        className={`py-4 px-4 text-center text-sm ${row.highlight ? "text-[#5fb129] font-semibold" : "text-gray-300"}`}
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
      <section className="py-14 sm:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#5fb129] text-sm font-medium tracking-wider uppercase mb-3 text-center">Features</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-10 lg:mb-16 text-center">
            WHY CHOOSE OMEV
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-[#111] border border-white/5 rounded-2xl p-6">
                <div className="w-12 h-12 bg-[#5fb129]/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-[#5fb129]" />
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT ON TRUST */}
      <section className="py-14 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[#5fb129] text-sm font-medium tracking-wider uppercase mb-3">Trust</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 lg:mb-12">
                BUILT ON TRUST.<br />
                <span className="text-gray-600">LOVED BY THOUSANDS.</span>
              </h2>

              <div className="grid grid-cols-2 gap-6 sm:gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#5fb129]/10 rounded-lg flex items-center justify-center shrink-0">
                      <stat.icon size={20} className="text-[#5fb129]" />
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-white">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gray-900">
                <Image
                  src="/images/rider-on-road.png"
                  alt="OMEV riders on the road"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EASY FINANCE & WARRANTY */}
      <section className="py-14 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#5fb129] text-sm font-medium tracking-wider uppercase mb-3 text-center">Peace of Mind</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-10 lg:mb-16 text-center">
            EASY FINANCE & WARRANTY
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              {[
                { icon: Calculator, title: "Easy EMI", desc: "Flexible EMI options starting from just ₹2,999/month." },
                { icon: Check, title: "Low Down Payment", desc: "Bring home your OMEV with minimal upfront cost." },
                { icon: Clock, title: "Instant Approval", desc: "Quick loan approval with minimal documentation." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-200 flex-shrink-0">
                    <item.icon size={20} className="text-[#5fb129]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-black mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Badge */}
            <div className="flex justify-center order-first lg:order-none">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56">
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
      <section className="py-14 sm:py-16 lg:py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 right-0 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] bg-[#00D084] rounded-full blur-[100px] sm:blur-[150px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#111] border border-white/5 rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                READY TO FIND YOUR PERFECT RIDE?
              </h2>
              <p className="text-gray-400 mb-8">
                Book a test ride today and experience the future of mobility.
              </p>
              <button className="bg-[#5fb129] hover:bg-[#5fb129]/80 text-black font-semibold px-8 py-4 rounded-md transition-colors w-full sm:w-auto">
                BOOK A TEST RIDE
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-gray-900">
                <Image
                  src="/images/cta.png"
                  alt="OMEV Electric Scooter"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
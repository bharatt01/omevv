"use client";

import Image from "next/image";
import {
  ArrowRight,
  Target,
  Eye,
  Zap,
  Leaf,
  Users,
  ShieldCheck,
  CheckCircle2,
  Settings2,
  Bot,
  ClipboardCheck,
  BadgeCheck,
  MapPin,
  Store,
  Percent,
  Sparkles,

} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar"; // adjust path to match your project
import Footer from "../components/Footer";

const TIMELINE = [
  {
    year: "2022",
    title: "Company Founded",
    desc: "OMEV was founded with a vision to make electric mobility accessible.",
  },
  {
    year: "2023",
    title: "Prototype Developed",
    desc: "Our R&D team built the first prototype focused on performance and safety.",
  },
  {
    year: "2024",
    title: "Manufacturing Started",
    desc: "State-of-the-art manufacturing facility established in India.",
  },
  {
    year: "2025",
    title: "Dealer Expansion",
    desc: "Expanded our network across multiple cities and states.",
  },
  {
    year: "2026",
    title: "Nationwide Presence",
    desc: "Continuing our journey to become a household name in EV mobility.",
  },
];

const CORE_VALUES = [
  { icon: Zap, title: "Innovation", desc: "Always pushing technology forward to create smarter solutions." },
  { icon: Leaf, title: "Sustainability", desc: "Committed to a cleaner future for generations to come." },
  { icon: Users, title: "Customer First", desc: "Everything we build is designed around our riders." },
  { icon: ShieldCheck, title: "Quality", desc: "Every vehicle goes through rigorous testing to ensure uncompromised quality." },
];

const WHY_CHOOSE = [
  "Premium Engineering",
  "Long Battery Life",
  "Nationwide Support",
  "Smart Connectivity",
  "Affordable Ownership",
  "Advanced Safety",
];

const MANUFACTURING_POINTS = [
  { icon: Settings2, label: "Precision Engineering" },
  { icon: Bot, label: "Robotic Automation" },
  { icon: ClipboardCheck, label: "Rigorous Testing" },
  { icon: BadgeCheck, label: "Quality Assured" },
];

const STATS = [
  { icon: Users, value: "50K+", label: "Happy Riders" },
  { icon: MapPin, value: "120+", label: "Cities Covered" },
  { icon: Store, value: "150+", label: "Dealers Across India" },
  { icon: Percent, value: "100%", label: "Electric" },
  { icon: Sparkles, value: "5+", label: "Years of Innovation" },
];

const LEADERSHIP = [
  {
    name: "Rohit Bhatia",
    role: "Co-Founder & CEO",
    bio: "Visionary leader with 15+ years of experience in automotive and technology.",
    image: "/images/leader-rohit.jpg",
  },
  {
    name: "Anjali Verma",
    role: "Co-Founder & CTO",
    bio: "Engineering expert focused on product and sustainability.",
    image: "/images/leader-anjali.jpg",
  },
  {
    name: "Vikram Soni",
    role: "Head of Operations",
    bio: "Operations specialist ensuring efficiency, quality and customer satisfaction.",
    image: "/images/leader-vikram.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20 bg-white">
      <Navbar />
      <Hero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <WhyChoose />
      <ManufacturingExcellence />
      <StatsBanner />
      <Leadership />
      <SustainabilityCta />
      <Footer />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero-facility.jpg"
          alt="OMEV headquarters and manufacturing facility at night"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <p className="flex items-center gap-2 text-[#00D084] text-xs font-semibold tracking-widest uppercase mb-4">
          <span className="h-px w-6 bg-[#00D084]" />
          About OMEV
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-lg">
          Driving India&apos;s
          <br />
          <span className="text-[#00D084]">Electric Revolution.</span>
        </h1>
        <p className="mt-5 max-w-md text-sm text-gray-400 leading-relaxed">
          We are on a mission to accelerate the world&apos;s transition to
          sustainable mobility with innovative, reliable and smart electric
          vehicles.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="inline-flex items-center gap-2 bg-[#00D084] hover:bg-[#00B874] text-black font-semibold px-6 py-3 rounded-full text-sm transition-colors">
            Our Story
            <ArrowRight size={15} />
          </button>
          <button className="inline-flex items-center gap-2 border border-white/25 hover:border-white text-white px-6 py-3 rounded-full text-sm transition-colors">
            Contact Us
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Our Story — timeline                                               */
/* ------------------------------------------------------------------ */

function OurStory() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-[#00D084] text-xs font-semibold tracking-widest uppercase mb-3">
          <span className="h-px w-6 bg-[#00D084]" />
          Our Story
        </p>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight mb-4">
              From an ambitious idea
              <br />
              to India&apos;s next EV brand.
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-8">
              Every milestone brings us closer to a cleaner, smarter and
              greener future for every Indian.
            </p>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/about-manufacturing-floor.jpg"
                alt="Robotic arms assembling OMEV scooters on the factory floor"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <ol className="relative border-l border-gray-200 pl-8 space-y-10">
            {TIMELINE.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-[#00D084] ring-4 ring-white" />
                <p className="text-[#00D084] font-bold text-sm mb-1">
                  {item.year}
                </p>
                <h3 className="font-semibold text-black text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                  {item.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Mission & Vision                                                    */
/* ------------------------------------------------------------------ */

function MissionVision() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-[#00D084] text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="h-px w-6 bg-[#00D084]" />
          Mission &amp; Vision
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-8 flex gap-6 items-start">
            <div className="w-14 h-14 shrink-0 rounded-full bg-[#00D084]/10 flex items-center justify-center">
              <Target size={22} className="text-[#00D084]" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                Mission
              </p>
              <h3 className="text-xl font-bold text-white mb-2">
                Making clean mobility accessible to every Indian.
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We build reliable, smart and efficient electric vehicles that
                make a real difference.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-8 flex gap-6 items-start">
            <div className="w-14 h-14 shrink-0 rounded-full bg-[#00D084]/10 flex items-center justify-center">
              <Eye size={22} className="text-[#00D084]" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                Vision
              </p>
              <h3 className="text-xl font-bold text-white mb-2">
                Become India&apos;s most trusted EV manufacturer.
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We envision a future where every ride is electric,
                sustainable and connected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Core Values                                                         */
/* ------------------------------------------------------------------ */

function CoreValues() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-[#00D084] text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="h-px w-6 bg-[#00D084]" />
          Our Core Values
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_VALUES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm hover:shadow-md hover:border-[#00D084]/20 transition-all"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-[#00D084]/10 flex items-center justify-center mb-4">
                <Icon size={20} className="text-[#00D084]" />
              </div>
              <h3 className="font-semibold text-black text-sm mb-2">
                {title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Why Choose OMEV                                                    */
/* ------------------------------------------------------------------ */

function WhyChoose() {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="flex items-center gap-2 text-[#00D084] text-xs font-semibold tracking-widest uppercase mb-3">
              <span className="h-px w-6 bg-[#00D084]" />
              Why Choose OMEV?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-8">
              Why Thousands
              <br />
              Choose OMEV
            </h2>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/about-scooter-glow.jpg"
                alt="OMEV scooter with green ambient lighting"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <ul className="space-y-4">
            {WHY_CHOOSE.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0d0d0d] px-5 py-4"
              >
                <CheckCircle2 size={18} className="text-[#00D084] shrink-0" />
                <span className="text-sm font-medium text-white">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Manufacturing Excellence                                            */
/* ------------------------------------------------------------------ */

function ManufacturingExcellence() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="flex items-center gap-2 text-[#00D084] text-xs font-semibold tracking-widest uppercase mb-3">
              <span className="h-px w-6 bg-[#00D084]" />
              Manufacturing Excellence
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight mb-4">
              Built with Precision.
              <br />
              Backed by Technology.
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-8">
              Our advanced manufacturing facility is equipped with robotic
              automation, precision testing and world-class quality
              standards.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {MANUFACTURING_POINTS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2">
                  <div className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
                    <Icon size={18} className="text-gray-700" />
                  </div>
                  <p className="text-xs font-medium text-gray-700 leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/about-robotic-arm.jpg"
              alt="Robotic arm assembling an OMEV scooter"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Stats banner                                                        */
/* ------------------------------------------------------------------ */

function StatsBanner() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-14">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/about-stats-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center gap-3 text-center">
            <Icon className="text-[#00D084]" size={24} />
            <div>
              <p className="text-2xl font-extrabold text-[#00D084]">
                {value}
              </p>
              <p className="text-xs text-neutral-300">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Leadership                                                          */
/* ------------------------------------------------------------------ */

function Leadership() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-[#00D084] text-xs font-semibold tracking-widest uppercase mb-3">
          <span className="h-px w-6 bg-[#00D084]" />
          Our Leadership
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-12">
          The Minds Driving OMEV Forward
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {LEADERSHIP.map((person) => (
            <div
              key={person.name}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm flex items-center gap-4"
            >
              <div className="relative h-16 w-16 shrink-0 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-black">
                  {person.name}
                </h3>
                <p className="text-xs text-[#00D084] font-medium mb-1">
                  {person.role}
                </p>
                <a
                  href="#"
                  aria-label={`${person.name} on LinkedIn`}
                  className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 text-gray-600 hover:bg-[#00D084]/10 hover:text-[#00D084] transition-colors"
                >
                  <FaLinkedin size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sustainability CTA                                                  */
/* ------------------------------------------------------------------ */

function SustainabilityCta() {
  return (
    <section className="relative min-h-[380px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/about-forest-river.jpg"
          alt="Aerial view of a green forest and river"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-8">
        <div>
          <p className="flex items-center gap-2 text-[#00D084] text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="h-px w-6 bg-[#00D084]" />
            Sustainability
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-2">
            Driving Towards
            <br />
            <span className="text-[#00D084]">Zero Emissions.</span>
          </h2>
          <p className="text-sm text-gray-300 mb-6 max-w-sm">
            Reducing our carbon footprint one ride at a time.
          </p>
          <button className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-6 py-3 rounded-full text-sm transition-colors">
            Our Commitment
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="hidden sm:flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-[#00D084]/40 bg-black/40 backdrop-blur">
          <Leaf size={36} className="text-[#00D084]" />
        </div>
      </div>
    
    </section>
    
  );
}
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
    name: "Akash Shrivastava",
    role: "Founder",
    bio: "Visionary leader with 15+ years of experience in automotive and technology.",
    image: "/images/leader-akash.jpg",
  },
  {
    name: "Dharmendra Singh",
    role: "Partner",
    bio: "Engineering expert focused on product and sustainability.",
    image: "/images/leader-dharmendra.jpg",
  },
  {
    name: "Atal Rathore",
    role: "Partner",
    bio: "Operations specialist ensuring efficiency, quality and customer satisfaction.",
    image: "/images/leader-atal.jpg",
  },
];

const MISSION_POINTS = [
  "To manufacture high-quality electric vehicles that exceed customer expectations.",
  "To build a strong nationwide dealer and distribution network.",
  "To drive innovation through continuous research, product development, and manufacturing excellence.",
  "To provide dependable after-sales support and long-term customer value.",
  "To accelerate India's journey toward clean, affordable, and sustainable mobility.",
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
  <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-black pt-20">
  <div className="absolute inset-0">
    <Image
      src="/images/aboutus-hero.png"
      alt="OMEV headquarters and manufacturing facility at night"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
    <p className="flex items-center gap-2 text-[#5fb129] text-xs font-semibold tracking-widest uppercase mb-4">
      <span className="h-px w-6 bg-[#5fb129]" />
      About OMEV
    </p>
    <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-lg">
      Driving India&apos;s
      <br />
      <span className="text-[#5fb129]">Electric Revolution.</span>
    </h1>
    <p className="mt-5 max-w-md text-sm text-gray-400 leading-relaxed">
      We are on a mission to accelerate the world&apos;s transition to
      sustainable mobility with innovative, reliable and smart electric
      vehicles.
    </p>
    <div className="mt-8 flex flex-wrap gap-4">
      <button className="inline-flex items-center gap-2 bg-[#5fb129] hover:bg-[#5fb129]/80 text-black font-semibold px-6 py-3 rounded-full text-sm transition-colors">
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
)
}


/* ------------------------------------------------------------------ */
/* Our Story — founder journey + timeline                             */
/* ------------------------------------------------------------------ */

function OurStory() {
  return (
   <section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* Top Section */}
    <div className="grid lg:grid-cols-2 gap-20 items-start">

      {/* Left */}
      <div>
        <span className="inline-flex rounded-full bg-[#5fb129]/10 px-4 py-1 text-xs font-semibold tracking-wider uppercase text-[#5fb129] mb-5">
          Our Story
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-8">
          From an ambitious idea
          <br />
          to India&apos;s next EV brand.
        </h2>

        <p className="text-gray-500 leading-8 mb-6">
          With nearly a decade of experience in the automotive and
          electric mobility sector, we are committed to building a
          cleaner, smarter, and more sustainable future.
        </p>

        <p className="text-gray-500 leading-8">
          Before entering the EV industry, our founder gained 8–9 years
          of valuable experience in the supply chain operations of
          multinational companies, developing deep expertise in
          procurement, logistics, quality management, and operational
          excellence. This strong corporate foundation has played a key
          role in building a reliable and customer-focused business.
        </p>
      </div>

      {/* Timeline */}
      <div>
        <ol className="relative border-l border-gray-200 pl-8 space-y-10">
          {TIMELINE.map((item) => (
            <li key={item.year} className="relative">

              <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-[#5fb129] ring-4 ring-white" />

              <p className="text-[#5fb129] font-bold text-sm mb-1">
                {item.year}
              </p>

              <h3 className="font-semibold text-black text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-7">
                {item.desc}
              </p>

            </li>
          ))}
        </ol>
      </div>

    </div>

    {/* Manufacturing Showcase */}

    <div className="relative mt-24 overflow-hidden rounded-[32px]">

      <div className="relative h-[280px] sm:h-[420px] lg:h-[620px]">

        <Image
          src="/images/about-manufacturing.png"
          alt="Robotic arms assembling OMEV scooters on the factory floor"
          fill
          className="object-cover"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        {/* Floating Card */}

       <div className="absolute bottom-8 left-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 px-5 py-3">
  <span className="text-sm tracking-[0.3em] uppercase text-white">
    OM EV Manufacturing Facility
  </span>
</div>

      </div>

    </div>

    {/* Bottom Story */}

    <div className="mt-24 grid lg:grid-cols-2 gap-16">

      <div>
        <p className="text-gray-500 leading-8 mb-8">
          For the past 7–8 years, we have been actively involved in the
          Electric Vehicle (EV) industry, establishing a strong presence
          in both the electric two-wheeler and electric three-wheeler
          segments. Our journey has included distribution, dealership
          development, sales, after-sales support, and creating a robust
          network of business partners across the region.
        </p>

        <p className="text-gray-500 leading-8">
          Today, we have expanded our vision by entering EV
          manufacturing through OM EV Motor, where we manufacture
          low-speed electric scooters designed to deliver dependable
          performance, affordability, and eco-friendly mobility for the
          Indian market. Every vehicle is built with a focus on quality,
          innovation, and customer satisfaction.
        </p>
      </div>

      <div className="flex items-center justify-center">

        <div className="grid grid-cols-2 gap-8">

          <div>
            <h3 className="text-5xl font-bold text-[#5fb129]">
              8+
            </h3>

            <p className="mt-2 text-gray-500">
              Years in EV Industry
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#5fb129]">
              100%
            </h3>

            <p className="mt-2 text-gray-500">
              Quality Focused
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#5fb129]">
              Made
            </h3>

            <p className="mt-2 text-gray-500">
              In India
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-[#5fb129]">
              EV
            </h3>

            <p className="mt-2 text-gray-500">
              Manufacturing
            </p>
          </div>

        </div>

      </div>

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
        <p className="flex items-center gap-2 text-[#5fb129] text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="h-px w-6 bg-[#5fb129]" />
          Mission &amp; Vision
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-8 flex gap-6 items-start">
            <div className="w-14 h-14 shrink-0 rounded-full bg-[#5fb129]/10 flex items-center justify-center">
              <Eye size={22} className="text-[#5fb129]" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                Vision
              </p>
              <h3 className="text-xl font-bold text-white mb-2">
                Become India&apos;s most trusted EV manufacturer.
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                To become one of India&apos;s most trusted electric vehicle
                manufacturers by delivering innovative, reliable, and
                sustainable mobility solutions that empower customers and
                contribute to a greener future.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d0d0d] p-8 flex gap-6 items-start">
            <div className="w-14 h-14 shrink-0 rounded-full bg-[#5fb129]/10 flex items-center justify-center">
              <Target size={22} className="text-[#5fb129]" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                Mission
              </p>
              <h3 className="text-xl font-bold text-white mb-4">
                Making clean mobility accessible to every Indian.
              </h3>
              <ul className="space-y-2">
                {MISSION_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className="text-[#5fb129] shrink-0 mt-0.5"
                    />
                    <span className="text-sm text-gray-400 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
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
        <p className="flex items-center gap-2 text-[#5fb129] text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="h-px w-6 bg-[#5fb129]" />
          Our Core Values
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_VALUES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm hover:shadow-md hover:border-[#00D084]/20 transition-all"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-[#5fb129]/10 flex items-center justify-center mb-4">
                <Icon size={20} className="text-[#5fb129]" />
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
            <p className="flex items-center gap-2 text-[#5fb129] text-xs font-semibold tracking-widest uppercase mb-3">
              <span className="h-px w-6 bg-[#5fb129]" />
              Why Choose OMEV?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-8">
              Why Thousands
              <br />
              Choose OMEV
            </h2>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/about-scooter-glow.png"
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
                <CheckCircle2 size={18} className="text-[#5fb129] shrink-0" />
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
            <p className="flex items-center gap-2 text-[#5fb129] text-xs font-semibold tracking-widest uppercase mb-3">
              <span className="h-px w-6 bg-[#5fb129]" />
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
                  <div className="w-11 h-11 rounded-full bg-[#5fb129]/10 flex items-center justify-center">
                    <Icon size={18} className="text-[#5fb129]" />
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
              src="/images/about-robotic-arm.png"
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
            <Icon className="text-[#5fb129]" size={24} />
            <div>
              <p className="text-2xl font-extrabold text-[#5fb129]">
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
        <p className="flex items-center gap-2 text-[#5fb129] text-xs font-semibold tracking-widest uppercase mb-3">
          <span className="h-px w-6 bg-[#5fb129]" />
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
                <p className="text-xs text-[#5fb129] font-medium mb-1">
                  {person.role}
                </p>
                <a
                  href="#"
                  aria-label={`${person.name} on LinkedIn`}
                  className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 text-gray-600 hover:bg-[#5fb129]/10 hover:text-[#5fb129] transition-colors"
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
          src="/images/about-forest-river.png"
          alt="Aerial view of a green forest and river"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-8">
        <div>
          <p className="flex items-center gap-2 text-[#5fb129] text-xs font-semibold tracking-widest uppercase mb-3">
            <span className="h-px w-6 bg-[#5fb129]" />
            Sustainability
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-2">
            Driving Towards
            <br />
            <span className="text-[#5fb129]">Zero Emissions.</span>
          </h2>
          <p className="text-sm text-gray-300 mb-6 max-w-sm">
            Reducing our carbon footprint one ride at a time.
          </p>
          <button className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-6 py-3 rounded-full text-sm transition-colors">
            Our Commitment
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="hidden sm:flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-[#5fb129]/40 bg-black/40 backdrop-blur">
          <Leaf size={36} className="text-[#5fb129]" />
        </div>
      </div>
    
    </section>
    
  );
}
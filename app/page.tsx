"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  ArrowRight,
  ArrowUpRight,
  Gauge,
  Zap,
  BatteryCharging,
  ShieldCheck,
  BatteryFull,
  CircuitBoard,
  Share2,
  ShieldAlert,
  Users,
  MapPin,
  Store,
  Leaf,
  Settings2,
  Bot,
  ClipboardCheck,
  BadgeCheck,
  Star,
  Quote,
  Volume2,
  VolumeX,
} from "lucide-react";

import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import Navbar from "../app/components/Navbar"; // adjust import path to match your project
import Footer from "../app/components/Footer"; // adjust import path to match your project
/**
 * OMEV — Electric Mobility Landing Page (v3 / dark hero + video + testimonials)
 * -------------------------------------------------------
 * Replace placeholder image/video paths (e.g. "/images/hero-scooter.jpg",
 * "/videos/life-in-motion.mp4") with your own assets under /public.
 */

const HERO_STATS = [
  { icon: Gauge, value: "120 km", label: "Real Range" },
  { icon: Zap, value: "90 km/h", label: "Top Speed" },
  { icon: BatteryCharging, value: "3.5 hrs", label: "Fast Charging" },
  { icon: ShieldCheck, value: "3 Years", label: "Warranty" },
];

// Vehicles that cycle through the hero — image should be a transparent PNG
// cutout so it sits cleanly on top of the background photo.
const HERO_VEHICLES = [
  { image: "/images/hero-scooter1.png", alt: "OMEV S1 Pro electric scooter" },
  { image: "/images/hero-scooter2.png", alt: "OMEV R1 electric bike" },
];

const HERO_SLIDE_INTERVAL_MS = 4500;

const RIDES = [
  {
    tag: "OMEV",
    name: "S1",
    nameAccent: "PRO",
    type: "Electric Scooter",
    price: "₹89,999*",
    image: "/images/hero-scooter1.png",
    number: "01",
    href: "/products/s1-pro",
  },
  {
    tag: "OMEV",
    name: "R1",
    nameAccent: "",
    type: "Electric Bike",
    price: "₹1,24,999*",
    image: "/images/hero-scooter2.png",
    number: "02",
    href: "/products/r1",
  },
];

const TECH_FEATURES = [
  {
    icon: BatteryFull,
    title: "Advanced Battery",
    desc: "High energy density batteries for longer range and maximum safety.",
  },
  {
    icon: CircuitBoard,
    title: "Powerful Motor",
    desc: "High-torque motors for unmatched acceleration and top performance.",
  },
  {
    icon: Share2,
    title: "Smart Connect",
    desc: "IoT enabled features, ride analytics and smart connectivity.",
  },
  {
    icon: ShieldAlert,
    title: "Safer Everyday",
    desc: "Advanced safety features to protect you on every journey.",
  },
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
  { icon: Leaf, value: "0", label: "Emissions. 100% Electric" },
];

// New: quick stat chips overlaid on the cinematic video section.
const LIFE_STATS = [
  { value: "2.4M+", label: "km ridden daily by OMEV riders" },
  { value: "45 min", label: "average charge time to 80%" },
  { value: "₹0.15", label: "running cost per kilometre" },
];

// New: rider testimonials with photos.
const TESTIMONIALS = [
  {
    name: "Ananya Rao",
    location: "Bengaluru",
    vehicle: "OMEV S1 Pro",
    rating: 5,
    quote:
      "My commute went from a 40-minute fuel-stop scramble to a quiet, effortless ride. The S1 Pro just disappears into the background of my day, in the best way.",
    image: "/images/testimonial-ananya.jpg",
  },
  {
    name: "Rohit Malhotra",
    location: "Pune",
    vehicle: "OMEV R1",
    rating: 5,
    quote:
      "I was skeptical about torque on an electric bike until I rode the R1 up the ghats. It pulls harder than my old petrol bike ever did, and I haven't visited a fuel station in eight months.",
    image: "/images/testimonial-rohit.jpg",
  },
  {
    name: "Priya Nair",
    location: "Kochi",
    vehicle: "OMEV S1 Pro",
    rating: 5,
    quote:
      "Service was the thing I worried about most. The nearest OMEV center picked up my scooter, fixed a minor issue same-day, and dropped it back before I finished work.",
    image: "/images/testimonial-priya.jpg",
  },
];

const BLOG_POSTS = [
  {
    date: "May 15, 2024",
    category: "Company",
    title: "OMEV S1 Pro: Redefining Urban Mobility in India",
    image: "/images/blog-1.jpg",
    href: "/blog/s1-pro-urban-mobility",
  },
  {
    date: "May 10, 2024",
    category: "Technology",
    title: "The Future of EV Technology: What's Next?",
    image: "/images/blog-2.jpg",
    href: "/blog/future-of-ev-technology",
  },
  {
    date: "May 05, 2024",
    category: "Company",
    title: "Inside OMEV's State-of-the-Art Manufacturing Facility",
    image: "/images/blog-3.jpg",
    href: "/blog/manufacturing-facility",
  },
];

const FOOTER_COLUMNS = [
  {
    title: "Products",
    links: ["Electric Scooters", "Electric Bikes", "Accessories", "Compare Models"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "News & Media", "Become a Dealer"],
  },
  {
    title: "Support",
    links: ["Service Centers", "Warranty", "FAQs", "Contact Us"],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased">
      <Navbar />
      <Hero />
      <BuiltForEveryJourney />
      <IntelligenceInEveryMile />
      <MadeInIndia />
      <StatsBanner />
      <LifeInMotion />
      <Testimonials />
      <NewsInsights />
      <CtaBanner />
  <Footer/>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Hero (dark background, no inline header — Navbar handles nav)      */
/* ------------------------------------------------------------------ */

function Hero() {
  const [activeVehicle, setActiveVehicle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVehicle((prev) => (prev + 1) % HERO_VEHICLES.length);
    }, HERO_SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-neutral-950">
      {/* Background image — swap the src for your own hero background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background2.png"
          alt=""
          fill
          priority
          className="object-cover"
        />

        {/* Softer left overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/40 to-transparent" />

        {/* Very subtle top/bottom overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/20" />
      </div>

      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-0 h-[620px] w-[620px] rounded-full bg-gradient-to-br from-emerald-500/10 via-neutral-700/10 to-transparent blur-2xl" />
      </div>

      {/* Hero content — pt-24/28 clears the fixed Navbar (h-16 / lg:h-20) */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 pt-24 lg:grid-cols-[1.05fr_1.3fr] lg:gap-6 lg:px-10 lg:pb-20 lg:pt-28">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl">
            Smarter Rides.
            <br />
            <span className="text-emerald-500">Greener India.</span>
            <br />
            Stronger Tomorrow.
          </h1>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-neutral-400">
            OMEV designs and manufactures high-performance electric scooters
            and bikes that are smart, reliable, and built for the roads of
            tomorrow.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-emerald-500"
            >
              Explore OMEV
              <ArrowRight size={15} />
            </Link>
            <button className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:border-emerald-500">
              <Play size={14} />
              Our Technology
            </button>
          </div>

          <div className="mt-14 flex items-center gap-3 text-xs font-semibold text-neutral-500">
            <span className="text-white">
              {String(activeVehicle + 1).padStart(2, "0")}
            </span>
            <span className="relative h-px w-16 overflow-hidden bg-neutral-700">
              <span
                className="absolute inset-y-0 left-0 bg-emerald-500 transition-all duration-700 ease-in-out"
                style={{
                  width: `${
                    ((activeVehicle + 1) / HERO_VEHICLES.length) * 100
                  }%`,
                }}
              />
            </span>
            {String(HERO_VEHICLES.length).padStart(2, "0")}
          </div>
        </div>

        {/* Right: vehicle carousel + stats */}
        <div className="relative flex items-center justify-center">
          <div className="relative aspect-square w-full max-w-xl">
            {HERO_VEHICLES.map((vehicle, index) => {
              const total = HERO_VEHICLES.length;
              const diff = (index - activeVehicle + total) % total;

              const positionClass =
                diff === 0
                  ? "translate-x-0 opacity-100"
                  : diff === 1
                  ? "translate-x-16 opacity-0"
                  : "-translate-x-16 opacity-0";

              return (
                <div
                  key={vehicle.image}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${positionClass}`}
                  aria-hidden={diff !== 0}
                >
                  <Image
                    src={vehicle.image}
                    alt={vehicle.alt}
                    fill
                    priority={index === 0}
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              );
            })}
          </div>

          {/* Stats overlay */}
          <div className="absolute -right-2 top-1/2 flex -translate-y-1/2 flex-col gap-6 sm:right-2 lg:-right-6">
            {HERO_STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-neutral-700 bg-neutral-950/60 text-white backdrop-blur">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold leading-tight text-white">
                    {value}
                  </p>
                  <p className="text-xs text-neutral-400">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators — click to jump to a vehicle */}
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {HERO_VEHICLES.map((vehicle, index) => (
              <button
                key={vehicle.image}
                onClick={() => setActiveVehicle(index)}
                aria-label={`Show ${vehicle.alt}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeVehicle
                    ? "w-6 bg-emerald-500"
                    : "w-1.5 bg-neutral-600 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Built for every journey (product cards)                            */
/* ------------------------------------------------------------------ */

function BuiltForEveryJourney() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_2fr] lg:items-end">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600">
              Our Lineup
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Built for Every Journey
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            <p className="max-w-sm text-sm leading-relaxed text-neutral-500 lg:text-right">
              From city commutes to weekend getaways, find the perfect ride
              that matches your style.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-neutral-900 hover:text-emerald-600"
            >
              View all models
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {RIDES.map((ride) => (
            <div
              key={ride.name + ride.nameAccent}
              className="group relative overflow-hidden rounded-2xl bg-neutral-50 p-8"
            >
              <span className="pointer-events-none absolute -bottom-6 left-6 select-none text-[110px] font-extrabold leading-none text-neutral-200">
                {ride.number}
              </span>

              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  {ride.tag}
                </p>
                <h3 className="mt-1 text-2xl font-extrabold text-neutral-900">
                  {ride.name}
                  {ride.nameAccent && (
                    <span className="text-emerald-600"> {ride.nameAccent}</span>
                  )}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">{ride.type}</p>
                <p className="mt-4 text-sm text-neutral-500">
                  Starting at{" "}
                  <span className="font-bold text-neutral-900">
                    {ride.price}
                  </span>
                </p>
              </div>

              <div className="relative mt-6 aspect-[16/10] w-full">
                <Image
                  src={ride.image}
                  alt={ride.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <Link
                href={ride.href}
                className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-white transition-colors group-hover:bg-emerald-600"
                aria-label={`View ${ride.name} details`}
              >
                <ArrowUpRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Intelligence in every mile (dark section)                          */
/* ------------------------------------------------------------------ */

function IntelligenceInEveryMile() {
  return (
    <section className="bg-neutral-950 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.9fr_2fr] lg:items-center lg:px-10">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-500">
            Smart Technology
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Intelligence
            <br />
            in Every Mile.
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
            Advanced technology that powers performance, safety and
            connectivity.
          </p>
          <Link
            href="/technology"
            className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-emerald-500 hover:text-emerald-400"
          >
            Explore Technology
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {TECH_FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-700/50 text-emerald-500">
                <Icon size={20} />
              </div>
              <h3 className="text-sm font-bold text-white">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Made in India — video feature                                       */
/* ------------------------------------------------------------------ */

function MadeInIndia() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.75fr_1.6fr_0.65fr] lg:items-center lg:px-10">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600">
            Built with Pride
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
            Made in India.
            <br />
            Made for the World.
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
            State-of-the-art manufacturing facilities with world-class
            technology and stringent quality standards.
          </p>
          <Link
            href="/manufacturing"
            className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-neutral-900 hover:text-emerald-600"
          >
            Explore Technology
            <ArrowRight size={14} />
          </Link>
        </div>

        <button className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-900">
          <Image
            src="/images/factory-video-thumb.jpg"
            alt="OMEV manufacturing facility"
            fill
            className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-neutral-900 transition-transform group-hover:scale-110">
              <Play size={22} className="ml-1" fill="currentColor" />
            </span>
          </span>
        </button>

        <div className="flex flex-row flex-wrap gap-6 lg:flex-col lg:gap-6">
          {MANUFACTURING_POINTS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
                <Icon size={17} />
              </div>
              <p className="text-sm font-semibold text-neutral-800">
                {label}
              </p>
            </div>
          ))}
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
      <div className="absolute inset-0 opacity-30">
        <Image src="/images/road-bg.png" alt="" fill className="object-cover" />
      </div>
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-10">
        {STATS.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col items-center gap-3 text-center">
            <Icon className="text-emerald-500" size={26} />
            <div>
              <p className="text-2xl font-extrabold text-emerald-500">
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
/* Life in Motion — full-bleed autoplay video with floating stats     */
/* ------------------------------------------------------------------ */

function LifeInMotion() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section className="relative isolate overflow-hidden bg-neutral-950">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-70"
          poster="/images/life-in-motion-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/life-in-motion.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 via-transparent to-neutral-950/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-xl">
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-500">
            <span className="h-px w-8 bg-emerald-500" />
            Life in Motion
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Every Ride Tells
            <br />a Different Story.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-300">
            From dawn deliveries in Mumbai to weekend rides through the
            Western Ghats, OMEV riders put more than two million kilometres
            on the road every single day.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {LIFE_STATS.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <p className="text-2xl font-extrabold text-emerald-500">
                {value}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-300">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3">
          <button
            onClick={togglePlay}
            aria-label={playing ? "Pause video" : "Play video"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-emerald-500 hover:text-emerald-500"
          >
            {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
          </button>
          <button
            onClick={toggleMute}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-emerald-500 hover:text-emerald-500"
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Shot on location across India
          </span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials — rider photos, quotes, and ratings                   */
/* ------------------------------------------------------------------ */

function Testimonials() {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600">
              Rider Stories
            </p>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Loved on Every Road
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
            Real riders, real commutes. Here&apos;s what 50,000+ OMEV owners
            are saying about life after switching to electric.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-neutral-100 transition-shadow hover:shadow-md"
            >
              <Quote className="mb-4 text-emerald-600/30" size={32} fill="currentColor" />

              <p className="flex-1 text-sm leading-relaxed text-neutral-600">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < t.rating
                        ? "fill-emerald-500 text-emerald-500"
                        : "fill-neutral-200 text-neutral-200"
                    }
                  />
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 border-t border-neutral-100 pt-5">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-neutral-100">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {t.location} &nbsp;•&nbsp; {t.vehicle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* News & Insights                                                      */
/* ------------------------------------------------------------------ */

function NewsInsights() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600">
              From the OMEV World
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
              News &amp; Insights
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Stay updated with the latest from OMEV.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-emerald-600 hover:text-emerald-700"
          >
            View all articles
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link key={post.title} href={post.href} className="group">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs text-neutral-400">
                {post.date} &nbsp;•&nbsp; {post.category}
              </p>
              <h3 className="mt-1 text-[15px] font-bold leading-snug text-neutral-900 group-hover:text-emerald-600">
                {post.title}
              </h3>
              <span className="mt-2 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-emerald-600">
                Read More
                <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA banner                                                           */
/* ------------------------------------------------------------------ */

function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-14">
      <div className="absolute inset-y-0 right-0 w-1/2 opacity-70">
        <Image
          src="/images/cta-scooter.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 lg:flex-row lg:items-center lg:px-10">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Ready to Experience
            <br />
            the <span className="text-emerald-500">Future?</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-400">
            Book a test ride today and feel the difference.
          </p>
        </div>
        <Link
          href="/test-ride"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-emerald-500"
        >
          Book Your Test Ride
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */

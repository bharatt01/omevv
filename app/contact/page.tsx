"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Headphones,

} from "lucide-react";
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";
import Navbar from "../components/Navbar"; // adjust path to match your project

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "Call Us",
    line1: "+91 98765 43210",
    line2: "Mon - Sat, 9AM - 6PM",
  },
  {
    icon: Mail,
    title: "Email Us",
    line1: "info@omev.in",
    line2: "support@omev.in",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    line1: "OMEV Headquarters",
    line2: "Pune, Maharashtra, India",
  },
  {
    icon: Clock,
    title: "Working Hours",
    line1: "Mon - Sat",
    line2: "9:00 AM - 6:00 PM",
  },
];

const FAQS = [
  { q: "How can I book a test ride?", a: "You can book a test ride online through our website or by calling your nearest OMEV dealership. Test rides are available at all 150+ dealer locations across India." },
  { q: "Where are your dealerships located?", a: "OMEV has 150+ dealerships across 120+ cities in India. Use the dealer locator on our website to find the one closest to you." },
  { q: "What is the battery warranty?", a: "Every OMEV vehicle comes with a comprehensive 3-year warranty covering the battery and motor, with no hidden conditions." },
  { q: "Do you offer financing options?", a: "Yes, we offer flexible EMI plans starting from ₹2,999/month with low down payments and instant approval through our finance partners." },
  { q: "How long does it take to charge?", a: "Depending on the model, OMEV vehicles charge to 80% in as little as 3 to 4 hours using the standard fast charger." },
  { q: "What is the service schedule?", a: "We recommend a routine check-up every 3 months or 3,000 km, whichever comes first, at any authorized OMEV service center." },
];

const SUPPORT_LINKS = [
  {
    icon: ShieldCheck,
    title: "Warranty Support",
    desc: "Comprehensive warranty and hassle-free claims process.",
    cta: "Learn More",
  },
  {
    icon: BookOpen,
    title: "Download Manual",
    desc: "Access user manual and documents anytime, anywhere.",
    cta: "Download",
  },
  {
    icon: Headphones,
    title: "Roadside Assistance",
    desc: "24/7 support for a safe and worry-free riding experience.",
    cta: "Contact Now",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16 lg:pt-20 bg-white">
      <Navbar />
      <Hero />
      <ContactInfoStrip />
      <MessageAndMap />
      <LocationMap />
      <DealerCta />
      <FaqSection />
      <SupportSection />
      <SocialBand />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/contact-hero-scooter.jpg"
          alt="OMEV scooter in a dark showroom with glowing EV sign"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
        <p className="flex items-center gap-2 text-[#00D084] text-xs font-semibold tracking-widest uppercase mb-4">
          <span className="h-px w-6 bg-[#00D084]" />
          Contact Us
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight max-w-lg">
          Let&apos;s Build
          <br />
          the <span className="text-[#00D084]">Future Together.</span>
        </h1>
        <p className="mt-5 max-w-sm text-sm text-gray-400 leading-relaxed">
          Have a question, need support, or want to become a partner?
          We&apos;re here to help.
        </p>
        <button className="mt-8 inline-flex items-center gap-2 bg-[#00D084] hover:bg-[#00B874] text-black font-semibold px-6 py-3 rounded-full text-sm transition-colors">
          <Phone size={15} />
          Call Us Now
        </button>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact info strip                                                 */
/* ------------------------------------------------------------------ */

function ContactInfoStrip() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONTACT_CARDS.map(({ icon: Icon, title, line1, line2 }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md hover:border-[#00D084]/20 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center mb-4">
                <Icon size={18} className="text-[#00D084]" />
              </div>
              <h3 className="font-semibold text-sm text-black mb-1">{title}</h3>
              <p className="text-sm text-gray-700">{line1}</p>
              <p className="text-sm text-gray-400">{line2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Message form + office image                                        */
/* ------------------------------------------------------------------ */

function MessageAndMap() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <p className="flex items-center gap-2 text-[#00D084] text-xs font-semibold tracking-widest uppercase mb-3">
              <span className="h-px w-6 bg-[#00D084]" />
              Send Us a Message
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-8">
              We&apos;ll get back
              <br />
              to you soon.
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00D084]/50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00D084]/50"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00D084]/50"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00D084]/50"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00D084]/50 resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#00D084] hover:bg-[#00B874] text-black font-semibold px-6 py-3.5 rounded-full text-sm transition-colors"
              >
                Send Message
                <ArrowRight size={15} />
              </button>
            </form>
          </div>

          <div className="relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-0">
            <Image
              src="/images/contact-office.jpg"
              alt="OMEV office meeting room"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-xl font-extrabold text-white">
                OME<span className="text-[#00D084]">V</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Location map                                                       */
/* ------------------------------------------------------------------ */

function LocationMap() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-gray-100 aspect-[21/9]">
          <Image
            src="/images/contact-map.jpg"
            alt="Map showing OMEV headquarters location in Pune"
            fill
            className="object-cover"
          />
          <div className="absolute top-6 left-6 bg-black/90 backdrop-blur rounded-xl p-5 max-w-xs">
            <h3 className="text-white font-semibold text-sm mb-1">
              OMEV Headquarters
            </h3>
            <p className="text-gray-400 text-xs mb-3">
              Pune, Maharashtra, India
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#00D084] text-xs font-semibold"
            >
              View on Google Maps
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Dealer CTA banner                                                   */
/* ------------------------------------------------------------------ */

function DealerCta() {
  return (
    <section className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden min-h-[280px] flex items-center">
          <Image
            src="/images/contact-dealership.jpg"
            alt="OMEV dealership storefront at night"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
          <div className="relative z-10 px-8 py-12 max-w-md">
            <p className="flex items-center gap-2 text-[#00D084] text-xs font-semibold tracking-widest uppercase mb-3">
              <span className="h-px w-6 bg-[#00D084]" />
              Become an OMEV Dealer
            </p>
            <h2 className="text-3xl font-bold text-white leading-tight mb-3">
              Grow Your Business
              <br />
              with OMEV.
            </h2>
            <p className="text-sm text-gray-300 mb-6">
              Join India&apos;s fastest growing EV network and accelerate
              your success.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#00D084] hover:bg-[#00B874] text-black font-semibold px-6 py-3 rounded-full text-sm transition-colors">
              Apply Now
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ accordion                                                       */
/* ------------------------------------------------------------------ */

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-[#00D084] text-xs font-semibold tracking-widest uppercase mb-3">
          <span className="h-px w-6 bg-[#00D084]" />
          FAQs
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="rounded-xl border border-white/10 bg-[#111] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-white">
                    {faq.q}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 text-[#00D084]">
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Support / warranty / manual cards                                  */
/* ------------------------------------------------------------------ */

function SupportSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-[#00D084] text-xs font-semibold tracking-widest uppercase mb-3">
          <span className="h-px w-6 bg-[#00D084]" />
          We&apos;ve Got You Covered
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-10">
          Your Journey, Our Support
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {SUPPORT_LINKS.map(({ icon: Icon, title, desc, cta }) => (
            <div
              key={title}
              className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-[#00D084]/10 flex items-center justify-center mb-4">
                <Icon size={20} className="text-[#00D084]" />
              </div>
              <h3 className="font-semibold text-black mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#00D084] hover:text-[#00B874]"
              >
                {cta}
                <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Social follow band                                                  */
/* ------------------------------------------------------------------ */

function SocialBand() {
  return (
    <section className="relative bg-black py-20 overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/2 opacity-80">
        <Image
          src="/images/contact-social-scooter.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-[#00D084] text-xs font-semibold tracking-widest uppercase mb-3">
          <span className="h-px w-6 bg-[#00D084]" />
          Follow Our Journey
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-sm leading-tight mb-8">
          Follow Us for Updates and Latest News
        </h2>

        <div className="flex gap-3">
          {[FaInstagram, FaFacebook, FaLinkedin, FaYoutube].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#00D084] hover:text-[#00D084]"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
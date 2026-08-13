"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ProductCarouselProps {
  images?: string[];
  alt: string;
}

export default function ProductCarousel({ images, alt }: ProductCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const safeImages = images ?? [];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isPaused || safeImages.length <= 1) return;

    const interval = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const next = el.scrollLeft >= maxScroll - 5 ? 0 : el.scrollLeft + el.clientWidth;
      el.scrollTo({ left: next, behavior: "smooth" });
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused, safeImages.length]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveIndex(index);
  };

  if (safeImages.length === 0) return null;

  return (
    <div
      className="relative w-full h-full group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth h-full no-scrollbar"
      >
        {safeImages.map((src, i) => (
          <div key={i} className="relative shrink-0 w-full h-full snap-center">
            <Image
              src={src}
              alt={`${alt} view ${i + 1}`}
              fill
              className="object-contain p-6 sm:p-8"
            />
          </div>
        ))}
      </div>

      {safeImages.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {safeImages.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-5 bg-[#5fb129]" : "w-1.5 bg-black/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
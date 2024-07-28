"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const images = [
  "/assets/home/hero/hero1.png",
  "/assets/home/hero/hero2.png",
  "/assets/home/hero/hero3.png",
  "/assets/home/hero/hero4.png",
  "/assets/home/hero/hero5.png",
  "/assets/home/hero/hero3.png",
];

const extendedImages = [...images, ...images]; // Dua set gambar yang identik

const VerticalSlider = ({ direction, className = "" }) => {
  const sliderRef = useRef(null);
  const imagesRef = useRef([]);
  const directionValue = direction === "up" ? -100 : 100;

  useEffect(() => {
    const durationPerImage = 6; // Detik per gambar
    const totalDuration = durationPerImage * images.length;

    const ctx = gsap.context(() => {
      gsap.to(imagesRef.current, {
        yPercent: directionValue * images.length,
        ease: "none", // Gunakan easing linear untuk kecepatan yang konsisten
        duration: totalDuration,
        repeat: -1,
        modifiers: {
          yPercent: gsap.utils.wrap(-100 * images.length, 0),
        },
      });
    }, sliderRef);

    return () => ctx.revert();
  }, [direction]);

  return (
    <div
      className="relative overflow-hidden w-[208px] lg:w-[258px]"
      ref={sliderRef}
    >
      <div className="absolute inset-0 flex flex-col w-[208px] lg:w-[258px]">
        {extendedImages.map((src, index) => (
          <div
            key={index}
            className="relative mt-5 flex-shrink-0"
            ref={(el) => (imagesRef.current[index] = el)}
          >
            <Image
              className="rounded-[10px] border-4 border-secondary overflow-hidden lg:w-[258px] lg:h-[258px] w-[208px] h-[208px]"
              src={src}
              alt={`Slide ${index}`}
              width={258}
              height={258}
              layout="fixed"
              objectFit="cover"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider;

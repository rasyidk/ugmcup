"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

// Definisikan gambar untuk setiap jenis
const imageSets = {
  type1: [
    "/assets/home/kilasbalik/kb1.jpeg",
    "/assets/home/kilasbalik/kb2.jpeg",
    "/assets/home/kilasbalik/kb3.jpeg",
    "/assets/home/kilasbalik/kb4.jpeg",
    "/assets/home/kilasbalik/kb5.jpeg",
    "/assets/home/kilasbalik/kb6.jpeg",
  ],
  type2: [
    "/assets/home/kilasbalik/kb7.jpeg",
    "/assets/home/kilasbalik/kb8.jpeg",
    "/assets/home/kilasbalik/kb9.jpeg",
    "/assets/home/kilasbalik/kb10.jpeg",
    "/assets/home/kilasbalik/kb11.jpeg",
    "/assets/home/kilasbalik/kb12.jpeg",
  ],
  type3: [
    "/assets/home/kilasbalik/kb13.jpeg",
    "/assets/home/kilasbalik/kb14.jpeg",
    "/assets/home/kilasbalik/kb15.jpeg",
    "/assets/home/kilasbalik/kb16.jpeg",
    "/assets/home/kilasbalik/kb17.jpeg",
    "/assets/home/kilasbalik/kb18.jpeg",
  ],
  // Tambahkan lebih banyak jenis jika diperlukan
};

const VerticalSlider = ({ direction, type, className = "" }) => {
  const sliderRef = useRef(null);
  const imagesRef = useRef([]);
  const directionValue = direction === "up" ? -100 : 100;

  // Pilih gambar berdasarkan tipe
  const images = imageSets[type] || [];
  const extendedImages = [...images, ...images]; // Dua set gambar yang identik

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
  }, [direction, type]); // Tambahkan `type` sebagai dependensi untuk update jika tipe berubah

  return (
    <div
      className={`relative overflow-hidden w-[208px] lg:w-[258px] ${className}`}
      ref={sliderRef}
    >
      <div className="absolute inset-0 flex flex-col w-[208px] lg:w-[258px]">
        {extendedImages.map((src, index) => (
          <div
            key={index}
            className="relative mt-5 flex-shrink-0 w-[208px] h-[208px] lg:w-[258px] lg:h-[258px]"
            ref={(el) => (imagesRef.current[index] = el)}
          >
            <div className="relative w-full h-full">
              <Image
                className="rounded-[10px] border-4 border-secondary"
                src={src}
                alt={`Slide ${index}`}
                fill
                objectFit="cover"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider;

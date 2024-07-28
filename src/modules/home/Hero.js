"use client";
import Button from "@/components/Button";
import ClientComponent from "@/components/ClientComponent";
import RoundedImage from "@/components/RoundedImage";
import React from "react";

export default function Hero() {
  const images = [
    {
      dataaos: "zoom-in-down",
      src: "/assets/home/hero/hero1.png",
      alt: "UGM CUP 1",
      className:
        "w-[100px] h-[100px] left-4 absolute lg:mx-auto lg:left-0 lg:right-[500px] lg:top-10",
    },
    {
      dataaos: "zoom-in-down",
      src: "/assets/home/hero/hero2.png",
      alt: "UGM CUP 2",
      className:
        "w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] right-6 absolute lg:mx-auto lg:left-[500px] lg:right-0 lg:top-20",
    },
    {
      dataaos: "zoom-out-up",
      src: "/assets/home/hero/hero3.png",
      alt: "UGM CUP 3",
      className:
        "w-[120px] h-[120px] lg:w-[180px] lg:h-[180px] -left-10 bottom-2 absolute lg:mx-auto lg:left-0 lg:right-[900px]",
    },
    {
      dataaos: "zoom-in-up",
      src: "/assets/home/hero/hero4.png",
      alt: "UGM CUP 4",
      className:
        "w-[140px] h-[140px] lg:w-[250px] lg:h-[250px] mx-auto absolute left-0 right-0 bottom-2",
    },
    {
      dataaos: "zoom-in-up",
      src: "/assets/home/hero/hero5.png",
      alt: "UGM CUP 5",
      className:
        "w-[120px] h-[120px] -right-10 bottom-2 absolute lg:mx-auto lg:left-[900px] lg:right-0",
    },
  ];

  const ImageComponent = ({ dataaos, src, alt, className }) => (
    <RoundedImage dataaos={dataaos} src={src} alt={alt} className={className} />
  );
  return (
    <ClientComponent>
      <section className="min-h-screen relative">
        <div className="flex min-h-screen bg-primary ">
          <div className="flex flex-col items-center justify-center px-4 mx-auto md:w-4/5 lg:w-3/5 -mt-[90px] ">
            <p className="  text-[27px] lg:text-[64px] text-shadow-decoration font-integral text-secondary font-bold ">
              SHUTTLE SYMPOHONY
            </p>
            <p className=" text-[28px] lg:text-[64px] text-shadow-decoration font-integral text-secondary font-bold -mt-[10px] lg:-mt-4">
              HARMONY IN MOTION
            </p>

            <p className="text-black font-poppins font-medium text-[12px] mt-[10px] text-center lg:text-[18px]">
              Ajang tahunan oleh Unit Kegiatan Mahasiswa Bulutangkis UGM,
              Kejuaraan
              <span className="hidden lg:inline">
                <br />
              </span>{" "}
              Bulutangkis Nasional antar Mahasiswa dan SMA/SMK 2024.
            </p>

            <Button className="text-[12px] font-poppins font-regular mt-[20px] lg:text-[18px]">
              Jadwal Pertandingan
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 h-1/3 w-full overflow-hidden z-20">
          {images.map((image, index) => (
            <ImageComponent key={index} {...image} />
          ))}
        </div>

        <div className="absolute lg:bottom-[230px] bottom-[120px] lg:-left-40 -left-[100px] overflow-hidden -rotate-90 ">
          <p className=" font-bebas lg:text-[350px] text-[90px] text-outline-decoration text-transparent tracking-[0.2em] lg:tracking-[0em]">
            UGM CUP
          </p>
        </div>
      </section>
    </ClientComponent>
  );
}

import EventCard from "@/components/EventCard";
import Image from "next/image";
import React from "react";

export default function GetToKnow() {
  return (
    <section className="min-h-screen flex flex-col bg-[#EDEEF2] ">
      <div className="relative pt-16 h-[250px] ">
        <div className=" absolute right-0 w-[100px] h-[100px] lg:w-[278px] lg:h-[226px]  ">
          <Image
            src="/assets/home/gettoknow/gtk_ornament_right.svg"
            alt="ornament"
            layout="fixed"
            width={278}
            height={278}
            objectFit="cover"
          />
        </div>

        <div className="absolute z-10 flex flex-col w-full justify-center lg:mt-10">
          <p className="text-[24px] lg:text-[36px] text-shadow-decoration font-integral text-center">
            GET TO KNOW
          </p>

          <p className="text-[48px] lg:text-[96px] text-primary font-bold text-shadow-decoration font-integral text-center -mt-2">
            UGM CUP
            <span className="block lg:inline mt-[-0.5em]">
              {" "}
              {/* Adjust mt to reduce space */}
              2024
            </span>
          </p>
        </div>
        <div className=" absolute left-0 w-[100px] h-[100px] lg:w-[278px] lg:h-[226px] ">
          <Image
            src="/assets/home/gettoknow/gtk_ornament_left.svg"
            alt="ornament"
            layout="fixed"
            width={278}
            height={278}
            objectFit="cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen p-4 -mt-20 z-30">
        <div className="container mx-auto flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:gap-10">
          <EventCard />
          <div className="w-full lg:w-1/2 lg:flex lg:flex-row  lg:items-center ">
            <p className="font-poppins text-black  lg:text-[20px]">
              UGM CUP 2024 merupakan kegiatan tahunan Universitas Gadjah Mada
              yang diselenggarakan oleh Unit Kegiatan Mahasiswa Bulutangkis
              Universitas Gadjah Mada. UGM Cup 2024 berupa ajang Kejuaraan
              Bulutangkis antar Mahasiswa yang berasal dari berbagai universitas
              dan tahun ini akan membuka kompetisi pada kategori SMA/SMK
              sederajat berskala nasional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

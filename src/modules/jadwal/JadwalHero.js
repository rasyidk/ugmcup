import React from "react";

export default function JadwalHero() {
  return (
    <section className="bg-[#EDEEF2] pt-[122px] p-4">
      <div className="flex flex-col container mx-auto">
        <p className="text-center font-integral font-bold text-[16px] lg:text-[32px] text-black">
          JADWAL PERTANDINGAN
        </p>
        <p className="text-center font-integral font-bold text-[32px] lg:text-[64px] text-shadow-decoration text-primary">
          UGM CUP 2024
        </p>
        <p className="text-center font-poppins text-[12px] lg:text-[16px] text-black">
          Ikuti perkembangan lengkap UGM CUP 2024 dan jangan lewatkan aksi seru
          setiap pertandingannya!
        </p>
      </div>
    </section>
  );
}

import React from "react";

export default function BaganHero() {
  return (
    <section className="bg-[#EDEEF2] pt-[122px] p-4">
      <div className="flex flex-col container mx-auto">
        <p className="text-center font-integral font-bold text-[16px] lg:text-[32px] text-black">
          BAGAN PERTANDINGAN
        </p>
        <p className="text-center font-integral font-bold text-[32px] lg:text-[64px] text-shadow-decoration text-primary">
          UGM CUP 2024
        </p>
        <p className="text-center font-poppins text-[12px] lg:text-[16px] text-black">
          Jelajahi perjalanan setiap tim dan pemain di UGM CUP 2024 <br></br>{" "}
          dari babak penyisihan hingga final dengan bagan yang <br></br> lengkap
          dan terperinci!
        </p>
      </div>
    </section>
  );
}

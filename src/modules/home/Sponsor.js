import React from "react";
import Image from "next/image";

const sponsors = [
  {
    id: 2,
    name: "Sponsor 2",
    imageUrl: "/assets/home/sponsor/sponsor_patra.svg",
  },
  {
    id: 1,
    name: "Sponsor 1",
    imageUrl: "/assets/home/sponsor/sponsor_alumni.svg",
  },
];

export default function Sponsor() {
  return (
    <div className=" bg-primary">
      <div className="container mx-auto">
        <div className="p-4 flex-col flex ">
          <p className="text-center text-[40px] lg:text-[64px] text-shadow-decoration font-integral  text-secondary mt-4">
            OUR PARTNER
          </p>
          <div className="bg-[#F8F8F8] border-secondary border-[10px] mt-6 rounded-[10px] mb-[60px]">
            <div className="flex flex-col lg:flex-row">
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="px-6 py-1 lg:py-16 lg:mb-0 lg:flex-1 lg:px-4"
                >
                  <div className="relative w-full h-48 ">
                    <Image
                      src={sponsor.imageUrl}
                      alt={sponsor.name}
                      layout="fill"
                      objectFit="contain" // menyesuaikan gambar agar tetap dalam kotak tanpa terpotong
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

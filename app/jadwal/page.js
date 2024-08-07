import { JadwalProvider } from "@/context/JadwalContext";
import DateNav from "@/modules/jadwal/DateNav";
import FilterCategory from "@/modules/jadwal/FilterCategory";
import JadwalHero from "@/modules/jadwal/JadwalHero";
import TabBar from "@/modules/jadwal/TabBar";
import React from "react";

export default function Jadwal() {
  return (
    <JadwalProvider>
      <main className="bg-[#EDEEF2]">
        <JadwalHero />
        <TabBar />
        <DateNav />
        <FilterCategory />
      </main>
    </JadwalProvider>
  );
}

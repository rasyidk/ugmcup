"use client";
import Dropdown from "@/components/Dropdown";
import React, { useState } from "react";

const data = [
  {
    id: 0,
    nomorpertandingan: "TUNGGAL PUTRA (MS)",
    kategori: "UNIVERSITAS",
    href: "#",
  },
  {
    id: 1,
    nomorpertandingan: "TUNGGAL PUTRA (MS)",
    kategori: "SMA/SMK",
    href: "#",
  },
  {
    id: 2,
    nomorpertandingan: "TUNGGAL PUTRI (WS)",
    kategori: "UNIVERSITAS",
    href: "#",
  },
  {
    id: 3,
    nomorpertandingan: "TUNGGAL PUTRI (WS)",
    kategori: "SMA/SMK",
    href: "#",
  },
  {
    id: 4,
    nomorpertandingan: "GANDA PUTRA (MD)",
    kategori: "UNIVERSITAS",
    href: "#",
  },
  {
    id: 5,
    nomorpertandingan: "GANDA PUTRA (MD)",
    kategori: "SMA/SMK",
    href: "#",
  },
  {
    id: 6,
    nomorpertandingan: "GANDA PUTRI (WD)",
    kategori: "UNIVERSITAS",
    href: "#",
  },
  {
    id: 7,
    nomorpertandingan: "GANDA PUTRI (WD)",
    kategori: "SMA/SMK",
    href: "#",
  },
  {
    id: 8,
    nomorpertandingan: "GANDA CAMPURAN (XD)",
    kategori: "UNIVERSITAS",
    href: "#",
  },
  {
    id: 9,
    nomorpertandingan: "GANDA CAMPURAN (XD)",
    kategori: "SMA/SMK",
    href: "#",
  },
];

export default function FilterCategory() {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSelectItem = (item) => {
    console.log("Selected Item Function Called:", item); // Debugging
    setSelectedItem(item);
  };
  return (
    <section>
      <div className="p-4 flex flex-row gap-5">
        <div className="flex items-center justify-end w-[50%]">
          <p className="text-black font-poppins text-[12px] lg:text-[18px]">
            Filter berdasarkan kategori
          </p>
        </div>
        <div className="text-black font-poppins w-[50%]">
          <Dropdown data={data} onSelectItem={handleSelectItem} />
        </div>
      </div>
    </section>
  );
}

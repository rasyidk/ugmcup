"use client";
import Dropdown from "@/components/Dropdown";
import React, { useState } from "react";
import { useJadwalContext } from "@/context/JadwalContext";

const data = [
  {
    id: 0,
    nomorpertandingan: "SEMUA PERTANDINGAN",
  },
  {
    id: 1,
    nomorpertandingan: "TUNGGAL PUTRA (MS)",
  },
  {
    id: 2,
    nomorpertandingan: "TUNGGAL PUTRI (WS)",
  },
  {
    id: 3,
    nomorpertandingan: "GANDA PUTRA (MD)",
  },
  {
    id: 4,
    nomorpertandingan: "GANDA PUTRI (WD)",
  },
  {
    id: 5,
    nomorpertandingan: "GANDA CAMPURAN (XD)",
  },
  {
    id: 6,
    nomorpertandingan: "BEREGU (TM) TUNGGAL PUTRA",
  },
  {
    id: 7,
    nomorpertandingan: "BEREGU (TM) TUNGGAL PUTRI",
  },
  {
    id: 8,
    nomorpertandingan: "BEREGU (TM) GANDA PUTRA",
  },
  {
    id: 9,
    nomorpertandingan: "BEREGU (TM) GANDA PUTRI",
  },
  {
    id: 10,
    nomorpertandingan: "BEREGU (TM) GANDA CAMPURAN",
  },
];

export default function FilterCategory() {
  const [selectedItem, setSelectedItem] = useState(null);
  const { setData } = useJadwalContext();
  const handleSelectItem = (item) => {
    setData((prevState) => ({
      ...prevState,
      categoryId: item.id,
      nomorpertandingan: item.nomorpertandingan,
    }));
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

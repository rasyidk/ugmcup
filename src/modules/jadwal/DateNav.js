"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useJadwalContext } from "@/context/JadwalContext";

const dates = [
  { id: 0, day: "SEMUA", date: "HARI", actualDate: "allday" },
  { id: 1, day: "SEN", date: "19 AGS", actualDate: "2024-08-19" },
  { id: 2, day: "SEL", date: "20 AGS", actualDate: "2024-08-20" },
  { id: 3, day: "RAB", date: "21 AGS", actualDate: "2024-08-21" },
  { id: 4, day: "KAM", date: "22 AGS", actualDate: "2024-08-22" },
  { id: 5, day: "JUM", date: "23 AGS", actualDate: "2024-08-23" },
  { id: 6, day: "SAB", date: "24 AGS", actualDate: "2024-08-24" },
];

const DateNavigation = () => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);

  const { setData } = useJadwalContext();

  const handleDateClick = (index) => {
    setData((prevData) => ({
      ...prevData,
      dateId: index,
      actualDate: dates[index].actualDate,
    }));
    setSelectedDateIndex(index);
  };

  return (
    <section className="bg-[#EDEEF2] flex flex-col ">
      <div className="overflow-x-auto overflow-y-hidden no-scrollbar px-4 whitespace-nowrap py-4 items-center justify-center  lg:flex lg:flex-col ">
        <div className="inline-flex mx-auto space-x-4 ">
          {dates.map((dateItem, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-[108px] h-[81px] rounded-md cursor-pointer ${
                index === selectedDateIndex
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 outline outline-1 outline-primary"
              }`}
              onClick={() => handleDateClick(index)}
            >
              <span className="font-integral text-[16px]">{dateItem.day}</span>
              <span className="text-lg font-integral text-[20px]">
                {dateItem.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DateNavigation;

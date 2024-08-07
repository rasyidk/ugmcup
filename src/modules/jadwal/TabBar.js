"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useJadwalContext } from "@/context/JadwalContext";

export default function TabBar() {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const { query } = router;
  const pathname = usePathname();

  const tabs = [
    { id: 0, label: "Semua" },
    { id: 1, label: "Universitas" },
    { id: 2, label: "SMA/SMK" },
  ];


  const { setData } = useJadwalContext();
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setData((prevState) => ({ ...prevState, tabId }));
  };

  const getClassName = (tabIndex) =>
    `block px-4 py-3 w-full text-center rounded-[16px] ${
      activeTab === tabIndex
        ? "text-black bg-white font-poppins font-bold"
        : "hover:text-[#6B7280]  "
    }`;

  return (
    <section>
      <div className="p-4">
        <div className="container mx-auto bg-[#E5E7EB] p-1 rounded-[16px] lg:w-[40%]">
          <ul className="flex flex-wrap text-sm font-medium text-gray-500 dark:text-gray-400 font-poppins ">
            {tabs.map((tab) => (
              <li key={tab.id} className="w-1/3">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default link behavior
                    handleTabClick(tab.id);
                  }}
                  className={getClassName(tab.id)}
                  aria-current={activeTab === tab.id ? "page" : undefined}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

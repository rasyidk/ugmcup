"use client";
import React, { act, createContext, useContext, useState } from "react";

const JadwalContext = createContext();

export const JadwalProvider = ({ children }) => {
  const [data, setData] = useState({
    dateId: 0,
    actualDate: "allday",
    tabId: 0,
    tabKategori: "Semua",
    categoryId: 0,
    nomorpertandingan: "SEMUA PERTANDINGAN",
  });

  return (
    <JadwalContext.Provider value={{ data, setData }}>
      {children}
    </JadwalContext.Provider>
  );
};

export const useJadwalContext = () => useContext(JadwalContext);

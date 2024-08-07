"use client";
import React, { createContext, useContext, useState } from "react";

const JadwalContext = createContext();

export const JadwalProvider = ({ children }) => {
  const [data, setData] = useState({ dateId: 0, tabId: 0 });

  return (
    <JadwalContext.Provider value={{ data, setData }}>
      {children}
    </JadwalContext.Provider>
  );
};

export const useJadwalContext = () => useContext(JadwalContext);

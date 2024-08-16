"use client";
import React, { act, createContext, useContext, useState } from "react";

const BaganContext = createContext();

export const BaganProvider = ({ children }) => {
  const [data, setData] = useState({
    tabId: 0,
    tabKategori: "Universitas",
  });

  return (
    <BaganContext.Provider value={{ data, setData }}>
      {children}
    </BaganContext.Provider>
  );
};

export const useBaganContext = () => useContext(BaganContext);

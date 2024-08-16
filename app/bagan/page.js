import { BaganProvider } from "@/context/BaganContext";
import BaganHero from "@/modules/bagan/BaganHero";
import BaganSection from "@/modules/bagan/BaganSection";
import TabBarBagan from "@/modules/bagan/TabBarBagan";
import React from "react";

export default function Bagan() {
  return (
    <BaganProvider>
      <main>
        {" "}
        <BaganHero />
        <TabBarBagan />
        <BaganSection />
      </main>
    </BaganProvider>
  );
}

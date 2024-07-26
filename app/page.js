import GetToKnow from "@/modules/home/GetToKnow";
import Hero from "@/modules/home/Hero";
import KilasBalik from "@/modules/home/KilasBalik";
import LokasiPertandingan from "@/modules/home/LokasiPertandingan";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <GetToKnow />
      <KilasBalik />
      <LokasiPertandingan />
    </main>
  );
}

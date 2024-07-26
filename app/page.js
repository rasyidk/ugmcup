import GetToKnow from "@/modules/home/GetToKnow";
import Hero from "@/modules/home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <GetToKnow />
    </main>
  );
}

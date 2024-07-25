import { Poppins, Bebas_Neue } from "next/font/google";
import localFont from "@next/font/local";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const integral = localFont({
  src: [
    {
      path: "../public/fonts/IntegralCF-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/IntegralCF-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-integral",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
  variable: "--font-poppins",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

export const metadata = {
  title: "UGM CUP 2024",
  description: "UGM CUP 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${integral.variable} ${poppins.variable} ${bebasNeue.variable}`}
      >
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}

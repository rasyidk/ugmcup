import VerticalSlider from "@/components/VerticalSlider";
import Image from "next/image";
import React from "react";

export default function KilasBalik() {
  return (
    <section className=" bg-primary h-screen lg:h-[50vh] relative">
      <div className=" absolute bottom-0 left-0">
        <Image
          src="/assets/home/kilasbalik/kilasbalik_ornament1.svg"
          width={200}
          height={100}
        />
      </div>
      <div className=" container mx-auto ">
        <div className="flex flex-col ">
          <div className="flex flex-col lg:space-y-0 lg:flex-row lg:gap-10 h-screen lg:h-[50vh]">
            <div className="flex flex-col lg:w-4/12 justify-center p-4">
              <p className="text-shadow-decoration text-secondary font-integral font-bold text-[25px] text-left lg:text-[64px] m-0">
                Kilas Balik
              </p>
              <p className="text-shadow-decoration text-secondary font-integral font-bold text-[48px]  lg:text-[90px] -mt-4 lg:-mt-8">
                UGM CUP
              </p>
            </div>

            <div className="hidden  h-screen  w-full lg:w-8/12 lg:flex flex-row gap-5 justify-center ">
              <VerticalSlider direction="up" />
              <VerticalSlider direction="down" />
              <VerticalSlider direction="up" />
            </div>

            <div className="lg:hidden  h-screen flex relative w-full lg:w-8/12 gap-5 justify-center overflow-hidden">
              <div className="absolute -left-[40%] top-0 h-screen w-[208px]  flex">
                <VerticalSlider direction="up" />
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 h-screen w-[208px]  flex overflow-hidden">
                <VerticalSlider direction="down" />
              </div>

              <div className="absolute -right-[40%] top-0 h-screen w-[208px] flex overflow-hidden">
                <VerticalSlider direction="up" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

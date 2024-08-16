import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LokasiPertandingan() {
  return (
    <section className="relative bg-[#EDEEF2]">
      <div className=" absolute right-0 w-[100px] h-[100px] ">
        <Image
          src="/assets/home/lokasipertandingan/lokasi_ornament1.svg"
          alt="ornament"
          layout="fixed"
          width={100}
          height={100}
          objectFit="cover"
        />
      </div>

      <div className=" absolute left-0 bottom-0 w-[100px]  lg:hidden">
        <Image
          src="/assets/home/lokasipertandingan/lokasi_ornament2a.svg"
          alt="ornament"
          layout="fixed"
          width={100}
          height={100}
          objectFit="cover"
        />
      </div>

      <div className=" absolute left-0 bottom-0 w-[212px]   hidden lg:block">
        <Image
          src="/assets/home/lokasipertandingan/lokasi_ornament2b.svg"
          alt="ornament"
          layout="fixed"
          width={212}
          height={100}
          objectFit="cover"
        />
      </div>

      <div className="container mx-auto py-8">
        <div className="flex flex-col items-center justify-center p-4 ">
          <div className="flex flex-col lg:space-y-0 lg:flex-row lg:gap-10">
            <div className="flex flex-col lg:w-1/2 lg:order-2">
              <p className="text-shadow-decoration text-primary font-integral font-bold text-[35px] text-center lg:text-left lg:text-[64px] m-0">
                Lokasi{" "}
                <span className="inline lg:block mt-[-0.5em]">
                  Pertandingan
                </span>
              </p>
              <p className="font-poppins text-[14px] text-black text-center lg:text-left lg:text-[18px] lg:mt-[20px] mt-2">
                <b>UGM CUP 2024</b> akan diadakan di GOR Pancasila, Universitas
                Gadjah Mada, dari tanggal <b>19 hingga 24 Agustus 2024</b>{" "}
                Saksikan pertandingan seru dari tim-tim terbaik Universitas dan
                SMA/SMK se-Indonesia dalam turnamen Badminton tingkat nasional
                ini. Jangan lewatkan kesempatan untuk merasakan atmosfer
                kompetisi dan dukung tim favorit Anda langsung dari arena!
              </p>
            </div>

            <div className="lg:w-1/2 mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.3157976025383!2d110.3694120142083!3d-7.770384794409485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59ef7f0b845b%3A0x7d06eb7cf41a1a41!2sGOR%20Pancasila%2C%20Universitas%20Gadjah%20Mada!5e0!3m2!1sen!2sid!4v1626173846920!5m2!1sen!2sid"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <Link href="https://www.google.com/maps/place/GOR+Pancasila+UGM/@-7.769173,110.3814421,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a593bf3372dd7:0xf06a25ad07e2c6bd!8m2!3d-7.7691783!4d110.384017!16s%2Fg%2F11tx1rglb0?entry=ttu">
            <Button className="text-[12px] font-poppins font-regular mt-[20px] lg:mt-[40px] bg-primary text-white lg:font-integral lg:text-[24px]">
              LIHAT DI GOOGLE MAPS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

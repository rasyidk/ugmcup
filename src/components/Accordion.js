"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className=" shadow-md rounded-lg mb-2">
      <button
        onClick={onClick}
        className={`flex items-center justify-between w-full p-4 text-left text-gray-900 bg-white hover:bg-gray-300 ${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        }`}
      >
        <span className=" font-integral text-sm lg:text-lg">{title}</span>
        <span className="ml-2">
          {isOpen ? (
            <FaChevronUp className="w-5 h-5" />
          ) : (
            <FaChevronDown className="w-5 h-5" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-[850px]" : "max-h-0"
        }`}
      >
        <div className="p-4 bg-white border-t border-gray-300 rounded-b-md">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items, type }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // alert(items);

  if (!items) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p> {/* Loading indicator */}
      </div>
    );
  }

  return (
    <div>
      {items.length > 0 ? (
        type === "Beregu" ? (
          <div>
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                title={"Beregu " + item.kategori + " GROUP " + item.group}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              >
                {/* {alert(JSON.stringify(item.klasemen))} */}

                <div className="hidden lg:block">
                  <div className="flex flex-row text-[18px] py-2">
                    <div className="w-1/2  flex flex-row font-poppins font-bold text-black">
                      <div className="w-2/12  text-center text-black">Rank</div>
                      <div className="w-10/12   text-black">Team</div>
                    </div>
                    <div className="w-1/2 ">
                      <div className="grid grid-cols-5 gap-4 font-poppins font-bold text-black">
                        <p className="text-center text-black">MP</p>
                        <p className="text-center text-black">W</p>
                        <p className="text-center text-black">L</p>
                        <p className="text-center text-black">Games</p>
                        <p className="text-center text-black">Points</p>
                      </div>
                    </div>
                  </div>

                  {item.klasemen
                    ? item.klasemen
                        .slice()
                        .sort((a, b) => {
                          if (b.mp === a.mp) {
                            return b.points - a.points;
                          }
                          return b.mp - a.mp;
                        })
                        .map((klasemen, index) => (
                          <div
                            className={`flex flex-row py-2 ${
                              index % 2 !== 0 ? "bg-gray-300" : "text-black"
                            }`}
                          >
                            <div className="w-1/2 flex flex-row font-poppins text-black text-[18px]">
                              <div className="w-2/12 text-center text-black">
                                {index + 1}
                              </div>
                              <div className="w-10/12   text-black flex flex-row items-center">
                                <Image
                                  src={
                                    process.env.NEXT_PUBLIC_ASEETS_URL +
                                    klasemen.logo_team
                                  }
                                  alt="Player A1"
                                  width={32}
                                  height={32}
                                  unoptimized
                                  className="rounded-full h-8 w-8"
                                />
                                <p className="ml-2">{klasemen.team}</p>
                              </div>
                            </div>
                            <div className="w-1/2 ">
                              <div className="grid grid-cols-5 gap-4 font-poppins font-bold text-black">
                                <p className="text-center text-black">
                                  {klasemen.mp}
                                </p>
                                <p className="text-center text-black">
                                  {klasemen.w}
                                </p>
                                <p className="text-center text-black">
                                  {klasemen.l}
                                </p>
                                <p className="text-center text-black">
                                  {klasemen.games}
                                </p>
                                <p className="text-center text-black">
                                  {klasemen.points}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                    : null}
                </div>

                <div className="block lg:hidden">
                  <div className="flex flex-row text-black font-poppins font-bold">
                    <p className="w-2/12 text-center">Rank</p>
                    <p className="w-8/12 text-center ">Team</p>
                    <p className="w-2/12 text-center">MP</p>
                  </div>

                  {item.klasemen
                    ? item.klasemen
                        .slice()
                        .sort((a, b) => {
                          if (b.mp === a.mp) {
                            return b.points - a.points;
                          }
                          return b.mp - a.mp;
                        })
                        .map((klasemen, index) => (
                          <div
                            className={`flex flex-row text-black font-poppins text-[14px] py-2 ${
                              index % 2 !== 0 ? "bg-gray-300" : "text-black"
                            }`}
                          >
                            <p className="w-2/12 text-center">{index + 1}</p>
                            <div className="w-8/12 flex flex-row">
                              <Image
                                src={
                                  process.env.NEXT_PUBLIC_ASEETS_URL +
                                  klasemen.logo_team
                                }
                                alt="Player A1"
                                width={24}
                                height={24}
                                unoptimized
                                className="rounded-full h-6 w-6"
                              />
                              <p className="ml-2">{klasemen.team}</p>
                            </div>
                            <p className="w-2/12 text-center">{klasemen.mp}</p>
                          </div>
                        ))
                    : null}
                </div>
              </AccordionItem>
            ))}
          </div>
        ) : (
          <div>
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.nomor_pertandingan}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              >
                <iframe
                  src={item.link_bagan}
                  width="100%"
                  height="800px"
                  className="border border-gray-300 rounded-md"
                  title={item.nomor_pertandingan}
                ></iframe>
              </AccordionItem>
            ))}
          </div>
        )
      ) : (
        <div className="flex justify-center items-center h-screen">
          <p>No items found</p> {/* Empty state message */}
        </div>
      )}
    </div>
  );
};

export default Accordion;

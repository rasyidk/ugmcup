"use client";
import Accordion from "@/components/Accordion";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useBaganContext } from "@/context/BaganContext";

export default function BaganSection() {
  const [accordionItems, setAccordionItems] = useState([]);
  const { data } = useBaganContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBagan = async () => {
      try {
        setLoading(true);
        const kategori = data.tabKategori;
        const filterData =
          data.tabId === 2
            ? "klasemen-beregus?populate[klasemen][populate][team][populate]=*"
            : `bagans?filters[kategori][$eq]=${kategori}`;
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/${filterData}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`,
            },
          }
        );

        if (data.tabId === 2) {
          const items = response.data.data.map((item) => ({
            kategori: item.attributes.kategori,
            group: item.attributes.group,
            klasemen: item.attributes.klasemen.map((klasemen) => ({
              mp: klasemen.MP,
              w: klasemen.W,
              l: klasemen.L,
              games: klasemen.games,
              points: klasemen.points,
              team: klasemen.team.data.attributes.nama_team,
              logo_team:
                klasemen.team.data.attributes.logo_team.data.attributes.url,
            })),
          }));
          setAccordionItems(items);
        } else {
          const items = response.data.data.map((item) => ({
            nomor_pertandingan: item.attributes.nomor_pertandingan,
            link_bagan: item.attributes.link_bagan,
          }));

          setAccordionItems(items);
        }
      } catch (error) {
        console.error("Error fetching bagans:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchBagan();
  }, [data]);

  if (loading) {
    return (
      <div className="flex justify-center bg-[#EDEEF2] py-8">
        <p className="text-black">Loading...</p> {/* Loading indicator */}
      </div>
    );
  }

  return (
    <section className="flex flex-col bg-[#EDEEF2]">
      <div className="container mx-auto p-4 lg:p-0">
        <Accordion items={accordionItems} type={data.tabKategori} />
      </div>
    </section>
  );
}

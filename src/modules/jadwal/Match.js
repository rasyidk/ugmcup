"use client";
import MatchCard from "@/components/MatchCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiChevronLeft, FiChevronRight, FiAlertCircle } from "react-icons/fi";
import { useJadwalContext } from "@/context/JadwalContext";

export default function Match() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null); // State untuk menyimpan error
  const [tabId, setTabId] = useState(0);
  const [dateId, setDateId] = useState(0);
  const [actualDate, setActualDate] = useState("");
  const [categoryId, setCategoryId] = useState(0);

  const { data } = useJadwalContext();

  useEffect(() => {
    const fetchMatches = async () => {
      setLoading(true);
      setError(null);

      try {
        setTabId(data.tabId);
        setDateId(data.dateId);
        setCategoryId(data.categoryId);

        const filterKategori =
          data.tabKategori !== "Semua"
            ? `filters[kategori][$eq]=${data.tabKategori}&`
            : "";

        const filterDate =
          data.actualDate !== "allday"
            ? `filters[datetime][$contains]=${data.actualDate}&`
            : "";

        const nomorpertandinganURI = encodeURIComponent(data.nomorpertandingan)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29");

        const filterNomorPertandingan =
          data.nomorpertandingan !== "SEMUA PERTANDINGAN"
            ? `filters[nomor_pertandingan][$eq]=${nomorpertandinganURI}&`
            : "";

        const url = `${process.env.NEXT_PUBLIC_API_URL}/matches?${filterKategori}${filterDate}${filterNomorPertandingan}pagination[page]=${page}&populate[ResultsMatch]=*&pagination[pageSize]=10&populate[player_A1][populate][team][populate][logo_team]=*&populate[player_A2][populate][team][populate][logo_team]=*&populate[player_B1][populate][team][populate][logo_team]=*&populate[player_B2][populate][team][populate][logo_team]=*&sort[0]=datetime:asc`;

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`,
          },
        });

        if (response.status === 200 && response.data.data) {
          const newMatches = response.data.data;
          setMatches(newMatches.length > 0 ? newMatches : []); // Periksa apakah data tidak kosong
          setTotalPages(response.data.meta.pagination.pageCount); // Set total pages from response
          const matchCount = response.data.data ? response.data.data.length : 0;
          if (matchCount === 0) {
            setError("No matches found.");
            setMatches([]);
          }
        } else {
          setError("No matches found.");
          setMatches([]);
        }
      } catch (error) {
        console.error("Error fetching matches:", error);
        setError("Failed to Get Data"); // Set error jika ada masalah dalam fetch
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [page, data]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const range = 1; // Number of pages to show around the current page

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= page - range && i <= page + range)
      ) {
        pages.push(i);
      } else if (i === page - range - 1 || i === page + range + 1) {
        pages.push("...");
      }
    }

    return pages.map((number, index) => (
      <React.Fragment key={index}>
        {number === "..." ? (
          <span className="py-2 px-3 border rounded text-blue-500">...</span>
        ) : (
          <button
            onClick={() => handlePageChange(number)}
            className={`py-2 px-3 border rounded ${
              page === number ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {number}
          </button>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="min-h-screen bg-[#EDEEF2] flex flex-col ">
      <div className="container mx-auto">
        {error ? (
          <div className="text-red-500 text-center mt-4 flex items-center justify-center text-sm lg:text-lg">
            <FiAlertCircle className="w-6 h-6 mr-2" />
            <span>{error}</span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {matches.map((match) => (
                <MatchCard key={match.id} match={match.attributes} /> // Pass the match data to MatchCard if needed
              ))}
            </div>
            <div className="mt-4 flex flex-col items-center font-poppins">
              {loading && (
                <p className="text-black text-xl py-16">Loading...</p>
              )}
              <div className="flex space-x-2 mb-4">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className="py-2 px-3 bg-white text-black rounded disabled:opacity-50"
                >
                  <FiChevronLeft className="w-4 h-4" />
                </button>
                {renderPageNumbers()}
                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                  className="py-2 px-3 bg-white text-black rounded disabled:opacity-50"
                >
                  <FiChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

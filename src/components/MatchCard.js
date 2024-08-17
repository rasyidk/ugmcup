import Image from "next/image";
import Winner from "./Winner";

export default function MatchCard({ match }) {
  function convertToWIBAndDay(dateString) {
    const date = new Date(dateString);

    const options = {
      weekday: "long", // Nama hari dalam bahasa Indonesia
      day: "numeric", // Tanggal
      month: "long", // Nama bulan dalam bahasa Indonesia
      year: "numeric", // Tahun
      hour: "2-digit", // Jam dalam format 24 jam
      minute: "2-digit", // Menit
      timeZone: "Asia/Jakarta",
    };

    const formatter = new Intl.DateTimeFormat("id-ID", options);

    return formatter.format(date);
  }
  return (
    <div className="rounded-lg  w-full px-4 py-2 ">
      <div className="flex flex-col">
        <div className=" bg-[#D7EFF6]  rounded-t-lg px-4 py-2 flex flex-row">
          <p className=" text-[10px] lg:text-[14px] text-left font-integral text-black">
            {match.stage} • {match.nomor_pertandingan} • {match.kategori}
          </p>
        </div>
        <div className=" bg-white flex flex-col">
          {match.skor_akhir_A === 2 ? (
            <div className="flex flex-row px-4 pt-2 lg:px-0 lg:py-0">
              <div className="block lg:hidden">
                <Winner />
              </div>
            </div>
          ) : null}

          <div className="flex flex-row h-20 lg:h-24">
            <div className="flex flex-col w-7/12 lg:w-6/12  px-4 py-2 justify-center">
              <div className="w-full flex flex-row items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0">
                  {match.player_A1.data.attributes.team.data ? (
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_ASEETS_URL +
                        match.player_A1.data.attributes.team.data.attributes
                          .logo_team.data.attributes.url
                      }
                      alt="Player A1"
                      width={32}
                      height={32}
                      unoptimized
                      className="rounded-full"
                    />
                  ) : null}
                </div>
                <p className="text-black font-poppins text-[12px] lg:text-[16px] ml-1">
                  {match.player_A1.data.attributes.nama_player}
                </p>
              </div>

              {match.nomor_pertandingan.includes("GANDA") ? (
                <div className="w-full flex flex-row items-center mt-1 ">
                  <div className="flex items-center justify-center w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0">
                    {match.player_A2.data.attributes.team.data ? (
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_ASEETS_URL +
                          match.player_A2.data.attributes.team.data.attributes
                            .logo_team.data.attributes.url
                        }
                        alt="Player A2"
                        width={32}
                        height={32}
                        unoptimized
                        className="rounded-full"
                      />
                    ) : null}
                  </div>
                  <p className="text-black font-poppins text-[12px] lg:text-[16px] ml-1">
                    {match.player_A2.data.attributes.nama_player}
                  </p>
                </div>
              ) : null}
            </div>

            <div className="items-center flex w-0 lg:w-2/12 ">
              <div className="hidden lg:block">
                {match.skor_akhir_A === 2 ? <Winner /> : null}
              </div>
            </div>

            <div className="w-5/12 lg:w-4/12 flex items-center justify-end  pr-4 ">
              <div className=" flex-col flex">
                <div className="flex space-x-6 justify-end text-black lg:text-[16px]">
                  <p className="font-poppins font-bold">
                    {match.skor_akhir_A ? match.skor_akhir_A : 0}
                  </p>
                  {[
                    ...match.ResultsMatch,
                    ...Array(3 - match.ResultsMatch.length).fill({
                      skor_A: 0,
                      skor_B: 0,
                    }),
                  ].map((result, index) => (
                    <p key={index}>{result.skor_A}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr class="h-1 bg-gray-200 border-0 mx-2"></hr>

        <div className="flex flex-col bg-white ">
          {match.skor_akhir_B === 2 ? (
            <div className="flex flex-row px-4 pt-2 lg:px-0 lg:py-0">
              <div className="block lg:hidden">
                <Winner />
              </div>
            </div>
          ) : null}
          <div className="flex flex-row h-20 lg:h-24  ">
            <div className="flex flex-col w-7/12 lg:w-6/12  px-4 pt-2 justify-center">
              <div className="w-full flex flex-row items-center">
                <div className="flex items-center justify-center w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0">
                  {match.player_B1.data.attributes.team.data ? (
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_ASEETS_URL +
                        match.player_B1.data.attributes.team.data.attributes
                          .logo_team.data.attributes.url
                      }
                      alt="Player B1"
                      width={32}
                      height={32}
                      unoptimized
                      className="rounded-full"
                    />
                  ) : null}
                </div>
                <p className="text-black font-poppins text-[12px] lg:text-[16px] ml-1">
                  {match.player_B1.data.attributes.nama_player}
                </p>
              </div>

              {match.nomor_pertandingan.includes("GANDA") ? (
                <div className="w-full flex flex-row items-center mt-1">
                  <div className="flex items-center justify-center w-8 h-8 bg-yellow-400 rounded-full flex-shrink-0">
                    {match.player_B2.data.attributes.team.data ? (
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_ASEETS_URL +
                          match.player_B2.data.attributes.team.data.attributes
                            .logo_team.data.attributes.url
                        }
                        alt="Player B2"
                        width={32}
                        height={32}
                        unoptimized
                        className="rounded-full"
                      />
                    ) : null}
                  </div>
                  <p className="text-black font-poppins text-[12px] lg:text-[16px] ml-1">
                    {match.player_B2.data.attributes.nama_player}
                  </p>
                </div>
              ) : null}
            </div>

            <div className="items-center flex w-0 lg:w-2/12 ">
              <div className="hidden lg:block">
                {match.skor_akhir_B === 2 ? <Winner /> : null}
              </div>
            </div>

            <div className="w-5/12 lg:w-4/12 flex items-center  justify-end pr-4 ">
              <div className=" flex-col flex">
                <div className="flex space-x-6 justify-end text-black lg:text-[16px]">
                  <p className="font-poppins font-bold">
                    {match.skor_akhir_B ? match.skor_akhir_B : 0}
                  </p>
                  {[
                    ...match.ResultsMatch,
                    ...Array(3 - match.ResultsMatch.length).fill({
                      skor_A: 0,
                      skor_B: 0,
                    }),
                  ].map((result, index) => (
                    <p key={index}>{result.skor_B}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-[#D7EFF6]  rounded-b-lg">
          <div className="py-2 px-4 text-[12px] text-black font-poppins lg:text-[16px]">
            {match.datetime ? convertToWIBAndDay(match.datetime) : "TBD"} •{" "}
            <span className="font-semibold ">
              {match.court ? match.court : "TBA"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const Prestasi = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const achievements = [
    {
      year: "2022 - 2023",
      titles: [
        {
          title: "Lulusan Terbaik (Murni)",
          description:
            "UAM PMWC RMI NU Kecamatan Cepiring, sebanyak 5 orang murid",
        },
      ],
    },
    {
      year: "2023 - 2024",
      titles: [
        {
          title: "Lulusan Terabaik (Murni)",
          description:
            "UAM PMWC RMI NU Kecamatan Cepiring, sebanyak 3 orang murid",
        },
      
      ],
    },
  ];

  return (
    <div className="bg-white max-w-6xl mx-auto pt-16 px-4 lg:px-0">
      <section className="mt-10 mb-8" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-black mb-4 font-poppins">
          Prestasi Madrasah
        </h2>
        <p className="text-lg text-center text-gray-700 font-poppins">
          Prestasi yang diraih santri-santri kami.
        </p>
      </section>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow-md divide-y divide-gray-200">
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-3 px-4 text-center font-poppins">Tahun</th>
              <th className="py-3 px-4 text-center font-poppins">Prestasi</th>
              <th className="py-3 px-4 text-center font-poppins">Deskripsi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {achievements.map((achievement, index) =>
              achievement.titles.map((title, subIndex) => (
                <tr key={`${index}-${subIndex}`}>
                  {subIndex === 0 && (
                    <td
                      rowSpan={achievement.titles.length}
                      className="py-4 px-4 text-center font-poppins"
                    >
                      {achievement.year}
                    </td>
                  )}
                  <td className="py-4 px-4 flex items-center space-x-2 font-poppins">
                    <FontAwesomeIcon
                      icon={faTrophy}
                      className="text-yellow-500"
                    />
                    <span className="font-semibold">{title.title}</span>
                  </td>
                  <td className="py-4 px-4 font-poppins">
                    {title.description}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <section className="mt-16 mb-8" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-center text-black mb-4 font-poppins">
          Terima Kasih
        </h2>
        <p className="text-lg text-center text-gray-700 font-poppins">
          Terima kasih kepada semua pihak yang mendukung prestasi ini.
        </p>
      </section>
    </div>
  );
};

export default Prestasi;

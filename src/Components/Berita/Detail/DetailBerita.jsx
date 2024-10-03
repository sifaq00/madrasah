import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5"; // import icon search
import AOS from "aos";
import "aos/dist/aos.css";
import Maulud from "../../../assets/Image/Berita/Maulud.jpg"
import Selapanan from "../../../assets/Image/Berita/Selapanan.jpg"
import UAM from "../../../assets/Image/Berita/UAM.jpg"
import Wisuda from "../../../assets/Image/Berita/Wisuda.jpg"
import WisudaTPQ from "../../../assets/Image/Berita/WisudaTPQ.jpg"
import Kbm from "../../../assets/Image/Berita/kbm.jpg"
import LombaImtihan from "../../../assets/Image/Berita/LombaImtihan.jpg"
import ZiarahSesepuh from "../../../assets/Image/Berita/ZiarahSesepuh.jpg"

export default function DetailBerita() {
  const [searchTerm, setSearchTerm] = useState(""); // state untuk menyimpan kata kunci pencarian

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const beritaData = [
    {
      title: "Peringatan maulid Nabi Tahun 2024",
      description:
        "Kegiatan ini dipimpin oleh murid-murid Madrasah Diniyah Takmiliyah Mabdaul Huda, diisi dengan pengajian oleh kyai dan sesi pertanyaan berhadiah untuk peserta.",
      imgSrc: Maulud,
    },
    {
      title: "Acara SELAPANAN (pertemuan guru dan pengurus)",
      description:
        "Pertemuan rutin antara guru dan pengurus untuk evaluasi kegiatan dan perencanaan program kerja di Madrasah Diniyah Takmiliyah Mabdaul Huda.",
      imgSrc: Selapanan,
    },
    {
      title: "UAM (Ujian Akhir Madrasah)",
      description:
        "Kegiatan Ujian Akhir Madrasah dilaksanakan untuk mengevaluasi pencapaian belajar siswa Madrasah Diniyah Takmiliyah Mabdaul Huda.",
      imgSrc: UAM,
    },
    {
      title: "Wisuda Kelas 6",
      description:
        "Wisuda kelas 6 merayakan kelulusan siswa Madrasah Diniyah Takmiliyah Mabdaul Huda sebagai persiapan melanjutkan pendidikan.",
      imgSrc: Wisuda,
    },
    {
      title: "Wisuda TPQ",
      description:
        "Wisuda TPQ merayakan kelulusan siswa yang telah menyelesaikan program pendidikan di Taman Pendidikan Al-Qur'an, sebagai bentuk penghargaan atas pencapaian mereka dalam belajar.",
      imgSrc: WisudaTPQ,
    },
    {
      title: "KBM (Kegiatan Belajar Mengajar)",
      description:
        "Kegiatan Belajar Mengajar (KBM) di Madrasah Diniyah Takmiliyah Mabdaul Huda fokus pada pembelajaran interaktif untuk meningkatkan pemahaman siswa",
      imgSrc: Kbm,
    },
    {
      title: "Lomba dalam rangka Imtihan Akhir Tahun",
      description:
        "Lomba dalam rangka Imtihan Akhir Tahun di Madrasah Diniyah Takmiliyah Mabdaul Huda diadakan untuk mengembangkan potensi siswa. Kegiatan ini juga bertujuan mempererat kebersamaan antar peserta didik.",
      imgSrc: LombaImtihan,
    },
    {
      title: "Kegiatan ziarah sesepuh setiap Kamis Wage",
      description:
        "Kegiatan ziarah sesepuh di Madrasah Diniyah Takmiliyah Mabdaul Huda dilaksanakan setiap Kamis Wage. Tradisi ini sebagai bentuk penghormatan kepada para pendahulu dan menjaga silaturahmi antar warga madrasah.",
      imgSrc: ZiarahSesepuh,
    },
  ];

  // Filter berita berdasarkan kata kunci pencarian
  const filteredBerita = beritaData.filter(
    (berita) =>
      berita.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      berita.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white max-w-6xl mx-auto pt-16 px-4 lg:px-0">
      <section className="mt-11 mb-8" data-aos="fade-right">
        {/* Bagian Pencarian */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2 bg-slate-200 rounded-lg py-1 px-4 w-full max-w-md">
            <IoSearch className="text-gray-600" />
            <input
              type="text"
              className="bg-slate-200 focus:outline-none font-poppins w-full"
              placeholder="Cari kegiatan"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <h2
          className="text-2xl font-semibold font-poppins mb-6 text-center"
          data-aos="fade-right"
        >
          Semua Kegiatan Madrasah
        </h2>

        {/* Menampilkan hasil pencarian */}
        {filteredBerita.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredBerita.map((berita, index) => (
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center"
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <img
                  src={berita.imgSrc}
                  alt="Berita"
                  className="w-full sm:w-1/2 h-40 object-cover rounded-lg"
                />
                <div className="ml-0 sm:ml-4 w-full sm:w-2/3 mt-4 sm:mt-0">
                  <h2 className="text-xl font-semibold">{berita.title}</h2>
                  <p className="mt-2 text-gray-600">{berita.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Pesan ketika tidak ada hasil pencarian
          <p className="text-center text-gray-600 mt-6">
            Pencarian tidak ditemukan.
          </p>
        )}
      </section>
    </div>
  );
}

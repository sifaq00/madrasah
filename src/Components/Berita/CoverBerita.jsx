import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import Maulud from "../../assets/Image/Berita/Maulud.jpg"
import Selapanan from "../../assets/Image/Berita/Selapanan.jpg"
import UAM from "../../assets/Image/Berita/UAM.jpg"
import Wisuda from "../../assets/Image/Berita/Wisuda.jpg"

export default function CoverBerita() {
  const [searchTerm, setSearchTerm] = useState("");

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
  ];

  const filteredBerita = beritaData.filter(
    (berita) =>
      berita.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      berita.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-10">
      <div className="mt-10 mb-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
        <h2
          className="text-2xl font-semibold font-poppins mb-2"
          data-aos="fade-right"
        >
          Kegiatan Madrasah
        </h2>
        <div
          className="flex items-center space-x-2 bg-slate-200 rounded-lg py-1 px-2"
          data-aos="fade-left"
        >
          <IoSearch className="text-gray-600" />
          <input
            type="text"
            className="bg-slate-200 focus:outline-none font-poppins"
            placeholder="Cari kegiatan"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredBerita.map((berita, index) => (
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center"
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <img src={berita.imgSrc} alt="Berita" className="w-full sm:w-1/3  rounded-lg" />
            <div className="ml-0 sm:ml-4 w-full sm:w-2/3 mt-4 sm:mt-0">
              <h2 className="text-xl font-semibold">{berita.title}</h2>
              <p className="mt-2 text-gray-600">{berita.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-8" data-aos="fade-up">
        <Link
          to="/detail-berita"
          className="font-poppins text-green-500 relative hover:text-black underline-link"
        >
          Lihat Semua
        </Link>
      </div>
    </div>
  );
}

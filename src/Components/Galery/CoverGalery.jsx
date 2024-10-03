import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Maulud from "../../assets/Image/Berita/Maulud.jpg";
import Selapanan from "../../assets/Image/Berita/Selapanan.jpg";
import UAM from "../../assets/Image/Berita/UAM.jpg";
import Wisuda from "../../assets/Image/Berita/Wisuda.jpg";
import WisudaTPQ from "../../assets/Image/Berita/WisudaTPQ.jpg";
import Kbm from "../../assets/Image/Berita/kbm.jpg";

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
      "Wisuda TPQ merayakan kelulusan siswa yang telah menyelesaikan program pendidikan di Taman Pendidikan Al-Qur'an.",
    imgSrc: WisudaTPQ,
  },
  {
    title: "KBM (Kegiatan Belajar Mengajar)",
    description:
      "Kegiatan Belajar Mengajar (KBM) di Madrasah Diniyah Takmiliyah Mabdaul Huda fokus pada pembelajaran interaktif.",
    imgSrc: Kbm,
  },
];

export default function CoverGalery() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#F9FBFD] pb-2">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-10">
        <div className="mt-8 mb-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
          <h2
            className="text-2xl mt-8 font-semibold font-poppins"
            data-aos="fade-right"
          >
            Galery
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {beritaData.map((item, index) => (
            <div key={index} className="h-48 w-full overflow-hidden rounded-lg">
            <img
              key={index}
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8" data-aos="fade-up">
          <button className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg">
            <Link to="detail-galery" className="text-white font-poppins">
              Lainnya
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

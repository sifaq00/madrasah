import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Maulud from "../../../assets/Image/Berita/Maulud.jpg";
import Selapanan from "../../../assets/Image/Berita/Selapanan.jpg";
import UAM from "../../../assets/Image/Berita/UAM.jpg";
import Wisuda from "../../../assets/Image/Berita/Wisuda.jpg";
import WisudaTPQ from "../../../assets/Image/Berita/WisudaTPQ.jpg";
import Kbm from "../../../assets/Image/Berita/kbm.jpg";

export default function DetailGalery() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Data untuk berita
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

  // Fungsi untuk membuka modal dan menyimpan data gambar yang dipilih
  const openModal = (item) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="bg-white max-w-6xl mx-auto pt-16 px-4 lg:px-0">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-2xl mt-8 font-semibold font-poppins text-center" data-aos="fade-right">
          Detail Galery
        </h2>

        {/* Grid for gallery images */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
  {beritaData.map((item, index) => (
    <div key={index} className="h-48 w-full overflow-hidden rounded-lg">
      <img
        src={item.imgSrc}
        alt={item.title}
        className="h-full w-full object-cover cursor-pointer"
        data-aos="fade-up"
        data-aos-delay={`${index * 100}`}
        onClick={() => openModal(item)} // Buka modal saat gambar diklik
      />
    </div>
  ))}
</div>


        {/* Back button */}
        <div className="flex justify-center mt-8" data-aos="fade-up">
          <button className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg">
            <Link to="/" className="text-white font-poppins">
              Kembali
            </Link>
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="relative bg-white w-11/12 md:w-2/3 lg:w-1/2 rounded-lg overflow-hidden">
              {/* Button close modal */}
              <button
                className="absolute top-2 right-2 text-black text-2xl font-bold"
                onClick={closeModal}
              >
                &times;
              </button>

              {/* Judul di atas gambar */}
              <h2 className="text-xl font-bold text-center py-4 px-6 bg-gray-200 font-poppins">
                {selectedImage.title}
              </h2>

              {/* Gambar */}
              <img
                src={selectedImage.imgSrc}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />

              {/* Deskripsi di bawah gambar */}
              <div className="p-6 font-poppins">
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

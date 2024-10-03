import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Kyai } from "../../../assets/Image/Home/Sambutan";
import AOS from "aos";
import "aos/dist/aos.css";

export default function DetailSambutan() {
  useEffect(() => {
    AOS.init(); // Inisialisasi AOS saat komponen dimuat
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto p-4 lg:mt-36 mt-20 mb-16 bg-white rounded-lg shadow-xl">
        <div
          className="flex flex-col md:flex-row items-start"
          data-aos="fade-right"
        >
          <div className="md:w-1/2 p-4 flex flex-col justify-center md:justify-start">
            <img
              src={Kyai}
              alt="Kyai"
              className="w-full h-auto object-cover max-w-md rounded-lg"
              data-aos="zoom-in"
            />
            <p className="mt-2 text-center md:text-left text-sm text-gray-500">
              Ky. Nur Faizin
            </p>
          </div>
          <div className="md:w-1/2 p-4" data-aos="fade-left">
            <h2 className="text-2xl font-poppins font-bold mb-2">
              Sambutan Kepala Madrasah
            </h2>
            <h2 className="text-md font-poppins font-semibold mb-6">
              Madrasah Diniyah Takmiliyah Mabdaul Huda
            </h2>
            <p className="text-base font-poppins md:text-lg mb-4 text-justify">
              Puji dan syukur kami panjatkan kehadirat Allah SWT. Kami bersyukur
              atas nikmat dan rahmat-Nya yang melimpah. Madrasah Diniyyah Takmiliyyah
              NU 03 Juwiring - Mabdaul Huda merupakan lembaga pendidikan yang berkomitmen untuk
              membentuk generasi muslim yang berkualitas, berakhlak mulia, dan
              mampu menjadi pemimpin masa depan yang tangguh.
            </p>
            <p className="text-base font-poppins md:text-lg mb-4 text-justify">
              Dengan didukung oleh fasilitas dan lingkungan belajar yang
              kondusif, kami mengajak para santri untuk mengeksplorasi potensi
              akademik, spiritual, dan sosial mereka secara maksimal. Kami juga
              menekankan pentingnya pembinaan karakter dan kepemimpinan agar
              setiap santri siap menghadapi tantangan zaman.
            </p>
            <button className="bg-green-600 hover:bg-green-400 text-white rounded-lg px-6 py-2 font-poppins">
              <Link to="/">Kembali Ke Beranda</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

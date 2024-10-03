import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Fasilitas } from "../../assets/Image/Icons/Fasilitas";
import { Lokasi } from "../../assets/Image/Icons/Lokasi";
import { Sejarah } from "../../assets/Image/Icons/Sejarah";
import AOS from "aos";
import "aos/dist/aos.css";
import { Prestasi } from "../../assets/Image/Icons/Prestasi";

export default function CoverMenu() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-[#F9FBFD]">
      <div className="h-auto mx-auto max-w-6xl py-10 px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          <div className="lg:w-96 md:w-70" data-aos="fade-right">
            <div className="flex flex-col">
              <h2 className="mb-4 text-2xl lg:text-2xl font-bold font-poppins text-green-600">
                Profil Madrasah
              </h2>
              <p className="md:block text-sm font-poppins lg:text-base text-justify text-[#919FAE]">
                Madrasah Diniyyah Takmiliyyah Mabdaul Huda merupakan lembaga pendidikan yang
                berkomitmen untuk membentuk generasi muslim yang berkualitas,
                berakhlak mulia, dan mampu menjadi pemimpin masa depan yang
                tangguh. Dengan didukung oleh fasilitas dan lingkungan belajar
                yang kondusif, kami mengajak para santri untuk mengeksplorasi
                potensi akademik, spiritual, dan sosial mereka secara maksimal.
              </p>
            </div>
            <button className="px-6 py-2 bg-green-600 hover:bg-green-500 rounded-lg font-poppins mt-6 text-white">
              <Link to="/profil-pesantren" className="">
                Lebih Lanjut
              </Link>
            </button>
          </div>
          <div className="lg:w-full" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-4 lg:gap-8">
              <div
                className="bg-white h-auto flex flex-col items-start justify-center rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="mt-8 mb-8 mx-4">
                  <img src={Fasilitas} alt="" className="h-10" />
                  <h2 className="text-lg font-bold font-poppins">Fasilitas</h2>
                  <p className="hidden md:block mb-4 font-poppins">
                    Menyediakan fasilitas modern dan mendukung proses
                    pembelajaran.
                  </p>
                  <button className="bg-green-600 hover:bg-green-500 px-6 py-0.5 rounded-md text-white font-poppins mt-2">
                    <Link to="#">Lihat</Link>
                  </button>
                </div>
              </div>
              <div
                className="bg-white h-auto flex flex-col items-start justify-center rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="mt-8 mb-8 mx-4">
                  <img src={Lokasi} alt="" className="h-10" />
                  <h2 className="text-lg font-bold font-poppins">Lokasi</h2>
                  <p className="hidden md:block mb-4 font-poppins">
                    Terletak di Desa Juwiring, Kecamatan Cepiring, Kabupaten Kendal.
                  </p>
                  <button className="bg-green-600 hover:bg-green-500 px-6 rounded-md text-white font-poppins py-0.5 mt-2 ">
  <                 a href="https://maps.app.goo.gl/6T3WfD35yvLEcC679" target="_blank" rel="noopener noreferrer">
                    Lihat
                    </a>
                  </button>
                </div>
              </div>
              <div
                className="bg-white h-auto flex flex-col items-start justify-center rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="mt-8 mb-8 mx-4">
                  <img src={Sejarah} alt="" className="h-10" />
                  <h2 className="text-lg font-bold font-poppins">Sejarah</h2>
                  <p className="hidden md:block mb-4 font-poppins">
                    Berdiri sejak tahun 1967, berkomitmen untuk memberikan
                    pendidikan yang berkualitas.
                  </p>
                  <button className="bg-green-600 hover:bg-green-500 px-6 rounded-md text-white font-poppins py-0.5 mt-2 ">
                    <Link to="/profil-madrasah">Lihat</Link>
                  </button>
                </div>
              </div>
              <div
                className="bg-white h-auto flex flex-col items-start justify-center rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="mt-8 mb-8 mx-4">
                  <img src={Prestasi} alt="" className="h-10" />
                  <h2 className="text-lg font-bold font-poppins">Prestasi</h2>
                  <p className="hidden md:block mb-4 font-poppins">
                    Meraih berbagai prestasi dalam bidang akademik dan kegiatan
                    diluar akademik.
                  </p>
                  <button className="bg-green-600 hover:bg-green-500 px-6 rounded-md text-white mt-2 py-0.5 font-poppins">
                    <Link to="/prestasi-madrasah">Lihat</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

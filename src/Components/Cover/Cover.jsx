import React from "react";
import { Header } from "../../assets/Image/Home/Header";

export default function Cover() {
  return (
    <div className="relative mt-16">
      <img
        src={Header}
        alt="imgcover"
        className="w-full h-auto object-cover opacity-100"
      />
      {/* Overlay hitam dengan opacity */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      {/* Konten teks dan tombol */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-white font-poppins text-base sm:text-lg md:text-xl lg:text-3xl font-bold mb-2">
          Madrasah Diniyah Takmiliyah NU 03 Juwiring - Mabdaul Huda
        </h1>
        <p className="text-white font-poppins text-xs sm:text-sm md:text-base lg:text-lg mb-4">
          Juwiring - Cepiring - Kabupaten Kendal
        </p>
        <button className="bg-green-600 hover:bg-green-500 text-white font-poppins font-bold rounded-lg px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-8 lg:py-3 text-xs sm:text-sm md:text-base">
          <a href="form-pendaftaran" className="text-xs sm:text-sm md:text-base">
            Daftar
          </a>
        </button>
      </div>
    </div>
  );
}

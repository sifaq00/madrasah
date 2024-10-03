import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Kyai } from "../../assets/Image/Home/Sambutan";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Sambutan() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-start mt-2 mb-4 mx-auto max-w-6xl">
      <div
        className="md:w-1/2 p-4 flex flex-col justify-center md:justify-start"
        data-aos="fade-right"
      >
        <img
          src={Kyai}
          alt="Kyai"
          className="w-full h-auto object-cover max-w-md border-2 rounded-lg border-green-500"
        />
        <p className="mt-2 text-center md:text-left text-sm text-gray-500">
          Ky. Nur Faizin
        </p>
      </div>
      <div className="md:w-1/2 p-4" data-aos="fade-left">
        <h2 className="text-2xl font-poppins font-bold mb-0.5 text-green-600">
          Sambutan Kepala Madrasah
        </h2>
        <h2 className="text-md font-semibold font-poppins mb-4 text-green-600">
          Madrasah Diniyyah Takmiliyyah Mabdaul Huda
        </h2>
        <p className="text-[#919FAE] text-sm font-poppins mb-4">
          Puji dan syukur mari kita panjatkan kehadirat Allah SWT. Yang
          senantiasa dengan sifat kasih dan sayangnya banyak memberikan nikmat
          ...
        </p>
        <button className="bg-green-600 hover:bg-green-500 text-white font-poppins rounded-lg px-6 py-2">
          <Link to="/detail-sambutan">Lebih Lanjut</Link>
        </button>
      </div>
    </div>
  );
}

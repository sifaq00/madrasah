import React, { useEffect } from "react";
import WhatsAppChatButton from "../WhatsAppChatButton/WhatsAppChatButton";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Donasi() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="bg-white max-w-6xl mx-auto pt-16 px-4 lg:px-0">
        <div className="mt-8" data-aos="fade-right">
          <h2 className="text-3xl font-poppins font-bold text-center">
            Donasi
          </h2>
          <p className="text-justify mt-2 font-poppins font-semibold text-lg">
            Assalamu'alaikum Warahmatullahi Wabarakatuh,
          </p>
          <p className="text-justify font-poppins text-md indent-8 my-2">
            Kami dari Madrasah Diniyah Takmiliyah Mabdaul Huda mengajak Anda untuk
            berpartisipasi dalam pembangunan fasilitas madrasah kami. Donasi
            dapat disalurkan melalui transfer ke rekening berikut:
          </p>
        </div>

        <div className="mt-4" data-aos="fade-right">
          <h2 className="text-2xl font-poppins font-bold">Rekening</h2>
          <div className="mt-4" data-aos="fade-right">
            <h2 className="font-poppins font-semibold text-xl">BNI</h2>
            <p className="font-poppins text-lg mt-2">1045554063</p>
            <p className="font-poppins mt-2 text-md">
            MDT Ula NU 03 Mabdaul Huda
            </p>
          </div>
        </div>

        <div className="mt-4" data-aos="fade-right">
          <p className="font-poppins text-md mb-2 text-justify">
            Setelah melakukan donasi, mohon konfirmasi melalui nomor berikut :
          </p>
          <p className="text-md font-poppins mb-4">0896-0557-9797</p>
          <p className="text-md font-poppins mb-4">
            Atau bisa klik tombol konfirmasi dibawah ini
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg"
          >
            <a href="https://wa.me/62896-05579797" target="_blank" className="text-white font-semibold text-lg">
              Konfirmasi
            </a>
          </button>
          <p className="mt-4 font-poppins text-md text-justify indent-8">
            Kami sangat menghargai setiap donasi yang diberikan. Semoga Allah
            SWT membalas kebaikan Anda dengan pahala yang berlipat ganda.
          </p>
          <p className="mt-4 font-poppins text-md text-justify font-bold text-lg pb-8">
            Wassalamu'alaikum Warahmatullahi Wabarakatuh.
          </p>
        </div>
      </div>
      <WhatsAppChatButton />
    </>
  );
}

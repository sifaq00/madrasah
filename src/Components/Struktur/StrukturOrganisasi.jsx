import React, { useEffect } from "react";
import AOS from "aos";
import { Struktur } from "../../assets/Image/Struktur/Struktur";
import "aos/dist/aos.css";

export default function StrukturOrganisasi() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white max-w-6xl mx-auto pt-16 px-4 lg:px-0">

      <section className="mt-8 mb-8" data-aos="fade-right">
      <div className="w-full flex justify-center">
            <img
              src={Struktur}
              alt="Struktur Organisasi"
              className="w-full max-w-4xl rounded-lg shadow-lg"
            />
          </div>
      </section>
    </div>
  );
}

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Ula() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white max-w-6xl mx-auto pt-16 px-4 lg:px-0">
      <section className="mt-8" data-aos="fade-right">
        <h2 className="text-3xl font-poppins font-bold text-center">
          Madrasah Diniyyah Takmiliyyah Ula
        </h2>
        <h2 className="text-2xl font-poppins font-bold">Pengertian</h2>
        <p className="text-justify font-poppins text-md indent-8 my-2">
        Madrasah Diniyah Takmiliyah Ula (MDT Ula)
        adalah satuan pendidikan keagamaan Islam
        nonformal yang menyelenggarakan pendidikan
        agama Islam sebagai pelengkap bagi siswa 
        SD/MI atau yang sederajat. Jenjang dasar ini 
        ditempuh dalam waktu 4 (empat) tahun atau 6 
        (enam) tahun sesuai kearifan atau 
        kebutuhan masyarakat dengan sekurangkurangnya 18 jam pelajaran dalam seminggu.
        </p>
      </section>

      <section className="mt-8 mb-8" data-aos="fade-right">
        <h2 className="text-2xl font-poppins font-bold">Fungsi</h2>
        <p className="text-justify font-poppins text-md mt-2">
        Fungsi Madrasah Diniyah Takmiliyah Ula (MDT Ula) adalah sebagai berikut:
        </p>
        <ol className="list-decimal list-outside pl-6 mt-2 font-poppins text-md">
            <li className="pl-1">Menyelenggarakan pendidikan agama Islam, meliputi Al-Qur’an, Hadits, Aqidah, Fiqih, Tarikh Islam, Bahasa Arab, pengembangan diri yang berkaitan dengan keterampilan pengalaman ajaran Islam, serta pembiasaan akhlakul karimah.</li>
            <li className="pl-1">Memenuhi kebutuhan masyarakat akan tambahan pendidikan agama Islam, terutama bagi santri yang belajar di SD/MI/sederajat maupun anak usia pendidikan setingkat yang belum berkesempatan mengikuti pendidikan formal.</li>
            <li className="pl-1">Membina hubungan kerjasama dengan orang tua santri dan masyarakat.</li>
            <li className="pl-1">Melaksanakan tata usaha dan rumah tangga pendidikan Madrasah Diniyah Takmiliyah Ula (MDT Ula) dan perpustakaan.</li>
        </ol>
      </section>
    </div>
  );
}

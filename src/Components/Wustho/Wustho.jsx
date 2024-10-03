import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Wustho() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white max-w-6xl mx-auto pt-16 px-4 lg:px-0">
      <section className="mt-8" data-aos="fade-right">
        <h2 className="text-3xl font-poppins font-bold text-center">
          Madrasah Diniyyah Takmiliyyah Wustho
        </h2>
        <h2 className="text-2xl font-poppins font-bold">Pengertian</h2>
        <p className="text-justify font-poppins text-md indent-8 my-2">
        Madrasah Diniyah Takmiliyah Wustha (MDT
        Wustha) adalah satuan pendidikan keagamaan
        Islam nonformal yang menyelenggarakan
        pendidikan agama Islam sebagai pelengkap bagi
        peserta didik SMP/MTs/sederajat maupun
        anak usia pendidikan setingkat dan telah lulus
        dari Madrasah Diniyah Takmiliyah Ula. Jenjang
        ini ditempuh selama 2 (dua) tahun atau 3 (tiga)
        tahun sesuai kearifan atau kebutuhan
        masyarakat dengan sekurang-kurangnya
        kegiatan pembelajaran 18 jam pelajaran dalam
        seminggu.
        </p>
      </section>

      <section className="mt-8 mb-8" data-aos="fade-right">
        <h2 className="text-2xl font-poppins font-bold">Fungsi</h2>
        <p className="text-justify font-poppins text-md mt-2">
        Fungsi Madrasah Diniyah Takmiliyah Wustha adalah:
        </p>
        <ol className="list-decimal list-outside pl-6 mt-2 font-poppins text-md">
            <li className="pl-2">
            Menyelenggarakan pendidikan agama Islam, meliputi Al-Qur’an, Hadits, Aqiqah, Fiqih, Tarikh Islam, Bahasa Arab, Pengembangan diri yang berkaitan dengan pengalaman ajaran Islam serta pembiasaan akhlakul karimah;
            </li>
            <li className="pl-2">
            Memenuhi kebutuhan masyarakat akan tambahan pendidikan agama Islam terutama bagi santri yang belajar di SMP/MTs/sederajat maupun anak usia pendidikan setingkat yang belum berkesempatan mengikuti pendidikan formal;
            </li>
            <li className="pl-2">
            Memberikan pemahaman dan pendalaman pengetahuan agama Islam pada santri (<em>tafaqquh fiddin</em>);
            </li>
            <li className="pl-2">
            Membina hubungan kerjasama dengan orang tua santri dan masyarakat;
            </li>
            <li className="pl-2">
            Melaksanakan tata usaha dan rumah tangga pendidikan keagamaan nonformal dan perpustakaan;
            </li>
        </ol>
      </section>
    </div>
  );
}

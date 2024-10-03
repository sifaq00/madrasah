import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Profil() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white max-w-6xl mx-auto pt-16 px-4 lg:px-0">
      <section className="mt-8" data-aos="fade-right">
        <h2 className="text-3xl font-poppins font-bold text-center">
          Profil Madrasah
        </h2>
        <p className="text-justify mt-2 font-poppins font-semibold text-lg">
          Assalamu'alaikum Warahmatullahi Wabarakatuh,
        </p>
        <p className="text-justify font-poppins text-md indent-8 my-2">
          Selamat datang di Madrasah Diniyyah Takmiliyyah Mabdaul Huda. Kami berkomitmen untuk
          mencetak generasi muslim yang berakhlakul karimah, cerdas, dan
          mandiri.
        </p>
        <ol className="list-decimal list-outside pl-6 mt-2 font-poppins text-md">
            <li className="pl-2">
            Nama Madrasah	:	MDTU NU 03 “Mabdaul Huda”
            </li>
            <li className="pl-2">
            Nomor Statistik	:	311233240164
            </li>
            <li className="pl-2">
            Provinsi	:	Jawa Tengah
            </li>
            <li className="pl-2">
            Pemerintah  Kab / Kota	:	Kendal
            </li>
            <li className="pl-2">
            Kecamatan	:	Cepiring;
            </li>
            <li className="pl-2">
            Desa / Kelurahan	:	Juwiring
            </li>
            <li className="pl-2">
            Jalan	:	Kauman;
            </li>
            <li className="pl-2">
            RT/RW	:	003/003
            </li>
            <li className="pl-2">
            Kode Pos	: 51352
            </li>
            <li className="pl-2">
            Telepon	:	089635293396
            </li>
            <li className="pl-2">
            Surat Kelembagaan	:	Nomor : Kd.11.24/5/PP.00/1804/2015
            </li>
            <li className="pl-2">
            Penerbit  SK	:	Kepala Kantor Kementrian Agama Kabupaten Kendal
            </li>
            <li className="pl-2">
            Tahun Berdiri	:	1967
            </li>
            <li className="pl-2">
            Tahun Beroperasi	:	1967
            </li>
            <li className="pl-2">
            Kegiatan Belajar Mengajar	:	Siang
            </li>
            <li className="pl-2">
            Bangunan Sekolah	:	Milik Sendiri
            </li>
            <li className="pl-2">
            Lokasi Sekolah:
            <ol className="list-lower-alpha list-outside pl-4">
              <li>a. Jarak Ke Pusat Kecamatan: 3 Km</li>
              <li>b. Jarak Ke Pusat Kota / Kota: 8 Km</li>
            </ol>
          </li>
            <li className="pl-2">
            Organisasi Penyelenggara	:	NU
            </li>

        </ol>
      </section>

      <section className="mt-8" data-aos="fade-right">
        <h2 className="text-2xl font-poppins font-bold">Sejarah</h2>
        <p className="text-justify font-poppins text-md mt-2">
          Madrasah Diniyah Takmiliyah NU 03 Juwiring - Mabdaul Huda didirikan pada tahun 1967 dengan tujuan menciptakan lembaga pendidikan Islam
          yang mampu menghasilkan santri yang berilmu dan berakhlak mulia.
        </p>
      </section>

      <section className="mt-8" data-aos="fade-right">
        <h2 className="text-2xl font-poppins font-bold">Visi dan Misi</h2>
        <h3 className="text-xl font-poppins font-semibold mt-2">Visi</h3>
        <p className="text-justify font-poppins text-md mt-2">
          Mencetak insan muttaqin yang kritis, kreatif & dinamis 'ala ahlissunnah wal jama'ah
        </p>
        <h3 className="text-xl font-poppins font-semibold mt-4">Misi</h3>
        <ul className="list-disc list-inside mt-2 font-poppins text-md">
          <li>Mmbekali peserta didik dengan ilmu keagamaan</li>
          <li>Mengamalkan nilai-nilai kegamaan dalam kehidupan sehari-hari</li>
          <li>
            Mempersiapkan generasi yang berpotensi & mandiri
          </li>
        </ul>
      </section>

      <section className="mt-8 mb-8" data-aos="fade-right">
        <h2 className="text-2xl font-poppins font-bold">Fasilitas</h2>
        <p className="text-justify font-poppins text-md mt-2">
          Madrasah Diniyyah Takmiliyyah Mabdaul Huda dilengkapi dengan berbagai fasilitas untuk
          menunjang kegiatan belajar dan mengajar, seperti ruang kelas yang nyaman dan modern
          materi yang terstruktur, guru yang kompeten, dan
          sarana prasarana yang komplit.
        </p>
      </section>
    </div>
  );
}

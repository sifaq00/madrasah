import { Logo } from "../../assets/Image/logo-brand";
import { MdLocationOn } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa"
import { KKN } from "../../assets/Image/Icons/KKN"; // Import gambar logo KKN

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="">
              <img 
                src={Logo} 
                className="h-16 md:h-20 me-3" // Responsif: Mengecilkan logo pada mobile
                alt="Mabdaul Huda Logo" 
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 font-semibold font-poppins text-xl text-slate-200">
                MABDAUL HUDA
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium font-poppins">
                <li className="mb-4">
                  <a href="/" className="hover:text-white">
                    Beranda
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/donasi" className="hover:text-white">
                    Donasi
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/profil-madrasah" className="hover:text-white">
                    Profil Madrasah
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-semibold text-slate-200 font-poppins">
                PENDAFTARAN
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium font-poppins">
                <li className="mb-4">
                  <a href="/informasi-pendaftaran" className="hover:text-white">
                    Info Pendaftaran
                  </a>
                </li>
                <li>
                  <a href="/form-pendaftaran" className="hover:text-white">
                    Form Pendaftaran
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-semibold text-slate-200">
                KONTAK
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4 flex items-center space-x-2 cursor-pointer">
                  <MdLocationOn className="text-xl hover:text-white" />
                  <a
                    href="https://maps.app.goo.gl/SFZ2KHzirdmtNHY47"
                    target="_blank"
                    className="hover:text-white"
                  >
                    Juwiring Cepiring Kendal
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <IoLogoWhatsapp className="text-xl hover:text-white cursor-pointer" />
                  <a href="https://wa.me/6289605579797" target="_blank" className="hover:text-white">
                    +62 896-0557-9797
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2 justify-center">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024 Copyright
            </span>
            <img
              src={KKN} // Ganti dengan path gambar logo KKN yang benar
              alt="Logo KKN"
              className="h-10 w-auto" // Ukuran logo KKN
            />
          </div>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Developed by
            </span>
            <a
              href="https://github.com/sifaq00" // Ganti dengan link GitHub Anda
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

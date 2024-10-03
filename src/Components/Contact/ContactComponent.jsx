import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const ContactComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("success"); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs
      .sendForm(
        "service_nqymfun",
        "template_ucqy2tu",
        form.current,
        "ppCtaU12W3rUkgZVy"
        
      )
      .then(
        (result) => {
          console.log(result.text);
          setModalType("success");
          setModalMessage("Pesan berhasil dikirim!");
          setShowModal(true);
          
        },
        (error) => {
          console.log(error.text);
          setModalType("error");
          setModalMessage("Terjadi kesalahan, pesan gagal dikirim.");
          setShowModal(true);
        }
      );

    form.current.reset();
  };

  const location = [-6.9001363,110.1562553];

  return (
    <div className="bg-white max-w-6xl mx-auto pt-16 px-4 lg:px-8">
      <section className="mt-8 mb-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-primary mb-4 font-poppins">
          Kontak Kami
        </h2>
        <p className="text-lg text-center text-gray-700 font-poppins">
          Hubungi kami melalui informasi di bawah ini.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div data-aos="fade-up">
          <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">
            Informasi Kontak
          </h3>
          <div className="text-lg text-gray-700 text-justify font-poppins mb-4">
            <strong>Alamat :</strong>
            <p className="mt-2">
               Jl. Kauman No. 1 RT. 003 RW. 003 Juwiring Cepiring Kendal Kode Pos 51352
            </p>
          </div>
          <div className="text-lg text-gray-700 font-poppins mb-4">
            <strong>Telepon:</strong>
            <p className="mt-2">+62 896-0557-9797</p>
          </div>
          <div className="text-lg text-gray-700 font-poppins mb-4">
            <strong>Email :</strong>
            <p className="mt-2">mabdaulhuda873@gmail.com</p>
          </div>
        </div>

        <div data-aos="fade-up">
          <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">
            Lokasi Kami
          </h3>
          <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
            <MapContainer
              center={location}
              zoom={15}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={location} icon={customIcon}>
                <Popup>
                  <a
                    href="https://maps.app.goo.gl/WDvRC5J3Jza2xBCQ8"
                    target="_blank"
                  >
                    Madrasah Diniyah Takmiliyah Mabdaul Huda
                  </a>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <section className="mt-16 mb-8" data-aos="fade-up">
        <h3 className="text-2xl font-bold text-primary mb-4 font-poppins">
          Kirim Pesan
        </h3>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label
              htmlFor="from_name"
              className="block text-lg font-poppins text-gray-700"
            >
              Nama
            </label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="from_email"
              className="block text-lg font-poppins text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="from_email"
              id="from_email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-poppins text-gray-700"
            >
              Pesan
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-blue-400 text-white px-4 py-2 rounded-lg"
          >
            Kirim
          </button>
        </form>
      </section>

      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div
                className={`bg-${
                  modalType === "success" ? "green" : "red"
                }-600 px-4 pt-5 pb-4 sm:p-6 sm:pb-4`}
              >
                <div className="sm:flex sm:items-start">
                  <div
                    className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${
                      modalType === "success" ? "bg-green-100" : "bg-red-100"
                    } sm:mx-0 sm:h-10 sm:w-10`}
                  >
                    <svg
                      className={`h-6 w-6 ${
                        modalType === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {modalType === "success" ? (
                        <path
                          fillRule="evenodd"
                          d="M10 19a9 9 0 100-18 9 9 0 000 18zm-2.293-7.293a1 1 0 011.414-1.414l1.793 1.793 4.793-4.793a1 1 0 111.414 1.414l-5.5 5.5a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293z"
                          clipRule="evenodd"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          d="M10 19a9 9 0 100-18 9 9 0 000 18zm5.707-11.293a1 1 0 010 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 111.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      )}
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className={`text-lg font-medium text-white ${
                        modalType === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                      id="modal-title"
                    >
                      {modalType === "success" ? "Sukses!" : "Error!"}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-white">{modalMessage}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm`}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactComponent;

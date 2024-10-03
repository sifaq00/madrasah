import React from "react";

const RegistrationForm = () => {
  return (
    <div className="bg-white max-w-6xl mx-auto pt-16 pb-20 px-4 lg:px-8">
      <section className="mt-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-black mb-4 font-poppins">
          Formulir Pendaftaran
        </h2>
        <p className="text-lg text-center text-gray-700 font-poppins">
          Silakan isi formulir pendaftaran berikut.
        </p>
      </section>

      <div className="flex justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeaHp2vHnw-bJWcYJbas2Kx_ABGcClq0yKHi0h1UI_jzMa5Hg/viewform?usp=sf_link"
          width="100%"
          height="1200px"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default RegistrationForm;

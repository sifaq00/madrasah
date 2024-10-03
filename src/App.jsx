import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SambutanP from "./Pages/Sambutan/SambutanP";
import DonasiPages from "./Pages/Donasi/DonasiPages";
import ProfilPesantren from "./Pages/ProfilPesantren/ProfilPesantren";
import PrestasiPage from "./Pages/PrestasiPages/PrestasiPages";
import ContactPages from "./Pages/Contact/ContactPages";
import InfoPendaftaranPage from "./Pages/InfoPendaftaranPage/InfoPendaftaranPage";
import FormPendaftaranPages from "./Pages/FormPendaftaranPages/FormPendaftaranPages";
import BeritaPage from "./Pages/Berita/BeritaPage";
import GaleryPage from "./Pages/Galery/GaleryPage";
import UlaPage from "./Pages/Ula/UlaPage";
import WusthoPage from "./Pages/Wustho/WusthoPage";
import StrukturPage from "./Pages/Struktur/StrukturPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-sambutan" element={<SambutanP />} />
        <Route path="/donasi" element={<DonasiPages />} />
        <Route path="/profil-madrasah" element={<ProfilPesantren />} />
        <Route path="/prestasi-madrasah" element={<PrestasiPage />} />
        <Route path="/kontak" element={<ContactPages />} />
        <Route
          path="/informasi-pendaftaran"
          element={<InfoPendaftaranPage />}
        />
        <Route path="/form-pendaftaran" element={<FormPendaftaranPages />} />
        <Route path="/detail-berita" element={<BeritaPage/>}/>
        <Route path="/detail-galery" element={<GaleryPage/>}/>
        <Route path="/madrasah-ula" element={<UlaPage />} />
        <Route path="/madrasah-wustho" element={<WusthoPage />} />
        <Route path="/struktur-organisasi" element={<StrukturPage />} />
      </Routes>
    </Router>
  );
}

export default App;

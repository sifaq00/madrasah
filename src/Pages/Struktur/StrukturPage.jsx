import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import StrukturOrganisasi from "../../Components/Struktur/StrukturOrganisasi";
import Loading from "../../Components/Loading/Loading";

export default function StrukturPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi pemuatan data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 detik

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <StrukturOrganisasi />
      <Footer />
    </>
  );
}

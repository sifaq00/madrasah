import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import DetailBerita from "../../Components/Berita/Detail/DetailBerita";
import Loading from "../../Components/Loading/Loading";

export default function BeritaPage() {
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
      <DetailBerita />
      <Footer />
    </>
  );
}

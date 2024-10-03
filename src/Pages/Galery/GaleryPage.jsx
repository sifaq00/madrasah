import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import DetailGalery from "../../Components/Galery/Detail/DetailGalery";
import Loading from "../../Components/Loading/Loading";

export default function GalelryPage() {
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
      <DetailGalery />
      <Footer />
    </>
  );
}

import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import DetailSambutan from "../../Components/Sambutan/Detail/DetailSambutan";
import Loading from "../../Components/Loading/Loading";

export default function SambutanP() {
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
      <DetailSambutan />
      <Footer />
    </>
  );
}

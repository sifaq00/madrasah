import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Totop from "../../Components/Totop/Totop";
import Loading from "../../Components/Loading/Loading";
import Cover from "../../Components/Cover/Cover";
import Sambutan from "../../Components/Sambutan/Sambutan";
import CoverMenu from "../../Components/Menu/CoverMenu";
import CoverBerita from "../../Components/Berita/CoverBerita";
import CoverGalery from "../../Components/Galery/CoverGalery";
import WhatsAppChatButton from "../../Components/WhatsAppChatButton/WhatsAppChatButton";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi pemuatan data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 detik

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Cover />
      <Sambutan />
      <CoverMenu />
      <CoverBerita />
      <CoverGalery />
      <Footer />
      <Totop />
      <WhatsAppChatButton />
    </div>
  );
}

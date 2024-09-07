import React from "react";

import Header from "@/Layout/GLobal/Header";
import InnerBanner from "@/Layout/InnerBanner"
import CarResultPage from "@/Layout/CarResult";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";

function CarResult() {
  return (
    <div>
      <Header />
      <InnerBanner />
      <CarResultPage /> 
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default CarResult;


import React from "react";

import Header from "@/Layout/GLobal/Header";
import InnerBanner from "@/Layout/InnerBanner"
import CarDetailPage from "@/Layout/CarDetail";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";

function CarDetail() {
  return (
    <div>
      <Header />
      <InnerBanner />
      <CarDetailPage /> 
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default CarDetail;


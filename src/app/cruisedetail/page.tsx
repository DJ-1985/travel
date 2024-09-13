import React from "react";

import Header from "@/Layout/GLobal/Header";
import InnerBanner from "@/Layout/InnerBanner";
import CruiseDetailPage from "@/Layout/CruiseDetail";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";

function CruiseDetail() {
  return (
    <div>
      <Header />
      <InnerBanner />
      <CruiseDetailPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default CruiseDetail;

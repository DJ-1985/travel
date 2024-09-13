import React from "react";

import Header from "@/Layout/GLobal/Header";
import InnerBanner from "@/Layout/InnerBanner";
import CruiseResultPage from "@/Layout/CruiseResult";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";

function CruiseResult() {
  return (
    <div>
      <Header />
      <InnerBanner />
      <CruiseResultPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default CruiseResult;


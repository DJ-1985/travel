import React from "react";

import Header from "@/Layout/GLobal/Header";
import InnerBanner from "@/Layout/InnerBanner";
import CruiseCheckoutPage from "@/Layout/CruiseCheckout";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";

function CruiseDetail() {
  return (
    <div>
      <Header />
      <InnerBanner />
      <CruiseCheckoutPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default CruiseDetail;

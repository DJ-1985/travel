import React from "react";

import Header from "@/Layout/GLobal/Header";
import InnerBanner from "@/Layout/InnerBanner";
import CruiseBookingReviewPage from "@/Layout/CruiseBookingReview";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";

function CruiseBookingReview() {
  return (
    <div>
      <Header />
      <InnerBanner />
      <CruiseBookingReviewPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default CruiseBookingReview;

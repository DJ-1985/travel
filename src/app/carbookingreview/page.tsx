import React from "react";

import Header from "@/Layout/GLobal/Header";
import InnerBanner from "@/Layout/InnerBanner"
import CarBookingReviewPage from "@/Layout/CarBookingReview";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";

function CarBookingReview() {
  return (
    <div>
      <Header />
      <InnerBanner />
      <CarBookingReviewPage /> 
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default CarBookingReview;


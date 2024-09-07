import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import MyBookingHotelsPage from "@/Layout/MyBookingHotels";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function MyBookingHotels() {
  return (
    <div>
      <Header />
      <InnerBannerHd headingImg="" headingText="My Account" subheadingText="" />
      <MyBookingHotelsPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default MyBookingHotels;
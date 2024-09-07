import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import MyBookingHotelDetailPage from "@/Layout/MyBookingHotelDetail";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function MyBookingHotelDetail() {
  return (
    <div>
      <Header />
      <InnerBannerHd headingImg="" headingText="My Account" subheadingText="" />
      <MyBookingHotelDetailPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default MyBookingHotelDetail;
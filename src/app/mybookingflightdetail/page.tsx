import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import MyBookingFlightDetailPage from "@/Layout/MyBookingFlightDetail";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function MyBookingFlightDetail() {
  return (
    <div>
      <Header />
      <InnerBannerHd headingImg="" headingText="My Account" subheadingText="" />
      <MyBookingFlightDetailPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default MyBookingFlightDetail;
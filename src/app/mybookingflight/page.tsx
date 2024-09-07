import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import MyBookingFlightPage from "@/Layout/MyBookingFlight";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function MyBookingFlight() {
  return (
    <div>
      <Header />
      <InnerBannerHd headingImg="" headingText="My Account" subheadingText="" />
      <MyBookingFlightPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default MyBookingFlight;
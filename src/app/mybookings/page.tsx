import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import MyBookingsPage from "@/Layout/MyBookings";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function MyBookings() {
  return (
    <div>
      <Header />
      <InnerBannerHd headingImg="" headingText="My Account" subheadingText="" />
      <MyBookingsPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default MyBookings;
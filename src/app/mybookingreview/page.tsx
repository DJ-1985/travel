import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import MyBookingReviewPage from "@/Layout/MyBookingReview";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function MyBookingReview() {
  return (
    <div>
      <Header />
      <InnerBannerHd headingImg="" headingText="My Account" subheadingText="" />
      <MyBookingReviewPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default MyBookingReview;

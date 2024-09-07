import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import InnerBannerHd from "@/Layout/InnerBannerHeading";
import AboutUsPage from "@/Layout/AboutUs";

function AboutUs() {
  return (
    <div>
      <Header />
      <InnerBannerHd headingImg="" headingText="About Us" subheadingText="" />
      <AboutUsPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default AboutUs;

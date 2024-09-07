import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import InnerBannerHd from "@/Layout/InnerBannerHeading";
import TermsPage from "@/Layout/Terms";

function AboutUs() {
  return (
    <div>
      <Header />
      <InnerBannerHd
        headingImg=""
        headingText="Terms & Conditions"
        subheadingText=""
      />
      <TermsPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default AboutUs;

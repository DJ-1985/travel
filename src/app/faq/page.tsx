import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import FaqPage from "@/Layout/Faq";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function Faq() {
  return (
    <div>
      <Header />
      <InnerBannerHd headingImg="" headingText="FAQ" subheadingText="" />
      <FaqPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Faq;

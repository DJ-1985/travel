import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import HelpSupportPage from "@/Layout/HelpSupport";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function HelpSupport() {
  return (
    <div>
      <Header />
      <InnerBannerHd headingImg="" headingText="My Account" subheadingText="" />
      <HelpSupportPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default HelpSupport;
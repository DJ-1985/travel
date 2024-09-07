import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import MyAccountPage from "@/Layout/MyAccount";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function MyAccount() {
  return (
    <div>
      <Header />
      <InnerBannerHd headingImg="" headingText="My Account" subheadingText="" />
      <MyAccountPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default MyAccount;
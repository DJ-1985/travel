import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import SettingsPage from "@/Layout/Settings";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function Settings() {
  return (
    <div>
      <Header />
      <InnerBannerHd headingImg="" headingText="My Account" subheadingText="" />
      <SettingsPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Settings;
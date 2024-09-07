import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import ContactUsPage from "@/Layout/ContactUs";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function ContactUs() {
  return (
    <div>
      <Header />
      <InnerBannerHd headingImg="" headingText="Contact Us" subheadingText="" />
      <ContactUsPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default ContactUs;

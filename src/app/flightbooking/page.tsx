import React from "react";
 
import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import FlightBookingPage from "@/Layout/FlightBooking";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function FlightBooking() {
  return (
    <div>
      <Header />
      <InnerBannerHd />
      <FlightBookingPage/>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default FlightBooking;

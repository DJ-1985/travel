import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import SignUpPage from "@/Layout/SignUp";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function SignIn() {
  return (
    <div>
      <Header />
      <InnerBannerHd
        headingImg=""
        headingText=" Sign Up " 
        subheadingText=""
      />
      <SignUpPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default SignIn;

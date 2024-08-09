import React from "react";

import Header from "@/Layout/GLobal/Header";
import NewsLetter from "@/Layout/GLobal/NewsLetter";
import Footer from "@/Layout/GLobal/Footer";
import SignInPage from "@/Layout/SignIn";
import InnerBannerHd from "@/Layout/InnerBannerHeading";

function SignIn() {
  return (
    <div>
      <Header />
      <InnerBannerHd
        headingImg=""
        headingText=" Sign In "
        subheadingText="or Create an account" 
      />
      <SignInPage />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default SignIn;

"use client";

import React from "react";

import styles from "@/styles/InnerBannerHeading/InnerBannerHeading.module.scss";
import Image from "react-bootstrap/Image";


function InnerBannerHd() {
  return (
    <div className={styles.InnerBannerHd}>
      <div className={"container"}>
        <div className={styles.InrBnrHd}>
          <h1><Image src="/assets/security_icon.png" alt="" /> Secure booking - <span>only takes a few minutes!</span></h1>
        </div>
      </div>
    </div>
  );
}

export default InnerBannerHd;

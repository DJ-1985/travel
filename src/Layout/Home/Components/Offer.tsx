"use client";

import React from "react";

import styles from "@/styles/Home/Offer.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Offer() {
  return (
    <>
      <div className={styles.OfferOuter}>
        <div className={"container"}>
          <div className={"text-center"}>
            <h2>Offers</h2>
            <p>Promotions, deals & special offers for you</p>
          </div>
          <Row>
            <Col md={6}>
             <div className={styles.OfferTextBox}>
               <h4>Fly away to your dream vacation</h4>
               <p>Get inspired - compare and book flights with flexibility</p>
               <a href="#" className={styles.SrchFlightBtn}>Search for flights</a>
             </div>
            </Col>
            <Col md={6}>
             
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Offer;

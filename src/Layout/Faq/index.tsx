"use client";

import React from "react";

import { Accordion } from "react-bootstrap";
import styles from "@/styles/Faq/Faq.module.scss";

function FaqPage() {
  return (
    <div className={styles.FaqOuter}>
      <div className={"container"}>
        <h3>Frequently Asked Questions</h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" className={styles.AcdOuter}>
            <Accordion.Header className={styles.AcdHdr}>How can I use to manage my travel bookings?</Accordion.Header>
            <Accordion.Body className={styles.AcdBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className={styles.AcdOuter}>
            <Accordion.Header className={styles.AcdHdr}>How can I use to manage my travel bookings?</Accordion.Header>
            <Accordion.Body className={styles.AcdBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default FaqPage;

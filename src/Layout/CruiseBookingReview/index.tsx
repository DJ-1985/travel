"use client";

import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  ListGroup,
  Table,
  NavLink,
  Image,
  ProgressBar,
  InputGroup,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";

import styles from "@/styles/CruiseBookingReview/CruiseBookingReview.module.scss";
import SiteBreadcrumb from "@/Layout/GLobal/Breadcrumb";

function CruiseBookingReviewPage() {
  return (
    <div className={styles.cruiseBkgRvwOuter}>
      <Container>
        <Row>
          <Col className={styles.cruiseBkgRvwLt}>
            <SiteBreadcrumb />
            <h3>7 night Alaska</h3>
            <div className={styles.bkgDate}>Sep 6, 2024 - Sep 13, 2024</div>
            <p>
              Seward, United States • Hubbard Glacier, United States • Juneau,
              United States • Skagway, United States • Icy Strait Point, United
              States • Ketchikan, United States • Vancouver, Canada
            </p>
            <div className={styles.cruiseBkgRvwCard}>
              <div className={styles.rvwTopBox}>
                <div className={styles.rvwTopBoxLt}>
                  <h3>Prime Ocean View Stateroom</h3>
                  <p>
                    Cozy exterior rooms with a window, recommended for its
                    natural light and views of the passing scenery.
                  </p>
                  <ListGroup as="ul" className={styles.srvcList}>
                    <ListGroup.Item as="li">
                      <Image src="/assets/icon39.png" alt="" /> 2
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <Image src="/assets/location-icon3.png" alt="" /> Deck
                      2-3, 6-7
                    </ListGroup.Item>
                  </ListGroup>
                  <div className={styles.chooseInfo}>
                    <Image src="/assets/arw.png" alt="" /> View what&apos;s
                    already included
                  </div>
                  <div className={styles.prcOffer}>
                    <Image src="/assets/save-icon.png" alt="" />
                    Member save 14%
                  </div>
                  <div className={styles.RoomFinalPriceRow}>
                    <div className={styles.RoomFinalPriceLeft}>
                      <div className={styles.RoomFinalPriceBig}>INR20,000</div>
                      <div className={styles.RoomFinalPriceSmall}>
                        ₹23,600 total
                      </div>
                      <div className={styles.TaxesText}>
                        includes taxes & fees
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rvwTopBoxRt}>
                  <Image src="/assets/img10.png" alt="" />
                </div>
              </div>
              <hr />
              <h3>Choose your room bundle</h3>
              <p>
                Bundles may include discounts and extras to help you save money
                before boarding the cruise.
              </p>
              <Row>
                <Col md={6}>
                  <div className={styles.roomBundleCard}>
                    <div className={styles.cardPrc}>+ ₹0</div>
                    <p>includes taxes & fees</p>
                    <ListGroup as="ul" className={styles.roomBundleList}>
                      <ListGroup.Item as="li">
                        <Image src="/assets/icon59.png" alt="" />
                        Non-refundable deposit
                      </ListGroup.Item>
                    </ListGroup>
                    <NavLink href="#" className={styles.lineBtn}>
                      More details
                    </NavLink>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles.roomBundleCard}>
                    <div className={styles.cardPrc}>+ ₹306</div>
                    <p>
                    ₹613 for 2 travelers*
                      <br /> includes taxes & fees
                    </p>
                    <ListGroup as="ul" className={styles.roomBundleList}>
                      <ListGroup.Item as="li">
                        <Image src="/assets/icon62.png" alt="" />
                        Flexible cruise cancel policy
                      </ListGroup.Item>
                    </ListGroup>
                    <NavLink href="#" className={styles.lineBtn}>
                      More details
                    </NavLink>
                  </div>
                </Col>
                <Col md={6}>
                <div className={styles.roomBundleCard}>
                    <div className={styles.cardPrc}>+ ₹643</div>
                    <p>
                    ₹1,287 for 2 travelers*
                      <br /> includes taxes & fees
                    </p>
                    <ListGroup as="ul" className={styles.roomBundleList}>
                      <ListGroup.Item as="li">
                        <Image src="/assets/icon59.png" alt="" />
                        Non-refundable deposit
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <Image src="/assets/icon60.png" alt="" />
                        Beverage - classic
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <Image src="/assets/icon61.png" alt="" />
                        WiFi - basic
                      </ListGroup.Item>
                    </ListGroup>
                    <NavLink href="#" className={styles.lineBtn}>
                      More details
                    </NavLink>
                  </div>
                </Col>
                <Col md={6}>
                <div className={styles.roomBundleCard}>
                    <div className={styles.cardPrc}>+ ₹884</div>
                    <p>
                    ₹1,769 for 2 travelers*
                      <br /> includes taxes & fees
                    </p>
                    <ListGroup as="ul" className={styles.roomBundleList}>
                      <ListGroup.Item as="li">
                        <Image src="/assets/icon62.png" alt="" />
                        Flexible cruise cancel policy
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <Image src="/assets/icon60.png" alt="" />
                        Beverage - classic
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <Image src="/assets/icon61.png" alt="" />
                        WiFi - basic
                      </ListGroup.Item>
                    </ListGroup>
                    <NavLink href="#" className={styles.lineBtn}>
                      More details
                    </NavLink>
                  </div>
                </Col>
              </Row>
              <h3>Get expert advice</h3>
              <p>
                If you would like to receive personalized assistance booking
                your cruise, please call an Travel Cruises™ travel agent at
                1-866-403-9848.
              </p>
            </div>
            <div className={styles.deckCard}>
              <h3>Deck 2: Room #2090</h3>
              <div className={styles.deckCardInr}>
                <div className={styles.deckCardInfo}>
                  <Image src="/assets/deck-img.png" alt=""/>
                  <p>We try to choose a room on the highest deck available for you, closest to the amenities and activities.</p>
                </div>
                <div><NavLink href="#" className={styles.lineBtn}>View or change room</NavLink></div>
                  
              </div>
            </div>
          </Col>
          <Col className={styles.cruiseBkgRvwRt}>
            <h3>Price Summary</h3>
            <div className={styles.prcSummaryCard}>
              <div className={styles.prcFare}>
                <span>Traveler 1: Adult</span> INR 8,080.00
              </div>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>Oceanview room</td>
                    <td className={"text-right"}>INR 1,080.00</td>
                  </tr>
                  <tr>
                    <td>Taxes and fees</td>
                    <td className={"text-right"}>INR 0.00</td>
                  </tr>
                </tbody>
              </Table>

              <div className={styles.prcFare}>
                <span>Traveler 2: Adult</span> INR 8,080.00
              </div>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>Oceanview room</td>
                    <td className={"text-right"}>INR 1,080.00</td>
                  </tr>
                  <tr>
                    <td>Taxes and fees</td>
                    <td className={"text-right"}>INR 0.00</td>
                  </tr>
                </tbody>
              </Table>
              <Table responsive className={styles.tblTotal} bordered>
                <tbody>
                  <tr>
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td className={"text-right"}>
                      <strong>INR 1,480.00</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <hr />
              <p>
                Reserve with a deposit of only $500 with full payment due by
                September 01, 2024.
              </p>
              <NavLink href="#" className={"btn-yellow w-100"}>
                Reserve
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CruiseBookingReviewPage;

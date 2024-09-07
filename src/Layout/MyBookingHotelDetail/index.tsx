"use client";

import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  Nav,
  Image,
  Form,
  Button,
  Tab,
  InputGroup,
  FormControl,
  NavLink,
  Accordion,
  Table,
} from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "@/styles/MyProfile/MyProfile.module.scss";

function MyBookingHotelDetailPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className={styles.myAccountOuter}>
      <Container>
        <Row>
          <Col lg={3}>
            <div className={styles.userDtlProfile}>
              <Nav as="ul" className={styles.myAccountNav}>
                <Nav.Item as="li">
                  <Nav.Link href="#">
                    <Image src="/assets/user.png" alt="" /> My Profile
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#">
                    <Image src="/assets/settings.png" alt="" /> Settings
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#">
                    <Image src="/assets/customer-support.png" alt="" /> Help &
                    Support
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#">
                    <Image src="/assets/review.png" alt="" /> Review
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item
                  as="li"
                  className={`${styles.subNav} ${isOpen ? styles.openNav : ""}`}
                >
                  <Nav.Link href="#">
                    <Image src="/assets/booking.png" alt="" /> My Bookings
                    <div className={styles.subNavBtn} onClick={handleToggle}>
                      <Image src="/assets/arrow3.png" alt="" />
                    </div>
                  </Nav.Link>
                  <Nav as="ul">
                    <Nav.Item as="li">
                      <Nav.Link href="#">
                        <Image src="/assets/flight-icon.png" alt="" /> Flights
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#" className={styles.navActive}>
                        <Image src="/assets/hotel-icon.png" alt="" /> Hotels
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">
                        <Image src="/assets/car-icon2.png" alt="" /> Car
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">
                        <Image src="/assets/cruise-icon2.png" alt="" /> Cruises
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#">
                    <Image src="/assets/signout.png" alt="" /> Sign out
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col lg={9}>
            <div className={styles.cmnCard}>
              <a href="#" className={styles.backBtn}>
                <Image src="/assets/back-arrow.png" alt="" /> Back to Bookings
              </a>
              <div className={`${styles.cmnCard} ${styles.hotelBkgOuter}`}>
                <div className={styles.hotelBkgTop}>
                  <div className={styles.bookingId}>ID : 154542452</div>
                  <div
                    className={`${styles.bkgStatus} ${styles.statusCompleted}`}
                  >
                    Completed
                  </div>
                </div>
                <div className={styles.hotelBkgBtm}>
                  <Nav.Link className={"btn-yellow"}>Review your stay</Nav.Link>
                  <Nav.Link className={"btn-green"}>Book again</Nav.Link>
                </div>
              </div>
              <div className={`${styles.cmnCard} ${styles.hotelBkgBnr}`}>
                <div className={styles.hotelMainBnr}>
                  <Image src="/assets/img7.jpg" alt="" />
                </div>
                <div className={styles.hotelBnrInfo}>
                  <div className={styles.hotelBnrInfoHd}>
                    <h3>The St. Regis Goa Resort</h3>
                    <div className={styles.hotelBnrInfoTrip}>
                      <Image src="/assets/trip-review2.jpg" alt="" />
                      <Image src="/assets/star.png" alt="" />
                    </div>
                  </div>
                  <Nav.Link href="#" className={styles.lineBtn}>
                    <Image src="/assets/receipts-icon.png" alt="" />
                    View property policies
                  </Nav.Link>
                </div>
                <div className={styles.hotelBnrInfoBtm}>
                  <div className={styles.hotelBnrInfoLt}>
                    Check in
                    <span>Fri, Sep 20</span>
                    12:00 PM
                  </div>
                  <div className={styles.hotelBnrInfoMid}>
                    <span>3 Days 2 Nights</span>
                  </div>
                  <div className={styles.hotelBnrInfoLt}>
                    Check out
                    <span>Sun, Sep 22</span>
                    12:00 PM
                  </div>
                </div>
              </div>
              <div className={`${styles.cmnCard} ${styles.roomInfoOuter}`}>
                <h4>Room information</h4>
                <div className={styles.roomInfoInner}>
                  <div className={styles.roomInfoInnerLt}>
                    <Image src="/assets/img6.jpg" alt="" />
                  </div>
                  <div className={styles.roomInfoInnerRt}>
                    <p>
                      <strong>1 X Deluxe Double Room with Balcony</strong>
                    </p>
                    <p>
                      <small>
                        Outdoor view | 18 m²/194 ft² | Non-smoking | 1 king bed
                      </small>
                    </p>
                  </div>
                </div>
                <div className={styles.roomParaOuter}>
                  <div className={styles.roomParaInrLt}>
                    <h6>Benefits</h6>
                    <p>
                      Welcome drink, Protective masks, Drinking water, Express
                      check-in, Parking, Free WiFi, Coffee & tea, Hand sanitizer
                    </p>
                  </div>
                  <div className={styles.roomParaInrRt}>
                    <h6>Special request</h6>
                    <p>
                      I&apos;d like to check-in early
                      <br />
                      All special requests are subject to availability upon
                      arrival.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${styles.cmnCard} ${styles.guestInfoOuter}`}>
                <h4>Guest Information</h4>
                <div className={styles.guestParaOuter}>
                  <div className={styles.guestParaInrLt}>
                    <h6>Lead guest</h6>
                    <p>Kapil Kumar</p>
                  </div>
                  <div className={styles.guestParaInrRt}>
                    <h6>Booked capacity</h6>
                    <p>2 adults</p>
                  </div>
                </div>
              </div>
              <div className={`${styles.cmnCard} ${styles.cancelPlcy}`}>
                   <h4>Cancellation policy</h4>
                   <p>Failure to arrive at your hotel or property will be treated as a No-Show and will incur a charge of 100% of the booking value (Hotel policy).</p>
              </div>
              <div className={`${styles.cmnCard} ${styles.paymentCard}`}>
                <div className={styles.paymentHd}>
                  <h4>Payment</h4>
                  <Nav.Link href="#" className={styles.lineBtn}>
                    <Image src="/assets/receipts-icon.png" alt="" />
                    Send receipt by e-mail
                  </Nav.Link>
                </div>
                <div className={styles.paymentInfo}>
                  <div className={styles.paymentInfoLt}>
                    <Image src="/assets/payment-icon.png" alt="" />
                    <span>Payment Detail</span>
                  </div>
                  <div className={styles.paymentInfoRt}>
                    <Table responsive>
                      <tbody>
                        <tr>
                          <td>1 room(s) x 1 night(s)</td>
                          <td className={"text-right"}>INR 1,450.00</td>
                        </tr>
                        <tr className={styles.tblBdrNone}>
                          <td>Taxes and fees</td>
                          <td className={"text-right"}>INR 280.00</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Total Charge</strong>
                          </td>
                          <td className={"text-right"}>
                            <strong>INR 1,730.00</strong>
                          </td>
                        </tr>
                        <tr className={styles.tblBdrNone}>
                          <td>Payment method</td>
                          <td className={"text-right"}>&nbsp;</td>
                        </tr>
                        <tr className={styles.tblBdrNone}>
                          <td>Card</td>
                          <td className={"text-right"}>MasterCard</td>
                        </tr>
                        <tr>
                          <td>Card number</td>
                          <td className={"text-right"}>•••• •••• •••• 8976</td>
                        </tr>
                        <tr className={styles.tblBdrNone}>
                          <td>Earn from this trip</td>
                          <td className={"text-right"}>&nbsp;</td>
                        </tr>
                        <tr className={styles.tblBdrNone}>
                          <td>
                            TravelCash
                            <br />
                            <small>
                              This booking is not eligible to earn Cash
                            </small>
                          </td>
                          <td className={"text-right"}>INR 230.00</td>
                        </tr>
                        <tr className={styles.tblBdrNone}>
                          <td>Cashback Rewards</td>
                          <td className={"text-right"}>INR 150.00</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
                <div className={styles.paymentParag}>
                  <p>
                    <small>
                      Your Cashback rewards will be made eligible 60 days after
                      check out date, and you have up to 120 days to request
                      them. An email will be sent to you to fill in which
                      credit/debit card you would like to receive the rewards
                      with. See Terms and Conditions
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyBookingHotelDetailPage;

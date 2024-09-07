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

function MyBookingFlightDetailPage() {
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
                      <Nav.Link href="#" className={styles.navActive}>
                        <Image src="/assets/flight-icon.png" alt="" /> Flights
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link href="#">
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
              <div className={styles.bookingBnr}>
                <Image src="/assets/flight-banner.jpg" alt="" />
              </div>
              <div className={styles.bookingBnrInfo}>
                <div className={styles.bkgBnrLt}>
                  <div className={styles.bkgBnrInrLt}>
                    Dalat
                    <span>(DLI)</span>
                  </div>
                  <div className={styles.bkgBnrInrMid}>
                    <Image src="/assets/rt-arw2.png" alt="" />
                  </div>
                  <div className={styles.bkgBnrInrLt}>
                    Ho Chi Minh City
                    <span>(SGN)</span>
                  </div>
                </div>
                <div className={styles.bkgBnrMid}>4 Oct | 2 pax | Economy</div>
                <div className={styles.bkgBnrRt}>
                  <Image src="/assets/booking-icon.png" alt="" />
                  <span>
                    Booking Id
                    <br />
                    1026067097
                  </span>
                </div>
              </div>
              <div className={`${styles.cmnCard} ${styles.flightBgCard}`}>
                <div className={styles.outBound}>
                  <h4>Outbound</h4>
                  <Nav.Link className={styles.lineBtn} href="#">
                    Get Booking Information
                  </Nav.Link>
                </div>
                <div className={styles.FlightResultRow}>
                  <div className={styles.FlightName}>
                    <Image src="/assets/flight-logo.jpg" alt="img" />
                    <span>Air India</span>
                  </div>
                  <div className={styles.FlightTime}>
                    <span className={styles.Timming}>
                      <b>6:45 AM</b>DEL - Aug 19
                    </span>
                    <div className={styles.FlightType}>
                      <span>9h 15m</span>
                      <span>Direct</span>
                    </div>
                    <span className={styles.Timming}>
                      <b>6:45 AM</b>Lon - Aug 20
                    </span>
                  </div>
                </div>
                <div className={styles.FlightRtlTop}>
                  You will arrive on Wednesday, Aug 20, 2024
                </div>
                <div className={styles.FlightRtlBtm}>
                  Airline Reference: <strong>CZ7CJC </strong>
                  <a href="#">Go to airline&apos;s website</a>
                </div>
              </div>
              <div className={styles.helpBnr}>
                <div className={styles.helpBnrLt}>
                  Need help?
                  <p>
                    Get quick answers and more for this booking with our
                    interactive help feature
                  </p>
                </div>
                <Nav.Link className={"btn-yellow"} href="#">
                  Get Booking Information
                </Nav.Link>
              </div>
              <div className={`${styles.cmnCard} ${styles.bgAllowanceCard}`}>
                <h4>Baggage allowance</h4>
                <div className={styles.bgAllowance}>
                  <div className={styles.bgAllowImg}>
                    <Image src="/assets/flight-logo.jpg" />
                  </div>
                  <div className={styles.bgAllowTxt}>
                    Dalat <span>(DLI)</span>
                  </div>
                  <div className={styles.bgAllowArw}>
                    <Image src="/assets/rt-arw2.png" />
                  </div>
                  <div className={styles.bgAllowTxt}>
                    Ho Chi Minh City <span>(SGN)</span>
                  </div>
                </div>
                <div className={styles.adultsTicket}>
                  <div className={styles.adultsHd}>Adult tickets</div>
                  <div className={styles.adultsDtl}>
                    <div className={styles.adultsDtlInfo}>
                      <Image src="/assets/baggage-icon4.png" alt="" />
                      Cabin baggage
                    </div>
                    <div className={styles.adultsDtlInfo}>Free (7 kg)</div>
                  </div>
                </div>
                <p>
                  <small>
                    You may purchase additional baggage allowances with the
                    airline after receiving your booking confirmation.
                  </small>
                </p>
              </div>
              <div className={`${styles.cmnCard} ${styles.ticketPoliciesCard}`}>
                <div className={styles.ticketPoliciesTop}>
                  <h4>Ticket policies</h4>
                  <div className={styles.ticketPoliciesRt}>
                    <Nav.Link href="#" className={styles.lineBtn}>
                      <Image src="/assets/request-icon.png" alt="" /> Request
                      Cancellation
                    </Nav.Link>
                    <Nav.Link href="#" className={styles.lineBtn}>
                      <Image src="/assets/request-icon.png" alt="" /> Request
                      Changes
                    </Nav.Link>
                  </div>
                </div>
                <div className={styles.bgAllowance}>
                  <div className={styles.bgAllowImg}>
                    <Image src="/assets/flight-logo.jpg" />
                  </div>
                  <div className={styles.bgAllowTxt}>
                    Dalat <span>(DLI)</span>
                  </div>
                  <div className={styles.bgAllowArw}>
                    <Image src="/assets/rt-arw2.png" />
                  </div>
                  <div className={styles.bgAllowTxt}>
                    Ho Chi Minh City <span>(SGN)</span>
                  </div>
                </div>
                <Accordion defaultActiveKey="0" className={styles.acrdOuter}>
                  <Accordion.Item eventKey="0" className={styles.acrdItem}>
                    <Accordion.Header className={styles.acrdHdr}>
                      Change policy
                    </Accordion.Header>
                    <Accordion.Body
                      className={`${styles.acrdBody} ${styles.acrdChngPolicy}`}
                    >
                      <div className={styles.adultsDtl}>
                        <div className={styles.adultsDtlInfo}>
                          <Image src="/assets/adult-icon.png" alt="" />
                          Adult tickets
                        </div>
                        <div className={styles.adultsDtlInfo}>
                          Your tickets cannot be cancelled for any refund.
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className={styles.acrdItem}>
                    <Accordion.Header className={styles.acrdHdr}>
                      Cancellation policy
                    </Accordion.Header>
                    <Accordion.Body className={styles.acrdBody}>
                      <h3>Lorem ipsum dolor sit amet design</h3>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.</p>
                      <h4>Readable content of a page</h4>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                      <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</li>
                        <li>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</li>
                        <li>We denounce with righteous indignation and dislike men who are so beguiled and demoralized.</li>
                      </ul>
                      <h5>At vero eos et accusamus et iusto</h5>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.</p>
                      <h6>Lorem ipsum dolor sit amet design</h6>
                      <ol>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</li>
                        <li>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.</li>
                        <li>We denounce with righteous indignation and dislike men who are so beguiled and demoralized.</li>
                      </ol>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className={`${styles.cmnCard} ${styles.passengerCard}`}>
                <h4>Passenger details</h4>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone No.</th>
                      <th>Gender</th>
                      <th>Age</th>
                      <th>Email Id</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bhawani Soni</td>
                      <td>9876543210</td>
                      <td>Male</td>
                      <td>30 Years</td>
                      <td>abc@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Bhawani Soni</td>
                      <td>9876543210</td>
                      <td>Male</td>
                      <td>30 Years</td>
                      <td>abc@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Bhawani Soni</td>
                      <td>9876543210</td>
                      <td>Male</td>
                      <td>30 Years</td>
                      <td>abc@gmail.com</td>
                    </tr>
                  </tbody>
                </Table>
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
                        <tr className={styles.tbl1}>
                          <td>
                            <Image src="/assets/paid-icon.png" alt="" /> Paid
                          </td>
                          <td className={"text-right"}>&nbsp;</td>
                        </tr>
                        <tr className={styles.tbl2}>
                          <td>Base fare x 2</td>
                          <td className={"text-right"}>Rs. 4080.00</td>
                        </tr>
                        <tr className={styles.tbl2}>
                          <td>Taxes and fees x 2</td>
                          <td className={"text-right"}>Rs. 380.00</td>
                        </tr>
                        <tr className={styles.tbl3}>
                          <td>Regular discount x 2</td>
                          <td className={"text-right"}>Rs. -100.00</td>
                        </tr>
                        <tr className={styles.tbl4}>
                          <td>
                            <strong>Total charge</strong>
                          </td>
                          <td className={"text-right"}>
                            <strong>Rs. 4360.00</strong>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
                <div className={styles.paymentDate}>
                  <span>Payment date</span>
                  <span>Sunday 06 August, 2023</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyBookingFlightDetailPage;

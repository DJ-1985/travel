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
} from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "@/styles/MyProfile/MyProfile.module.scss";

function MyBookingsPage() {
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
                  <Nav.Link href="#" className={styles.navActive}>
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
              <Tab.Container defaultActiveKey="Completed">
                <Nav className={styles.pflTabNav} variant="tabs" as="ul">
                  <Nav.Item className={styles.pflTabNavList} as="li">
                    <Nav.Link eventKey="Upcoming" className={styles.pflTabLink}>
                      <i>
                        <Image src="/assets/upcoming-icon.png" alt="img" />
                      </i>
                      <span>Upcoming</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={styles.pflTabNavList} as="li">
                    <Nav.Link
                      eventKey="Completed"
                      className={styles.pflTabLink}
                    >
                      <i>
                        <Image src="/assets/completed-icon.png" alt="img" />
                      </i>
                      <span>Completed</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={styles.pflTabNavList} as="li">
                    <Nav.Link
                      eventKey="Cancelled"
                      className={styles.pflTabLink}
                    >
                      <i>
                        <Image src="/assets/cancelled-icon.png" alt="img" />
                      </i>
                      <span>Cancelled</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane
                    eventKey="Upcoming"
                    className={styles.bookingTabPane}
                  >
                    fsdfdf
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="Completed"
                    className={styles.bookingTabPane}
                  >
                    <div className={styles.bookingFilter}>
                      <div className={styles.bookingFilterLt}>
                        <div className={styles.leftFilter}>
                          <Form.Group>
                            <InputGroup>
                              <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="MM/dd/yyyy"
                                className={`${styles.filterIcon} form-control`}
                                placeholderText="Sort by date"
                              />
                            </InputGroup>
                          </Form.Group>
                        </div>
                      </div> 
                      <div className={styles.bookingFilterRt}>
                        <Form.Group>
                          <FormControl
                            type="text"
                            placeholder="Search by booking ID"
                            className={styles.srchInput}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className={styles.bkgCard}>
                      <div className={styles.bkgCardTop}>
                        <div className={styles.bkgCardId}>
                          <strong>ID : 154542452</strong>
                        </div>
                        <div
                          className={`${styles.bkgStatus} ${styles.statusCompleted}`}
                        >
                          Completed
                        </div>
                      </div>
                      <div className={styles.bkgCardMid}>
                        <div className={styles.bkgCardMidLt}>
                          <Image src="/assets/flight-logo2.jpg" alt="" />
                        </div>
                        <div className={styles.bkgCardMidRt}>
                          <div className={styles.bkgFlightLt}>
                            <strong>6:30 AM</strong>
                            Jaipur - Aug 30
                          </div>
                          <div className={styles.bkgFlightMid}>
                            <span>4h 15m</span>
                            <span>2 stop via New Delhi,Surat</span>
                          </div>
                          <div className={styles.bkgFlightRt}>
                            <strong>10:45 AM</strong>
                            Banglore - Aug 30
                          </div>
                        </div>
                      </div>
                      <div className={styles.bkgCardBtm}>
                        <a href="#" className={styles.bkgCardBtmLtBtn}>
                          <Image src="/assets/ct-icon.png" alt="" />
                          Contact Travel Customer Service
                        </a>
                        <a href="#" className={styles.bkgCardBtmRtBtn}>
                          Manage booking
                        </a>
                      </div>
                    </div>
                    <div className={styles.bkgCard}>
                      <div className={styles.bkgCardTop}>
                        <div className={styles.bkgCardId}>
                          <strong>ID : 154542452</strong>
                        </div>
                        <div
                          className={`${styles.bkgStatus} ${styles.statusCancelled}`}
                        >
                          Cancelled
                        </div>
                      </div>
                      <div className={styles.bkgCardMid}>
                        <div className={styles.bkgCardMidLt}>
                          <Image src="/assets/flight-logo2.jpg" alt="" />
                        </div>
                        <div className={styles.bkgCardMidRt}>
                          <div className={styles.bkgFlightLt}>
                            <strong>8:30 PM</strong>
                            New Delhi - Aug 19
                          </div>
                          <div className={styles.bkgFlightMid}>
                            <span>3h 15m</span>
                            <span>Non Stop</span>
                          </div>
                          <div className={styles.bkgFlightRt}>
                            <strong>11:45 PM</strong>
                            London - Aug 19
                          </div>
                        </div>
                      </div>
                      <div className={styles.bkgCardBtm}>
                        <a href="#" className={styles.bkgCardBtmLtBtn}>
                          <Image src="/assets/ct-icon.png" alt="" />
                          Contact Travel Customer Service
                        </a>
                        <a href="#" className={styles.bkgCardBtmRtBtn}>
                          Manage booking
                        </a>
                      </div>
                    </div>
                    <div className={styles.bkgCard}>
                      <div className={styles.bkgCardTop}>
                        <div className={styles.bkgCardId}>
                          <strong>ID : 154542452</strong>
                        </div>
                        <div
                          className={`${styles.bkgStatus} ${styles.statusUpcoming}`}
                        >
                          Upcoming
                        </div>
                      </div>
                      <div className={styles.bkgCardMid}>
                        <div className={styles.bkgCardMidLt}>
                          <Image src="/assets/img5.jpg" alt="" />
                        </div>
                        <div className={styles.bkgCardMidRt}>
                          <div className={styles.bkgHotelInfo}>
                            <h4>The Seven Inn Near Delhi Airport</h4>
                            <p>
                              <Image src="/assets/location-black.png" alt="" />{" "}
                              Arossim, Goa, India
                            </p>
                            <div className={styles.bkgchk}>
                              <div className={styles.bkgchkLt}>
                                <span>Check in</span>
                                Wed, Aug 14
                              </div>
                              <div className={styles.bkgchkRt}>
                                <span>Check out</span>
                                Sun Aug 18
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.bkgCardBtm}>
                        <a href="#" className={styles.bkgCardBtmLtBtn}>
                          <Image src="/assets/ct-icon.png" alt="" />
                          Contact Travel Customer Service
                        </a>
                        <a href="#" className={styles.bkgCardBtmRtBtn}>
                          Manage booking
                        </a>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="Cancelled"
                    className={styles.bookingTabPane}
                  >
                    sdfdsfdsf
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyBookingsPage;

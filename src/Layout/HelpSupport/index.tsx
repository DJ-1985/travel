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
  NavLink,
} from "react-bootstrap";
import styles from "@/styles/MyProfile/MyProfile.module.scss";

function HelpSupportPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

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
                  <Nav.Link href="#" className={styles.navActive}>
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
            <div
              className={`${styles.cmnCard} ${styles.helpSupportCard} ${styles.profileBg}`}
            >
              <div className={styles.profileTop}>
                <div className={styles.pflLt}>
                  <h2>Help & Support</h2>
                </div>
              </div>
              <h4>Booking Issue</h4>
              <Row>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="text"
                      value="ashish.mantri@dotsquares.com"
                      readOnly
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Booking Type</Form.Label>
                    <Form.Select className={"form-control"}>
                      <option value="flight">Flight</option>
                      <option value="hotel">Hotel</option>
                      <option value="car_rental">Car Rental</option>
                      <option value="holiday_package">Holiday Package</option>
                      <option value="cruise">Cruise</option>
                      <option value="activity">Activity/Tour</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Booking Id</Form.Label>
                    <Form.Control type="text" placeholder="Type your booking ID" />
                  </Form.Group> 
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Issue Type</Form.Label>
                    <Form.Select className={"form-control"}>
                      <option value="payment">Payment Issue</option>
                      <option value="cancellation">Cancellation Issue</option>
                      <option value="modification">Modification Issue</option>
                      <option value="booking_confirmation">
                        Booking Confirmation Issue
                      </option>
                      <option value="refund">Refund Issue</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Your emessage</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Type your booking issue"
                      as="textarea"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className={"text-right"}>
                <Button type="submit" className={"btn-custom btn-small"}>
                  Submit
                </Button>
              </Form.Group>

              <div className={styles.helpBtmBox}>
                <Row>
                  <Col md={4}>
                    <NavLink href="#" className={styles.helpLink}>
                      <i>
                        <Image src="/assets/icon30.png" alt="" />
                      </i>
                      <div>
                        Travel Guidelines <span>Download PDF</span>
                      </div>
                    </NavLink>
                  </Col>
                  <Col md={4}>
                    <NavLink href="#" className={styles.helpLink}>
                      <i>
                        <Image src="/assets/icon31.png" alt="" />
                      </i>
                      <div>
                        Payment and Refunds Policies <span>Download PDF</span>
                      </div>
                    </NavLink>
                  </Col>
                  <Col md={4}>
                    <NavLink href="#" className={styles.helpLink}>
                      <i>
                        <Image src="/assets/icon32.png" alt="" />
                      </i>
                      <div>
                        Cancellation Policies <span>Download PDF</span>
                      </div>
                    </NavLink>
                  </Col>
                </Row>
                <Row>
                  <Col md={4}>
                    <NavLink
                      href="#"
                      className={`${styles.connectLink} btn-yellow w-100`}
                    >
                      <Image src="/assets/bubble-chat.png" alt="" />
                      Chat with Us
                    </NavLink>
                  </Col>
                  <Col md={4}>
                    <NavLink
                      href="#"
                      className={`${styles.connectLink} btn-yellow w-100`}
                    >
                      <Image src="/assets/email.png" alt="" />
                      Email Us
                    </NavLink>
                  </Col>
                  <Col md={4}>
                    <NavLink
                      href="#"
                      className={`${styles.connectLink} btn-yellow w-100`}
                    >
                      <Image src="/assets/telephone.png" alt="" />
                      Call Us
                    </NavLink>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HelpSupportPage;

"use client";

import React, { useState } from "react";

import { Container, Row, Col, Nav, Image, Form, Button } from "react-bootstrap";
import styles from "@/styles/MyProfile/MyProfile.module.scss";

function SettingsPage() {
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
                  <Nav.Link href="#" className={styles.navActive}>
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
            <div className={`${styles.cmnCard} ${styles.profileBg}`}>
              <div className={styles.profileTop}>
                <div className={styles.pflLt}>
                  <h2>Settings</h2>
                </div>
              </div>
              <Row>
                <Col lg={6}>
                  <Form.Group className={"mb-3"}>
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control type="password" placeholder="***********" />
                  </Form.Group>
                  <Form.Group className={"mb-3"}>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password" placeholder="***********" />
                  </Form.Group>
                  <Form.Group className={"mb-3"}>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="***********" />
                  </Form.Group>
                  <Form.Group>
                    <Button className={"btn-custom btn-small"}>Save</Button>
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SettingsPage;

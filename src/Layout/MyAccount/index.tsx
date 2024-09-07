"use client";

import React, { useState } from "react";

import { Container, Row, Col, Nav, Image, Form, Button } from "react-bootstrap";
import styles from "@/styles/MyProfile/MyProfile.module.scss";

function MyAccountPage() {
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
                  <Nav.Link href="#" className={styles.navActive}>
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
                  <h2>My Profile</h2>
                </div>
                <div className={styles.pflRt}>
                  <a href="#" className={`${styles.btnYellow} btn-yellow`}>
                    <Image src="/assets/edit-icon.png" alt="" /> Edit
                  </a>
                </div>
              </div>

              <Row>
                <Col lg={3}>
                  <div className={styles.userProfileInfo}>
                    <div className={styles.userProfilePic}>
                      <Image src="/assets/img4.jpg" alt="" />
                      <div className={styles.fileBtn}>
                        <Form.Control type="file" />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={9}>
                  <div className={styles.userProfileInfoRt}>
                    <div className={styles.rowBdr}>
                      <Row>
                        <Col md={6}>
                          <Form.Group
                            className={`${styles.formGrp} ${styles.userIcn}`}
                          >
                            <Form.Label className={styles.formLbl}>
                              First Name
                            </Form.Label>
                            <Form.Control
                              className={styles.formControl}
                              type="text"
                              placeholder="Ashish"
                              readOnly
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group
                            className={`${styles.formGrp} ${styles.userIcn}`}
                          >
                            <Form.Label className={styles.formLbl}>
                              Last Name
                            </Form.Label>
                            <Form.Control
                              className={styles.formControl}
                              type="text"
                              placeholder="Mantri"
                              readOnly
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div> 
                    <div className={styles.rowBdr}>
                      <Form.Group
                        className={`${styles.formGrp} ${styles.emailIcn}`}
                      >
                        <Form.Label className={styles.formLbl}>
                          Email address
                        </Form.Label>
                        <Form.Control
                          className={styles.formControl}
                          type="text"
                          placeholder="ashish.mantri@dotsquares.com"
                          readOnly
                        />
                      </Form.Group>
                    </div>
                    <div className={styles.rowBdr}>
                      <Form.Group
                        className={`${styles.formGrp} ${styles.phIcn}`}
                      >
                        <Form.Label className={styles.formLbl}>
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          className={styles.formControl}
                          type="text"
                          placeholder="94136 78274"
                          readOnly
                        />
                      </Form.Group>
                    </div>
                    <div className={styles.rowBdr}>
                      <Form.Group
                        className={`${styles.formGrp} ${styles.cldIcn}`}
                      >
                        <Form.Label className={styles.formLbl}>
                          Date of Birth
                        </Form.Label>
                        <Form.Control
                          className={styles.formControl}
                          type="text"
                          placeholder="30 Jan 1984"
                          readOnly
                        />
                      </Form.Group>
                    </div>
                    <div className={styles.rowBdr}>
                      <Form.Group
                        className={`${styles.formGrp} ${styles.ntlIcn}`}
                      >
                        <Form.Label className={styles.formLbl}>
                          Nationality
                        </Form.Label>
                        <Form.Control
                          className={styles.formControl}
                          type="text"
                          placeholder="India"
                          readOnly
                        />
                      </Form.Group>
                    </div>
                    <div className={styles.rowBdr}>
                      <Form.Group
                        className={`${styles.formGrp} ${styles.gndrIcn}`}
                      >
                        <Form.Label className={styles.formLbl}>
                          Gender
                        </Form.Label>
                        <Form.Control
                          className={styles.formControl}
                          type="text"
                          placeholder="Male"
                          readOnly
                        />
                      </Form.Group>
                    </div>
                    <div className={`${styles.rowBdr} ${styles.bdr0}`}>
                      <Form.Group
                        className={`${styles.formGrp} ${styles.adrsIcn}`}
                      >
                        <Form.Label className={styles.formLbl}>
                          Address
                        </Form.Label>
                        <Form.Control
                          className={styles.formControl}
                          type="text"
                          placeholder="46, Krishna Garden, Jagatpura Jaipur"
                          readOnly
                        />
                      </Form.Group>
                    </div>
                    {/* <div className={styles.saveBtnBlock}>
                      <Button className={"btn-custom btn-small"}>Save</Button>
                    </div> */}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MyAccountPage;

"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/Header.module.scss";
import {
  Container,
  Nav,
  Navbar,
  Image,
  Modal,
  Row,
  Col,
  Form,
  Button,
  ButtonGroup,
} from "react-bootstrap";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // State variables to control visibility of modals
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  // Function to open Sign In Modal and close Sign Up Modal
  const openSignInModal = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  // Function to open Sign Up Modal and close Sign In Modal
  const openSignUpModal = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  // Handlers to close modals
  const handleCloseSignIn = () => setShowSignIn(false);
  const handleCloseSignUp = () => setShowSignUp(false);

  return (
    <div className={`${styles.Header} ${sticky ? "sticky" : ""}`}>
      <Navbar collapseOnSelect expand="lg" className={`${styles.HdrInr} bg-body-tertiary`}>
        <Container>
          <Navbar.Brand href="#" className={styles.Logo}>
            <Image src="/assets/travel-logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.NavBtn}/>
          <Navbar.Collapse id="responsive-navbar-nav" className={styles.NavCustom}>
            <Nav>
              <Nav.Link href="#" className={styles.NavLink}>Home</Nav.Link>
              <Nav.Link href="#" className={styles.NavLink}>About Us</Nav.Link>
              <Nav.Link href="#" className={styles.NavLink}>FAQ</Nav.Link>
              <Nav.Link href="#" className={styles.NavLink}>Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#" className={styles.NavLinkRt}>
                <Image src="/assets/call-icon.png" alt="" /> (000) 123 456 789
              </Nav.Link>
              <Nav.Link className={styles.NavLinkRt} onClick={openSignInModal}>
                <Image src="/assets/user-icon-trvl.png" alt="" /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal className={styles.CustomPopup} show={showSignIn} onHide={handleCloseSignIn} animation={true} backdrop="static" keyboard={false}
        size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className={styles.PopupBody}>
          <a onClick={handleCloseSignIn} className={styles.PopupClsBtn}>
            <Image src="/assets/close-btn.png" alt="" />
          </a>
          <Row className={"g-0"}>
            <Col lg={6}>
              <div className={styles.GuideBlock}>
                <a href="#" className={styles.LogoLogin}>
                  <Image src="/assets/travel-logo.png" alt="" />
                </a>
                <div className={`${styles.GuideInfoBlock} text-center`}>
                  <h5>How about we</h5>
                  <h2><span>Travel</span> the World</h2>
                  <h6>We guide your entire tour &amp; feel you safe</h6>
                  <p>Don’t have an account? Please</p>
                  <Button className={`${styles.SignupBtn} globalBtn`} onClick={openSignUpModal}>
                    Sign Up
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.FormBlock}>
                <h3>Sign In</h3>
                <Form.Group className={styles.FormGroup}>
                  <Form.Label htmlFor="Email">Email</Form.Label>
                  <Form.Control type="text" id="Email" aria-describedby="EmailHelpBlock" placeholder="Enter Your Email"/>
                </Form.Group>
                <Form.Group className={styles.FormGroup}>
                  <Form.Label htmlFor="Password">Password</Form.Label>
                  <Form.Control type="password" id="Password" aria-describedby="passwordHelpBlock" placeholder="Enter Your Password"/>
                </Form.Group>
                <Form.Group className={styles.FormGroup}>
                  <Row>
                    <Col md={6}>
                      {["checkbox"].map((type) => (
                        <div key={`default-${type}`}>
                          <Form.Check type={type} id={`inline-${type}-13`} className={styles.CustomCHK}>
                            <Form.Check.Input type={type} isValid />
                            <Form.Check.Label>{`Remember Me`}</Form.Check.Label>
                          </Form.Check>
                        </div>
                      ))}
                    </Col>
                    <Col md={6} className={"text-right"}>
                      <a href="#">Forgot Password?</a>
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className={`${styles.FormGroup} text-center`}>
                  <Button className={`${styles.SigninBtn} globalBtn`}>
                    Sign In
                  </Button>
                </Form.Group>
                <Form.Group className={`${styles.FormGroup} text-center`}>
                  Or Sign In with
                </Form.Group>
                <ButtonGroup aria-label="Social Button" className={styles.SocialBtn}>
                  <Button className={`${styles.facebookLink} d-flex align-items-center justify-content-center`}>
                    <i><Image src="/assets/facebook.png" alt="" /></i> Facebook
                  </Button>
                  <Button className={`${styles.googleLink} d-flex align-items-center justify-content-center`}>
                    <i><Image src="/assets/google.png" alt="" /></i> Google
                  </Button>
                </ButtonGroup>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Modal className={styles.CustomPopup} show={showSignUp} onHide={handleCloseSignUp} animation={true} backdrop="static" keyboard={false}
        size="xl" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body className={styles.PopupBody}>
          <a onClick={handleCloseSignUp} className={styles.PopupClsBtn}>
            <Image src="/assets/close-btn.png" alt="" />
          </a>
          <Row className={"g-0"}>
            <Col lg={6} className={styles.LgNone}>
              <div className={styles.GuideBlock}>
                <a href="#" className={styles.LogoLogin}>
                  <Image src="/assets/travel-logo.png" alt="" />
                </a>
                <div className={`${styles.GuideInfoBlock} text-center`}>
                  <h5>How about we</h5>
                  <h2><span>Travel</span> the World</h2>
                  <h6>We guide your entire tour &amp; feel you safe</h6>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className={styles.FormBlock}>
                <h3>Sign Up</h3>
                <Form.Group className={styles.FormGroup}>
                  <Form.Label htmlFor="Name">Name</Form.Label>
                  <Form.Control type="text" id="Name" aria-describedby="Full Name" placeholder="Enter Your Full Name"/>
                </Form.Group>
                <Form.Group className={styles.FormGroup}>
                  <Form.Label htmlFor="Email">Email</Form.Label>
                  <Form.Control type="email" id="Email" aria-describedby="Email" placeholder="Enter Your Email"/>
                </Form.Group>
                <Form.Group className={styles.FormGroup}>
                  <Form.Label htmlFor="Phone">Phone No.</Form.Label>
                  <Form.Control type="Phone" id="Phone" aria-describedby="Phone" placeholder="Enter Your Phone No." />
                </Form.Group>
                <Form.Group className={styles.FormGroup}>
                  <Form.Label htmlFor="Password">Password</Form.Label>
                  <Form.Control type="Password" id="Password" aria-describedby="Password" placeholder="Enter Password"/>
                </Form.Group>
                <Form.Group className={styles.FormGroup}>
                  <Form.Label htmlFor="ConfirmPassword">Confirm Password</Form.Label>
                  <Form.Control type="Password" id="ConfirmPassword" aria-describedby="ConfirmPassword" placeholder="Enter Confirm Password"/>
                </Form.Group>
                <Form.Group className={`${styles.FormGroup} text-center mb-0`}>
                  <Button className={`${styles.SigninBtn} globalBtn`}>
                    Sign Up
                  </Button>
                </Form.Group>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const Index: React.FC = () => {
  return <Header />;
};

export default Index;

"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/Header.module.scss";
import { Container, Nav, Navbar, Image, Dropdown } from "react-bootstrap";

const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.Header} ${sticky ? "sticky" : ""}`}>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${styles.HdrInr} bg-body-tertiary`}
      >
        <Container>
          <Navbar.Brand href="#" className={styles.Logo}>
            <Image src="/assets/travel-logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className={styles.NavBtn}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={styles.NavCustom}
          >
            <Nav>
              <Nav.Link href="#" className={styles.NavLink}>
                Home
              </Nav.Link>
              <Nav.Link href="#" className={styles.NavLink}>
                About Us
              </Nav.Link>
              <Nav.Link href="#" className={styles.NavLink}>
                FAQ
              </Nav.Link>
              <Nav.Link href="#" className={styles.NavLink}>
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#" className={styles.NavLinkRt}>
                <Image src="/assets/call-icon.png" alt="" /> (000) 123 456 789
              </Nav.Link>
              <Dropdown className={styles.userDropdownBlock}>
                <Dropdown.Toggle id="UserDropdown" className={styles.userHdrBtn}>
                  <Image src="/assets/user-icon-trvl.png" alt="" /> John Micheal
                </Dropdown.Toggle>
                <Dropdown.Menu className={styles.userDropdownClass}>
                  <Dropdown.Item href="#"><Image src="/assets/user.png" alt=""/> My Profile</Dropdown.Item>
                  <Dropdown.Item href="#"><Image src="/assets/settings.png" alt=""/> Settings</Dropdown.Item>
                  <Dropdown.Item href="#"><Image src="/assets/customer-support.png" alt=""/> Help & Support</Dropdown.Item>
                  <Dropdown.Item href="#"><Image src="/assets/review.png" alt=""/> Review</Dropdown.Item>
                  <Dropdown.Item href="#"><Image src="/assets/booking.png" alt=""/> My Bookings</Dropdown.Item>
                  <Dropdown.Item href="#"><Image src="/assets/signout.png" alt=""/> Sign out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const Index: React.FC = () => {
  return <Header />;
};

export default Index;

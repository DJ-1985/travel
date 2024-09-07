"use client";

import React from "react";

import styles from "@/styles/ContactUs/ContactUs.module.scss";
import {
  Col,
  Row,
  Image,
  FormGroup,
  Form,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";

function ContactUsPage() {
  return (
    <div className={styles.ContactUsOuter}>
      <div className={styles.CtInfo}>
        <div className={"container"}>
          <Row>
            <Col md={4}>
              <div className={styles.CtDtl}>
                <div className={styles.Cticon}>
                  <Image src="/assets/map-blue.png" alt="" />
                </div>
                <h5>Address</h5>
                <p>
                  CP4-228, 229, Apparel Park, Mahal Road (Hare Krishna Marg)
                  Jagatpura, Jaipur, Rajasthan, India 302017
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.CtDtl}>
                <div className={styles.Cticon}>
                  <Image src="/assets/phone-blue.png" alt="" />
                </div>
                <h5>phone</h5>
                <p>
                  Company registration number
                  <br />
                  +91 98290 29555
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={styles.CtDtl}>
                <div className={styles.Cticon}>
                  <Image src="/assets/envelop-blue.png" alt="" />
                </div>
                <h5>Email</h5>
                <p>
                  support@dotsquares.com
                  <br />
                  info@dotsquares.com
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.CtMap}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0055995731173!2d75.8154668155572!3d26.871563183145515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db67cda4edb8f%3A0x44a26758d0377e21!2sDotsquares%20Jhalana%20Office!5e0!3m2!1sen!2sin!4v1599739574698!5m2!1sen!2sin"></iframe>
      </div>
      <div className={styles.CtForm}>
        <div className={"text-center mb-4"}>
          <h2>Get In Touch</h2>
          <p>
            We understand exactly the factors that make a good holiday and we’re
            here to give you the kind of travel experience you’ll remember for
            the longest time.
          </p>
          <p>Help us serve you better by filling in this below form.</p>
        </div>
        <Row>
          <Col md={6}>
            <Form.Group className={styles.FormGroup}>
              <Form.Label htmlFor="FirstName">First Name</Form.Label>
              <Form.Control
                type="text"
                id="FirstName"
                aria-describedby="FirstName"
                placeholder="First Name"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className={styles.FormGroup}>
              <Form.Label htmlFor="LastName">Last Name</Form.Label>
              <Form.Control
                type="text"
                id="LastName"
                aria-describedby="LastName"
                placeholder="Last Name"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className={styles.FormGroup}>
              <Form.Label htmlFor="Phone">Phone</Form.Label>
              <Form.Control
                type="text"
                id="Phone"
                aria-describedby="Phone"
                placeholder="Phone"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className={styles.FormGroup}>
              <Form.Label htmlFor="Email">Email</Form.Label>
              <Form.Control
                type="text"
                id="Email"
                aria-describedby="Email"
                placeholder="Email"
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className={styles.FormGroup}>
              <Form.Label htmlFor="Message">Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Message"
                className={styles.FormTextarea}
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group className={`${styles.FormGroup} text-center`}>
              <Button className={`${styles.SigninBtn} btn-custom`}>
                Submit
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ContactUsPage;

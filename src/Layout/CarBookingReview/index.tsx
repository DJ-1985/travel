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

import styles from "@/styles/CarBookingReview/CarBookingReview.module.scss";
import SiteBreadcrumb from "@/Layout/GLobal/Breadcrumb";

function CarBookingReviewPage() {
  return (
    <div className={styles.CarBookingReview}>
      <Container>
        <Row>
          <Col className={styles.carBkgReviewLt}>
            <SiteBreadcrumb />
            <div className={styles.driverDtlForm}>
              <h3>
                <Image src="/assets/user.png" alt="" /> Main Driver Details
              </h3>
              <Row>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Country/Region*</Form.Label>
                    <Form.Select className={styles.frmSelect}>
                      <option value="other">India</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Lead Driver&apos;s Age</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Flight Number (Optional)</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                    <p>
                      <small>
                        Your flight number is important if your flight is
                        delayed or cancelled. It will help the car rental
                        company to know when you are arriving
                      </small>
                    </p>
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className={styles.driverDtlForm}>
              <h3>
                <Image src="/assets/wallet.png" alt="" /> Secure Payment Details
              </h3>
              <div className={styles.payGateway}>
                <Image src="/assets/payment-gateway.png" alt="" />
              </div>
              <Row>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Name on Card</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Debit/Credit Card Number</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={12}>
                <Form className={styles.formChk}>
                    <Form.Check
                      type="checkbox"
                      id="inline-checkbox-13"
                      className={styles.CustomCHK}
                    >
                      <Form.Check.Input type="checkbox" isValid />
                      <Form.Check.Label>
                        I agree to the Car Hire <a href="#">Terms and Conditions</a>, and{" "}
                        <a href="#">Privacy Policy</a>
                      </Form.Check.Label>
                    </Form.Check>
                  </Form>
                </Col>
              </Row>
            </div>
            <div className={styles.carDtlBkgBtm}>
              <NavLink className={styles.backBtn}>
                <Image
                  src="/assets/back-arrow.png"
                  alt="img"
                  className={"me-2"}
                />
                Back
              </NavLink>
              <Button className={"btn-yellow"} type="submit">
                Confirm Booking
              </Button>
            </div>
          </Col>
          <Col className={styles.carBkgReviewRt}>
            <h3>Price Summary</h3>
            <div className={styles.prcSummaryCard}>
              <div className={styles.prcFare}>
                <span>Car hire fee</span> INR 8,080.00
                <span>Total includes taxes & fees</span>
              </div>
              <h4>Included Charges</h4>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>One way fee</td>
                    <td className={"text-right"}>INR 1,080.00</td>
                  </tr>
                  <tr>
                    <td>Airport fee</td>
                    <td className={"text-right"}>INR 0.00</td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td className={"text-right"}>INR 400.00</td>
                  </tr>
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
            </div>
            <h3>Trip Summary</h3>
            <div className={styles.tripSummaryCard}>
              <div className={styles.tripTopCard}>
                <div className={styles.tripTopCardImg}>
                  <Image src="/assets/img9.png" alt="" />
                </div>
                <div className={styles.tripTopCardInfo}>
                  <h4>Midsize</h4>
                  <p>Toyota Corolla or similar</p>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">
                      <Image src="/assets/car-icon3.png" alt="" />5 Seats
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      <Image src="/assets/car-icon6.png" alt="" />2 Bags
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </div>
              <div className={styles.tripMidCard}>
                <Table bordered>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Passenger(s)</strong> 5
                      </td>
                      <td>
                        <strong>Pick-Up Location</strong> Delhi
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Fuel Policy</strong> Full to Full
                      </td>
                      <td>
                        <strong>Mileage</strong> Unlimited
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>Automatic Transmission</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <ListGroup as="ul" className={styles.tripList}>
                <ListGroup.Item as="li">
                  <h6>Udyog Vihar Phase V, Delhi</h6>
                  <p>11 Sep 2024 | 10:30 am</p>
                  <a href="#">View pick-up details</a>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <h6>Oshiwara Mhada Complex, Mumbai</h6>
                  <p>12 Sep 2024 | 12:30 pm</p>
                  <a href="#">View drop-off details</a>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CarBookingReviewPage;

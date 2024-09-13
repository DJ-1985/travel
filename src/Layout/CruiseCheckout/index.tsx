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

import styles from "@/styles/CruiseCheckout/CruiseCheckout.module.scss";
import SiteBreadcrumb from "@/Layout/GLobal/Breadcrumb";

function CruiseCheckoutPage() {
  return (
    <div className={styles.cruiseChkoutOuter}>
      <Container>
        <Row>
          <Col className={styles.cruiseChkoutLt}>
            <SiteBreadcrumb />
            <div className={styles.driverDtlForm}>
              <h3><Image src="/assets/user.png" alt="" /> Primary Traveler</h3>
              <p><strong>Important:</strong> Name must appear exactly as it is on
                the traveler&apos;s passport or government approved travel document,
                or boarding may be denied. However, middle names/initials or
                suffixes are not required.</p>
              <Row>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Title</Form.Label>
                    <Form.Select className={styles.frmSelect}>
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Miss</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Citizenship</Form.Label>
                    <Form.Select className={styles.frmSelect}>
                      <option>India</option>
                      <option>USA</option>
                      <option>UK</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select className={styles.frmSelect}>
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Country/Region*</Form.Label>
                    <Form.Select className={styles.frmSelect}>
                      <option>India</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Country/Territory Code</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
              </Row>
              <hr />
              <h3><Image src="/assets/user.png" alt="" /> Traveler 2</h3>
              <Row>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Title</Form.Label>
                    <Form.Select className={styles.frmSelect}>
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Miss</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Date of birth</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Gender</Form.Label>
                    <Form.Select className={styles.frmSelect}>
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Citizenship</Form.Label>
                    <Form.Select className={styles.frmSelect}>
                      <option>India</option>
                      <option>USA</option>
                      <option>UK</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Country/Territory Code</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className={`${styles.driverDtlForm} ${styles.protectTripBlock}`}>
              <h3>Protect your trip <span>Recommended</span></h3>
              <div className={styles.impText}>
                <strong>Important:</strong> Trip cancellation due to government
                travel advisories, fear of travel, or change of mind is not
                covered. Travel insurance may provide coverage for COVID-19
                diagnosed illness. COVID-19 is a foreseen event and certain
                other coverages will not apply. Learn more
              </div>
              <p><strong>Note: Resident of New York or Washington?</strong>
                <br />Select your state if you are a resident of
                <a href="#">New York</a> or <a href="#">Washington</a>, to view plans eligible for your state.</p>
              <ListGroup as="ul" className={styles.protectList}>
                <ListGroup.Item as="li">
                  <strong>Cancel before you cruise:</strong>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">
                      100% of your cruise cost if you cancel due to certain
                      illness, injury, or other covered reasons
                    </ListGroup.Item>
                  </ListGroup>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <strong>Catch up to your cruise:</strong>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">
                      Get assistance in catching up to your cruise if you
                      can&apos;t make your flight
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      Get reimbursed up to $1,300 for covered meal and hotel
                      costs
                    </ListGroup.Item>
                  </ListGroup>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <strong>Catch up to your cruise:</strong>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">
                      100% of your cruise cost if you cut short your trip due to
                      a covered illness or injury
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      $1,500 for covered lost, stolen, or damaged baggage
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      $10,000 for certain eligible medical expenses
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                      24/7 worldwide emergency hotline
                    </ListGroup.Item>
                  </ListGroup>
                </ListGroup.Item>
              </ListGroup>
              <NavLink href="#">View insurance details and disclosures</NavLink>
              <div className={styles.formRdoOuter}>
                <Form>
                  <div className={styles.formRdo}>
                    <Form.Check type="radio" id="rdo1" name="rdogroup" className={styles.CustomRdo}
                      label={
                        <>
                          <strong>Yes,</strong> I want to protect my trip.
                          <div className={styles.rdoRtText}>
                            <strong>$72.82</strong> Per Person
                          </div>
                        </>
                      }
                      isValid />
                  </div>
                  <div className={styles.formRdo}>
                    <Form.Check type="radio" id="rdo2" name="rdogroup" className={styles.CustomRdo}
                      label={
                        <>
                          <strong>No,</strong> I am willing to take the risk.
                        </>
                      }
                      isValid />
                  </div>
                </Form>
              </div>
              <p>The cost of this plan includes travel insurance and assistance services.</p>
            </div>
            <div className={styles.driverDtlForm}>
              <h3><Image src="/assets/wallet.png" alt="" /> Secure Payment Details</h3>
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
              </Row>
              <hr />
              <Row>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Country/Territory</Form.Label>
                    <Form.Select className={styles.frmSelect}>
                      <option>India</option>
                      <option>USA</option>
                      <option>UK</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Billing address 1</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Billing address 2</Form.Label>
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
                    <Form.Label>State</Form.Label>
                    <Form.Select className={styles.frmSelect}>
                      <option>Rajasthan</option>
                      <option>UP</option>
                      <option>MP</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className={styles.frmGroup}>
                    <Form.Label>Zip code</Form.Label>
                    <Form.Control type="text" className={styles.frmInput} />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className={`${styles.driverDtlForm} ${styles.cruiseInfoBlock}`}>
              <h3>Important cruise information</h3>
              <ListGroup as="ul">
                <ListGroup.Item as="li">
                  <NavLink href="#">Cancellation Policies</NavLink> 
                  are determined by the cruise line.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <NavLink href="#">COVID-19 Policies</NavLink> are determined by the cruise line.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  This cruise line requires that passengers younger than 21
                  years old be accompanied by an adult 21 years or older in the
                  same cabin. All passengers in your cabin must be 6 months or
                  older. Please read the age restrictionsOpens in new tab for
                  complete details.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Cruise lines generally cannot accept guests who will have
                  entered their 24th week of pregnancy by the beginning of or at
                  any time during the cruise. You may be required to product a
                  physician&apos;s &quot;Fit to Travel&quot; note prior to sailing. Please read
                  the pregnancy restrictionsOpens in new tab for complete
                  details.
                </ListGroup.Item>
              </ListGroup>
            </div>
            <div className={styles.cruiseTerms}>
              <p>
                By clicking on the button below, I acknowledge that I have reviewed the 
                <NavLink href="#">Privacy Statement</NavLink> 
                and
                <NavLink href="#">Government Travel Advice</NavLink> 
                and have reviewed and accept the
                <NavLink href="#">Rules & Restrictions</NavLink>
                and
                <NavLink href="#">Terms of Use.</NavLink>
              </p>
            </div>
            <div className={styles.carDtlBkgBtm}>
              <NavLink className={styles.backBtn}>
                <Image src="/assets/back-arrow.png" alt="img" className={"me-2"}/>
                 Back
              </NavLink>
              <Button className={"btn-yellow"} type="submit">Confirm Booking</Button>
            </div>
          </Col>
          <Col className={styles.cruiseChkoutRt}>
            <h3>Trip Summary</h3>
            <div className={styles.cruiseTripBlock}>
              <div className={styles.cruiseLogo}>
                <Image src="/assets/cruise-logo.png" alt="" />
              </div>
              <h4>7-night Alaska Cruise</h4>
              <p><strong>Ship:</strong> Norwegian Bliss</p>
              <p><strong>Cabin Type:</strong> Inside Stateroom (IX)</p>
              <p><strong>Cabin Number:</strong> Guaranteed Cabin</p>
              <p><strong>Departs:</strong> Sep 28, 2024 5:00pm</p>
              <p><strong>Returns:</strong> Oct 5, 2024 6:00am</p>
              <p><strong>Departure Port:</strong> Seattle, United States</p>
              <p><strong>Return Port:</strong> Seattle, United States</p>
              <hr />
              <h4>Itinerary</h4>
              <p><strong>Day 1 ∙ Seattle, United States</strong> <br /> Depart 5:00pm</p>
              <p><strong>Day 2 ∙ Cruising, At Sea</strong></p>
              <p><strong>Day 3 ∙ Juneau, United States</strong> <br /> Arrive 2:30pm - Depart 10:00pm</p>
              <p><strong>Day 4 ∙ Skagway, United States</strong>  <br /> Arrive 6:00am - Depart 8:15pm</p>
              <p><strong>Day 5 ∙ Glacier Bay, United States</strong></p>
              <p><strong>Day 6 ∙ Ketchikan, United States</strong> <br /> Arrive 7:00am - Depart 1:15pm</p>
              <p><strong>Day 7 ∙ Victoria, Canada</strong>  <br /> Arrive 8:00pm - Depart 11:59pm</p>
              <p><strong>Day 8 ∙ Seattle, United States</strong></p>
              <hr />
              <h5>No surprises! Here&apos;s a breakdown of your price:</h5>
              <Table className={styles.tblCustom}>
                <tbody>
                  <tr>
                    <td>
                      <strong>Primary Traveler</strong>
                    </td>
                    <td className={"text-right"}>$648.70</td>
                  </tr>
                  <tr>
                    <td>Taxes and Fees</td>
                    <td className={"text-right"}>$335.31</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Traveler 2</strong>
                    </td>
                    <td className={"text-right"}>$648.70</td>
                  </tr>
                  <tr>
                    <td>Taxes and Fees</td>
                    <td className={"text-right"}>$335.31</td>
                  </tr>
                </tbody> 
              </Table>
              <hr />
              <div className={styles.bundleBlock}>
                <strong>Your bundle</strong>
                <span>included</span>
              </div>
              <p>Flexible cruise cancel policy<br/> Shore excursion - credit</p>
              <NavLink href="#">More details</NavLink>
              <hr />
              <div className={styles.cruiseTotalPrc}>Cruise Total: $1,968.02</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CruiseCheckoutPage;

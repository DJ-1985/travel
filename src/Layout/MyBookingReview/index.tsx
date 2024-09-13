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
  FormGroup,
} from "react-bootstrap";
import styles from "@/styles/MyProfile/MyProfile.module.scss";

function MyBookingReviewPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Function 1: Toggles state using the previous state value
  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [isOpenA, setIsOpenA] = useState(false);
  // Function 2: Toggles state using the current state directly
  const togglePopup = () => {
    setIsOpenA(!isOpenA);
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
                  <Nav.Link href="#">
                    <Image src="/assets/customer-support.png" alt="" /> Help &
                    Support
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="#" className={styles.navActive}>
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
            <div className={styles.cmnCard}>
              <div className={styles.profileTop}>
                <div className={styles.pflLt}>
                  <h2>Review</h2>
                </div>
              </div>
              <h3>Not yet reviewed</h3>
              <div className={styles.reviewCard}>
                <div className={styles.reviewLeft}>
                  <div className={styles.reviewImg}>
                    <Image src="/assets/img6.jpg" alt="" />
                  </div>
                  <div className={styles.reviewInfo}>
                    <h4>Kenilworth Beach Resort Hotel</h4>
                    <p>
                      <i>
                        <Image src="/assets/location-black.png" alt="" />
                      </i>
                      Arossim, Goa, India <a href="#">Show on map</a>
                    </p>
                    <p>
                      <i>
                        <Image src="/assets/hotel-services-icon-1.png" alt="" />
                      </i>
                      Breakfast Included
                    </p>
                    <p>
                      <i>
                        <Image src="/assets/hotel-services-icon-2.png" alt="" />
                      </i>
                      Pool
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
                <div className={`${styles.reviewRight} text-center`}>
                  <i>
                    <Image src="/assets/icon23.png" alt="" />
                  </i>
                  <div className={styles.reviewPrg}>
                    Would you recommend this property?
                  </div>
                  <div className={styles.rdoGrp}>
                  <Form>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className={styles.reviewRdo}>
                        <Form.Check
                          inline
                          label="No"
                          name="group1"
                          type={type as 'radio'} // Type assertion to ensure type is 'radio'
                          id={`inline-${type}-1`}
                          className={styles.reviewRdoField}
                        />
                        <Form.Check
                          inline
                          label="Yes"
                          name="group1"
                          type={type as 'radio'} // Type assertion to ensure type is 'radio'
                          id={`inline-${type}-2`}
                          className={`${styles.reviewRdoField} ${styles.rdoSecond}`}
                        />
                      </div>
                    ))}
                  </Form>
                  </div>
                </div>
              </div>
              <h3>Reviews in Progress</h3>
              <div className={styles.reviewCard}>
                <div className={styles.reviewLeft}>
                  <div className={styles.reviewImg}>
                    <Image src="/assets/img6.jpg" alt="" />
                  </div>
                  <div className={styles.reviewInfo}>
                    <h4>Kenilworth Beach Resort Hotel</h4>
                    <p>
                      <i>
                        <Image src="/assets/location-black.png" alt="" />
                      </i>
                      Arossim, Goa, India <a href="#">Show on map</a>
                    </p>
                    <p>
                      <i>
                        <Image src="/assets/hotel-services-icon-1.png" alt="" />
                      </i>
                      Breakfast Included
                    </p>
                    <p>
                      <i>
                        <Image src="/assets/hotel-services-icon-2.png" alt="" />
                      </i>
                      Pool
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
                <div className={`${styles.reviewRight} text-center`}>
                  <i>
                    <Image src="/assets/icon24.png" alt="" />
                  </i>
                  <div className={styles.reviewPrg}>
                    Your property review appears incomplete. Please continue to
                    share your feedback!
                  </div>
                  <Button
                    className={`${styles.cmplBtn} btn-yellow round-btn`}
                    onClick={togglePopup}
                  >
                    Complete my review
                  </Button>
                </div>
              </div>
              <h3>Submitted</h3>
              <div className={styles.reviewCard}>
                <div className={styles.reviewLeft}>
                  <div className={styles.reviewImg}>
                    <Image src="/assets/img6.jpg" alt="" />
                  </div>
                  <div className={styles.reviewInfo}>
                    <h4>Kenilworth Beach Resort Hotel</h4>
                    <p>
                      <i>
                        <Image src="/assets/location-black.png" alt="" />
                      </i>
                      Arossim, Goa, India <a href="#">Show on map</a>
                    </p>
                    <p>
                      <i>
                        <Image src="/assets/hotel-services-icon-1.png" alt="" />
                      </i>
                      Breakfast Included
                    </p>
                    <p>
                      <i>
                        <Image src="/assets/hotel-services-icon-2.png" alt="" />
                      </i>
                      Pool
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
                <div className={`${styles.reviewRight} text-center`}>
                  <div className={styles.reviewQuote}>You wrote</div>
                  <div className={styles.reviewCount}>10</div>
                  <div className={styles.reviewPrg}>
                    <strong>“Nice experience”</strong> All the staffs are nice
                    and amazing hospitality.
                  </div>
                  <div className={styles.reviewDate}>
                    <span>30 Sep 2023</span>
                    <a href="#">Read full review</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Add Your Review Form Popup Start Here */}
      <div className={`${styles.reviewSidePopup} ${isOpenA ? styles.sidePopupOpen : ""}`}>
        <div className={styles.reviewHd}>Submit Review </div>
        <a className={styles.reviewPopupClsBtn} onClick={togglePopup}>
          <Image src="/assets/close-icon.png" alt="" />
        </a>
        <div className={styles.reviewMainHd}>
          <Image src="/assets/clock-icon.png" alt="" />
          <p>
            Please take 3 minutes to share your thoughts with other travelers.
          </p>
        </div>
        <div className={styles.rvProgress}>
          <div className={styles.rvProgressLt}>
            <h6>Reviews in Progress</h6>
            <p>Your honest opinion will help others decide.</p>
          </div>
          <div className={styles.rvProgressRt}>
            <div className={styles.rdoGrp}>
            <Form>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className={styles.reviewRdo}>
                  <Form.Check
                    inline
                    label="No"
                    name="group1"
                    type={type as 'radio'} // Type assertion to ensure type is 'radio'
                    id={`inline-${type}-1`}
                    className={styles.reviewRdoField}
                  />
                  <Form.Check
                    inline
                    label="Yes"
                    name="group1"
                    type={type as 'radio'} // Type assertion to ensure type is 'radio'
                    id={`inline-${type}-2`}
                    className={`${styles.reviewRdoField} ${styles.rdoSecond}`}
                  />
                </div>
              ))}
            </Form>
            </div>
          </div>
        </div>
        <div className={styles.rvwLoop}>
          <div className={styles.rvwLoopLt}>
            <Image src="/assets/clock.png" alt="" /> Value for money
          </div>
          <div className={styles.rvwLoopRt}>
            <Image src="/assets/star.png" alt="" />
          </div>
        </div>
        <div className={styles.rvwLoop}>
          <div className={styles.rvwLoopLt}>
            <Image src="/assets/location.png" alt="" /> Location
          </div>
          <div className={styles.rvwLoopRt}>
            <Image src="/assets/star.png" alt="" />
          </div>
        </div>
        <div className={styles.rvwLoop}>
          <div className={styles.rvwLoopLt}>
            <Image src="/assets/cleanliness.png" alt="" /> Cleanliness
          </div>
          <div className={styles.rvwLoopRt}>
            <Image src="/assets/star.png" alt="" />
          </div>
        </div>
        <div className={styles.rvwLoop}>
          <div className={styles.rvwLoopLt}>
            <Image src="/assets/staff.png" alt="" /> Staff
          </div>
          <div className={styles.rvwLoopRt}>
            <Image src="/assets/star.png" alt="" />
          </div>
        </div>
        <div className={styles.rvwLoop}>
          <div className={styles.rvwLoopLt}>
            <Image src="/assets/facilities.png" alt="" /> Facilities
          </div>
          <div className={styles.rvwLoopRt}>
            <Image src="/assets/star.png" alt="" />
          </div>
        </div>
        <div className={styles.reviewForm}>
          <h6>My Review</h6>
          <Form>
            <Form.Group className={"mb-3"}>
              <Form.Label>Type of Travelers</Form.Label>
              <Form.Select className={"form-control"}>
                <option></option>
                <option>Lorem ipsum dolor</option>
                <option>Sit aet design</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className={"mb-3"}>
              <Form.Label>Review Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className={"mb-3"}>
              <Form.Label>Review Summary</Form.Label>
              <Form.Control as="textarea" className={styles.txtArea} />
            </Form.Group>
            <Form.Group className={"mb-3 text-center"}>
              <Button type="button" className={"btn-yellow"}>
                Submit My Review
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
      {/* Add Your Review Form Popup End Here */}
    </div>
  );
}

export default MyBookingReviewPage;

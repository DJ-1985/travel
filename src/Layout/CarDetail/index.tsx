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
  Modal,
  Tab,
  Nav,
} from "react-bootstrap";

import styles from "@/styles/CarDetail/CarDetail.module.scss";
import SiteBreadcrumb from "@/Layout/GLobal/Breadcrumb";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarDetailPage() {
  const ratings = [
    { stars: 5, percentage: 82 },
    { stars: 4, percentage: 26 },
    { stars: 3, percentage: 12 },
    { stars: 2, percentage: 5 },
    { stars: 1, percentage: 6 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1699,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0)); // prevents negative values
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(isNaN(newValue) ? 0 : newValue);
  };

  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);

  const handleClosePopup1 = () => setShowPopup1(false);
  const handleShowPopup1 = () => setShowPopup1(true);

  const handleClosePopup2 = () => setShowPopup2(false);
  const handleShowPopup2 = () => setShowPopup2(true);

  const handleClosePopup3 = () => setShowPopup3(false);
  const handleShowPopup3 = () => setShowPopup3(true);

  return (
    <div className={styles.carDetailWrapper}>

      <Container>
        <Row>
          <Col className={styles.carDtllt}>
            <SiteBreadcrumb />
            <div className={styles.carDtlCard}>
              <Row>
                <Col className={styles.carDtlImage}>
                  <Image src="/assets/car-image.png" alt="" />
                </Col>
                <Col className={styles.carDtlInfo}>
                  <h1>Midsize</h1>
                  <p>Toyota Corolla or similar</p>
                  <div className={styles.carDtlInfoMid}>
                    <div className={styles.dtlTopLink}>
                      <NavLink href="#">Free Cancellation</NavLink>
                      <NavLink href="#">Pre-Registration available</NavLink>
                    </div>
                    <ListGroup as="ul">
                      <ListGroup.Item as="li">
                        <Image src="/assets/car-icon3.png" alt="" /> 5 Seats
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <Image src="/assets/car-icon4.png" alt="" /> Automatic
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <Image src="/assets/car-icon5.png" alt="" /> 1 Large bag
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <Image src="/assets/car-icon6.png" alt="" /> 2 Small bag
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <Image src="/assets/car-icon7.png" alt="" /> Unlimited
                        Mileage
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <Image src="/assets/car-icon8.png" alt="" /> Full to
                        Full
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <Image src="/assets/car-icon9.png" alt="" /> Damage
                        coverage
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <div className={styles.carDtlInfoBtm}>
                    <div className={styles.carDtlInfoPrc}>
                      <span>Car hire fee</span>
                      INR 8,080.00
                    </div>
                    <NavLink
                      className={"btn-yellow"}
                      onClick={handleShowPopup3}
                    >
                      Important Info
                    </NavLink>
                  </div>
                </Col>
              </Row>
            </div>
            <h3>Customer Rating</h3>
            <div className={`${styles.ratingBlock} rating-container`}>
              <div className="d-flex align-items-center mb-3">
                <div className={styles.badgeBox}>
                  4.7 <Image src="/assets/white-star.png" alt="" />
                </div>
                <span> Average waiting time is 16 mins</span>
              </div>
              {ratings.map((rating) => (
                <div
                  key={rating.stars}
                  className="d-flex align-items-center mb-2"
                >
                  <span className={`${styles.numberStar} me-2`}>
                    <span>{rating.stars}</span>{" "}
                    <Image src="/assets/grey-star.png" alt="" />
                  </span>
                  <ProgressBar
                    now={rating.percentage}
                    variant="warning"
                    className="flex-grow-1"
                    style={{ height: "8px" }}
                  />
                  <span className={`${styles.numberStarPer} me-2`}>
                    {rating.percentage}%
                  </span>
                </div>
              ))}
            </div>
            <h3>Extras (Optional)</h3>
            <div className={styles.extraOptionSlider}>
              <Slider {...settings}>
                <div className="item">
                  <div className={styles.extraOptionCard}>
                    <i>
                      <Image src="/assets/icon33.png" alt="" />
                    </i>
                    <h4>Additional Driver</h4>
                    <div className={styles.optPrc}>
                      INR 2,994.00 <span>Per hire</span>
                    </div>
                    <InputGroup className={styles.grpOuter}>
                      <Button
                        variant="outline-secondary"
                        onClick={handleDecrement}
                      >
                        -
                      </Button>
                      <FormControl
                        type="text"
                        value={value}
                        onChange={handleChange}
                        style={{ textAlign: "center" }}
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={handleIncrement}
                      >
                        +
                      </Button>
                    </InputGroup>
                  </div>
                </div>
                <div className="item">
                  <div className={styles.extraOptionCard}>
                    <i>
                      <Image src="/assets/icon34.png" alt="" />
                    </i>
                    <h4>Child Toddler Seat</h4>
                    <div className={styles.optPrc}>
                      INR 2,994.00 <span>Per hire</span>
                    </div>
                    <InputGroup className={styles.grpOuter}>
                      <Button
                        variant="outline-secondary"
                        onClick={handleDecrement}
                      >
                        -
                      </Button>
                      <FormControl
                        type="text"
                        value={value}
                        onChange={handleChange}
                        style={{ textAlign: "center" }}
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={handleIncrement}
                      >
                        +
                      </Button>
                    </InputGroup>
                  </div>
                </div>
                <div className="item">
                  <div className={styles.extraOptionCard}>
                    <i>
                      <Image src="/assets/icon35.png" alt="" />
                    </i>
                    <h4>Booster Seat</h4>
                    <div className={styles.optPrc}>
                      INR 2,994.00 <span>Per hire</span>
                    </div>
                    <InputGroup className={styles.grpOuter}>
                      <Button
                        variant="outline-secondary"
                        onClick={handleDecrement}
                      >
                        -
                      </Button>
                      <FormControl
                        type="text"
                        value={value}
                        onChange={handleChange}
                        style={{ textAlign: "center" }}
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={handleIncrement}
                      >
                        +
                      </Button>
                    </InputGroup>
                  </div>
                </div>
              </Slider>
            </div>
            <h3>Rental Car Excess Insurance</h3>
            <div className={styles.rentalCarIns}>
              <div className={styles.rentalInsTop}>
                <Image src="/assets/icon36.png" alt="" />
                <p>
                  <strong>Important:</strong> Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Morbi ultricies libero sit amet
                  sapien lobortis, eu aliquet felis porta. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.
                </p>
              </div>
              <h4>Note:</h4>
              <ListGroup as="ul">
                <ListGroup.Item as="li">
                  <h5>Lorem ipsum dolor sit amet </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi ultricies libero sit amet sapien lobortis, eu aliquet
                    felis porta. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <h5>Lorem ipsum dolor sit amet </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi ultricies libero sit amet sapien lobortis, eu aliquet
                    felis porta. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <h5>Lorem ipsum dolor sit amet </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi ultricies libero sit amet sapien lobortis, eu aliquet
                    felis porta. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <h5>Lorem ipsum dolor sit amet </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi ultricies libero sit amet sapien lobortis, eu aliquet
                    felis porta. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col className={styles.carDtlRt}>
            <h3>Trip Summary</h3>
            <div className={styles.tripSummaryCard}>
              <ListGroup as="ul">
                <ListGroup.Item as="li">
                  <h6>Pick-up</h6>
                  <p>Udyog Vihar Phase V, Delhi</p>
                  <p>11 Sep 2024 | 10:30 am</p>
                  <a onClick={handleShowPopup1}>View pick-up details</a>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <h6>Drop-Off</h6>
                  <p>Oshiwara Mhada Complex, Mumbai</p>
                  <p>12 Sep 2024 | 12:30 pm</p>
                  <a onClick={handleShowPopup2}>View drop-off details</a>
                </ListGroup.Item>
              </ListGroup>
            </div>
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
              <NavLink href="#" className={"btn-yellow w-100"}>
                Continue To Book
              </NavLink>
            </div>
            <h3>Great Choice!</h3>
            <div className={styles.choiceCard}>
              <ListGroup as="ul">
                <ListGroup.Item as="li">
                  <i>
                    <Image src="/assets/icon25.png" alt="" />
                  </i>
                  <div>
                    <strong>Most Convenient</strong>
                    Lorem ipsum dolor sit amet, consectetur adipisc ing elit.
                    Morbi ultricies libe
                  </div>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <i>
                    <Image src="/assets/icon26.png" alt="" />
                  </i>
                  <div>
                    <strong>Efficient Fuel</strong>
                    Lorem ipsum dolor sit amet, consectetur adipisc ing elit.
                    Morbi ultricies libe
                  </div>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <i>
                    <Image src="/assets/icon27.png" alt="" />
                  </i>
                  <div>
                    <strong>Customer Favourite</strong>
                    Lorem ipsum dolor sit amet, consectetur adipisc ing elit.
                    Morbi ultricies libe
                  </div>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <i>
                    <Image src="/assets/icon28.png" alt="" />
                  </i>
                  <div>
                    <strong>Great Value</strong>
                    Lorem ipsum dolor sit amet, consectetur adipisc ing elit.
                    Morbi ultricies libe
                  </div>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <i>
                    <Image src="/assets/icon29.png" alt="" />
                  </i>
                  <div>
                    <strong>Shorter Queue</strong>
                    Lorem ipsum dolor sit amet, consectetur adipisc ing elit.
                    Morbi ultricies libe
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal
        show={showPopup1}
        onHide={handleClosePopup1}
        centered
        size="lg"
        className={styles.pickUpPopup}
      >
        <Modal.Body className={styles.modalPadding}>
          <h3>Pick-up Details</h3>
          <a className={styles.clsBtn} onClick={handleClosePopup1}>
            <Image src="/assets/close-icon.png" alt="" />
          </a>
          <Table bordered className={styles.pickTbl}>
            <tbody>
              <tr>
                <td>
                  <div className={styles.pickDtl}>
                    <i>
                      <Image src="/assets/key-icon.png" alt="" />
                    </i>
                    <div>
                      <strong>Supplied by</strong>
                      Travel.com
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.pickDtl}>
                    <i>
                      <Image src="/assets/location-icon2.png" alt="" />
                    </i>
                    <div>
                      <strong>Pick-Up Location</strong>
                      Udyog Vihar Phase V, Delhi
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.pickDtl}>
                    <i>
                      <Image src="/assets/location-icon2.png" alt="" />
                    </i>
                    <div>
                      <strong>Pick-up type</strong>
                      In Terminal
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.pickDtl}>
                    <i>
                      <Image src="/assets/clock-icon2.png" alt="" />
                    </i>
                    <div>
                      <strong>Pick-Up Time</strong>
                      10:30 am
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <div className={styles.pickDtl}>
                    <i>
                      <Image src="/assets/phone-icon.png" alt="" />
                    </i>
                    <strong>Desk Telephone Number:</strong>
                    0123456789
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>

      <Modal
        show={showPopup2}
        onHide={handleClosePopup2}
        centered
        size="lg"
        className={styles.pickUpPopup}
      >
        <Modal.Body className={styles.modalPadding}>
          <h3>Drop-Off Details</h3>
          <a className={styles.clsBtn} onClick={handleClosePopup2}>
            <Image src="/assets/close-icon.png" alt="" />
          </a>
          <Table bordered className={styles.pickTbl}>
            <tbody>
              <tr>
                <td>
                  <div className={styles.pickDtl}>
                    <i>
                      <Image src="/assets/key-icon.png" alt="" />
                    </i>
                    <div>
                      <strong>Supplied by</strong>
                      Travel.com
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.pickDtl}>
                    <i>
                      <Image src="/assets/location-icon2.png" alt="" />
                    </i>
                    <div>
                      <strong>Drop-Off Location</strong>
                      Udyog Vihar Phase V, Delhi
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className={styles.pickDtl}>
                    <i>
                      <Image src="/assets/location-icon2.png" alt="" />
                    </i>
                    <div>
                      <strong>Drop-Off type</strong>
                      In Terminal
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.pickDtl}>
                    <i>
                      <Image src="/assets/clock-icon2.png" alt="" />
                    </i>
                    <div>
                      <strong>Drop-Off Time</strong>
                      10:30 am
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <div className={styles.pickDtl}>
                    <i>
                      <Image src="/assets/phone-icon.png" alt="" />
                    </i>
                    <strong>Desk Telephone Number:</strong>
                    0123456789
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>

      <Modal
        show={showPopup3}
        onHide={handleClosePopup3}
        centered
        size="lg"
        className={styles.impInfoPopup}
      >
        <Modal.Body className={styles.modalPadding}>
          <h3>Important Information</h3>
          <a className={styles.clsBtn} onClick={handleClosePopup3}>
            <Image src="/assets/close-icon.png" alt="" />
          </a>

          <Tab.Container defaultActiveKey="Popular">
            <Nav className={styles.popupTab} variant="tabs">
              <Nav.Item className={styles.popupTabList}>
                <Nav.Link eventKey="Popular" className={styles.popupTabLink}>
                  <i>
                    <Image src="/assets/icon37.png" alt="img" />
                  </i>
                  <span>Popular</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.popupTabList}>
                <Nav.Link eventKey="Insurance" className={styles.popupTabLink}>
                  <i>
                    <Image src="/assets/icon38.png" alt="img" />
                  </i>
                  <span>Insurance</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.popupTabList}>
                <Nav.Link eventKey="Driver" className={styles.popupTabLink}>
                  <i>
                    <Image src="/assets/icon39.png" alt="img" />
                  </i>
                  <span>Driver</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.popupTabList}>
                <Nav.Link eventKey="Fee" className={styles.popupTabLink}>
                  <i>
                    <Image src="/assets/icon40.png" alt="img" />
                  </i>
                  <span>Deposit & Fees</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="Popular">
                <ListGroup as="ul" className={styles.contentList}>
                  <ListGroup.Item as="li">
                    <h6>Limited Supplier Insurance: Included</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus porta elit non velit condimentum, et mollis tellus
                      tincidunt. Mauris lectus dui, rhoncus in venenatis a,
                      malesuada non dui. Vestibulum sed blandit urna.
                      Pellentesque dapibus pulvinar augue quis eleifend. Nunc
                      tincidunt aliquam nisl nec sollicitudin.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <h6>Refundable Security Deposit</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus porta elit non velit condimentum, et mollis tellus
                      tincidunt. Mauris lectus dui, rhoncus in venenatis a,
                      malesuada non dui. Vestibulum sed blandit urna.
                      Pellentesque dapibus pulvinar augue quis eleifend. Nunc
                      tincidunt aliquam nisl nec sollicitudin.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <h6>Zero Excess Cover</h6>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus porta elit non velit condimentum, et mollis tellus
                      tincidunt. Mauris lectus dui, rhoncus in venenatis a,
                      malesuada non dui. Vestibulum sed blandit urna.
                      Pellentesque dapibus pulvinar augue quis eleifend. Nunc
                      tincidunt aliquam nisl nec sollicitudin.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <h6>Cards Accepted at Pick-up</h6>
                    <p>
                      <strong className={styles.greenClr}>
                        Accepted: Credit Card
                      </strong>
                      <br />
                      <strong className={styles.redClr}>
                        Not Accepted: Debit Card, Prepaid & Electronic Cards
                      </strong>
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus porta elit non velit condimentum, et mollis tellus
                      tincidunt. Mauris lectus dui, rhoncus in venenatis a,
                      malesuada non dui. Vestibulum sed blandit urna.
                      Pellentesque dapibus pulvinar augue quis eleifend. Nunc
                      tincidunt aliquam nisl nec sollicitudin.
                    </p>
                  </ListGroup.Item>
                </ListGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="Insurance">ghfhhththt ewew</Tab.Pane>
              <Tab.Pane eventKey="Driver">ghfhhththt dfgf</Tab.Pane>
              <Tab.Pane eventKey="Fee">ghfhhththt ertretetr</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </div>

  );
}

export default CarDetailPage;

"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Form,
  Image,
  Nav,
  Dropdown,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  NavLink,
} from "react-bootstrap";
import styles from "@/styles/CruiseDetail/CruiseDetail.module.scss";
import SiteBreadcrumb from "@/Layout/GLobal/Breadcrumb";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewSection from "../Review";
import CruiseRoomListing from "../CruiseRoomList";

function CruiseDetailPage() {
  const mainSliderRef = useRef<Slider | null>(null);
  const thumbSliderRef = useRef<Slider | null>(null);
  const [nav1, setNav1] = useState<Slider | undefined>(undefined);
  const [nav2, setNav2] = useState<Slider | undefined>(undefined);

  useEffect(() => {
    if (mainSliderRef.current && thumbSliderRef.current) {
      setNav1(mainSliderRef.current);
      setNav2(thumbSliderRef.current);
    }
  }, []);

  const mainSettings = {
    asNavFor: nav2,
    ref: mainSliderRef,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
  };

  const thumbSettings = {
    asNavFor: nav1,
    ref: thumbSliderRef,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
  };

  const [activeSection, setActiveSection] = useState("anim1");

  const handleScroll = (event: any, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = window.innerWidth > 991 ? -200 : -480;
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
      setActiveSection(targetId); // Ensure setActiveSection is defined somewhere in your code
    }
  };

  const handleScrollSpy = () => {
    const sections = ["anim1", "anim2", "anim3", "anim4", "anim5"];
    const offset = window.innerWidth > 991 ? -150 : -480;

    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop - offset;
        const sectionBottom = sectionTop + sectionElement.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(sectionId);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSpy);
    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  const [isOpenA, setIsOpenA] = useState(false);
  const togglePopup = () => {
    setIsOpenA(!isOpenA);
  };

  return (
    <div className={styles.HotelDetailOuter}>
      <Container className={styles.ContainerCss}>
        <div className={styles.HotelDtlLeft}>
          <SiteBreadcrumb />
          <div className={styles.HotelDtlTop}>
            <h1>7 night Alaska</h1>
            <div className={styles.TripRvOuter}>
              <div className={styles.TrustImg}>
                <Image src="/assets/trip-review.jpg" alt="" />
              </div>
              <div className={styles.ReviewImg}>
                <Image src="/assets/rating-1.png" alt="" />
              </div>
              <div className={styles.LcnBlock}>
                <Image src="/assets/location-black.png" alt="" />
                <span>Cavelossim, Goa, India</span>
                <a href="#">Great location - show map </a>
              </div>
            </div>
          </div>
          <div className={styles.SwipeGallerySlider}>
            <div className="thumbnail-gallery">
              <div className={`${styles.MainSlider} main-slider`}>
                <Slider {...mainSettings}>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/cruise-img2.png" alt="Main Slide 1" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/cruise-img2.png" alt="Main Slide 2" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/cruise-img2.png" alt="Main Slide 3" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/cruise-img2.png" alt="Main Slide 4" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/cruise-img2.png" alt="Main Slide 5" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/cruise-img2.png" alt="Main Slide 6" />
                  </div>
                </Slider>
              </div>
              <div className={`${styles.ThumbSlider} thumb-slider`}>
                <Slider {...thumbSettings}>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/cruise-img2.png" alt="Thumbnail 1" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/cruise-img2.png" alt="Thumbnail 2" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/cruise-img2.png" alt="Thumbnail 3" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/cruise-img2.png" alt="Thumbnail 4" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/cruise-img2.png" alt="Thumbnail 5" />
                  </div>
                  <div className={styles.SwiperImg}>
                    <Image src="/assets/cruise-img2.png" alt="Thumbnail 6" />
                  </div>
                </Slider>
                <a href="#" className={styles.moreImg}>
                  <strong>+25</strong>
                  More
                </a>
              </div>
            </div>
          </div>
          <div className={styles.HtlDtlFullInfo}>
            <Nav className={styles.HtlNavOuter}>
              <Nav.Item className={styles.HtlNavItem}>
                <Nav.Link
                  href="#anim1"
                  onClick={(e) => handleScroll(e, "anim1")}
                  className={`${styles.navLink} ${
                    activeSection === "anim1" ? styles.Active : ""
                  }`}
                >
                  <Image src="/assets/overview-icon.png" alt="" /> Overview
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.HtlNavItem}>
                <Nav.Link
                  href="#anim2"
                  onClick={(e) => handleScroll(e, "anim2")}
                  className={`${styles.navLink} ${
                    activeSection === "anim2" ? styles.Active : ""
                  }`}
                >
                  <Image src="/assets/icon41.png" alt="" /> Room Experience
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.HtlNavItem}>
                <Nav.Link
                  href="#anim3"
                  onClick={(e) => handleScroll(e, "anim3")}
                  className={`${styles.navLink} ${
                    activeSection === "anim3" ? styles.Active : ""
                  }`}
                >
                  <Image src="/assets/rooms-icon.png" alt="" /> Itinerary
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.HtlNavItem}>
                <Nav.Link
                  href="#anim4"
                  onClick={(e) => handleScroll(e, "anim4")}
                  className={`${styles.navLink} ${
                    activeSection === "anim4" ? styles.Active : ""
                  }`}
                >
                  <Image src="/assets/icon42.png" alt="" /> What&apos;s included
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.HtlNavItem}>
                <Nav.Link
                  href="#anim5"
                  onClick={(e) => handleScroll(e, "anim5")}
                  className={`${styles.navLink} ${
                    activeSection === "anim5" ? styles.Active : ""
                  }`}
                >
                  <Image src="/assets/policies-icon.png" alt="" /> Policies
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <div className={styles.HtlTabContent}>
              <div className={styles.OverviewSec} id="anim1">
                <h3>Overview</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ultricies libero sit amet sapien lobortis, eu aliquet felis
                  porta. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
                <p>
                  Sed volutpat augue lacus, pretium pharetra lorem luctus
                  malesuada. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Integer vitae pharetra nunc. Cras sit amet nisi
                  urna. Aliquam at semper massa. Sed quis ligula non ante
                  dapibus faucibus eget et diam. Donec malesuada, neque vel
                  feugiat scelerisque, orci justo placerat tellus.
                </p>

                <p>
                  FabExpress Alor Resort provides rooms in Calangute near
                  Calangute Beach and Candolim Beach. With free WiFi, this
                  3-star hotel offers room service and a 24-hour front desk. The
                  hotel features family rooms.
                </p>

                <p>
                  Sed volutpat augue lacus, pretium pharetra lorem luctus
                  malesuada. Interdum et malesuada fames ac ante ipsum primis in
                  faucibus. Integer vitae pharetra nunc. Cras sit amet nisi
                  urna. Aliquam at semper massa. Sed quis ligula non ante
                  dapibus faucibus eget et diam. Donec malesuada, neque vel
                  feugiat scelerisque, orci justo placerat tellus.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  ultricies libero sit amet sapien lobortis, eu aliquet felis
                  porta. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
              <div id="anim2">
                <CruiseRoomListing />
              </div>
              <div className={styles.itineraryBox} id="anim3">
                <h3>Itinerary</h3>
                <ListGroup as="ul" className={styles.itineraryLoop}>
                  <ListGroup.Item as="li">
                    <div className={styles.itinBox}>
                      <div className={styles.itinTop}>
                        <div className={styles.itinTopLt}>Day 1</div>
                        <div className={styles.itinTopRt}>3:00pm — 6:00pm</div>
                      </div>
                      <div className={styles.itinMid}>Seward</div>
                      <div className={styles.itinBtm}>
                        Alaska, United States
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <div className={styles.itinBox}>
                      <div className={styles.itinTop}>
                        <div className={styles.itinTopLt}>Day 2</div>
                        <div className={styles.itinTopRt}>3:00pm — 6:00pm</div>
                      </div>
                      <div className={styles.itinMid}>Seward</div>
                      <div className={styles.itinBtm}>
                        Alaska, United States
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <div className={styles.itinBox}>
                      <div className={styles.itinTop}>
                        <div className={styles.itinTopLt}>Day 3</div>
                        <div className={styles.itinTopRt}>3:00pm — 6:00pm</div>
                      </div>
                      <div className={styles.itinMid}>Seward</div>
                      <div className={styles.itinBtm}>
                        Alaska, United States
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <div className={styles.itinBox}>
                      <div className={styles.itinTop}>
                        <div className={styles.itinTopLt}>Day 4</div>
                        <div className={styles.itinTopRt}>3:00pm — 6:00pm</div>
                      </div>
                      <div className={styles.itinMid}>Seward</div>
                      <div className={styles.itinBtm}>
                        Alaska, United States
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <div className={styles.itinBox}>
                      <div className={styles.itinTop}>
                        <div className={styles.itinTopLt}>Day 5</div>
                        <div className={styles.itinTopRt}>3:00pm — 6:00pm</div>
                      </div>
                      <div className={styles.itinMid}>Seward</div>
                      <div className={styles.itinBtm}>
                        Alaska, United States
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <div className={styles.itinBox}>
                      <div className={styles.itinTop}>
                        <div className={styles.itinTopLt}>Day 6</div>
                        <div className={styles.itinTopRt}>3:00pm — 6:00pm</div>
                      </div>
                      <div className={styles.itinMid}>Seward</div>
                      <div className={styles.itinBtm}>
                        Alaska, United States
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <div className={styles.includeBox} id="anim4">
                <h3>What's included</h3>
                <p>These are already included in the cost of your cruise</p>
                <Row className={styles.mrgBtm}>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon43.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Dining</div>
                        <p>Main dining, buffet meals, and snacks</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon44.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>
                          Onboard entertainment
                        </div>
                        <p>Broadway-style shows and live music</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon45.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Youth programs</div>
                        <p>Ages 3-17</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon46.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Drinks</div>
                        <p>Water and non-specialty coffee and tea</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon47.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Room service</div>
                        <p>24-hour in-room dining option</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon48.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Spa facilities</div>
                        <p>Relaxing wellness spaces</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon49.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Fitness facilities</div>
                        <p>Cardio and exercise equipment</p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <h3>Additional costs to consider</h3>
                <p>
                  Purchase these individually or choose an offer that includes
                  them
                </p>
                <Row className={styles.mrgBtm}>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon47.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Specialty dining</div>
                        <p>A la carte restaurants, lounges, and cafes</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon46.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Alcoholic drinks</div>
                        <p>Beer, wine, and spirits</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon50.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Specialty drinks</div>
                        <p>
                          Specialty coffee and tea, soft drinks, juice, and
                          bottled water
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon51.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>WiFi</div>
                        <p>Stay connected on board</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon52.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Gratuities</div>
                        <p>Valued at $12 - $18 USD per person per day</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon53.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Shore excursions</div>
                        <p>Immersive port of call experiences</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon54.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Spa treatments</div>
                        <p>Massages and wellness treatments</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon55.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Salon services</div>
                        <p>Hair care, manicures, and pedicures</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon56.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Fitness classes</div>
                        <p>Variety of instructor-led exercise sessions</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className={styles.incInfo}>
                      <i>
                        <Image src="/assets/icon57.png" alt="" />
                      </i>
                      <div className={styles.incInfoRt}>
                        <div className={styles.incHd}>Laundry services</div>
                        <p>Wash and press amenities</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={styles.policiesBox} id="anim5">
                <h3>Policies</h3>
                <NavLink href="#" className={styles.navLink}>
                  Cruise line cancellation policy{" "}
                  <Image src="/assets/icon58.png" alt="" />
                </NavLink>
                <div className={styles.termsBox}>
                  <h6>Terms and conditions</h6>
                  <p>
                    * Prices are cruise only, per traveler, including taxes,
                    fees and port expenses and available within last 24 hours.
                    Prices and availability are subject to change and rates are
                    valid for U.S. and Canadian residents only. Cruise lines
                    reserve the right to charge a fuel supplement and any
                    increases in Government taxes, fees and port expenses
                    incurred between date of booking and sailing. See Rules and
                    Restrictions and cruise line general conditions.
                  </p>
                  <div className={styles.shareBox}>
                    <h6>Tell us how we can improve our site</h6>
                    <NavLink href="#" className={"btn-yellow"}>
                      Share feedback
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className={styles.GuestReview}>
                <ReviewSection />
              </div>
            </div>
          </div>
        </div> 
        <div className={styles.HotelDtlRight}>
          <div className={styles.HtlBtnGrp}>
            <a href="#">
              <Image src="/assets/share-icon.png" alt="" /> Share
            </a>
            <a href="#">
              <Image src="/assets/heart-icon.png" alt="" /> Save
            </a>
          </div>
          <NavLink className={`${styles.roomBtn} btn-yellow w-100`} onClick={togglePopup}> 
            Choose a room
          </NavLink>
          <div className={styles.PkgInfo}>
            <h4>Start from</h4>
            <div className={styles.PkgPrice}>INR 72386.00</div>
            <div className={styles.PkgTax}>Inside room per traveler</div>
            <hr />
            <h5>Quick Look:</h5>
            <p>
              Seattle, United States • Sitka, United States • Skagway, United
              States • Juneau, United States • Victoria, Canada • Seattle,
              United States
            </p>
          </div>
          <div className={styles.DtlRtInOut}>
            <ul>
              <li>
                <strong>From</strong>
                Sep 16, 2024
              </li>
              <li>
                <strong>To</strong>
                Sep 23, 2024
              </li>
            </ul>
          </div>
          <div className={styles.ShowMap}>
            <Image src="/assets/map.png" className={styles.MapImg} alt="img" />
            <div className={styles.ShowMapTop}>
              <Image src="/assets/location-pin.png" alt="img" />
              <Nav.Link href="#" className={"btn-yellow"}>
                Show on Map
              </Nav.Link>
            </div>
          </div>
        </div>
      </Container>
      {/* Side Popup Choose a Room */}
      <div
        className={`${styles.cruiseRoomOuter} ${
          isOpenA ? styles.roomOpen : ""
        }`}
      >
        <div className={styles.roomTopHd}>
          <div className={styles.roomTopLt}>
            <NavLink className={styles.roomClsBtn} onClick={togglePopup}>
              <Image src="/assets/close-icon.png" alt="" />
            </NavLink>
            <h3>Ocean view room</h3>
          </div>

          <NavLink className={"btn-yellow"} href="#">
            Change
          </NavLink>
        </div>
        <Row className={"mb-2"}>
          <Col md={6}>
            <div className={styles.RoomListCol}>
              <Nav.Link href="#" className={styles.RoomListFigure}>
                <Image src="/assets/room-1.jpg" alt="img" />
              </Nav.Link>
              <div className={styles.RoomListColContent}>
                <Nav.Link href="#" className={styles.RoomListColContentHd}>
                  Ocean view
                </Nav.Link>
                <p>
                  Cozy exterior rooms with a window, recommended for its natural
                  light and views of the passing scenery.
                </p>
                <ListGroup as="ul" className={styles.srvcList}>
                  <ListGroup.Item as="li">
                    <Image src="/assets/icon39.png" alt="" /> 2
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <Image src="/assets/location-icon3.png" alt="" /> Deck 2-3,
                    6-7
                  </ListGroup.Item>
                </ListGroup>
                <div className={styles.chooseInfo}>
                  <Image src="/assets/arw.png" alt="" /> You choose your deck
                  and room number
                </div>
                <div className={styles.prcOffer}>
                  <Image src="/assets/save-icon.png" alt="" />
                  Member save 14%
                </div>
                <div
                  className={`${styles.RoomFinalPriceRow} d-flex flex-wrap align-items-end`}
                >
                  <div className={styles.RoomFinalPriceLeft}>
                    <div className={styles.RoomFinalPriceBig}>INR20,000</div>
                    <div className={styles.RoomFinalPriceSmall}>
                      ₹23,600 total
                    </div>
                    <div className={styles.TaxesText}>
                      includes taxes & fees
                    </div>
                  </div>
                  <Nav.Link href="#" className={styles.SiteBtn}>
                    Select
                  </Nav.Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.RoomListCol}>
              <Nav.Link href="#" className={styles.RoomListFigure}>
                <Image src="/assets/room-1.jpg" alt="img" />
              </Nav.Link>
              <div className={styles.RoomListColContent}>
                <Nav.Link href="#" className={styles.RoomListColContentHd}>
                  Ocean view
                </Nav.Link>
                <p>
                  Cozy exterior rooms with a window, recommended for its natural
                  light and views of the passing scenery.
                </p>
                <ListGroup as="ul" className={styles.srvcList}>
                  <ListGroup.Item as="li">
                    <Image src="/assets/icon39.png" alt="" /> 2
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <Image src="/assets/location-icon3.png" alt="" /> Deck 2-3,
                    6-7
                  </ListGroup.Item>
                </ListGroup>
                <div className={styles.chooseInfo}>
                  <Image src="/assets/arw.png" alt="" /> You choose your deck
                  and room number
                </div>
                <div className={styles.prcOffer}>
                  <Image src="/assets/save-icon.png" alt="" />
                  Member save 14%
                </div>
                <div
                  className={`${styles.RoomFinalPriceRow} d-flex flex-wrap align-items-end`}
                >
                  <div className={styles.RoomFinalPriceLeft}>
                    <div className={styles.RoomFinalPriceBig}>INR20,000</div>
                    <div className={styles.RoomFinalPriceSmall}>
                      ₹23,600 total
                    </div>
                    <div className={styles.TaxesText}>
                      includes taxes & fees
                    </div>
                  </div>
                  <Nav.Link href="#" className={styles.SiteBtn}>
                    Select
                  </Nav.Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <h3>Terms and conditions</h3>
        <p>
          * Prices are cruise only, per traveler, including taxes, fees and port
          expenses and available within last 24 hours. Prices and availability
          are subject to change and rates are valid for U.S. and Canadian
          residents only. Cruise lines reserve the right to charge a fuel
          supplement and any increases in Government taxes, fees and port
          expenses incurred between date of booking and sailing. See Rules and
          Restrictions and cruise line general conditions.
        </p>
      </div>
      {/* Side Popup Choose a Room */}
    </div>
  );
}

export default CruiseDetailPage;

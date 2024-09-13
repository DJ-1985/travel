"use client";
import React, { useState } from "react";
import { Row, Col, Nav, Image, Form } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "@/styles/CruiseRoomList/CruiseRoomList.module.scss";

function CruiseRoomListing() {
  const [selectedOption, setSelectedOption] = useState("6");
  const handleChange = (event: any) => {
    setSelectedOption(event.target.id);
  }; 

  return (
    <div className={styles.RoomListPanel}>
      <h3>Current: Choose room type</h3>
      <Row className={styles.RoomListRow}>
        <Col xl={4} md={6} className={styles.RoomListLoop}>
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
                  <Image src="/assets/icon37.png" alt="" /> Exclusive extras
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Image src="/assets/exc-srvc-icon.png" alt="" /> Exclusive
                  services
                </ListGroup.Item>
              </ListGroup>
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
                  <div className={styles.TaxesText}>includes taxes & fees</div>
                </div>
                <Nav.Link href="#" className={styles.SiteBtn}>
                  Continue
                </Nav.Link>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4} md={6} className={styles.RoomListLoop}>
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
                  <Image src="/assets/icon37.png" alt="" /> Exclusive extras
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Image src="/assets/exc-srvc-icon.png" alt="" /> Exclusive
                  services
                </ListGroup.Item>
              </ListGroup>
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
                  <div className={styles.TaxesText}>includes taxes & fees</div>
                </div>
                <Nav.Link href="#" className={styles.SiteBtn}>
                  Continue
                </Nav.Link>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4} md={6} className={styles.RoomListLoop}>
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
                  <Image src="/assets/icon37.png" alt="" /> Exclusive extras
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Image src="/assets/exc-srvc-icon.png" alt="" /> Exclusive
                  services
                </ListGroup.Item>
              </ListGroup>
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
                  <div className={styles.TaxesText}>includes taxes & fees</div>
                </div>
                <Nav.Link href="#" className={styles.SiteBtn}>
                  Continue
                </Nav.Link>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4} md={6} className={styles.RoomListLoop}>
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
                  <Image src="/assets/icon37.png" alt="" /> Exclusive extras
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Image src="/assets/exc-srvc-icon.png" alt="" /> Exclusive
                  services
                </ListGroup.Item>
              </ListGroup>
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
                  <div className={styles.TaxesText}>includes taxes & fees</div>
                </div>
                <Nav.Link href="#" className={styles.SiteBtn}>
                  Continue
                </Nav.Link>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4} md={6} className={styles.RoomListLoop}>
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
                  <Image src="/assets/icon37.png" alt="" /> Exclusive extras
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Image src="/assets/exc-srvc-icon.png" alt="" /> Exclusive
                  services
                </ListGroup.Item>
              </ListGroup>
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
                  <div className={styles.TaxesText}>includes taxes & fees</div>
                </div>
                <Nav.Link href="#" className={styles.SiteBtn}>
                  Continue
                </Nav.Link>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={4} md={6} className={styles.RoomListLoop}>
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
                  <Image src="/assets/icon37.png" alt="" /> Exclusive extras
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Image src="/assets/exc-srvc-icon.png" alt="" /> Exclusive
                  services
                </ListGroup.Item>
              </ListGroup>
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
                  <div className={styles.TaxesText}>includes taxes & fees</div>
                </div>
                <Nav.Link href="#" className={styles.SiteBtn}>
                  Continue
                </Nav.Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default CruiseRoomListing;

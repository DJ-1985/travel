"use client";

import React from "react";

import styles from "@/styles/InnerBanner/InnerBanner.module.scss";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

function HomeBanner() {
  return (
    <div className={styles.BannerHome}>
      <div className={"container"}>
        <div className={styles.HomeSearch}>
          <Tab.Container defaultActiveKey="Flights">

            <Nav className={styles.TabNav} variant="tabs">
              <Nav.Item className={styles.TabNavList}>
                <Nav.Link eventKey="Flights" className={styles.TabLink}>
                  <i><Image src="/assets/icon.png" alt="img" /></i>
                  <span>Flights</span>
                </Nav.Link> 
              </Nav.Item>
              <Nav.Item className={styles.TabNavList}>
                <Nav.Link eventKey="Hotels" className={styles.TabLink}>
                  <i><Image src="/assets/icon1.png" alt="img" /></i>
                  <span>Hotels</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.TabNavList}>
                <Nav.Link eventKey="Car" className={styles.TabLink}>
                  <i><Image src="/assets/car-icon.png" alt="img" /></i>
                  <span>Car</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.TabNavList}>
                <Nav.Link eventKey="Cruises" className={styles.TabLink}>
                  <i><Image src="/assets/cruise-icon.png" alt="img" /></i>
                  <span>Cruises</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="Flights">
                <div className={styles.TripBlock}>
                  <Form>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`}>
                      <Form.Check className={styles.CustomCHK} inline label="One-Way" name="group1" type="radio" id={`inline-${type}-1`} />
                      <Form.Check className={styles.CustomCHK} inline label="Round Trip" name="group1" type="radio" id={`inline-${type}-2`} />
                      <Form.Check className={styles.CustomCHK} inline label="Multi-city" name="group1" type="radio" id={`inline-${type}-3`} />
                      </div>
                    ))}
                  </Form>
                </div>
                <div className={`${styles.SearchCardBlock} d-md-flex justify-content-between`}>
                  <div className={`${styles.SearchCardBlockLeft} d-md-flex`}>
                    <div className={`${styles.FormCard} ${styles.FrmWd1}`}>
                      <Form>
                        <Form.Group controlId="from1">
                          <Form.Label className={styles.SrchLabel}>From</Form.Label>
                          <Form.Control type="text" placeholder="New Delhi (DEL), India" className={styles.SrchInput} />
                        </Form.Group>
                      </Form>
                    </div>
                    <div className={`${styles.FormCard} ${styles.FrmWd2}`}>
                      <Form>
                        <Form.Group controlId="to1">
                          <Form.Label className={styles.SrchLabel}>To</Form.Label>
                          <Form.Control  type="text" placeholder="Mumbai (BOM), India" className={styles.SrchInput} />
                        </Form.Group>
                      </Form>
                    </div>
                    <div className={`${styles.FormCard} ${styles.FrmWd3} d-md-flex`}>
                      <div className={`${styles.FormCardDT} ${styles.FrmWdDT1}`}>
                        <Form>
                          <Form.Group controlId="departure1">
                            <Form.Label className={styles.SrchLabel}>Departure</Form.Label>
                            <Form.Control type="text" placeholder="Select Date" className={styles.SrchInput} />
                          </Form.Group>
                        </Form>
                      </div>
                      <div className={`${styles.FormCardDT} ${styles.FrmWdDT2}`}>
                        <Form>
                          <Form.Group controlId="return1">
                            <Form.Label className={styles.SrchLabel}>Return</Form.Label>
                            <Form.Control type="text" placeholder="Select Date" className={styles.SrchInput} />
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                    <div className={`${styles.FormCard} ${styles.FrmWd4}`}>
                      <Dropdown>
                        <Dropdown.Toggle id="TravellersDropdown" className={styles.TrvlBtn}>
                          Travellers <span>2 Adults</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={styles.TrvlDropDown}>
                          <Dropdown.Item href="#">Action</Dropdown.Item>
                          <Dropdown.Item href="#">Another action</Dropdown.Item>
                          <Dropdown.Item href="#">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className={`${styles.FormCard} ${styles.FrmWd5} ${styles.Bdr0}`}>
                      <Dropdown>
                        <Dropdown.Toggle id="ClassDropdown" className={styles.TrvlBtn}>
                          Class <span>Economy</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#">Economy</Dropdown.Item>
                          <Dropdown.Item href="#">Premium Economy</Dropdown.Item>
                          <Dropdown.Item href="#">Business Class</Dropdown.Item>
                          <Dropdown.Item href="#">First Class</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className={styles.SearchBtnBlock}>
                    <Button className={styles.SrchBtn}>
                      <Image src="/assets/search-icon.png" alt="" />
                      <span>Search</span>
                    </Button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Hotels">
              <div className={`${styles.SearchCardBlock} d-md-flex justify-content-between`}>
                  <div className={`${styles.SearchCardBlockLeft} d-md-flex`}>
                    <div className={`${styles.FormCard} ${styles.FrmWd1} ${styles.FrmWd11}`}>
                      <Form>
                        <Form.Group controlId="going1">
                          <Form.Label className={styles.SrchLabel}>Going to</Form.Label>
                          <Form.Control type="text" placeholder="New Delhi (DEL), India" className={styles.SrchInput} />
                        </Form.Group>
                      </Form>
                    </div>
                    <div className={`${styles.FormCard} ${styles.FrmWd3} ${styles.FrmWd12} d-md-flex`}>
                      <div className={`${styles.FormCardDT} ${styles.FrmWdDT1}`}>
                        <Form>
                          <Form.Group controlId="checkIn">
                            <Form.Label className={styles.SrchLabel}>Check-In</Form.Label>
                            <Form.Control type="text" placeholder="Select Date" className={styles.SrchInput} />
                          </Form.Group>
                        </Form>
                      </div>
                      <div className={`${styles.FormCardDT} ${styles.FrmWdDT2}`}>
                        <Form>
                          <Form.Group controlId="checkOut">
                            <Form.Label className={styles.SrchLabel}>Check-Out</Form.Label>
                            <Form.Control type="text" placeholder="Select Date" className={styles.SrchInput} />
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                    <div className={`${styles.FormCard} ${styles.FrmWd5} ${styles.Bdr0} ${styles.FrmWd11}`}>
                      <Dropdown>
                        <Dropdown.Toggle id="guests2" className={styles.TrvlBtn}>
                          Guests <span>2 Adults, 1 Room</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#">Lorem ipsum</Dropdown.Item>
                          <Dropdown.Item href="#">Lorem ipsum</Dropdown.Item>
                          <Dropdown.Item href="#">Lorem ipsum</Dropdown.Item>
                          <Dropdown.Item href="#">Lorem ipsum</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className={styles.SearchBtnBlock}>
                    <Button className={styles.SrchBtn}>
                      <Image src="/assets/search-icon.png" alt="" />
                      <span>Search</span>
                    </Button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Car">
                Car
              </Tab.Pane>
              <Tab.Pane eventKey="Cruises">
                Cruises
              </Tab.Pane>
            </Tab.Content>

          </Tab.Container>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
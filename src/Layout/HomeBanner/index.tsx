"use client";

import React, { useState } from "react";

import styles from "@/styles/HomeBanner/HomeBanner.module.scss";
import {
  Nav,
  Tab,
  Image,
  Form,
  Button,
  Dropdown,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import HomeBnrCard from "@/Layout/HomeBanner/HomeBnrCard";

function HomeBanner() {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [checkOutTime, setCheckOutTime] = useState<Date | null>(null);

  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrement = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0)); // prevents negative values
  };

  const handleChange = (e:any) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(isNaN(newValue) ? 0 : newValue);
  };

  return (
    <div className={styles.BannerHome}>
      <div className={"container"}>

        <div className={`${styles.BannerHeading} text-center`}>
          <h1>
            Lets Explore The <span>World Together</span>
          </h1>
          <h6>A Solution to find the most optimized itinerary for you</h6>
        </div>

        <div className={styles.HomeSearch}>
          <Tab.Container defaultActiveKey="Flights">
            <Nav className={styles.TabNav} variant="tabs">
              <Nav.Item className={styles.TabNavList}>
                <Nav.Link eventKey="Flights" className={styles.TabLink}>
                  <i>
                    <Image src="/assets/icon.png" alt="img" />
                  </i>
                  <span>Flights</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.TabNavList}>
                <Nav.Link eventKey="Hotels" className={styles.TabLink}>
                  <i>
                    <Image src="/assets/icon1.png" alt="img" />
                  </i>
                  <span>Hotels</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.TabNavList}>
                <Nav.Link eventKey="Car" className={styles.TabLink}>
                  <i>
                    <Image src="/assets/car-icon.png" alt="img" />
                  </i>
                  <span>Car</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.TabNavList}>
                <Nav.Link eventKey="Cruises" className={styles.TabLink}>
                  <i>
                    <Image src="/assets/cruise-icon.png" alt="img" />
                  </i>
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
                        <Form.Check
                          className={styles.CustomCHK}
                          inline
                          label="One-Way"
                          name="group1"
                          type="radio"
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          className={styles.CustomCHK}
                          inline
                          label="Round Trip"
                          name="group1"
                          type="radio"
                          id={`inline-${type}-2`}
                        />
                        <Form.Check
                          className={styles.CustomCHK}
                          inline
                          label="Multi-city"
                          name="group1"
                          type="radio"
                          id={`inline-${type}-3`}
                        />
                      </div>
                    ))}
                  </Form>
                </div>
                <div
                  className={`${styles.SearchCardBlock} d-md-flex justify-content-between`}
                >
                  <div className={`${styles.SearchCardBlockLeft} d-md-flex`}>
                    <div className={`${styles.FormCard} ${styles.FrmWd1}`}>
                      <Form>
                        <Form.Group controlId="from1">
                          <Form.Label className={styles.SrchLabel}>
                            From
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="New Delhi (DEL), India"
                            className={styles.SrchInput}
                          />
                        </Form.Group>
                      </Form>
                    </div>
                    <div className={`${styles.FormCard} ${styles.FrmWd2}`}>
                      <Form>
                        <Form.Group controlId="to1">
                          <Form.Label className={styles.SrchLabel}>
                            To
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Mumbai (BOM), India"
                            className={styles.SrchInput}
                          />
                        </Form.Group>
                      </Form>
                    </div>
                    <div
                      className={`${styles.FormCard} ${styles.FrmWd3} d-md-flex`}
                    >
                      <div
                        className={`${styles.FormCardDT} ${styles.FrmWdDT1}`}
                      >
                        <Form>
                          <Form.Group controlId="departure1">
                            <Form.Label className={styles.SrchLabel}>
                              Departure
                            </Form.Label>
                            <DatePicker
                              selected={checkInDate}
                              onChange={(date) => setCheckInDate(date)}
                              selectsStart
                              startDate={checkInDate  || undefined}
                              endDate={checkOutDate  || undefined}
                              monthsShown={2}
                              placeholderText="Select Date"
                              className={styles.SrchInput}
                            />
                          </Form.Group>
                        </Form>
                      </div>
                      <div
                        className={`${styles.FormCardDT} ${styles.FrmWdDT2}`}
                      >
                        <Form>
                          <Form.Group controlId="return1">
                            <Form.Label className={styles.SrchLabel}>
                              Return
                            </Form.Label>
                            <DatePicker
                              selected={checkOutDate}
                              onChange={(date) => setCheckOutDate(date)}
                              selectsEnd
                              startDate={checkInDate  || undefined}
                              endDate={checkOutDate  || undefined}
                              minDate={checkInDate  || undefined} // Ensure check-out date is after check-in date
                              monthsShown={2} // Show two months side by side
                              placeholderText="Select Date"
                              className={styles.SrchInput}
                            />
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                    <div className={`${styles.FormCard} ${styles.FrmWd4}`}>
                      <Dropdown>
                        <Dropdown.Toggle
                          id="TravellersDropdown"
                          className={styles.TrvlBtn}
                        >
                          Travellers <span>2 Adults</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={styles.TrvlDropDown}>
                          <div className={styles.TrvlTopBox}>
                            <Form.Group
                              className={`${styles.inputPrdBlock} d-flex align-items-center justify-content-between`}
                            >
                              <Form.Label htmlFor="">
                                <Image src="/assets/icon14.png" alt="" /> Adults
                              </Form.Label>
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
                            </Form.Group>
                            <Form.Group
                              className={`${styles.inputPrdBlock} d-flex align-items-center justify-content-between`}
                            >
                              <Form.Label htmlFor="">
                                <Image src="/assets/icon15.png" alt="" />{" "}
                                Children
                              </Form.Label>
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
                            </Form.Group>

                            <Form.Group
                              className={`${styles.sltdPrdBlock} d-flex align-items-center justify-content-between`}
                            >
                              <Form.Select aria-label="Select Age">
                                <option>Select Age</option>
                                <option value="1">1 Years old</option>
                                <option value="2">2 Years old</option>
                                <option value="3">3 Years old</option>
                              </Form.Select>
                              <Form.Select aria-label="Select Age">
                                <option>Select Age</option>
                                <option value="1">1 Years old</option>
                                <option value="2">2 Years old</option>
                                <option value="3">3 Years old</option>
                              </Form.Select>
                            </Form.Group>
                            <p>
                              <small>
                                Please provide right number of children along
                                with their right age for best options and
                                prices.
                              </small>
                            </p>
                          </div>
                          <div className={styles.TrvlBtmBox}>
                            <Button className={styles.ApplyBtn}>Apply</Button>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div
                      className={`${styles.FormCard} ${styles.FrmWd5} ${styles.Bdr0}`}
                    >
                      <Dropdown>
                        <Dropdown.Toggle
                          id="ClassDropdown"
                          className={styles.TrvlBtn}
                        >
                          Class <span>Economy</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={styles.sltdClass}>
                          <Dropdown.Item href="#" className={styles.active}>
                            Economy
                          </Dropdown.Item>
                          <Dropdown.Item href="#">
                            Premium Economy
                          </Dropdown.Item>
                          <Dropdown.Item href="#">Business Class</Dropdown.Item>
                          <Dropdown.Item href="#">First Class</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className={styles.SearchBtnBlock}>
                    <Button className={`${styles.SrchBtn} btn-overlay`}>
                      <Image src="/assets/search-icon.png" alt="" />
                      <span>Search</span>
                      <div className={"btn-ldr"}>
                        <Image src="/assets/loader.gif" alt="" />
                      </div>
                    </Button>
                  </div>
                </div>
                <div className={styles.FlexibleBox}>
                  <Form>
                    <Form.Check
                      label="I'm flexible with dates"
                      type="switch"
                      id="flexible-switch"
                      className={styles.SwitchBtn}
                    />
                  </Form>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="Hotels">
                <div
                  className={`${styles.SearchCardBlock} d-md-flex justify-content-between`}
                >
                  <div className={`${styles.SearchCardBlockLeft} d-md-flex`}>
                    <div
                      className={`${styles.FormCard} ${styles.FrmWd1} ${styles.FrmWd11}`}
                    >
                      <Form>
                        <Form.Group controlId="going1">
                          <Form.Label className={styles.SrchLabel}>
                            Going to
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="New Delhi (DEL), India"
                            className={styles.SrchInput}
                          />
                        </Form.Group>
                      </Form>
                    </div>
                    <div
                      className={`${styles.FormCard} ${styles.FrmWd3} ${styles.FrmWd12} d-md-flex`}
                    >
                      <div
                        className={`${styles.FormCardDT} ${styles.FrmWdDT1}`}
                      >
                        <Form>
                          <Form.Group controlId="checkIn">
                            <Form.Label className={styles.SrchLabel}>
                              Check-In
                            </Form.Label>
                            <DatePicker
                              selected={checkInDate}
                              onChange={(date) => setCheckInDate(date)}
                              selectsStart
                              startDate={checkInDate  || undefined}
                              endDate={checkOutDate  || undefined}
                              monthsShown={2}
                              placeholderText="Select Date"
                              className={styles.SrchInput}
                            />
                          </Form.Group>
                        </Form>
                      </div>
                      <div
                        className={`${styles.FormCardDT} ${styles.FrmWdDT2}`}
                      >
                        <Form>
                          <Form.Group controlId="checkOut">
                            <Form.Label className={styles.SrchLabel}>
                              Check-Out
                            </Form.Label>
                            <DatePicker
                              selected={checkOutDate}
                              onChange={(date) => setCheckOutDate(date)}
                              selectsEnd
                              startDate={checkInDate  || undefined}
                              endDate={checkOutDate  || undefined}
                              minDate={checkInDate  || undefined} // Ensure check-out date is after check-in date
                              monthsShown={2} // Show two months side by side
                              placeholderText="Select Date"
                              className={styles.SrchInput}
                            />
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                    <div className={`${styles.FormCard} ${styles.FrmWd4} ${styles.FrmWd5} ${styles.Bdr0} ${styles.FrmWd11}`}>
                      <Dropdown>
                        <Dropdown.Toggle
                          id="TravellersDropdown"
                          className={styles.TrvlBtn}
                        >
                          Guests <span>2 Adults</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className={styles.TrvlDropDown}>
                          <div className={styles.TrvlTopBox}>
                            <Form.Group
                              className={`${styles.inputPrdBlock} d-flex align-items-center justify-content-between`}
                            >
                              <Form.Label htmlFor="">
                                <Image src="/assets/icon14.png" alt="" /> Adults
                              </Form.Label>
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
                            </Form.Group>
                            <Form.Group
                              className={`${styles.inputPrdBlock} d-flex align-items-center justify-content-between`}
                            >
                              <Form.Label htmlFor="">
                                <Image src="/assets/icon15.png" alt="" />{" "}
                                Children
                              </Form.Label>
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
                            </Form.Group>

                            <Form.Group
                              className={`${styles.sltdPrdBlock} d-flex align-items-center justify-content-between`}
                            >
                              <Form.Select aria-label="Select Age">
                                <option>Select Age</option>
                                <option value="1">1 Years old</option>
                                <option value="2">2 Years old</option>
                                <option value="3">3 Years old</option>
                              </Form.Select>
                              <Form.Select aria-label="Select Age">
                                <option>Select Age</option>
                                <option value="1">1 Years old</option>
                                <option value="2">2 Years old</option>
                                <option value="3">3 Years old</option>
                              </Form.Select>
                            </Form.Group>
                            <p>
                              <small>
                                Please provide right number of children along
                                with their right age for best options and
                                prices.
                              </small>
                            </p>
                          </div>
                          <div className={styles.TrvlBtmBox}>
                            <Button className={styles.ApplyBtn}>Apply</Button>
                          </div>
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
                <div
                  className={`${styles.SearchCardBlock} d-md-flex justify-content-between`}
                >
                  <div className={`${styles.SearchCardBlockLeft} d-md-flex`}>
                    <div className={`${styles.FormCard} ${styles.FrmWd1}`}>
                      <Form>
                        <Form.Group controlId="from1">
                          <Form.Label className={styles.SrchLabel}>
                            Pick-Up
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="New Delhi (DEL), India"
                            className={styles.SrchInput}
                          />
                        </Form.Group>
                      </Form>
                    </div>
                    <div className={`${styles.FormCard} ${styles.FrmWd2}`}>
                      <Form>
                        <Form.Group controlId="to1">
                          <Form.Label className={styles.SrchLabel}>
                            Drop-Off
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Mumbai (BOM), India"
                            className={styles.SrchInput}
                          />
                        </Form.Group>
                      </Form>
                    </div>
                    <div
                      className={`${styles.FormCard} ${styles.FrmWd3} d-md-flex`}
                    >
                      <div
                        className={`${styles.FormCardDT} ${styles.FrmWdDT1}`}
                      >
                        <Form>
                          <Form.Group controlId="departure12">
                            <Form.Label className={styles.SrchLabel}>
                              Pick-Up Date
                            </Form.Label>
                            <DatePicker
                              selected={checkInDate}
                              onChange={(date) => setCheckInDate(date)}
                              selectsStart
                              startDate={checkInDate || undefined}
                              endDate={checkOutDate || undefined}
                              monthsShown={1}
                              placeholderText="Select Date"
                              className={styles.SrchInput}
                            />
                          </Form.Group>
                        </Form>
                      </div>
                      <div
                        className={`${styles.FormCardDT} ${styles.FrmWdDT2}`}
                      >
                        <Form>
                          <Form.Group controlId="return12">
                            <Form.Label className={styles.SrchLabel}>
                              Drop-Off Date
                            </Form.Label>
                            <DatePicker
                              selected={checkOutDate}
                              onChange={(date) => setCheckOutDate(date)}
                              selectsEnd
                              startDate={checkInDate || undefined}
                              endDate={checkOutDate || undefined}
                              minDate={checkInDate || undefined} // Ensure check-out date is after check-in date
                              monthsShown={1} // Show two months side by side
                              placeholderText="Select Date"
                              className={styles.SrchInput}
                            />
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                    <div
                      className={`${styles.FormCard} ${styles.FrmWd3} ${styles.bdrNone} d-md-flex`}
                    >
                      <div
                        className={`${styles.FrmWdDT1} ${styles.clockIcon}`}
                      >
                        <Form>
                          <Form.Group controlId="time1">
                            <Form.Label className={styles.SrchLabel}>
                              Pick-Up Time
                            </Form.Label>
                            <DatePicker
                              selected={checkOutTime}
                              onChange={(time) => setCheckOutTime(time)}
                              placeholderText="Select Time"
                              className={styles.SrchInput}
                              showTimeSelect // Show time picker
                              showTimeSelectOnly // Show only time picker
                              timeFormat="HH:mm" // Format of the time picker
                              timeIntervals={15} // Interval for time selection
                              dateFormat="h:mm aa" // Format for displaying time
                            />
                          </Form.Group>
                        </Form>
                      </div>
                      <div
                        className={`${styles.FrmWdDT2} ${styles.clockIcon}`}
                      >
                        <Form>
                          <Form.Group controlId="time2">
                            <Form.Label className={styles.SrchLabel}>
                              Drop-Off Time
                            </Form.Label>
                            <DatePicker
                              selected={checkOutTime}
                              onChange={(time) => setCheckOutTime(time)}
                              placeholderText="Select Time"
                              className={styles.SrchInput}
                              showTimeSelect // Show time picker
                              showTimeSelectOnly // Show only time picker
                              timeFormat="HH:mm" // Format of the time picker
                              timeIntervals={15} // Interval for time selection
                              dateFormat="h:mm aa" // Format for displaying time
                            />
                          </Form.Group>
                        </Form>
                      </div>
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
              <Tab.Pane eventKey="Cruises">Cruises</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>

        <div className={styles.DiscoverList}>
          <Row>
            <Col md={3}>
              <HomeBnrCard />
            </Col>
            <Col md={3}>
              <HomeBnrCard />
            </Col>
            <Col md={3}>
              <HomeBnrCard />
            </Col>
            <Col md={3}>
              <HomeBnrCard />
            </Col>
          </Row>
        </div>
         
      </div>
    </div>
  );
}

export default HomeBanner;

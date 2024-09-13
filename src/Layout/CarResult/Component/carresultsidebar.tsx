"use client";

import React from "react";
import { Accordion, Form, Image, ListGroup } from "react-bootstrap";
import styles from "@/styles/CarResult/Component/carresultsidebar.module.scss";
import MultiRangeSlider from "@/Layout/SideBar/MultiRangeSlider";

function CarResultSideBar() {
  return (
    <div className={styles.SideBarBlock}>
      <h4>Trip Summary</h4>
      <div className={styles.tripSummaryCard}>
        <ListGroup as="ul">
          <ListGroup.Item as="li">
            <h6>Pick-up</h6>
            <p>Udyog Vihar Phase V, Delhi</p>
            <p>11 Sep 2024 | 10:30 am</p>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <h6>Drop-Off</h6>
            <p>Oshiwara Mhada Complex, Mumbai</p>
            <p>12 Sep 2024 | 12:30 pm</p>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Accordion defaultActiveKey="10">
        <Accordion.Item eventKey="10" className={styles.TitleAccordian}>
          <Accordion.Header className={styles.TitleAccordionHdr}>
            <h4>Filter By</h4>
            <p>Showing 798 results</p>
          </Accordion.Header>
          <Accordion.Body className={styles.TitleAccordionBody}>
            <div className={styles.SideBarAccordianBlock}>
              <Accordion
                defaultActiveKey={[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                ]}
                alwaysOpen
              >
                <Accordion.Item eventKey="1" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Price Range
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.CustompPrice}>₹ 500 – ₹ 10,000+</div>
                    <div className={styles.SideCheckList}>
                      <div className={styles.RangeBar}>
                        <MultiRangeSlider
                          min={0}
                          max={1000}
                          onChange={({ min, max }) =>
                            console.log(`min = ${min}, max = ${max}`)
                          }
                        />
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Customer Rating
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                  <div className={styles.SideCheckList}>
                    <Form className={styles.ListCheckList}> 
                      <div>
                        <Form.Check
                          type="checkbox"
                          id="inline-checkbox-4"
                          className={styles.CustomCHK}
                        >
                          <Form.Check.Input type="checkbox" isValid />
                          <Form.Check.Label>{`5 Stars`}</Form.Check.Label>
                          <Form.Control.Feedback type="valid" className={styles.SubText}>
                            <Image src="/assets/star.png" alt="img" />
                          </Form.Control.Feedback>
                        </Form.Check>

                        <Form.Check
                          type="checkbox"
                          id="inline-checkbox-5"
                          className={styles.CustomCHK}
                        >
                          <Form.Check.Input type="checkbox" isValid />
                          <Form.Check.Label>{`4 Stars`}</Form.Check.Label>
                          <Form.Control.Feedback type="valid" className={styles.SubText}>
                            <Image src="/assets/star-4.png" alt="img" />
                          </Form.Control.Feedback>
                        </Form.Check>

                        <Form.Check
                          type="checkbox"
                          id="inline-checkbox-6"
                          className={styles.CustomCHK}
                        >
                          <Form.Check.Input type="checkbox" isValid />
                          <Form.Check.Label>{`3 Stars`}</Form.Check.Label>
                          <Form.Control.Feedback type="valid" className={styles.SubText}>
                            <Image src="/assets/star-3.png" alt="img" />
                          </Form.Control.Feedback>
                        </Form.Check>

                        <Form.Check
                          type="checkbox"
                          id="inline-checkbox-7"
                          className={styles.CustomCHK}
                        >
                          <Form.Check.Input type="checkbox" isValid />
                          <Form.Check.Label>{`Below 3 Star`}</Form.Check.Label>
                          <Form.Control.Feedback type="valid" className={styles.SubText}>
                            <Image src="/assets/star-2.png" alt="img" />
                          </Form.Control.Feedback>
                        </Form.Check>
                      </div>
                    </Form>
                  </div>

                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Pick-Up Location
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideCheckList}>
                      <Form className={styles.ListCheckList}>
                        <div key="inline-checkbox">
                          <Form.Check
                            type="checkbox"
                            id="inline-checkbox-12"
                            className={styles.CustomCHK}
                            name="chkgroup3"
                            label="In Terminal"
                          />
                          <Form.Check
                            type="checkbox"
                            id="inline-checkbox-13"
                            className={styles.CustomCHK}
                            name="chkgroup3"
                            label="Free Shuttle Bus"
                          />
                        </div>
                      </Form>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Fuel Policy
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideCheckList}>
                      <Form className={styles.ListCheckList}>
                        <div key="inline-checkbox">
                          <Form.Check
                            type="checkbox"
                            id="inline-checkbox-14"
                            className={styles.CustomCHK}
                            name="chkgroup2"
                            label="Same Charge-Same Charge"
                          />
                          <Form.Check
                            type="checkbox"
                            id="inline-checkbox-15"
                            className={styles.CustomCHK}
                            name="chkgroup2"
                            label="Full to Full"
                          />
                        </div>
                      </Form>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Car Specifications
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideCheckList}>
                      <Form className={styles.ListCheckList}>
                        <div key="inline-checkbox">
                          <Form.Check
                            type="checkbox"
                            id="inline-checkbox-16"
                            className={styles.CustomCHK}
                            name="chkgroup1"
                            label="Air Conditioning"
                          />
                          <Form.Check
                            type="checkbox"
                            id="inline-checkbox-17"
                            className={styles.CustomCHK}
                            name="chkgroup1"
                            label="Lorem ipsum"
                          />
                        </div>
                      </Form>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Cards accepted at pick-up
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideCheckList}>
                      <Form className={styles.ListCheckList}>
                        <div key="inline-checkbox">
                          <Form.Check
                            type="checkbox"
                            id="inline-checkbox-18"
                            className={styles.CustomCHK}
                            name="chkgroup"
                            label="Credit Card only"
                          />
                          <Form.Check
                            type="checkbox"
                            id="inline-checkbox-19"
                            className={styles.CustomCHK}
                            name="chkgroup"
                            label="Both Credit and Debit Cards"
                          />
                        </div>
                      </Form>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Passengers
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideRadioList}>
                      <Form className={styles.ListRadioList}>
                        <div key="inline-radio">
                          <Form.Check
                            type="radio"
                            id="inline-radio-20"
                            className={styles.CustomRdo}
                            name="rdogroup"
                            label="1-4"
                          />
                          <Form.Check
                            type="radio"
                            id="inline-radio-21"
                            className={styles.CustomRdo}
                            name="rdogroup"
                            label="5"
                          />
                          <Form.Check
                            type="radio"
                            id="inline-radio-22"
                            className={styles.CustomRdo}
                            name="rdogroup"
                            label="6+"
                          />
                        </div>
                      </Form>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default CarResultSideBar;

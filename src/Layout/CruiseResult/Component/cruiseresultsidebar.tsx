"use client";

import React from "react";
import { Accordion, Form, Image, ListGroup } from "react-bootstrap";
import styles from "@/styles/CruiseResult/Component/cruiseresultsidebar.module.scss";
import MultiRangeSlider from "@/Layout/SideBar/MultiRangeSlider";

function CruiseResultSideBar() {
  return (
    <div className={styles.SideBarBlock}>
      <Accordion defaultActiveKey="10">
        <Accordion.Item eventKey="10" className={styles.TitleAccordian}>
          <Accordion.Header className={styles.TitleAccordionHdr}>
            <h4>Filter By</h4>
            <p>Showing 798 results</p>
          </Accordion.Header>
          <Accordion.Body className={styles.TitleAccordionBody}>
            <div className={styles.SideBarAccordianBlock}>
              <Accordion defaultActiveKey={["1", "2", "3", "4"]} alwaysOpen>
                <Accordion.Item eventKey="1" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Departure Ports
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <Form.Control
                      type="text"
                      placeholder="e.g. London, bridgerton..."
                      className={styles.frmSrchInput}
                    />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Cruise Lines
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <div className={styles.SideCheckList}>
                      <Form className={styles.ListCheckList}>
                        <div key="inline-checkbox">
                          <Form.Check
                            type="checkbox"
                            id="inline-checkbox-16"
                            className={styles.CustomCHK}
                            name="chkgroup"
                            label="Carnival Cruise Lines"
                          />
                          <Form.Check
                            type="checkbox"
                            id="inline-checkbox-17"
                            className={styles.CustomCHK}
                            name="chkgroup"
                            label="Celebrity Cruises"
                          />
                          <Form.Check
                            type="checkbox"
                            id="inline-checkbox-18"
                            className={styles.CustomCHK}
                            name="chkgroup"
                            label="MSC Cruises"
                          />
                          <Form.Check
                            type="checkbox"
                            id="inline-checkbox-19"
                            className={styles.CustomCHK}
                            name="chkgroup"
                            label="Royal Caribbean International"
                          />
                        </div>
                      </Form>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Ships
                  </Accordion.Header>
                  <Accordion.Body className={styles.CustomAccordionBody}>
                    <Form.Control
                      type="text"
                      placeholder="e.g. London, bridgerton..."
                      className={styles.frmSrchInput}
                    />
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className={styles.CustomAccordion}>
                  <Accordion.Header className={styles.CustomAccordionHdr}>
                    Room experience
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
                            label="Any"
                          />
                          <Form.Check
                            type="radio"
                            id="inline-radio-21"
                            className={styles.CustomRdo}
                            name="rdogroup"
                            label="Inside"
                          />
                          <Form.Check
                            type="radio"
                            id="inline-radio-22"
                            className={styles.CustomRdo}
                            name="rdogroup"
                            label="Ocean view"
                          />
                          <Form.Check
                            type="radio"
                            id="inline-radio-23"
                            className={styles.CustomRdo}
                            name="rdogroup"
                            label="Balcony"
                          />
                          <Form.Check
                            type="radio"
                            id="inline-radio-24"
                            className={styles.CustomRdo}
                            name="rdogroup"
                            label="Suite"
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

export default CruiseResultSideBar;

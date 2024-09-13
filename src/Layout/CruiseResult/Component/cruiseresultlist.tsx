"use client";

import React from "react";
import { Accordion, Form, Image, ListGroup, NavLink } from "react-bootstrap";
import styles from "@/styles/CruiseResult/Component/cruiseresultlist.module.scss";

function CruiseResultList() {
  return (
    <div className={styles.carSrchResultList}>
      <div className={styles.carSrchTop}>
        <div className={styles.carSrchTopLt}>
          <h2>Caribbean: 27 cruise sailings</h2>
          <p>Lorem ipsum dolor sit amet design sample dummy text</p>
        </div>
        <div className={styles.carSrchTopRt}>
          <Form.Group>
            <Form.Label>Sort by</Form.Label>
            <Form.Select>
              <option>Recommended</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </div>
      </div>
      <div className={styles.carResultCard}>
        <div className={styles.carResultCardLt}>
          <div className={styles.carResultImg}>
            <Image src="/assets/cruise-img.png" alt="" />
          </div>
          <div className={styles.carResultInfo}>
            <h3>
              4 Night Caribbean <span>Carnival Paradise</span>
            </h3>
            <p>Sep 26, 2024 — Sep 30, 2024</p>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                Port Canaveral, United States
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Ocean Cay MSC Marine Reserve (Private Island), Bahamas
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Costa Maya, Mexico and 1 more stop
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className={styles.carResultCardRt}>
          <div className={styles.carRentalPrc}>
            <span className={styles.lineCut}>INR 9,500.00</span>
            INR 8,000.00
            <span>Includes taxes & fees</span>
          </div>
          <NavLink href="#" className={"btn-yellow"}>
            See Availability
          </NavLink>
        </div>
      </div>
      <div className={styles.carResultCard}>
        <div className={styles.carResultCardLt}>
          <div className={styles.carResultImg}>
            <Image src="/assets/cruise-img.png" alt="" />
          </div>
          <div className={styles.carResultInfo}>
            <h3>
              4 Night Caribbean <span>Carnival Paradise</span>
            </h3>
            <p>Sep 26, 2024 — Sep 30, 2024</p>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                Port Canaveral, United States
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Ocean Cay MSC Marine Reserve (Private Island), Bahamas
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Costa Maya, Mexico and 1 more stop
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className={styles.carResultCardRt}>
          <div className={styles.carRentalPrc}>
            <span className={styles.lineCut}>INR 9,500.00</span>
            INR 8,000.00
            <span>Includes taxes & fees</span>
          </div>
          <NavLink href="#" className={"btn-yellow"}>
            See Availability
          </NavLink>
        </div>
      </div>
      <div className={styles.carResultCard}>
        <div className={styles.carResultCardLt}>
          <div className={styles.carResultImg}>
            <Image src="/assets/cruise-img.png" alt="" />
          </div>
          <div className={styles.carResultInfo}>
            <h3>
              4 Night Caribbean <span>Carnival Paradise</span>
            </h3>
            <p>Sep 26, 2024 — Sep 30, 2024</p>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                Port Canaveral, United States
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Ocean Cay MSC Marine Reserve (Private Island), Bahamas
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Costa Maya, Mexico and 1 more stop
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className={styles.carResultCardRt}>
          <div className={styles.carRentalPrc}>
            <span className={styles.lineCut}>INR 9,500.00</span>
            INR 8,000.00
            <span>Includes taxes & fees</span>
          </div>
          <NavLink href="#" className={"btn-yellow"}>
            See Availability
          </NavLink>
        </div>
      </div>
      <div className={styles.carResultCard}>
        <div className={styles.carResultCardLt}>
          <div className={styles.carResultImg}>
            <Image src="/assets/cruise-img.png" alt="" />
          </div>
          <div className={styles.carResultInfo}>
            <h3>
              4 Night Caribbean <span>Carnival Paradise</span>
            </h3>
            <p>Sep 26, 2024 — Sep 30, 2024</p>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                Port Canaveral, United States
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Ocean Cay MSC Marine Reserve (Private Island), Bahamas
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Costa Maya, Mexico and 1 more stop
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className={styles.carResultCardRt}>
          <div className={styles.carRentalPrc}>
            <span className={styles.lineCut}>INR 9,500.00</span>
            INR 8,000.00
            <span>Includes taxes & fees</span>
          </div>
          <NavLink href="#" className={"btn-yellow"}>
            See Availability
          </NavLink>
        </div>
      </div>
      <div className={styles.carResultCard}>
        <div className={styles.carResultCardLt}>
          <div className={styles.carResultImg}>
            <Image src="/assets/cruise-img.png" alt="" />
          </div>
          <div className={styles.carResultInfo}>
            <h3>
              4 Night Caribbean <span>Carnival Paradise</span>
            </h3>
            <p>Sep 26, 2024 — Sep 30, 2024</p>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                Port Canaveral, United States
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Ocean Cay MSC Marine Reserve (Private Island), Bahamas
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Costa Maya, Mexico and 1 more stop
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className={styles.carResultCardRt}>
          <div className={styles.carRentalPrc}>
            <span className={styles.lineCut}>INR 9,500.00</span>
            INR 8,000.00
            <span>Includes taxes & fees</span>
          </div>
          <NavLink href="#" className={"btn-yellow"}>
            See Availability
          </NavLink>
        </div>
      </div>
      <div className={styles.carResultCard}>
        <div className={styles.carResultCardLt}>
          <div className={styles.carResultImg}>
            <Image src="/assets/cruise-img.png" alt="" />
          </div>
          <div className={styles.carResultInfo}>
            <h3>
              4 Night Caribbean <span>Carnival Paradise</span>
            </h3>
            <p>Sep 26, 2024 — Sep 30, 2024</p>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                Port Canaveral, United States
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Ocean Cay MSC Marine Reserve (Private Island), Bahamas
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Costa Maya, Mexico and 1 more stop
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className={styles.carResultCardRt}>
          <div className={styles.carRentalPrc}>
            <span className={styles.lineCut}>INR 9,500.00</span>
            INR 8,000.00
            <span>Includes taxes & fees</span>
          </div>
          <NavLink href="#" className={"btn-yellow"}>
            See Availability
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CruiseResultList;

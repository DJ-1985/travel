"use client"; 

import React from "react";
import { Accordion, Form, Image, ListGroup, NavLink } from "react-bootstrap";
import styles from "@/styles/CarResult/Component/carsearchresultlist.module.scss";

function CarSrchResultList() {
  return (
    <div className={styles.carSrchResultList}>
      <div className={styles.carSrchTop}>
        <div className={styles.carSrchTopLt}>
          <h2>72 Cars</h2>
          <p>Available</p>
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
            <Image src="/assets/img8.png" alt="" />
          </div>
          <div className={styles.carResultInfo}>
            <h3>Midsize</h3>
            <p>Toyota Corolla or similar</p>
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
                <Image src="/assets/car-icon7.png" alt="" /> Unlimited Mileage
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="/assets/car-icon8.png" alt="" /> Full to Full
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="/assets/car-icon9.png" alt="" /> Damage coverage
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className={styles.carResultCardRt}>
          <div className={styles.carRentalPrc}>
            INR 8,00.00 <span>Includes taxes & fees</span>
          </div>
          <NavLink href="#" className={"btn-yellow"}>
            See Availability
          </NavLink>
          <NavLink href="#" className={styles.nav1}>
            Free Cancellation
          </NavLink>
          <NavLink href="#" className={styles.nav2}>
            Pre-Registration available
          </NavLink>
        </div>
      </div>
      <div className={styles.carResultCard}>
        <div className={styles.carResultCardLt}>
          <div className={styles.carResultImg}>
            <Image src="/assets/img8.png" alt="" />
          </div>
          <div className={styles.carResultInfo}>
            <h3>Midsize</h3>
            <p>Toyota Corolla or similar</p>
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
                <Image src="/assets/car-icon7.png" alt="" /> Unlimited Mileage
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="/assets/car-icon8.png" alt="" /> Full to Full
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="/assets/car-icon9.png" alt="" /> Damage coverage
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className={styles.carResultCardRt}>
          <div className={styles.carRentalPrc}>
            INR 8,00.00 <span>Includes taxes & fees</span>
          </div>
          <NavLink href="#" className={"btn-yellow"}>
            See Availability
          </NavLink>
          <NavLink href="#" className={styles.nav1}>
            Free Cancellation
          </NavLink>
          <NavLink href="#" className={styles.nav2}>
            Pre-Registration available
          </NavLink>
        </div>
      </div>
      <div className={styles.carResultCard}>
        <div className={styles.carResultCardLt}>
          <div className={styles.carResultImg}>
            <Image src="/assets/img8.png" alt="" />
          </div>
          <div className={styles.carResultInfo}>
            <h3>Midsize</h3>
            <p>Toyota Corolla or similar</p>
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
                <Image src="/assets/car-icon7.png" alt="" /> Unlimited Mileage
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="/assets/car-icon8.png" alt="" /> Full to Full
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="/assets/car-icon9.png" alt="" /> Damage coverage
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className={styles.carResultCardRt}>
          <div className={styles.carRentalPrc}>
            INR 8,00.00 <span>Includes taxes & fees</span>
          </div>
          <NavLink href="#" className={"btn-yellow"}>
            See Availability
          </NavLink>
          <NavLink href="#" className={styles.nav1}>
            Free Cancellation
          </NavLink>
          <NavLink href="#" className={styles.nav2}>
            Pre-Registration available
          </NavLink>
        </div>
      </div>
      <div className={styles.carResultCard}>
        <div className={styles.carResultCardLt}>
          <div className={styles.carResultImg}>
            <Image src="/assets/img8.png" alt="" />
          </div>
          <div className={styles.carResultInfo}>
            <h3>Midsize</h3>
            <p>Toyota Corolla or similar</p>
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
                <Image src="/assets/car-icon7.png" alt="" /> Unlimited Mileage
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="/assets/car-icon8.png" alt="" /> Full to Full
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="/assets/car-icon9.png" alt="" /> Damage coverage
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className={styles.carResultCardRt}>
          <div className={styles.carRentalPrc}>
            INR 8,00.00 <span>Includes taxes & fees</span>
          </div>
          <NavLink href="#" className={"btn-yellow"}>
            See Availability
          </NavLink>
          <NavLink href="#" className={styles.nav1}>
            Free Cancellation
          </NavLink>
          <NavLink href="#" className={styles.nav2}>
            Pre-Registration available
          </NavLink>
        </div>
      </div>
      <div className={styles.carResultCard}>
        <div className={styles.carResultCardLt}>
          <div className={styles.carResultImg}>
            <Image src="/assets/img8.png" alt="" />
          </div>
          <div className={styles.carResultInfo}>
            <h3>Midsize</h3>
            <p>Toyota Corolla or similar</p>
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
                <Image src="/assets/car-icon7.png" alt="" /> Unlimited Mileage
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="/assets/car-icon8.png" alt="" /> Full to Full
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <Image src="/assets/car-icon9.png" alt="" /> Damage coverage
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div className={styles.carResultCardRt}>
          <div className={styles.carRentalPrc}>
            INR 8,00.00 <span>Includes taxes & fees</span>
          </div>
          <NavLink href="#" className={"btn-yellow"}>
            See Availability
          </NavLink>
          <NavLink href="#" className={styles.nav1}>
            Free Cancellation
          </NavLink>
          <NavLink href="#" className={styles.nav2}>
            Pre-Registration available
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CarSrchResultList;

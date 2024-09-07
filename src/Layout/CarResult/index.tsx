"use client";

import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/CarResult/CarResult.module.scss";
import SiteBreadcrumb from "@/Layout/GLobal/Breadcrumb";
import CarResultSideBar from "./Component/carresultsidebar";
import CarSrchResultList from "./Component/carsearchresultlist";
import CarRecentSlider from "./Component/carrecentsearch";

function CarResultPage() {
  return (
    <div className={styles.carResultWrapper}>
      <Container>
        <SiteBreadcrumb />
        <Row>
          <Col className={styles.carResultLeft}>
            <CarResultSideBar />
          </Col>
          <Col className={styles.carResultRight}>
            <CarSrchResultList />
            <CarRecentSlider />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CarResultPage;

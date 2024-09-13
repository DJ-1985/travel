"use client";

import { Container, Row, Col } from "react-bootstrap";
import styles from "@/styles/CruiseResult/CruiseResult.module.scss";
import SiteBreadcrumb from "@/Layout/GLobal/Breadcrumb";
import CruiseResultSideBar from "./Component/cruiseresultsidebar";
import CruiseResultList from "./Component/cruiseresultlist";

function CruiseResultPage() {
  return (
    <div className={styles.cruiseResultWrapper}>
      <Container>
        <SiteBreadcrumb />
        <Row>
          <Col className={styles.cruiseResultLeft}>
            <CruiseResultSideBar />
          </Col>
          <Col className={styles.cruiseResultRight}>
            <CruiseResultList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CruiseResultPage;

"use client";

import React from "react";
import { Accordion, Form, Image, ListGroup, NavLink } from "react-bootstrap";
import styles from "@/styles/CarResult/Component/carrecentsearch.module.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function CarRecentSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1699,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.recentSlider}>
      <h3>Recent Search</h3>
      <Slider {...settings}>
        <div className="item">
          <div className={styles.recentSrchCarCard}>
            <div className={styles.recentSrchCarImg}>
              <Image src="/assets/img8.png" alt="" />
            </div>
            <div className={styles.recentSrchCarInfo}>
              <h4>Economy</h4>
              <ListGroup as="ul">
                <ListGroup.Item as="li">
                  <Image src="/assets/car-icon3.png" alt="" /> 5 Seats
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Image src="/assets/car-icon6.png" alt="" /> 2 Small bag
                </ListGroup.Item>
              </ListGroup>
              <div className={styles.recentCarPrc}>
                <span>From</span>
                INR 8,00.00
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className={styles.recentSrchCarCard}>
            <div className={styles.recentSrchCarImg}>
              <Image src="/assets/img8.png" alt="" />
            </div>
            <div className={styles.recentSrchCarInfo}>
              <h4>Economy</h4>
              <ListGroup as="ul">
                <ListGroup.Item as="li">
                  <Image src="/assets/car-icon3.png" alt="" /> 5 Seats
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Image src="/assets/car-icon6.png" alt="" /> 2 Small bag
                </ListGroup.Item>
              </ListGroup>
              <div className={styles.recentCarPrc}>
                <span>From</span>
                INR 8,00.00
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className={styles.recentSrchCarCard}>
            <div className={styles.recentSrchCarImg}>
              <Image src="/assets/img8.png" alt="" />
            </div>
            <div className={styles.recentSrchCarInfo}>
              <h4>Economy</h4>
              <ListGroup as="ul">
                <ListGroup.Item as="li">
                  <Image src="/assets/car-icon3.png" alt="" /> 5 Seats
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Image src="/assets/car-icon6.png" alt="" /> 2 Small bag
                </ListGroup.Item>
              </ListGroup>
              <div className={styles.recentCarPrc}>
                <span>From</span>
                INR 8,00.00
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className={styles.recentSrchCarCard}>
            <div className={styles.recentSrchCarImg}>
              <Image src="/assets/img8.png" alt="" />
            </div>
            <div className={styles.recentSrchCarInfo}>
              <h4>Economy</h4>
              <ListGroup as="ul">
                <ListGroup.Item as="li">
                  <Image src="/assets/car-icon3.png" alt="" /> 5 Seats
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  <Image src="/assets/car-icon6.png" alt="" /> 2 Small bag
                </ListGroup.Item>
              </ListGroup>
              <div className={styles.recentCarPrc}>
                <span>From</span>
                INR 8,00.00
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default CarRecentSlider;

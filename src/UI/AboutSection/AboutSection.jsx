import React from "react";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

import "../AboutSection/about-section.css";

const AboutSection = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="about__section-content">
                            <h4 className="section__subtitle">About Us</h4>
                            <h2 className="section__title">Welcome to car rent service</h2>

                            <p className="section__description">
                                We are Car Rentals, an online cab booking aggregator, providing customers with reliable and premium Intercity and Local car rental services. Over the last decade, we are uniquely placed as the largest chauffeur driven car rental company in Gujarat in terms of geographical reach.
                            </p>

                            <div className="about__section-six d-flex gap-5">
                                <div className="six-three">
                                    <div className="about__section-item d-flex align-items-center">
                                        <p className="section__description  d-flex align-items-center gap-2 ">
                                            <i class="ri-checkbox-circle-line"></i>Safety Certified
                                        </p>
                                    </div>

                                    <div className="about__section-item d-flex align-items-center">
                                        <p className="section__description  d-flex align-items-center gap-2 ">
                                            <i class="ri-checkbox-circle-line"></i>Multiple Stops
                                        </p>
                                    </div>
                                    <div className="about__section-item d-flex align-items-center">
                                        <p className="section__description  d-flex align-items-center gap-2 ">
                                            <i class="ri-checkbox-circle-line"></i>Expert Chauffeurs
                                        </p>
                                    </div>
                                </div>
                                <div className="six-three">
                                    <div className="about__section-item d-flex align-items-center">

                                        <p className="section__description  d-flex align-items-center gap-2 ">
                                            <i class="ri-checkbox-circle-line"></i>All Inclusive Prices
                                        </p>
                                    </div>
                                    <div className="about__section-item d-flex align-items-center">

                                        <p className="section__description  d-flex align-items-center gap-2 ">
                                            <i class="ri-checkbox-circle-line"></i>Flexible Packages
                                        </p>
                                    </div>
                                    <div className="about__section-item d-flex align-items-center">

                                        <p className="section__description  d-flex align-items-center gap-2 ">
                                            <i class="ri-checkbox-circle-line"></i>Cab At Your Disposal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="about__img">
                            <img src={aboutImg} alt="" className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    );
};
export default AboutSection;
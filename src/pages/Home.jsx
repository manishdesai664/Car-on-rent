import React from "react";
import HeroSlider from "../UI/HeroSlider/HeroSlider";
import FindCarForm from "../UI/FindCarForm/FindCarForm";

import { Row, Col, Container } from "reactstrap";
import AboutSection from "../UI/AboutSection/AboutSection";
import ServicesList from "../UI/ServicesList/ServicesList";
import CarItem from "../UI/CarItem/CarItem";
import carData from "../assets/data/carData";
import BecomeDriverSection from "../UI/BecomeDriverSection/BecomeDriverSection";
import Testimonial from "../UI/Testimonial/Testimonial";
import BlogList from "../UI/BlogList/BlogList";


const Home = () => {
  return (
    <>
      {/* ============= Hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        {/* ========Find Car Form section ====== */}
        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* ===========About Section=========== */}
      <AboutSection />

      {/* =========Service Section======== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">
                See our
              </h6>

              <h2 className="section__title">
                Populer Services
              </h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== Car Item ========= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center ">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>
            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      {/* ============Become a driver Section =========== */}
      <BecomeDriverSection />

      {/* ============= Testimonial Section ================ */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Our clients says</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* ======= Blogs List section============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title">Latest Blogs</h2>
            </Col>
            <BlogList />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
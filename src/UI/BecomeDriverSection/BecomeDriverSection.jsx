import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "../BecomeDriverSection/become-Driver-section.css";

import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriverSection = () => {
    return (
        <section className='become__driver'>
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="12" className='become__driver-img'>
                        <img src={driverImg} alt="" className='w-100' />
                    </Col>
                    <Col lg="6" md="6" sm="12" className='section__title  become__driver-title'>
                        <h2 className='section__title  become__driver-title'>Do You Want to Earn With Us? So Don't Be Late
                        </h2>
                        <button className='btn become__driver-btn mt-4'>Become a driver</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BecomeDriverSection
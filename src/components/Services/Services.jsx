import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import designIcon from "../../asset/image/design.png";
import ecommerceIcon from "../../asset/image/ecommerce.png";
import webIcon from "../../asset/image/web.png";

class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="ServiceMainTitle">MY SERVICES</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={4} md={6} sm={12} className="">
              <div className="ServiceCard text-center">
                <img
                  className="ecommerceIcon"
                  src={ecommerceIcon}
                  alt=""
                  srcset=""
                />
                <h2 className="serviceName">Ecommerce</h2>
                <p className="serviceDescription">
                  I will design and develop ecommerce online store website.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="">
              <div className="ServiceCard text-center">
                <img className="designIcon" src={designIcon} alt="" srcset="" />
                <h2 className="serviceName">Web Design</h2>
                <p className="serviceDescription">
                  Qualified web Design and attractive effects which catches
                  visitor's Eye.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="">
              <div className="ServiceCard text-center">
                <img className="webIcon" src={webIcon} alt="" srcset="" />
                <h2 className="serviceName">Web development</h2>
                <p className="serviceDescription">
                  Clean and Fresh free code to make youe website dynamic
                  perfectly.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;

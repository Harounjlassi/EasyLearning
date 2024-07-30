import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import designIcon from "../../asset/image/design.png";
import ecommerceIcon from "../../asset/image/ecommerce.png";
import webIcon from "../../asset/image/web.png";
class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className="">
          <Row>
            <Col lg={4} md={6} sm={12} className="">
              <div>
                <img
                  className="ecommerceIcon"
                  src={ecommerceIcon}
                  alt=""
                  srcset=""
                />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="">
              <div>
                <img className="designIcon" src={designIcon} alt="" srcset="" />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="">
              <div>
                <img className="webIcon" src={webIcon} alt="" srcset="" />
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;

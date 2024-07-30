import React, { Component, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../../asset/css/custom.css";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";

class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        {/* <div className="row">
        </div> */}
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topFixedBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                  <h1 className="TopTitle">EASY LEARNING</h1>
                  <h4 className="TopSubTitle">Learn Professionally</h4>
                  <Button variant="primary">Learn More</Button>{" "}
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;

import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner p-0">
          <div className="summaryBannerOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row>
                    <Col>
                      <h1 className="countNumber">3500</h1>
                      <h4 className="countTitle">Students Worldwide</h4>
                      <hr className="busy-white" />
                    </Col>
                    <Col>
                      <h1 className="countNumber">22</h1>
                      <h4 className="countTitle">Courses Published</h4>
                    </Col>
                    <Col>
                      <h1 className="countNumber">3000</h1>
                      <h4 className="countTitle">Studnet Review</h4>
                    </Col>
                  </Row>
                </Col>

                <Col lg={4} md={6} sm={12}>
                  <h1 className="countNumber">3000</h1>
                  <h4 className="countTitle">Studnet Review</h4>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;

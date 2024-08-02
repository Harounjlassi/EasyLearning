import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner p-0">
          <div className="summaryBannerOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countSection">
                    <Col>
                      <h1 className="countNumber">3500</h1>
                      <h4 className="countTitle">Students Worldwide</h4>
                      <hr className="text-white w-25" />
                    </Col>

                    <Col>
                      <h1 className="countNumber">22</h1>
                      <h4 className="countTitle">Courses Published</h4>
                      <hr className="text-white w-25" />
                    </Col>
                    <Col>
                      <h1 className="countNumber">3000</h1>
                      <h4 className="countTitle">Studnet Review</h4>
                      <hr className="text-white w-25" />
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title className="cardTitle">Card Title</Card.Title>
                      <Card.Text>
                        <p className="cardSubTitle text-justify">
                          Requirment Gathering
                        </p>
                        <p className="cardSubTitle text-justify">
                          System Analysis
                        </p>
                        <p className="cardSubTitle text-justify">Coding Test</p>
                        <p className="cardSubTitle text-justify">
                          Implementation
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
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

import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

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
                      <FontAwesomeIcon icon={faGlobe} className="iconProject" />
                      <h1 className="countNumber">
                        <CountUp start={0} end={3500} delay={0}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <div>
                                <span ref={countUpRef} />
                              </div>
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4 className="countTitle">Students Worldwide</h4>
                      <hr className="text-white w-25" />
                    </Col>

                    <Col>
                      <FontAwesomeIcon
                        icon={faLaptop}
                        className="iconProject"
                      />
                      <h1 className="countNumber">
                        <CountUp start={0} end={22} delay={0}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <div>
                                <span ref={countUpRef} />
                              </div>
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>{" "}
                      <h4 className="countTitle">Courses Published</h4>
                      <hr className="text-white w-25" />
                    </Col>
                    <Col>
                      <FontAwesomeIcon icon={faStar} className="iconProject" />
                      <h1 className="countNumber">
                        <CountUp start={0} end={3000} delay={0}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <div>
                                <span ref={countUpRef} />
                              </div>
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>{" "}
                      <h4 className="countTitle">Studnet Review</h4>
                      <hr className="text-white w-25" />
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card className="workCard">
                    <Card.Body>
                      <Card.Title className="cardTitle">
                        what i Have achieved
                      </Card.Title>
                      <ListGroup variant="flush">
                        <ListGroup.Item className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            icon={faSquareCheck}
                            className="iconBullent"
                          />
                          Requirement Gathering
                        </ListGroup.Item>
                        <ListGroup.Item className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            icon={faSquareCheck}
                            className="iconBullent"
                          />
                          System Analysis
                        </ListGroup.Item>
                        <ListGroup.Item className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            icon={faSquareCheck}
                            className="iconBullent"
                          />
                          Coding Testing
                        </ListGroup.Item>
                        <ListGroup.Item className="cardSubTitle text-justify">
                          <FontAwesomeIcon
                            icon={faSquareCheck}
                            className="iconBullent"
                          />
                          Implementation
                        </ListGroup.Item>
                      </ListGroup>
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

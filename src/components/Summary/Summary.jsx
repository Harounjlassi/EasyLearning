import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";

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
                  <Card className="workCard">
                    <Card.Body>
                      <Card.Title className="cardTitle">
                        what i have achieved
                      </Card.Title>
                      <ListGroup variant="flush">
                        <ListGroup.Item className="cardSubTitle text-justify">
                          <FontAwesomeIcon icon={}></FontAwesomeIcon>
                          Requirement Gathering
                        </ListGroup.Item>
                        <ListGroup.Item className="cardSubTitle text-justify">
                          System Analysis
                        </ListGroup.Item>
                        <ListGroup.Item className="cardSubTitle text-justify">
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

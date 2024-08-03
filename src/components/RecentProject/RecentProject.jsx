import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

class RecentProject extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="ServiceMainTitle">RECENT PROJECT</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/premium-vector/online-courses-concept_23-2148529256.jpg?w=740"
                />
                <Card.Body>
                  <Card.Title className="serviceName">
                    Project Name One
                  </Card.Title>
                  <Card.Text className="serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Visit WebSite</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/online-courses-tutorials_52683-37860.jpg?t=st=1722649799~exp=1722653399~hmac=a2c9005388e0e7258d17357729eb5b3fcfca3fbc8b152820c61abe9d08e33bb1&w=740"
                />
                <Card.Body>
                  <Card.Title className="serviceName">
                    Project Name Two
                  </Card.Title>
                  <Card.Text className="serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Visit WebSite</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?t=st=1722649431~exp=1722653031~hmac=00d997e8dc78de910d3a087d9e46b87e771bf969bdfaa63b9796fb64ed5522e3&w=740"
                />
                <Card.Body>
                  <Card.Title className="serviceName">
                    Project Name Three{" "}
                  </Card.Title>
                  <Card.Text className="serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Visit WebSite</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default RecentProject;

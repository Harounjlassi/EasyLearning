import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class Courses extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="ServiceMainTitle">MY COURSES</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImage"
                    src="https://img.freepik.com/premium-photo/young-arab-female-student-using-digital-tablet-video-call-outdoors_116547-34594.jpg?w=740"
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-start serviceName ">Laravel8</h5>
                  <p className="text-start serviceDescription">
                    Master Laravel for Beginners & Intermediate 2024
                  </p>
                  <a className=" courseViewMore float-start" href="#">
                    View Details
                  </a>
                </Col>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImage"
                    src="https://as2.ftcdn.net/v2/jpg/00/86/51/21/1000_F_86512117_kvzWybGosKCloarxCt7DWfY2mkjO7GEh.jpg"
                  />
                </Col>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <h5 className="text-start serviceName ">Laravel8</h5>
                  <p className="text-start serviceDescription">
                    Master Laravel for Beginners & Intermediate 2024
                  </p>
                  <a className=" courseViewMore float-start" href="#">
                    View Details
                  </a>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImage"
                    src="https://img.freepik.com/free-photo/female-muslim-speaker-giving-presentation-hall-university-workshop_155003-3558.jpg?ga=GA1.1.1370345263.1722649393&semt=sph"
                  />
                </Col>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <h5 className="text-start serviceName ">Laravel8</h5>
                  <p className="text-start serviceDescription">
                    Master Laravel for Beginners & Intermediate 2024
                  </p>
                  <a className=" courseViewMore float-start" href="#">
                    View Details
                  </a>
                </Col>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImage"
                    src="https://img.freepik.com/free-photo/training-managers_1098-16067.jpg?t=st=1722688929~exp=1722692529~hmac=2003ea4d2789921e5308ed9e221a3633d83b1bee44b2ef86c294d86f4c04791c&w=826"
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-start serviceName ">Laravel8</h5>
                  <p className="text-start serviceDescription">
                    Master Laravel for Beginners & Intermediate 2024
                  </p>
                  <a className=" courseViewMore float-start" href="#">
                    View Details
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Courses;

import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import "../../../node_modules/video-react/dist/video-react.css"; // import css
import { Player, BigPlayButton } from "video-react";

class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  modalClose = () => this.setState({ show: false });
  modalOpen = () => this.setState({ show: true });

  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="ServiceMainTitle">OUR VIDEO</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12} className="videoText">
              <p className="serviceDescription text-start">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident tenetur harum modi optio earum quae veniam quo magnam
                culpa nostrum laboriosam hic mollitia molestias magni non ullam
                eligendi, in porro? Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Excepturi fugiat minima odit aperiam,
                accusantium pariatur iste aspernatur et similique quae quidem
                eos consectetur inventore, harum explicabo at. Similique, quos
                <br />
                <br />
                voluptate. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sit quam voluptatum minus esse officia doloremque vitae
                fugit, deleniti impedit, molestias ipsa amet dolore tenetur
                obcaecati maiores voluptates recusandae. Soluta, odit? Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Iure nisi,
                veritatis, velit ipsum qui consequatur mollitia, ea neque
                nostrum eos cum harum accusamus et ipsam provident eum quia
                cupiditate commodi? 3,500 Students Worldwide 22 Courses
                Published 3,000 Student Review what I Have achieved.
              </p>
            </Col>
            <Col lg={6} md={6} sm={12} className="videoCard">
              <FontAwesomeIcon
                onClick={this.modalOpen}
                icon={faVideoSlash}
                className="iconProject"
              />
            </Col>
          </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
              <BigPlayButton position="center" />
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Video;

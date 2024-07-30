import React, { Component, Fragment } from "react";
import Container from "react-bootstrap/Container";
import "../../asset/css/custom.css";
import "../../asset/css/custom.css";

class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        {/* <div className="row">
        </div> */}
        <Container className="topFixedBanner">
          <div className="topFixedBannerOverlay"></div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;

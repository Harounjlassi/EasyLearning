import React, { Component, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import whiteLogo from "../../asset/image/logo_white.png";
import blackLogo from "../../asset/image/logo_black.png";
import "../../asset/css/custom.css";
import "../../asset/css/bootstrap.min.css";
export class TopNavigation extends Component {
  constructor() {
    super();
    this.state = {
      navBarTitle: "navTitle ",
      navBarLogo: [whiteLogo], //object
      navBackBack: "navBackground",
      navBarItem: "navItem",
    };
  }
  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navBarTitle: "navTitleScroll",
        navBarLogo: [blackLogo],
        navBackBack: "navBackgroundScrool",
        navBarItem: "navItemScroll",
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navBarTitle: "navTitle",
        navBarLogo: [whiteLogo],
        navBackBack: "navBackground",
        navBarItem: "navItem",
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  render() {
    return (
      <Fragment>
        <Navbar
          className={this.state.navBackBack}
          collapseOnSelect
          fixed="top"
          expand="lg"
          variant="black"
        >
          <Container>
            <Navbar.Brand className={this.state.navBarTitle} href="#home">
              <img src={this.state.navBarLogo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link className={this.state.navBarItem} href="#deets">
                  ABOUT{" "}
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">
                  HOME
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">
                  SERVICE
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">
                  COURSES
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">
                  PORTFOLIO
                </Nav.Link>
                <Nav.Link className={this.state.navBarItem} href="#deets">
                  CONTACT US
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;

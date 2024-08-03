import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";
class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { Technologies: "Php", Project: 100 },
        { Technologies: "Mysql", Project: 90 },
        { Technologies: "Laravel", Project: 80 },
        { Technologies: "React", Project: 48 },
        { Technologies: "VueJS", Project: 70 },
        { Technologies: "Jango", Project: 60 },
        { Technologies: "JavaScript", Project: 100 },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="ServiceMainTitle">TECHNOLOGY USED</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="Technologies"> </XAxis>
                  <Tooltip />
                  <Bar fill="#051b35" dataKey="Project"></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <p className="text-start serviceDescription">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Provident tenetur harum modi optio earum quae veniam quo magnam
                culpa nostrum laboriosam hic mollitia molestias magni non ullam
                eligendi, in porro? Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Excepturi fugiat minima odit aperiam,
                <br />
                accusantium pariatur iste aspernatur et similique quae quidem
                eos consectetur inventore, harum explicabo at. Similique, quos
                voluptate. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sit quam voluptatum minus esse officia doloremque vitae
                fugit, deleniti impedit, molestias ipsa amet dolore tenetur
                obcaecati maiores voluptates recusandae. Soluta, odit? Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Iure nisi,
                veritatis, velit ipsum qui consequatur mollitia, ea neque
                nostrum eos cum harum accusamus et ipsam provident eum quia
                cupiditate commodi?
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;

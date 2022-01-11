import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact.styles.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
          <div className="m-2">
              <a
                href="tel:+91-9168105437"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-danger"
                  title="+91-9168105437"
                >
                  <i className="fas fa-phone-alt" aria-hidden="true"></i> Call me
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a
                href="mailto:tejshreegund11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-danger"
                  title="tejshreegund11@gmail.com"
                >
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/tejshreebgund"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-light" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2 ">
              <a
                href="https://www.linkedin.com/in/tejshree-gund-1417211a7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Contact;

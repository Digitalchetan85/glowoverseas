import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Logo from "../../Images/logo.png";

const Footer = () => {
  return (
    <div id="footer" className="bg-dark">
      <Container>
        <div className="bb">
          <Row>
            <Col md={3}>
              <div className="py-3 text-center">
                <Image src={Logo} className="img-fluid" alt="Logo"></Image>
                <p className="pt-3 text-white text-center">
                  <i className="fas fa-home text-white"></i>
                  #1, 3 rd Floor, 80 ft. Road,
                  <br />
                  Opp. George Thangiah Complex, <br />
                  ITPL, Whitefield Road, <br />
                  Bangalore 560 066.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="body-wrap">
                <h5 className="text-left text-white pt-3 pb-3">
                  Mbbs in Abroad
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="" className="text-decoration-none text-white">
                      MBBS in Ukraine
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-decoration-none text-white">
                      MBBS in USA
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-decoration-none text-white">
                      MBBS in Kyrgyzstan
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-decoration-none text-white">
                      MBBS in Georgia
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-decoration-none text-white">
                      MBBS in Poland
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-decoration-none text-white">
                      MBBS in Russia
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <div className="body-wrap">
                <h5 className="text-left text-white pt-3 pb-3">
                  Top Medical Universities
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="services.html"
                      className="text-decoration-none text-white"
                    >
                      Kharkiv National Medical University
                    </a>
                  </li>
                  <li>
                    <a
                      href="services.html"
                      className="text-decoration-none text-white"
                    >
                      Osh State Medical University
                    </a>
                  </li>
                  <li>
                    <a
                      href="services.html"
                      className="text-decoration-none text-white"
                    >
                      AMA University
                    </a>
                  </li>
                  <li>
                    <a
                      href="services.html"
                      className="text-decoration-none text-white"
                    >
                      Spartan University of Health and Science
                    </a>
                  </li>
                  <li>
                    <a
                      href="services.html"
                      className="text-decoration-none text-white"
                    >
                      Batumi Shota Rustaveli State Medical University
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <div className="body-wrap">
                <h5 className="text-left text-white pt-3 pb-3">Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="" className="text-decoration-none text-white">
                      About GOE
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none text-white">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-decoration-none text-white">
                      Top Medical University
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="pt-3 border-top border-white">
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <p className="text-center text-white">
                © Copyrights Glow Overseas Education 2022. All Rights Reserved.
              </p>
            </Col>
            <Col md={3}></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

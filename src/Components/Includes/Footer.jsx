import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
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
                    <Link to="/mbbs-in-kazakhstan" className="text-decoration-none text-white">
                      MBBS in Kazakhstan
                    </Link>
                  </li>
                  <li>
                    <Link to="/mbbs-in-usa" className="text-decoration-none text-white">
                      MBBS in USA
                    </Link>
                  </li>
                  <li>
                    <Link to="/mbbs-in-kyrgyzstan" className="text-decoration-none text-white">
                      MBBS in Kyrgyzstan
                    </Link>
                  </li>
                  <li>
                    <Link to="/mbbs-in-georgia" className="text-decoration-none text-white">
                      MBBS in Georgia
                    </Link>
                  </li>
                  <li>
                    <Link to="/mbbs-in-poland" className="text-decoration-none text-white">
                      MBBS in Poland
                    </Link>
                  </li>
                  <li>
                    <Link to="/mbbs-in-russia" className="text-decoration-none text-white">
                      MBBS in Russia
                    </Link>
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
                    <Link to="/mbbs-in-ukraine/kharkiv-national-medical-university"
                      className="text-decoration-none text-white"
                    >
                      Kharkiv National Medical University
                    </Link>
                  </li>
                  <li>
                    <Link to="/mbbs-in-kyrgystan/osh-state-medical-university" className="text-decoration-none text-white"
                    >
                      Osh State Medical University
                    </Link>
                  </li>
                  <li>
                    <Link to="/mbbs-in-philippines/ama-university"
                      className="text-decoration-none text-white"
                    >
                      AMA University
                    </Link>
                  </li>
                  <li>
                    <Link to="/mbbs-in-usa/texila-american-university-college"
                      className="text-decoration-none text-white"
                    >
                      Texila American University of Health and Science
                    </Link>
                  </li>
                  <li>
                    <Link to="/mbbs-in-georgia/batumi-shota-rustaveli-state-medical-university"
                      className="text-decoration-none text-white"
                    >
                      Batumi Shota Rustaveli State Medical University
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3}>
              <div className="body-wrap">
                <h5 className="text-left text-white pt-3 pb-3">Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/about" className="text-decoration-none text-white">
                      About GOE
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-decoration-none text-white">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" className="text-decoration-none text-white">
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="pt-2 border-top border-white">
          <Row className="justify-content-center">
            <Col md={10}>
              <p className="text-center text-white" style={{fontSize: '14px'}}>
                © Copyrights Glow Overseas Education 2022. All Rights Reserved. Design & Developed by 
                <Link to="https://shanthaswebz.com" target="_blank" className="text-decoration-none text-white">Shanthaswebz</Link>
              </p>
            </Col>
       </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

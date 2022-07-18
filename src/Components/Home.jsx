import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import MainSlider from "./Includes/MainSlider";
import USA from "../Images/mbbs-in-usa-flag.png";
import Ukraine from "../Images/mbbs-in-ukraine-flag.png";
import Georgia from "../Images/mbbs-in-georgia-flag.png";
import Kyrgystan from "../Images/mbbs-in-kyrgyzstan-flag.png";
import Phillipines from "../Images/mbbs-in-philippines-flag.png";
import Kazakhstan from "../Images/mbbs-in-kazakhstan-flag.png";
import Russia from "../Images/mbbs-in-russia-flag.png";
import Poland from "../Images/mbbs-in-poland-flag.png";
import Admi from "../Images/second.png";
import Why from "../Images/why.png";
import Mbia from "../Images/mbia.png";
import Testimonials from "./Includes/Testimonials";
import AdmissionProcess from "./Includes/AdmissionProcess";
import FreeCouncelling from "./Includes/FreeCouncelling";

const Home = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MBBS in Abroad | Glowoverseas Education | GOE</title>
        <link rel="canonical" href="https://glowoverseas.com/" />
        <meta
          name="description"
          content="Glowoveas Overseas Education is one of the best MBBS in Abroad Consultants in Bangalore. Call Us for Free Counselling
                    "
        />
      </Helmet>
      <section id="slider">
        <MainSlider />
      </section>

      <section id="second" className="bg-secondary">
        <Container fluid className="ps-md-0">
          <Row className="justify-content-center">
            <Col md={7} className="ps-md-0">
              <div className="d-none d-md-block">
                <Image src={Admi} alt="" className="img-fluid"></Image>
              </div>
            </Col>

            <Col md={5} className="align-self-center">
              <div className="text-center py-md-3">
                <h2 className="text-center">
                  Admission Open for MBBS in Abroad in 2022
                </h2>
                <p className="text-center">
                  The growing pandemic has taught us the importance ofdoctors
                  and their Nobel Profession. Everyone aspires to be a doctor
                  but doesn't get a seat in India? Does that mean its the end of
                  your dream?. No dreams are to be achieved thats why we are
                  here. Glow Overseas Education helps you get a seat abroad,
                  with a transparent admission process and handholding you until
                  you get placed in college that is best for you.
                </p>
                <Button variant="primary" onClick={handleShow} className="my-3">
                  Apply Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="first" className="bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={5} className="align-self-center">
              <div className="text-center">
                <h1 className="text-info">
                  Why you need to Study <br /> MBBS in Abroad?
                </h1>
              </div>
            </Col>
            <Col md={7}>
              <div className="text-center">
                <Image src={Why} alt="" className="img-fluid"></Image>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="six" className="py-md-5 bg-white">
        <Container>
          <div className="">
            <Row className="justify-content-center g-3">
              <Col md={4} className="">
                <div
                  className="m-2 outer-box bg-light"
                  style={{ height: "200px" }}
                >
                  <Row className="justify-content-center">
                    <Col md={3} sm={2}>
                      <div className="cir p-3">
                        <i className="fas fa-dollar-sign"></i>
                      </div>
                    </Col>
                    <Col md={9} sm={10}>
                      <div className="ps-md-1 pe-md-1">
                        <h5 className="py-md-1">Low Tution Fees</h5>
                        <p className="py-md-1 text-start">
                          Studying{" "}
                          <a as={Link} to="">
                            MBBS in Abroad
                          </a>{" "}
                          is way more reasonable than studying in MBBS India.
                          The college fees will be paid in yearly instalments.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={4} className="">
                <div
                  className="m-2 outer-box bg-light"
                  style={{ height: "200px" }}
                >
                  <Row className="justify-content-center">
                    <Col md={3} sm={2}>
                      <div className="cir p-3">
                        <i className="fas fa-ban"></i>
                      </div>
                    </Col>
                    <Col md={9} sm={10}>
                      <div className="ps-md-1 pe-md-1">
                        <h5 className="py-md-1">No Donation</h5>
                        <p className="py-md-1 text-start">
                          There is no donation for studying MBBS in Abroad. You
                          will get MBBS Admission in Top Medical Universities
                          without any donation
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={4} className="">
                <div
                  className="m-2 outer-box bg-light"
                  style={{ height: "200px" }}
                >
                  <Row className="justify-content-center">
                    <Col md={3} sm={2}>
                      <div className="cir p-3">
                        <i className="fas fa-university"></i>
                      </div>
                    </Col>
                    <Col md={9} sm={10}>
                      <div className="">
                        <h5 className="py-md-1">
                          MCI / WHO Approved Medical Universities
                        </h5>
                        <p className="py-md-1 text-start">
                          All Medical Universities are approved by MCI (Medical
                          Council of India) and WHO (World Health Organization).
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={4} className="">
                <div
                  className="m-2 outer-box bg-light"
                  style={{ height: "200px" }}
                >
                  <Row className="justify-content-center">
                    <Col md={3} sm={2}>
                      <div className="cir p-3">
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </Col>
                    <Col md={9} sm={10}>
                      <div className="ps-md-1 pe-me-1">
                        <h5 className="py-md-1">MCI Screening Test</h5>
                        <p className="py-md-1 text-start">
                          In all the Abroad Medical Universities guidelines to
                          clear MCI Screening test in a first attempt itself.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={4} className="">
                <div
                  className="m-2 outer-box bg-light"
                  style={{ height: "200px" }}
                >
                  <Row className="justify-content-center">
                    <Col md={3} sm={2}>
                      <div className="cir p-3">
                        <i className="fas fa-cloud-moon"></i>
                      </div>
                    </Col>
                    <Col md={9} sm={10}>
                      <div className="">
                        <h5 className="py-md-1">Weather</h5>
                        <p className="py-md-1 text-start">
                          Indian students can adapt the weather conditions.
                          Weather differ from Country to Country.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={4} className="">
                <div
                  className="m-2 outer-box bg-light"
                  style={{ height: "200px" }}
                >
                  <div className="row">
                    <Col md={3} sm={2}>
                      <div className="cir p-3">
                        <i className="fas fa-hotel"></i>
                      </div>
                    </Col>
                    <Col md={9} sm={10}>
                      <div className="ps-md-1 pe-me-1">
                        <h5 className="py-md-1">Hostel Facilities</h5>
                        <p className="py-md-1 text-start">
                          Already students are studying at MBBS in Abroad
                          Countries With safe Hostel Facilities and other
                          accommodation.
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
              </Col>
              <Col md={4} className="">
                <div
                  className="m-2 outer-box bg-light"
                  style={{ height: "200px" }}
                >
                  <Row className="row">
                    <Col md={3} sm={2}>
                      <div className="cir p-3">
                        <i className="fas fa-book-reader"></i>
                      </div>
                    </Col>
                    <Col md={9} sm={10}>
                      <div className="ps-md-1 pe-md-1">
                        <h5 className="pt-1 pt-1">English Medium Courses</h5>
                        <p className="pt-1 pb-1 text-start">
                          The medium of instruction will be English in all
                          Medical Universities in Abroad.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={4} className="">
                <div
                  className="m-2 outer-box bg-light"
                  style={{ height: "200px" }}
                >
                  <Row className="row">
                    <Col md={3} sm={2}>
                      <div className="cir p-3">
                        <i className="fas fa-arrow-circle-right"></i>
                      </div>
                    </Col>
                    <Col md={9} sm={10}>
                      <div className="ps-md-1 pe-md-1">
                        <h5 className="pt-1 pt-1">No Entrance Exam</h5>
                        <p className="pt-1 pb-1 text-start">
                          There are No Entrance Exams required to get MBBS
                          admission in Abroad.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={4} className="">
                <div
                  className="m-2 outer-box bg-light"
                  style={{ height: "200px" }}
                >
                  <Row className="row">
                    <Col md={3} sm={2}>
                      <div className="cir p-3">
                        <i className="fas fa-utensils"></i>
                      </div>
                    </Col>
                    <Col md={9} sm={10}>
                      <div className="ps-md-1 pe-md-1">
                        <h5 className="pt-1 pt-1">Indian Food Availability</h5>
                        <p className="pt-1 pb-1 text-start">
                          Separate Indian mess is available in MBBS in Abroad
                          all the Medical University. Many restaurants are
                          providing Indian Food also.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section id="first" className="">
        <Image src={Mbia} alt="" className="img-fluid"></Image>
      </section>

      <section id="third" className="py-md-5">
        <Container>
          <Row className="justiy-content-center">
            <Col md={3}>
              <div className="outer-box">
                <div className="text-center pt-3 pb-3">
                  <Image src={USA} alt="" className="img-fluid" />
                </div>
                <div className="text-center pt-3 pb-3">
                  <Link to="/mbbs-in-usa"
                    className="btn custom-btn-1 btn-primary text-uppercase"
                  >
                    MBBS in USA
                  </Link>
                  {/* <Button type="submit" className="custom-btn-1 btn-primary">
                    MBBS in USA
                  </Button> */}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="outer-box">
                <div className="text-center pt-3 pb-3">
                  <Image src={Ukraine} alt="" className="img-fluid" />
                </div>
                <div className="text-center pt-3 pb-3">
                  <Link to="/mbbs-in-ukraine"
                    className="btn custom-btn-1 btn-primary text-uppercase"
                  >
                    MBBS in Ukraine
                  </Link>
                  {/* <Button type="submit" className="custom-btn-1 btn-primary">
                    MBBS in Ukraine
                  </Button> */}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="outer-box">
                <div className="text-center pt-3 pb-3">
                  <Image src={Georgia} alt="" className="img-fluid" />
                </div>
                <div className="text-center pt-3 pb-3">
                  <Link to="/mbbs-in-georgia"
                    className="btn custom-btn-1 btn-primary text-uppercase"
                  >
                    MBBS in Georgia
                  </Link>
                  {/* <Button type="submit" className="custom-btn-1 btn-primary">
                    MBBS in Georgia
                  </Button> */}
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="outer-box">
                <div className="text-center pt-3 pb-3">
                  <Image src={Kyrgystan} alt="" className="img-fluid" />
                </div>
                <div className="text-center pt-3 pb-3">
                  <Link to="/mbbs-in-kyrgyzstan"
                    className="btn custom-btn-1 btn-primary text-uppercase"
                  >
                    MBBS in Kyrgyzstan
                  </Link>
                  {/* <Button type="submit" className="custom-btn-1 btn-primary">
                    MBBS in Kyrgyzstan
                  </Button> */}
                </div>
              </div>
            </Col>
          </Row>
          <Row className="row">
            <div className="col-md-3">
              <div className="outer-box">
                <div className="text-center pt-3 pb-3">
                  <Image src={Phillipines} alt="" className="img-fluid" />
                </div>
                <div className="text-center pt-3 pb-3">
                  <Link to="/mbbs-in-philippines"
                    className="btn custom-btn-1 btn-primary text-uppercase"
                  >
                    MBBS in Philippines
                  </Link>
                  {/* <Button type="submit" className="custom-btn-1 btn-primary">
                    MBBS in Philippines
                  </Button> */}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="outer-box">
                <div className="text-center pt-3 pb-3">
                  <Image src={Kazakhstan} alt="" className="img-fluid" />
                </div>
                <div className="text-center pt-3 pb-3">
                  <Link to="/mbbs-in-kazakhstan"
                    className="btn custom-btn-1 btn-primary text-uppercase"
                  >
                    MBBS in Kazakhstan
                  </Link>
                  {/* <Button type="submit" className="custom-btn-1 btn-primary">
                    MBBS in Kazakhstan
                  </Button> */}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="outer-box">
                <div className="text-center pt-3 pb-3">
                  <Image src={Russia} alt="" className="img-fluid" />
                </div>
                <div className="text-center pt-3 pb-3">
                  <Link to="/mbbs-in-russia"
                    className="btn custom-btn-1 btn-primary text-uppercase"
                  >
                    MBBS in Russia
                  </Link>
                  {/* <Button type="submit" className="custom-btn-1 btn-primary">
                    MBBS in Russia
                  </Button> */}
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="outer-box">
                <div className="text-center pt-3 pb-3">
                  <Image src={Poland} alt="" className="img-fluid " />
                </div>
                <div className="text-center pt-3 pb-3">
                  <Link to="/mbbs-in-poland"
                    className="btn custom-btn-1 btn-primary text-uppercase"
                  >
                    MBBS in Poland
                  </Link>
                  {/* <Button type="submit" className="custom-btn-1 btn-primary">
                    MBBS in Poland
                  </Button> */}
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <AdmissionProcess />

      <section id="seven" className="py-md-5 bg-primary">
        <Container>
          <Row className="justify-content-center">
            <Col md={9}>
              <div className="">
                <h3 className="text-center">
                  Are you looking to Study MBBS in Abroad Medical Universities?
                </h3>
              </div>
            </Col>
            <Col md={3}>
              <div className="text-center">
                <Button
                  onClick={handleShow}
                  className="btn btn-info rounded-pill px-3 text-white"
                >
                  Call Us for Free Counselling
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="testimonials" className="py-md-5">
        <Container>
          <h2 className="pt-1 pb-1 text-center text-info">Testimonials</h2>
          <div className="my-2">
            <Testimonials />
          </div>
        </Container>
      </section>
      <FreeCouncelling
        show={show}
        handleClose={handleClose}
        title="Contact Us For Free Counselling"
      />
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Container,
  Row,
  Col,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Offcanvas,
  Modal,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/logo.png";
import BrochureDownload from "./BrochureDownload";

const Menubar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="navbar" className="sticky-top shadow-sm">
      <section id="top-header" className="bg-dark">
        <div className="p-1 p-md-1">
          <Container>
            <Row className="justify-content-center">
              <Col
                md={3}
                xs={6}
                sm={6}
                className="align-self-center d-none d-md-block"
              >
                <div className="py-md-1 text-center text-md-start">
                  <a
                    href="https://www.facebook.com/glowoverseaseducation"
                    target="_blank"
                    className="px-md-2 px-1"
                  >
                    <i className="fab fa-facebook-f me-1"></i>
                  </a>
                  <a
                    href="https://twitter.com/GlowOverseas"
                    target="_blank"
                    className="px-md-2 px-1"
                  >
                    <i className="fab fa-twitter me-1"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCjYolwMMKKnzceHVQnJnmSQ"
                    target="_blank"
                    className="px-md-2 px-1"
                  >
                    <i className="fab fa-youtube me-1"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/glowoverseaseducation/"
                    target="_blank"
                    className="px-md-2 px-1"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </Col>
              <Col md={3} xs={6} sm={6} className="align-self-center">
                <div className="py-md-2 text-center">
                  <a href="tel:07829290299">
                    <i className="fab fa-whatsapp px-md-2"></i>
                    <i className="fas fa-phone-volume px-md-2"></i> +91
                    78292 90299
                  </a>
                </div>
              </Col>
              <Col md={3} xs={6} sm={6} className="align-self-center">
                <div className="py-md-2 text-center">
                  <a href="tel:09513332386">
                    <i className="fab fa-whatsapp px-md-2"></i>
                    <i className="fas fa-phone-volume px-md-2"></i> +91
                    95133 32386
                  </a>
                </div>
              </Col>
              <Col
                md={3}
                xs={6}
                sm={6}
                className="align-self-center d-none d-md-block"
              >
                <div className="py-md-2 text-center">
                  <a as={Link} to="mailto:glowoverseasedu@gmail.com">
                    <i
                      className="fa fa-envelope px-md-2 px-1"
                      aria-hidden="true"
                    ></i>
                    glowoverseasedu@gmail.com
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        className="d-none d-md-block"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <Image src={Logo} className="img-fluid" alt="Logo"></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto mx-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About Us
              </Nav.Link>
              <NavDropdown title="MBBS in Abroad " id="collasible-nav-dropdown">
                {/* <NavDropdown
                  title="MBBS in Ukraine"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-ukraine"
                >
                  <NavDropdown.Item as={NavLink} to="/black-sea-national-medical-university">
                    Black Sea National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/ivano-frankvisk-national-medical-university">
                    Ivano Frankvisk National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/kharkiv-international-medical-university">
                    Kharkiv International Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/taras-shevchenko-national-medical-university">
                    Taras Shevchenko National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/kharkiv-national-medical-university">
                    Kharkiv National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/vinnitsa-national-medical-university">
                    Vinnitsa National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/bukovinian-state-medical-university">
                    bukovinian State Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/dnipropetrovsk-state-medical-university">
                    Dnipropetrovsk State Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/zaporizhzhia-state-medical-university">
                    Zaporizhzhia State Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/v-n-karazin-kharkiv-national-medical-university">
                    V. N. Karazin National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/oo-bogomolets-national-medical-university">
                    Bogomolets National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/lviv-national-medical-university">
                    Lviv National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/poltava-state-medical-university">
                    Poltava State Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/kyiv-medical-university">
                    Kyiv Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="">
                    Ternopil State Medical University
                  </NavDropdown.Item>
                </NavDropdown> */}

                <NavDropdown
                  title="MBBS in Georgia"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-georgia"
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-georgia/batumi-shota-rustaveli-state-medical-university"
                  >
                    Batumi Shota Rustaveli State Medical University
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-georgia/akaki-tsereteli-state-medical-university"
                  >
                    Akaki Tsereteli State University Faculty of Medicine
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-georgia/tbilisi-state-medical-university"
                  >
                    Tbilisi State Medical University
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-georgia/caucasus-international-medical-university"
                  >
                    Caucasus International Medical University
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-georgia/david-vildiani-medical-university"
                  >
                    David Tvildiani Medical University
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-georgia/petre-shotadze-tbilisi-medical-academy"
                  >
                    Petre Shotadze Tbilisi Medical Academy Faculty of Medicine
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-georgia/european-university"
                  >
                    European University Faculty of Medicine
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-georgia/georgian-american-university"
                  >
                    Georgian American University
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-georgia/ivane-javakhishvili"
                  >
                    Ivane Javakhishvili
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="MBBS in Philippines"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-philippines"
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-philippines/ama-university"
                  >
                    AMA University
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-philippines/university-of-perpetual-help"
                  >
                    University of Perpetual Help
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-philippines/davao-medical-college"
                  >
                    Davao Medical College
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-philippines/our-lady-of-fatima-university"
                  >
                    Our Lady of Fatima University
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-philippines/emilio-aguinaldo-college"
                  >
                    Emilio Aguinaldo College of Medicine
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="MBBS in Russia"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-russia"
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-russia/crimea-state-medical-university"
                  >
                    Crimea State Medical University
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-russia/kazan-federal-university4"
                  >
                    Kazan Federal University
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-russia/lobachevsky-state-Medical-University"
                  >
                    Lobachevsky State Medical University
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-russia/kabardino-balkariand-state-medical-university"
                  >
                    Kabardino Balkarian State Medical University
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-russia/kirov-state-medical-university"
                  >
                    Kirov State Medical University
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-russia/north-ossetian-state-medical-university"
                  >
                    North-Ossetian State Medical University
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-russia/north-caucasian-state-humanitarian"
                  >
                    North Caucasian State Humanitarian Technological Academy
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  to="mbbs-in-armenia"
                  title="MBBS in Armenia"
                  id="collasible-nav-dropdown"
                  drop="end"
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to="mbbs-in-armenia/yerevan-haybusak-university-faculty-of-medicine"
                  >
                    Yerevan Haybusak University Faculty of Medicine
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="mbbs-in-armenia/yerevan-state-medical-university"
                  >
                    Yerevan State Medical University
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="MBBS in USA"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-usa"
                >
                  {/* <NavDropdown.Item as={NavLink} to="">
                    Spartan University of Health and Science
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="">
                    American University of Barbados
                  </NavDropdown.Item>
                   */}
                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-usa/texila-american-university-college"
                  >
                    Texila American University College of Medicine
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="MBBS in Poland"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-poland"
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-poland/medical-university-of-gdansk"
                  >
                    Medical University of Gdansk
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-poland/medical-university-of-warsaw"
                  >
                    Medical University of Warsaw
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="MBBS in Kyrgystan"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-kyrgystan"
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-kyrgystan/osh-state-medical-university"
                  >
                    Osh State Medical University
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    as={NavLink}
                    to="/mbbs-in-kyrgystan/salymbekov-university"
                  >
                    Salymbekov University Faculty of Medicine
                  </NavDropdown.Item>
                </NavDropdown>

                {/* <NavDropdown
                  title="MBBS in Kazakhstan"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-kazakhstan"
                >
                  <NavDropdown.Item as={NavLink} to="/international-medical-school">
                    International Medical School
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/al-farabi-national-medical-university">
                    Al-Farabi National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/jsc-national-medical-university">
                    JSC National Medical University
                  </NavDropdown.Item>
                  
                </NavDropdown> */}

                {/* <NavDropdown
                  title="MBBS in Egypt"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-egypt"
                >
                  <NavDropdown.Item as={NavLink} to="/ain-shyams-university">
                    Ain Shyams University Faculty of Medicine
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/cairo-university">
                    Cairo University Faculty of Medicine
                  </NavDropdown.Item>
                </NavDropdown> */}

                {/* <NavDropdown
                  title="MBBS in China"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-china"
                >
                  <NavDropdown.Item as={NavLink} to="/china-medical-university">
                    China Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/dalian-medical-university">
                    Dalian Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/fujian-medical-university">
                    Fujian Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/jilin-medical-university">
                    Jilin Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/kunming-medical-university">
                    Kunming Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/nanjing-medical-university">
                    Nanjing Medical University
                  </NavDropdown.Item>
                </NavDropdown> */}

                {/* <NavDropdown
                  title="MBBS in Belarus"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-belarus"
                >
                  <NavDropdown.Item as={NavLink} to="/mbbs-in-belarus/belarusian-state-medical-university">
                    Belarusian State Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/grodno-state-medical-university">
                    Grodno State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/vitebsk-state-medical-university">
                    Vitbsk State Medical University
                  </NavDropdown.Item>
                </NavDropdown> */}

                {/* <NavDropdown
                  title="MBBS in Uzbekistan"
                  id="collasible-nav-dropdown"
                  drop="end"
                >
                  <NavDropdown.Item as={NavLink} to="/fergana-medical-institute">
                    Fergana Medical Institute
                  </NavDropdown.Item>
                </NavDropdown> */}
              </NavDropdown>

              <Nav.Link as={NavLink} to="/gallery">
                Gallery
              </Nav.Link>
              {/* <Nav.Link as={NavLink} to="">Franchise Enquiry</Nav.Link> */}
              {/* <Nav.Link as={NavLink} to="">Blog</Nav.Link> */}
              <Nav.Link as={NavLink} to="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                onClick={handleShow}
                className="text-capitalize btn-success rounded text-white"
              >
                <i className="fa fa-download px-1"></i>Brochure
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar key="lg" bg="primary" expand="lg" className="d-block d-md-none">
        <Container fluid>
          <Navbar.Brand to="/">
            <Image src={Logo} className="img-fluid" alt="Logo"></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="start"
          >
            <Offcanvas.Header closeButton className="bg-info">
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <Navbar.Brand to="/">
                  <Image src={Logo} className="img-fluid" alt="Logo"></Image>
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                id="mobile-nav"
              >
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about">
                  About Us
                </Nav.Link>
                <NavDropdown
                  title="MBBS in Abroad"
                  id="collasible-nav-dropdown"
                >
                  {/* <NavDropdown
                  title="MBBS in Ukraine"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-ukraine"
                >
                  <NavDropdown.Item as={NavLink} to="/black-sea-national-medical-university">
                    Black Sea National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/ivano-frankvisk-national-medical-university">
                    Ivano Frankvisk National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/kharkiv-international-medical-university">
                    Kharkiv International Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/taras-shevchenko-national-medical-university">
                    Taras Shevchenko National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/kharkiv-national-medical-university">
                    Kharkiv National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/vinnitsa-national-medical-university">
                    Vinnitsa National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/bukovinian-state-medical-university">
                    bukovinian State Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/dnipropetrovsk-state-medical-university">
                    Dnipropetrovsk State Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/zaporizhzhia-state-medical-university">
                    Zaporizhzhia State Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/v-n-karazin-kharkiv-national-medical-university">
                    V. N. Karazin National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/oo-bogomolets-national-medical-university">
                    Bogomolets National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/lviv-national-medical-university">
                    Lviv National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/poltava-state-medical-university">
                    Poltava State Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/kyiv-medical-university">
                    Kyiv Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="">
                    Ternopil State Medical University
                  </NavDropdown.Item>
                </NavDropdown> */}

                  <NavDropdown
                    title="MBBS in Georgia"
                    id="collasible-nav-dropdown"
                    drop="end"
                    to="/mbbs-in-georgia"
                  >
                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-georgia/batumi-shota-rustaveli-state-medical-university"
                    >
                      Batumi Shota Rustaveli State Medical University
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-georgia/akaki-tsereteli-state-medical-university"
                    >
                      Akaki Tsereteli State University Faculty of Medicine
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-georgia/tbilisi-state-medical-university"
                    >
                      Tbilisi State Medical University
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-georgia/caucasus-international-medical-university"
                    >
                      Caucasus International Medical University
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-georgia/david-vildiani-medical-university"
                    >
                      David Tvildiani Medical University
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-georgia/petre-shotadze-tbilisi-medical-academy"
                    >
                      Petre Shotadze Tbilisi Medical Academy Faculty of Medicine
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-georgia/european-university"
                    >
                      European University Faculty of Medicine
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-georgia/georgian-american-university"
                    >
                      Georgian American University
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-georgia/ivane-javakhishvili"
                    >
                      Ivane Javakhishvili
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="MBBS in Philippines"
                    id="collasible-nav-dropdown"
                    drop="end"
                    to="/mbbs-in-philippines"
                  >
                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-philippines/ama-university"
                    >
                      AMA University
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-philippines/university-of-perpetual-help"
                    >
                      University of Perpetual Help
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-philippines/davao-medical-college"
                    >
                      Davao Medical College
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-philippines/our-lady-of-fatima-university"
                    >
                      Our Lady of Fatima University
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-philippines/emilio-aguinaldo-college"
                    >
                      Emilio Aguinaldo College of Medicine
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="MBBS in Russia"
                    id="collasible-nav-dropdown"
                    drop="end"
                    to="/mbbs-in-russia"
                  >
                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-russia/crimea-state-medical-university"
                    >
                      Crimea State Medical University
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-russia/kazan-federal-university4"
                    >
                      Kazan Federal University
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-russia/lobachevsky-state-Medical-University"
                    >
                      Lobachevsky State Medical University
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-russia/kabardino-balkariand-state-medical-university"
                    >
                      Kabardino Balkarian State Medical University
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-russia/kirov-state-medical-university"
                    >
                      Kirov State Medical University
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-russia/north-ossetian-state-medical-university"
                    >
                      North-Ossetian State Medical University
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-russia/north-caucasian-state-humanitarian"
                    >
                      North Caucasian State Humanitarian Technological Academy
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    to="mbbs-in-armenia"
                    title="MBBS in Armenia"
                    id="collasible-nav-dropdown"
                    drop="end"
                  >
                    <NavDropdown.Item
                      as={NavLink}
                      to="mbbs-in-armenia/yerevan-haybusak-university-faculty-of-medicine"
                    >
                      Yerevan Haybusak University Faculty of Medicine
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="mbbs-in-armenia/yerevan-state-medical-university"
                    >
                      Yerevan State Medical University
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="MBBS in USA"
                    id="collasible-nav-dropdown"
                    drop="end"
                    to="/mbbs-in-usa"
                  >
                    {/* <NavDropdown.Item as={NavLink} to="">
                    Spartan University of Health and Science
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="">
                    American University of Barbados
                  </NavDropdown.Item>
                   */}
                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-usa/texila-american-university-college"
                    >
                      Texila American University College of Medicine
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="MBBS in Poland"
                    id="collasible-nav-dropdown"
                    drop="end"
                    to="/mbbs-in-poland"
                  >
                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-poland/medical-university-of-gdansk"
                    >
                      Medical University of Gdansk
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-poland/medical-university-of-warsaw"
                    >
                      Medical University of Warsaw
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="MBBS in Kyrgystan"
                    id="collasible-nav-dropdown"
                    drop="end"
                    to="/mbbs-in-kyrgystan"
                  >
                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-kyrgystan/osh-state-medical-university"
                    >
                      Osh State Medical University
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to="/mbbs-in-kyrgystan/salymbekov-university"
                    >
                      Salymbekov University Faculty of Medicine
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/* <NavDropdown
                  title="MBBS in Kazakhstan"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-kazakhstan"
                >
                  <NavDropdown.Item as={NavLink} to="/international-medical-school">
                    International Medical School
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/al-farabi-national-medical-university">
                    Al-Farabi National Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/jsc-national-medical-university">
                    JSC National Medical University
                  </NavDropdown.Item>
                  
                </NavDropdown> */}

                  {/* <NavDropdown
                  title="MBBS in Egypt"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-egypt"
                >
                  <NavDropdown.Item as={NavLink} to="/ain-shyams-university">
                    Ain Shyams University Faculty of Medicine
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/cairo-university">
                    Cairo University Faculty of Medicine
                  </NavDropdown.Item>
                </NavDropdown> */}

                  {/* <NavDropdown
                  title="MBBS in China"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-china"
                >
                  <NavDropdown.Item as={NavLink} to="/china-medical-university">
                    China Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/dalian-medical-university">
                    Dalian Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/fujian-medical-university">
                    Fujian Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/jilin-medical-university">
                    Jilin Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/kunming-medical-university">
                    Kunming Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/nanjing-medical-university">
                    Nanjing Medical University
                  </NavDropdown.Item>
                </NavDropdown> */}

                  {/* <NavDropdown
                  title="MBBS in Belarus"
                  id="collasible-nav-dropdown"
                  drop="end"
                  to="/mbbs-in-belarus"
                >
                  <NavDropdown.Item as={NavLink} to="/mbbs-in-belarus/belarusian-state-medical-university">
                    Belarusian State Medical University
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item as={NavLink} to="/grodno-state-medical-university">
                    Grodno State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/vitebsk-state-medical-university">
                    Vitbsk State Medical University
                  </NavDropdown.Item>
                </NavDropdown> */}

                  {/* <NavDropdown
                  title="MBBS in Uzbekistan"
                  id="collasible-nav-dropdown"
                  drop="end"
                >
                  <NavDropdown.Item as={NavLink} to="/fergana-medical-institute">
                    Fergana Medical Institute
                  </NavDropdown.Item>
                </NavDropdown> */}
                </NavDropdown>

                <Nav.Link as={NavLink} to="/gallery">
                  Gallery
                </Nav.Link>
                {/* <Nav.Link as={NavLink} to="">Franchise Enquiry</Nav.Link> */}
                {/* <Nav.Link as={NavLink} to="">Blog</Nav.Link> */}
                <Nav.Link as={NavLink} to="/contact">
                  Contact Us
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <BrochureDownload
        show={show}
        handleClose={handleClose}
        title="Download the Brochure."
      />
    </div>
  );
};

export default Menubar;

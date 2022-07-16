import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";
import Logo from "../../Images/logo.png";

const Menubar = () => {
  return (
    <div id="navbar" className="sticky-top shadow-sm">
      <section id="top-header" className="bg-dark">
        <div className="p-1 p-md-1">
          <Container>
            <Row className="justify-content-center">
              <Col md={3} className="align-self-center">
                <div className="py-md-1 text-center text-md-start">
                  <a
                    href="https://www.facebook.com/glowoverseaseducation"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f me-1"></i>
                  </a>{" "}
                  <a href="https://twitter.com/GlowOverseas" target="_blank">
                    <i className="fab fa-twitter me-1"></i>
                  </a>{" "}
                  <a
                    href="https://www.youtube.com/channel/UCjYolwMMKKnzceHVQnJnmSQ me-1"
                    target="_blank"
                  >
                    <i className="fab fa-youtube me-1"></i>
                  </a>{" "}
                  <a
                    href="https://www.instagram.com/glowoverseaseducation/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </Col>
              <Col md={3} className="align-self-center">
                <div className="py-md-2 text-center">
                  <a href="tel:07829290299">
                    <i className="fab fa-whatsapp me-1"></i>{" "}
                    <i className="fas fa-phone-volume"></i> +91 78292 90299
                  </a>
                  {/* <!-- <a href="tel:09688360160"><i className="fab fa-whatsapp"></i> 	<i className="fas fa-phone-volume"></i> +91 78292 90299</a> --> */}
                </div>
              </Col>
              <Col md={3} className="align-self-center">
                <div className="py-md-2 text-center">
                  <a href="tel:09513332386">
                    <i className="fab fa-whatsapp me-1"></i>{" "}
                    <i className="fas fa-phone-volume"></i> +91 95133 32386
                  </a>
                  {/* <!-- <a href="tel:09688360160"><i className="fab fa-whatsapp"></i> 	<i className="fas fa-phone-volume"></i> +91 78292 90299</a> --> */}
                </div>
              </Col>
              <Col md={3} className="align-self-center">
                <div className="py-md-2 text-center">
                  <a href="mailto:glowoverseasedu@gmail.com">
                    <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                    glowoverseasedu@gmail.com
                  </a>
                </div>
              </Col>
              {/* <Col md={1} className="align-self-center">
                <div className="">
                  <Button className="sm">Apply </Button>
                </div>
              </Col> */}
            </Row>
          </Container>
        </div>
      </section>

      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Image src={Logo} className="img-fluid" alt="Logo"></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <NavDropdown title="MBBS in Abroad " id="collasible-nav-dropdown">
                <NavDropdown
                  title="MBBS in Ukraine"
                  id="collasible-nav-dropdown"
                  drop="end"
                  href="/mbbs-in-ukraine"
                >
                  <NavDropdown.Item href="/black-sea-national-medical-university">
                  Black Sea National Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/ivano-frankvisk-national-medical-university">
                  Ivano Frankvisk National Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/kharkiv-international-medical-university">
                    Kharkiv International Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/taras-shevchenko-national-medical-university">
                    Taras Shevchenko National Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/kharkiv-national-medical-university">
                    Kharkiv National Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/vinnitsa-national-medical-university">
                    Vinnitsa National Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/bukovinian-state-medical-university">
                    bukovinian State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/dnipropetrovsk-state-medical-university">
                    Dnipropetrovsk State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/zaporizhzhia-state-medical-university">
                    Zaporizhzhia State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/v-n-karazin-kharkiv-national-medical-university">
                    V. N. Karazin National Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/oo-bogomolets-national-medical-university">
                    Bogomolets National Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/lviv-national-medical-university">
                    Lviv National Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/poltava-state-medical-university">
                    Poltava State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/kyiv-medical-university">
                    Kyiv Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">
                    Ternopil State Medical University
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="MBBS in USA"
                  id="collasible-nav-dropdown"
                  drop="end"
                  href="/mbbs-in-usa"
                >
                  {/* <NavDropdown.Item href="">
                    Spartan University of Health and Science
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="">
                    American University of Barbados
                  </NavDropdown.Item>
                  <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="/texila-american-university-college">
                    Texila American University College of Medicine
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="MBBS in Poland"
                  id="collasible-nav-dropdown"
                  drop="end"
                  href="/mbbs-in-poland"
                >
                  <NavDropdown.Item href="/medical-university-of-gdansk">
                    Medical University of Gdansk
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/medical-university-of-warsaw">
                    Medical University of Warsaw
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="MBBS in Kyrgystan"
                  id="collasible-nav-dropdown"
                  drop="end"
                  href="/mbbs-in-kyrgystan"
                >
                  <NavDropdown.Item href="/osh-state-medical-university">
                    Osh State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/salymbekov-university">
                    Salymbekov University Faculty of Medicine
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="MBBS in Kazakhstan"
                  id="collasible-nav-dropdown"
                  drop="end"
                  href="/mbbs-in-kazakhstan"
                >
                  <NavDropdown.Item href="/international-medical-school">
                    International Medical School
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/al-farabi-national-medical-university">
                    Al-Farabi National Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/jsc-national-medical-university">
                    JSC National Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>

                <NavDropdown
                  title="MBBS in Georgia"
                  id="collasible-nav-dropdown"
                  drop="end"
                  href="/mbbs-in-georgia"
                >
                  <NavDropdown.Item href="">
                    New Vision University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/batumi-shota-rustaveli-state-medical-university">
                    Batumi Shota Rustaveli State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/akaki-tsereteli-state">
                    Akaki Tsereteli State University Faculty of Medicine
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/tbilisi-state-medical-university">
                    Tbilisi State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/caucasus-international-medical-university">
                    Caucasus International Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/david-vildiani-medical-university">
                    David Tvildiani Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/petre-shotadze-tbilisi-medical-academy">
                    Petre Shotadze Tbilisi Medical Academy Faculty of Medicine
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/university-of-georgia-school">
                    University of Georgia School of Health Sciences and Public
                    Health
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/european-university">
                    European University Faculty of Medicine
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/georgian-american-university">
                    Georgian American University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/ivane-javakhishvili">
                  Ivane Javakhishvili
                  </NavDropdown.Item>

                </NavDropdown>

                <NavDropdown
                  title="MBBS in Philippines"
                  id="collasible-nav-dropdown"
                  drop="end"
                  href="/mbbs-in-phillipines"
                >
                  <NavDropdown.Item href="/ama-university">AMA University</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/university-of-perpetual-help">
                    University of Perpetual Help
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/davao-medical-college">
                    Davao Medical College
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/our-lady-of-fatima-university">
                    Our Lady of Fatima University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/emilio-aguinaldo-college">
                    Emilio Aguinaldo College of Medicine
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="MBBS in Russia"
                  id="collasible-nav-dropdown"
                  drop="end"
                  href="/mbbs-in-russia"
                >
                  <NavDropdown.Item href="/crimea-state-medical-university">
                    Crimea State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/kazan-federal-university4">
                    Kazan Federal University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/lobachevsky-state-Medical-University">
                    Lobachevsky State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/kabardino-balkariand-state-medical-university">
                    Kabardino Balkarian State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/kazan-state-medical-university">
                    Kazan State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/kirov-state-medical-university">
                    Kirov State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/north-ossetian-state-medical-university">
                    North-Ossetian State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/ingush-state-medical-academy">
                    Ingush State Medical Academy
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/north-caucasian-state-humanitarian">
                    North Caucasian State Humanitarian Technological Academy
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/bashkir-state-medical-university">
                    Bashkir State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/krusk-state-medical-university">
                  Krusk State Medical University
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                href="mbbs-in-armenia"
                  title="MBBS in Armenia"
                  id="collasible-nav-dropdown"
                  drop="end"
                >
                  <NavDropdown.Item href="mbbs-in-armenia/yerevan-haybusak-university">
                    Yerevan Haybusak University Faculty of Medicine
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="mbbs-in-armenia/yerevan-state-medical-university">
                  Yerevan State Medical University
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="MBBS in Egypt"
                  id="collasible-nav-dropdown"
                  drop="end"
                  href="/mbbs-in-egypt"
                >
                  <NavDropdown.Item href="/ain-shyams-university">
                    Ain Shyams University Faculty of Medicine
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/cairo-university">
                    Cairo University Faculty of Medicine
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="MBBS in China"
                  id="collasible-nav-dropdown"
                  drop="end"
                  href="/mbbs-in-china"
                >
                  <NavDropdown.Item href="/china-medical-university">
                    China Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/dalian-medical-university">
                    Dalian Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/fujian-medical-university">
                    Fujian Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/jilin-medical-university">
                    Jilin Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/kunming-medical-university">
                    Kunming Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/nanjing-medical-university">
                    Nanjing Medical University
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="MBBS in Belarus"
                  id="collasible-nav-dropdown"
                  drop="end"
                  href="/mbbs-in-belarus"
                >
                  <NavDropdown.Item href="/belarusian-state-medical-university">
                    Belarusian State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/grodno-state-medical-university">
                    Grodno State Medical University
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/vitebsk-state-medical-university">
                    Vitbsk State Medical University
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  title="MBBS in Uzbekistan"
                  id="collasible-nav-dropdown"
                  drop="end"
                >
                  <NavDropdown.Item href="/fergana-medical-institute">
                  Fergana Medical Institute
                  </NavDropdown.Item>
                  
                </NavDropdown>

              </NavDropdown>

              

              <Nav.Link href="/gallery">Gallery</Nav.Link> 
              {/* <Nav.Link href="">Franchise Enquiry</Nav.Link> */}
              {/* <Nav.Link href="">Blog</Nav.Link> */}
              <Nav.Link href="">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;

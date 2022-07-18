import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Abt from "../Images/about/about-us-1.jpg";
import Prashanth from "../Images/prashanth.png";
import Saranya from "../Images/saranya.png";
import Abt2 from "../Images/about/about-us.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MBBS in Abroad | Glowoverseas Education | GOE</title>
        <link rel="canonical" href="https://glowoverseas.com/about" />
        <meta
          name="description"
          content="GOE is one of the best MBBS in Abroad Consultants in Bangalore. Call Us for Free Counselling
                    "
        />
      </Helmet>
      <section id="abt1">
        <Container>
          <Row>
            <Col md={12}>
              <div className="py-md-5">
                <h2 className="">About Us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      About Us
                    </li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="section-2" className="py-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className="align-self-center">
              <div className="">
                <p className="text-justify">
                  Glow Overseas Education is one of the finest MBBS abroad
                  consultants in India, we are a team of experts who have years
                  of experience in counseling students from various Countries
                  who acknowledge Time and Money. We help students in every
                  aspect around the clock.
                </p>
                <p className="text-justify">
                  We assist in the quicker and effective process, taking
                  responsibility for the students from end to end process. The
                  sole purpose of our consultancy is to offer you valuable
                  information as per the government rules & regulations, And
                  never too late before someone could say I told you so!
                </p>
                <p className="text-justify">
                  Glow Overseas Education is inclined to necessitate services
                  that help you choose the right university within your budget.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <Image src={Abt} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="abt-1" className="py-md-5 bg-light">
        <Container>
          <div className="">
            <h2 className="text-center text-info">Directors of GOE</h2>
          </div>
          <Row>
            <Col md={6}>
              <div className="text-center bg-white p-3 m-2">
                <Image
                  src={Prashanth}
                  alt=""
                  className="img-fluid rounded-circle"
                />
                <h2 className="py-md-2 text-info">Prashanth G</h2>
                <h4 className="py-2">
                  <i>Directors Message</i>
                </h4>
                <p className="py-2 ps-md-1 pe-md-1">
                  <b>Dream</b> bigger. “If you can <b>dream</b> it, you can do
                  it.” each candidate is like an extended family member to us.
                  And like family, we understand and anticipate your needs,
                  matching the right University.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center bg-white p-3 m-2">
                <Image
                  src={Saranya}
                  alt=""
                  className="img-fluid rounded-circle"
                />
                <h2 className="py-md-2 text-info">
                  <i>Saranya S</i>
                </h2>
                <h4 className="py-2">
                  <i>Directors Message</i>
                </h4>
                <p className="py-md-2 ps-md-1 pe-md-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit itaque provident fuga repellat, facere et maiores quia
                  nisi, accusamus quaerat aut eius ea alias blanditiis fugiat
                  nihil unde eveniet hic!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="why-goe" className="py-md-5">
        <Container fluid className="">
          <Row className="justify-content-center m-0">
            <Col md={6} className="align-self-center">
              <div className="section-1 p-5">
                <h2 className="">Why GOE?</h2>
                <ul className="">
                  <li>Professionalism</li>
                  <li>Transparency</li>
                  <li>Integrity</li>
                  <li>24/7 through phone</li>
                  <li>Passionate about clients</li>
                  <li>Treat Each one with respect</li>
                </ul>
              </div>
            </Col>
            <Col md={6} className="">
              <div className="section-2">
                <div className="text-center">
                  <Image src={Abt2} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="m-v" className="py-md-5 bg-light">
        <Container>
          <div className="">
            <Row>
              <Col md={6}>
                <div className="mission m-2 border-0 bg-white p-3">
                  <div className="text-center">
                    <h3 className="pt-3 pb-3 text-info">Mission</h3>
                    <i className="fas fa-bullseye"></i>
                    <p className="pt-2 pb-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quos labore doloremque esse perspiciatis explicabo ex fuga
                      quo illum, deserunt quaerat ducimus! Voluptate, earum
                      adipisci incidunt dolor perferendis aperiam numquam?
                      Aperiam.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="vision m-2 border-0 bg-white p-3">
                  <div className="text-center">
                    <h3 className="pt-3 pb-3 text-info">Vision</h3>
                    <i className="fas fa-eye"></i>
                    <p className="pt-2 pb-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quos labore doloremque esse perspiciatis explicabo ex fuga
                      quo illum, deserunt quaerat ducimus! Voluptate, earum
                      adipisci incidunt dolor perferendis aperiam numquam?
                      Aperiam.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section id="services" className="py-md-5">
        <Container>
          <div className="">
            <h2 className="text-center text-info py-3">
              Services Rendered by GOE
            </h2>
          </div>
          <div className="m-2">
            <Row className="justify-content-center">
              <Col md={3}>
                <div className="text-center deco border-0">
                  <h5 className="py-md-2 px-2 text-white bg-info">
                    Counselling
                  </h5>
                  <p className="py-md-2 px-2">
                    Free Counselling to the students guiding according to the
                    government approavals.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">University</h5>
                  <p className="py-md-2">
                    You will choose the University & country.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">Admission Process</h5>
                  <p className="py-md-2">
                    University will issue Admission letter & invitation letter
                    favour of the student.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">Admission in University</h5>
                  <p className="py-md-2">
                    Guide & Arrange for your admission process in the Hostel as
                    well as the Institution.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="m-2">
            <Row className="justify-content-center">
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">Apostil from MOA</h5>
                  <p className="py-md-2">
                    Apostil of Qualifications Documents from the Ministry of
                    External Affairs, Govt. of India.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">Sim Card</h5>
                  <p className="py-md-2">
                    Sim Card will be made available immediately on arrival in
                    destination country only in few countries.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">Foreign Exchange</h5>
                  <p className="py-md-2">
                    Provide Assistance & Guidance for Purchase of Foreign
                    Exchange as per the current rates.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">Forex Card</h5>
                  <p className="py-md-2">
                    Provide Assistance for Forex Card Services.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="m-2">
            <Row className="justify-content-center">
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">Visa</h5>
                  <p className="py-md-2">
                    Provide assistance & Guidance for all documentation required
                    for Visa.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">Air Ticket</h5>
                  <p className="py-md-2">
                    Provide assistance for purchase of Air Ticket at Lowest
                    Rates.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">AirPort Pickup and Escort</h5>
                  <p className="py-md-2">
                    Arrangement for AirPort pickup & transport to Hostel &
                    allotment of accommodation.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">Hostel Facilities</h5>
                  <p className="py-md-2">
                    We guide & arrange for Hostel room allotment.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="m-2">
            <Row className="justify-content-center">
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">Student Visa Conversion / Renewal</h5>
                  <p className="py-md-2">
                    Assistance in applying for Student or extension or Renewal
                    of Visa in destination Country.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">Attestation from HRD Ministry</h5>
                  <p className="py-md-2">
                    Attestation of Qualification Documents from the Ministry of
                    HRD. Govt. of India.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">Available in Destination Country</h5>
                  <p className="py-md-2">
                    We are available in each country for student support to
                    ebsure that our Student does not face any problem in
                    Studies.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2">
                    General Medical Health Certificate
                  </h5>
                  <p className="py-md-2">
                    Assistance in Medical checkup where ever required
                    (Confirming absence of HIV & Fitness).
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section id="videos" className="py-md-5 bg-light">
        <Container>
          <div className="">
            <h2 className="text-center text-info py-md-3 py-3">Videos</h2>
          </div>
          <div className="m-2">
            <Row>
              <Col md={3}>
                <div className="text-center">
                  <iframe
                    src="https://www.youtube.com/embed/5T_m5_jQQIU"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center">
                  <iframe
                    src="https://www.youtube.com/embed/1wQJ4h1ibAE"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center">
                  <iframe
                    src="https://www.youtube.com/embed/1wQJ4h1ibAE"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center">
                  <iframe
                    src="https://www.youtube.com/embed/1wQJ4h1ibAE"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Col>
            </Row>
          </div>
          <div className="m-2">
            <Row>
              <Col md={3}>
                <div className="text-center">
                  <iframe
                    src="https://www.youtube.com/embed/5T_m5_jQQIU"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center">
                  <iframe
                    src="https://www.youtube.com/embed/1wQJ4h1ibAE"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center">
                  <iframe
                    src="https://www.youtube.com/embed/1wQJ4h1ibAE"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center">
                  <iframe
                    src="https://www.youtube.com/embed/1wQJ4h1ibAE"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;

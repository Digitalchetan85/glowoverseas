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
                  aspect around the clock.             <br />
                
                  We assist in the quicker and effective process, taking
                  responsibility for the students from end to end process. The
                  sole purpose of our consultancy is to offer you valuable
                  information as per the government rules & regulations, And
                  never too late before someone could say I told you so!
                <br />
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
                <div className="mission m-2 border-0 bg-white p-3" style={{ height:475}}>
                  <div className="text-center">
                    <h3 className="pt-3 pb-3 text-info">Mission</h3>
                    <i className="fas fa-bullseye"></i>
                    <p className="pt-1 pb-1">
                    We Aim To Reach The Scope of International Education To All Aspiring Student Communities of India. We Vow To Motivate And Guide Candidates To Realize Their Dream.
                    </p>
                    <p className="pt-1 pb-1">To create and foster high educational standards for our students by placing them in an institute with excellence in teaching, training, patient care, and medical research.</p> 
                    <p className="pt-1 pb-1">To execute every process of the study life cycle efficiently and effectively to achieve optimal result.</p>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="vision m-2 border-0 bg-white p-3" style={{ height:475}}>
                  <div className="text-center">
                    <h3 className="pt-3 pb-3 text-info">Vision</h3>
                    <i className="fas fa-eye"></i>
                    <p className="pt-2 pb-2 ps-md-3 pe-md-3">
                    To create outstanding medical practitioners who promote medical excellence, disease healing, and service to the communities as the doctors of the world. To be vital part of students' aspiring medicine study abroad and help them move towards their career goals.
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
                
                  <h5 className="py-md-2 px-1 text-white bg-info">
                  <i className="fa-solid fa-users pe-3"></i>    Counselling
                  </h5>
                  <p className="py-md-2 px-2">
                    Free Counselling to the students guiding according to the
                    government approavals.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2"><i className="fa-solid fa-building-columns pe-3"></i>University</h5>
                  <p className="py-md-2">
                    You will choose the University & country.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                <h5 className="py-md-2"><i className="fa-solid fa-pen-to-square pe-3"></i>Admission Process</h5>
                  <p className="py-md-2">
                    University will issue Admission letter & invitation letter
                    favour of the student.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2"><i className="fa-solid fa-school pe-3"></i>Admission in University</h5>
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
                  <h5 className="py-md-2"><i class="fas fa-certificate pe-3"></i>Apostile from MOA</h5>
                  <p className="py-md-2">
                    Apostile of Qualifications Documents from the Ministry of
                    External Affairs, Govt. of India.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2"><i className="fa-solid fa-sim-card pe-3"></i>Sim Card</h5>
                  <p className="py-md-2">
                    Sim Card will be made available immediately on arrival in
                    destination country only in few countries.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2"><i className="fa-solid fa-coins pe-3"></i>Foreign Exchange</h5>
                  <p className="py-md-2">
                    Provide Assistance & Guidance for Purchase of Foreign
                    Exchange as per the current rates.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2"><i className="fa-solid fa-credit-card pe-3"></i>Forex Card</h5>
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
                  <h5 className="py-md-2"><i className="fa-brands fa-cc-visa pe-3"></i>Visa</h5>
                  <p className="py-md-2">
                    Provide assistance & Guidance for all documentation required
                    for Visa.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2"><i className="fa-solid fa-ticket pe-3"></i>Air Ticket</h5>
                  <p className="py-md-2">
                    Provide assistance for purchase of Air Ticket at Lowest
                    Rates.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2"><i class="fa-solid fa-user-shield pe-2"></i>AirPort Pickup and Escort</h5>
                  <p className="py-md-2">
                    Arrangement for AirPort pickup & transport to Hostel &
                    allotment of accommodation.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2"><i className="fa-solid fa-hotel pe-3"></i>Hostel Facilities</h5>
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
                  <h5 className="py-md-2"><i class="fa-brands fa-cc-visa pe-3"></i>Student Visa Conversion / Renewal</h5>
                  <p className="py-md-2">
                    Assistance in applying for Student or extension or Renewal
                    of Visa in destination Country.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2"><i className="fa-solid fa-landmark pe-3"></i>Attestation from HRD Ministry</h5>
                  <p className="py-md-2">
                    Attestation of Qualification Documents from the Ministry of
                    HRD. Govt. of India.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2"><i className="fa-solid fa-globe pe-3"></i>Available in Destination Country</h5>
                  <p className="py-md-2">
                    We are available in each country for student support to
                    ebsure that our Student does not face any problem in
                    Studies.
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="text-center deco">
                  <h5 className="py-md-2"><i className="fa-solid fa-file-medical pe-3"></i>
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

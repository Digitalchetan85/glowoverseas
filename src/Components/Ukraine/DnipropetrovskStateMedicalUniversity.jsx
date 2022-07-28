import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdmissionProcess from "../Includes/AdmissionProcess";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";
import OtherCountries from "../Includes/OtherCountries";
import UkraineUniversities from "../Includes/UkraineUniversities";
import img1 from "../../Images/mbbs-in-ukraine/medical-universities/dnipropetrovsk-medical-academy-of-health-ministry-of-ukraine.png";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

const DnipropetrovskStateMedicalUniversity = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {" "}
          Dnipropetrosk State Medical University | MBBS in Ukraine | GOE
        </title>
        <link
          rel="canonical"
          href="https://glowoverseas.com/mbbs-in-ukraine/dnipropetrovsk-state-medical-university"
        />
        <meta
          name="description"
          content="MBBS in Dnipropetrosk State Medical University is the best place to Study MBBS in Ukraine. Call Us for Free Counselling"
        />
      </Helmet>
      <div id="abt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="py-md-5">
                <h2>MBBS in Ukraine</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <a as={Link} to="/mbbs-in-ukraine">
                        MBBS in Ukraine
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dnipropetrosk State Medical University
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="country" className="pt-5 pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <div className="">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="text-info">
                        Dnipropetrosk State Medical University
                      </h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="university">
                        <p className="text-justify pb-2">
                          Dnipropetrovsk State Medical Academy (DSMA) – is the
                          centre of education, Science and Culture of
                          exceptionally industrial area of Dnieper, Ukraine. The
                          city of Dnipropetrovsk is the primary Industrial city
                          of Ukraine.Above than 40% industry of Ukraine is
                          situated in Dnipropetrovsk. It is known as the
                          industrial & manufacturer city of Ukraine..
                        </p>
                        <p className="text-justify pb-2">
                          The city is exceedingly created and settled in all
                          parts of life. Dnipropetrovsk State Medical Academy
                          (DSMA) is one of the most seasoned higher education
                          foundation of Ukraine having fourth (the most
                          astounding) level of accreditation in Ukraine.Dnipro
                          State Medical University (DSMU) is having the highest
                          (the 4th) level of accreditation among all
                          universities of Ukraine. In 1922 the Dnipro State
                          Medical University (DSMU) organized and edited two
                          scientific medical journals: “Ekaterynoslavsky Medical
                          Journal” and “New Surgical Archive”. When the Academy
                          created a single scientific society that was
                          theoretical, surgical, therapeutic, orthopedic, trauma
                          and pediatric sections.Dnipropetrovsk State Medical
                          University is the only in all over Ukraine, providing
                          training to students in all seven faculties and
                          preparatory department for foreign citizens.
                        </p>
                        <ul>
                                            <li>University Type - Government University</li>
                                            <li>Established in 1993.</li>
                                            <li>English Medium Courses</li>
                                            <li>MBBS course duration 6 years</li>
                                            <li>Recognized by MCI / WHO/ ECFMG</li>
                                            <li>Conducting MCI Coaching classes.</li>
                                            <li>Indian Food Available</li>
                                            <li>Good Hostel Facility available</li>
                                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <img
                          src={img1}
                          alt=""
                          className="img-fluid rounded shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="study-russia mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-info pt-2 pb-2">MBBS in Ukraine</h4>
                        <p className="text-justify">
                          Ukraine is a country in Eastern Europe. It is the
                          second-largest country in Europe after Russia, which
                          it borders to the east and north-east.. Ukraine is one
                          of the safest countries in the world. Ukraine is the
                          topmost country to study MBBS in Abroad for Indian
                          students compared to other countries ,Many of Indian
                          students already studying in the Top Medical
                          Universities in Ukraine. Ukraine Medical Universities
                          are approved by MCI / WHO.
                        </p>
                        <p className="p-2 text-justify">
                          In Ukraine, we have many Medical Universities are
                          there to achieve MBBS in Ukraine. We are providing all
                          the Medical Universities are approved by NMC / WHO /
                          ECFMG and also Govt. Medical Universities. Feel free
                          to contact for more details like Fees Structure,
                          Hostel, Food, Visa. We are available through phone
                          contact 24/7.
                        </p>
                        <h2 className="pt-2 pb-2">
                          Advantages or benefits of MBBS in Ukraine
                        </h2>
                        <ul className="pt-2 pb-2">
                          <li>
                            Most of the universities are Government Universities
                            of Ukraine
                          </li>
                          <li>Easy Visa process</li>
                          <li>
                            High Quality of education which leads to a better
                            results in MCI screening tests
                          </li>
                          <li>High Standard of living</li>
                          <li>WHO verified collages</li>
                          <li>Low hostel and tuition fees</li>
                          <li>Hasselfree admission process</li>
                          <li>No need of any exam</li>
                        </ul>
                        <h2 className="pt-2 pb-2">
                          MBBS in Ukraine Eligibility for Indian Students
                        </h2>
                        <p className="pt-2 pb-2">
                          All the Indian students have to fulfill these criteria
                          to take admission for MBBS degree in medical
                          universities of Ukraine:
                        </p>
                        <ul className="pt-2 pb-2">
                          <li>
                            The age of the students should be 18 years on or
                            before 31st December, of the year of admission to
                            MBBS course.
                          </li>
                          <li>
                            The student must have completed class 12th from any
                            regular board.
                          </li>
                          <li>
                            The student must have an aggregate of at least 50%
                            in PCB, if the student is from general category and
                            at least 40% in PCB, if the student is from
                            SC/ST/OBC.
                          </li>
                          <li>
                            The candidate should have to clear NEET entrance
                            test followed by Medical Council of India.
                          </li>
                        </ul>
                        <div className="text-center">
                          <Button
                            onClick={handleShow}
                            className="btn btn-info text-white"
                          >
                            Free Counselling
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="b-ukraine-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center">
                          <u>About Ukraine</u>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="m-2 about">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="">
                          <h5 className="text-white">Geographical Position</h5>
                          <p className="text-white">
                            KYIV - Capital of Ukraine
                          </p>
                          <p className="text-white">
                            Language spoken - Russian, Ukrainian, English
                          </p>
                          <p className="text-white">
                            National currency is Hryvnia (UHR).1 USD =
                            8,0Hryvnia(01/01/2010)
                          </p>
                        </div>
                        <div className="ukraine-map">
                          <p className="text-white text-center">
                            Population – 46,5 million
                            <br />
                            Territory – 6, 03,700 sq. km
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="inner-bg">
                          <div className="d-flex flex-inline">
                            <span className="high">
                              The highest average July temperature is +17… +19°C
                            </span>
                            <span className="low">
                              The lowest temperature of January and February is
                              -7… -8°C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Religion in Ukraine</h5>
                          <p className="text-white">
                            Ukraine in religious geography lies on the
                            boundaries separating Roman Catholic, Eastern
                            Orthodox and Islamic spheres of influence.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Unlike many other European countries higher
                            education in Ukraine is comparatively cost
                            effective.It is indeed, recommended for anyone
                            seeking for quality and affordable education abroad.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Major cities</h5>
                          <p className="text-white">
                            Kharkiv, Kyiv, Dnipropetrovsk, Odessa
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="top-medical-university pt-5 pb-5">
                  <div className="row pt-5">
                    <div className="col-md-12">
                      <div className="university">
                        <h3 className="pb-2 text-center">Fees Structure</h3>
                        <p className="text-justify">
                          Study MBBS in Ukraine at Black Sea National Medical
                          University an affordable cost. Fell free to talk to
                          our counsellors to get the complete fee structure.
                        </p>
                        <div className="text-center">
                          <Button
                            onClick={handleShow}
                            className="btn btn-info text-white"
                          >
                            Free Counselling
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-5">
                    <div className="col-md-6">
                      <div className="university">
                        <h5 className="pt-2 pb-2 text-center">Indian Food</h5>
                        <p className="pt-2 pb-2 text-justify">
                          Many students and parents are doubting whether Indian
                          food is available or not. In Ukraine surely we get
                          Indian food. Indian Restaurants are available. So
                          students can easily concentrate on his studies rather
                          than thinking about Food.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="university">
                        <h5 className="pt-2 pb-2 text-center">
                          Hostel Facilities
                        </h5>
                        <p className="pt-2 pb-2 text-justify">
                          In Ukraine Medical Universities provides a quality
                          hostel facility with security cameras and also
                          Internet Facilities are available. Separate Indian
                          hostel facilities also available who are booking your
                          seat at the earliest. Hostel to College will be a
                          reachable distance between 1 to 2km.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdmissionProcess />
      <UkraineUniversities />
      <OtherCountries />
      <FAQ />
      <FreeCouncelling
        show={show}
        handleClose={handleClose}
        title="Contact Us for Free Counselling"
      />

      <div id="social" className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div className="">
                <h2 className="text-center pt-2 pb-2">Social Connect</h2>
                <div className="text-center pt-3 pb-3">
                  <a
                    as={Link}
                    to="https://www.facebook.com/glowoverseaseducation"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f icons"></i>
                  </a>{" "}
                  &nbsp;
                  <a
                    as={Link}
                    to="https://twitter.com/GlowOverseas"
                    target="_blank"
                  >
                    <i className="fab fa-twitter icons"></i>
                  </a>{" "}
                  &nbsp;
                  <a
                    as={Link}
                    to="https://www.youtube.com/channel/UCjYolwMMKKnzceHVQnJnmSQ"
                    target="_blank"
                  >
                    <i className="fab fa-youtube icons"></i>
                  </a>{" "}
                  &nbsp;
                  <a
                    as={Link}
                    to="https://www.instagram.com/glowoverseaseducation/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram icons"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DnipropetrovskStateMedicalUniversity;

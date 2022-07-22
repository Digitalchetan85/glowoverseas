import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import img1 from "../../Images/mbbs-in-georgia/medical-universities/new-vision-university-school-of-medicine.png";
import AdmissionProcess from "../Includes/AdmissionProcess";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";
import OtherCountries from "../Includes/OtherCountries";
import GeorgiaTopMedicalUniversities from "./GeorgiaTopMedicalUniversity";

const TbilisiStateMedicalUniversity = () => {
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
        <title> Tbilisi State Medical University | MBBS in Georgia | GOE</title>
        <link rel="canonical" href="https://glowoverseas.com/mbbs-in-georgia/tbilisi-state-medical-university" />
        <meta
          name="description"
          content="MBBS in  Tbilisi State Medical University  is the best place to Study MBBS in Georgia. Call Us for Free Counselling"
        />
      </Helmet>
      <div id="abt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="py-md-5">
                <h2>MBBS in Georgia</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-decoration-none" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link
                        className="text-decoration-none"
                        
                        to="/mbbs-in-georgia"
                      >
                        MBBS in Georgia
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Tbilisi State Medical University
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="country" className="py-md-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <div className="">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="text-info py-3">
                        Tbilisi State Medical University
                      </h3>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-8">
                      <div className="university">
                        <p className="text-justify">
                          Tbilisi State Medical University sparks through it’s
                          excellence when it comes to international standard of
                          education. Tbilisi State Medical University is a
                          non-profit private institute started off in 2013 at
                          Tbilisi, known as the capital of Georgia.
                        </p>
                        <p className="text-justify">
                          MBBS program in Tbilisi State Medical University has
                          official accreditations from National Medical
                          Commission (NMC), and World Health Organization (WHO).
                        </p>
                        <p className="text-justify">
                          MBBS duration in Tbilisi State Medical University is 6
                          years where last year is allocated for the course of
                          internship. A medium used for instruction of the MBBS
                          curriculum is in English language.
                        </p>
                        <p className="text-justify">
                          A Tbilisi State Medical University ranks at 21th
                          position in Georgia that draws the attention of
                          foreign students.
                        </p>
                        <ul>
                          <li>Established in 2013.</li>'
                          <li>University type: Private University </li>
                          <li>English Medium Courses</li>
                          <li>MBBS course duration 6 years</li>
                          <li>Recognized by MCI / WHO / ECFMG</li>
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
                <div className="study-georgia mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-info pt-2 pb-2">MBBS in Georgia</h4>
                        <p className="text-justify">
                          MBBS in Georgia’ has always been an attraction for
                          Indian students. Georgia is the most famous
                          destination among students for medical education in
                          abroad. MBBS in Georgia offers world class research
                          infrastructure, quality education, and cross-cultural
                          experience.
                        </p>
                        <p className="text-justify">
                          The experience of studying ‘MBBS in European
                          Countries’ has always proved to be the best for Indian
                          students and Georgia is famous for its medical
                          education across the world.
                        </p>
                        <p className="text-justify">
                          There is a wish which every student studying medicine
                          has been to add an international degree in their
                          curriculum vitae. For students who wish to study MBBS
                          in Europe, MBBS in Georgia is really worth noticeable.
                        </p>
                        <p className="text-justify">
                          At the intersection of Europe and Asia, situated is
                          the small country known as Georgia. The Georgian
                          medical colleges are governed by the National Medical
                          Commission (NMC) and World Health Organization (WHO)
                          and other medical bodies. Medical schools in Georgia
                          offer best infrastructure and international standard
                          of medical education.
                        </p>
                        <p className="text-justify">
                          At the intersection of Europe and Asia, situated is
                          the small country known as Georgia. The Georgian
                          medical colleges are governed by the National Medical
                          Commission (NMC) and World Health Organization (WHO)
                          and other medical bodies. Medical schools in Georgia
                          offer best infrastructure and international standard
                          of medical education.
                        </p>
                        <p className="text-justify">
                          The Ministry of Education and Science of Georgia has
                          given accreditation to major institutions, colleges
                          and universities in Georgia. MBBS in Georgia is also
                          famous among medical students for its low-cost medical
                          education. Therefore, for Indian medical aspirants
                          MBBS in Georgia could be the right choice.
                        </p>
                        <p className="text-justify">
                          The Ministry of Education and Science of Georgia has
                          given accreditation to major institutions, colleges
                          and universities in Georgia. MBBS in Georgia is also
                          famous among medical students for its low-cost medical
                          education. Therefore, for Indian medical aspirants
                          MBBS in Georgia could be the right choice.
                        </p>
                        <p className="text-justify">
                          Georgia, a country at the intersection of Europe and
                          Asia, is a former Soviet republic that’s home to
                          Caucasus Mountain villages and Black Sea beaches. It’s
                          famous for Vardzia, a sprawling cave monastery dating
                          to the 12th century, and the ancient wine-growing
                          region Kakheti. The capital, Tbilisi, is known for the
                          diverse architecture and mazelike, cobblestone streets
                          of its old town.
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
                </div>
                <div className="b-georgia-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-info">
                          <u>About Georgia</u>
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
                            Tbilisi - Capital of Georgia
                          </p>
                          <p className="text-white">
                            Language spoken - Georgia, English
                          </p>
                          <p className="text-white">
                            National currency is Lari 1 USD = 33 Lari
                          </p>
                        </div>
                        <div className="georgia-map">
                          <p className="text-white text-center">
                            Population – 1.06 million
                            <br />
                            Territory – 69,700 sq. kms
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="inner-bg">
                          <div className="d-flex flex-inline">
                            <span className="high">
                              The highest average July temperature is +28… +30°C
                            </span>
                            <span className="low">
                              The lowest temperature of January and February is
                              8… 10°C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Unlike many other European countries higher
                            education in Georgia is comparatively cost
                            effective.It is indeed, recommended for anyone
                            seeking for quality and affordable education abroad.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Major cities</h5>
                          <p className="text-white">
                            Atlanta, Augusta‑Richmond County, Columbus
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
                          Study MBBS in Georgia at Tbilisi State Medical
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
                          food is available or not. In Georgia surely we get
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
                          In Georgian Medical Universities provides a quality
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
      <GeorgiaTopMedicalUniversities />
      <OtherCountries />
      <FAQ />
      <FreeCouncelling
        show={show}
        handleClose={handleClose}
        title="Contact Us for Free Counselling"
      />
    </>
  );
};

export default TbilisiStateMedicalUniversity;

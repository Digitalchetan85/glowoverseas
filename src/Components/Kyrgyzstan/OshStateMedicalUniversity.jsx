import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";

import { Button, Image } from "react-bootstrap";
import Img1 from "../../Images/mbbs-in-kyrgyzstan/medical-universities/osh-state-medical-university.png";
import AdmissionProcess from "../Includes/AdmissionProcess";
import KyrgyzstanTopMedicalUniversities from "./KyrgyzstanTopMedicalUniversities";
import OtherCountries from "../Includes/OtherCountries";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";

const OshStateMedicalUniversity = () => {
  const [show, setShow] = useState(false); useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div id="abt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pt-5 pb-5">
                <h2>MBBS in Kyrgyzstan</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a className="text-decoration-none" as={Link} to="/">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a
                        className="text-decoration-none"
                        as={Link} to="/mbbs-in-kyrgyzstan"
                      >
                        MBBS in Kyrgyzstan
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Osh State Medical Academy
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
                      <h3 className="text-info">Osh State Medical Academy</h3>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-8">
                      <div className="university">
                        <p className="text-justify">
                          Osh State University Medical Faculty – OSH. The
                          Medical Faculties, Osh State University are a public
                          medical institute located in Osh, Kyrgyzstan. It was
                          opened in 1993 as of the reorganisation of the Osh
                          State Pedagogical Institute into Osh State University.
                        </p>
                        <ul>
                          <li>University Type - Government University </li>
                          <li>University Started - 1993</li>
                          <li>English Medium Courses</li>
                          <li>MBBS course duration 5 years</li>
                          <li>Recognized by MCI / WHO</li>
                          <li>Conducting MCI Coaching classes.</li>
                          <li>Indian Food Available</li>
                          <li>Good Hostel Facility available</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <Image
                          src={Img1}
                          alt=""
                          className="img-fluid rounded shadow-sm"
                        ></Image>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="study-kyrgyzstan mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-info pt-2 pb-2">
                          MBBS in Kyrgyzstan
                        </h4>
                        <p className="text-justify">
                          MBBS in Kyrgyzstan is the study of five years which is
                          to become a well-reputed doctor. The medical course is
                          not easy for every candidate as they have to go
                          through several entrance exams and counselling
                          sessions. If they pass through all these then they can
                          take an admission to complete the studies. If you are
                          taking so much pain to complete your medical studies
                          then why not get the degree from the top medical
                          Universities in Kyrgyzstan. You might be surprised by
                          the country name but if you take a closer look then
                          you will find the truth about the same.
                        </p>
                        <p className="text-justify">
                          MBBS in Kyrgyzstan, we should know about the excellent
                          nation. It is situated in the core of central Asia, on
                          the great silk street and has been tourist destination
                          for understanding the historical backdrop of the
                          general population living here and takes after a
                          republic framework. Kyrgyz is the national language
                          which has a ton of likeness like Russian. The nation
                          is separated into seven regions, which comprise of
                          various areas. Bishkek is the capital of the nation.
                          Now-a-days, Kyrgyzstan is counted among the top
                          countries offering MBBS admission in Kyrgyzstan to
                          international students at a very affordable price.
                        </p>
                        <p className="text-justify">
                          Thousands of students from India have applied in the
                          medical universities of Kyrgyzstan to pursue their
                          medical degree in abroad. The quality of medical
                          education provided in the universities of Kyrgyzstan
                          is comparable to the European standards.
                          <ul>
                            <li>
                              The degree awarded after completing the MBBS
                              course is “DOCTOR OF MEDICINE”.
                            </li>
                            <li>
                              The duration of MBBS course in Kyrgyzstan is 5
                              years{" "}
                            </li>
                            <li>Approved by all the medical boards </li>
                            <li>
                              Total number of medical universities in Kyrgyzstan
                              - 22 Universities{" "}
                            </li>
                          </ul>
                        </p>
                        <div className="text-center">
                          <Button
                            onClick={handleShow}
                            className="btn btn-info text-white"
                          >
                            Free Councelling
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="b-kyrgyzstan-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center">
                          <u>About Kyrgyzstan</u>
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
                            Bishkek - Capital of Kyrgyzstan
                          </p>
                          <p className="text-white">
                            Language spoken - Kyrgyz, Russian and English
                          </p>
                          <p className="text-white">
                            National currency is Kyrgyzstani Soma. 1 USD =
                            84.77, Soma
                          </p>
                        </div>
                        <div className="usa-map">
                          <p className="text-white text-center">
                            Population – 64,6 Lakhs
                            <br />
                            Territory – 19,951 sq. km
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="inner-bg">
                          <div className="d-flex flex-inline">
                            <span className="high">
                              The highest average July temperature is +28 …
                              +31°C
                            </span>
                            <span className="low">
                              The lowest temperature of January and February is
                              -1 … -3°C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Religion in Kyrgyzstan</h5>
                          <p className="text-white">
                            kyrgyzstan in religious geography lies on the
                            boundaries separating Roman Catholic, Eastern
                            Orthodox and Islamic spheres of influence.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Education System is same as Indian Education System.
                            Asian curriculum and organized in a comprehensive
                            system. Which stimulates all citizen have the right
                            to Education?
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Major cities</h5>
                          <p className="text-white">
                            Bishkek, Osh, Jalal-Abad, Karakol
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
                          Study MBBS in Belarus at Belarusian State Medical
                          University affordable cost. Fell free to talk to our
                          counsellors to get the complete fee structure.
                        </p>
                        <div className="text-center">
                          <Button
                            onClick={handleShow}
                            className="btn btn-info text-white"
                          >
                            Free Councelling
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
                          food is available or not. In Belarus surely we get
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
                          In Belarusian Medical Universities provides a quality
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
      <KyrgyzstanTopMedicalUniversities />
      <OtherCountries />
      <FAQ />
      <FreeCouncelling
        show={show}
        handleClose={handleClose}
        title="Contact Us for Free Councelling"
      />
    </>
  );
};

export default OshStateMedicalUniversity;

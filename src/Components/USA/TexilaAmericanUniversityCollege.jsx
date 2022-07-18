import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";

import { Button, Image } from "react-bootstrap";
import Img1 from "../../Images/mbbs-in-usa/medical-universities/texila.png";
import AdmissionProcess from "../Includes/AdmissionProcess";
import USAUniversities from "./USAUniversities";
import OtherCountries from "../Includes/OtherCountries";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";

const TexilaAmericanUniversityCollege = () => {
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
                <h2>MBBS in Poland</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a className="text-decoration-none" as={Link} to="/">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a className="text-decoration-none" as={Link} to="/mbbs-in-usa">
                        MBBS in USA
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Texila American University College of Medicine
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
                        Texila American University College of Medicine
                      </h3>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-8">
                      <div className="university">
                        <p className="text-justify">
                          Glow Overseas Education recommended Universities to
                          Study MBBS in Kazakhstan. Bogomolets National Medical
                          University, Ivano frankvisk National Medical
                          University, Kharkiv National Medical University, Lviv
                          National Medical University, Zaporizhzhia State
                          Medical University. Free feel to contact for more
                          details on Kazakhstan Top Medical University.
                        </p>
                        <ul>
                          <li>Established in 1980.</li>
                          <li>English Medium Courses</li>
                          <li>MBBS course duration 6 years</li>
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
                <div className="study-usa mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-info pt-2 pb-2">MBBS in USA</h4>
                        <p className="text-justify">
                          USA is one of the safest countries in the world. USA
                          is the topmost country to study MBBS in Abroad for
                          Indian students compared to other countries like USA,
                          USA, USA, Russia, Philippines, Kazakhstan. Many of
                          Indian students already studying in the Top Medical
                          Universities in USA. USA Medical Universities are
                          approved by MCI / WHO.
                        </p>
                        <p className="text-justify">
                          Nowadays Indian students preferring to study MBBS in
                          Abroad countries like MBBS in USA, MBBS in Russia,
                          MBBS in Kazakhstan, MBBS in Georgia and MBBS in
                          Kyrgyzstan because the cost of MBBS course in Indian
                          Private Medical Colleges are High.
                        </p>
                        <p className="text-justify">
                          In USA, we have many Medical Universities are there to
                          achieve MBBS in USA. We are providing all the Medical
                          Universities are approved by MCI / WHO and also Govt.
                          Medical Universities. Feel free to contact for more
                          details like Fees Structure, Hostel, Food, Visa. We
                          are available through phone contact 24/7.
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
                <div className="b-usa-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center">
                          <u>About USA</u>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="m-2 about">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="">
                          <h5 className="text-white">Geografical Position</h5>
                          <p className="text-white">
                            Washington D C - Capital of USA
                          </p>
                          <p className="text-white">
                            Language spoken - Russian, Ukrainian, English
                          </p>
                          <p className="text-white">
                            National currency is Hryvnia (UHR).1 USD =
                            8,0Hryvnia(01/01/2010)
                          </p>
                        </div>
                        <div className="usa-map">
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
                          <h5 className="text-white">Religion in USA</h5>
                          <p className="text-white">
                            USA in religious geography lies on the boundaries
                            separating Roman Catholic, Eastern Orthodox and
                            Islamic spheres of influence.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Unlike many other European countries higher
                            education in USA is comparatively cost effective.It
                            is indeed, recommended for anyone seeking for
                            quality and affordable education abroad.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Major cities</h5>
                          <p className="text-white">
                            New York, Los Angeles, Chicago, Houston
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
                          Study MBBS in Armenia at Kharkiv National Medical
                          University an affordable cost. Fell free to talk to
                          our counsellors to get the complete fee structure.
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
                          In Kharkiv National Medical University provides a
                          quality hostel facility with security cameras and also
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
      <USAUniversities />
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

export default TexilaAmericanUniversityCollege;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Button, Image } from "react-bootstrap";
import Img1 from "../../Images/mbbs-in-egypt/medical-universities/ain-shams-university-faculty-of-medicine.png";
import AdmissionProcess from "../Includes/AdmissionProcess";
import EgyptTopMedicalUniversities from "./EgyptTopMedicalUniversities";
import OtherCountries from "../Includes/OtherCountries";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";

const AinShyamsUniversity = () => {
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
        <title> Ain Shams University | MBBS in Egypt | GOE</title>
        <link
          rel="canonical"
          href="https://glowoverseas.com/mbbs-in-egypt/ain-shyams-university"
        />
        <meta
          name="description"
          content="MBBS in Ain Shams University Faculty of Medicine is the best place to Study MBBS in Egypt. Call Us for Free Counselling"
        />
      </Helmet>
      <div id="abt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pt-5 pb-5">
                <h2>MBBS in Egypt</h2>
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
                        to="/mbbs-in-egypt"
                      >
                        MBBS in Egypt
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Ain Shams University Faculty of Medicine
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
                        Ain Shams University Faculty of Medicine
                      </h3>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-8">
                      <div className="university">
                        <p className="text-justify pb-2">
                          Ain Shams University Faculty of Medicine one of the
                          top Medical University in Egypt.
                        </p>
                        <ul>
                          <li>Established in 1921.</li>

                          <li>English Medium Courses</li>
                          <li>MBBS course duration 6 years</li>
                          <li>Recognized by MCI / WHO </li>
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
                <div className="study-egypt mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-info pt-2 pb-2">MBBS in Egypt</h4>
                        <p className="text-justify">
                          Egypt is one of the safest countries in the world.
                          Egypt is the topmost country to study MBBS in Abroad
                          for Indian students compared to other countries like
                          USA, Russia, Philippines, Kazakhstan. Many of Indian
                          students already studying in the Top Medical
                          Universities in Egypt. Egypt Medical Universities are
                          approved by MCI / WHO.
                        </p>
                        <p className="text-justify">
                          In Egypt, we have many Medical Universities are there
                          to achieve MBBS in Egypt. We are providing all the
                          Medical Universities are approved by MCI / WHO and
                          also Govt. Medical Universities. Feel free to contact
                          for more details like Fees Structure, Hostel, Food,
                          Visa. We are available through phone contact 24/7.
                        </p>
                        <p className="text-justify"></p>

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
                <div className="b-egypt-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center">
                          <u>About Egypt</u>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="m-2 about">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="">
                          <h5 className="text-white">Geographical Position</h5>
                          <p className="text-white">Cairo - Capital of Egypt</p>
                          <p className="text-white">
                            Language spoken - Modern Standard Arabic, English
                          </p>
                          <p className="text-white">
                            National currency is Egyptian Pound. 1 USD = 0.064,
                            Egyptian Pound(01/01/2010)
                          </p>
                        </div>
                        <div className="egypt-map">
                          <p className="text-white text-center">
                            Population – 10,04 Crores
                            <br />
                            Territory – 10,10,408 sq. km
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="inner-bg">
                          <div className="d-flex flex-inline">
                            <span className="high">
                              The highest average July temperature is +17… +32°C
                            </span>
                            <span className="low">
                              The lowest temperature of January and February is
                              +9.5 … 23°C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Religion in Egypt</h5>
                          <p className="text-white">
                            Egypt in religious geography lies on the boundaries
                            separating Roman Catholic, Eastern Orthodox and
                            Islamic spheres of influence.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Unlike many other European countries higher
                            education in Egypt is comparatively cost
                            effective.It is indeed, recommended for anyone
                            seeking for quality and affordable education abroad.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Major cities</h5>
                          <p className="text-white">
                            Cairo, Aswan, Luxor, Alexandria
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
                          Study MBBS in Egypt at Ain Shams University Faculty of
                          Medicine an affordable cost. Fell free to talk to our
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
                          In Egyptian Medical Universities provides a quality
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
      <EgyptTopMedicalUniversities />
      <OtherCountries />
      <FAQ />
      <FreeCouncelling
        show={show}
        handleClose={handleClose}
        title="Contact Us for Free Counselling
                    "
      />
    </>
  );
};

export default AinShyamsUniversity;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Button, Image } from "react-bootstrap";
import Img1 from "../../Images/mbbs-in-kazakhstan/medical-universities/al-farabi-kazakh-national-university-faculty-of-medicine-and-health-care.png";
import AdmissionProcess from "../Includes/AdmissionProcess";
import KazakhstanTopMedicalUniversities from "./KazakhstanTopMedicalUniversities";
import OtherCountries from "../Includes/OtherCountries";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";

const AlFarabiNationalMedicalUniversity = () => {
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
        <title> Al-Farabi National Medical | MBBS in Kazakhstan | GOE</title>
        <link
          rel="canonical"
          href="https://glowoverseas.com/mbbs-in-kazakhstan/al-farabi-national-medical-university"
        />
        <meta
          name="description"
          content="MBBS in Al-Farabi National Medical is the best place to Study MBBS in Kazakhstan. Call Us for Free Counselling"
        />
      </Helmet>

      <div id="abt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="py-md-5">
                <h2>MBBS in Kazakhstan</h2>
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
                        to="/mbbs-in-kazakhstan"
                      >
                        MBBS in Kazakhstan
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Al-Farabi National Medical University
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
                        Al-Farabi National Medical University
                      </h3>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-8">
                      <div className="university">
                        <p className="text-justify pb-2">
                          Al-Farabi Kazakh National University Faculty of
                          Medicine and Health Care – Almaty. Al-Farabi Kazakh
                          National University is the leading institution of the
                          system of higher education of the Republic of
                          Kazakhstan, which was the first to pass the state
                          certification and which has justified its right to
                          realize academic activity on all specialties and at
                          all levels.
                        </p>
                        <ul>
                          <li>University Type - Government University </li>
                          <li>University Started - 2018</li>
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
                <div className="study-kazakhstan mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-info pt-2 pb-2">
                          MBBS in Kazakhstan
                        </h4>
                        <p className="text-justify">
                          Kazakhstan, a Central Asian country and former Soviet
                          republic, extends from the Caspian Sea in the west to
                          the Altai Mountains at its eastern border with China
                          and Russia. Its largest metropolis, Almaty, is a
                          long-standing trading hub whose landmarks include
                          Ascension Cathedral, a tsarist-era Russian Orthodox
                          church, and the Central State Museum of Kazakhstan,
                          displaying thousands of Kazakh artifacts.
                        </p>
                        <p className="text-justify">
                          Kazakhstan is the richest country in Central Asia, due
                          to its large oil and natural gas reserves. The country
                          inherited the culture of the ancient Silk Road,
                          Nomadic lifestyle and the Soviet Union which had a
                          great influence on its formation.
                        </p>
                        <ul>
                          <li>
                            The degree awarded after completing the MBBS course
                            is “DOCTOR OF MEDICINE”.
                          </li>
                          <li>
                            The duration of MBBS course in Kazakhstan is 5 years
                          </li>
                          <li>Approved by all the medical boards </li>
                          <li>
                            Total number of medical universities in Kazakhstan -
                            14 Universities
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
                <div className="b-kazakhstan-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center">
                          <u>About Kazakhstan</u>
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
                            Nur-Sultan - Capital of Kazakhstan
                          </p>
                          <p className="text-white">
                            Language spoken - Kazakh, Russian, English
                          </p>
                          <p className="text-white">
                            National currency is Hryvnia (UHR).1 USD = 421.18
                            Tenge
                          </p>
                        </div>
                        <div className="kazakhstan-map">
                          <p className="text-white text-center">
                            Population – 1,85 Crores
                            <br />
                            Territory – 27,00,000 sq. km
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="inner-bg">
                          <div className="d-flex flex-inline">
                            <span className="high">
                              The highest average July temperature is +28 …
                              +30°C
                            </span>
                            <span className="low">
                              The lowest temperature of January and February is
                              -20 … -23°C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Religion in Kazakhstan</h5>
                          <p className="text-white">
                            Kazakhstan in religious geography lies on the
                            boundaries separating Roman Catholic, Eastern
                            Orthodox and Islamic spheres of influence.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Most of the universities, following the Russian
                            System, they follow the Asian Curiculum, the
                            education system is high standard ans highly
                            qualified faculties advanced Medical System
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Major cities</h5>
                          <p className="text-white">Aktau, Aktobe, Almaty</p>
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
                          Study MBBS in Kazakhstan at Al-Farabi National Medical
                          University affordable cost. Fell free to talk to our
                          counsellors to get the complete fee structure.
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
                          food is available or not. In Kazakhstan surely we get
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
                          In Kazakhstan Medical Universities provides a quality
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
      <KazakhstanTopMedicalUniversities />
      <OtherCountries />
      <FAQ />
      <FreeCouncelling
        show={show}
        handleClose={handleClose}
        title="Contact Us for Free Counselling"
      />
    </div>
  );
};

export default AlFarabiNationalMedicalUniversity;

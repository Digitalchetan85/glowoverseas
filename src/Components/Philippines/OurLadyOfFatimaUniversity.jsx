import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import img1 from "../../Images/mbbs-in-philippines/medical-universities/our-lady-of-fatima-university-college-of-medicine.png";
import AdmissionProcess from "../Includes/AdmissionProcess";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";
import OtherCountries from "../Includes/OtherCountries";
import PhilippinesTopMedicalUniversities from "./PhilippinesTopMedicalUniversities";

const OurLadyOfFatimaUniversity = () => {
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
                <h2>MBBS in Philippines</h2>
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
                        as={Link} to="/mbbs-in-philippines"
                      >
                        MBBS in Philippines
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Our Lady of Fatima University
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
                        Our Lady of Fatima University
                      </h3>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-8">
                      <div className="university">
                        <p className="text-justify">
                          Our Lady of Fatima University established in the year
                          1967. Our Lady of Fatima University is one of the
                          biggest medical universities in the Philippines. Our
                          Lady of Fatima University is a non-profit private
                          university in the Philippines. It was formerly known
                          as Our Lady of Fatima College. It was recognized by
                          WHO, MCI, and many more international professional
                          groups. Our Lady of Fatima University has formed into
                          a huge scale, a well-managed comprehensive university
                          with good teaching staff. It is one of those
                          universities which is having an advanced system of
                          education, and it trains students with the help of
                          updated education technology of medical study. The
                          university embraces the high-tech methods of practical
                          medicine that empower students to be focused,
                          competitive and flexible in the world market.
                        </p>
                        <ul>
                          <li>Established in 1967</li>
                          <li>University Type - Private.</li>
                          <li>English Medium Courses</li>
                          <li>MBBS course duration 6 years</li>
                          <li>Recognized by MCI / WHO / CHED / FAIMER</li>
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
                <div className="study-philippines mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-info pt-2 pb-2">
                          MBBS in Philippines
                        </h4>
                        <p className="text-justify">
                          The Philippines, officially the Republic of the
                          Philippines, is an archipelagic country in Southeast
                          Asia. Philippines offer quality MBBS education with
                          economical tuition fees. If we compare with other US
                          countries then tuition fees are quite low and
                          education pattern is similar to US study-based
                          pattern. In Philippines, MBBS is called as MD (Doctor
                          of Medicine).
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
                <div className="b-philippines-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center">
                          <u>About philippines</u>
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
                            Manila - Capital of Philippines
                          </p>
                          <p className="text-white">
                            Language spoken - Filipino and English
                          </p>
                          <p className="text-white">
                            National currency is Pesso.1 USD = 8, Pesso
                          </p>
                        </div>
                        <div className="philippines-map">
                          <p className="text-white text-center">
                            Population – 10.81 Crores
                            <br />
                            Territory – 3,00,000 sq. km
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="inner-bg">
                          <div className="d-flex flex-inline">
                            <span className="high">
                              The highest average July temperature is +23… +26°C
                            </span>
                            <span className="low">
                              The lowest temperature of January and February is
                              +21 … +22°C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">
                            Religion in philippines
                          </h5>
                          <p className="text-white">
                            philippines in religious geography lies on the
                            boundaries separating Roman Catholic, Eastern
                            Orthodox and Islamic spheres of influence.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Unlike many other European countries higher
                            education in philippines is comparatively cost
                            effective.It is indeed, recommended for anyone
                            seeking for quality and affordable education abroad.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Major cities</h5>
                          <p className="text-white">
                            Quezon, Manila, Davao, Caloocan
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
                          Study MBBS in Philippines at Our Lady of Fatima
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
                          food is available or not. In Philippines surely we get
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
                          In Our Lady of Fatima University provides a quality
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
      <PhilippinesTopMedicalUniversities />
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

export default OurLadyOfFatimaUniversity;

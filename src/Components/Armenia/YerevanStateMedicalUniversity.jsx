import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Img1 from "../../Images/mbbs-in-armenia/medical-universities/yerevan-state-medical-university.png";
import { Button, Image } from "react-bootstrap";
import AdmissionProcess from "../Includes/AdmissionProcess";
import ArmeniaTopMedicalUniversities from "./ArmeniaTopMedicalUniversities";
import OtherCountries from "../Includes/OtherCountries";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";

const YerevanStateMedicalUniversity = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Yerevan State Medical University | MBBS in Armenia | GOE</title>
        <link
          rel="canonical"
          href="https://glowoverseas.com/mbbs-in-armenia//yerevan-state-medical-university"
        />
        <meta
          name="description"
          content="MBBS in Yerevan State Medical University is the best place to Study MBBS in Armenia. Call Us for Free Counselling"
        />
      </Helmet>
      <div id="abt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="py-md-5">
                <h2>MBBS in Armenia</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/" className="text-decoration-none">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link
                        to="/mbbs-in-armenia"
                        className="text-decoration-none"
                      >
                        MBBS in Armenia
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Yerevan State Medical University
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
                        Yerevan State Medical University
                      </h3>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-8">
                      <div className="university">
                        <p className="text-justify">
                          Yerevan State Medical University is the best and top
                          medical university you should think of enrolling into
                          since it has the best infrastructure as well as
                          library for students to study a lot. On top of
                          everything – They have got laboratories for students
                          to experiment what they learn across, if you are an
                          international student to experience a broad spectrum
                          of clinical exposure and want to be in a study
                          environment that serves you with theoretical and
                          practical learning opportunity, just look nowhere than
                          just the Yerevan State Medical University. The
                          University has got almost 3+ faculties and 100+
                          academic departments to ensure students get the
                          complete thoroughness in the medical program they want
                          to enrol into. In fact, it also has got amazing
                          laboratory that’s fully equipped for students to
                          practice what they learn throughout their course
                          duration.
                        </p>
                        <ul>
                          <li>Established in 1920.</li>
                          <li>University Type – Government University</li>
                          <li>English Medium Courses</li>
                          <li>MBBS course duration 6 years</li>
                          <li>Recognized by MCI / WHO / ECFMG</li>
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
                <div className="study-armenia mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-info py-2">MBBS in Armenia</h4>
                        <p className=" text-justify">
                          Armenia is a nation, and former Soviet republic, in
                          the mountainous Caucasus region between Asia and
                          Europe. Among the earliest Christian civilizations,
                          it’s defined by religious sites including the
                          Greco-Roman Temple of Garni and 4th-century
                          Etchmiadzin Cathedral, headquarters of the Armenian
                          Church. Khor Virap Monastery is a pilgrimage site near
                          Mount Ararat, a dormant volcano just across the border
                          in Turkey. MBBS in Armenia is best for any student who
                          want to get the global recognition from their course
                          with good skills and practice as Armenia provides you
                          with top quality education. let us know something
                          about Armenia and Why you need to do MBBS in Armenia
                          Along with advantages and Dis-Advantages of studying
                          in Armenia. Armenia is a country which is located in
                          the western Asia and close to the Turkey and it was
                          founded on 28th may 1918 and the best thing about the
                          country is that in Armenia every school has one
                          mandatory thing which is chess, a compulsory subject
                          that every student has to learn. 97% of people living
                          in Armenia are Armenian citizens only and only 3% are
                          other countries people. The first church in the world
                          was built in Armenia.
                        </p>
                        <h2 className="text-dark pb-2 pt-2">
                          Advantages for Studying MBBS in Armenia
                        </h2>
                        <ul className="pt-2 pb-2">
                          <li>Affordable course fee</li>
                          <li>More than 2000 Indian students studying.</li>
                          <li>Global Recognized Universities</li>
                          <li>Safe for the students.</li>
                          <li>MCI Coaching Available</li>
                          <li>Friendly Environment for Indian Students.</li>
                          <li>
                            Indian Food Available in Cafe Which Is Served by
                            Indian Chef.
                          </li>
                          <li>Separate Compartments for Boys and Girls.</li>
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
                <div className="b-armenia-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center">
                          <u>About Armenia</u>
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
                            Yerevan - Capital of Armenia
                          </p>
                          <p className="text-white">
                            Language spoken - Armenian, English
                          </p>
                          <p className="text-white">
                            National currency is Armenian Dram (UHR).1 USD =
                            .0020, Armenian Dram(01/01/2010)
                          </p>
                        </div>
                        <div className="armenia-map">
                          <p className="text-white text-center">
                            Population – 29,6 Lakhs
                            <br />
                            Territory – 29,743 sq. km
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="inner-bg">
                          <div className="d-flex flex-inline">
                            <span className="high">
                              The highest average July temperature is +10 …
                              -22°C
                            </span>
                            <span className="low">
                              The lowest temperature of January and February is
                              +2… -14°C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Religion in Armenia</h5>
                          <p className="text-white">
                            Armenia in religious geography lies on the
                            boundaries separating Roman Catholic, Eastern
                            Orthodox and Islamic spheres of influence.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Unlike many other European countries higher
                            education in Armenia is comparatively cost
                            effective.It is indeed, recommended for anyone
                            seeking for quality and affordable education abroad.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Major cities</h5>
                          <p className="text-white">
                            Yerevan, Gyumri, Vanadzor, Vagharshapat
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="top-medical-university pt-5">
                  <div className="row pt-5">
                    <div className="col-md-12">
                      <div className="university">
                        <h3 className="pb-2 text-center">Fees Structure</h3>
                        <p className="text-justify">
                          Study MBBS in Armenia at Yerevan haybusak University
                          facility of Medicine an affordable cost. Fell free to
                          talk to our counsellors to get the complete fee
                          structure.
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
                          food is available or not. In Armenia surely we get
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
                          In Amrenia Medical Universities provides a quality
                          hostel facility with security cameras and also
                          Internet Facilities are available. Separate Indian
                          hostel facilities also available who are booking your
                          seat at the earliest. Hostel to College will be a
                          reachable distance between 1 to 2km.
                        </p>
                      </div>
                    </div>
                  </div>
                  <AdmissionProcess />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ArmeniaTopMedicalUniversities />
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

export default YerevanStateMedicalUniversity;

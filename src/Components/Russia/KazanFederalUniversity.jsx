import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import img1 from "../../Images/mbbs-in-russia/medical-universities/kazan-federal-university.png";
import AdmissionProcess from "../Includes/AdmissionProcess";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";
import OtherCountries from "../Includes/OtherCountries";
import RussianUniverisities from "../Includes/RussianUniverisities";

const KazanFederalUniversity = () => {
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
                <h2>MBBS in Russia</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-decoration-none" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <a
                        className="text-decoration-none"
                        as={Link} to="/mbbs-in-russia"
                      >
                        MBBS in Russia
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Kazan Federal University
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
                      <h3 className="text-info">Kazan Federal University</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="university">
                        <p className="text-justify">
                          Kazan State Medical University In the fields of
                          medicine, Kazan State Medical University is considered
                          to be one of the most esteemed Universities of Russia.
                          From this University, thousands of Indians had been
                          graduated in the past. For higher learning in
                          medicine, KSMU is treated to be the multifunctional
                          and multi-levelled government institution. In getting
                          hands on education in medicine, it meets both personal
                          and social needs in developing biomedical and clinical
                          sciences, as well as broadening scientific knowledge
                          of medical sciences.
                        </p>
                        <ul>
                          <li>University Type - Government University</li>
                          <li>University Started - 1814</li>
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
                        <h4 className="text-info pt-2 pb-2">MBBS in Russia</h4>
                        <p className="text-justify">
                          Russian Medical Universities happens to be one of the
                          most advanced ones for it uses well-equipped teaching
                          methods and streamlined techniques for the development
                          of students in chosen specialties. Over the period of
                          time, Russia has become a popular destination for
                          medical studies because of the teaching standards and
                          low fee. That’s because the medical education in
                          Russia is subsidized by the Russian government up to
                          70% which makes the fees of Russian medical colleges
                          lower than other countries.
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
                <div className="b-russia-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center">
                          <u>About Russia</u>
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
                            Moscow - Capital of Russia
                          </p>
                          <p className="text-white">
                            Language spoken - Russian and English
                          </p>
                          <p className="text-white">
                            National currency is Russian Rubble. 1 USD = 75.96
                            Rubble
                          </p>
                        </div>
                        <div className="russia-map">
                          <p className="text-white text-center">
                            Population – 14.44 Crores
                            <br />
                            Territory – 17,125,191 sq. km
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="inner-bg">
                          <div className="d-flex flex-inline">
                            <span className="high">
                              The highest average July temperature is +24 …
                              +30°C
                            </span>
                            <span className="low">
                              The lowest temperature of January and February is
                              -7… -15°C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Religion in Russia</h5>
                          <p className="text-white">
                            Russia in religious geography lies on the boundaries
                            separating Roman Catholic, Eastern Orthodox and
                            Islamic spheres of influence.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Unlike many other European countries higher
                            education in Russia is comparatively cost
                            effective.It is indeed, recommended for anyone
                            seeking for quality and affordable education abroad.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Major cities</h5>
                          <p className="text-white">
                            Moscow, Saint Petersburg, Novosibirsk, Yekaterinburg
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
                          Study MBBS in Russia at Kazan Federal University an
                          affordable cost. Fell free to talk to our counsellors
                          to get the complete fee structure.
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
                          food is available or not. In Russia surely we get
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
                          In Russian Medical Universities provides a quality
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
      <RussianUniverisities />
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

export default KazanFederalUniversity;

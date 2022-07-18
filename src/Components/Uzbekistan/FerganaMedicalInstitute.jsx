import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Image } from "react-bootstrap";
import Img1 from "../../Images/mbbs-in-uzbekistan/medical-universities/fergana.png";
import AdmissionProcess from "../Includes/AdmissionProcess";
import OtherCountries from "../Includes/OtherCountries";
import FAQ from "../Includes/FAQ";
import UzbekistanUniversities from "./UzbekistanUniversities";
import FreeCouncelling from "../Includes/FreeCouncelling";

const FerganaMedicalInstitute = () => {
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
        <title> Fergana Medical Institute | MBBS in Uzbekistan | GOE</title>
        <link
          rel="canonical"
          href="https://glowoverseas.com/mbbs-in-uzbekistan/fergana-medical-institute"
        />
        <meta
          name="description"
          content="MBBS in Fergana Medical University is the best place to Study MBBS in Uzbekistan. Call Us for Free Counselling"
        />
      </Helmet>
      <div id="abt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pt-5 pb-5">
                <h2>MBBS in Poland</h2>
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
                        
                        to="/mbbs-in-Uzbekistan"
                      >
                        MBBS in Uzbekistan
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Fergana Medical Institute
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
                      <h3 className="text-info">Fergana Medical Institute</h3>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-8">
                      <div className="university">
                        <p className="text-justify">
                          Glow Overseas Education recommended Universities to
                          Study MBBS in Uzbekistan. Fergana Medical Institute.
                          Free feel to contact for more details on Kazakhstan
                          Top Medical University.
                        </p>
                        <ul>
                          <li>Established in 1991.</li>
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
                <div className="study-Uzbekistan mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-info pt-2 pb-2">
                          MBBS in Uzbekistan
                        </h4>
                        <p className="text-justify">
                          Uzbekistan is one of the safest countries in the
                          world. Uzbekistan is the topmost country to study MBBS
                          in Abroad for Indian students compared to other
                          countries like Uzbekistan, Uzbekistan, Uzbekistan,
                          Russia, Philippines, Kazakhstan. Many of Indian
                          students already studying in the Top Medical
                          Universities in Uzbekistan. Uzbekistan Medical
                          Universities are approved by MCI / WHO.
                        </p>
                        <p className="text-justify">
                          Nowadays Indian students preferring to study MBBS in
                          Abroad countries like MBBS in Uzbekistan, MBBS in
                          Russia, MBBS in Kazakhstan, MBBS in Georgia and MBBS
                          in Kyrgyzstan because the cost of MBBS course in
                          Indian Private Medical Colleges are High.
                        </p>
                        <p className="text-justify">
                          In Uzbekistan, we have many Medical Universities are
                          there to achieve MBBS in Uzbekistan. We are providing
                          all the Medical Universities are approved by MCI / WHO
                          and also Govt. Medical Universities. Feel free to
                          contact for more details like Fees Structure, Hostel,
                          Food, Visa. We are available through phone contact
                          24/7.
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
                <div className="b-uzbekistan-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center">
                          <u>About Uzbekistan</u>
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
                            Tashkent - Capital of Uzbekistan
                          </p>
                          <p className="text-white">Language spoken - Uzbek</p>
                          <p className="text-white">
                            National currency is Uzbekistan is sum (also som,
                            soum).1 Uzbek Sum = 0.0073 Indian Rupee
                          </p>
                        </div>
                        <div className="uzbekistan-map">
                          <p className="text-white text-center">
                            Population – 3.42 crores
                            <br />
                            Territory – 448.9 thousand sq. km
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="inner-bg">
                          <div className="d-flex flex-inline">
                            <span className="high">
                              The highest average July temperature is 19.7°C
                              (67.5°F) and max 35.6°C (96.1°F).
                            </span>
                            <span className="low">
                              The lowest temperature of January and February is
                              (6.9°C)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Religion in Uzbekistan</h5>
                          <p className="text-white">
                            Uzbekistan is more than 80 percent Muslim. The
                            majority of the country's Muslims are Sunni and
                            regard themselves as followers of the Hannafi branch
                            of Sunnism. In the Stalin era, Muslim clerics
                            suffered persecution, as did Christian clerics
                            throughout the Soviet Union.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Unlike many other European countries higher
                            education in Uzbekistan is comparatively cost
                            effective.It is indeed, recommended for anyone
                            seeking for quality and affordable education abroad.
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
      <UzbekistanUniversities />
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

export default FerganaMedicalInstitute;

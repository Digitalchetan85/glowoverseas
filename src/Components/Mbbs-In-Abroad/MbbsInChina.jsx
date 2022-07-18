import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import ChinaUniversities from "../Includes/ChinaUniversities";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";
import OtherCountries from "../Includes/OtherCountries";

const MbbsInChina = () => {
  const [show, setShow] = useState(false); useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div id="abt1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pt-5 pb-5">
                <h2>MBBS in China</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a as={Link} to="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      MBBS in China
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="country" className="pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="container">
                <div className="study-china mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-start text-info pt-2 pb-2">
                          MBBS in China
                        </h4>
                        <p className="text-justify">
                          China is one of the safest countries in the world.
                          China is the topmost country to study MBBS in Abroad
                          for Indian students compared to other countries like
                          China, China, USA, Russia, Philippines, Kazakhstan.
                          Many of Indian students already studying in the Top
                          Medical Universities in China. China Medical
                          Universities are approved by MCI / WHO.
                        </p>
                        <p className="text-justify">
                          Nowadays Indian students preferring to study MBBS in
                          Abroad countries like MBBS in USA, MBBS in Russia,
                          MBBS in Kazakhstan, MBBS in Georgia and MBBS in
                          Kyrgyzstan because the cost of MBBS course in Indian
                          Private Medical Colleges are High.
                        </p>
                        <p className="text-justify">
                          In China, we have many Medical Universities are there
                          to achieve MBBS in China. We are providing all the
                          Medical Universities are approved by MCI / WHO and
                          also Govt. Medical Universities. Feel free to contact
                          for more details like Fees Structure, Hostel, Food,
                          Visa. We are available through phone contact 24/7.
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
                <div className="b-china-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center">
                          <u>About China</u>
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
                            Beijing - Capital of China
                          </p>
                          <p className="text-white">
                            Language spoken - Mandarin, English
                          </p>
                          <p className="text-white">
                            National currency is Chinese Yuan. 1 USD = 0.15,
                            Chinese Yuan(01/01/2010)
                          </p>
                        </div>
                        <div className="china-map">
                          <p className="text-white text-center">
                            Population – 139,77 million
                            <br />
                            Territory – 95,96,960 sq. km
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="inner-bg">
                          <div className="d-flex flex-inline">
                            <span className="high">
                              The highest average July temperature is +19… +31°C
                            </span>
                            <span className="low">
                              The lowest temperature of January and February is
                              +8 … +15°C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Religion in China</h5>
                          <p className="text-white">
                            China in religious geography lies on the boundaries
                            separating Roman Catholic, Eastern Orthodox and
                            Islamic spheres of influence.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Unlike many other European countries higher
                            education in China is comparatively cost
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChinaUniversities />
      <OtherCountries />
      <FAQ />

      <FreeCouncelling show={show} handleClose={handleClose} title="Contact Us for Free Councelling" />
    </>
  );
};

export default MbbsInChina;

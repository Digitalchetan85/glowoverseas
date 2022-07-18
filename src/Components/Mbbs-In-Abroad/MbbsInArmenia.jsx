import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Image } from "react-bootstrap";
import ArmeniaTopMedicalUniversities from "../Armenia/ArmeniaTopMedicalUniversities";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";
import OtherCountries from "../Includes/OtherCountries";

const MbbsInArmenia = () => {
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
        <title>MBBS in Armenia | MBBS in Abroad | GOE</title>
        <link rel="canonical" href="https://glowoverseas.com/mbbs-in-armenia" />
        <meta
          name="description"
          content="MBBS in Armenia is the best place to Study MBBS in Abroad. Call Us for Free Councelling"
        />
      </Helmet>
      <div id="abt1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pt-5 pb-5">
                <h2>MBBS in Armenia</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a as={Link} to="/">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      MBBS in Armenia
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
                <div className="study-armenia mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h2 className="text-start text-info pt-2 pb-2">
                          MBBS in Armenia
                        </h2>
                        <p className="text-justify">
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
                        <h3 className="text-info pb-2 pt-4">
                          Advantages for Studying MBBS in Armenia
                        </h3>
                        <ul className="pb-2">
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
                          <Button onClick={handleShow} className="btn btn-info">
                            Free Councelling
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
        title="Contact Us for Free Councelling."
      />
    </>
  );
};

export default MbbsInArmenia;

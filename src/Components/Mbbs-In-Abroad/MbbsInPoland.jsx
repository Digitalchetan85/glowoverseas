import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";
import OtherCountries from "../Includes/OtherCountries";
import PolandTopMedicalUniversities from "../Poland/PolandTopMedicalUniversities";

const MbbsInPoland = () => {
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
                <h2>MBBS in Poland</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a as={Link} to="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      MBBS in Poland
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
                <div className="study-poland mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-start text-info pt-2 pb-2">
                          MBBS in Poland
                        </h4>
                        <p className="text-justify">
                          Poland is one of the best destinations to pursue MBBS
                          because of the high-quality medical education &
                          low-cost fees structure. Poland universities/colleges
                          provide world-class infrastructure and a high standard
                          of teaching to medical students. Poland follows the
                          pattern & syllabus of MBBS as same as several other
                          countries in Europe. The duration of MBBS in Poland is
                          6 years including 1 year of compulsory internship.
                          Poland universities/colleges are recognized by the
                          MCI. The process of MBBS admission in Poland is very
                          smooth and easy that enables the students to apply
                          directly to the selected top medical universities or
                          colleges without any hassle.
                        </p>

                        <p className="text-justify">
                          <b>Why Study MBBS in Poland</b>
                        </p>

                        <p className="text-justify">
                          MBBS in Poland is the best option because of the
                          following reasons:
                          <ul>
                            <li>
                              There is no requirement for any entrance exam to
                              take MBBS admission in Poland.
                            </li>
                            <li>
                              Poland colleges/universities facilitate students
                              with a high-quality medical education system.
                            </li>
                            <li>
                              Poland colleges/universities provide 1 year of
                              internship with the best government as well as
                              private hospitals.
                            </li>
                            <li>
                              The medium of instruction in all the Poland
                              medical colleges is English.
                            </li>
                            <li>
                              The medical universities in Poland are recognized
                              and approved by WHO & MCI & Poland medical degree
                              is a globally recognized degree.
                            </li>
                            <li>
                              After completing MBBS in Poland, this country
                              provides a blue card work permit to students so
                              that they can get a job and settle down as well in
                              this country.
                            </li>
                          </ul>
                        </p>
                        <h2 className="text-info pt-2 pb-2">
                          Advantages of Studying in Poland
                        </h2>
                        <p className="text-justify">
                          Poland is one of the best places for Indian students
                          to pursue MBBS because of the following benefits:
                          <ul>
                            <li>
                              During MBBS in Poland, the students also get
                              coaching for FMGE / MCI Screening Test including
                              mock tests.
                            </li>
                            <li>
                              There is no requirement to pay any donation fee or
                              capitation fee to take MBBS admission in Poland.
                            </li>
                            <li>
                              The best Poland medical colleges/universities are
                              among world-ranked universities.
                            </li>
                            <li>
                              Poland medical colleges/universities have
                              affordable tuition fees structure.
                            </li>
                            <li>
                              The process of MBBS admission in Poland is very
                              simple & easy as it does not require any entrance
                              exam.
                            </li>
                            <li>
                              After MBBS in Poland, the students will get a
                              globally recognized medical degree.
                            </li>
                            <li>
                              The process of MBBS admission in Poland is very
                              simple & easy as it does not require any entrance
                              exam.
                            </li>
                          </ul>
                        </p>
                        <p className="pt-3 pb-2 text-justify text-info">
                          <strong>
                            Quick Information About MBBS In POLAND
                          </strong>
                        </p>
                        <div className="table-responsive">
                          <table className="table-bordered pt-3 pb-3 w-100 align-middle">
                            <tbody>
                              <tr>
                                <td className="px-2">
                                  <b>Recognition</b>
                                </td>
                                <td className="px-2">- NMC and WHO approved</td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>Eligibility</b>
                                </td>
                                <td className="px-2">
                                  50% in Physics, Chemistry and Biology
                                  Aggregate
                                </td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>Course Duration</b>
                                </td>
                                <td className="px-2">6 Years</td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>NEET</b>
                                </td>
                                <td className="px-2">- Yes, compulsory</td>
                              </tr>

                              <tr>
                                <td className="px-2">
                                  <b>Medium of Teaching</b>
                                </td>
                                <td className="px-2">- English </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
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

                <div className="b-poland-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center">
                          <u>About Poland</u>
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
                            Warsaw - Capital of Poland
                          </p>
                          <p className="text-white">
                            Language spoken - Polish and English
                          </p>
                          <p className="text-white">
                            National currency is Polish Zolty. 1 USD = 3.73,
                            Zolty
                          </p>
                        </div>
                        <div className="usa-map">
                          <p className="text-white text-center">
                            Population – 64.6 Lakhs
                            <br />
                            Territory – 199.51 sq. km
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="inner-bg">
                          <div className="d-flex flex-inline">
                            <span className="high">
                              The lowest temperature of January and February is
                              -1… -3°C
                            </span>
                            <span className="low">
                              The highest average July temperature is +17… +19°C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Religion in Poland</h5>
                          <p className="text-white">
                            UPoland in religious geography lies on the
                            boundaries separating Roman Catholic, Eastern
                            Orthodox and Islamic spheres of influence.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Unlike many other European countries higher
                            education in Poland is comparatively cost
                            effective.It is indeed, recommended for anyone
                            seeking for quality and affordable education abroad.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Major cities</h5>
                          <p className="text-white">
                            Warsaw, Kraków, Łódź, Poznań
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="top-medical-university pt-5 pb-5">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="text-center">
                        Top Medical Universities in Poland
                      </h3>
                      <p className="text-justify">
                        <ol>
                          <li>
                            <b>
                              Medical University of Gdansk, Republic of
                              Poland-1945
                            </b>
                          </li>
                          <li>
                            <b>
                              Medical University Of Warsaw, Republic of
                              Poland-1809
                            </b>
                          </li>
                          <li>
                            <b>
                              Medical University Of Bialystok, Republic of
                              Poland-1950
                            </b>
                          </li>
                          <li>
                            <b>
                              Medical University Of Lodz, Republic of
                              Poland-2002
                            </b>
                          </li>
                          <li>
                            <b>
                              Medical University Of Lublin, Republic of
                              Poland-1944
                            </b>
                          </li>
                        </ol>
                      </p>
                      <h5 className="text-info pt-2 pb-2">
                        Average temperature of Poland
                      </h5>
                      <p className="text-justify">
                        The weather in Poland is also characterized by
                        transitional periods between the four seasons of the
                        year. The weather in Poland is rather unpredictable and
                        varied. The summer can be really hot even 35ᴼC.The
                        temperature from December to late February usually
                        fluctuate around 0ᴼC to -8ᴼC. In the mountains snow
                        usually covers slopes in the period.
                      </p>
                      <p className="text-justify">
                        The climate conditions in Poland often become
                        problematic for some students to adjust well. The local
                        language in Poland is Polish so the students might feel
                        the language as a barrier outside the university campus.
                        But the medium of coaching in Poland medical
                        colleges/universities is English.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PolandTopMedicalUniversities />
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

export default MbbsInPoland;

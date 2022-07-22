import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import BelarusTopMedicalUniversities from "../Belarus/BelarusTopMedicalUniversity";
import AdmissionProcess from "../Includes/AdmissionProcess";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";
import OtherCountries from "../Includes/OtherCountries";

const MbbsInBelarus = () => {
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
        <title>MBBS in Belarus | MBBS in Abroad | GOE</title>
        <link rel="canonical" href="https://glowoverseas.com/mbbs-in-belarus" />
        <meta
          name="description"
          content="MBBS in Belarus is the best place to Study MBBS in Abroad. Call Us for Free Counselling"
        />
      </Helmet>
      <div id="abt1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="py-md-5">
                <h2>MBBS in Belarus</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      MBBS in Belarus
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
                <div className="study-belarus mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-start text-info pt-2 pb-2">
                          MBBS in Belrus
                        </h4>
                        <p className="text-justify">
                          Belarus, officially the Republic of Belarus, is a
                          landlocked country in Eastern Europe. It is bordered
                          by Russia to the east and northeast, Ukraine to the
                          south, Poland to the west, and Lithuania and Latvia to
                          the northwest. Covering an area of 207,600 square
                          kilometres (80,200 sq mi) and with a population of 9.3
                          million, Belarus is the thirteenth-largest and the
                          twentieth-most populous country in Europe. The country
                          is administratively divided into seven regions. Minsk
                          is the capital and largest city. Until the 20th
                          century, different states at various times controlled
                          the lands of modern-day Belarus, including Kievan
                          Rus', the Principality of Polotsk, the Grand Duchy of
                          Lithuania, the Polish–Lithuanian Commonwealth, and the
                          Russian Empire. In the aftermath of the Russian
                          Revolution in 1917, different states arose competing
                          for legitimacy amidst the Civil War, ultimately ending
                          in the rise of the Byelorussian SSR, which became a
                          founding constituent republic of the Soviet Union in
                          1922. After the Polish-Soviet War, Belarus lost almost
                          half of its territory to Poland. Much of the borders
                          of Belarus took their modern shape in 1939, when some
                          lands of the Second Polish Republic were reintegrated
                          into it after the Soviet invasion of Poland, and were
                          finalized after World War II. During World War II,
                          military operations devastated Belarus, which lost
                          about a quarter of its population and half of its
                          economic resources. The republic was redeveloped in
                          the post-war years. In 1945, the Byelorussian SSR
                          became a founding member of the United Nations, along
                          with the Soviet Union.
                        </p>
                        <h2 className="text-dark pb-2 pt-2">
                          Advantages for Studying MBBS in Belarus
                        </h2>
                        <ul className="pt-2 pb-2">
                          <li>
                            There is a very high chance of Permanent Residence &
                            Settlement in Europe after completion of study
                            program.
                          </li>
                          <li>
                            Almost all the courses are recognized
                            internationally. You have the Opportunity to get
                            very good jobs after graduation because of the high
                            standard and general acceptance of the degrees.
                          </li>
                          <li>
                            Belarus universities have about the lowest tuition
                            fee in the world; hence students can easily afford
                            the cost of education.
                          </li>
                          <li>
                            Belarusian Universities are recognized
                            internationally for the depth and quality of their
                            courses. The Education qualification is globally
                            accepted as an indication of a high level of
                            competence in a broad range of fields – from science
                            to business, foreign language training to arts and
                            from legal studies to medicine.
                          </li>
                          <li>
                            The Cost of Education and general living cost is
                            relatively cheap, compared to most of the other
                            European countries.
                          </li>
                          <li>
                            Due to the high demand of the internationally
                            recognized Universities and courses, almost all the
                            Institutions are already open to the English Medium
                            of Instruction. This means you can study in English
                            Medium in almost all courses.
                          </li>
                          <li>
                            Most of the Universities enjoy a great experience
                            through Visiting Professors from other parts of the
                            world like the United States, Canada, and United
                            Kingdom etc.
                          </li>
                          <li>
                            There is a very high chance of Permanent Residence &
                            Settlement in Europe after completion of study
                            program.
                          </li>
                          <li>
                            Getting a visa to study in Belarus is relatively
                            easy. Most times, intending students are not are not
                            refused visas. The visa is almost fully guaranteed.
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
                <div className="b-belarus-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center">
                          <u>About Belarus</u>
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
                            Minsk - Capital of Belarus
                          </p>
                          <p className="text-white">
                            Language spoken - Belarusian, Russian
                          </p>
                          <p className="text-white">
                            National currency is Belarusian ruble (BYN).1 USD =
                            .0040.
                          </p>
                        </div>
                        <div className="belarus-map">
                          <p className="text-white text-center">
                            Population – 94 Lakhs
                            <br />
                            Territory – 207,600 sq. km
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="inner-bg">
                          <div className="d-flex flex-inline">
                            <span className="high">
                              The highest average July temperature is +10 …
                              -14°C
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
                          <h5 className="text-white">Religion in Belarus</h5>
                          <p className="text-white">
                            Christianity is the main religion in Belarus, with
                            Eastern Orthodoxy being the largest denomination.
                            The legacy of the state atheism of the Soviet era is
                            evident in the fact that a part of the Belarusians
                            (especially in the east part of the country) are not
                            religious.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Unlike many other European countries higher
                            education in Belarus is comparatively cost
                            effective.It is indeed, recommended for anyone
                            seeking for quality and affordable education abroad.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Major cities</h5>
                          <p className="text-white">
                            Minsk, Pinsk, Viciebsk, Grodno
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
      <BelarusTopMedicalUniversities />
      <OtherCountries />
      <AdmissionProcess />
      <FAQ />
      <FreeCouncelling
        show={show}
        handleClose={handleClose}
        title="Contact Us for Free Counselling"
      />
    </>
  );
};

export default MbbsInBelarus;

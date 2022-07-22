import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";

import { Button, Image } from "react-bootstrap";
import Img1 from "../../Images/mbbs-in-belarus/medical-universities/belarusian-state-medical-university.png";
import BelarusTopMedicalUniversities from "./BelarusTopMedicalUniversity";
import OtherCountries from "../Includes/OtherCountries";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";

const GrodnoStateMedicalUniversity = () => {
  const [show, setShow] = useState(false); useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title> Grodno State Medical | MBBS in Belarus | GOE</title>
        <link rel="canonical" href="https://glowoverseas.com/mbbs-in-belarus/grodno-state-medical-university" />
        <meta
          name="description"
          content="MBBS in Grodno State Medical University is the best place to Study MBBS in Belarus. Call Us for Free Counselling"
        />
      </Helmet>
      <div id="abt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="py-md-5">
                <h2>MBBS in Belarus</h2>
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
                        to="/mbbs-in-belarus"
                      >
                        MBBS in Belarus
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Grodno State Medical University
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
                        Grodno State Medical University
                      </h3>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-8">
                      <div className="university">
                        <p className="text-justify pb-2">
                          Grodno State Medical University was founded in 1958
                          and is the oldest medical school in Belarus. It
                          specialises in medicine and medical psychology. The
                          first autopsy in Eastern Europe, on King Stefan
                          Batory, was conducted in Grodno in 1586 and there was
                          a medical faculty in the city as early as 1775.It
                          started as a single-department institution and has
                          since added departments of preparation in 1970 and
                          paediatrics in 1979 before, in 1991, starting the
                          first department of nursing in newly-independent
                          Belarus. It achieved university status in 2000 and now
                          has six faculties: general medicine; paediatrics;
                          psychology; diagnostics (which includes nursing), and
                          a faculty specifically for international students, as
                          well as a research school with centres devoted to 11
                          specialisms. There are three doctoral schools also
                          affiliated with the institution and Grodno State
                          Medical University works in partnership with four
                          hospitals in the city as well as specialised
                          facilities for psychology and narcology, cardiology
                          and perinatal care. It has published its own academic
                          journal since 2002.It describes itself as having
                          "formed its own traditions and strong scientific
                          schools". All courses are offered in Russian, with
                          some courses offering teaching in a mix of Russian and
                          English.
                        </p>
                        <ul>
                          <li>Established in 1921.</li>
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
                        <Image src={Img1} alt="" className="img-fluid rounded shadow-sm"></Image>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="study-belarus mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-info pt-2 pb-2">
                          MBBS in Belarus
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
                        <h3 className="text-info pb-2 pt-2">
                          Advantages for Studying MBBS in Belarus
                        </h3>
                        <ul className="pb-2">
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
                          <Button onClick={handleShow} className="btn btn-info text-white">Free Counselling</Button>
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
                <div className="top-medical-university pt-5 pb-5">
                  <div className="row pt-5">
                    <div className="col-md-12">
                      <div className="university">
                        <h3 className="pb-2 text-center">Fees Structure</h3>
                        <p className="text-justify">
                          Study MBBS in Belarus at Grodno State Medical
                          University affordable cost. Fell free to talk to our
                          counsellors to get the complete fee structure.
                        </p>
                        <div className="text-center">
                          <Button onClick={handleShow} className="btn btn-info text-white">Free Counselling</Button>
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
                          In Grodno State Medical Universities provides a
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

      <BelarusTopMedicalUniversities />
      <OtherCountries />
      <FAQ />
      <FreeCouncelling show={show} handleClose={handleClose} title="Contact Us for Free Counselling" />
     </>
  );
};

export default GrodnoStateMedicalUniversity;

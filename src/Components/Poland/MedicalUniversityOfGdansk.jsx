import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";

import { Button, Image } from "react-bootstrap";
import Img1 from "../../Images/mbbs-in-poland/medical-universities/medical-university-of-gdansk.png";
import AdmissionProcess from "../Includes/AdmissionProcess";
import PolandTopMedicalUniversities from "./PolandTopMedicalUniversities";
import OtherCountries from "../Includes/OtherCountries";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";

const MedicalUniversityOfGdansk = () => {
  const [show, setShow] = useState(false); useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    	<Helmet>
        <meta charSet="utf-8" />
        <title>  Medical University of Gdansk | MBBS in Poland | GOE</title>
        <link rel="canonical" href="https://glowoverseas.com/mbbs-in-poland/medical-university-of-gdansk" />
        <meta
          name="description"
          content="MBBS in  Medical University of Gdansk is the best place to Study MBBS in Poland. Call Us for Free Counselling"
        />
      </Helmet>
      <div id="abt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="py-md-5">
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
                        to="/mbbs-in-poland"
                      >
                        MBBS in Poland
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Medical University of Gdansk
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
                        Medical University of Gdansk
                      </h3>
                    </div>
                  </div>
                  <div className="row pt-2">
                    <div className="col-md-8">
                      <div className="university">
                        <p className="text-justify">
                          Gdansk Medical University was founded on October 8,
                          1945. The university has an old tradition for
                          practicing medicine, teaching in medical and natural
                          science monitored by eminent experts of respective
                          subjects.
                        </p>
                        <p className="text-justify">
                          As per Perspektywy ranking, it is the best medical
                          school in a country & ranked among top 10 Polish state
                          universities.
                        </p>
                        <p className="text-justify">
                          The Gdańsk Medical University educates 6000 students
                          out of them some of Ph.D. students, postgraduate
                          students and undergraduate students. The university is
                          a part of International Research Agenda program
                          provided by foundation of Polish science.
                        </p>
                        <p className="text-justify">
                          University has a Medical Simulation Canter, modern
                          sports canter and student’s club association to
                          organize the activities like student exchange
                          programs, press, conferences, etc.
                        </p>
                        <ul>
                          <li>Established in 1945.</li>
                          <li>University Type: Government University</li>
                          <li>English Medium Courses</li>
                          <li>MBBS course duration 6 years</li>
                          <li>Recognized by MCI / WHO / ECFMG / IMED</li>
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
                <div className="study-poland mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-info pt-2 pb-2">MBBS in Poland</h4>
                        <p className="text-justify">
                          Poland, officially the Republic of Poland, is a
                          country located in Central Europe. It is divided into
                          16 administrative provinces, covering an area of
                          312,696 square kilometres, and has a largely temperate
                          seasonal climate.
                        </p>
                        <p className="text-justify">
                          Since 2010, Poland has become the best choice for
                          Indian students for pursuing MBBS abroad due to high
                          quality of medical education, low tuition fee’s
                          structure & high growth rate after completing MBBS in
                          Poland.
                        </p>
                        <p className="text-justify">
                          From last 5 years, more than 7000 students are already
                          studying medicine in Poland. Now a days, many students
                          from India are preferring to opt for MBBS in Poland
                          over India.
                        </p>
                        <p className="text-justify">
                          The Poland medical schools are some of the most
                          reputable medical schools around the world. The degree
                          from Poland medical universities is a globally
                          recognized and the students are eligible to appear for
                          the NMC screening test.
                        </p>
                        <p className="text-justify">
                          MBBS in Poland is facilitating Indian students with
                          top medical universities which are recognized by NMC
                          (National Medical Commission) & accredited by the
                          Ministry of Education & Science and the Ministry of
                          Health. MBBS admission in Poland is a smooth and easy
                          process with us, so that students can apply directly
                          to the selected top medical universities or colleges
                          without any hassle.
                        </p>
                        <h2 className="pt-2 pb-2 text-info">
                          Why Should You Choose for MBBS in Poland?
                        </h2>
                        <ul className="">
                          <li>
                            Listed in world directory of medical colleges.
                          </li>
                          <li>
                            Top Universities facilitates students with high
                            quality of education system.
                          </li>
                          <li>
                            The fee structure of MBBS courses in Poland is
                            affordable.
                          </li>
                          <li>
                            One Year Internship with quality government &
                            private hospitals.
                          </li>
                          <li>
                            All the medical colleges in the Poland follow
                            English medium of instruction.
                          </li>
                          <li>
                            The medical colleges of Poland are very popular due
                            to their highly experienced staff in the field of
                            medicine.
                          </li>
                          <li>
                            The Poland medical degree is a globally recognized
                            degree.
                          </li>
                          <li>
                            Poland offers a blue card work permit for students
                            who have completed their MBBS degree so that they
                            can get a job and settle down as well in this
                            country.
                          </li>
                          <li>
                            All medical universities in Poland are recognized
                            and approved by international bodies such as WHO &
                            NMC.
                          </li>
                          <li>
                            It is easier to get admission for PG after MBBS in
                            Poland in comparison to get admission in India for
                            PG.
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
                            Poland in religious geography lies on the boundaries
                            separating Roman Catholic, Eastern Orthodox and
                            Islamic spheres of influence.
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
                  <div className="row pt-5">
                    <div className="col-md-12">
                      <div className="university">
                        <h3 className="pb-2 text-center">Fees Structure</h3>
                        <p className="text-justify">
                          Study MBBS in Poland at Medical University of Gdansk
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
                          In International Medical School provides a quality
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
      <PolandTopMedicalUniversities />
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

export default MedicalUniversityOfGdansk;

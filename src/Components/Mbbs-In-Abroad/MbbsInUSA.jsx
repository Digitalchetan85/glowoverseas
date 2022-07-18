import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";
import OtherCountries from "../Includes/OtherCountries";
import USAUniversities from "../USA/USAUniversities";

const MbbsInUSA = () => {
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
                <h2>MBBS in USA</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a as={Link} to="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      MBBS in USA
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
                <div className="study-usa mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-start text-info pt-2 pb-2">
                          MBBS in USA
                        </h4>
                        <p className="text-justify">
                          MBBS in the USA is the dream of every Indian student
                          who wants to pursue their medical career in the USA
                          after education. An MBBS is one of the long-term
                          programs offered in the USA and the process is very
                          different for international students. They do not take
                          a considerable number of students like other countries
                          do but take the best students from among the crowd.
                          The difficulty level of the MCAT exam gives an insight
                          into the rigorous approach followed for an admission
                          in the USA for MBBS. More than 3000 students keep
                          their first choice as the USA, but only 0.1% of them
                          get the chance to get admission. The admission process
                          depends on the criteria of the board, universities,
                          and the entrance test.
                        </p>
                        <p className="text-justify">
                          <b>Via MCAT – </b> is one of the most difficult
                          roadmaps for any aspirant. Rarely do any student get a
                          pass. Also, the cost of this program is much more
                          expensive than that of Indian private colleges. MCAT
                          exam is controlled by AAMC. For getting admission to a
                          top medical college in the USA, you need more than a
                          500 score on MCAT.
                        </p>
                        <p className="text-justify">
                          <b>Via the Caribbean – </b>This roadmap is quite
                          famous in India. Many aspirants select the MD program
                          of the USA via the Caribbean Islands. It is one of the
                          cheapest ways. It costs almost 70 to 80 lakhs.
                          Universities in Caribbean provide pre-med and BS
                          courses, and rotation too if students want it from the
                          Caribbean at low cost. It looks easy, but it is not,
                          though all you really require is the right knowledge.
                        </p>
                        <p className="text-justify">
                          <b>WHY STUDY MBBS IN USA?</b>
                          <ol>
                            <li>
                              passing ratio is remarkably high for students who
                              are completing their MD program in the USA.
                            </li>
                            <li>NO donation.</li>
                            <li>Easy admission Policy.</li>
                            <li>Clinical rotation availability.</li>
                            <li>MCI, WHO approved universities.</li>
                            <li>
                              The cost of MBBS + PG in the USA is the same as
                              compared to the Indian private college MBBS
                              program.
                            </li>
                            <li>
                              Facilities and accommodation are very good for
                              international students.
                            </li>
                          </ol>
                        </p>
                        <h2 className="text-info pt-2 pb-2">
                          Advantages of Studying in USA
                        </h2>
                        <p className="text-justify">
                          <ul>
                            <li>
                              Universities in the United States offer a
                              well-designed syllabus as well as a lot of
                              practical sessions.
                            </li>
                            <li>
                              There is a good ratio between teachers and
                              students, and each student receives individual
                              attention.
                            </li>
                            <li>
                              In addition to international research projects,
                              students can participate in international
                              competitions.
                            </li>
                            <li>
                              Students can take a break from studying by
                              participating in cultural events at American
                              universities.
                            </li>
                            <li>
                              The diversity of students in the USA allows them
                              to familiarize themselves with the culture and
                              customs of other places.
                            </li>
                            <li>
                              While studying medicine in the United States, the
                              campus, as well as the surrounding environment,
                              are friendly to students.
                            </li>
                            <li>
                              Staff members are renowned for being extremely
                              helpful to students.
                            </li>
                            <li>
                              Guidance professors and student guides assist
                              students as they settle into universities
                            </li>
                            <li>
                              Students can commute easily to the university with
                              the university's assistance.
                            </li>
                            <li>
                              International students can study MBBS in the USA
                              with great confidence, and this certainly provides
                              a great deal of relief to the students.
                            </li>
                            <li>
                              Moreover, universities strongly encourage
                              anti-ragging committees as well as no
                              discrimination based on caste, creed, or gender.
                            </li>
                            <li>
                              Indian banks provide very good interest rates on
                              student loans to Indian students.
                            </li>
                            <li>
                              The visa application process is hassle-free for
                              students and most student visa applications are
                              approved.
                            </li>
                            <li>
                              University capitalization and donation fees are
                              not charged.
                            </li>
                            <li>
                              MBBS in the USA includes three phases, including
                              Clinical Rotations. Clinical rotations allow
                              students to gain clinical experience at some of
                              the finest hospitals in the US and abroad, assist
                              doctors, and be a part of patient care under
                              expert supervision.
                            </li>
                            <li>
                              MBBS programs in America can be followed by
                              postgraduate medical programs anywhere in the
                              world. A medical student who earns a degree in the
                              US usually pursues a three-year residency in the
                              US after graduation.
                            </li>
                            <li>
                              On the university campus, medical students
                              pursuing MBBS in the USA are offered good
                              facilities.
                            </li>
                          </ul>
                        </p>
                        <p className="pt-3 pb-3 text-justify text-info">
                          <strong>Quick Information About MBBS In USA</strong>
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
                                  - 50% in PCB for General and 40% for SC/
                                  ST/OBCs in 10+2
                                </td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>Course Duration</b>
                                </td>
                                <td className="px-2">
                                  - 4.5 + 1 year Internship
                                </td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>NEET</b>
                                </td>
                                <td className="px-2">- Yes, compulsory</td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>MCAT Exam</b>
                                </td>
                                <td className="px-2">- Required</td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>IELTS/TOFEL</b>
                                </td>
                                <td className="px-2">- Required</td>
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
                            Free Counselling
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="b-usa-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-info">
                          <u>About USA</u>
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
                            WASHINGTON, D.C. - Capital of USA
                          </p>
                          <p className="text-white">
                            Language spoken - English
                          </p>
                          <p className="text-white">
                            National currency is US Dollar (USD).
          
                          </p>
                        </div>
                        <div className="usa-map">
                          <p className="text-white text-center">
                            Population 32.95 crores (2020)
                            <br />
                            Territory – 6, 03,700 sq. km
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="inner-bg">
                          <div className="d-flex flex-inline">
                            <span className="high">
                              The highest average July temperature is +17… +24°C
                            </span>
                            <span className="low">
                              The lowest temperature of January and February is
                              -7… -8°C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Religion in USA</h5>
                          <p className="text-white">
                          The United States remains a predominantly Christian nation, with 78% of all adults identifying with a Christian faith, and more than 9 in 10 of those who have a religious identity identifying as Christians.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Unlike many other European countries higher
                            education in USA is comparatively cost effective.It
                            is indeed, recommended for anyone seeking for
                            quality and affordable education abroad.
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
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="text-center">MBBS In USA Syllabus</h3>
                      <p className="text-justify">
                        <b> Phase/ Semesters - </b> Subjects
                      </p>
                      <p className="text-justify">
                        <b> Pre – Clinical/ Semester 1 – 2 - </b> Anatomy,
                        Biochemistry, Physiology
                      </p>
                      <p className="text-justify">
                        <b> Para – Clinical/ Semester 3 – 5 - </b> Clinician
                        postings in forensic medicine, pathology, pharmacology,
                        microbiology, and beginning with the outpatient
                        department in local communities
                      </p>
                      <p className="text-justify">
                        <b> Clinical/ Semester 6 – 9 - </b> Psychiatry,
                        dermatology, obstetrics, gynecology, and paediatrics
                        belong to community medicine; medical subjects (e.g.,
                        psychiatry, pediatrics) are allied science subjects
                      </p>
                      <h5 className="pt-3 pb-3">
                        MBBS In USA Vs MBBS In India
                      </h5>
                      <div className="table-responsive">
                        <table className="table-bordered mt-3 mb-3 w-100 align-middle">
                          <thead>
                            <tr>
                              <th className="px-2" scope="col">
                                MBBS In USA{" "}
                              </th>
                              <th className="px-2" scope="col">
                                MBBS In India
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-2">
                                There is no such degree as MBBS in the USA. As a
                                result, it grants MD degrees, which are
                                equivalent to medical degrees.
                              </td>
                              <td className="px-2">
                                Degree: The first degree in medicine is the MBBS
                                (Bachelor of Medicine and Bachelor of Surgery).
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2">
                                MBBS fees is on the higher side of the spectrum.
                              </td>
                              <td className="px-2">
                                MBBS fees are affordable.
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2">
                                Along with NEET, FMGE and TOEFL/IELTS need to be
                                applied for.
                              </td>
                              <td className="px-2">
                                Admission in India is granted through NEET.
                              </td>
                            </tr>

                            <tr>
                              <td className="px-2">
                                Residency and Fellowship are the pathways to
                                specialization after MD.
                              </td>
                              <td className="px-2">
                                MBBS can be followed by specialization in MD/MS
                                or DM/MCh.
                              </td>
                            </tr>

                            <tr>
                              <td className="px-2">
                                Duration of Education 4 Years.
                              </td>
                              <td className="px-2">
                                Duration of education 5.5 Years.
                              </td>
                            </tr>

                            <tr>
                              <td className="px-2">
                                No donation charge can be asked by universities
                              </td>
                              <td className="px-2">
                                Donation fees can be demanded by the university
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2">
                                Flexible patterns and practical sessions.
                              </td>
                              <td className="px-2">
                                Rigid patterns with very uniformed scheduling.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h5 className="pt-3 pb-1">
                        SELECTION OF UNIVERSITIES TO STUDY IN USA?
                      </h5>
                      <p className=" pt-1 pb-1 text-justify">
                        In India, the students are misguided due to less
                        awareness of the parents, there are 3 most important
                        issues that you must see, before ensuring that you
                        select the university for a selection medical career in
                        USA.
                        <ol>
                          <li>MCI approval of the university </li>
                          <li>approval by CAAM-HP for the university</li>
                          <li>
                            unconditional listing on the university of WORLD
                            DIRECTORY OF MEDICAL SCHOOLS(WDOMS)
                          </li>
                        </ol>
                      </p>
                      <h5 className=" pt-2 pb-2">
                        SCHOLARSHIP FOR INDIAN STUDENTS TO STUDY MBBS IN THE USA
                      </h5>
                      <p className="text-justify">
                        As we see, studying MBBS in the USA is much more
                        expensive as compared to all other countries. This fee
                        becomes one of the major challenges for many aspirants
                        who are dedicated to studying. But fret not because
                        there are many scholarships the US government provides
                        in the educational system for international students.
                      </p>
                      <p className="text-justify">
                        For getting a generous grant the candidate must have to
                        fulfil the requirements. Students must have an excellent
                        academic record with outstanding co-curriculars and
                        extra-curriculars. If you have these aspects sorted, all
                        you have to focus on is the appropriate choice of
                        university, as per the background of your score and
                        grades. The team GLOW OVERSEAS EDUCATION will help you
                        with that.
                      </p>
                      <p className="text-justify">
                        <b>
                          Some of the reasons why studying MBBS in America is a
                          wise choice:
                        </b>
                      </p>
                      <ul>
                        <li> The country is developed.</li>
                        <li>
                          The theory is taught in conjunction with classroom
                          teaching and world-class technology provided to
                          students.
                        </li>
                        <li>
                          MBBS degrees are accepted worldwide and students do
                          not have to pass the FMGE (Foreign Medical Graduate
                          Examination) to work in India.
                        </li>
                        <li>
                          The medical council of India recognizes top
                          universities in America, and many of their alumni work
                          for international health organizations.
                        </li>
                        <li>
                          Accommodations are readily available at universities
                          in the form of dorms and hostels.
                        </li>
                        <li>
                          Additionally, if a student wishes to stay in rented
                          apartments, they can get great deals on those as well.
                        </li>
                        <li>
                          There is a well-connected travel system in place and
                          constant roadmaps are provided so that students are
                          not lost.
                        </li>
                        <li>
                          Food options in the United States are diverse, so
                          students can pick and choose their favourites.
                        </li>
                        <li>
                          Campus cultural events can keep students' minds
                          engaged and give them a break from studying.
                        </li>
                        <li>
                          In universities, students have access to a fully
                          equipped library with books from almost all genres to
                          read and study.
                        </li>
                        <li>
                          In addition, there are many public libraries where
                          students can study.
                        </li>
                        <li>
                          When students travel within the country, they can take
                          advantage of great discounts
                        </li>
                        <li>
                          Scholarships are offered by many universities in
                          America.
                        </li>
                        <li>
                          Students have access to various cafes and workspaces
                          where they can study and enjoy some alone time.
                        </li>
                        <li>
                          The weather in America varies greatly, and students
                          can experience warm summers and very cold winters.
                        </li>
                        <li>
                          Holidays offer great opportunities to explore some of
                          America's most iconic tourist attractions, such as the
                          Statue of Liberty and the MET museum.
                        </li>
                        <li>
                          Graduates of the program can work in repeated
                          hospitals in the country after they complete their
                          studies.
                        </li>
                        <li>
                          Moreover, they can pursue their Ph.D. degree in
                          America as well.
                        </li>
                        <li>
                          For students who wish to earn some extra money while
                          learning, internships and part-time jobs are
                          available.
                        </li>
                        <li>
                          Due to the high quality of education in the USA, its
                          degree has a lot of value in almost any country.
                        </li>
                        <li>
                          There is a very strict code of hiring for teaching
                          staff in American universities, so someone with a rich
                          knowledge background and experience teaching at
                          universities is an essential candidate.
                        </li>
                        <li>
                          There are exchange programs available at some of the
                          universities in the United States with reputable
                          universities all over the world.
                        </li>
                        <li>
                          All universities use English as their medium of
                          instruction.
                        </li>
                        <li>
                          There is great demand for doctors from the USA around
                          the world, and they are highly respected as well as
                          acclaimed.
                        </li>
                        <li>
                          Despite the higher tuition fees in the most
                          prestigious universities in America, it is an
                          investment in a better future
                        </li>
                      </ul>

                      <h3 className="text-center pt-5 pb-3">
                        Top Medical Universities in USA
                      </h3>
                      <p className="text-justify">
                        Glow Overseas Education recommended Universities to
                        Study MBBS in USA.
                      </p>
                      <ul className="pt-2 pb-2">
                        <li>
                          <a as={Link} to="/mbbs-in-usa/texila-american-university-college">
                            Texila American University College
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <USAUniversities />
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

export default MbbsInUSA;

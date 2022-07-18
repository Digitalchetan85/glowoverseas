import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Col, Image, Row } from "react-bootstrap";
import AdmissionProcess from "../Includes/AdmissionProcess";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";
import OtherCountries from "../Includes/OtherCountries";
import KazakhstanTopMedicalUniversities from "../Kazaksthan/KazakhstanTopMedicalUniversities";

const MbbsInKazakhstan = () => {
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
        <title>MBBS in Kazakhstan | MBBS in Abroad | GOE</title>
        <link
          rel="canonical"
          href="https://glowoverseas.com/mbbs-in-kazakhstan"
        />
        <meta
          name="description"
          content="MBBS in Kazakhstan is the best place to Study MBBS in Abroad. Call Us for Free Counselling"
        />
      </Helmet>
      <div id="abt1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pt-5 pb-5">
                <h2>MBBS in Kazakhstan</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      MBBS in Kazakhstan
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
                <div className="study-kazakhstan mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-start text-info pt-2 pb-2">
                          MBBS in Kazakhstan
                        </h4>
                        <p className="text-justify">
                          The main highlight is Kazakhstan offers MBBS courses
                          at fair and affordable prices that are reasonable for
                          students of all countries. The universities in
                          Kazakhstan offer high clinical practice to the
                          students to make sure they take good practical
                          exposure before they head out to professional life.
                          The faculty and staff in the medical universities is
                          highly experienced. There are a lot of affiliated
                          hospitals. There are various facilities provided in
                          recognized universities of Kazakhstan. The MCI
                          approved universities of Kazakhstan include students
                          from all corners of the world. At a very minimal rate
                          Kazakhstan for Indian students is always worth money
                          as an MBBS course
                        </p>
                        <p className="text-justify">
                          Kazakhstan offers top-ranked government universities
                          which are MCI and WHO approved, with the low cost of
                          tuition fees for MBBS. Medical Universities here are
                          famous because of their quality of education, growth
                          in the world ranking, and superior infrastructure.
                        </p>
                        <p className="text-justify">
                          First thing is the tuition fee structure is very
                          affordable. Kazakhstan has a Best Teacher - Student
                          Ratio. The curriculum for MBBS in Kazakhstan is
                          designed as per the international standard. The degree
                          has been recognized all over the world. Kazakhstan
                          offers a high-quality education at a cheaper fee. The
                          medical colleges of Kazakhstan have been Listed in the
                          World Directory. To get a seat in the best medical
                          universities there is No donation & capitation fees.
                          No need for IELTS & TOEFL
                        </p>
                        <p className="text-justify">
                          The students are eligible to practice in any part of
                          the world, after completing MBBS course from
                          Kazakhstan medical university. All medical
                          universities in Kazakhstan use modern technology and
                          infrastructure and they are well equipped. Compared to
                          other countries in Europe, Cost of living in
                          Kazakhstan is very cheap. Tuition fee and
                          accommodation fees in medical universities are very
                          affordable. TOEFL for admission.
                        </p>
                        <p className="text-justify">
                          Among all other options from the east European
                          countries such as Ukraine Georgia Belarus to study
                          MBBS from Kazakhstan for Indian students it is the
                          best of all the options Even though MCI approval is is
                          not necessary anymore, it is suggested to choose
                          universities which are ECFMG approved in order to
                          ensure quality of education and highly experience.
                          this will always help you to get practice licence in
                          India as well as use after completing MBBS at the best
                          and low-cost Kazakhstan medical college
                        </p>
                        <p className="text-justify">
                          GLOW OVERSEAS EDUCATION present more than 10+ top
                          universities in Kazakhstan. glow overseas education
                          selects only top universities in Kazakhstan for MBBS
                          based of most important criteria
                        </p>

                        <p className="pt-3 pb-2 text-justify text-info fw-bold">
                          Quick Information Table
                        </p>
                        <div className="table-respionsive">
                          <table className="table-bordered pt-3 pb-3 align-middle w-100">
                            <tbody>
                              <tr>
                                <td className="px-2">
                                  <b>Basic Eligibility</b>
                                </td>
                                <td className="px-2">
                                  - 60% in PCB for General 40% for SC/ST{" "}
                                </td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>Medium of Teaching</b>
                                </td>
                                <td className="px-2">- English </td>
                              </tr>

                              <tr>
                                <td className="px-2">
                                  <b>NEET</b>
                                </td>
                                <td className="px-2">- Yes, compulsory</td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>IELTS/TOFEL</b>
                                </td>
                                <td className="px-2">- Not Required</td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>Minimum Course Fee </b>
                                </td>
                                <td className="px-2">- Rs. 2 Lakhs/Year</td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>Maximum Course Fee </b>
                                </td>
                                <td className="px-2">- Rs. 5 Lakhs/Year</td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>Top Medical Universities </b>
                                </td>
                                <td className="px-2">
                                  - Al-Farabi Kazakh National University, Samey
                                  State Medical University, Kazakh National
                                  Medical University
                                </td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>Universities Recognition </b>
                                </td>
                                <td className="px-2">- NMC & WHO approved</td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>Cost of Living in Kazakhstan </b>
                                </td>
                                <td className="px-2">
                                  - Rs. 5 - 10 thousands/Month
                                </td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>Course Duration </b>
                                </td>
                                <td>- 6 (including 1 year internship)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <h5 className="pt-5 pb-3 text-info">
                          ADVANTAGES OF MBBS IN KAZAKHSTAN
                        </h5>
                        <ul>
                          <li>
                            For every student, it is not possible to afford the
                            high donation or tuition fee charges in the private
                            medical colleges in India. This makes Kazakhstan a
                            very wise decision. Kazakhstan offers facilities
                            which the medical universities in an affordable
                            cost.
                          </li>
                          <li>
                            As a medium of instruction English is used in the
                            University campus to avoid sort of language barriers
                          </li>
                          <li>
                            For the students coming from all corners of the
                            world good hostel and food facility is also
                            available
                          </li>
                          <li>
                            MBBS In Kazakhstan offered the course in very
                            affordable tuition fee and there is very limited
                            English-taught program is available for
                            international students.
                          </li>
                          <li>
                            Tuition fees are extremely low compared to those in
                            other countries.
                          </li>
                          <li>
                            The package is reasonable compared to other
                            countries for MBBS.
                          </li>
                          <li> Indian Mess facility available.</li>
                          <li>
                            No donation is required for Government University.
                          </li>
                          <li> Top world-ranked universities are available.</li>
                          <li>
                            The cost of living is reasonable compared to other
                            countries.
                          </li>
                          <li>
                            Superior infrastructure with good clinical exposure.
                          </li>
                          <li>
                            Experienced faculty available with quality pedagogy.
                          </li>
                          <li>
                            Kazakhstan offers completing an internship in the
                            home country as per a student ‘s choice.
                          </li>
                          <li>
                            scholarship options in Kazakhstan which is based on
                            merit basis.
                          </li>
                          Teaching medium for MBBS in Kazakhstan However, before
                          you take the decision, you must understand that there
                          are 3 types of MBBS courses in Kazakhstan in various
                          universities The types are:
                          <li>
                            fully English taught MBBS courses in Kazakhstan [in
                            very few Kazakhstan MBBS COLLEGE]
                          </li>
                          <li>
                            fully Kazakh taught MBBS program in Kazakhstan [all
                            the Kazakhstan medical universities]
                          </li>
                          <li>
                            bilingual programs [3years in English and last
                            3years in the Kazakh local language in most of the
                            university]
                          </li>
                        </ul>
                        <h2 className="pt-2 pb-2 text-info">
                          <b>So MBBS in Abroad is good?</b>
                        </h2>
                        <p className="text-justify">
                          Ask you friendly counsellor from glow overseas
                          education today! Abroad MBBS value in India is always
                          high! You can get direct admission into MBBS in Europe
                          at a cheap university in Kazakhstan and also get a
                          good quality education and future prospects there are
                          hardly any Kazakh MBBS disadvantages people have now
                          realised that even if not the best country to study
                          medicine in the world to study MBBS in Kazakhstan is a
                          student decision. Also, in a GLOW OVERSEAS EDUCATION
                          represented Kazakhstan medical school, MBBS is
                          completely taught in the English language, there is
                          huge number of Indian students who have returned back
                          to India after completing they study. The education
                          system in Kazakhstan is a perfect combination of
                          theory and practical knowledge. It gives students a
                          complete all-round experience during they internship
                          period
                        </p>
                        <p className="">
                          The most noteworthy factors to study MBBS Kazakhstan
                        </p>
                        <ul>
                          <li>
                            you do not need to pay even a single paisa for
                            reserving the seat in the bet medical college in
                            Kazakhstan except university application and
                            processing fees with GOE MBBS abroad consultants
                          </li>
                          <li>
                            never agree to pay tuition fees to the agents! the
                            students need need to pay the fees directly to the
                            Kazakhstan medical university.
                          </li>
                          <li>
                            MCI screening test/NEXT coaching is noy available in
                            most of the Kazakhstan medical universities
                          </li>
                          <li>
                            The agents show the tuition fees of the program
                            based on Kazakh taught MBBS course however, when you
                            reach there, you realize that the university tuition
                            fees charges for English tight program caught be
                            higher this could make your planned financial budget
                            in troubling is a responsible career counsellor for
                            MBBS abroad and has a professional approach.
                          </li>
                          <li>
                            while studying in Kazakhstan student is not allowed
                            to do any part time job
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
                <div className="b-kazakhstan-image">
                  <div className="m-2">
                    <div className="row">
                      <div className="col-md-12">
                        <h2 className="text-center">
                          <u>About Kazakhstan</u>
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
                            Nur-Sultan - Capital of Kazakhstan
                          </p>
                          <p className="text-white">
                            Language spoken - Kazakh, Russian, English
                          </p>
                          <p className="text-white">
                            National currency is Hryvnia (UHR).1 USD = 421.18
                            Tenge
                          </p>
                        </div>
                        <div className="kazakhstan-map">
                          <p className="text-white text-center">
                            Population – 1,85 Crores
                            <br />
                            Territory – 27,00,000 sq. km
                          </p>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="inner-bg">
                          <div className="d-flex flex-inline">
                            <span className="high">
                              The highest average July temperature is +28 …
                              +30°C
                            </span>
                            <span className="low">
                              The lowest temperature of January and February is
                              -20 … -23°C
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Religion in Kazakhstan</h5>
                          <p className="text-white">
                            Kazakhstan in religious geography lies on the
                            boundaries separating Roman Catholic, Eastern
                            Orthodox and Islamic spheres of influence.
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Education system</h5>
                          <p className="text-white">
                            Most of the universities, following the Russian
                            System, they follow the Asian Curiculum, the
                            education system is high standard ans highly
                            qualified faculties advanced Medical System
                          </p>
                        </div>
                        <div className="pt-1 pb-1">
                          <h5 className="text-white">Major cities</h5>
                          <p className="text-white">Aktau, Aktobe, Almaty</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="top-medical-university pt-5 pb-5">
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="text-center">
                        Top Medical Universities in Kazakhstan
                      </h3>

                      <div className="table-responsive">
                        <table className="table-bordered mt-3 mb-3 w-100 align-middle">
                          <thead>
                            <tr>
                              <th className="px-2" scope="col">
                                University Name
                              </th>
                              <th className="px-2" scope="col">
                                Country Rank
                              </th>
                              <th className="px-2" scope="col">
                                Year of Establishment
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="px-2" scope="row">
                                Kazakh National Medical University
                              </th>
                              <td className="px-2">5</td>
                              <td className="px-2">1931 </td>
                            </tr>
                            <tr>
                              <th className="px-2" scope="row">
                                South Kazakhstan Medical Academy
                              </th>
                              <td className="px-2">19</td>
                              <td className="px-2">1943</td>
                            </tr>
                            <tr>
                              <th className="px-2" scope="row">
                                Karaganda State Medical University
                              </th>
                              <td className="px-2">24</td>
                              <td className="px-2">1950</td>
                            </tr>
                            <tr>
                              <th className="px-2" scope="row">
                                Samey State Medical University
                              </th>
                              <td className="px-2">17</td>
                              <td className="px-2">1953 </td>
                            </tr>
                            <tr>
                              <th className="px-2" scope="row">
                                West Kazakhstan Marat Ospanov State Medical
                                University
                              </th>
                              <td className="px-2">51</td>
                              <td className="px-2">1957 </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h3 className="pt-2 text-info">
                        MBBS Syllabus in Kazakhstan MBBS Colleges
                      </h3>

                      <div className="table-responsive">
                        <table className="table-bordered mt-3 mb-3 w-100 align-middle">
                          <thead>
                            <tr>
                              <th className="px-2" scope="col">
                                Year
                              </th>
                              <th className="px-2" scope="col">
                                Subjects
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="px-2" scope="row">
                                First Year
                              </th>
                              <td className="px-2">
                                Fundamentals of Psychology, Bioorganic
                                Chemistry, Medical Chemistry, Embryology, Human
                                Anatomy, Cytology, Elective Courses, patient
                                Care, Embryology
                              </td>
                            </tr>
                            <tr>
                              <th className="px-2" scope="row">
                                Second Year
                              </th>
                              <td className="px-2">
                                Human Anatomy, Histology, Physiology,
                                Philosophy, Emergency Medicine, Microbiology,
                                Immunology
                              </td>
                            </tr>
                            <tr>
                              <th className="px-2" scope="row">
                                Third Year
                              </th>
                              <td className="px-2">
                                Pathophysiology, Pharmacology, Path morphology,
                                Hygiene and Ecology, Paediatrics, Internal
                                Medicine, General Surgery, Radiology, Elective
                                courses, Narcology, Forensic Medicine,
                                Biostatistics, Social medicine
                              </td>
                            </tr>
                            <tr>
                              <th className="px-2" scope="row">
                                Fourth Year
                              </th>
                              <td className="px-2">
                                Paediatrics, Internal Medicine, Tuberculosis,
                                Surgery, Obstetrics and Gynaecology, Neurology,
                                Ophthalmology, Medical Psychology, Urology
                              </td>
                            </tr>
                            <tr>
                              <th className="px-2" scope="row">
                                Fifth Year
                              </th>
                              <td className="px-2">
                                Epidemiology, Oncology, Social Medicine,
                                Internal Medicine, Surgery, Medical genetics,
                                Traumatology, Gynaecology, Clinical Immunology,
                                Neurosurgery, Obstetrics, Emergency Medicine,
                                Fundamentals of Stomatology
                              </td>
                            </tr>
                            <tr>
                              <th className="px-2" scope="row">
                                Sixth Year
                              </th>
                              <td className="px-2">
                                Internal Medicine, Infectious Diseases,
                                Paediatrics, Surgery, General Practice, Social
                                medicine, Oncology, Obstetrics, Elective
                                Courses.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="table-responsive">
                        <table className="table-bordered mt-3 mb-3 w-100 align-middle">
                          <thead>
                            <tr className="bg-primary text-info text-center">
                              <th className="px-2" scope="col">
                                MBBS in India
                              </th>
                              <th className="px-2" scope="col">
                                MBBS in Kazakhstan
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center px-2">
                                The course might not get international
                                recognition
                              </td>
                              <td className="text-center px-2">
                                Students who complete MBBS from Kazakhstan get a
                                chance to interact with different people from a
                                different community.
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center px-2">
                                The course might not get international
                                recognition
                              </td>
                              <td className="text-center px-2">
                                Students have to go to certain procedures and
                                formalities for admission.
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center px-2">
                                The duration of the course is 5.5 years (4.5
                                years academics + 1-year internship)
                              </td>
                              <td className="text-center px-2">
                                The duration of the course is 5.5 years (4.5
                                years academics + 1-year internship) The
                                duration of the course 5, 5.5 or 6 years
                                (including internship)
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center px-2">
                                The fee structure is Government college: INR
                                11,000 to INR 7.5 lakh (complete course) Private
                                college: INR 20 lakhs to INR 80 lakhs (complete
                                course
                              </td>
                              <td className="text-center px-2">
                                The fee structure is INR 15 to INR 60 lakhs per
                                year
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center px-2">
                                Poor infrastructure and facilities
                              </td>
                              <td className="text-center px-2">
                                Poor infrastructure and facilities Better
                                infrastructure
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <Row className="justify-content-center g-3">
                        <Col md={4}>
                          <div className="">
                            <h5 className="pt-2 pb-2">Education system</h5>
                            <p className="pt-2 pb-2 text-justify">
                              Most of the universities, following the Russian
                              System, they follow the Asian Curriculum, the
                              education system is high standard and highly
                              qualified faculties advanced Medical System
                            </p>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="">
                            <h5 className="pt-2 pb-2">Average temperature </h5>
                            <p className="pt-2 pb-2 text-justify">
                              The highest average July temperature is +28 …
                              +30°C
                              <br />
                              The lowest temperature of January and February is
                              -20 … -23°C .
                            </p>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="">
                            <h5 className="pt-2 pb-2">
                              Religion in Kazakhstan
                            </h5>
                            <p className="pt-2 pb-2 text-justify">
                              Kazakhstan in religious geography lies on the
                              boundaries separating Roman Catholic, Eastern
                              Orthodox and Islamic spheres of influence.
                            </p>
                          </div>
                        </Col>
                      </Row>

                      <p className="text-justify">
                        The students who have to experience their MBBS education
                        It is good to dream big but the path for every thought
                        is not always easy and same.
                      </p>
                      <p className="text-justify">
                        So just reserve the seat in an MCI approved MBBS abroad
                        university which with GOE, may easily be the best
                        medical university Russia as per your budget and relax!
                      </p>
                      <p className="text-justify">
                        Kindly note that many unprofessional MBBS abroad
                        consultants/agents collect money from you for the
                        first-year tuition fees! As you can see as MBBS abroad
                        consultants GOE clearly gives you an indication of the
                        actual medical universities in Kazakhstan, their fees
                        and it service charge
                      </p>
                      <p className="text-justify">
                        Glow Overseas Education recommended Universities to
                        Study MBBS in Kazakhstan.
                        <ul className="pt-2">
                          <li>
                            <a
                              className="text-decoration-none"
                              href="mbbs-in-kazakhstan/al-farabi-national-medical-university"
                            >
                              Al-Farabi National Medical University
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none"
                              href="mbbs-in-kazakhstan/international-medical-school"
                            >
                              International Medical School
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-decoration-none"
                              href="mbbs-in-kazakhstan/jsc-natonal-university"
                            >
                              JSC National Medical University
                            </a>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdmissionProcess />
      <KazakhstanTopMedicalUniversities />
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

export default MbbsInKazakhstan;

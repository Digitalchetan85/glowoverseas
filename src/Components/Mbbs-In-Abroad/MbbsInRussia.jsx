import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import FAQ from "../Includes/FAQ";
import FreeCouncelling from "../Includes/FreeCouncelling";
import OtherCountries from "../Includes/OtherCountries";
import RussianUniverisities from "../Includes/RussianUniverisities";

const MbbsInRussia = () => {
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
              <div className="py-md-5">
                <h2>MBBS in Russia</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a as={Link} to="/">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      MBBS in Russia
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
                <div className="study-russia mb-2">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-2">
                        <h4 className="text-start text-info pt-2 pb-2">
                          MBBS in Russia
                        </h4>
                        <p className="text-justify">
                          Russia is a fine place for students who would love to
                          pursue MBBS. It's well-being and quality of life
                          attracts the students. The course duration in Russia
                          is 5.8 years. MBBS in Russia is considered as the best
                          option for the students who want to study abroad. The
                          reason it is considered as the best option is the
                          advantage of getting high-quality education at an
                          affordable cost. Russia medical universities are
                          recognized by MCI, WHO, UNESCO, etc. Students are keen
                          to take admission in Russia, because of the Russian
                          service and the students who get mbbs admission in
                          Russia are praiseworthy. Doing MBBS in Russia is a
                          great opportunity for the students. The Russian
                          universities occupy the top 30 in the ranking.
                        </p>
                        <p className="text-justify">
                          These specific reasons attract the students to a
                          country like Russia. The Russian service and the
                          training benefit the students in a great extension and
                          that helps them in their fruitful career. Russia is a
                          common destination for students to study MBBS. Other
                          than Russia there are other countries like China,
                          Nepal, Germany, Philippines, Ukraine, Bangladesh and
                          Kyrgyzstan. These countries also provide an affordable
                          course for students. Even though the duration of the
                          course is 5.8 years, the international students who
                          opt to study in Russia are not needed to undergo one
                          year of the preparatory course.
                        </p>
                        <h5 className="text-info pt-2 pb-2">
                          More Information About MBBS In Russia
                        </h5>
                        <div className="table-responsive">
                          <table className="table-bordered mt-3 mb-3 w-100 align-middle">
                            <tbody>
                              <tr>
                                <td className="px-2">
                                  <b>Recognition</b>
                                </td>
                                <td className="px-2">NMC and WHO approved</td>
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
                                <td className="px-2">Yes, compulsory</td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>IELTS/TOFEL</b>
                                </td>
                                <td className="px-2">Not Required</td>
                              </tr>
                              <tr>
                                <td className="px-2">
                                  <b>Medium of Teaching</b>
                                </td>
                                <td className="px-2">English</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="pt-3 pb-2 text-justify">
                          <b>WHY MBBS IN RUSSIA?</b>
                        </p>

                        <ul>
                          <li>
                            The cost of the study in Russia is cheap as compared
                            to western-side countries and India.
                          </li>
                          <li>
                            The MBBS degree is globally recognized, and after
                            completion, you can apply for PG in America or
                            Europe.
                          </li>
                          <li>
                            Infrastructure and hospital facilities are huge with
                            a good clinical environment.
                          </li>
                          <li>
                            The oldest university boasts of experience and
                            skilled faculties with superior knowledge.
                          </li>
                          <li>
                            The living cost in Russia is also low. Students need
                            7000 to 10000 rupees per month as per their needs.
                          </li>
                          <li>
                            A wide range of practical exposure is available.
                          </li>
                          <li> The students to teacher ratio are 7:1.</li>
                          <li>
                            One of the major advantages is that there are
                            programs taught in English, and methodology is
                            almost the same as that used in the Indian
                            curriculum.
                          </li>
                          <li>
                            The advantage of getting to learn a new foreign
                            language exists too.
                          </li>
                        </ul>

                        <p className="pt-2 pb-2 text-justify">
                          <b>The major reasons to choose Russia is:</b>
                        </p>
                        <ul>
                          <li> The quality of education they provide.</li>
                          <li> Very affordable and advanced learning.</li>
                          <li>
                            Russian degree is globally recognized; therefore,
                            students can practice wherever they wish to.
                          </li>
                          <li> The course is recognized by MCI.</li>
                          <li>
                            Students get good and furnished accommodation inside
                            the campus itself.
                          </li>
                          <li>
                            The students who are from India feel at home because
                            of the Indian mess the universities provide.
                          </li>
                          <li>
                            The subsidy is 70% for the MBBS courses in Russian
                            Universities. The average MBBS fee is between 2.5
                            Lakhs to 5 Lakhs per year.
                          </li>
                          <li>
                            MCI Screening Test is provided by most of the
                            Russian universities. Graduates show excellent
                            results in the FMGE exam as a result and land in the
                            best hospitals and industries worldwide.
                          </li>
                          <li>
                            <b>Technically Equipped Learning</b> - Russia is
                            known for the advanced medical universities.
                          </li>
                          <li>
                            <b>Many Specializations Course</b> - Russian
                            universities provide an ample number of courses for
                            students to choose and specialize.
                          </li>
                          <li>
                            MBBS in Russia provides Goal-Oriented Learning.
                          </li>
                          <li> Faculties are highly skilled.</li>
                          <li>
                            Russia uses the latest teaching methods and
                            technology.
                          </li>
                          <li>
                            Russia has a proper Indian Hostel and Indian Food
                            (Veg & Non-Veg) which is easily available.
                          </li>
                          <li>
                            The warden for boys and girls is separate and has
                            complete security.
                          </li>
                          <li> Campus is ragging free.</li>
                          <li> Traveling in Russia is comparatively cheap.</li>
                          <li>
                            Over 1000 students study top medical colleges in
                            Russia.
                          </li>
                        </ul>
                        <h5 className="text-info pt-2 pb-2">
                          Advantages Of Studying MBBS In Russia
                        </h5>
                        <p className="pb-1 text-justify">
                          <ul>
                            <li>
                              There is no need for an entrance exam and no
                              donation.
                            </li>
                            <li>The admission procedure is simple.</li>
                            <li>
                              The fee is very low and subsidized and affordable
                              compared to other countries. It is between 4 lakhs
                              to 8 lakhs for a year. More than this, the cost of
                              living is economical.
                            </li>
                            <li> The degree has worldwide acceptance.</li>
                            <li> It has a European standard of living.</li>
                            <li> Indian mess is available.</li>
                            <li>
                              There is Excellent Result in MCI Screening Test:
                              so that the students studying MBBS in Russia get
                              trained for MCI Screening Test, and they get to
                              practice in India with no additional cost
                            </li>
                            <li>
                              The Reference Available of Students working in
                              Hospitals Across the World.
                            </li>
                            <li> There is 100% Guarantee for visa.</li>
                            <li>
                              Universities are Government Universities of Russia
                            </li>
                            <li>
                              Students get Opportunity to get Dual Diploma: The
                              students have signed the Bologna declaration, so
                              that the students who want to study medicine MBBS
                              in Russia get dual diplomas through their joint
                              program with other universities in foreign
                              countries.
                            </li>
                            <li>
                              It will be Easy for International Students to
                              Adapt: Russia is a home to people who speak over
                              100 different languages. Russia attracts students
                              from all over the globe. The students who choose
                              to study MBBS in Russia get a diverse taste, and a
                              multicultural environment.
                            </li>
                            <li>
                              The course in Russia is Advanced and Comfortable:
                              Russia is standing with top western universities
                              in terms of their advanced equipment, scientific
                              centers and high-quality of their study
                              facilities. More than this, Russian Universities
                              offer very low-cost accommodation.
                            </li>
                            <li>
                              Russia has a Top-notch infrastructure: Russian
                              universities are providing students with modern
                              equipment and with top facilities.
                            </li>
                            <li>
                              Russia offers Scholarship Opportunities: Russia
                              provides several free tuition opportunities and
                              scholarships to students from abroad who wish to
                              study MBBS.
                            </li>
                            <li>
                              The course can study in English: Study medicine in
                              Russia is a good option for Indian students
                              because most universities use English to teach.
                            </li>
                            <li> Advantages of MBBS in Russia</li>
                            <li> Globally recognized degrees</li>
                            <li> Feasible Cost for Education</li>
                            <li> Affordable Cost of Living</li>
                            <li> Medical Insurance</li>
                            <li> Advanced learning techniques</li>
                            <li> Skilled & Profession Faculty</li>
                            <li> Teacher Ratio</li>
                            <li> English as the medium of instruction</li>
                            <li> Good Practical Exposure</li>
                            <li> No Racism & Religious Issues</li>
                          </ul>
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
                            Language spoken - Russian, English
                          </p>
                          <p className="text-white">
                            National currency is Russian Rubble. 1 USD = 75.96
                            Rubble
                          </p>
                        </div>
                        <div className="usa-map">
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
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="text-center">
                        Top Medical Universities in Russia
                      </h3>
                      <p className="text-justify">
                        Some of the Top Universities which we recommend to study
                        are: -
                        <ul>
                          <li>
                            <b>Peoples friendship university Moscow -1960</b>
                          </li>
                          <li>
                            <b>First Moscow state medical university -1758</b>
                          </li>
                          <li>
                            <b>Kazan state medical university -1814</b>
                          </li>
                          <li>
                            <b>Belgorod state medical university -1996</b>
                          </li>
                          <li>
                            <b>Crimea state medical university -1918</b>
                          </li>
                        </ul>
                      </p>
                      <h5 className="pt-2 pb-2">MBBS In Russia Syllabus</h5>
                      <p className="text-justify">
                        The syllabus for MBBS is the same for all countries. The
                        difference in the syllabus is only the length and
                        sequence of the subject. Russian universities follow
                        European pattern.
                      </p>
                      <p className="text-justify">
                        <b>First Year - </b>The first year focuses on basics.
                        There will be Biology, Physics, Chemistry, Nursing
                        (surgery & therapy), Anatomy, Histology, Latin, and
                        Public Health. As an addition, students study History,
                        Economics, Philosophy, Culturology, Russian language,
                        Physical Training, Basics of Research and Mathematics.
                      </p>
                      <p className="text-justify">
                        <b>Second Year - </b>The second-year focuses on the
                        functioning of the human body and metabolic processes.
                        It includes subjects like Physiology, Biochemistry,
                        Immunology, and Hygiene. As an addition, students study
                        Psychology, Medical Law, Bioethics, and the Russian
                        language for doctor-patient communication. Students must
                        work as a nurse in the hospital for minimum two weeks,
                        after obtaining the degree.
                      </p>
                      <p className="text-justify">
                        <b>Third Year - </b>In the third year, students undergo
                        training in the etiology of the diseases and the action
                        of drugs, which includes Microbiology, Pathology,
                        Pharmacology, Radiology, Internal medicine,
                        Topographical anatomy and Operative surgery.
                      </p>
                      <p className="text-justify">
                        <b>Fourth Year - </b>The 4th year begins with hospital
                        cycles. The students undergo training in different
                        departments of the hospital as part of their course. The
                        practical className is divided into two parts, the first
                        half comprising discussion and the second half practice
                        in the patient ward of the department. In the fourth
                        year, future doctors must go through the various
                        departments in the hospitals like Surgery, Dermatology
                        and Venereology, Obstetrics and Gynecology, Neurology,
                        Therapy, Medical Rehabilitation, Urology, Public health,
                        Pediatrics, phthisiology, and Endocrinology.
                      </p>
                      <p className="text-justify">
                        <b> Fifth Year - </b> In the fifth year, the students
                        will get trained in E.N.T., Ophthalmology, Surgical
                        Gynecology, Psychiatry, Traumatology, Orthopedics,
                        Physiotherapy, Outpatient therapy, Gene therapy, and
                        Infectious diseases.
                      </p>
                      <p className="text-justify">
                        <b>Sixth Year - </b>The last year of the MBBS includes
                        Oncology and radiation therapy, Occupational diseases,
                        Anesthesiology, Intensive care training, Dentistry,
                        Clinical Immunology, General medical practice,
                        Neurosurgery, Forensic medicine, and Epidemiology.
                      </p>

                      <h5 className="pt-2 pb-2">
                        MBBS In Russia Vs MBBS In India
                      </h5>

                      <div className="table-responsive">
                        <table className="table-bordered">
                          <thead className="bg-primary">
                            <tr>
                              <th className="px-2" scope="col">
                                MBBS In Russia
                              </th>
                              <th className="px-2" scope="col">
                                MBBS In India
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-2">
                                The fee structure in Russia is INR 2 to INR 4
                                lakhs per annum.
                              </td>
                              <td className="px-2">
                                The fee structure in Indian Government college:
                                INR 40000 to INR 2 Lacs per annum. In Private
                                college: INR 10 lakhs to INR 20 lakhs per annum.
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2">
                                Studying in Russia is cheap and flexible because
                                Russian government provides the subsidy.
                              </td>
                              <td className="px-2">
                                In India, it is expensive.
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2">
                                In Russia, the duration of course is 5.8 years.
                              </td>
                              <td className="px-2">
                                In India, the course duration is 5 years.
                              </td>
                            </tr>
                            <tr>
                              <td className="px-2">
                                One batch of students in Russia is 25 to 30.
                              </td>
                              <td className="px-2">
                                One batch of students in India is about 100 to
                                120 or more.
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h5 className="text-info pt-2 pb-2">
                        {" "}
                        TEMPERTURE IN RUSSIA{" "}
                      </h5>
                      <p className="text-justify">
                        When we compare the climate of Russia with India, the
                        climatic conditions of Russia are quite different from
                        India. As it lays in the torrid region, the climate is
                        moderate, which is comfortable for people living in
                        Russia. The country has a very different climate across
                        that change based on geographical area. The average
                        winter temperature remains -20 degree Celsius, during
                        fall and summer they change up to 25 degrees Celsius.
                        Each house in Russia is fitted with a heating facility.
                        So that it makes it comfortable for individuals to stay
                        indoors
                      </p>
                      <h5 className="text-info pt-2 pb-2">
                        Scholarship Offered For MBBS In Russia
                      </h5>
                      <ul>
                        <li>
                          The Government Of Russian Federation Scholarships
                        </li>
                        <li>Benjamin A. Gilman Scholarships</li>
                        <li>SRAS (The School Of Russian And Asian Studies)</li>
                      </ul>

                      <h3 className="text-info pt-5 pb-3">
                        Top Medical Universities in Russia
                      </h3>
                      <p className="text-justify">
                        Here are the top Russia universities for studying MBBS
                        in Russia
                      </p>
                      <ul className="pt-2 pb-2">
                        <li>
                          <a as={Link} to="/mbbs-in-russia/crimea-state-medical-university">
                            Crimea Federal University
                          </a>
                        </li>
                        <li>
                          <a as={Link} to="/mbbs-in-russia/kazan-federal-university">
                            Kazan Federal University
                          </a>
                        </li>
                        <li>
                          <a as={Link} to="/lobachevsky-state-Medical-University">
                            Lobachevsky State Medical University
                          </a>
                        </li>
                        <li>
                          <a as={Link} to="/mbbs-in-russia/kabardino-balkariand-state-medical-university">
                            Kabardino Balkarian State Medical University
                          </a>
                        </li>
                        <li>
                          <a as={Link} to="/mbbs-in-russia/kazan-state-medical-university">
                            Kazan State Medical University
                          </a>
                        </li>
                        <li>
                          <a as={Link} to="/mbbs-in-russia/kirov-state-medical-university">
                            Kirov State Medical University
                          </a>
                        </li>
                        <li>
                          <a as={Link} to="/mbbs-in-russia/north-ossetian-state-medical-university">
                            North-Ossetian State Medical University
                          </a>
                        </li>
                        <li>
                          <a as={Link} to="/mbbs-in-russia/ingush-state-medical-academy">
                            Ingush State Medical Academy
                          </a>
                        </li>
                        <li>
                          <a as={Link} to="/mbbs-in-russia/north-caucasian-state-humanitarian">
                            North Caucasian State Humanitarian Technological
                            Academy
                          </a>
                        </li>
                        <li>
                          <a as={Link} to="/mbbs-in-russia/bashkir-state-medical-university">
                            Bashkir State Medical University
                          </a>
                        </li>
                        <li>
                          <a as={Link} to="/mbbs-in-russia/volgogra-state-medical-university">
                            Volgograd State Medical University
                          </a>
                        </li>
                        <li>
                          <a as={Link} to="/mbbs-in-russia/kemerovo-state-medical-university">
                            Kemerovo State Medical University
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

      <RussianUniverisities />
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

export default MbbsInRussia;

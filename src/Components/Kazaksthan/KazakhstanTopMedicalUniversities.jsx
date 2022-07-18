import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Akaki from "../../Images/mbbs-in-kazakhstan/medical-universities/al-farabi-kazakh-national-university-faculty-of-medicine-and-health-care.png";
import Batumi from "../../Images/mbbs-in-kazakhstan/medical-universities/international-medical-school.png";
import Caucasus from "../../Images/mbbs-in-kazakhstan/medical-universities/jsc-national-medical-university.png";
import FreeCouncelling from "../Includes/FreeCouncelling";

const KazakhstanTopMedicalUniversities = () => {
  const [show, setShow] = useState(false); useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const universities = [
    {
      id: 1,
      name: "Al-Farabi National Medical University",
      image: Akaki,
      desc: "Al-Farabi National Medical University is one of the top Medical University in Kazakhstan. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-kazakhstan/al-farabi-national-medical-university",
    },
    {
      id: 2,
      name: "International Medical School",
      image: Batumi,
      desc: "International Medical School is one of the top Medical University in Kazakhstan. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-kazakhstan/international-medical-school",
    },
    {
      id: 3,
      name: "JSC National Medical University",
      image: Caucasus,
      desc: "JSC National Medical University is one of the top Medical University in Kazakhstan. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-kazakhstan/jsc-national-medical-university",
    },
  ];

  const options = {
    rewind: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
        loop: false,
      },
    },
  };

  return (
    <Container className="py-3">
      <h3 className="text-center text-info py-3 py-md-5">
        Top Medical Universities in Kazakhstan
      </h3>
      <OwlCarousel options={options}>
        {universities.map((university, index) => (
          <div className="body-wrap ps-md-1 pe-md-1 m-2" key={index}>
            <h5 className="pt-2 pb-2 text-center" style={{ height: "75px" }}>
              {university.name}
            </h5>
            <Image
              src={university.image}
              alt=""
              className="img-fluid rounded shadow-sm"
            />
            <div className="mb-0">
              <p className="pt-3 text-dark" style={{ height: "140px" }}>
                {university.desc}
              </p>
              <div className="text-center">
                <a as={Link} to={university.location}
                  className="pt-2 pb-2 btn btn-info text-white float-start me-2"
                >
                  Read more
                </a>
                <Button
                  onClick={handleShow}
                  className="btn btn-info text-white float-end"
                >
                  Free Councelling
                </Button>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
      <FreeCouncelling
        show={show}
        handleClose={handleClose}
        title="Contact Us for Free Councelling"
      />
    </Container>
  );
};

export default KazakhstanTopMedicalUniversities;

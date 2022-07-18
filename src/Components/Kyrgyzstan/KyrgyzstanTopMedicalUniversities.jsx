import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Akaki from "../../Images/mbbs-in-kyrgyzstan/medical-universities/osh-state-medical-university.png";
import Batumi from "../../Images/mbbs-in-kyrgyzstan/medical-universities/salymbekov-university.png";
import FreeCouncelling from "../Includes/FreeCouncelling";

const KyrgyzstanTopMedicalUniversities = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const universities = [
    {
      id: 1,
      name: "Osh State Medical University",
      image: Akaki,
      desc: "Osh State Medical University is one of the top Medical University in Kyrgyzstan. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-kyrgystan/osh-state-medical-university",
    },
    {
      id: 2,
      name: "Salymbekov University",
      image: Batumi,
      desc: "Salymbekov University is one of the top Medical University in Kyrgyzstan. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-kyrgystan/salymbekov-university",
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
        Top Medical Universities in Kyrgyzstan
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
                <a
                  as={Link}
                  to={university.location}
                  className="pt-2 pb-2 btn btn-info float-start text-white me-2"
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

export default KyrgyzstanTopMedicalUniversities;

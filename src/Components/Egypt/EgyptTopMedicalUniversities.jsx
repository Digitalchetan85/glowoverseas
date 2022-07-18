import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Belarusian from "../../Images/mbbs-in-egypt/medical-universities/ain-shams-university-faculty-of-medicine.png";
import Grodno from "../../Images/mbbs-in-egypt/medical-universities/cairo-university-faculty-of-medicine.png";
import FreeCouncelling from "../Includes/FreeCouncelling";

const EgyptTopMedicalUniversities = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const universities = [
    {
      id: 1,
      name: "Ain Shyams University",
      image: Belarusian,
      desc: "Ain Shyams University is one of the top Medical University in Belarus. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-egypt/ain-shyams-university",
    },
    {
      id: 2,
      name: "Cairo University",
      image: Grodno,
      desc: "Cairo University is one of the top Medical University in Bealrus. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-egypt/cairo-university",
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
        Top Medical Universities in Belarus
      </h3>
      <OwlCarousel options={options}>
        {universities.map((university, index) => (
          <div className="body-wrap ps-md-1 pe-md-1 m-2" key={index}>
            <h5 className="pt-2 pb-2 text-center">{university.name}</h5>
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
                  className="pt-2 pb-2 btn btn-info text-white float-start me-2"
                >
                  Read more
                </a>
                <Button
                  className="btn btn-info text-white float-end"
                  onClick={handleShow}
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

export default EgyptTopMedicalUniversities;

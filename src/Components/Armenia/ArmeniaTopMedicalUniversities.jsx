import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import YeravanState from "../../Images/mbbs-in-armenia/medical-universities/yerevan-state-medical-university.png";
import YeravanHaybusakState from "../../Images/mbbs-in-armenia/medical-universities/yerevan-haybusak-university-faculty-of-medicine.png";
import FreeCouncelling from "../Includes/FreeCouncelling";

const ArmeniaTopMedicalUniversities = () => {
  const [show, setShow] = useState(false); useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const universities = [
    {
      id: 1,
      name: "Yerevan State Medical University",
      image: YeravanState,
      desc: "Yerevan State Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-armenia/yerevan-state-medical-university",
    },
    {
      id: 2,
      name: "Yerevan Haybusak Medical University",
      image: YeravanHaybusakState,
      desc: "Yerevan Haybusak Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-armenia/yerevan-haybusak-university-faculty-of-medicine",
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
        items: 2,
        nav: false,
        loop: false,
      },
    },
  };

  return (
    <Container className="py-3 py-md-5">
      <h2 className="text-center text-info py-3 py-md-5">
        Top Medical Universities in Armenia
      </h2>
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
              <div className="">
                <a as={Link} to={university.location}
                  className="pt-2 pb-2 btn btn-info text-white me-2 float-start"
                >
                  Read more
                </a>
                <Button
                  onClick={handleShow}
                  className="pt-2 pb-2 btn btn-info text-white ms-2 float-end"
                >
                  Free Counselling
                </Button>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
      <FreeCouncelling
        show={show}
        handleClose={handleClose}
        title="Contact Us for Free Counselling"
      />
    </Container>
  );
};

export default ArmeniaTopMedicalUniversities;

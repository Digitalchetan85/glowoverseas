import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import AMA from "../../Images/mbbs-in-philippines/medical-universities/ama-school-of-medicine.png";
import Davao from "../../Images/mbbs-in-philippines/medical-universities/davao-medical-school-foundation-college-of-medicine.png";
import Emilio from "../../Images/mbbs-in-philippines/medical-universities/emilio-aguinaldo-college-school-of-medicine.png";
import Our from "../../Images/mbbs-in-philippines/medical-universities/our-lady-of-fatima-university-college-of-medicine.png";
import University from "../../Images/mbbs-in-philippines/medical-universities/university-of-perpetual-help.png";

const PhilippinesTopMedicalUniversities = () => {
  const [show, setShow] = useState(false); useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const universities = [
    {
      id: 1,
      name: "AMA University",
      image: AMA,
      desc: "AMA University is one of the top Medical University in Philippines. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-philippines/ama-university",
    },
    {
      id: 2,
      name: "Davao Medical College",
      image: Davao,
      desc: "Davao Medical College is one of the top Medical University in Philippines. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-philippines/davao-medical-college",
    },
    {
      id: 3,
      name: "Emilio Aguinaldo College",
      image: Emilio,
      desc: "Emilio Aguinaldo College is one of the top Medical University in Philippines. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-philippines/emilio-aguinaldo-college",
    },
    {
      id: 4,
      name: "Our Lady of Fatima University",
      image: Our,
      desc: "Our Lady of Fatima University is one of the top Medical University in Philippines. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-philippines/our-lady-of-fatima-university",
    },
    {
      id: 5,
      name: "University of Perpetual Help",
      image: University,
      desc: "University of Perpetual Help is one of the top Medical University in Philippines. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-philippines/our-lady-of-fatima-university",
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
        Top Medical Universities in Philippines
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
                  className="pt-2 pb-2 btn btn-info text-white me-2 float-start"
                >
                  Read more
                </a>
                <Button
                  onClick={handleShow}
                  className="btn btn-info text-white float-end"
                >
                  Free Counselling
                </Button>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </Container>
  );
};

export default PhilippinesTopMedicalUniversities;

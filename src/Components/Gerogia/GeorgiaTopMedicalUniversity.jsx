import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Akaki from "../../Images/mbbs-in-georgia/medical-universities/akaki-university.png";
import Batumi from "../../Images/mbbs-in-georgia/medical-universities/batumi-shota-rustaveli-state-university-faculty-of-natural-sciences-and-health-care.png";
import Caucasus from "../../Images/mbbs-in-georgia/medical-universities/caucasus-international-university-faculty-of-medicine.png";
import David from "../../Images/mbbs-in-georgia/medical-universities/david-tvildiani-medical-university-aieti-medical-school.png";
import European from "../../Images/mbbs-in-georgia/medical-universities/european-university.png";
import Georgian from "../../Images/mbbs-in-georgia/medical-universities/georgian-university.png";
import Ivane from "../../Images/mbbs-in-georgia/medical-universities/ivane-university.png";
import Petre from "../../Images/mbbs-in-georgia/medical-universities/petre-university.png";
import Tbilisi from "../../Images/mbbs-in-georgia/medical-universities/tbilisi-state-medical-university-faculty-of-medicine.png";
import University from "../../Images/mbbs-in-georgia/medical-universities/university-of-georgia.png";
import FreeCouncelling from "../Includes/FreeCouncelling";

const GeorgiaTopMedicalUniversities = () => {
  const [show, setShow] = useState(false); useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const universities = [
    {
      id: 1,
      name: "Akaki Tsereteli State Medical University",
      image: Akaki,
      desc: "Akaki Tsereteli State Medical University is one of the top Medical University in Georgia. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-georgia/akaki-tsereteli-state-medical-university",
    },
    {
      id: 2,
      name: "Batumi Shota Rustaveli State Medical University",
      image: Batumi,
      desc: "Batumi Shota Rustaveli State Medical University is one of the top Medical University in Georgia. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location:
        "/mbbs-in-georgia/batumi-shota-rustaveli-state-medical-university",
    },
    {
      id: 3,
      name: "Caucasus International Medical University",
      image: Caucasus,
      desc: "Caucasus International Medical University is one of the top Medical University in Georgia. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-georgia/caucasus-international-medical-university",
    },
    {
      id: 4,
      name: "David Tvildiani Medical University",
      image: David,
      desc: "David Tvildiani Medical University is one of the top Medical University in Georgia. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-georgia/david-vildiani-medical-university",
    },
    {
      id: 5,
      name: "European University",
      image: European,
      desc: "European University is one of the top Medical University in Georgia. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-georgia/european-university",
    },
    {
      id: 6,
      name: "Georgian American University",
      image: Georgian,
      desc: "Georgian American University is one of the top Medical University in Georgia. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-georgia/georgian-american-university",
    },
    {
      id: 7,
      name: "Ivane Javakhishvili",
      image: Ivane,
      desc: "Ivane Javakhishvili is one of the top Medical University in Georgia. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-georgia/ivane-javakhishvili",
    },
    {
      id: 8,
      name: "Petre Shotadze Tbilisi Medical Academy",
      image: Petre,
      desc: "Petre Shotadze Tbilisi Medical Academy is one of the top Medical University in Georgia. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-georgia/petre-shotadze-tbilisi-medical-academy",
    },
    {
      id: 9,
      name: "Tbilisi State Medical University",
      image: Tbilisi,
      desc: "Tbilisi State Medical University is one of the top Medical University in Georgia. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-georgia/tbilisi-state-medical-university",
    },

    {
      id: 10,
      name: "University of Georgia School",
      image: University,
      desc: "University of Georgia School is one of the top Medical University in Georgia. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-georgia/university-of-georgia-school",
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
        Top Medical Universities in Georgia
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

export default GeorgiaTopMedicalUniversities;

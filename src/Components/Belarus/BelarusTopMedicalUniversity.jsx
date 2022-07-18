import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import { Link } from "react-router-dom";
import Belarusian from "../../Images/mbbs-in-belarus/medical-universities/belarusian-state-medical-university.png";
import Grodno from "../../Images/mbbs-in-belarus/medical-universities/grodno-state-medical-university.png";
import Vitebsk from "../../Images/mbbs-in-belarus/medical-universities/vitebsk-state-medical-university.png";

const BelarusTopMedicalUniversities = () => {
  const universities = [
    {
      id: 1,
      name: "Belarusian State Medical University",
      image: Belarusian,
      desc: "Belarusian State Medical University is one of the top Medical University in Belarus. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-belarus/belarusian-state-medical-university",
    },
    {
      id: 2,
      name: "Grodno State Medical University",
      image: Grodno,
      desc: "Grodno State Medical University is one of the top Medical University in Bealrus. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-belarus/grodno-state-medical-university",
    },
    {
      id: 2,
      name: "Vitebsk State Medical University",
      image: Vitebsk,
      desc: "Vitebsk State Medical University is one of the top Medical University in Bealrus. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      location: "/mbbs-in-belarus/vitebsk-state-medical-university",
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
              <div className="">
                <a as={Link} to={university.location}
                  className="pt-2 pb-2 btn btn-info text-white me-2 float-start"
                >
                  Read more
                </a>
                <a as={Link} to="/mbbs-in-armenia/yerevan-state-medical-university"
                  className="pt-2 pb-2 btn btn-info text-white ms-2 float-end"
                >
                  Free Councelling
                </a>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </Container>
  );
};

export default BelarusTopMedicalUniversities;

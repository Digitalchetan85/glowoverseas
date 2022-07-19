import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import USA from "../../Images/mbbs-in-usa-flag.png";
import Poland from "../../Images/mbbs-in-poland-flag.png";
import China from "../../Images/mbbs-in-china-flag.png";
import Kyrgyzstan from "../../Images/mbbs-in-kyrgyzstan-flag.png";
import Kazakhstan from "../../Images/mbbs-in-kazakhstan-flag.png";
import Philippines from "../../Images/mbbs-in-philippines-flag.png";
import Georgia from "../../Images/mbbs-in-georgia-flag.png";
import Russia from "../../Images/mbbs-in-russia-flag.png";
import Belarus from "../../Images/mbbs-in-belarus-flag.png";
import Armenia from "../../Images/mbbs-in-armenia-flag.png";
import { Link } from "react-router-dom";

const OtherCountries = () => {
  const universities = [
    {
      id: 1,
      name: "USA",
      image: USA,
      location: "/mbbs-in-usa",
    },
    {
      id: 2,
      name: "Poland",
      image: Poland,
      location: "/mbbs-in-poland",
    },
    {
      id: 3,
      name: "China",
      image: China,
      location: "/mbbs-in-china",
    },
    {
      id: 4,
      name: "Kyrgyzstan",
      image: Kyrgyzstan,
      location: "/mbbs-in-kyrgyzstan",
    },
    {
      id: 5,
      name: "Kazakhstan",
      image: Kazakhstan,
      location: "/mbbs-in-kazakhstan",
    },
    {
      id: 6,
      name: "Philippines",
      image: Philippines,
      location: "/mbbs-in-philippines",
    },
    {
      id: 7,
      name: "Georgia",
      image: Georgia,
      location: "/mbbs-in-Georgia",
    },
    {
      id: 8,
      name: "Russia",
      image: Russia,
      location: "/mbbs-in-russia",
    },
    {
      id: 11,
      name: "Belarus",
      image: Belarus,
      location: "/mbbs-in-belarus",
    },
    {
      id: 12,
      name: "Armenia",
      image: Armenia,
      location: "/mbbs-in-armenia",
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
        items: 4,
        nav: false,
        loop: true,
      },
    },
  };

  return (
    <Container className="py-3 py-md-5">
      <h2 className="text-center text-info py-3">Study MBBS in Abroad</h2>
      <OwlCarousel options={options}>
        {universities.map((university, index) => (
          <div className="body-wrap ps-md-1 pe-md-1 m-2" key={index}>
            <h5 className="pt-2 pb-2 text-center">{university.name}</h5>
            <Image
              src={university.image}
              alt=""
              className="img-fluid rounded mb-3 mx-auto"
              style={{ height: "150px", width: "150px" }}
            />
            <div className="mb-0">
              <div className="text-center">
                <Link
                  to={university.location}
                  className="pt-2 pb-2 btn btn-warning"
                >
                  MBBS in {university.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </Container>
  );
};

export default OtherCountries;

import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";
import { Card, Container, Button, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Crimea from "../../Images/mbbs-in-usa/medical-universities/texila.png";
import FreeCouncelling from "../Includes/FreeCouncelling";

const USAUniversities = () => {
  const [show, setShow] = useState(false); useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const universities = [
    {
      id: 1,
      title: "Texila American University",
      image: Crimea,
      desc: "Crimea State Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/mbbs-in-russia/crimea-state-medical-university",
    },
  ];

  const options = {
    rewind: true,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
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
    <>
      <Container>
        <h3 className="text-center py-3">
          Top Medical Universities i/mbbs-in-russian Russia
        </h3>
        <OwlCarousel options={options}>
          {universities.map((university) => (
            <div key={university.id}>
              <Card className="m-3 border-0">
                <div className="text-center">
                  <Image
                    src={university.image}
                    alt={university.title}
                    className="img-fluid mx-auto"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-center">
                    {university.title}
                  </Card.Title>
                  <Card.Text
                    style={{ height: "10rem" }}
                    className="text-center"
                  >
                    {university.desc}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="border-0 bg-white text-center">
                  <Button
                    variant="info"
                    as={Link}
                    to={university.link}
                    className="custom-btn float-start text-white"
                  >
                    Read more
                  </Button>
                  <Button
                    onClick={handleShow}
                    className="btn btn-info text-white float-end"
                  >
                    Free Councelling
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </OwlCarousel>
        <FreeCouncelling
          show={show}
          handleClose={handleClose}
          title="Contact Us for Free Councelling"
        />
      </Container>
    </>
  );
};

export default USAUniversities;

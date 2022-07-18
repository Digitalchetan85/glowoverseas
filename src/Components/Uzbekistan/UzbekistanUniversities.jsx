import React, { useState } from "react";
import { Card, Container, Button, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import { Link } from "react-router-dom";
import Fergana from "../../Images/mbbs-in-uzbekistan/medical-universities/fergana.png";
import FreeCouncelling from "../Includes/FreeCouncelling";

const UzbekistanUniversities = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const universities = [
    {
      id: 1,
      title: "Fergana Medical Institute",
      image: Fergana,
      desc: "Fergana Medical Institute is one of the top Medical University in Uzbekistan. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/mbbs-in-ubzekistan/fergana-medical-institute",
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
          Top Medical Universities in Uzbekistan
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
                    className="custom-btn text-white float-start"
                  >
                    Read more
                  </Button>
                  <Button className="custom-btn text-white btn btn-info float-end">
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

export default UzbekistanUniversities;

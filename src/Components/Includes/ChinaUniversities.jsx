import React, { useState, useEffect } from "react"; import {Link} from 'react-router-dom'; import { Helmet } from "react-helmet";
import { Card, Container, Button, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import China from "../../Images/mbbs-in-china/medical-universities/china.png";
import Nanjing from "../../Images/mbbs-in-china/medical-universities/Nanjing.png";
import Dalian from "../../Images/mbbs-in-china/medical-universities/dalian.png";
import Fujian from "../../Images/mbbs-in-china/medical-universities/fujian.png";
import Jilin from "../../Images/mbbs-in-china/medical-universities/jilin.png";
import Kunming from "../../Images/mbbs-in-china/medical-universities/Kunming.png";
import FreeCouncelling from "./FreeCouncelling";

const ChinaUniversities = () => {
  const [show, setShow] = useState(false); useEffect(() => {
    window.scrollTo(0, 0);
  });
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const universities = [
    {
      id: 1,
      title: "China Medical University",
      image: China,
      desc: "China Medical University is one of the top Medical University in China. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/mbbs-in-china/china-medical-university",
    },
    {
      id: 2,
      title: "Nanjing Medical University",
      image: Nanjing,
      desc: "Nanjing Medical University is one of the top Medical University in China. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/mbbs-in-china/nanjing-medical-university",
    },
    {
      id: 3,
      title: "Dalian Medical University",
      image: Dalian,
      desc: "Dalian Medical University is one of the top Medical University in China. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/mbbs-in-china/dalian-medical-university",
    },
    {
      id: 4,
      title: "Fujian Medical University",
      image: Fujian,
      desc: "Fujian Medical University is one of the top Medical University in China. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/mbbs-in-china/fujian-medical-university"
    },
    {
      id: 5,
      title: "Jilin Medical University",
      image: Jilin,
      desc: "Jilin Medical University is one of the top Medical University in China. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/mbbs-in-china/jilin-medical-university",
    },

    {
      id: 6,
      title: "Kunming Medical University",
      image: Kunming,
      desc: "Kunming Medical University is one of the top Medical University in China. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/mbbs-in-china/kunming-medical-university",
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
      <Container className="py-3 py-md-5">
        <h3 className="text-center">Top Medical Universities in China</h3>
        <OwlCarousel options={options}>
          {universities.map((university) => (
            <div key={university.id}>
              <Card className="m-3 border-0">
                <Card.Title className="text-center">
                  {university.title}
                </Card.Title>
                <div className="">
                  <Image
                    src={university.image}
                    alt={university.title}
                    className="img-fluid mx-auto rounded shadow-sm"
                  />
                </div>
                <Card.Body className="p-0 py-2">
                  <Card.Text
                    style={{ height: "8rem" }}
                    className=""
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
                    variant="info"
                    onClick={handleShow}
                    className="custom-btn float-end text-white"
                  >
                    Free Counselling
                    
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </OwlCarousel>
        <FreeCouncelling show={show} handleClose={handleClose} title="Contact Us for Free Counselling
                    " />
      </Container>
    </>
  );
};

export default ChinaUniversities;

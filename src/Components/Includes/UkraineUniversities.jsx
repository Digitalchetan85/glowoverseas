import React from "react";
import { Card, Container, Button, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Black from "../../Images/mbbs-in-ukraine/medical-universities/black-sea-national-medical-university.png";
import Bukovinian from "../../Images/mbbs-in-ukraine/medical-universities/bukovinian-state-medical-university.png";
import Dnipropetrovsk from "../../Images/mbbs-in-ukraine/medical-universities/dnipropetrovsk-medical-academy-of-health-ministry-of-ukraine.png";
import Ivano from "../../Images/mbbs-in-ukraine/medical-universities/ivano-frankivsk-national-medical-university.png";
import Kharkiv from "../../Images/mbbs-in-ukraine/medical-universities/kharkiv-international-medical-university.png";
import Kyiv from "../../Images/mbbs-in-ukraine/medical-universities/kyiv-medical-university-faculty-of-medicine.png";
import Lviv from "../../Images/mbbs-in-ukraine/medical-universities/danylo-halytsky-lviv-national-medical-university.png";
import Bogomolets from "../../Images/mbbs-in-ukraine/medical-universities/bogomolets-national-medical-university.png";
import Poltava from "../../Images/mbbs-in-ukraine/medical-universities/poltava-state-medical-university.png";
import Taras from "../../Images/mbbs-in-ukraine/medical-universities/taras-shevchenko-national-university-of-kyiv-institute-of-biology-and-medicine.png";
import Karazin from "../../Images/mbbs-in-ukraine/medical-universities/v-n-karazin-kharkiv-national-university-school-of-medicine.png";
import Vinnitsa from "../../Images/mbbs-in-ukraine/medical-universities/vinnitsa-national-pirogov-memorial-medical-university.png";
import Zaporizhzhia from "../../Images/mbbs-in-ukraine/medical-universities/zaporozhye-state-medical-university.png";
import Ternopil from "../../Images/mbbs-in-ukraine/medical-universities/ternopil-state-medical-university.png";
import Odessa from "../../Images/mbbs-in-ukraine/medical-universities/odessa-national-medical-university.png";
import { Link } from "react-router-dom";

const UkraineUniversities = () => {
  const universities = [
    {
      id: 1,
      title: "Black Sea National Medical University",
      image: Black,
      desc: "Black Sea National Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/black-sea-national-medical-university",
    },
    {
      id: 2,
      title: "Bukovinian State Medical University",
      image: Bukovinian,
      desc: "Bukovinian State Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/bukovinian-state-medical-university",
    },
    {
      id: 3,
      title: "Dnipropetrovsk State Medical University",
      image: Dnipropetrovsk,
      desc: "Dnipropetrovsk State Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/dnipropetrovsk-state-medical-university",
    },
    {
      id: 4,
      title: "Ivano-Frankvisk National Medical University",
      image: Ivano,
      desc: "Ivano-Frankvisk National Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/ivano-frankvisk-national-medical-university",
    },
    {
      id: 5,
      title: "Kharkiv National Medical University",
      image: Kharkiv,
      desc: "Kharkiv international Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/kharkiv-international-medical-university",
    },

    {
      id: 6,
      title: "Kyiv Medical University",
      image: Kyiv,
      desc: "kyiv Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/kyiv-medical-university",
    },

    {
      id: 7,
      title: "Lviv National Medical University",
      image: Lviv,
      desc: "Lviv National Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/lviv-national-medical-university",
    },

    {
      id: 8,
      title: "OO Bogomolets National Medical University",
      image: Bogomolets,
      desc: "O O Bogomolets National Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/oo-bogomolets-national-medical-university",
    },

    {
      id: 9,
      title: "Poltava State Medical University",
      image: Poltava,
      desc: "Poltava State Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/poltava-state-medical-university",
    },

    {
      id: 10,
      title: "Taras Schevchenko National Medical University",
      image: Taras,
      desc: "Taras Schevchenko National Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/taras-shevchenko-national-medical-university",
    },
    {
      id: 11,
      title: "V N Karazin Kharkivnational Medical University",
      image: Karazin,
      desc: "V. N. Karazin National Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/v-n-karazin-kharkiv-national-medical-university",
    },
    {
      id: 12,
      title: "Vinnitsa National Medical University",
      image: Vinnitsa,
      desc: "Vinnitsa National Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/vinnitsa-national-medical-university",
    },

    {
      id: 13,
      title: "Zaporizhzhia State Medical University",
      image: Zaporizhzhia,
      desc: "Zaporizhzhia State Medical provides education based on advanced scientific-research and practical-teaching models, leading research and innovative activities",
      link: "/zaporizhzhia-state-medical-university",
    },
    {
      id: 14,
      title: "Ternopil State Medical University",
      image: Ternopil,
      desc: "Ternopil State Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/ternopil-state-medical-university",
    },
    {
      id: 15,
      title: "Odessa National Medical University",
      image: Odessa,
      desc: "Odessa National Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
      link: "/odessa-national",
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
        <h3 className="text-center">Top Medical Universities in Ukraine</h3>
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
                    variant="primary"
                    as={Link}
                    to={university.link}
                    className="custom-btn"
                  >
                    Readmore
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </OwlCarousel>
      </Container>
    </>
  );
};

export default UkraineUniversities;

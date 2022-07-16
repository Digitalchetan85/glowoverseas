import React from 'react'
import { Card, Container, Button, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import { Link } from "react-router-dom";
import China from "../../Images/mbbs-in-china/medical-universities/china.png"
import Nanjing from "../../Images/mbbs-in-china/medical-universities/Nanjing.png"
import Dalian from "../../Images/mbbs-in-china/medical-universities/dalian.png"
import Fujian from "../../Images/mbbs-in-china/medical-universities/fujian.png"
import Jilin from "../../Images/mbbs-in-china/medical-universities/jilin.png"
import Kunming from "../../Images/mbbs-in-china/medical-universities/Kunming.png"


const ChinaUniversities = () => {
    const universities = [
        {
          id: 1,
          title: "China Medical University",
          image: China,
          desc: "China Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
          link: "/china-medical-university",
        },
        {
          id: 2,
          title: "Nanjing Medical University",
        image: Nanjing,
          desc: "Nanjing Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
          link: "/nanjing-medical-university",
        },
        {
          id: 3,
          title: "Dalian Medical University",
          image: Dalian,
          desc: "Dalian Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
          link: "/dalian-medical-university",
        },
        {
          id: 4,
          title: "Fujian Medical University",
          image: Fujian,
          desc: "Lorem ipsum dolor sit aliquam suscipit? Saepe unde consequuntur rem, corporis ipsum quidem ea harum obcaecati, perspiciatis, placeat doloremque perferendis dolorum numquam aspernatur nisi ullam?",
          link: "/fujian-medical-university",
        },
        {
            id: 5,
            title: "Jilin Medical University",
            image: Jilin,
            desc: "Jilin Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
            link: "/jilin-medical-university",
          },
          
        {
            id: 6,
            title: "Kunming Medical University",
            image: Kunming,
            desc: "Kunming Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
            link: "/kunming-medical-university",
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
      <h3 className="text-center">
      Top Medical Universities in China
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
                <Card.Title className="text-center">{university.title}</Card.Title>
                <Card.Text style={{ height: "10rem" }} className="text-center">
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
  )
}

export default ChinaUniversities
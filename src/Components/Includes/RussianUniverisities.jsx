import React from 'react'
import { Card, Container, Button, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import { Link } from "react-router-dom";
import Crimea  from "../../Images/mbbs-in-russia/medical-universities/crimea-state-medical-university.png"
import Kazan  from "../../Images/mbbs-in-russia/medical-universities/kazan-federal-university.png"
import Loba  from "../../Images/mbbs-in-russia/medical-universities/bashkir-state-medical-university.png" 
import Kabardino from "../../Images/mbbs-in-russia/medical-universities/kabardino-balkarian-state-university.png"
import KazanState from "../../Images/mbbs-in-russia/medical-universities/bashkir-state-medical-university.png"
import Kirov from "../../Images/mbbs-in-russia/medical-universities/bashkir-state-medical-university.png"
import NorthOsset from "../../Images/mbbs-in-russia/medical-universities/bashkir-state-medical-university.png"
import Ingush from "../../Images/mbbs-in-russia/medical-universities/bashkir-state-medical-university.png"
import Caucasian from "../../Images/mbbs-in-russia/medical-universities/bashkir-state-medical-university.png"
import Bashkir from "../../Images/mbbs-in-russia/medical-universities/bashkir-state-medical-university.png"
import Volgograd from "../../Images/mbbs-in-russia/medical-universities/bashkir-state-medical-university.png"
import Kemerovo from "../../Images/mbbs-in-russia/medical-universities/bashkir-state-medical-university.png"

const RussianUniverisities = () => {
    const universities = [
        {
          id: 1,
          title: "Crimea Federal University",
          image: Crimea,
          desc: "Crimea State Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
          link: "/crimea-state-medical-university",
        },
        {
          id: 2,
          title: "Kazan Federal University",
          image: Kazan,
          desc: "Kazan Federal University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
          link: "/kazan-federal-university",
        },
        {
          id: 3,
          title: "Lobachevsky State Medical University",
          image: Loba,
          desc: "Kabardino Balkarian State Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
          link: "/lobachevsky-state-Medical-University",
        },
        {
          id: 4,
          title: "Kabardino Balkarian State Medical University",
          image: Kabardino,
          desc: "Kabardino Balkarian State Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
          link: "/kabardino-balkariand-state-medical-university",
        },
        {
            id: 5,
            title: "Kazan State Medical University",
            image: KazanState,
            desc: "Caucasus International University on the faculty of medicine was founded Anatomical Theater and Clinical Skills Center.",
            link: "/kazan-state-medical-university",
          },
          
        {
            id: 6,
            title: "Kirov State Medical University",
            image: Kirov,
            desc: "David Tvildiani Medical University is the best medical university in Georgia offering a 6-year MBBS course in English medium & low admission fees for Indian students.",
            link: "/kirov-state-medical-university",
          },
          
        {
            id: 7,
            title: "North-Ossetian State Medical University",
            image: NorthOsset,
            desc: "Petre Shotadze Tbilisi Medical Academy is a teaching university, with highly qualified academic staff, and a self-governed higher education institution which conducts its activities in accordance with all applicable laws and regulations.",
            link: "/north-ossetian-state-medical-university",
          },
          
        {
            id: 8,
            title: "Ingush State Medical Academy",
            image: Ingush,
            desc: "School of Health Sciences of the University of Georgia is a growing health school built on the requirements of modern higher education.",
            link: "/ingush-state-medical-academy",
          },
          
        {
            id: 9,
            title: "North Caucasian State Humanitarian Technological Academy",
            image: Caucasian,
            desc: "European University is an authorized higher education institution with the status of an educational university, which implements higher education programs in accordance with the rules established by law and issues a certificate of qualification recognized by the state.",
            link: "/north-caucasian-state-humanitarian",
          },
          
        {
            id: 10,
            title: "Bashkir State Medical University",
            image:Bashkir,
            desc: "Bashkir State Medical University is one of the top Medical University in Ukraine. Get more details on Fees Structure, Hostel, Indian Food Facility and other uncleared information.",
            link: "/bashkir-state-medical-university",
          },
          {
            id: 11,
            title: "Volgograd State Medical University",
            image:Volgograd,
            desc: "Georgian American University provides education based on advanced scientific-research and practical-teaching models, leading research and innovative activities",
            link: "/volgogra-state-medical-university",
          },
          {
            id: 12,
            title: "Kemerovo State Medical University",
            image:Kemerovo,
            desc: "Georgian American University provides education based on advanced scientific-research and practical-teaching models, leading research and innovative activities",
            link: "/kemerovo-state-medical-university",
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
      Top Medical Universities in Russia
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

export default RussianUniverisities
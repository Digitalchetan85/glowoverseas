import React from 'react'
import { Card, Container, Button, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Ivane  from "../../Images/mbbs-in-georgia/medical-universities/batumi-shota-rustaveli-state-university-faculty-of-natural-sciences-and-health-care.png"
import Batumi from "../../Images/mbbs-in-georgia/medical-universities/caucasus-international-university-faculty-of-medicine.png"
import Akaki from "../../Images/mbbs-in-georgia/medical-universities/david-tvildiani-medical-university-aieti-medical-school.png"
import Tbilisi from "../../Images/mbbs-in-georgia/medical-universities/new-vision-university-school-of-medicine.png"
import Caucasus from "../../Images/mbbs-in-georgia/medical-universities/tbilisi-state-medical-university-faculty-of-medicine.png"
import David from "../../Images/mbbs-in-georgia/medical-universities/batumi-shota-rustaveli-state-university-faculty-of-natural-sciences-and-health-care.png"
import Petre from "../../Images/mbbs-in-georgia/medical-universities/caucasus-international-university-faculty-of-medicine.png"
import GeorgiaSchool from "../../Images/mbbs-in-georgia/medical-universities/david-tvildiani-medical-university-aieti-medical-school.png"
import European from "../../Images/mbbs-in-georgia/medical-universities/new-vision-university-school-of-medicine.png"
import Georgian from "../../Images/mbbs-in-georgia/medical-universities/tbilisi-state-medical-university-faculty-of-medicine.png"

const GerogiaUniversities = () => {
    const universities = [
        {
          id: 1,
          title: "Ivane Javakhishvili Tbilisi State University Faculty of Medicine",
          image: Ivane,
          desc: "Ivane Javakhishvili Tbilisi State University is one of the best medical universities in Georgia for Indian students.",
          link: "/ivane-javakhishvili",
        },
        {
          id: 2,
          title: "Batumi Shota Rustaveli State Medical University",
          image: Batumi,
          desc: "Batumi Shota Rustaveli State University is the multifunctional medical school that provides professional and research-based education to UG & PG students.",
          link: "/batumi-shota-rustaveli-state-medical-university",
        },
        {
          id: 3,
          title: "Akaki Tsereteli State University Faculty of Medicine",
          image: Akaki,
          desc: "Akaki Tsereteli State University is a multilevel higher education institution that performs academic and professional programs and is engaged in active research activities.",
          link: "/akaki-tsereteli-state-medical-university",
        },
        {
          id: 4,
          title: "Tbilisi State Medical University Faculty of Medicine",
          image: Tbilisi,
          desc: "Tbilisi State Medical University. The university is one of the leading medical universities of Georgia.",
          link: "/tbilisi-state-medical-university",
        },
        {
            id: 5,
            title: "Caucasus International University Faculty of Medicine",
            image: Caucasus,
            desc: "Caucasus International University on the faculty of medicine was founded Anatomical Theater and Clinical Skills Center.",
            link: "/caucasus-international-medical-university",
          },
          
        {
            id: 6,
            title: "David Tvildiani Medical University AIETI Medical School",
            image: David,
            desc: "David Tvildiani Medical University is the best medical university in Georgia offering a 6-year MBBS course in English medium & low admission fees for Indian students.",
            link: "/david-vildiani-medical-university",
          },
          
        {
            id: 7,
            title: "Petre Shotadze Tbilisi Medical Academy Faculty of Medicine",
            image: Petre,
            desc: "Petre Shotadze Tbilisi Medical Academy is a teaching university, with highly qualified academic staff, and a self-governed higher education institution which conducts its activities in accordance with all applicable laws and regulations.",
            link: "/petre-shotadze-tbilisi-medical-academy",
          },
          
        {
            id: 8,
            title: "University of Georgia School of Health Sciences and Public Health",
            image: GeorgiaSchool,
            desc: "School of Health Sciences of the University of Georgia is a growing health school built on the requirements of modern higher education.",
            link: "/university-of-georgia-school",
          },
          
        {
            id: 9,
            title: "European University Faculty of Medicine",
            image: European,
            desc: "European University is an authorized higher education institution with the status of an educational university, which implements higher education programs in accordance with the rules established by law and issues a certificate of qualification recognized by the state.",
            link: "/european-university",
          },
          
        {
            id: 10,
            title: "Georgian American University",
            image:Georgian,
            desc: "Georgian American University provides education based on advanced scientific-research and practical-teaching models, leading research and innovative activities",
            link: "/georgian-american-university",
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
      Top Medical Universities in Georgia
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

export default GerogiaUniversities
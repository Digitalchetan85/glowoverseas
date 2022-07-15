import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import Test1 from "../../Images/home-page/testimonial-1.png";
import Test2 from "../../Images/home-page/testimonial-2.png";
import Test3 from "../../Images/home-page/testimonial-3.png";
import Test4 from "../../Images/home-page/testimonial-4.png";
import Test5 from "../../Images/home-page/testimonial-5.png";
import Test6 from "../../Images/home-page/testimonial-6.png";

const Testimonials = () => {
  const associations = [
    {
      id: 1,
      testimonial:
        "GOE staffs are friendly who encourages & motivates you to fulfill your dream of becoming a doctor",
      image: Test1,
      name: "Nayana Satish",
    },
    {
      id: 2,
      testimonial:
        "During pandemic I was little scared to go abroad, GOE helped me in the video counselling in fulfilling my dream.",
      image: Test2,
      name: "Soniya",
    },
    {
      id: 3,
      testimonial:
        "I saw a message in my what’s app for study abroad, I approached GOE, very genuine and simple process for admission",
      image: Test3,
      name: "Channaviresh",
    },
    {
      id: 4,
      testimonial:
        "It was not easy to find a University out of India to Study Medicine. GOE is the best",
      image: Test4,
      name: "Amulya Madipatty",
    },
    {
      id: 5,
      testimonial:
        "Best Consultancy. Good suggestions for MBBS & provided necessary help in getting me the education loan.",
      image: Test5,
      name: "Keshanandini",
    },
    {
      id: 6,
      testimonial:
        "I got admission in Ukraine, GOE is good supporting company for Medical admission for students",
      image: Test6,
      name: "G V Amrutha Reddy",
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
    <OwlCarousel options={options}>
      {associations.map((item, index) => (
        <div className="body-wrap text-center ps-md-1 pe-md-1 m-2" key={index}>
          <Image src={item.image} alt="" className="img-fluid" />
          <blockquote className="blockquote mb-0">
            <p className="pt-3 text-center text-dark" style={{height: '140px'}}>{item.testimonial}</p>
            <footer className="blockquote-footer">
              <cite title="Source Title">{item.name}</cite>
            </footer>
          </blockquote>
        </div>
      ))}
    </OwlCarousel>
  );
};

export default Testimonials;

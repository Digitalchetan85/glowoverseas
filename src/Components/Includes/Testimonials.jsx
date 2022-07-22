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
import Test7 from "../../Images/testimonials/esha.png"
import Test8 from "../../Images/testimonials/amruta.png"
import Test9 from "../../Images/testimonials/gaana.png"
import Test10 from "../../Images/testimonials/geetha.png"
import Test11 from "../../Images/testimonials/meghana.png"
import Test12 from "../../Images/testimonials/gowthami.png"
import Test13 from "../../Images/testimonials/pavitra.png"
import Test14 from "../../Images/testimonials/preethi.png"
import Test15 from "../../Images/testimonials/manu.png"
import Test16 from "../../Images/testimonials/gagan.png"
import Test17 from "../../Images/testimonials/suraj.png"
import Test18 from "../../Images/testimonials/shameek.png"
import Test19 from "../../Images/testimonials/alina.png"

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
    {
      id: 7,
      testimonial:
        "GOE not only guided me for admission but also helped me and my family throughout in visa processing in very minimal time.",
      image: Test7,
      name: "Esha",
    },
    {
      id: 8,
      testimonial:
        "I had a dream to become a doctor, for that..my dreams are being fulfilled by GOE consultants. They were very helpful & had no difficulty to reach my destination.",
      image: Test8,
      name: "Amrutha",
    },
    {
      id: 9,
      testimonial:
        ". In our city we had no clue we can go to study abroad. The best education consultants facilitated everything for us in abroad.          ",
      image: Test9,
      name: "Gaana Shree",
    },
    {
      id: 10,
      testimonial:
        "Studying in another country was a big concern for me and my  parents, but Glow Overseas Education consultants removed all our doubts",
      image: Test10,
      name: "Geetha Shree",
    },
    {
      id: 11,
      testimonial:
        "Being a single child of my parents it was really big task to convince my parents to send me abroad. But after having talks with GOE consultants  my parents allowed me to study in abroad , GOE has been one of my strongest supporters away from home.",
      image: Test11,
      name: "Meghana",
    },
    {
      id: 12,
      testimonial:
        ".Just a phone call away and GOE paves the way to our dream desination.it is because of the immense support and guidance provided by GOE that my dream are in sync with reality.",
      image: Test12,
      name: "Gowthami Gowda",
    },
    {
      id: 13,
      testimonial:
        "I qualified in NEET but my score was not good for govt seat in India. GOE helped me to get admission done hassle free and gave transparent guidance and great support. ",
      image: Test13,
      name: "Pavitra",
    },
    {
      id: 14,
      testimonial:
        "GOE plays a Vital role in choosing best university for us. Its trustworthy and genuine.",
      image: Test14,
      name: "Preethi",
    },
    {
      id: 15,
      testimonial:
        "Myself, pursuing MBBS under guidance of glow overseas education consultants. Definitely recommend the best advice/personal counselling 24/7 365.",
      image: Test15,
      name: "Manu",
    },
    {
      id: 16,
      testimonial:
        "I am very happy to express my sincere thanks to GOE for supporting me to achieve my dream to study MBBS in abroad. My journey, admission procedure, and all other academic formalities was a cakewalk & it is just because of the wholehearted service",
      image: Test16,
      name: "Ganga Deep",
    },
    {
      id: 17,
      testimonial:
        "I had a great experience with GOE specially the visa team I would recommend to everyone who are planning to studying MBBS in abroad   ",
      image: Test17,
      name: "Suraj",
    },
    {
      id: 18,
      testimonial:
        ".I am fully satisfied with the service, from the day I have approached GOE each department and respective persons approached on me a timely basic to complete my entire process",
      image: Test18,
      name: "Shameek",
    },
    {
      id: 19,
      testimonial:
        "Iam really happy with your responsibility to get my visa done. I know it wasn’t easy. Your helpful attitude and extra efforts make it clear how the process went smoothly.   ",
      image: Test19,
      name: "Alina Thazin",
    },
  ];

  const options = {
    rewind: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
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
        <div className="text-center ps-md-1 pe-md-1 m-2" key={index}>
          <Image src={item.image} alt="" className="img-fluid" />
          <blockquote className="blockquote mb-0">
            <p className="pt-3 text-center text-dark body-wrap" style={{height: '150px'}}>{item.testimonial}</p>
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

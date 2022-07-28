import React, { useState } from "react";
import { Container, Carousel, Col, Image, Row, Button } from "react-bootstrap";
import Image0 from "../../Images/home-page/slider/new1.png";
import Image1 from "../../Images/home-page/slider/new2.png";
import Image2 from "../../Images/home-page/slider/GOF.png";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";

const MainSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
    
    <>
      
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image className="d-block w-100" src={Image0} alt="First Slide" />
        </Carousel.Item>

        <Carousel.Item>
          <Image className="d-block w-100" src={Image1} alt="Second Slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="d-block w-100" src={Image2} alt="Third Slide" />
        </Carousel.Item>
        
      </Carousel>
    </>
  );
};

export default MainSlider;

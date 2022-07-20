import React from "react";
import { Container, Carousel, Col, Image, Row, Button } from "react-bootstrap";
import Image0 from "../../Images/home-page/slider/new1.png"
// import Image1 from "../../Images/home-page/slider/1.png";
// import Image2 from "../../Images/home-page/slider/2.png";
// import Image3 from "../../Images/home-page/slider/3.png";
// import Image4 from "../../Images/home-page/slider/4.png";
// import Image5 from "../../Images/home-page/slider/5.png"

const MainSlider = () => {

  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={Image0}
            alt=""
          />
        </Carousel.Item>
        {/* <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={Image1}
            alt=""
          />
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <Image
            className="d-block w-100"
            src={Image2}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={Image3}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={Image4}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={Image5}
            alt=""
          />
        </Carousel.Item> */}
      </Carousel>
      
    </>
  );
};

export default MainSlider;

import React from "react";
import { Container, Carousel, Col, Image, Row, Button } from "react-bootstrap";
import Image1 from "../../Images/home-page/first.png";
import Image2 from "../../Images/home-page/second.png";
import Image3 from "../../Images/home-page/third.png";
import Image4 from "../../Images/home-page/fourth.png";
import Image5 from "../../Images/home-page/fifth.png"

const MainSlider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image className="d-block w-100" src={Image1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={Image1}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
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
        </Carousel.Item>
      </Carousel>
      
    </>
  );
};

export default MainSlider;

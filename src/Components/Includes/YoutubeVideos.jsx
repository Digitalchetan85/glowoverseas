import React from 'react'
import { Card, Container, Button, Image, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import { Link } from "react-router-dom"

const YoutubeVideos = () => {
    const videos = [
        {
          id: 1,
          title: "DAVAO MEDICAL SCHOOL FOUNDATION TOUR",
        //   desc:"",
          url: "https://www.youtube.com/embed/GdY3UMphZWc",
        },
        {
          id: 2,
          title: "Student Testimony, Osh State Medical University - Kyrgyzstan",
        //   desc: "",
          url: "https://www.youtube.com/embed/p_q-5k-NJLQ",
        },
        {
          id: 3,
          title: "MBBS IN KYRGYSTAN IN KANNADA",
          url: "https://www.youtube.com/embed/1PfPVZE2_RI",
        },
        {
          id: 4,
          title: "Testimonial Video | Glow Overseas Education | GOE",
          url: "https://www.youtube.com/embed/VRZDcHL6SUU",
        },
        {
            id: 5,
            title: "Student review about the university in Ukraine",
            link: "https://www.youtube.com/embed/MyWJWE1Jfh0",
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
       <h2 className="text-center text-info py-md-3 py-3">Videos</h2>
      <OwlCarousel options={options}>
        {videos.map((video) => (
          <div key={video.id}>
            <Card className="m-3 border-0">
              
              <Card.Body>
                <Card.Title className="text-center">{video.title}</Card.Title>
                <Card.Text style={{ height: "10rem" }} className="text-center">
                <iframe width="400" height="300" src={video.url} title="YouTube video player" allowfullscreen></iframe>
                </Card.Text>
              </Card.Body>
             
            </Card>
          </div>
        ))}
      </OwlCarousel>

    </>
  )
}

export default YoutubeVideos
import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-75"
            src= {require("../assets/images/bg1.jpeg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-75"
            src={require("../assets/images/bg2.jpeg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-75"
            src= {require("../assets/images/bg3.jpeg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}


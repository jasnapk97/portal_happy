import React from "react";

//import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "react-bootstrap-carousel";
//import { Carousel } from 'react-bootstrap';
import logo from "../assets/logo.png";
import photo1 from "../assets/4-full.jpg";
const Slider = () => {
  return (
    <>
      <div style={{ width: "100%", height: "20%", backgroundColor: "" }}>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            {/* <div class="carousel-item active">
      <img class="d-block w-100" src={logo} alt="First slide"/>
    </div> */}
            <div class="carousel-item">
              <img
                src={photo1}
                style={{ width: "100%", height: "300px" }}
                alt="Second slide"
              />
            </div>
            {/* <div class="carousel-item">
      <img class="d-block w-100" src={logo} alt="Third slide"/>
    </div> */}
          </div>
          {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> */}
        </div>
      </div>
    </>
  );
};

export default Slider;

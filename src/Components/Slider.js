import React, { Component } from "react";
import Slider from "react-slick";
import banner1 from "../Assets/Images/banner1.jpg";
import banner2 from "../Assets/Images/banner2.jpg";
import banner3 from "../Assets/Images/banner3.jpg";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>
              {" "}
              <img src={banner1} className="slider" alt="slider-error" />
            </h3>
          </div>
          <div>
            <h3>
              {" "}
              <img src={banner2} className="slider" alt="slider-error" />
            </h3>
          </div>
          <div>
          <h3>
              {" "}
              <img src={banner3} className="slider" alt="slider-error" />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}

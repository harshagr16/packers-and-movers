import React from "react";
import { Carousel } from "react-bootstrap";
import { Fragment } from "react/cjs/react.development";
import logo1 from "../Assets/Images/people1.jpg";
import logo2 from "../Assets/Images/people2.jpg";
import logo3 from "../Assets/Images/people3.jpg";

export default function Testimonial() {
  return (
    <Fragment>
      <div className="testimonial" data-aos="fade-up" data-aos-duration="3000">
        <div className="container">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img
                src={logo1}
                className="d-block  rounded-circle"
                alt="First slide"
              />
              <Carousel.Caption>
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <h5 class="mb-3">Maria Kate</h5>
                    <p>Photographer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus et deleniti nesciunt sint eligendi reprehenderit
                      reiciendis, quibusdam illo, beatae quia fugit consequatur
                      laudantium velit magnam error. Consectetur distinctio
                      fugit doloremque.
                    </p>
                  </div>
                </div>
                <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="far fa-star fa-sm"></i>
                  </li>
                </ul>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                src={logo2}
                className="d-block  rounded-circle"
                alt="Second slide"
              />
              <Carousel.Caption>
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <h5 class="mb-3">Maria Kate</h5>
                    <p>Photographer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus et deleniti nesciunt sint eligendi reprehenderit
                      reiciendis, quibusdam illo, beatae quia fugit consequatur
                      laudantium velit magnam error. Consectetur distinctio
                      fugit doloremque.
                    </p>
                  </div>
                </div>
                <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="far fa-star fa-sm"></i>
                  </li>
                </ul>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block  rounded-circle"
                src={logo3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <div class="row d-flex justify-content-center">
                  <div class="col-lg-8">
                    <h5 class="mb-3">Maria Kate</h5>
                    <p>Photographer</p>
                    <p class="text-muted">
                      <i class="fas fa-quote-left pe-2"></i>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus et deleniti nesciunt sint eligendi reprehenderit
                      reiciendis, quibusdam illo, beatae quia fugit consequatur
                      laudantium velit magnam error. Consectetur distinctio
                      fugit doloremque.
                    </p>
                  </div>
                </div>
                <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i class="far fa-star fa-sm"></i>
                  </li>
                </ul>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
}

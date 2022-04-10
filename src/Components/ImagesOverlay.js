import React from "react";
import logo1 from "../Assets/Images/image-overlay1.jpg";
import logo2 from "../Assets/Images/image-overlay2.jpg";

export default function ImagesOverlay() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-5 mb-5 text-center">We Handle With Care</h1>
        <div className="col-sm-6"  data-aos="flip-left"
        data-aos-duration="1000">
          <div class="view zoom z-depth-1 rounded">
            <a href="#!" class="text-white">
              <img
                src={logo1}
                className="img-fluid rounded-bottom"
                alt="logo"
              />
              <div class="mask rgba-stylish-strong">
                <div class="text-white text-center py-lg-5 py-0 my-0">
                  <div>
                    <h2 class="card-title font-weight-bold pt-2">
                      <strong>Convenience</strong>
                    </h2>
                    <p class="mx-5 clearfix d-none d-md-block"></p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-6"  data-aos="flip-right"
        data-aos-duration="1000">
          <div class="view zoom z-depth-1 rounded">
            <a href="#!" class="text-white">
              <img
                src={logo2}
                className="img-fluid rounded-bottom"
                alt="logo"
              />
              <div class="mask rgba-stylish-strong">
                <div class="text-white text-center py-lg-5 py-0 my-0">
                  <div>
                    <h2 class="card-title font-weight-bold pt-2">
                      <strong>Zero Damage</strong>
                    </h2>
                    <p class="mx-5 clearfix d-none d-md-block"></p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

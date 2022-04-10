import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { BsFillAlarmFill } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

export default function Footer() {
  const current = new Date();
  const date = `${current.getFullYear()}`;

  return (
    <div>
      <footer className="page-footer font-small blue">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
              <h5 className="text-uppercase">About Us </h5>
              <p className="para-anch">
                Packers and Movers Ltd is a globally recognized logistics
                company since 1987, for imparting excellent services in packing
                and moving segments.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-2 mb-md-0 mb-4">
              <h5 className="text-uppercase">services</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="para-anch" href="#!">
                    Home Shifting
                  </a>
                </li>
                <li>
                  <a className="para-anch" href="#!">
                    Office Shifting
                  </a>
                </li>
                <li>
                  <a className="para-anch" href="#!">
                    Vehical Shifting
                  </a>
                </li>
                <li>
                  <a className="para-anch" href="#!">
                    Building Shifting
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-4">
              <h5 className="text-uppercase">contact us</h5>

              <div className="row">
                <div className="col-sm-1 icon-color-contact">
                  <GoLocation /> <br />
                </div>
                <div className="col-sm-11">
                  <p className="para-anch">
                    348 Greenpoint Avenue Brooklyn, NY
                  </p>
                </div>
                <div className="row">
                  <div className="col-sm-1 icon-color-contact">
                    <FiPhoneCall />
                  </div>
                  <div className="col-sm-11">
                    <p className="para-anch">+61 3928 3324</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-1 icon-color-contact">
                    <BsFillAlarmFill />
                  </div>
                  <div className="col-sm-11">
                    <p className="para-anch">Mon - Fri 9am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3 mb-md-0 mb-4">
              <h5 className="text-uppercase">our social media</h5>

              <div className="row">
                <div className="col-sm-2">
                  <a className="social-media" href="">
                    {" "}
                    <TiSocialFacebook />
                  </a>
                </div>
                <div className="col-sm-2">
                  <a className="social-media" href="">
                    <TiSocialTwitter />
                  </a>
                </div>
                <div className="col-sm-2">
                  <a className="social-media" href="">
                    <TiSocialYoutube />
                  </a>
                </div>
                <div className="col-sm-2">
                  <a className="social-media" href="">
                    <AiOutlineInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-copyright text-center py-3">
          <a href="/"> Packers & Movers </a>| @{date} All rights reserved
        </div>
      </footer>
    </div>
  );
}

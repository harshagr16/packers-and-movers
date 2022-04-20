import React from "react";
import { Fragment } from "react/cjs/react.development";
import CountUp from "react-countup";
import { FaTruckMoving } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import background from "../Assets/Images/image-overlay2.jpg";

export default function CountingNumber() {
  return (
    <Fragment>
      <div
        className="CountingNumber"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <span>
                <FaTruckMoving />
              </span>
              <h2>
                <CountUp end={80} duration={3} />+
              </h2>
              <p>Truck Around</p>
            </div>
            <div className="col-sm-4">
              <span>
                {" "}
                <BsPeopleFill />
              </span>
              <h2>
                <CountUp end={1000} duration={3} />+
              </h2>
              <p>Employe</p>
            </div>
            <div className="col-sm-4">
              <span>
                {" "}
                <FaBuilding />
              </span>
              <h2>
                <CountUp end={200} duration={3} />+
              </h2>
              <p>Parcel Building</p>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        style={{ backgroundImage: `url(${background})` }}
        class="company-history-banner1"
      >
        <div class="container">
          <div data-aos="fade-up" class="row">
            <p>
              <i class="fas fa-quote-right"></i>
              ReloAdvicer is a reliable packing and moving company. It
              provides you reliable rehabilitation services, transport services,
              storage and warehousing services. Packers & Movers aims to meet
              customer expectations in a phased manner. So before moving to
              another location make sure that you are going to a safe packers
              and movers company. We are the choice of Indian customers because
              we take every step very carefully, so your feelings are never
              harmed. With hundreds of happy customers, with years of
              experience, we are well equipped with experienced packing and
              moving teams, equipment, vehicles and infrastructure to maintain
              our high measures of customer service and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

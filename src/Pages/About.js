import React, { useEffect } from "react";
import { Fragment } from "react/cjs/react.development";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "../Components/Banner";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import { Container } from "react-bootstrap";

export default function About() {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <Fragment>
      <Header></Header>
      <Banner></Banner>

      <div className="container about">
        <h2>History</h2>
        <p>
          1984 - A very humble beginning of DRS Group. The Organization was
          formed in the year 1984, with one Mahindra vehicle having it's
          registration number ABT 812. Prior to this, he has worked in Economic
          Transport Organization and has got rich experience of the transport
          Industry. During his tenure , he was in Chennai, Bangalore, Kolkatta
          and Nepal. Eventually after this he decided to start his own
          organization.After his numerous long periods of employment at Economic
          Transport Organisation (ETO) and stepped into the packing and moving,
          and logistics industry to contribute to his belief and today with his
          organization Packers and Movers. A flagship unit of the Group,
          advancing and modernizing the packing and moving.
        </p>
        <h2>Values & Philosophy</h2>
        <p>
          Drs Management Believes In Transparency In All The Activities It Does
          And Ensure That Customers Delight Is Achieved Through Team Work,
          Innovation & Service And At The Same Time Contributing For Nation ,
          Society and Environment.
          <ul>
            <li>We put our full effort on the relocation order we process.</li>
            <li>We always try to do self assessment.</li>
            <li>Consistantly Try to build clients oriented service.</li>
            <li>We loathe the dishonest way of earnings.</li>
            <li>We consider the clients possession as of our own.</li>
            <li>We provide global environment solution to all clients.</li>
          </ul>
        </p>
        <h2>Investments</h2>
        <p>
          Keeping in mind the growth, reputation & goodwill of Group, Big
          Company invested Rs.100 Crores in the companies Logistics. which owns
          the brand "packers and Movers". DRS was the first logistics company in
          India to get equity from a nationalized & reputed bank. In 2007, Kotak
          mahindra has invested 100 crores in the company. ltd which owns the
          brand Packers and Movers.
        </p>
      </div>

      <Footer></Footer>
    </Fragment>
  );
}

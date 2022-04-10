import React, { useEffect } from "react";
import { Fragment } from "react/cjs/react.development";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";
import Card from "../Components/Card";
import CountingNumber from "../Components/CountingNumber";
import Testimonial from "../Components/Testimonial";
import ImagesOverlay from "../Components/ImagesOverlay";


export default function Home(){

  useEffect(()=> {
    document.title = "Home Page";
  }, []);
    return (
      <Fragment>
        <Header></Header>
        <Slider></Slider>
        <Card></Card>
        <Testimonial></Testimonial>
        <ImagesOverlay></ImagesOverlay>
        <CountingNumber></CountingNumber>
        <Footer></Footer>
      </Fragment>
    );
}

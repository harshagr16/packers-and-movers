import React, { Component } from "react";
import { Fragment } from "react/cjs/react.development";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider";
import Card from "../Components/Card";


export default class Index extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Slider></Slider>
        <Card></Card>
        <Footer></Footer>
      </Fragment>
    );
  }
}

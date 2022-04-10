import React from "react";
import banner from "../Assets/Images/banner1.jpg";

export default function Banner() {
  return (
    <div className="overlay">
      <img src={banner} className="banner-size" alt="banner" />
    </div>
  );
}




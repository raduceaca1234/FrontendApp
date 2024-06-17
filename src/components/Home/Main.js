import { Link } from "react-router-dom";
import React from "react";
import BGImg from "../../assets/img/slider/slider_bg.png";
import About from "../HomeMain/About";
import Appointment from "../HomeMain/Appointment";
import Blog from "../HomeMain/Blog";
import Testimonial from "../HomeMain/Testimonial";
import Service from "../HomeMain/Service";
import Gallery from "../HomeMain/Gallery";
import Pricing from "../HomeMain/Pricing";
import Feature from "../HomeMain/Feature";
import Product from "../HomeMain/Product";
import Welness from "../HomeMain/Welness";

const Main = () => {
  return (
    <>
      <main>
        <Welness/>
        <About />
        <Service />
        <Appointment />
        {/* <Pricing /> */}
        <Gallery />
        {/* <Testimonial /> */}
      </main>
    </>
  );
};

export default Main;

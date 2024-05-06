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
import Headerthree from "../Menhomethree/Headerthree";
import Sliderthree from "../Menhomethree/Sliderthree";


const Main = () => {

  return (
    <>
      <main>
        <Headerthree/>
        <Sliderthree/>
        <Feature />
        <About />
        <Service />
        <Appointment />
        <Product />
        <Pricing />
        <Gallery />
        <Testimonial />
        <Blog />
      </main>
    </>
  );
};

export default Main;

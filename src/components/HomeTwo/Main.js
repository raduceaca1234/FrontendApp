import React from "react";
import About from "../HomeMain/About";
import Appointment from "../HomeMain/Appointment";
import Blog from "../HomeMain/Blog";
import Testimonial from "../HomeMain/Testimonial";
import Service from "../HomeMain/Service";
import Gallery from "../HomeMain/Gallery";
import Pricing from "../HomeMain/Pricing";
import Feature from "../HomeMain/Feature";
import Product from "../HomeMain/Product";
import Welness from "../Menhometwo/Welness";

const Main = () => {

  return (
    <>
      <main>
        <Welness/>
        <About />
        <Feature />
        <div className="home-service">
          <Service />
        </div>
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

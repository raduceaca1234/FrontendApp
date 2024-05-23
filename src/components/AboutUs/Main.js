import React from "react";
import Bredcrumb from "../HomeMain/Bredcrumb";
import About from "../HomeMain/About";
import Appointment from "../HomeMain/Appointment";
import Blog from "../HomeMain/Blog";
import Testimonial from "../HomeMain/Testimonial";
import Faq from "../HomeMain/Faq";
import NailTech from "../Menabout/NailTech";

const Main = () => {
  
  return (
    <>
      <Bredcrumb title="About Us" subtitle="About Us" />
      <About />
      <Appointment />
      <NailTech/>
      <Testimonial />
    </>
  );
};

export default Main;

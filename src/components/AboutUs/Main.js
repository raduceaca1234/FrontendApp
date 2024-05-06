import React from "react";
import Bredcrumb from "../HomeMain/Bredcrumb";
import About from "../HomeMain/About";
import Appointment from "../HomeMain/Appointment";
import Blog from "../HomeMain/Blog";
import Testimonial from "../HomeMain/Testimonial";
import Faq from "../HomeMain/Faq";
import Doctor from "../Menabout/Doctor";

const Main = () => {
  
  return (
    <>
      <Bredcrumb title="About Us" subtitle="About Us" />
      <About />
      <Appointment />
      <Doctor/>
      <Faq />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Main;

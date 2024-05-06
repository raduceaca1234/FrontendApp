import React from "react";
import Appointment from "../HomeMain/Appointment";
import Bredcrumb from "../HomeMain/Bredcrumb";
import Map from "../Mencontact/Map";

const Main = () => {
  return (
    <>
      <Bredcrumb title="Contact Us" subtitle="Contact Us" />
      <Appointment />
      <Map/>
    </>
  );
};

export default Main;

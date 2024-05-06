import React from "react";
import Bredcrumb from "../../HomeMain/Bredcrumb";
import Faq from "../../HomeMain/Faq";
import Mainpage from "../Menfaq/Mainpage";

const Main = () => {

  return (
    <>
      <Bredcrumb title="Faq" subtitle="Faq" />
      <Mainpage/>
      <Faq />
    </>
  );
};

export default Main;

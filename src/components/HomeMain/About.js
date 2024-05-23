import React from "react";
import BGImg1 from "../../assets/img/bg/about-bg.png";
import { Link } from "react-router-dom";
import Img from "../../assets/img/features/about_img.png";

const About = () => {
  return (
    <>
      <section className="about-area about-p pt-120 pb-120 p-relative fix"
        style={{ backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundImage: `url(${BGImg1})`,}}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="s-about-img p-relative  wow fadeInLeft animated"
                data-animation="fadeInLeft"
                data-delay=".4s"
              >
                <div div className="about-text second-about">
                  <span>15</span>
                  <p>Years of Experience</p>
                </div>
                <img src={Img} alt="img" />
                
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content  wow fadeInRight  animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                  <h5>About Us</h5>
                  <h2>I do nails. What's your superpower?</h2>
                </div>
                <p>
                Bine te-am găsit! Numele meu este Flavia și ma bucur ca ai ales sa ne cunoaștem! Drumul meu in industria manichiurii a început in anul 2022, din pura curiozitate transformată in pasiune!
                </p>
                <p>
                Am investit și investesc constant in mine și in cariera mea pentru a-ti putea oferi servicii la cea mai înaltă calitate. Iubesc ceea ce fac și iubesc sa aduc bucuria unei manichiuri impecabile fiecareia dintre voi!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

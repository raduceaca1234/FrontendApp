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
                <img src={Img} alt="img" />
                <div className="about-text second-about">
                  <span>15</span>
                  <p>Years of Experience</p>
                </div>
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
                  <h2>Best Way To Care Your Skin</h2>
                </div>
                <p>
                  Suspendisse et porttitor leo. Sed porttitor dui sit amet
                  luctus bibendum. Sed pulvinar diam lacus, ut elementum nisl
                  volutpat in. Nullam vitae nulla dolor. Pellentesque viverra
                  arcu ut Curabitur tempor mauris ex, eget porta tellus posuere
                  maximus.
                </p>
                <p>
                  Nulla nisl ligula, efficitur eget ipsum ac, luctus elementum
                  risus. Phasellus venenatis turpis eget nulla porttitor varius.
                  Ut ut lorem commodo, aliquet augue sit amet, luctus elit.
                  Curabitur tempor mauris ex, eget porta metus imperdiet ac.
                  Mauris aliquet ante sit amet rhoncus semper.
                </p>
                <div className="slider-btn mt-20">
                  <Link to="/about" className="btn ss-btn smoth-scroll">
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

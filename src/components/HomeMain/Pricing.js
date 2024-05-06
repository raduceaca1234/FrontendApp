import BGImg5 from "../../assets/img/bg/price-bg.png";
import { Link } from "react-router-dom";
import React from "react";

const Pricing = () => {
  return (
    <>
      <section
        id="pricing"
        className="pricing-area pb-60 fix p-relative"
        style={{
          backgroundImage: `url(${BGImg5})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>Choose Package</h5>
                <h2>Our Pricing Plan</h2>
              </div>
            </div>
          </div>
          <div className="row pcolor">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-box pricing-box2 text-center mb-60">
                <div className="pricing-head">
                  <h3>Comfort Relax</h3>
                  <div className="price-count">
                    <h2>
                      $29.99 <span>/ Monthly</span>
                    </h2>
                    <p>
                      Proin vehicula elit a dui rutrum, ac posuere magna auctor.
                    </p>
                  </div>
                  <hr />
                </div>
                <div className="pricing-body mt-20 mb-30 text-left text-pink">
                  <ul>
                    <li>
                      Aliquam quis justo at lorem{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Fusce sodales, urna et tempus{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Vestibulum blandit lorem quis{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Orci varius natoque penatibus{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Aliquam a nisl congue, auctor{" "}
                      <i className="fa fa-check"></i>
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <Link to="/contact" className="btn ss-btn">
                    Choose Plan
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-box pricing-box2 active text-center mb-60">
                <div className="pricing-head">
                  <h3>Premium Spa</h3>
                  <div className="price-count">
                    <h2>
                      $39.99 <span>/ Monthly</span>
                    </h2>
                    <p>
                      Proin vehicula elit a dui rutrum, ac posuere magna auctor.
                    </p>
                  </div>
                  <hr />
                </div>

                <div className="pricing-body mt-20 mb-30 text-left text-blue">
                  <ul>
                    <li>
                      Aliquam quis justo at lorem{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Fusce sodales, urna et tempus{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Vestibulum blandit lorem quis{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Orci varius natoque penatibus{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Aliquam a nisl congue, auctor{" "}
                      <i className="fa fa-check"></i>
                    </li>
                  </ul>
                </div>

                <div className="pricing-btn">
                  <Link to="/contact" className="btn ss-btn">
                    Choose Plan
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricing-box pricing-box2 text-center mb-60">
                <div className="pricing-head">
                  <h3>Luxury Retreat</h3>
                  <div className="price-count">
                    <h2>
                      $49.99 <span>/ Monthly</span>
                    </h2>
                    <p>
                      Proin vehicula elit a dui rutrum, ac posuere magna auctor.
                    </p>
                  </div>
                  <hr />
                </div>
                <div className="pricing-body mt-20 mb-30 text-left text-orange">
                  <ul>
                    <li>
                      Aliquam quis justo at lorem{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Fusce sodales, urna et tempus{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Vestibulum blandit lorem quis{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Orci varius natoque penatibus{" "}
                      <i className="fa fa-check"></i>
                    </li>
                    <li>
                      Aliquam a nisl congue, auctor{" "}
                      <i className="fa fa-check"></i>
                    </li>
                  </ul>
                </div>
                <div className="pricing-btn">
                  <Link to="/contact" className="btn ss-btn">
                    Choose Plan
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

export default Pricing;

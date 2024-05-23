import { Link } from "react-router-dom";
import React, { useState } from "react";
import Img1 from "../../assets/img/logo/logo.png";

const Main = () => {
  const [mobile, setmobile] = useState(false);
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [show3, setshow3] = useState(false);

  return (
    <>
      <header className="header-area header-three">
        <div id="header-sticky" className="menu-area">
          <div className="container">
            <div className="second-menu">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <Link to="/">
                      <img src={Img1} alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                  <div className="main-menu text-right text-xl-right">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-sub">
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/service">Services</Link>
                        </li>
                        <li className="has-sub">
                          <Link to="#">Pages</Link>
                          <ul>
                            <li>
                              <Link to="/gallery">Gallery</Link>
                            </li>
                            <li>
                              <Link to="/team">Team</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block mt-25 mb-25 text-right text-xl-right">
                  <div className="login">
                    <ul>
                      <li>
                        <div className="second-header-btn">
                          <Link to="/contact" className="btn">
                            Book Appointment
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile-menu mean-container">
                    <div className="mean-bar">
                      <Link
                        to="#nav"
                        className={`meanmenu-reveal ${mobile && "meanclose"}`}
                        onClick={() =>
                          setmobile(mobile === true ? false : true)
                        }
                        style={{
                          right: "0",
                          left: "auto",
                          textAlign: "center",
                          textIndent: "0px",
                          fontSize: "18px",
                        }}
                      >
                        {mobile ? (
                          "X"
                        ) : (
                          <>
                            <span>
                              <span>
                                <span></span>
                              </span>
                            </span>
                          </>
                        )}
                      </Link>
                      <nav className="mean-nav">
                        {mobile && (
                          <ul style={{ display: mobile ? "block" : "none" }}>
                            <li className="has-sub">
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/about/">About Us</Link>
                            </li>

                            <li>
                              <Link to="/service">Services</Link>
                            </li>
                            <li className="has-sub">
                              <Link to="#">Pages</Link>
                              <ul style={{ display: show2 ? "block" : "none" }}>
                                <li>
                                  <Link to="/gallery">Gallery</Link>
                                </li>

                                
                                <li>
                                  <Link to="/team">Team</Link>
                                </li>
                              </ul>
                              <Link
                                to="#"
                                className={`mean-expand ${
                                  show2 && "mean-clicked"
                                }`}
                                onClick={() =>
                                  setshow2(show2 === true ? false : true)
                                }
                                style={{ fontSize: "18px" }}
                              >
                                +
                              </Link>
                            </li>
                            <li className="mean-last">
                              <Link to="/contact">Contact</Link>
                            </li>
                          </ul>
                        )}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Main;

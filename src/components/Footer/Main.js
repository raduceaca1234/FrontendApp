import { Link } from "react-router-dom";
import React from "react";
import BGImg from "../../assets/img/bg/footer-bg.png";
import Img1 from "../../assets/img/logo/f_logo.png";
import Img2 from "../../assets/img/icon/ft-icon01.png";
import Footer from "../../assets/img/icon/ft-icon02.png";
import Footer1 from "../../assets/img/icon/ft-icon03.png";

const Main = () => {
  return (
    <>
      <footer className="footer-bg footer-p pt-90" style={{ backgroundColor: "#252525", backgroundImage: `url(${BGImg})` }}>
        <div className="footer-top">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title mb-40">
                    <img src={Img1} alt="logo" />
                  </div>
                  <div className="footer-link">
                    <p>
                      Mauris non nisi semper, lacinia neque in, dapibus leo.
                      Curabitur sagittis libero tincidunt tempor finibus. Mauris
                      at dignissim ligula, nec tristique orci.Quisque vitae
                      metus.
                    </p>
                    <div className="f-contact">
                      <ul>
                        <li>
                          <div className="contact-box">
                            <div className="icon">
                              <img src={Img2} alt="logo" />
                            </div>
                            <div className="text">
                              <strong>Monday - Saturday:</strong>
                              <p>9:00am - 10:00pm</p>
                              <strong>Monday - Saturday:</strong>
                              <p>9:00am - 10:00pm</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Other Links</h2>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/"> Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/service">Services</Link>
                      </li>
                      <li>
                        <Link to="/gallery"> Project</Link>
                      </li>
                      <li>
                        <Link to="/team">Our Team</Link>
                      </li>
                      <li>
                        <Link to="/blog">Latest Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Our Services</h2>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="#"> Facials</Link>
                      </li>
                      <li>
                        <Link to="#">Body Treatments</Link>
                      </li>
                      <li>
                        <Link to="#"> Mineral Baths</Link>
                      </li>
                      <li>
                        <Link to="#">Waxing</Link>
                      </li>
                      <li>
                        <Link to="#">Massage</Link>
                      </li>
                      <li>
                        <Link to="#">Geothermal Spa</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-sm-6">
                <div className="footer-widget mb-30">
                  <div className="f-widget-title">
                    <h2>Subscribe Now !</h2>
                  </div>
                  <div className="footer-link">
                    <div
                      className="subricbe p-relative"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      <form
                        action="news-mail.php"
                        method="post"
                        className="contact-form "
                      >
                        <input
                          type="text"
                          id="email2"
                          name="email2"
                          className="header-input"
                          placeholder="Your Email..."
                          required
                        />
                        <button className="btn header-btn">
                          <i className="fas fa-location-arrow"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="footer-social mt-10">
                  <a href="https://www.facebook.com/" title="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com" title="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row align-items-center copyright-wrap">
              <div className="col-lg-6">
                <div className="copy-text">
                  Copyright &copy; 2022 <Link to="#">Fallspa</Link>. All rights
                  reserved.
                </div>
              </div>
              <div className="col-lg-6">
                <div className="copay-contact">
                  <ul>
                    <li>
                      <div className="c-contact">
                        <div className="icon">
                          <img src={Footer} alt="img" />
                        </div>
                        <div className="text">
                          <span>info@wellspa.com</span>
                          <h3> Our Email:</h3>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="c-contact">
                        <div className="icon">
                          <img src={Footer1} alt="img" />
                        </div>
                        <div className="text">
                          <span>+91 598 9874 987</span>
                          <h3>Call Now:</h3>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Main;

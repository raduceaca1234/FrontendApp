import React from 'react'
import { Link } from 'react-router-dom';
import BGImg from "../../assets/img/slider/slider_bg.png";

function Welness() {
    return (
        <>
            <section id="home" className="slider-area fix p-relative">
                <div className="slider-active" style={{ background: "#00173c" }}>
                    <div className="single-slider slider-bg d-flex align-items-center" style={{ backgroundSize: "cover", backgroundImage: `url(${BGImg})`, }}>
                        <div className="container">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="slider-content s-slider-content mt-20">
                                        <h5 data-animation="fadeInUp" data-delay=".4s">
                                            Flavia Rusu Nail Technician{" "}
                                        </h5>
                                        <h2 data-animation="fadeInUp" data-delay=".4s">
                                            Let your nails do the talking
                                        </h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">
                                        Providing high-quality manicures and pedicures, which includes removing old nail polish from fingernails and toenails, cleaning nails, shaping the ends of nails, pushing back cuticles, and applying new polish based on clients' preferences. Applying artificial nails.
                                        </p>

                                        <div className="slider-btn mt-30">
                                            <Link to="/about" className="btn ss-btn mr-15">
                                                Discover More
                                            </Link>
                                            <Link to="/contact" className="btn ss-btn active">
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 p-relative"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welness
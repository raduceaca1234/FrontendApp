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
                                            Spa & Welness Salon{" "}
                                        </h5>
                                        <h2 data-animation="fadeInUp" data-delay=".4s">
                                            Make Your Skin
                                            <br />
                                            Shine & Glowing
                                        </h2>
                                        <p data-animation="fadeInUp" data-delay=".6s">
                                            Donec vitae libero non enim placerat eleifend aliquam
                                            erat volutpat. Curabitur diam ex, dapibus purus sapien,
                                            cursus sed nisl tristique.
                                        </p>

                                        <div className="slider-btn mt-30">
                                            <Link to="/contact" className="btn ss-btn mr-15">
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
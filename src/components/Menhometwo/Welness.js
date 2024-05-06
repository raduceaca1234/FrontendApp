import { Link } from "react-router-dom";
import React, { useState } from "react";
import Slider from "react-slick";
import BGImg from "../../assets/img/slider/slider_img02.png";
import BGImg1 from "../../assets/img/slider/slider_bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button"
            className={className}
            style={{ ...style }}
            onClick={onClick}>
            {" "}
            <FontAwesomeIcon icon={faAngleLeft} />
        </button>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button type="button" className={className} style={{ ...style }} onClick={onClick}>
            {" "}
            <FontAwesomeIcon icon={faAngleRight} />
        </button>
    );
}

function Welness() {

    const [ytshow, setytshow] = useState();

    const home = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <section id="home" className="slider-area fix p-relative">
                <Slider className="slider-active" {...home}>
                    <div className="col-xl-2">
                        <div className="single-slider slider-bg d-flex align-items-center" style={{ backgroundImage: `url(${BGImg})` }}>
                            <div className="container">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-lg-6 col-md-7">
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
                                                <Link
                                                    to="/contact"
                                                    className="btn ss-btn mr-15"
                                                    data-animation="fadeInUp"
                                                    data-delay=".8s"
                                                >
                                                    Discover More
                                                </Link>
                                                <Link
                                                    to="#"
                                                    onClick={() => setytshow(true)}
                                                    className="video-i popup-video"
                                                    data-animation="fadeInUp"
                                                    data-delay=".8s"
                                                >
                                                    <i className="fas fa-play"></i> Our Intro Video!
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-5 p-relative"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2">
                        <div
                            className="single-slider slider-bg d-flex align-items-center"
                            style={{
                                backgroundSize: "cover",
                                backgroundImage: `url(${BGImg1})`,
                            }}
                        >
                            <div className="container">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-lg-6 col-md-7">
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
                                                <Link
                                                    to="/contact"
                                                    className="btn ss-btn mr-15"
                                                    data-animation="fadeInUp"
                                                    data-delay=".8s"
                                                >
                                                    Discover More
                                                </Link>
                                                <Link
                                                    to="#"
                                                    onClick={() => setytshow(true)}
                                                    className="video-i popup-video"
                                                    data-animation="fadeInUp"
                                                    data-delay=".8s"
                                                >
                                                    <i className="fas fa-play"></i> Our Intro Video!
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-5 p-relative"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>

            {ytshow && (
                <>
                    <div className="mfp-bg mfp-ready"></div>
                    <div
                        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
                        tabindex="-1"
                        style={{ overflow: "hidden" }}
                    >
                        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                            <div className="mfp-content">
                                <div className="mfp-iframe-scaler">
                                    <button
                                        title="Close (Esc)"
                                        type="button"
                                        className="mfp-close"
                                        onClick={() => setytshow(false)}
                                    >
                                        ×
                                    </button>
                                    <iframe
                                        className="mfp-iframe"
                                        src="//www.youtube.com/embed/vKSA_idPZkc?autoPlay=1"
                                        frameborder="0"
                                        allowfullscreen=""
                                    ></iframe>
                                </div>
                            </div>
                            <div className="mfp-preloader">Loading...</div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Welness;

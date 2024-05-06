import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Img from "../../../assets/img/bg/quote_bg.png";
import BlogSidebar from "../../HomeMain/BlogSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;

    return (
      <button type="button" className={className} style={{ ...style }} onClick={onClick}>{" "}
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    );
  }
  
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button type="button" className={className} style={{ ...style }} onClick={onClick}>{" "}
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    );
  }
  

function First() {

    const [ytshow, setytshow] = useState();

    const blog = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 900,
      autoPlay: true,
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
            <section className="inner-blog pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="bsingle__post mb-50">
                                <div className="bsingle__post-thumb">
                                    <img src="assets/img/blog/inner_b1.jpg" alt="" />
                                </div>
                                <div className="bsingle__content">
                                    <div className="meta-info">
                                        <ul>
                                            <li>
                                                <i className="fa fa-user"></i>By Zcube
                                            </li>
                                            <li>
                                                <i className="fa fa-calendar-alt"></i> 24th March 2021
                                            </li>
                                        </ul>
                                    </div>
                                    <h2>
                                        <Link to="/blog-details">
                                            Lorem ipsum dolor sit amet, consectetur cing elit, sed do
                                            eiusmod tempor.
                                        </Link>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis
                                        aute irure dolor in reprehenderit in voluptate velit esse.
                                    </p>
                                    <div className="blog__btn">
                                        <Link to="#" className="btn">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bsingle__post mb-50">
                                <div className="bsingle__post-thumb video-p">
                                    <img src="assets/img/blog/inner_b2.jpg" alt="" />
                                    <Link
                                        to="#"
                                        onClick={() => setytshow(true)}
                                        className="video-i popup-video"
                                    >
                                        <i className="fas fa-play"></i>
                                    </Link>
                                </div>
                                <div className="bsingle__content">
                                    <div className="meta-info">
                                        <ul>
                                            <li>
                                                <i className="fa fa-user"></i>By Zcube
                                            </li>
                                            <li>
                                                <i className="far fa-comments"></i>35 Comments
                                            </li>
                                        </ul>
                                    </div>
                                    <h2>
                                        <Link to="/blog-details">
                                            There are many variations passages of like consectetur
                                            lorem ipsum available.
                                        </Link>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis
                                        aute irure dolor in reprehenderit in voluptate velit esse.
                                    </p>
                                    <div className="blog__btn">
                                        <Link to="#" className="btn">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bsingle__post mb-50">
                                <Slider className="bsingle__post-thumb blog-active" {...blog}>
                                    <div className="slide-post">
                                        <img src="assets/img/blog/inner_b3.jpg" alt="" />
                                    </div>
                                    <div className="slide-post">
                                        <img src="assets/img/blog/inner_b2.jpg" alt="" />
                                    </div>
                                    <div className="slide-post">
                                        <img src="assets/img/blog/inner_b1.jpg" alt="" />
                                    </div>
                                </Slider>
                                <div className="bsingle__content">
                                    <div className="meta-info">
                                        <ul>
                                            <li>
                                                <i className="fa fa-user"></i>By Zcube
                                            </li>
                                            <li>
                                                <i className="fa fa-calendar-alt"></i> 24th March 2021
                                            </li>
                                        </ul>
                                    </div>
                                    <h2>
                                        <Link to="/blog-details">
                                            I must explain to you how all this mistaken idea of
                                            denouncing pleasure.
                                        </Link>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis
                                        aute irure dolor in reprehenderit in voluptate velit esse.
                                    </p>
                                    <div className="blog__btn">
                                        <Link to="#" className="btn">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bsingle__post mb-50">
                                <div className="bsingle__post-thumb embed-responsive embed-responsive-16by9">
                                    <iframe
                                        height="300"
                                        allow="autoPlay"
                                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/547295505&color=%23ff5500&auto_play=fase&hide_related=fase&show_comments=true&show_user=true&show_reposts=fase&show_teaser=true&visual=true"
                                    ></iframe>
                                </div>
                                <div className="bsingle__content">
                                    <div className="meta-info">
                                        <ul>
                                            <li>
                                                <i className="fa fa-user"></i>By Zcube
                                            </li>
                                            <li>
                                                <i className="fa fa-calendar-alt"></i> 24th March 2021
                                            </li>
                                        </ul>
                                    </div>
                                    <h2>
                                        <Link to="/blog-details">
                                            There are many variations passages of like consectetur
                                            lorem ipsum available.
                                        </Link>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis
                                        aute irure dolor in reprehenderit in voluptate velit esse.
                                    </p>
                                    <div className="blog__btn">
                                        <Link to="#" className="btn">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bsingle__post mb-50">
                                <div className="bsingle__content">
                                    <div className="meta-info">
                                        <ul>
                                            <li>
                                                <i className="fa fa-user"></i>By Zcube
                                            </li>
                                            <li>
                                                <i className="fa fa-calendar-alt"></i> 24th March 2021
                                            </li>
                                        </ul>
                                    </div>
                                    <h2>
                                        <Link to="/blog-details">
                                            On the other hand, we denounce with of righteous
                                            indignation and dislike men.
                                        </Link>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis
                                        aute irure dolor in reprehenderit in voluptate velit esse.
                                    </p>
                                    <div className="blog__btn">
                                        <Link to="#" className="btn">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bsingle__post mb-50">
                                <div
                                    className="bsingle__content quote-post"
                                    style={{ backgroundImage: `url(${Img})` }}
                                >
                                    <div className="meta-info">
                                        <ul>
                                            <li>
                                                <i className="fa fa-user"></i>By Zcube
                                            </li>
                                            <li>
                                                <i className="fa fa-calendar-alt"></i> 24th March 2021
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="quote-icon">
                                        <img src="assets/img/icon/blockquote.png" alt="" />
                                    </div>
                                    <h2>
                                        <Link to="/blog-details">
                                            We denounce with of righteous one indignation and dislike
                                            men.
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                            <div className="pagination-wrap mb-50">
                                <nav>
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link to="#">
                                                <i className="fas fa-angle-double-left"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item active">
                                            <Link to="#">1</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#">2</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#">3</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#">...</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#">10</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link to="#">
                                                <i className="fas fa-angle-double-right"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
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
    )
}

export default First
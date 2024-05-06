import { Link } from "react-router-dom";
import Slider from "react-slick";
import React from "react";

function Doctor() {

    const data = [
        {
          id: 1,
          img: "assets/img/team/team01.png",
          name: "Howard Holmes",
        },
        {
          id: 2,
          img: "assets/img/team/team02.png",
          name: "Ella Thompson",
        },
        {
          id: 3,
          img: "assets/img/team/team03.png",
          name: "Vincent Cooper",
        },
        {
          id: 4,
          img: "assets/img/team/team01.png",
          name: "Howard Holmes",
        },
        {
          id: 5,
          img: "assets/img/team/team02.png",
          name: "Danielle Bryant",
        },
        {
          id: 6,
          img: "assets/img/team/team03.png",
          name: "Vincent Cooper",
        },
        {
          id: 7,
          img: "assets/img/team/team01.png",
          name: "Howard Holmes",
        },
        {
          id: 8,
          img: "assets/img/team/team02.png",
          name: "Howard Holmes",
        },
      ];
      const doctor = {
        initialIndex: 4,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        autoPlay: true,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
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
            <section className="team-area2 fix p-relative pt-105 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-relative">
                            <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                <h5>Our Doctor</h5>
                                <h2>Best Expert Dentist</h2>
                            </div>
                        </div>
                    </div>
                    <Slider className="row team-active" {...doctor}>
                        {data.map((item) => (
                            <div className="col-xl-4">
                                <div className="single-team mb-40">
                                    <div className="team-thumb">
                                        <div className="brd">
                                            <img src={item.img} alt="img" />
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h4>
                                            <Link to="/team-details">{item.name}</Link>
                                        </h4>
                                        <p>Dentist</p>
                                        <div className="team-social">
                                            <ul>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    {" "}
                                                    <Link to="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab fa-instagram"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Doctor
import Slider from "react-slick";
import { Link } from "react-router-dom";
import React from "react";
import BGImg4 from "../../assets/img/bg/product-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Img1 from "../../assets/img/shop/img1.jpg";
import Img2 from "../../assets/img/shop/img2.jpg";
import Img3 from "../../assets/img/shop/img3.jpg";
import Img4 from "../../assets/img/shop/img4.jpg";
import Img5 from "../../assets/img/shop/img5.jpg";
import Img6 from "../../assets/img/shop/img6.jpg";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      {" "}
      <FontAwesomeIcon icon={faAngleLeft} />
    </button>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      {" "}
      <FontAwesomeIcon icon={faAngleRight} />
    </button>
  );
}
const data = [
  {
    id: 1,
    img: "assets/img/shop/img1.jpg",
    name: "Balancing Gel",
  },
  {
    id: 2,
    img: "assets/img/shop/img2.jpg",
    name: "Beauty Cream",
  },
  {
    id: 3,
    img: "assets/img/shop/img3.jpg",
    name: "Dry Skin",
  },
  {
    id: 4,
    img: "assets/img/shop/img4.jpg",
    name: "Fairness Cream",
  },
  {
    id: 5,
    img: "assets/img/shop/img5.jpg",
    name: "Agrofarm Onion",
  },
  {
    id: 6,
    img: "assets/img/shop/img1.jpg",
    name: "Agrofarm Onion",
  },
];
const Product = () => {
  const option = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 900,
    autoPlay: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
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
      <section
        id="editor-choice"
        className="product-slider pt-120 pb-90 fix"
        style={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          background: `url(${BGImg4})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 text-center">
                <h5>Our Products</h5>
                <h2>Best For Skin Care</h2>
              </div>
            </div>
          </div>
          <Slider className="row home-blog-active" {...option}>
            {data.map((item) => (
              <div className="col-lg-4 col-md-12">
                <div className="product mb-40">
                  <div className="product__img">
                    <Link to="/shop-details">
                      <img src={item.img} alt="" />
                    </Link>
                    <div className="product-action text-center">
                      <Link to="/shop-details">Add Cart</Link>
                    </div>
                  </div>
                  <div className="product__content pt-30">
                    <h4 className="pro-title">
                      <Link to="/shop-details">{item.name}</Link>
                    </h4>
                    <div className="price">
                      <span className="old-price">$20</span>
                      <span>$15</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Product;

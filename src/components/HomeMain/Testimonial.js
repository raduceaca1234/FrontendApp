import BGImg7 from "../../assets/img/bg/test-bg.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import React from "react";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      img: "assets/img/testimonial/testi_avatar.png",
      icon: "assets/img/testimonial/qt-icon.png",
      name: "Alexandra",
      description: "I recently had an amazing pedicure experience at this salon! 😍 The technician was not only highly professional, but also incredibly polite, friendly, and funny. It made the whole experience so enjoyable!"
    },
    {
      id: 2,
      img: "assets/img/testimonial/testi_avatar_02.png",
      icon: "assets/img/testimonial/qt-icon.png",
      name: "Anamaria",
      description: "This place is fully amazing. The vibe is chill, amd the quality of the manicure is on top!!!! Happy with my nails! Definitely recommend ! Thank you 🤍"

    },
    {
      id: 3,
      img: "assets/img/testimonial/testi_avatar.png",
      icon: "assets/img/testimonial/qt-icon.png",
      name: "Gabriela",
      description: "Great manicure services, the salon is much better than others in Cluj. Very friendly staff, excellent price-quality ratio. Online appointments are a bonus to their services."

    },
    {
      id: 4,
      img: "assets/img/testimonial/testi_avatar.png",
      icon: "assets/img/testimonial/qt-icon.png",
      name: "Iuliana",
      description: "The best place in town, I was treated both with professionalism as well as amiability. 100% would recommend it !"

    },
    {
      id: 5,
      img: "assets/img/testimonial/testi_avatar.png",
      icon: "assets/img/testimonial/qt-icon.png",
      name: "Ioana",
      description: "From the moment I walked in, I felt welcomed and comfortable. The technician took the time to listen to my preferences and ensured that I was completely satisfied with the service. Their attention to detail and expertise were truly impressive."

    },
    {
      id: 6,
      img: "assets/img/testimonial/testi_avatar.png",
      icon: "assets/img/testimonial/qt-icon.png",
      name: "Diaa",
      description: "I highly recommend this salon to anyone in need of a pedicure. The combination of their professionalism, friendly demeanor, and top-notch service creates an experience that is both relaxing and enjoyable."

    },
  ];
  const testimonial = {
    initialIndex: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    autoPlay: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
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
      <section
        className="testimonial-area pt-120 p-relative fix"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${BGImg7})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                className="section-title mb-50 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>Our Testimonial</h5>
                <h2>What Our Clients Says</h2>
                <p className="mt-15">
                  Nullam posuere eros ex, vitae consequat ipsum semper cursus.
                  In ut commodo eros. Vestibulum sed elit id orci rhoncus. Duis
                  quis nunc eu augue efficitur suscipit.
                </p>
                <div className="slider-btn">
                        <button
                          className="btn ss-btn"
                          data-animation="fadeInRight"
                          data-delay=".8s"
                          type="submit"
                        >
                          <Link to='/login' style={{color:"#fff"}} >Leave a comment</Link>
                        </button>
                      </div>
              </div>
            </div>
            <div className="col-lg-8">
              <Slider className="testimonial-active" {...testimonial}>
                {data.map((item) => (
                  <div className="single-testimonial">
                    <div className="testi-author">
                      <img src={item.img} alt="img" />
                      <div className="ta-info">
                        <h6>{item.name}</h6>
                        <span>Client</span>
                      </div>
                    </div>
                    <p>
                      {item.description}
                    </p>

                    <div className="qt-img">
                      <img src={item.icon} alt="img" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;

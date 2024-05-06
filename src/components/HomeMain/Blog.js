import BGImg8 from "../../assets/img/bg/blog-bg.png";
import { Link } from "react-router-dom";
import React from "react";

const Blog = () => {
  const data = [
    {
      id: 1,
      img: "assets/img/blog/inner_b1.jpg",
      name: "Cras accumsan nulla nec lacus ultricies placerat.",
    },
    {
      id: 2,
      img: "assets/img/blog/inner_b2.jpg",
      name: "Dras accumsan nulla nec lacus ultricies placerat.",
    },
    {
      id: 3,
      img: "assets/img/blog/inner_b3.jpg",
      name: "Seas accumsan nulla nec lacus ultricies placerat.",
    },
  ];
  return (
    <>
      <section
        id="blog"
        className="blog-area p-relative fix pt-90 pb-90"
        style={{
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${BGImg8})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div
                className="section-title center-align mb-50 text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>Our Blog</h5>
                <h2>Latest Blog & News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {data.map((item) => (
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-post2 hover-zoomin mb-30 wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="blog-thumb2">
                    <Link to="/blog-details">
                      <img src={item.img} alt="img" />
                    </Link>
                  </div>
                  <div className="blog-content2">
                    <div className="date-home">Massage</div>
                    <div className="b-meta">
                      <div className="meta-info">
                        <ul>
                          <li>
                            <i className="fa fa-calendar-alt"></i> 24th March
                            2021
                          </li>
                          <li>
                            <i className="fa fa-user"></i> By Admin
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h4>
                      <Link to="/blog-details">{item.name} </Link>
                    </h4>
                    <div className="blog-btn">
                      <Link to="/blog-details">
                        Read More <i className="far fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

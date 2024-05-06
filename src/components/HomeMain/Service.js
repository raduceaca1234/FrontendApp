import { Link } from "react-router-dom";
import BGImg2 from "../../assets/img/bg/services-bg.png";
import React from "react";
import Img from "../../assets/img/features/services-img-details2.png";

const Service = () => {
  const data = [
    {
      id: 1,
      img: "assets/img/icon/fe-icon01.png",
      name: "Facials",
      pera: "Cras id aliquam leo. Vestibulum laoreet, mi sit amet tristique tincidunt nec laoreet.",
    },
    {
      id: 2,
      img: "assets/img/icon/fe-icon05.png",
      name: "Mineral Baths",
      pera: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
    },
    {
      id: 3,
      img: "assets/img/icon/fe-icon07.png",
      name: "Massage",
      pera: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
    },
  ];
  const dataone = [
    {
      id: 1,
      img: "assets/img/icon/fe-icon04.png",
      name: "Body Treatments",
      pera: "Cras id aliquam leo. Vestibulum laoreet, mi sit amet tristique tincidunt nec laoreet.",
    },
    {
      id: 2,
      img: "assets/img/icon/fe-icon06.png",
      name: "Waxing",
      pera: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
    },
    {
      id: 3,
      img: "assets/img/icon/fe-icon08.png",
      name: "MassGeothermal Spaage",
      pera: "Aenean eleifend turpis tellus, nec laoreet metus elementum ac.",
    },
  ];
  return (
    <section
      id="service-details2"
      className="service-details-two pb-105 p-relative"
      style={{
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${BGImg2})`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-title center-align mb-50 text-center">
              <h5>Our Services</h5>
              <h2>What We Provide</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="about-content s-about-content">
              <ul className="sr-tw-ul ">
                {data.map((item) => (
                  <li>
                    <div className="icon-right">
                      <img src={item.img} alt="icon01" />
                    </div>
                    <div className="text">
                      <h4>
                        <Link to="/service-details">{item.name}</Link>
                      </h4>
                      <p>{item.pera}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 text-center d-none d-lg-block">
            <div className="sd-img">
              <img src={Img} alt="img" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="about-content s-about-content">
              <ul className="sr-tw-ul sr-thr-ul">
                {dataone.map((item) => (
                  <li>
                    <div className="icon">
                      <img src={item.img} alt="icon01" />
                    </div>
                    <div className="text pt-10">
                      <h4>
                        <Link to="/service-details">{item.name}</Link>
                      </h4>
                      <p>{item.pera}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

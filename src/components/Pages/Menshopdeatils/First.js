import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img1 from "../../../assets/img/shop/details/thumb1.jpg";
import Img2 from "../../../assets/img/shop/details/thumb2.jpg";
import Img3 from "../../../assets/img/shop/details/thumb3.jpg";
import Img4 from "../../../assets/img/shop/details/large1.jpg";
import Img5 from "../../../assets/img/shop/details/large2.jpg";
import Img6 from "../../../assets/img/shop/details/large3.jpg";

function First() {

    const [img, setImg] = useState(true);
    const [img1, setImg1] = useState(false);
    const [img2, setImg2] = useState(false);

    return (
        <>
            <section className="shop-banner-area pt-120 pb-90" data-animation="fadeInUp animated" data-delay=".2s">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="shop-thumb-tab mb-30">
                                <ul className="nav" id="myTab2" role="tablist">
                                    <li className="nav-item">
                                        <Link
                                            to="#home"
                                            className={`nav-link ${img ? "actvie" : ""}`}
                                            onClick={() => {
                                                setImg(true);
                                                setImg1(false);
                                                setImg2(false);
                                            }}
                                            id="home-tab"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-selected="true"
                                        >
                                            <img src={Img1} alt="" />{" "}
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="#profile"
                                            className={`nav-link ${img1 ? "actvie" : ""}`}
                                            onClick={() => {
                                                setImg1(true);
                                                setImg2(false);
                                                setImg(false);
                                            }}
                                            id="profile-tab"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            <img src={Img2} alt="" />
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="#profile1"
                                            className={`nav-link ${img2 ? "actvie" : ""}`}
                                            onClick={() => {
                                                setImg2(true);
                                                setImg(false);
                                                setImg1(false);
                                            }}
                                            id="profile-tab2"
                                            data-bs-toggle="tab"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            <img src={Img3} alt="" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="product-details-img mb-30">
                                <div className="tab-content" id="myTabContent2">
                                    {img && (
                                        <div
                                            className="tab-pane fade  active show"
                                            id="home"
                                            role="tabpanel"
                                        >
                                            <div className="product-large-img">
                                                <img src={Img4} alt="" />
                                            </div>
                                        </div>
                                    )}
                                    {img1 && (
                                        <div
                                            className="tab-pane fade active show"
                                            id="profile"
                                            role="tabpanel"
                                        >
                                            <div className="product-large-img">
                                                <img src={Img5} alt="" />
                                            </div>
                                        </div>
                                    )}
                                    {img2 && (
                                        <div
                                            className="tab-pane fade active show"
                                            id="profile1"
                                            role="tabpanel"
                                        >
                                            <div className="product-large-img">
                                                <img src={Img6} alt="" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="product-details mb-30">
                                <div className="product-details-title">
                                    <p>Workstead</p>
                                    <h1>Helios Piranho Lamp</h1>
                                    <div className="price details-price pb-30 mb-20">
                                        <span>$700.00</span>
                                        <span className="old-price">$820.00</span>
                                    </div>
                                </div>
                                <p>
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less
                                    normal distribution of letters, as opposed to using 'Content
                                    here, content here', making it look like readable English.
                                </p>
                                <div className="product-cat mt-30 mb-30">
                                    <span>Category: </span>
                                    <Link to="#">furniture,</Link>
                                    <Link to="#">decor</Link>
                                </div>
                                <div className="product-details-action">
                                    <form action="#">
                                        <div className="plus-minus">
                                            <div className="cart-plus-minus">
                                                <input type="text" value="1" />
                                            </div>
                                        </div>
                                        <button className="btn btn-black" type="submit">
                                            add to cart
                                        </button>
                                    </form>
                                </div>
                                <div className="product-social mt-45">
                                    <a href="https://www.facebook.com/" title="Facebook">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.instagram.com/" title="Instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://twitter.com" title="Twitter">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.youtube.com/" title="Youtube">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default First
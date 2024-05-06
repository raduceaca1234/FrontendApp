import React from 'react'
import { Link } from "react-router-dom";


function First() {

    const data = [
        {
          id: 1,
          img: "assets/img/shop/img4.jpg",
          name: "Bakari Product",
        },
        {
          id: 2,
          img: "assets/img/shop/img4.jpg",
          name: "Romada Product",
        },
        {
          id: 3,
          img: "assets/img/shop/img4.jpg",
          name: "Sikkar Product",
        },
        {
          id: 4,
          img: "assets/img/shop/img4.jpg",
          name: "Minners Product",
        },
        {
          id: 5,
          img: "assets/img/shop/img4.jpg",
          name: "Dolando Product",
        },
        {
          id: 6,
          img: "assets/img/shop/img4.jpg",
          name: "Romada Product",
        },
        {
          id: 7,
          img: "assets/img/shop/img4.jpg",
          name: "Medidove Product",
        },
        {
          id: 8,
          img: "assets/img/shop/img4.jpg",
          name: "Legend Product",
        },
        {
          id: 9,
          img: "assets/img/shop/img4.jpg",
          name: "Akari Product",
        },
      ];
    return (
        <>
            <section className="shop-area pt-120 pb-120 p-relative" data-animation="fadeInUp animated" data-delay=".2s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <h6 className="mt-20 mb-30">Showing 1–9 of 10 results</h6>
                        </div>
                        <div className="col-lg-6 col-sm-6 text-right">
                            <select name="orderby" className="orderby" aria-label="Shop order">
                                <option value="menu_order" defaultValue="selected">
                                    Default sorting
                                </option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="rating">Sort by average rating</option>
                                <option value="date">Sort by latest</option>
                                <option value="price">Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>
                            </select>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        {data.map((item) => (
                            <div className="col-lg-4 col-md-6">
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
                                        <span className="pro-cat">
                                            <Link to="#">Chair</Link>
                                        </span>
                                        <h4 className="pro-title">
                                            <Link to="/shop-details">{item.name}</Link>
                                        </h4>
                                        <div className="price">
                                            <span>$95.00</span>
                                            <span className="old-price">$120.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="pagination-wrap mt-50 text-center">
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
                        <div></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default First
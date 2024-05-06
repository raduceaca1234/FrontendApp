import { Link } from 'react-router-dom'
import React from 'react'
import Icon1 from '../../assets/img/features/banner-01.png'
import Icon2 from '../../assets/img/features/banner-02.png'
import Icon3 from '../../assets/img/features/banner-03.png'

const Feature = () => {
    return (
        <>
            <section className="feature-area p-relative fix">
                <div className="containe-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="feature-box">
                                <div className="text">
                                    <h5>Offer For Women</h5>
                                    <h3>Best Care For Women Skin & Body</h3>
                                    <Link to="/service-details">Start Now</Link>
                                </div>
                                <img src={Icon1} alt="icon01" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="feature-box">
                                <div className="text">
                                    <h5>Offer For Man</h5>
                                    <h3>Get The Best Glow With Our Man Products</h3>
                                    <Link to="/service-details">Start Now</Link>
                                </div>
                                <img src={Icon2} alt="icon01" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="feature-box">
                                <div className="text">
                                    <h5>Offer For Women</h5>
                                    <h3>Get The Best Care For Couples</h3>
                                    <Link to="/service-details">Start Now</Link>
                                </div>
                                <img src={Icon3} alt="icon01" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Feature
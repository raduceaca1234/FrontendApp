import React from 'react'
import { Link } from 'react-router-dom';


function First() {

    const data = [
        {
          id: 1,
          img: "assets/img/team/team01.png",
          name: "Flavia Rusu",
        },
        // {
        //   id: 2,
        //   img: "assets/img/team/team02.png",
        //   name: "Dawon Crisen",
        // },
        // {
        //   id: 3,
        //   img: "assets/img/team/team03.png",
        //   name: "David Suarez",
        // },
        // {
        //   id: 4,
        //   img: "assets/img/team/team04.png",
        //   name: "Gerard Peano",
        // },
        // {
        //   id: 5,
        //   img: "assets/img/team/team05.png",
        //   name: "Ostin Green",
        // },
        // {
        //   id: 6,
        //   img: "assets/img/team/team06.png",
        //   name: "Norman Colins",
        // },
        // {
        //   id: 7,
        //   img: "assets/img/team/team07.png",
        //   name: "Ostin Green",
        // },
        // {
        //   id: 8,
        //   img: "assets/img/team/team08.png",
        //   name: "Norman Colins",
        // },
      ];
    return (
        <>
            <section className="team-area fix p-relative pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        {data.map((item) => (
                            <div className="col-xl-3">
                                <div className="single-team mb-45">
                                    <div className="team-thumb">
                                        <div className="brd">
                                            <img src={item.img} alt="img" />
                                        </div>
                                    </div>
                                    <div className="team-info">
                                        <h4>
                                            <Link to="/team-details">{item.name}</Link>
                                        </h4>
                                        <p>Worker</p>
                                        <div className="team-social">
                                            <ul>
                                                <li>
                                                    <a href="https://www.facebook.com/" title="Facebook">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="https://www.instagram.com/"
                                                        title="Instagram"
                                                    >
                                                        <i className="fab fa-instagram"></i>
                                                    </a>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default First
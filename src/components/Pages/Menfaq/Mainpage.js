import React, { useState } from 'react'

function Mainpage() {
    const [activeFaq, setActiveFaq] = useState();
    const [activeFaq2, setActiveFaq2] = useState();

    const FAQ = [
        {
          id: 1,
          qty: "Breaking The Rules Using SQLite To Demo Web?",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis        nostrud exercitation ullamco laboris nisi ut aliquip",
        },
        {
          id: 2,
          qty: "Monthly Web Development Update Pragmatic Releasing?",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis        nostrud exercitation ullamco laboris nisi ut aliquip",
        },
        {
          id: 3,
          qty: "How To Use Underlined Text To Improve User Experience",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis        nostrud exercitation ullamco laboris nisi ut aliquip",
        },
        {
          id: 4,
          qty: "How To Use Underlined Text To Improve User Experience",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis        nostrud exercitation ullamco laboris nisi ut aliquip",
        },
        {
          id: 5,
          qty: "Understanding CSS Layout And The Block Formatting",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis        nostrud exercitation ullamco laboris nisi ut aliquip",
        },
      ];
    
      const FAQ2 = [
        {
          id: 6,
          qty: "Breaking The Rules Using SQLite To Demo Web?",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis        nostrud exercitation ullamco laboris nisi ut aliquip",
        },
        {
          id: 7,
          qty: "Monthly Web Development Update Pragmatic Releasing?",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis        nostrud exercitation ullamco laboris nisi ut aliquip",
        },
        {
          id: 8,
          qty: "How To Use Underlined Text To Improve User Experience",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis        nostrud exercitation ullamco laboris nisi ut aliquip",
        },
        {
          id: 9,
          qty: "How To Use Underlined Text To Improve User Experience",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis        nostrud exercitation ullamco laboris nisi ut aliquip",
        },
        {
          id: 10,
          qty: "Understanding CSS Layout And The Block Formatting",
          ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis        nostrud exercitation ullamco laboris nisi ut aliquip",
        },
      ];
    return (
        <>
            <section id="faq" className="faq-area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="faq-wrap">
                                <div className="accordion" id="accordionExample">
                                    {FAQ.map((item) => (
                                        <div className="card" key={item.id}>
                                            <div className="card-header" id="headingOnes">
                                                <h2 className="mb-0">
                                                    { }
                                                    <button
                                                        className={`faq-btn  ${item.id === activeFaq ? "" : "collapsed"
                                                            } `}
                                                        onClick={() => {
                                                            setActiveFaq(item.id);
                                                        }}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOnes"
                                                        aria-labelledby="true"
                                                        aria-activedescendant="collapseOnes"
                                                    >
                                                        {item.qty}
                                                        {item.id === activeFaq ? (
                                                            <i className="fa fa-chevron-down"></i>
                                                        ) : (
                                                            <i className="fa fa-chevron-left"></i>
                                                        )}
                                                    </button>
                                                </h2>
                                            </div>
                                            {item.id === activeFaq && (
                                                <div id="collapseOnes" className="collapse show"
                                                    aria-labelledby="headingOne1"
                                                    data-bs-parent="#accordionExample" >
                                                    <div className={`card-body ${item.id === activeFaq ? " collapsed" : ""}`}>
                                                        {item.ans}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="faq-wrap">
                                <div className="accordion" id="accordionExample1">
                                    {FAQ2.map((item) => (
                                        <div className="card" key={item.id}>
                                            <div className="card-header" id="headingfive">
                                                <h2 className="mb-0">
                                                    <button
                                                        className={`faq-btn ${item.id === activeFaq2 ? "" : "collapsed"
                                                            }`}
                                                        onClick={() => {
                                                            setActiveFaq2(item.id);
                                                        }}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapsefive"
                                                        aria-labelledby="false"
                                                        aria-activedescendant="collapsefive"
                                                    >
                                                        {item.qty}
                                                        {item.id === activeFaq2 ? (
                                                            <i className="fa fa-chevron-down"></i>
                                                        ) : (
                                                            <i className="fa fa-chevron-left"></i>
                                                        )}
                                                    </button>
                                                </h2>
                                            </div>
                                            {item.id === activeFaq2 && (
                                                <div id="collapsefive"
                                                    className="collapse show"
                                                    aria-labelledby="headingfive" data-bs-parent="#accordionExample1" >
                                                    <div className={`card-body ${item.id === activeFaq2 ? "collapsed" : ""}`}>
                                                        {item.ans}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mainpage
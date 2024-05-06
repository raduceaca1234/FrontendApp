import React, { useState } from "react";
import BGImg from "../../assets/img/bg/ap-bg.png";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState();

  const FAQ = [
    {
      id: 1,
      qty: "Vivamus rhoncus ante a ipsum imperdiet ?",
      ans: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip",
    },
    {
      id: 2,
      qty: "Integer id dolor at nisi laoreet iaculis vitae ?",
      ans: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip",
    },
    {
      id: 3,
      qty: " Donec venenatis elit dignissim, posuere ?",
      ans: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip",
    },

    {
      id: 4,
      qty: "Curabitur varius, massa sit amet egestas ?",
      ans: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip",
    },
  ];

  return (
    <>
      <section
        className="faq-area fix"
        style={{
          backgroundImage: `url(${BGImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-img text-right">
                <img
                  src="assets/img/bg/faq-img.png"
                  alt="img"
                  className="img"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title mb-50">
                <h5>FAQ</h5>
                <h2>Frequently Asked Question</h2>
              </div>
              <div className="faq-wrap">
                <div className="accordion" id="accordionExample">
                  {FAQ.map((item) => (
                    <div className="card" key={item.id}>
                      <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                          <button
                            className={`faq-btn ${
                              item.id === activeFaq ? "" : "collapsed"
                            }`}
                            onClick={() => {
                              setActiveFaq(item.id);
                            }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-labelledby="true"
                            aria-activedescendant="collapseThree"
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
                        <div
                          id="collapseThree"
                          className="collapse show"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div
                            className={`card-body ${
                              item.id === activeFaq ? "collapsed" : ""
                            }`}
                          >
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
  );
};

export default Faq;

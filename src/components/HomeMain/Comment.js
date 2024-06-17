import { useState } from 'react';
import BGImg3 from "../../assets/img/bg/ap-bg.png";
import React from "react";
import Img from "../../assets/img/bg/open-box-img.png";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../Register/toast";
import {useNavigate} from 'react-router-dom';
import { wait } from '@testing-library/user-event/dist/utils';




const Comment = () => {
  const [value, onChange] = useState('10:00');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const delay = ms => new Promise(res => setTimeout(res, ms));


  const onSubmit = (e) => {
    e.preventDefault();
    notify("We received your message successfully", "success")
    console.log("aaaaaa")
    const url = 'insert-mailchimp-action-url-here';
    console.log(email)
    fetch(`${url}&EMAIL=${email}`, { param: 'c' }, (_, data) => {
      console.log('data', data);
      console.log("aaaa")
      const { msg } = data;
 
      alert(msg);
    });
    
  };


  return (
    <>
      <section
        id="booking"
        className="booking-area p-relative pt-120 pb-120"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${BGImg3})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-bg">
                <div className="section-title center-align">
                  <h5>What do you think about our services?</h5>
                  <h2>Let Us Know</h2>
                  <p>
                  </p>
                </div>
                <form
                  onSubmit={onSubmit}
                  className="contact-form mt-30"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-name mb-20">
                        <input
                          type="text"
                          id="firstn"
                          name="firstn"
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Email"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-message mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Write a review of our services"
                        ></textarea>
                      </div>
                      <div className="slider-btn">
                        <button
                          className="btn ss-btn"
                          data-animation="fadeInRight"
                          data-delay=".8s"
                          type="submit"
                        >
                          <span>Submit Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Comment;
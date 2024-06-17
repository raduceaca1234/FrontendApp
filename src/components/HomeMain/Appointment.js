import { useState } from 'react';
import BGImg3 from "../../assets/img/bg/ap-bg.png";
import React from "react";
import Img from "../../assets/img/bg/open-box-img.png";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment';
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";


const Appointment = () => {
  const [value, onChange] = useState('10:00');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState(moment());
  const [message, setMessage] = useState('');
  const [service, setService] = useState('');


  useEffect(() => emailjs.init("go66-G00nx9GSt94v"), []);
  // const emailRef = useRef<HTMLInputElement>(any);
  // const nameRef = useRef<HTMLInputElement>(any);
  const [loading, setLoading] = useState(false);


  const onSubmit = async  (e) => {
    e.preventDefault();
    const serviceId = "service_plwdewc";
    const templateId = "template_l9dq8yb";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
       name: name,
        recipient: email,
        phone_number: phoneNumber,
        service: service,
        day: date,
        // hour: hour,
        message: message
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
                  <h5>Get In Touch</h5>
                  <h2>Get Appointment</h2>
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
                          onChange={(e) => setName(e.target.value)}
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
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                          required
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <select
                          className="custom-select"
                          id="inputGroupSelect04"
                          aria-label="Example select with button addon"
                          onChange={(e) => setService(e.target.value)}

                        >
                          <option>Select your service</option>
                          <option value="Manichiura Semipermanenta">Manichiura Semipermanenta</option>
                          <option value="Slim">Slim</option>
                          <option value="Constructie Gel 1-4">Constructie Gel 1-4</option>
                          <option value="Constructie Gel 5+">Constructie Gel 5+</option>
                          <option value="Intretinere Gel 1-4">Intretinere Gel 1-4</option>
                          <option value="Intretinere Gel 5+">Intretinere Gel 5+</option>
                          <option value="Demontare">Demontare</option>
                        </select>
                        <i className="fa fa-angle-down"></i>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="date"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                      <TimePicker defaultValue={moment()} showSecond={false} onChange={(e) => setHour(e.target.value)}/>
                      </div>
                    </div>
                    
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-message mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Write comments"
                          onChange={(e) => setMessage(e.target.value)}
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
            <div className="col-lg-6">
              <div className="opening-time">
                <div className="open-img">
                  <img src={Img} alt="icon01" />
                </div>
                <h3>Opening Hours</h3>
                <div className="text">
                  <div className="left-text">Monday to Friday:</div>
                  <div className="right-text">09:00 am – 10:00 pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
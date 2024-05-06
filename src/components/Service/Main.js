import React from 'react'
import Bredcrumb from '../HomeMain/Bredcrumb'
import Appointment from '../HomeMain/Appointment'
import Testimonial from '../HomeMain/Testimonial'
import Service from '../HomeMain/Service'

const Main = () => {
  return (
    <>
      <Bredcrumb title="Service" subtitle="Service" />
      <div className="service-main-block">
        <Service />
      </div>
      <Appointment />
      <div className="testimonial-block">
        <Testimonial />
      </div>
    </>
  )
}

export default Main
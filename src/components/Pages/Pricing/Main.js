import React from 'react'
import Bredcrumb from '../../HomeMain/Bredcrumb'
import Pricing from '../../HomeMain/Pricing'

const Main = () => {
  return (
    <>
      <Bredcrumb title="Pricing" subtitle="Pricing" />
      <div className="pricing-block">
        <Pricing />
      </div>
    </>
  )
}

export default Main